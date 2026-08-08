import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { Lang } from '@/i18n';

export const prerender = true;

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'id' } },
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const lang = (params.lang ?? 'en') as Lang;
  const posts = (await getCollection('blog'))
    .filter((p) => p.data.lang === lang && !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const base = `https://hm.cakson.my.id/${lang}`;
  const items = posts
    .map((p) => {
      const link = `${base}/blog/${p.data.slug}`;
      return `<item><title>${esc(p.data.title)}</title><link>${link}</link><guid isPermaLink="true">${link}</guid><description>${esc(p.data.description)}</description><pubDate>${p.data.date.toUTCString()}</pubDate></item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Huawei Manager Blog</title>
<link>${base}/blog</link>
<description>Guides and news about Huawei Manager.</description>
<language>${lang === 'en' ? 'en' : 'id'}</language>
${items}
</channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
