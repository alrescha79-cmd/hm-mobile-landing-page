---
slug: what-is-huawei-manager
lang: id
title: Apa Itu Huawei Manager Mobile?
description: Aplikasi Android gratis dan open-source buat ngatur modem Huawei LTE lewat WiFi — sinyal, band, WiFi, SMS, dan lainnya. Tanpa root, tanpa cloud, tanpa akun.
date: 2026-7-15
---

Huawei Manager Mobile itu aplikasi Android gratis yang ngobrol langsung sama modem Huawei LTE kamu lewat WiFi. Aplikasi ini ngebuka fitur-fitur yang disembunyiin antarmuka web bawaan modem dan nampilinnya di HP kamu.

## Bisa ngapain aja

Aplikasi ini pakai API XML klasik Huawei yang ada di semua modem kompatibel, di alamat `192.168.8.1`. Kalau kamu pernah buka halaman admin modem di browser, aplikasi ini bisa ngatur semuanya — tanpa root, tanpa akun cloud, tanpa daftar apa pun.

### Dashboard sinyal

Semua metrik keliatan sekilas: RSSI, RSRP, RSRQ, SINR, dan band LTE yang lagi aktif. Ada juga speedometer traffic realtime plus penghitung pemakaian harian dan bulanan.

### Pencari Sinyal

Putar atau geser posisi modem sambil lihat metriknya langsung. Pas RSRP turun (artinya sinyal makin kuat) dan SINR tetap tinggi, berarti kamu nemu posisi paling mantap.

### Kunci Band LTE

Kunci band tertentu atau kombinasi carrier aggregation — contohnya `B3+B1+N40` — biar modem tetap di band yang beneran jalan di lokasimu. Ini solusi paling efektif buat koneksi yang lemah atau nggak stabil.

### Kelola perangkat WiFi

Lihat semua perangkat yang nyambung lengkap sama ikon vendor, band yang dipakai (2,4 atau 5 GHz), dan waktu sewa DHCP. Kick atau blokir perangkat, ganti namanya. Siapin WiFi Tamu dengan batas waktu (bisa diperpanjang per 30 menit). Kontrol orang tua bisa motong internet per perangkat dan jadwal tertentu.

### SMS

Baca, tulis, kirim, dan cari SMS — selama modemnya mendukung. Jumlah SMS yang belum dibaca muncul di dashboard.

### Pengaturan jaringan

Profil APN, saklar data seluler, mode port Ethernet, konfigurasi DHCP dan PPPoE — semua yang disembunyiin antarmuka bawaan.

### Widget layar utama

Status sinyal dan traffic tampil langsung di layar utama HP, di-update tiap jam.

### Peringatan pemakaian

Notifikasi push pas data harian atau bulanan mentok batas, pas IP publik berubah, atau pas ada versi baru aplikasi.

### Tes kecepatan

Tes kecepatan internet langsung dari aplikasi, plus shortcut buat pengaturan yang paling sering kamu ubah.

### Mode debug

Catat setiap panggilan API dan ekspor file HAR. Bikin laporan bug jadi lebih presisi.

## Privasi

Semuanya jalan lokal antara HP dan modem. Nggak ada akun, nggak ada server analitik, nggak ada pengumpulan data. Kode sumbernya berlisensi MIT dan tersedia di GitHub.

## Modem yang didukung

Semua router Huawei LTE yang punya API XML klasik di `192.168.8.1`. Sudah teruji di **Orbit Star 2 (B312-929)**. Model lain yang dikonfirmasi jalan: B310, B311, B312, B525, B535, B818, E5573, E5577, dan lainnya.

SMS dan sebagian pengaturan tergantung dari firmware modemnya.

## Cara dapat

Download APK dari [hm.cakson.my.id](/id/) — tiga arsitektur tersedia (arm64-v8a, armeabi-v7a, universal). Ada juga build pre-release kalau mau akses lebih awal.

Sambungkan HP ke WiFi modem, login pakai kredensial admin, dan kendalikan.
