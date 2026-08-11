# hm-landing

Landing page for **Huawei Manager Mobile** — an Android app that manages Huawei LTE modems. Static site built with Astro 5 + Tailwind 4, mobile-first, bilingual (EN/ID), deployed to Vercel at `hm.cakson.my.id`.

## Overview

- **SSG**: Astro 5 outputs a fully static `dist/`; serverless functions `/api/releases` and `/api/feedback` run on Vercel.
- **Live data**: stats, versions, APK download links, and release notes are fetched live from the GitHub API — no committed snapshot.
- **Feedback**: Server-validated form posts to Apps Script webhook. Vercel endpoint enforces same-origin, validation, anti-spam (honeypot + time trap), and per-IP daily rate limit (3/day). Apps Script verifies HMAC signature, logs to Google Sheet, sends email via Gmail with `replyTo` set to sender.
- **i18n**: `en` + `id`, default prefixed. Copy in `src/i18n/{en,id}.json` with `en` as fallback.
- **Design**: Hallmark Cobalt — cool-white paper, electric-blue accent, Space Grotesk + Inter + JetBrains Mono. Floating pill nav on desktop, macOS-style magnifying dock on mobile.

## Structure

```
src/
  components/   Hero · Stats · Preview · Features · HowItWorks · ModemSupport · Download · FAQ · Feedback · Navbar · Footer
  data/         modems.ts · site.ts · types.ts (Release, ReleasesCache)
  i18n/         en.json · id.json · index.ts (t() lookup with EN fallback)
  layouts/      Base.astro (SEO, JSON-LD, hreflang, OG, scroll/#support handling)
  pages/        index.astro (lang redirect) · [lang]/index.astro · [lang]/releases.astro · api/releases.ts · api/feedback.ts
  styles/       global.css (design tokens, Tailwind 4, dark theme)
```

## Env (Vercel)

`.env.example` documents the required variables. Server-only (not exposed to browser):

| Variable | Purpose |
|---|---|
| `PUBLIC_SITE_URL` | Site origin for same-origin check |
| `GITHUB_TOKEN` | Optional, raises GitHub API rate limit |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console verification |
| `FEEDBACK_APPS_SCRIPT_URL` | Apps Script `/exec` deployment URL |
| `FEEDBACK_APPS_SCRIPT_SECRET` | Shared HMAC secret (use `openssl rand -hex 32`) |
| `FEEDBACK_RECIPIENT` | Email recipient (default: `caksonoanggun@gmail.com`) |
| `FEEDBACK_TEST_MODE` | `true` to skip rate limit in preview |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL for rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token |

### Feedback Setup

1. Create Google Sheet "HM Landing Feedback" with tab "Feedback log".
2. Create Apps Script project, paste `Code.gs` from `plan.md`.
3. Set Script Properties: `FEEDBACK_SECRET`, `FEEDBACK_SHEET_ID`, `FEEDBACK_RECIPIENT`, `FEEDBACK_ALLOWED_ORIGIN`.
4. Deploy as Web app (Execute as: Me, Who has access: Anyone).
5. Copy `/exec` URL to `FEEDBACK_APPS_SCRIPT_URL` in Vercel.
6. Create Upstash Redis via Vercel Marketplace, connect to project, set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
7. Set `FEEDBACK_TEST_MODE=true` in Preview, `false` in Production.

### Production Rate Limit

- 3 accepted submissions per source IP per UTC day.
- Rate counter uses Upstash Redis with TTL to next UTC midnight.
- Apps Script also enforces HMAC freshness (5 min) and nonce replay protection (10 min).

## Verification

`npm run build` is the only verification gate; `npx @astrojs/check` validates TypeScript across components.

See `AGENTS.md` for project conventions and `design.md` for the design system.
