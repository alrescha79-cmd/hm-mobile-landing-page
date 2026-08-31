---
slug: change-wifi-password
lang: id
title: Cara Mengganti Kata Sandi WiFi Modem Huawei (B310, B312, Orbit Star 2)
description: Langkah-langkah mengganti nama jaringan dan kata sandi WiFi modem Huawei melalui halaman 192.168.8.1. Berlaku untuk B310, B312, Orbit Star 2, dan lainnya.
date: 2026-08-07
---

Mengganti kata sandi WiFi pada modem Huawei cukup mudah. Cukup masuk ke halaman admin di `192.168.8.1`. Panduan ini berlaku untuk modem B310, B312, Orbit Star 2 (B312-929), B525, dan model Huawei lainnya.

## Langkah-langkah

1. Hubungkan ponsel ke jaringan WiFi modem, lalu buka `192.168.8.1` di peramban.
2. Masuk dengan kredensial admin. Jika belum pernah diubah, gunakan kredensial default `admin` / `admin` (lihat [daftar kredensial default](https://hm.cakson.my.id/id/blog/login-192-168-8-1)).
3. Buka menu **WLAN** atau **WiFi** kemudian pilih **WiFi Basic Settings**.
4. Pada bagian **SSID**, ubah nama jaringan WiFi jika diinginkan.
5. Pada bagian **WPA PreSharedKey**, masukkan kata sandi baru dengan panjang minimal 8 karakter.
6. Klik **Save** atau **Apply**.

Setelah perubahan disimpan, seluruh perangkat yang terhubung akan terputus. Hubungkan kembali perangkat menggunakan kata sandi yang baru.

## Tips Keamanan

- **Gunakan kata sandi yang kuat**: kombinasi huruf besar, huruf kecil, angka, dan simbol. Hindari penggunaan tanggal lahir atau nomor rumah.
- **Jangan gunakan WEP**: enkripsi ini sudah usang dan rentan terhadap serangan. Pilih WPA2 atau WPA3.
- **Sembunyikan SSID?** Tidak disarankan. Sinyal WiFi tetap dapat dideteksi, namun Anda akan kesulitan saat menghubungkan perangkat baru.
- **Sering menerima tamu?** Aktifkan **Guest WiFi** di Huawei Manager. Fitur ini menyediakan SSID kedua dengan batas waktu akses yang dapat dikonfigurasi.

## Alternatif: Mengganti Kata Sandi Tanpa Peramban

Huawei Manager menyediakan akses cepat ke pengaturan WiFi modem. Cukup masuk satu kali, lalu Anda dapat mengelola jaringan WiFi, [memeriksa kuota](https://hm.cakson.my.id/id/blog/cek-kuota-orbit-star-2), dan [mengunci band LTE](https://hm.cakson.my.id/id/blog/lte-band-lock-guide) dari satu aplikasi. [Unduh gratis](https://hm.cakson.my.id/id/).