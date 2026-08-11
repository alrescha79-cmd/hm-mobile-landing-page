import type { APIRoute } from 'astro';

export const prerender = false;

const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? '';
const APPS_SCRIPT_URL = import.meta.env.FEEDBACK_APPS_SCRIPT_URL ?? '';
const APPS_SCRIPT_SECRET = import.meta.env.FEEDBACK_APPS_SCRIPT_SECRET ?? '';
const FEEDBACK_RECIPIENT = import.meta.env.FEEDBACK_RECIPIENT ?? '';
const TEST_MODE = import.meta.env.FEEDBACK_TEST_MODE === 'true';
const KV_URL = import.meta.env.KV_REST_API_URL ?? '';
const KV_TOKEN = import.meta.env.KV_REST_API_TOKEN ?? '';

const LIMIT = 3;
const MAX_AGE_MS = 2 * 60 * 60 * 1000;
const MIN_AGE_MS = 3_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResp(status: number, data: Record<string, unknown>, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
  });
}

function getSourceIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function hmacHex(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function base64UrlEncode(input: string): string {
  const encoded = btoa(
    new Uint8Array(new TextEncoder().encode(input)).reduce(
      (acc, byte) => acc + String.fromCharCode(byte),
      '',
    ),
  );
  return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function getDailyCount(key: string): Promise<number> {
  if (!KV_URL || !KV_TOKEN) {
    throw new Error('KV not configured');
  }
  const kvHeaders = { Authorization: `Bearer ${KV_TOKEN}` };
  const res = await fetch(`${KV_URL}/incr/${encodeURIComponent(key)}`, { headers: kvHeaders });
  if (!res.ok) throw new Error(`KV INCR failed: ${res.status}`);
  const body = (await res.json()) as { result?: number };
  const count = Number(body.result);
  if (count === 1) {
    const now = new Date();
    const tomorrow = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
    const ttlSeconds = Math.ceil((tomorrow.getTime() - now.getTime()) / 1000);
    await fetch(`${KV_URL}/expire/${encodeURIComponent(key)}/${ttlSeconds}`, { headers: kvHeaders });
  }
  return count;
}

export const POST: APIRoute = async ({ request }) => {
  if (!APPS_SCRIPT_URL || !APPS_SCRIPT_SECRET || !SITE_URL) {
    return jsonResp(500, { success: false, message: 'Service not configured' });
  }

  const origin = request.headers.get('origin') ?? '';

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return jsonResp(400, { success: false, message: 'Invalid JSON' });
  }
  let siteOrigin: string;
  try {
    siteOrigin = new URL(SITE_URL).origin;
  } catch {
    return jsonResp(500, { success: false, message: 'Service not configured' });
  }
  if (origin !== siteOrigin) {
    return jsonResp(403, { success: false, message: 'Forbidden' });
  }

  const botcheck = typeof body.botcheck === 'string' ? body.botcheck.trim() : '';
  if (botcheck) {
    console.log('[feedback] honeypot triggered');
    return jsonResp(200, { success: true });
  }

  const startedAt = Number(body.startedAt);
  const now = Date.now();
  if (!Number.isFinite(startedAt) || now - startedAt < MIN_AGE_MS || now - startedAt > MAX_AGE_MS) {
    console.log('[feedback] time trap triggered');
    return jsonResp(200, { success: true });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 120) : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase().slice(0, 254) : '';
  const type = typeof body.type === 'string' ? body.type.trim() : '';
  const modem = typeof body.modem === 'string' ? body.modem.trim().slice(0, 160) : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 5000) : '';

  if (!email || email.length < 3 || !EMAIL_RE.test(email)) {
    return jsonResp(400, { success: false, message: 'Invalid email' });
  }
  if (type !== 'bug' && type !== 'feature') {
    return jsonResp(400, { success: false, message: 'Invalid type' });
  }
  if (!message) {
    return jsonResp(400, { success: false, message: 'Message required' });
  }

  const ip = getSourceIp(request);
  const day = new Date().toISOString().slice(0, 10);
  const ipHash = (await sha256Hex(`${day}:${ip}:${APPS_SCRIPT_SECRET}`)).slice(0, 32);
  const rateKey = `feedback:rate:${day}:${ipHash}`;

  let count = 0;
  try {
    count = await getDailyCount(rateKey);
  } catch (e) {
    console.error('[feedback] KV error:', e);
    if (!TEST_MODE) {
      return jsonResp(500, { success: false, message: 'Service temporarily unavailable' });
    }
  }

  if (count > LIMIT && !TEST_MODE) {
    return jsonResp(429, { success: false, message: 'Daily limit reached. Try again tomorrow.' });
  }

  const requestId = crypto.randomUUID();
  const nonceBytes = new Uint8Array(32);
  crypto.getRandomValues(nonceBytes);
  const nonce = btoa(String.fromCharCode(...nonceBytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const payload = {
    requestId,
    nonce,
    timestamp: Date.now(),
    origin: siteOrigin,
    ipHash,
    name,
    email,
    type,
    modem,
    message,
    userAgent: request.headers.get('user-agent')?.slice(0, 512) ?? '',
    subject: `HM Landing \u2014 ${type === 'feature' ? 'Feature request' : 'Bug report'}${modem ? ` (${modem})` : ''}`,
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = await hmacHex(APPS_SCRIPT_SECRET, encodedPayload);

  try {
    const requestInit: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payload: encodedPayload, signature }),
      signal: AbortSignal.timeout(15_000),
      redirect: 'follow',
    };
    const res = await fetch(APPS_SCRIPT_URL, requestInit);
    const out = (await res.json().catch(() => ({}))) as { ok?: boolean; status?: string; reason?: string };

    if (res.ok && out.ok) {
      return jsonResp(200, { success: true });
    }

    console.error(`[feedback] Apps Script rejected: requestId=${requestId} status=${out.status} reason=${out.reason}`);
    return jsonResp(502, { success: false, message: 'Submission failed. Please try again.' });
  } catch (e) {
    console.error(`[feedback] Apps Script error: requestId=${requestId}`, e);
    return jsonResp(502, { success: false, message: 'Submission failed. Please try again.' });
  }
};
