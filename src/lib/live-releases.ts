import type { ReleasesCache } from '@/data/types';

type Listener = (data: ReleasesCache) => void;

let cache: ReleasesCache | null = null;
const listeners = new Set<Listener>();

export function onReleases(cb: Listener): void {
  listeners.add(cb);
  if (cache) cb(cache);
}

export function initReleases(): void {
  if (window.__hmReleasesInit) return;
  window.__hmReleasesInit = true;

  const fetchLive = async () => {
    try {
      const res = await fetch('/api/releases');
      if (!res.ok) throw new Error(String(res.status));
      cache = (await res.json()) as ReleasesCache;
      listeners.forEach((cb) => cb(cache!));
    } catch {
      // keep stale cache; retry on next interval
    }
  };

  fetchLive();
  setInterval(fetchLive, 5 * 60 * 1000);
  document.addEventListener('astro:page-load', () => {
    if (cache) listeners.forEach((cb) => cb(cache!));
  });
}
