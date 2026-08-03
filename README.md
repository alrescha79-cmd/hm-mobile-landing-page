# hm-landing

Landing page for **Huawei Manager Mobile** — an Android app that manages Huawei LTE modems. Static site built with Astro 5 + Tailwind 4, mobile-first, bilingual (EN/ID), deployed to Vercel at `hm.cakson.my.id`.

## Overview

- **SSG**: Astro 5 outputs a fully static `dist/`; one serverless function `/api/releases` feeds live GitHub release data.
- **Live data**: stats, versions, APK download links, and release notes are fetched live from the GitHub API — no committed snapshot.
- **i18n**: `en` + `id`, default prefixed. Copy in `src/i18n/{en,id}.json` with `en` as fallback.
- **Design**: Hallmark Cobalt — cool-white paper, electric-blue accent, Space Grotesk + Inter + JetBrains Mono. Floating pill nav on desktop, macOS-style magnifying dock on mobile.
- **Feedback form**: Web3Forms via `PUBLIC_WEB3FORMS_KEY`; the app deep-links to `hm.cakson.my.id/#support`, which redirects to the feedback section.

## Structure

```
src/
  components/   Hero · Stats · Preview · Features · HowItWorks · ModemSupport · Download · FAQ · Feedback · Navbar · Footer
  data/         modems.ts · site.ts · types.ts (Release, ReleasesCache)
  i18n/         en.json · id.json · index.ts (t() lookup with EN fallback)
  layouts/      Base.astro (SEO, JSON-LD, hreflang, OG, scroll/#support handling)
  pages/        index.astro (lang redirect) · [lang]/index.astro · [lang]/releases.astro · api/releases.ts (live GitHub)
  styles/       global.css (design tokens, Tailwind 4, dark theme)
```

## Env (Vercel)

`.env.example` documents the required variables. `PUBLIC_WEB3FORMS_KEY` is required for the feedback form; `GITHUB_TOKEN` is optional (raises the GitHub API rate limit).

## Verification

`npm run build` is the only verification gate; `npx @astrojs/check` validates TypeScript across components.

See `AGENTS.md` for project conventions and `design.md` for the design system.
