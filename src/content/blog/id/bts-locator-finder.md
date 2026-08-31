---
slug: bts-locator-finder
lang: id
title: "BTS Locator: Menampilkan Menara BTS yang Terhubung ke Modem"
description: Fitur yang sedang dikembangkan untuk menampilkan menara BTS tujuan koneksi modem, lokasi menara di sekitar, dan peta untuk menemukan titik sinyal terkuat.
date: 2026-08-08
---

![Preview BTS Locator](/bts-locator.jpg)

Koneksi sinyal yang lemah sering kali sulit dijelaskan tanpa mengetahui menara pemancar (BTS) mana yang melayani koneksi modem Anda dan seberapa jauh jaraknya. Fitur **BTS Locator** yang sedang dikembangkan dirancang untuk menjawab pertanyaan ini langsung dari aplikasi.

## Fungsi Fitur

BTS Locator menampilkan menara pemancar yang sedang melayani koneksi modem Anda beserta menara lain yang berada dalam jangkauan, disajikan pada peta geografis. Anda tidak perlu lagi memperkirakan arah sumber sinyal secara manual.

- **Menara aktif**: BTS yang sedang digunakan modem untuk koneksi saat ini.
- **Menara di sekitar**: sel-sel lain yang masih dalam jangkauan agar kondisi jaringan di sekitar lebih terlihat.
- **Konteks sinyal**: metrik sinyal (RSRP, RSRQ, SINR, dan band) ditampilkan langsung pada peta.

## Cara Kerja

Fitur ini menggabungkan dua sumber data:

1. **Data dari modem**: modem melaporkan sel yang sedang digunakan, termasuk band, kekuatan sinyal, dan identitas sel.
2. **Data GPS ponsel**: posisi perangkat digunakan untuk menempatkan koordinat sel pada peta.

Penggabungan kedua sumber data ini memberikan gambaran langsung kondisi lingkungan radio di sekitar lokasi Anda.

## Manfaat

Mengetahui menara mana yang melayani koneksi membantu memahami berbagai kondisi jaringan:

- Menara yang jauh umumnya berkorelasi dengan koneksi yang lemah dan tidak stabil. Sering kali tersedia menara lain yang lebih dekat dengan kualitas lebih baik.
- Saat berpindah mencari posisi terbaik, peta menunjukkan apakah Anda mendekati atau menjauhi menara.
- Dikombinasikan dengan Band Lock, Anda dapat menentukan band terkuat dan posisi optimal secara bersamaan.

## Status Pengembangan

Fitur ini masih dalam tahap pengembangan aktif dan pengujian internal. Pengujian dilakukan pada modem asli dan jaringan seluler sungguhan sebelum dirilis ke publik.

Perlu kami sampaikan satu keterbatasan: **data koordinat BTS sangat terbatas**. Sebagian besar operator tidak memublikasikan koordinat menara, sementara database publik yang tersedia cenderung tidak lengkap dan sering kedaluwarsa. Oleh karena itu, cakupan data akan terus bertambah seiring waktu dan akurasi dapat berbeda antar wilayah. Sebagian daerah menampilkan posisi menara secara presisi, sementara daerah lain masih jarang datanya.

Alasan inilah yang mendasari pentingnya pengujian pada lingkungan nyata, serta masukan dari pengguna seperti Anda pada tahap selanjutnya.

## Rencana Rilis

Belum ada tanggal rilis yang dijanjikan. Setelah pengujian internal selesai, fitur akan dirilis pada pembaruan aplikasi berikutnya. Pantau [halaman rilis](/id/releases) untuk informasi rilis terbaru.

Sementara menunggu, fitur pemantauan metrik sinyal dan Band Lock sudah dapat digunakan hari ini.