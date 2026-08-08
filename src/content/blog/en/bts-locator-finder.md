---
slug: bts-locator-finder
lang: en
title: BTS Locator — See Which Cell Tower Your Modem Is On
description: A new feature in development — find out which BTS your modem connects to, see nearby towers, and use the map to find the strongest signal spot.
date: 2026-08-08
---

![BTS Locator preview](/bts-locator.jpg)

Have you ever looked at a weak signal and wondered: *which tower is my modem actually talking to — and why is it so far?* Soon you'll be able to answer that right in the app.

## What it does

**BTS Locator** shows the cell tower your modem is connected to, plus the towers around it, on a real map. No more guessing which direction your signal is weak — you'll see exactly where the signal comes from.

- **Current tower** — the BTS your modem is connected to right now.
- **Nearby towers** — other cells within range, so you can see what else is around.
- **Signal context** — the same signal metrics (RSRP, RSRQ, SINR, band) placed on the map.

## How it works

The app combines two sources of data:

1. **From the modem** — the modem reports the cell it's currently connected to, including the band, signal strength, and cell identifiers.
2. **From your phone's GPS** — your position is used to place those cells on the map.

Put the two together and you get a live picture of the radio environment around you.

## Why it matters

Understanding *which* tower you're connected to explains a lot:

- A far tower usually means a weak, unstable connection — and often a better one is closer.
- When you walk around hunting for the best spot, the map tells you whether you're moving toward or away from the tower.
- Combined with Band Lock, you can find the strongest band *and* the best position.

## Status: in development

This feature is real, but it's not ready yet. It's in active development and internal testing — we're testing it on real modems and real networks before releasing it.

One honest constraint: **BTS location data is limited.** Cell tower coordinates aren't published by most operators, and public databases are incomplete and often outdated. That means coverage will grow over time and accuracy will vary by area — some regions will show precise towers, others will be sparse at first.

That's exactly why this needs real-world testing — and later, real-world help from users like you.

## What's next

No release date promise. First we finish internal testing, then it ships in a future update. Keep an eye on the [releases page](/en/releases) — when BTS Locator lands, it'll be there.

Until then, signal metrics and Band Lock are ready to use today.
