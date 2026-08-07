---
slug: lte-band-lock-guide
lang: id
title: LTE Band Lock — Biar Koneksinya Lebih Stabil
description: Cara baca metrik sinyal di Huawei Manager, pilih band LTE yang pas buat lokasimu, dan kunci dengan Band Lock.
date: 2026-06-09
---

Modem yang nyangkut di band lemah biasanya biang keladi koneksi lambat dan putus-putus. Band Lock bikin kamu bisa mengunci band yang beneran jalan di lokasimu. Ini cara pakainya.

## Baca sinyal dulu

Buka dashboard dan perhatikan metriknya sambil modemnya diam:

| Metrik | Artinya |
| --- | --- |
| **RSRP** | Kekuatan sinyal. Makin kecil (makin negatif), makin lemah. |
| **RSRQ / SINR** | Kualitas sinyal dan derau. Makin tinggi makin bagus. |
| **Band** | Band LTE yang lagi dipakai modem. |

Belum usah ubah apa-apa — pelajari dulu kayak apa kondisi "normal"-mu.

## Cari band terkuat

Pakai **Signal Finder**: geser atau ubah posisi modem sambil lihat metrik realtime. Begitu RSRP membaik dan SINR tetap tinggi, catat band yang kepakai.

Operator biasanya menyiarkan di beberapa band. Band yang pertama kepilih modem belum tentu yang paling bagus di posisimu.

## Kunci band

1. Buka **LTE Band Lock** dari dashboard.
2. Pilih band yang tadi paling kuat.
3. Simpan. Modem bakal tetap di band itu.

Kamu juga bisa menggabungkan beberapa band — misalnya kombinasi **carrier aggregation** kayak `B3+B1+N40` — kalau modem dan operatormu mendukungnya. Di modem Huawei, kombinasinya muncul sebagai entri bernomor di daftar band.

## Kapan perlu dicek ulang

- **Pindah lokasi** — band terkuat bisa berubah. Jalankan lagi Signal Finder.
- **Kecepatan drop** — bandingkan sama pengaturan otomatis sebelumnya.
- **Band yang nggak kepakai** — matikan biar modem nggak pindah-pindah.

Band Lock adalah pengaturan paling ampuh buat mengubah koneksi lemah jadi stabil.
