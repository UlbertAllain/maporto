# TFNS — Personal Portfolio

Portfolio statis Timotius Fergiwana Noel Sabekti, dibuat dengan Next.js App Router, TypeScript, dan CSS. Mengikuti desain editorial ivory/forest-green dengan Plus Jakarta Sans, animasi morph, scroll reveal, dan galeri sliding.

## Menjalankan di Windows

1. Install **Node.js 22 LTS atau lebih baru** dari https://nodejs.org/.
2. Ekstrak seluruh ZIP ke folder biasa, misalnya `C:\Projects\tfns-portfolio`. Jangan menjalankan dari dalam ZIP.
3. Klik dua kali **START-WINDOWS.bat**. Pada pertama kali dijalankan, internet diperlukan untuk instalasi dependency.
4. Buka **http://localhost:3000** setelah server siap. Tekan **Ctrl+C** di terminal untuk berhenti.

Alternatif dari CMD atau PowerShell, di dalam folder yang berisi `package.json`:

```sh
npm ci
npm run dev
```

Jika PowerShell menolak `npm.ps1`, gunakan `npm.cmd ci` dan `npm.cmd run dev`, atau buka Command Prompt. Tidak perlu mengubah Execution Policy.

## Build dan preview produksi

```sh
npm run build
npm start
```

- `BUILD-WINDOWS.bat` membuat hasil ekspor di folder **out/**.
- `PREVIEW-WINDOWS.bat` menjalankan hasil ekspor yang sudah disertakan. Ini hanya memerlukan Node.js; tidak perlu instalasi dependency untuk preview.
- `npm start` memakai server lokal Node.js sederhana untuk melayani **out/**, bukan `next start`.
- Setelah mengubah source, jalankan build ulang sebelum preview produksi.
- Folder `out/` dapat diunggah ke static hosting. Deploy pada root domain; subdirectory memerlukan penyesuaian `basePath` dan asset paths.
- Jangan membuka `out/index.html` dengan double-click/file://; jalankan preview agar routing dan asset bekerja.
- Bila port 3000 dipakai: CMD `set PORT=3001&& npm start`; PowerShell `$env:PORT=3001; npm start`. Untuk development: `npm run dev -- --port 3001`.

## Fitur

- Enam section: Hero, About, Projects, Expertise, Experience, Contact.
- Lima cover pilihan dalam komposisi editorial. Di mobile, cover dapat digeser horizontal.
- Halaman semua proyek dan tujuh halaman detail yang diekspor statis.
- Galeri screenshot dengan next/previous, thumbnail, pembesaran, dan Escape untuk menutup.
- Animasi morph pada bingkai portrait/panel, sliding pada pergantian screenshot, scroll reveal, dan hover.
- `prefers-reduced-motion` mematikan animasi dan smooth scrolling.
- Font lokal melalui paket Fontsource, tidak mengambil Google Fonts saat runtime/build.
- Link email dan WhatsApp langsung; tidak ada formulir palsu atau backend.
- Navigasi keyboard, focus ring, skip link, alt text, serta dialog native.

## Struktur

```text
src/app/                  Halaman, metadata, dan global CSS
src/app/projects/         Index proyek dan detail statis
src/components/           Header, cover, galeri, animasi, contact
src/data/portfolio.ts     Seluruh data profil, proyek, pengalaman
public/images/projects/   Screenshot asli dari PDF
public/images/portraits/  Aset portrait
scripts/                  Launcher development dan preview statis
out/                      Hasil build yang siap dilayani
```

Edit teks/kontak/proyek di `src/data/portfolio.ts`. Teks introduction dan About ada di `src/app/page.tsx`. Warna, ukuran, breakpoints, dan animasi berada di `src/app/globals.css`. Setiap proyek memiliki `images` dan `captions` berurutan. Nama slug dipakai untuk membuat URL saat build.

## Sumber konten dan aset

Deskripsi proyek, pengalaman, pendidikan, dan kontak mengacu pada `lamaran timotiusfns(1).pdf` yang disediakan pemilik. Semua screenshot proyek diekstrak dari image stream PDF, lalu disimpan sebagai WebP; bukan mockup hasil generasi. Detail asal tercatat di `ASSET-SOURCES.md`.

Portrait About diambil dari desain yang disetujui. Hero merupakan aset cutout hasil generasi berdasarkan portrait pada desain; bukan foto sumber resolusi penuh. Ganti di `public/images/portraits/` jika foto asli tersedia. Resolusi screenshot dibatasi resolusi gambar yang tertanam dalam PDF.

Dokumen lamaran lengkap tidak disertakan ke folder publik karena memuat data pribadi yang tidak diperlukan untuk portfolio.

## Validasi

```sh
npm run typecheck
npm run build
```

Build dan TypeScript diverifikasi di Linux dengan Node.js 24. Skrip memakai Node/npm lintas platform, `.bat` memakai CRLF dan path Windows; eksekusi native di laptop Windows belum diuji. Lockfile disertakan. Jangan menyalin `node_modules` Linux ke Windows; gunakan `npm ci`.

Tidak diperlukan `.env`, API key, Docker, WSL, database, atau akun layanan. Jangan memasukkan kredensial ke source atau folder public.


## Editorial motion

The homepage uses GSAP + ScrollTrigger for staggered typography, scroll-linked composition and portrait reveals. Motion for React handles the mobile menu and expandable expertise fields. The project collection and its seven detail pages retain their content.

The mobile layout has a full-screen menu, native horizontal project scrolling and tap-to-expand skill details. Keyboard navigation, Escape-to-close and system reduced-motion preferences are supported. Animations do not replace native page scrolling.

Run `npm ci` and `npm run check` to install the locked dependencies, validate TypeScript and produce the static `out/` export. Existing Windows batch scripts remain supported.
