# AGENTS.md

Astro 5 + Tailwind 4 SSG. Landing for Huawei Manager Mobile. EN/ID, mobile-first, deployed to Vercel (`https://hm.cakson.my.id`). Not a git repo locally.

## Commands

No test, lint, or typecheck script exists. `npm run build` is the only verification gate — run it after edits.

```
npm run dev        # dev server :4321
npm run build      # SSG build -> dist/
npm run preview    # preview built site
```

## i18n

`prefixDefaultLocale: true`, locales `en` + `id` (`astro.config.mjs:9`). `src/pages/index.astro` (noindex) redirects by `localStorage('hm-lang')` then Accept-Language. Copy lives in `src/i18n/{en,id}.json`; access via `t(lang, 'dot.key', vars?)` (`src/i18n/index.ts`), which falls back to `en`.

- Any routed page must add **both** langs to `getStaticPaths()` (`[lang]/index.astro`, `[lang]/releases.astro`).
- Editing copy: keep `en.json` and `id.json` keys in sync; en is the fallback.

## Imports / aliases

`@/*` maps to `src/*` (`tsconfig.json`).

## Data — live GitHub only (no committed snapshot)

All stats, versions, APK URLs, release notes now come live from GitHub via `/api/releases`. No `releases-cache.json` / `downloads.json` / `history.csv` committed snapshot remains.

- `src/data/types.ts` defines `Release`, `ReleasesCache`.
- `src/data/site.ts` = download suffixes + github repo constants.
- `src/data/modems.ts` = modem list.

### Runtime API (Vercel)

`src/pages/api/releases.ts` serverless, **not** in SSG `dist/`. Fetches live `https://api.github.com/repos/alrescha79-cmd/huawei-manager-mobile/releases?per_page=30` + repo stars/forks. Uses `GITHUB_TOKEN` if set, else unauthenticated (60 req/hour). Returns full `body` (markdown) — no slice truncation. Headers: `Cache-Control: public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400` (mirrored in `vercel.json`). On error returns empty `releases:[]`.

Env vars (`.env.example`, typed in `src/env.d.ts`): `PUBLIC_SITE_URL`, `PUBLIC_WEB3FORMS_KEY` (client form), `GITHUB_TOKEN`, `PUBLIC_GSC_VERIFICATION`. Real values live in Vercel.

### Client live refresh

- `Hero.astro`, `Stats.astro`, `Download.astro`, `[lang]/releases.astro` all `fetch('/api/releases')` client-side on load + `setInterval 1h`.
- Stats: total downloads = `sum(asset.download_count)`, latest = first stable `v*`, stars = live.
- Download: stable latest 3-arch cards + pre-releases live.
- Releases page: `#releases-list` rendered live, sorted `published desc` (not stable-first), count live, modal `window.__releaseBodies[tag]=full body` map avoids `data-attribute` truncation, markdown via `marked` dynamic import.
- Modal: `fixed inset-0 flex items-center justify-center`, inner `max-h-[85vh] max-h-[85dvh] flex-col overflow-hidden`, body `min-h-0 flex-1 overflow-y-auto overscroll-contain`, lock html/body scroll.

## Design system (locked)

`design.md` is the rule; `tokens.css` is canonical source of truth; `src/styles/global.css` mirrors tokens as Tailwind v4 `@theme inline`. Cobalt: cool-white paper, electric-blue accent, Space Grotesk + Inter + JetBrains Mono. Desktop pill nav, mobile macOS-style bottom dock with magnify (`pointer: fine` only). All CTAs `whitespace-nowrap`. Real app screenshots only in `<figure>` — no fake device chrome. Future Hallmark runs read `design.md` first; amend it intentionally.

Theme toggle: light/dark/auto cycle, persists `localStorage('hm-theme')`, sets `documentElement.dataset.theme`. Dark vars in `:root[data-theme="dark"]` in `global.css`.

## Gotchas

- `_astro/` Caching (`Cache-Control: immutable`) set on `/_astro/*` in `vercel.json`.
- `param[]` variants: use `--space-3xs`, not `space-3xs` (Tailwind v4 `@theme inline` `--` namespace).
- Flag equiv; `[lang]` is a literal path segment (`[lang]/`), not numbered.
- No committed release data — don't grep for `releases-cache.json`. Live data only.
