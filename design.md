# Design — Huawei Manager Mobile Landing

Locked design system. Future Hallmark runs read this file first; pages defer to it. Amend intentionally — the file is the rule.

## System
- Genre · modern-minimal
- Macrostructure · Workbench (real product screenshots in frames are the primary content)
- Theme · catalog Cobalt
- Axes · light paper / grotesk-sans display / cool-blue accent
- Nav · N5 floating pill (desktop) · mobile macOS-style bottom dock with magnify (user-requested, glass blur is functional — the dock floats over scrolling content)
- Footer · Ft5 Statement

## Tokens (canonical · `tokens.css` is the source of truth; `src/styles/global.css` mirrors them as Tailwind v4 `@theme inline`)
```css
:root {
  --color-paper:      oklch(97.5% 0.006 252);
  --color-paper-2:    oklch(95%   0.008 252);
  --color-paper-3:    oklch(92%   0.009 252);
  --color-ink:        oklch(18%   0.02  252);
  --color-muted:      oklch(42%   0.02  252);
  --color-neutral:    oklch(58%   0.02  252);
  --color-rule:       oklch(88%   0.01  252);
  --color-accent:     oklch(55%   0.18  260);
  --color-accent-ink: oklch(98%   0.004 260);
  --color-accent-deep: oklch(45%  0.17  260);
  --color-focus:      oklch(55%   0.18  260);
  --color-success:    oklch(52%   0.14  150);
  --color-warn:       oklch(55%   0.15  75);
  --color-dock:       oklch(22%   0.012 252);

  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-body:    "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;

  /* 4-pt spacing scale, named: --space-3xs … --space-4xl. See tokens.css. */
  /* Type scale, 1.25 (major-third) ratio: --text-xs … --text-display.     */

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:  cubic-bezier(0.7,  0, 0.84, 0);
  --dur-micro: 120ms;  --dur-short: 220ms;  --dur-long: 420ms;

  --radius-sm: 6px;  --radius-md: 10px;  --radius-lg: 16px;  --radius-pill: 999px;
}
```

## CTA voice
- Primary · ink fill (`--color-ink`) · `--radius-pill` · px-6 py-3.5, hover -translate-y-0.5
- Secondary · outline (`--color-rule` border, paper bg) · same radius
- All CTAs `whitespace-nowrap` — never wrap on mobile (gate 49)

## Motion stance
- Silent. One reveal primitive: dock magnify on `pointer: fine` only (scale 1→1.55, distance 90px). Active-section spy via IntersectionObserver. Feedback button: sending label + success/error status inline, no toast.
- Reduced-motion fallback · ≤150 ms opacity crossfade.

## Honesty
- All stats live: GitHub Releases API (downloads, stars, versions). No invented metrics.
- Real app screenshots only, wrapped in `<figure>` — no re-drawn device/browser chrome. Exception (user-approved): a minimal CSS Android phone frame (ink bezel + punch-hole + home bar) may wrap real screenshots in `Preview.astro`. Never redraw the app UI itself.

## Exports
`tokens.css` (in this project) is the source of truth. For Tailwind v4 `@theme`, DTCG `tokens.json`, or shadcn/ui CSS variables, ask *"extend design.md with Tailwind exports"* (or the format you want) — Hallmark will append them per `export-formats.md`.
