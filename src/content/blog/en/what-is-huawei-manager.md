---
slug: what-is-huawei-manager
lang: en
title: What Is Huawei Manager Mobile?
description: A free, open-source Android app that gives you full control of Huawei LTE modems over WiFi — signal, bands, WiFi, SMS, and more. No root, no cloud, no account.
date: 2026-08-07
---

Huawei Manager Mobile is a free Android app that talks directly to your Huawei LTE modem over your local WiFi network. It unlocks settings the stock Web UI keeps hidden, and puts everything on your phone.

## What it actually does

The app uses the classic Huawei XML API that compatible modems expose at `192.168.8.1`. If you've ever opened the modem's admin page in a browser, this app can control it — without root, without a cloud account, without signing up for anything.

### Signal dashboard

Realtime metrics at a glance: RSSI, RSRP, RSRQ, SINR, and the active LTE band. The traffic panel shows a live speedometer plus daily and monthly usage counters.

### Signal Finder

Rotate or reposition the modem while watching live signal metrics. When RSRP drops (stronger) and SINR stays high, you've found the best spot.

### LTE Band Lock

Pin specific bands or carrier aggregation combos — for example `B3+B1+N40` — so the modem stays on what actually works at your location. This is the single most effective fix for a weak or unstable connection.

### WiFi device management

See every connected device with vendor icons, their band (2.4 or 5 GHz), and lease time. Kick or block devices, rename them. Set up Guest WiFi with a time limit (extend in 30-minute steps). Parental controls let you schedule internet cutoff by device and time range.

### SMS

Read, compose, send, and search SMS when your modem exposes it. Unread count shown on the dashboard.

### Network settings

APN profiles, mobile data toggle, Ethernet port mode, DHCP and PPPoE configuration — everything the stock UI hides.

### Home screen widget

Signal and traffic status right on your home screen, refreshed hourly.

### Usage alerts

Push notifications when daily or monthly data crosses your threshold, when your public IP changes, or when a new app version is out.

### Speed test

Built-in internet speed test. Quick-action toggles for the settings you change most.

### Debug mode

Log every API call and export a HAR file. Makes bug reports precise.

## Privacy

Everything runs locally between your phone and the modem. No account, no analytics server, no data collection. The source is MIT-licensed and on GitHub.

## Supported modems

Any Huawei LTE router that exposes the classic XML API on `192.168.8.1`. Tested on the **Orbit Star 2 (B312-929)**. Other confirmed working models: B310, B311, B312, B525, B535, B818, E5573, E5577, and more.

SMS and some settings depend on what your specific modem exposes through its firmware.

## How to get it

Download the APK from [hm.cakson.my.id](/en/) — three architectures available (arm64-v8a, armeabi-v7a, universal). Pre-release builds are also available if you want early access.

Connect your phone to the modem's WiFi, log in with your admin credentials, and take control.
