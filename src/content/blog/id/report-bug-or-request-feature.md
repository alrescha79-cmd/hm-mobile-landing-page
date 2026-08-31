---
slug: report-bug-or-request-feature
lang: id
title: Cara Melaporkan Bug atau Mengajukan Permintaan Fitur
description: Cara tercepat untuk memperbaiki bug adalah mengirim log debug langsung dari aplikasi. Berikut panduan lengkapnya, termasuk form masukan dan GitHub sebagai alternatif.
date: 2026-07-21
---

Cara tercepat untuk memperbaiki bug adalah menunjukkan apa yang sebenarnya dilakukan aplikasi, bukan sekadar gejala yang Anda amati. Aplikasi dapat melakukan hal tersebut untuk Anda melalui log debug. Berikut alurnya.

## Metode yang Direkomendasikan: Kirim Log Debug dari Aplikasi

Log debug mencatat setiap panggilan API beserta responsnya saat Anda mereproduksi masalah. Daripada menjelaskan gejala, Anda memberikan bukti langsung.

1. Buka aplikasi dan masuk ke **Settings**.
2. Gulir ke bawah dan aktifkan **Debug Mode**.
3. Buka halaman yang bermasalah dan ulangi interaksi yang memicu kesalahan.
4. Kembali ke Settings, pilih **Send debug log**. Aplikasi akan mengemas log dan membuka aplikasi email dengan semua informasi siap dikirim.
5. Kirim ke alamat yang ditampilkan, kemudian nonaktifkan kembali **Debug Mode**.

Langkah terakhir penting: mode debug ditujukan untuk diagnosis, bukan untuk penggunaan sehari-hari. Membiarkannya aktif akan menambah beban proses dan menumpuk log pada perangkat.

Langkah ini mengubah laporan yang ambigu seperti "koneksi terasa aneh" menjadi laporan yang dapat langsung ditindaklanjuti. Akar masalah biasanya langsung terlihat ketika log diperiksa.

## Metode Alternatif

Tidak ingin membuka pengaturan? Dua metode berikut juga berfungsi:

**Form masukan**: kunjungi [hm.cakson.my.id/#support](/id/#support), isi formulir, dan kirim. Tidak diperlukan akun.

**GitHub Issues**: buka langsung di [github.com/alrescha79-cmd/huawei-manager-mobile/issues](https://github.com/alrescha79-cmd/huawei-manager-mobile/issues). Metode ini memerlukan akun GitHub gratis, namun Anda akan menerima notifikasi saat ada balasan dan dapat memantau progres perbaikan.

## Isi Laporan Bug yang Baik

Metode apa pun yang Anda pilih, sertakan lima hal berikut:

**1. Model modem dan versi firmware**: sebutkan model modem Huawei dan versi firmware yang ditampilkan pada halaman admin (biasanya System > Device Information).

**2. Versi aplikasi**: dapat dilihat pada Settings > About, dengan format seperti `v1.1.70`.

**3. Langkah reproduksi**: jelaskan langkah-langkah yang dilakukan secara berurutan.

**4. Hasil yang diharapkan vs kenyataan**: apa yang seharusnya terjadi dibandingkan dengan apa yang sebenarnya terjadi.

**5. Bukti pendukung**: log debug (paling ideal), ekspor berkas HAR, atau tangkapan layar. Jika memungkinkan, rekam video untuk memperjelas masalah.

## Permintaan Fitur

Sebelum mengajukan permintaan fitur, perhatikan hal berikut:

- **Cari issue yang sudah ada terlebih dahulu.** Mungkin orang lain telah mengajukan hal serupa. Berikan reaksi atau komentar sebagai ganti membuat duplikat.
- **Jelaskan masalah, bukan hanya solusi.** Pernyataan "Saya perlu melihat pemakaian data harian secara sekilas" lebih bermanfaat daripada "tambahkan widget grafik". Masalah menjelaskan kebutuhan, sedangkan solusi hanyalah salah satu cara pemenuhannya.

Baik: "Koneksi saya terputus setiap beberapa jam dan saya tidak mengetahui band yang sedang digunakan."
Kurang bermanfaat: "Tambahkan indikator band."

## Satu Issue untuk Satu Topik

Buat setiap laporan tetap fokus. Satu issue berarti satu bug atau satu permintaan fitur. Laporan campuran seperti "berikut tiga hal yang bermasalah" mudah menjadi berantakan dan sulit ditindaklanjuti.

## Setelah Laporan Dikirim

Seluruh laporan akan dibaca. Laporan bug akan diberi label dan ditindaklanjuti. Permintaan fitur dibahas secara terbuka, dan komentar serta pendekatan alternatif disambut. Issue yang ditutup menandakan masalah telah diperbaiki (dengan catatan rilis) atau ditolak dengan alasan yang jelas.

Terima kasih telah membantu menjadikan Huawei Manager lebih baik.