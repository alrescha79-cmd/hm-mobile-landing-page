---
slug: install-vpn-server
lang: id
title: Panduan Lengkap Instalasi Server VPN Gratis (VLESS, VMess, Trojan, SSH, SlowDNS)
description: Cara membuat dan menginstal server VPN multi-protokol (VLESS, VMess, Trojan, Shadowsocks, SSH, SlowDNS) di VPS sendiri menggunakan skrip auto-installer gratis.
date: 2026-08-27
---

Membangun server VPN pribadi kini jauh lebih mudah berkat skrip auto-installer multi-protokol. Anda dapat mengaktifkan berbagai protokol modern sekaligus, seperti **Xray (VLESS, VMess, Trojan)**, **Shadowsocks**, **OpenVPN**, **SSH**, dan **SlowDNS**, lengkap dengan menu manajemen akun berbasis terminal.

Skrip ini **gratis dan sumber terbuka** tanpa batasan lisensi IP, sehingga bebas digunakan pada VPS mana pun.

---

## Persiapan Sebelum Instalasi

Siapkan hal-hal berikut sebelum memulai:

1. **VPS dengan akses root**  
   Pastikan Anda memiliki VPS dengan akses `root` dan alamat `IPv4` publik.
2. **Sistem operasi yang didukung**  
   - Ubuntu 20.04, 22.04, 24.04
   - Debian 10, 11, 12
3. **Domain atau subdomain**  
   Siapkan domain/subdomain yang telah diarahkan ke IP VPS melalui DNS record tipe `A`. Contoh: `vpn.domainanda.com`.
4. **Cloudflare (opsional)**  
   Jika menggunakan Cloudflare untuk pengelolaan DNS, pastikan status proxy dimatikan (**DNS Only** atau ikon awan abu-abu).

---

## Langkah Instalasi

### 1. Masuk sebagai Root

Login ke VPS melalui terminal/SSH, lalu beralih ke pengguna root:

```bash
sudo -i
```

### 2. Jalankan Skrip Auto-Installer

Salin dan jalankan perintah berikut pada terminal VPS:

```bash
apt-get update && \
apt-get --reinstall --fix-missing install -y whois bzip2 gzip coreutils wget screen nscd build-essential && \
wget --inet4-only --no-check-certificate -O setup.sh https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/setup.sh && \
chmod +x setup.sh && \
screen -S setup ./setup.sh
```

Proses instalasi berjalan otomatis. Saat diminta memasukkan domain, ketik nama domain/subdomain yang telah diarahkan ke IP VPS.

---

## Informasi Penting dan Pemecahan Masalah

- **Jika koneksi terminal terputus saat instalasi:**  
  Jangan menjalankan ulang seluruh perintah dari awal. Cukup login kembali ke VPS lalu jalankan:
  ```bash
  ./setup.sh
  ```
- **Membuka menu kontrol:**  
  Setelah instalasi dan proses reboot otomatis, menu utama akan muncul dengan sendirinya. Jika tidak muncul, jalankan perintah:
  ```bash
  menu
  ```
- **Jika menu fitur (opsi 8) tidak dapat dibuka:**  
  Keluar dari menu dengan `Ctrl + C`, lalu unduh pembaruan berkas fitur:
  ```bash
  curl -o /usr/bin/features https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/project/features
  ```

---

## Pengaturan Notifikasi Bot Telegram

Server ini dilengkapi integrasi bot Telegram untuk memantau status dan pembuatan akun secara langsung.

![Menu Utama](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/menu-utama.png)

1. Pastikan Anda berada di menu utama (jalankan `menu`).
2. Pilih nomor **6** untuk pengaturan notifikasi Telegram.
3. Konfirmasi dengan mengetik `y` (Yes).

![Setup Notifikasi Telegram](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/setuptele.png)

4. Masukkan **Token Bot** Telegram Anda.
5. Masukkan **Chat ID** Telegram Anda.
6. Tekan **Enter** untuk menyimpan. Notifikasi akan aktif secara otomatis.

---

## Perintah Cepat Manajemen Akun

Selain melalui perintah `menu`, Anda dapat membuat, menghapus, memeriksa, dan memperpanjang akun langsung melalui CLI:

### Pembuatan Akun
- `add-vless`: membuat akun VLESS
- `add-vmess`: membuat akun VMess
- `add-trojan`: membuat akun Trojan
- `add-shadowsocks`: membuat akun Shadowsocks
- `add-ssh`: membuat akun SSH

### Pengecekan Akun
- `check-vless`: daftar akun dan pengguna online VLESS
- `check-vmess`: daftar akun dan pengguna online VMess
- `check-trojan`: daftar akun dan pengguna online Trojan
- `check-shadowsocks`: daftar akun dan pengguna online Shadowsocks
- `check-ssh`: daftar pengguna online SSH

### Perpanjangan dan Penghapusan
- Perpanjang akun: `renew-vless`, `renew-vmess`, `renew-trojan`, `renew-shadowsocks`, `renew-ssh`
- Hapus akun: `del-vless`, `del-vmess`, `del-trojan`, `del-shadowsocks`, `del-ssh`

---

## Konfigurasi Jadwal Auto Reboot

Secara default, server diatur untuk melakukan reboot otomatis setiap hari pukul 05:00 WIB guna menjaga stabilitas memori.

### Mengubah Jadwal melalui Menu

1. Pada menu utama (`menu`), pilih opsi **8** (Pengaturan Sistem).

![Pengaturan Sistem](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/pengaturan.png)

2. Pilih nomor **12** untuk masuk ke pengaturan auto reboot.

![Set Jam Auto Reboot](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/set-jam.png)

3. Pilih **1** untuk mengubah jam reboot. Masukkan waktu dalam format 24 jam (contoh: `04:00`).
4. Ketik `y` untuk menyimpan.

### Mengatur atau Membatalkan melalui Crontab Langsung

Jika ingin mengatur jadwal langsung melalui perintah crontab:

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
2. Buka tab **DNS** kemudian pilih **Records**.
3. Tambahkan A Record baru:
   - **Type:** `A`
   - **Name:** `@` (atau `*` untuk wildcard)
   - **IPv4 Address:** `IP VPS Anda`
   - **Proxy Status:** `DNS Only` (awan abu-abu)
4. Klik **Save**.

![Setting DNS Wildcard di Cloudflare](https://raw.githubusercontent.com/alrescha79-cmd/sc-vpn/refs/heads/main/img/wc.png)

---

## Dukungan dan Komunitas

Skrip ini dikembangkan secara sumber terbuka oleh [@Alrescha79](https://github.com/alrescha79-cmd). Jika menemui kendala atau ingin berdiskusi mengenai konfigurasi jaringan modem dan VPN:

- **Telegram:** [@Alrescha79](https://t.me/Alrescha79)
- **Email:** `anggun@cakson.my.id`
- **Lisensi:** MIT License