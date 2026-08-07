---
slug: report-bug-or-request-feature
lang: id
title: Cara Lapor Bug atau Minta Fitur Baru
description: Cara paling cepat benerin bug adalah kirim log debug langsung dari aplikasi. Ini panduan lengkapnya — plus form feedback dan GitHub sebagai alternatif.
date: 2026-07-21
---

Cara paling cepat benerin bug adalah nunjukin apa yang beneran dilakukan aplikasi — bukan cuma apa yang kamu lihat. Aplikasinya bisa ngerjain itu buat kamu lewat log debug. Ini alurnya.

## Paling disarankan: kirim log debug dari aplikasi

Log debug nyatet setiap panggilan API dan setiap respons pas kamu niru masalahnya. Daripada ngejelasin gejalanya, kamu kasih buktinya langsung.

1. Buka aplikasi, masuk ke **Settings**.
2. Gulir ke bawah, aktifin **Debug Mode**.
3. Buka halaman yang bermasalah, ulangi interaksi yang bikin error-nya muncul.
4. Balik ke Settings, pilih **Send debug log**. Log-nya otomatis dikemas dan aplikasi email kamu kebuka dengan semuanya udah siap kirim.
5. Kirim ke alamat yang ditampilin, terus matiin lagi **Debug Mode**.

Langkah terakhir itu penting — debug mode itu buat diagnosis, bukan buat dipakai sehari-hari. Kalau dibiarin nyala, bebannya nambah dan log-nya numpuk terus di HP kamu.

Satu langkah ini ngubah laporan yang bikin bingung kayak "koneksinya aneh" jadi laporan yang bisa langsung dibenerin. Akar masalahnya biasanya langsung keliatan pas kami baca log-nya.

## Cara lain hubungi kami

Nggak mau buka-buka settings? Dua cara ini juga jalan:

**Form feedback** — kunjungi [hm.cakson.my.id/#support](/id/#support), isi formnya, kirim. Nggak perlu akun.

**GitHub Issues** — buka langsung di [github.com/alrescha79-cmd/huawei-manager-mobile/issues](https://github.com/alrescha79-cmd/huawei-manager-mobile/issues). Perlu akun GitHub gratis, tapi kamu dapet notifikasi pas ada balasan dan bisa ngikutin progres perbaikannya.

## Laporan bug yang bagus isinya

Jalur apa pun yang kamu pilih, lengkapin lima hal ini:

**1. Model modem dan versi firmware** — modem Huawei apa, dan firmware yang tampil di halaman admin (biasanya System > Device Information).

**2. Versi aplikasi** — Settings > About. Bentuknya kayak `v1.1.70`.

**3. Langkah reproduksi** — ngapain aja, step by step?

**4. Yang diharapin vs yang kejadian** — harusnya jadi apa, ternyata jadi apa?

**5. Bukti** — log debug (paling ideal), ekspor HAR, atau screenshot. Kalau bisa rekam videonya, lebih oke lagi.

## Minta fitur

Sebelum buka permintaan fitur:

- **Cari dulu issue yang udah ada.** Mungkin orang lain udah minta hal yang sama. Cukup kasih reaction atau komentar, jangan bikin duplikat.
- **Jelasin masalahnya, bukan cuma solusinya.** "Saya pengen lihat pemakaian data harian sekilas" lebih berguna daripada "tambah widget grafik" — masalahnya ngejelasin kebutuhan, solusi cuma salah satu caranya.

Baik: "Koneksi saya putus tiap beberapa jam dan saya nggak tau modem ada di band mana."
Kurang berguna: "Tambah indikator band."

## Satu issue per topik

Bikin tiap laporan fokus. Satu issue = satu bug atau satu permintaan fitur. Laporan campuran "nih tiga hal yang salah" gampang berantakan dan gampang ketuker.

## Setelah kamu kirim

Semua laporan kami baca. Bug report dikasih label dan ditriage. Permintaan fitur dibahas terbuka — komentar dan pendekatan alternatif disambut. Issue yang ditutup artinya udah dibenerin (dengan catatan rilisnya) atau ditolak dengan alasan.

Makasih udah bantu bikin Huawei Manager makin bagus.
