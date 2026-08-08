---
slug: bts-locator-finder
lang: id
title: BTS Locator — Lihat Menara BTS yang Terhubung ke Modemmu
description: Fitur baru yang sedang dikembangkan — tahu modemmu nyambung ke BTS mana, lihat BTS di sekitar, dan pakai peta buat cari titik sinyal terkuat.
date: 2026-08-08
---

![Preview BTS Locator](/bts-locator.jpg)

Pernah lihat sinyal lemah terus mikir: *modemku sebenarnya ngobrol sama menara yang mana — dan kok jauh banget?* Sebentar lagi kamu bisa jawab pertanyaan itu langsung dari aplikasi.

## Fiturnya ngapain

**BTS Locator** nampilin menara BTS yang lagi nyambung ke modem kamu, plus menara di sekitarnya, dalam bentuk peta beneran. Nggak perlu nebak-nebak lagi dari arah mana sinyalmu lemah — kamu bakal lihat persis sinyalnya datang dari mana.

- **BTS aktif** — menara yang lagi dipakai modemmu sekarang.
- **BTS sekitar** — sel lain yang masih dalam jangkauan, biar keliatan apa aja yang ada di sekitar.
- **Konteks sinyal** — metrik sinyal yang sama (RSRP, RSRQ, SINR, band) ditaruh di peta.

## Cara kerjanya

Aplikasi gabungin dua sumber data:

1. **Dari modem** — modem ngasih tau sel yang lagi dipakainya, termasuk band, kekuatan sinyal, dan identitas selnya.
2. **Dari GPS HP** — posisimu dipake buat naruh sel-sel itu di peta.

Gabungin dua-duanya, kamu dapet gambaran langsung kondisi radio di sekitarmu.

## Kenapa penting

Ngerti *menara mana* yang kamu tumpangin ngejelasin banyak hal:

- Menara yang jauh biasanya artinya koneksi lemah dan nggak stabil — dan seringnya ada menara lebih deket yang lebih bagus.
- Pas kamu muter-muter nyari spot sinyal, petanya nunjukin kamu lagi ngedeketin atau ngejauhin menaranya.
- Digabung sama Band Lock, kamu bisa nemu band terkuat *dan* posisi paling mantap sekaligus.

## Status: masih dikembangkan

Fitur ini nyata, tapi belum siap. Masih tahap pengembangan aktif dan ujicoba internal — kami testing di modem beneran dan jaringan beneran sebelum dirilis.

Satu kendala yang jujur kami sampaikan: **data lokasi BTS itu terbatas.** Koordinat menara BTS nggak dipublish sama kebanyakan operator, dan database publik isinya nggak lengkap plus sering usang. Artinya cakupannya bakal bertambah seiring waktu, dan akurasinya beda-beda tiap daerah — ada wilayah yang BTS-nya kelihatan presisi, ada yang masih jarang.

Justru karena itu fitur ini butuh testing dunia nyata — dan nanti, bantuan dari pengguna kayak kamu.

## Selanjutnya apa

Nggak ada janji tanggal rilis. Pertama selesaiin ujicoba internal, baru rilis di update berikutnya. Pantau terus [halaman rilis](/id/releases) — pas BTS Locator keluar, bakal ada di situ.

Sampai saat itu, metrik sinyal dan Band Lock udah bisa dipake hari ini.
