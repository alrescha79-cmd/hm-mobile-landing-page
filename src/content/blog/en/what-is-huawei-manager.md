---
slug: what-is-huawei-manager
lang: en
title: What Is Huawei Manager Mobile?
description: "A free, open-source Android app that gives you full control of Huawei LTE modems over WiFi: signal, bands, WiFi, SMS, and more. No root, no cloud, no account."
date: 2026-07-15
---

Huawei Manager Mobile is a free, open-source Android app that talks directly to your Huawei LTE modem over your local WiFi network. It exposes the settings and technical parameters that the modem's stock Web UI keeps hidden, and puts them on your phone.

## What It Does

The app uses the classic Huawei XML API that compatible modems expose on `192.168.8.1`. If you can open the modem's admin page in a browser, this app can control it: no root, no cloud account, and no registration required.

### Signal Dashboard

View all the radio metrics at a glance: RSSI, RSRP, RSRQ, SINR, and the active LTE band. The traffic panel shows a real-time speedometer plus daily and monthly usage counters.

### Signal Finder

Rotate or reposition the modem while watching the live metrics. When RSRP improves (the negative value gets smaller) and SINR stays high, the modem is at the best signal spot.

### LTE Band Lock

Pin the modem to specific LTE bands or carrier aggregation combinations, such as `B3+B1+N40`. This keeps the modem on the frequencies that perform best at your location and prevents it from drifting onto a weaker band.

### WiFi Device Management

See every connected device with vendor icons, band (2.4 or 5 GHz), and DHCP lease time. Rename, kick, or block devices. Set up Guest WiFi with a configurable time limit, and use parental controls to schedule internet access per device.

### SMS

Read, compose, send, and search SMS from your phone when your modem exposes the feature. The unread count appears on the dashboard.

### Network Settings

Configure APN profiles, the mobile data toggle, Ethernet port mode, and DHCP or PPPoE, settings the stock firmware often hides.

### Home Screen Widget

Monitor signal and traffic status from your home screen, refreshed periodically.

### Usage Alerts

Get a push notification when daily or monthly data crosses your threshold, when your public IP changes, or when a new app version is released.

### Speed Test

Run an internet speed test inside the app, with quick-access toggles for the settings you change most.

### Debug Mode

Log every API call and export a HAR file. This makes bug reports precise and speeds up diagnosis.

## Privacy

Everything runs locally between your phone and the modem. No account, no analytics server, no data collection. The source code is MIT-licensed and auditable on GitHub.

## Supported Modems

Any Huawei LTE router that exposes the classic XML API on `192.168.8.1`. Tested on the **Orbit Star 2 (B312-929)**, with other confirmed models including the B310, B311, B312, B525, B535, B818, E5573, and E5577.

SMS and some settings depend on what the individual modem's firmware exposes.

## How to Get It

Download the APK from [hm.cakson.my.id](/en/). Three architectures are available: arm64-v8a, armeabi-v7a, and universal. Pre-release builds are also available for early access to new features.

Connect your phone to the modem's WiFi, log in with your admin credentials, and take full control of your modem.