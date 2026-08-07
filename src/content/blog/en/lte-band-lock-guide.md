---
slug: lte-band-lock-guide
lang: en
title: LTE Band Lock — Getting a Steadier Connection
description: How to read the band metrics in Huawei Manager, pick the right LTE bands for your location, and pin them with Band Lock.
date: 2026-07-28
---

A modem locked to a weak band is the usual reason for a slow, flaky connection. Band Lock lets you pin the bands that actually work at your location. Here's how to use it well.

## Read the signal first

Open the dashboard and watch the metrics while the modem sits still:

| Metric | What it tells you |
| --- | --- |
| **RSRP** | Signal strength. Lower (more negative) is weaker. |
| **RSRQ / SINR** | Signal quality and noise. Higher is better. |
| **Band** | Which LTE band the modem currently uses. |

Don't change anything yet — just learn what "your normal" looks like.

## Find your strong band

Use **Signal Finder**: walk around or reposition the modem while watching the live metrics. When RSRP improves and SINR stays high, note the band it landed on.

Some operators broadcast on several bands. The one your modem picks first isn't always the best one at your spot.

## Lock the band

1. Open **LTE Band Lock** from the dashboard.
2. Pick the band you measured as strongest.
3. Save. The modem stays on that band.

You can also combine bands — for example a **carrier aggregation** combo like `B3+B1+N40` — when your modem and operator support it. On a Huawei modem these are exposed as a numbered entry in the band list.

## When to reconsider

- **After changing location** — your strong band may change. Re-run Signal Finder.
- **After a speed drop** — test the previous automatic setting side by side.
- **On other bands you never use** — disable them so the modem doesn't jump.

Band Lock is the single most effective setting for turning a weak connection into a steady one.
