import type { APIRoute } from 'astro';
import type { ReleasesCache } from '@/data/types';

export const GET: APIRoute = async () => {
  const token = import.meta.env.GITHUB_TOKEN ?? '';
  const headers: Record<string, string> = { 'User-Agent': 'hm-landing' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  try {
    const [relRes, repoRes] = await Promise.all([
      fetch('https://api.github.com/repos/alrescha79-cmd/huawei-manager-mobile/releases?per_page=30', {
        headers,
      }),
      fetch('https://api.github.com/repos/alrescha79-cmd/huawei-manager-mobile', { headers }),
    ]);

    if (!relRes.ok) throw new Error(`releases ${relRes.status}`);

    const raw = await relRes.json();
    const repoData = repoRes.ok ? await repoRes.json() : null;

    const data: ReleasesCache = {
      fetched: new Date().toISOString(),
      stars: repoData?.stargazers_count ?? 0,
      forks: repoData?.forks_count ?? 0,
      releases: raw
        .filter((r: { draft?: boolean }) => !r.draft)
        .map(
          (r: {
            tag_name: string;
            name: string;
            prerelease: boolean;
            published_at: string;
            body?: string;
            assets: { name: string; size: number; download_count: number; browser_download_url: string }[];
          }) => ({
            tag: r.tag_name,
            name: r.name,
            prerelease: r.prerelease,
            published: r.published_at,
            body: r.body ?? '',
            assets: r.assets.map((a) => ({
              name: a.name,
              size: a.size,
              downloads: a.download_count,
              url: a.browser_download_url,
            })),
          }),
        ),
    };

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    const empty: ReleasesCache = { fetched: new Date().toISOString(), stars: 0, forks: 0, releases: [] };
    return new Response(JSON.stringify(empty), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=60, stale-while-revalidate=600',
      },
    });
  }
};
