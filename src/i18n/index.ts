import en from './en.json';
import id from './id.json';

export type Lang = 'en' | 'id';

const dicts: Record<Lang, typeof en> = { en, id };

export function t(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const d = dicts[lang] ?? en;
  let v: unknown = d;
  for (const part of key.split('.')) {
    if (v && typeof v === 'object' && part in v) {
      v = (v as Record<string, unknown>)[part];
    } else {
      v = undefined;
      break;
    }
  }
  if (v === undefined) {
    let f: unknown = en;
    for (const part of key.split('.')) {
      if (f && typeof f === 'object' && part in f) {
        f = (f as Record<string, unknown>)[part];
      } else {
        f = undefined;
        break;
      }
    }
    v = f;
  }
  if (typeof v !== 'string') return v as string;
  let s = v as string;
  for (const [k, val] of Object.entries(vars ?? {})) {
    s = s.replaceAll(`{{${k}}}`, String(val));
  }
  return s;
}

export function langFromPath(pathname: string): Lang {
  return pathname.startsWith('/id') ? 'id' : 'en';
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'id' : 'en');
