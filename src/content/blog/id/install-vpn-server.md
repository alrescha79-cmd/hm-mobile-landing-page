---
slug: install-vpn-server
lang: id
title: Panduan Lengkap Instalasi Server VPN Gratis (VLESS, VMess, Trojan, SSH, SlowDNS)
description: Cara mudah membuat dan menginstall server VPN multi-protokol (VLESS, VMess, Trojan, Shadowsocks, SSH, SlowDNS) di VPS sendiri menggunakan script auto installer gratis.
date: 2026-08-27
---

Membangun server VPN pribadi kini jauh lebih mudah berkat script auto installer multi-protokol. Anda bisa mengaktifkan berbagai protokol modern sekaligus seperti **Xray (VLESS, VMess, Trojan)**, **Shadowsocks**, **OpenVPN**, **SSH**, hingga **SlowDNS** lengkap dengan menu manajemen akun berbasis terminal.

Script ini bersifat **gratis dan open source** tanpa batasan lisensi IP, sehingga bebas digunakan di VPS mana pun.

---

## Persiapan Sebelum Instalasi

Sebelum memulai, siapkan hal-hal berikut:

1. **VPS dengan Akses Root**  
   Pastikan Anda memiliki VPS dengan akses `root` dan memiliki alamat `IPv4 publik`.
2. **Sistem Operasi yang Didukung**  
   - Ubuntu 20.04, 22.04, 24.04
   - Debian 10, 11, 12
3. **Domain atau Subdomain**  
   Siapkan domain/subdomain yang sudah diarahkan ke IP VPS Anda (DNS record tipe `A`). Contoh: `vpn.domainanda.com`.
4. **Cloudflare (Opsional)**  
   Jika menggunakan Cloudflare untuk mengelola DNS, pastikan status proxy dimatikan (**DNS Only** / ikon awan abu-abu).

---

## Langkah Instalasi

### 1. Masuk sebagai Root

Login ke VPS Anda melalui terminal/SSH, lalu beralih ke user root:

```bash
sudo -i
```

### 2. Jalankan Script Auto Installer

Salin dan jalankan satu baris perintah berikut di terminal VPS:

```bash
apt-get update && \
apt-get --reinstall --fix-missing install -y whois bzip2 gzip coreutils wget screen nscd build-essential && \
wget --inet4-only --no-check-certificate -O setup.sh https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/setup.sh && \
chmod +x setup.sh && \
screen -S setup ./setup.sh
```

Proses instalasi akan berjalan otomatis. Saat diminta memasukkan domain, ketik nama domain/subdomain yang sudah Anda arahkan ke IP VPS tadi.

---

## Informasi Penting & Pemecahan Masalah

- **Jika koneksi terminal terputus saat instalasi:**  
  Jangan jalankan ulang dari perintah pertama. Cukup login kembali ke VPS dan jalankan:
  ```bash
  ./setup.sh
  ```
- **Membuka menu kontrol:**  
  Setelah instalasi dan sistem melakukan reboot otomatis, menu utama akan langsung muncul. Jika tidak, jalankan perintah:
  ```bash
  menu
  ```
- **Jika menu fitur (opsi 8) tidak bisa dibuka:**  
  Keluar dari menu dengan `Ctrl + C`, lalu unduh pembaruan file fitur:
  ```bash
  curl -o /usr/bin/features https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/project/features
  ```

---

## Setup Notifikasi Bot Telegram

Server ini dilengkapi integrasi bot Telegram untuk memantau status dan pembuatan akun secara langsung.

![Menu Utama](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/menu-utama.png)

1. Pastikan Anda berada di menu utama (jalankan `menu`).
2. Pilih nomor **6** untuk setup notifikasi Telegram.
3. Konfirmasi dengan mengetik `y` (Yes).

![Setup Notifikasi Telegram](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/setuptele.png)

4. Masukkan **Token Bot** Telegram Anda.
5. Masukkan **Chat ID** Telegram Anda.
6. Tekan **Enter** untuk menyimpan. Notifikasi akan aktif secara otomatis.

---

## Perintah Cepat Manajemen Akun

Selain melalui perintah `menu`, Anda bisa membuat, menghapus, memeriksa, dan memperpanjang akun secara langsung melalui CLI:

### Pembuatan Akun
- `add-vless` — Membuat akun VLESS
- `add-vmess` — Membuat akun VMess
- `add-trojan` — Membuat akun Trojan
- `add-shadowsocks` — Membuat akun Shadowsocks
- `add-ssh` — Membuat akun SSH

### Pengecekan Akun
- `check-vless` — Cek daftar & user online VLESS
- `check-vmess` — Cek daftar & user online VMess
- `check-trojan` — Cek daftar & user online Trojan
- `check-shadowsocks` — Cek daftar & user online Shadowsocks
- `check-ssh` — Cek user online SSH

### Perpanjangan & Penghapusan
- Perpanjang akun: `renew-vless`, `renew-vmess`, `renew-trojan`, `renew-shadowsocks`, `renew-ssh`
- Hapus akun: `del-vless`, `del-vmess`, `del-trojan`, `del-shadowsocks`, `del-ssh`

---

## Konfigurasi Jadwal Auto Reboot

Secara default, server disetel untuk melakukan reboot otomatis setiap hari pukul 05:00 WIB guna menjaga stabilitas memori.

### Mengubah Jadwal via Menu

1. Di menu utama (`menu`), pilih opsi **8** (Pengaturan Sistem).

![Pengaturan Sistem](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/pengaturan.png)

2. Pilih nomor **12** untuk masuk ke pengaturan auto reboot.

![Set Jam Auto Reboot](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/set-jam.png)

3. Pilih **1** untuk mengubah jam reboot. Masukkan waktu dalam format 24 jam (contoh: `04:00`).
4. Ketik `y` untuk menyimpan.

### Mengatur / Membatalkan via Crontab Langsung

Jika ingin mengatur via baris perintah crontab:

```bash
# Set reboot setiap jam 05:00
crontab -l > /tmp/cron.txt
sed -i "/reboot$/d" /tmp/cron.txt
echo -e "\n"'0 5 * * * '"$(which reboot)" >> /tmp/cron.txt
crontab /tmp/cron.txt
rm -rf /tmp/cron.txt
```

Untuk **menonaktifkan** auto reboot:

```bash
crontab -l > /tmp/cron.txt
sed -i "/reboot$/d" /tmp/cron.txt
crontab /tmp/cron.txt
rm -rf /tmp/cron.txt
```

---

## Pengaturan Wildcard DNS di Cloudflare

Untuk mendukung subdomain acak atau konfigurasi CDN/SNI pada protokol tertentu:

1. Masuk ke dashboard Cloudflare dan pilih domain Anda.
2. Buka tab **DNS** > **Records**.
3. Tambahkan A Record baru:
   - **Type:** `A`
   - **Name:** `@` (atau `*` untuk wildcard)
   - **IPv4 Address:** `IP VPS Anda`
   - **Proxy Status:** `DNS Only` (awan abu-abu)
4. Klik **Save**.

![Setting DNS Wildcard di Cloudflare](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/wc.png)

---

## Dukungan & Komunitas

Script ini dikembangkan secara open source oleh [@Alrescha79](https://github.com/alrescha79-cmd). Jika menemui kendala atau ingin berdiskusi mengenai konfigurasi jaringan modem dan VPN:

- **Telegram:** [@Alrescha79](https://t.me/Alrescha79)
- **Email:** `anggun@cakson.my.id`
- **Lisensi:** MIT License
