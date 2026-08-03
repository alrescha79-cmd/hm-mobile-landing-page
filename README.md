# hm-landing

Landing page for **Huawei Manager Mobile** — Astro 5 + Tailwind 4, mobile-first, EN/ID, hosted on Vercel (`hm.cakson.my.id`).

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install deps |
| `npm run dev` | Dev server `localhost:4321` |
| `npm run build` | Build to `dist/` (SSG) |
| `npm run preview` | Preview built site |

## Structure

```
src/
  components/   Hero · Stats · Preview · Features · HowItWorks · ModemSupport · Download · FAQ · Feedback · Navbar · Footer
  data/         modems.ts · site.ts · types.ts (Release, ReleasesCache)
  i18n/         en.json · id.json · index.ts (t() lookup with EN fallback)
  layouts/      Base.astro (SEO, JSON-LD, hreflang, OG)
  pages/        index.astro (lang redirect) · [lang]/index.astro · [lang]/releases.astro · api/releases.ts (live GitHub)
  styles/       global.css (Hallmark Cobalt tokens, Tailwind 4 + dark theme)
```

## Data freshness

No committed snapshot. `/api/releases` fetches live `https://api.github.com/repos/alrescha79-cmd/huawei-manager-mobile/releases?per_page=30` (+ stars/forks) with `GITHUB_TOKEN` if set, else unauthenticated (60 req/h). Returns full `body` markdown. Client components (`Hero`, `Stats`, `Download`, releases page) fetch `/api/releases` on load + hourly interval (`setInterval 1h`). Cache headers `public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400` (Vercel edge).

## Env (Vercel)

```
PUBLIC_SITE_URL=https://hm.cakson.my.id
PUBLIC_WEB3FORMS_KEY=    # Web3Forms access key (client-side form)
GITHUB_TOKEN=            # higher GitHub API rate limit for /api/releases
PUBLIC_GSC_VERIFICATION= # optional Google Search Console verification
```

`.env.example` has placeholders; real values live in Vercel.

## Design

Hallmark Cobalt (modern-minimal): cool white paper, electric blue accent, Space Grotesk display + Inter body + JetBrains Mono outlier. Desktop: floating pill nav. Mobile: macOS-style bottom dock with magnify. See `.hallmark/log.json`.
