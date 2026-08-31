---
slug: lte-band-lock-guide
lang: en
title: "LTE Band Lock: Getting a Steadier Connection"
description: How to read the LTE signal metrics in Huawei Manager, pick the bands that perform best at your location, and pin them with Band Lock.
date: 2026-07-28
---

A modem locked onto a weak LTE band is the usual cause of a slow, unstable connection. Band Lock lets you pin the modem to the frequencies that actually work at your location. Here is how to use it well.

## Read the Signal First

Open the dashboard and watch the metrics while the modem sits still:

| Metric | What it tells you |
| --- | --- |
| **RSRP** | Received signal power. A smaller negative value means a stronger signal. |
| **RSRQ / SINR** | Signal quality and noise ratio. Higher is better. |
| **Band** | The LTE band the modem is currently using. |

Do not change anything yet. Learn what your normal signal looks like first.

## Find Your Strongest Band

Use **Signal Finder**: move around or reposition the modem while watching the live metrics. When RSRP improves and SINR stays high, note the band the modem landed on.

Operators usually broadcast on several bands. The one the modem picks first is not always the best at your location.

## Lock the Band

1. Open **LTE Band Lock** from the dashboard.
2. Select the band that measured strongest.
3. Save. The modem will stay on that band.

You can also combine bands through carrier aggregation, for example `B3+B1+N40`, when your modem and operator support it. On Huawei modems, these combinations appear as numbered entries in the band list.

## When to Reconsider

- **After changing location**: your strongest band may change. Re-run Signal Finder.
- **After a speed drop**: compare the result with the previous automatic setting.
- **On bands you never use**: disable them so the modem does not switch pointlessly.

Band Lock is the single most effective setting for turning a weak connection into a steady one.