# Design Document
## Website Lembaga Insan Peduli (LIP)

---

| Atribut | Detail |
|---|---|
| **Dokumen** | Design System & Visual Guide |
| **Versi** | 1.0 |
| **Tanggal** | 30 Mei 2026 |
| **Referensi PRD** | Bab 8 — Desain & Branding |
| **Nuansa** | Profesional & Terpercaya |
| **Tema** | Terang & Bersih (Light Mode) |
| **Audiens** | Donatur + Masyarakat Umum (seimbang) |

---

## 1. Filosofi Desain

Website LIP bukan sekadar brosur digital. Ia adalah **wajah pertama** yang dilihat calon donatur sebelum memutuskan untuk mempercayai lembaga ini dengan uang mereka — dan pintu masuk bagi masyarakat yang sedang mencari pertolongan.

Dua kelompok ini punya kebutuhan berbeda:

- **Donatur** ingin melihat: *"Apakah lembaga ini nyata, jujur, dan terkelola dengan baik?"*
- **Masyarakat umum** ingin melihat: *"Apakah saya bisa mendapatkan bantuan dari sini?"*

Desain harus menjawab keduanya — tanpa memihak salah satu. Caranya bukan dengan membuat tampilan yang "wah" atau penuh efek, melainkan dengan tampilan yang **bersih, teratur, dan mudah dibaca** — seperti kantor yang rapi, bukan pameran.

### Tiga Prinsip Utama

**1. Kepercayaan sebelum keindahan**
Setiap keputusan desain diprioritaskan untuk membangun rasa percaya. Ruang kosong (whitespace) yang cukup, hirarki tipografi yang jelas, dan konsistensi warna lebih penting daripada ornamen yang menarik perhatian.

**2. Jelas untuk semua orang**
Pengguna bisa datang dari HP kelas bawah dengan layar kecil. Teks harus tetap terbaca, tombol harus cukup besar untuk disentuh, dan halaman tidak boleh berat. Desain yang baik bukan yang terlihat canggih di laptop, tapi yang tetap nyaman di HP Rp 1 jutaan.

**3. Karakter lembaga, bukan template**
Hindari kesan "website template gratis". Setiap elemen visual — dari pemilihan font hingga cara kartu program disusun — harus mencerminkan identitas LIP sebagai lembaga yang serius, amanah, dan dekat dengan masyarakat.

---

## 2. Mood & Referensi Visual

### 2.1 Kata Kunci Visual
`institutional` · `grounded` · `trustworthy` · `clean` · `humanist` · `honest`

### 2.2 Yang Harus Dihindari

| Hindari | Alasan |
|---|---|
| Gradien warna-warni (ungu-biru-pink) | Terkesan seperti startup tech, bukan lembaga sosial |
| Animasi berlebihan (parallax, floating elemen) | Memberatkan HP low-end, mengganggu fokus |
| Foto stock generik (orang asing tersenyum) | Tidak autentik, memperlemah kepercayaan |
| Font dekoratif / kaligrafi Arab di body teks | Mengurangi keterbacaan, terkesan amatir |
| Warna neon atau terlalu jenuh | Tidak memancarkan kesan profesional |
| Layout asimetris ekstrem | Membingungkan pengguna awam |

### 2.3 Yang Dikejar

| Kejar | Contoh nyata |
|---|---|
| Warna dari alam (hijau tanah, krem, emas kusam) | Seperti warna daun, tanah, kayu |
| Foto dokumentasi asli kegiatan lapangan | Bukan model, tapi orang nyata yang dibantu |
| Tipografi yang berwibawa namun hangat | Serif untuk judul, sans-serif untuk isi |
| Struktur grid yang konsisten dan rapi | Setiap halaman terasa "sama" secara visual |
| Ikon sederhana, tidak kelebihan detail | Outline tipis, bukan ilustrasi cartoon |

---

## 3. Identitas Visual

### 3.1 Palet Warna

Palet ini dibangun dari tiga akar makna:
- **Hijau tua** → alam, keislaman, kepercayaan, pertumbuhan
- **Emas kusam** → amanah, nilai, kemuliaan — bukan glamor
- **Krem/putih alami** → kebersihan, keterbukaan, kejujuran

#### Warna Primer

```
Hijau Institusional   #1B4D3E
─────────────────────────────
Digunakan untuk: header, footer, tombol utama, aksen tegas.
Jangan gunakan sebagai background konten panjang.
Pasangan teks: #FFFFFF atau #F0F7F4
```

```
Hijau Navigasi        #2D6A4F
─────────────────────────────
Digunakan untuk: hover state, border aktif, elemen interaktif.
Satu tingkat lebih terang dari Hijau Institusional.
```

```
Emas Amanah           #B07D2A
─────────────────────────────
Digunakan untuk: badge "Unggulan", garis dekoratif tipis,
label kategori, ikon penekanan.
TIDAK digunakan sebagai warna tombol utama.
```

#### Warna Netral (Fondasi Layout)

```
Putih Bersih          #FFFFFF   → Background utama halaman
Krem Lembut           #F8F6F1   → Background section alternating
Abu Sangat Terang     #F0EDE8   → Border kartu, divider
Abu Sedang            #A09C95   → Teks placeholder, metadata
Abu Gelap             #3D3A36   → Teks paragraf utama
Hampir Hitam          #1A1814   → Judul, heading besar
```

#### Warna Semantik

```
Sukses / Aktif        #2D6A4F   → Status program berjalan
Perhatian             #B07D2A   → Catatan penting, deadline
Informasi             #2E5FA3   → Link eksternal, info tambahan
```

#### Panduan Kontras (Aksesibilitas)

Semua kombinasi teks-background wajib memenuhi rasio kontras minimum **4.5:1** (WCAG AA):

| Teks | Background | Rasio | Status |
|---|---|---|---|
| `#1A1814` | `#FFFFFF` | 17.5:1 | ✅ Aman |
| `#3D3A36` | `#F8F6F1` | 9.2:1 | ✅ Aman |
| `#FFFFFF` | `#1B4D3E` | 9.8:1 | ✅ Aman |
| `#FFFFFF` | `#B07D2A` | 3.1:1 | ⚠️ Jangan untuk teks kecil |
| `#B07D2A` | `#FFFFFF` | 4.7:1 | ✅ Aman untuk teks ≥16px |

---

### 3.2 Tipografi

Filosofi: **serif untuk otoritas, sans-serif untuk keterbacaan.**

#### Font Judul — Lora

```
Font    : Lora (Google Fonts)
Gaya    : Regular (400) dan Bold (700)
Karakter: Serif humanis dengan kurva organik.
          Tidak kaku seperti Times New Roman,
          tidak modern seperti Playfair Display.
          Cocok untuk lembaga yang ingin terkesan
          serius namun tetap hangat.
Gunakan : H1, H2, tagline hero, nama program
```

**Contoh penggunaan:**
```
H1 Hero     → Lora Bold, 40–48px, #1A1814, line-height 1.2
H2 Section  → Lora Bold, 28–32px, #1B4D3E, line-height 1.3
H3 Kartu    → Lora Regular, 18–20px, #1A1814, line-height 1.4
```

#### Font Body — DM Sans

```
Font    : DM Sans (Google Fonts)
Gaya    : Regular (400), Medium (500)
Karakter: Geometric sans-serif yang bersih.
          Dibuat untuk keterbacaan di layar kecil.
          Tidak kelihatan seperti font "default browser".
Gunakan : Paragraf, label, navigasi, tombol, metadata
```

**Contoh penggunaan:**
```
Paragraf    → DM Sans Regular, 15–16px, #3D3A36, line-height 1.75
Label/Badge → DM Sans Medium, 11–12px, uppercase, letter-spacing 0.8px
Navigasi    → DM Sans Medium, 14px, #3D3A36
Tombol      → DM Sans Medium, 14px, letter-spacing 0.3px
```

#### Skala Tipografi Lengkap

| Elemen | Font | Ukuran | Weight | Warna |
|---|---|---|---|---|
| Hero Tagline | Lora | 44px | 700 | `#1A1814` |
| H2 Section | Lora | 30px | 700 | `#1B4D3E` |
| H3 Kartu | Lora | 19px | 400 | `#1A1814` |
| Paragraf | DM Sans | 16px | 400 | `#3D3A36` |
| Teks kecil / meta | DM Sans | 13px | 400 | `#A09C95` |
| Label / Badge | DM Sans | 11px | 500 | uppercase |
| Tombol | DM Sans | 14px | 500 | — |
| Navigasi | DM Sans | 14px | 500 | `#3D3A36` |

#### Aturan Tipografi

- Maksimal **2 ukuran font berbeda** dalam satu kartu atau blok konten.
- Jangan gunakan `font-weight: 600` atau `700` pada body text — hanya untuk heading.
- Jarak antar paragraf: `margin-bottom: 1.25rem` (bukan `1em`).
- Lebar baris teks (measure): maksimal **65–70 karakter** per baris untuk keterbacaan optimal.
- Jangan gunakan `text-align: justify` — membuat jarak antar kata tidak merata di layar kecil.

---

### 3.3 Ikonografi

Gunakan library **Tabler Icons** (outline, bukan filled).

```
Library : Tabler Icons — https://tabler.io/icons
Gaya    : Outline (stroke 1.5px)
Ukuran  : 20px untuk ikon inline, 28px untuk ikon kartu program
Warna   : Mengikuti warna teks sekitarnya atau #2D6A4F
```

**Ikon per program kerja:**

| Program | Ikon Tabler |
|---|---|
| Peduli ODGJ | `ti-heart-handshake` |
| Safari Sosial | `ti-map-pin` |
| Santunan | `ti-hand-heart` |
| Kemanusiaan & Bencana | `ti-first-aid-kit` |
| Pendidikan & Pemberdayaan | `ti-school` |
| Keagamaan | `ti-book` |
| Hubungi Kami | `ti-message-circle` |
| Transparansi | `ti-file-check` |
| Lokasi | `ti-map-2` |
| Telepon | `ti-phone` |
| Email | `ti-mail` |

**Ikon media sosial (footer & halaman Hubungi Kami):**

| Platform | Ikon Tabler | URL Target |
|---|---|---|
| WhatsApp | `ti-brand-whatsapp` | `https://wa.me/6285122674751` |
| Instagram | `ti-brand-instagram` | `https://instagram.com/lembagainsanpeduli` |
| Facebook | `ti-brand-facebook` | Halaman FB "Lembaga Insan Peduli" |
| TikTok | `ti-brand-tiktok` | Akun TikTok "Lembaga Insan Peduli" |

> Ikon sosmed di footer ukuran **20px**, diberi padding sentuh minimal **44×44px** untuk mobile. Warna default `#8FBBA8`, hover `#FFFFFF`.

**Aturan ikon:**
- Jangan mix gaya outline dan filled dalam satu halaman.
- Ikon dekoratif (tidak punya fungsi klik) wajib diberi `aria-hidden="true"`.
- Jangan memperbesar ikon melebihi 32px — terkesan cartoon.

---

## 4. Komponen UI

### 4.1 Tombol

Tiga jenis tombol, masing-masing punya peran berbeda:

#### Tombol Primer (CTA Utama)
```
Digunakan  : "Donasi Sekarang", "Hubungi Kami"
Background : #1B4D3E
Teks       : #FFFFFF, DM Sans Medium 14px
Padding    : 12px 24px
Radius     : 6px
Border     : none
Hover      : background #153D31, transisi 0.2s
```

#### Tombol Sekunder (Aksi Pendukung)
```
Digunakan  : "Lihat Program", "Selengkapnya"
Background : transparent
Teks       : #1B4D3E, DM Sans Medium 14px
Padding    : 11px 23px
Radius     : 6px
Border     : 1.5px solid #1B4D3E
Hover      : background #F0F7F4, transisi 0.2s
```

#### Tombol Teks (Link Inline)
```
Digunakan  : "Baca selengkapnya →", link navigasi
Background : none
Teks       : #2D6A4F, DM Sans Medium 14px
Dekorasi   : underline muncul saat hover
Padding    : 0
```

**Aturan tombol:**
- Satu halaman maksimal **2 tombol primer** yang terlihat bersamaan — lebih dari itu mengencerkan nilai CTA.
- Tombol tidak boleh lebar penuh (`width: 100%`) kecuali di mobile (lebar layar < 400px).
- Jangan gunakan ikon di dalam tombol jika teksnya sudah cukup jelas.

---

### 4.2 Kartu Program

Kartu digunakan di halaman Beranda (highlight) dan halaman Program Kerja.

```
Background : #FFFFFF
Border     : 1px solid #F0EDE8
Radius     : 10px
Padding    : 24px 24px 20px
Shadow     : none (default) → box-shadow: 0 4px 16px rgba(0,0,0,0.06) saat hover
Transisi   : transform 0.2s, box-shadow 0.2s
Hover      : transform translateY(-2px)
```

**Struktur isi kartu (urutan dari atas):**
1. Ikon program (28px, warna `#2D6A4F`)
2. Label kategori (badge kecil — opsional untuk program unggulan)
3. Nama program (Lora 19px)
4. Deskripsi singkat (DM Sans 14px, max 2–3 kalimat)
5. Tag frekuensi / status (misal: "3× per bulan", "Siaga")

**Kartu Program Unggulan (Peduli ODGJ):**
```
Border     : 2px solid #1B4D3E
Badge      : "Program Unggulan" — background #1B4D3E, teks #FFFFFF,
             font 10px uppercase, padding 3px 10px, radius 100px
```

---

### 4.3 Navigasi Header

```
Background     : #FFFFFF
Border bawah   : 1px solid #F0EDE8
Tinggi         : 64px (desktop), 56px (mobile)
Posisi         : sticky top
Shadow         : 0 1px 8px rgba(0,0,0,0.06) saat di-scroll
```

**Susunan elemen (kiri ke kanan):**
1. Logo (ikon + nama lembaga)
2. Menu navigasi (tengah atau kanan)
3. Tombol "Donasi Sekarang" (paling kanan)

**State navigasi:**
```
Default  : teks #3D3A36
Hover    : teks #1B4D3E
Aktif    : teks #1B4D3E + border-bottom 2px solid #1B4D3E
```

---

### 4.4 Footer

```
Background : #1B4D3E
Teks utama : #FFFFFF
Teks muted : #8FBBA8
Border atas section bawah : 1px solid rgba(255,255,255,0.1)
Padding    : 48px 0 24px
```

**Isi footer (kolom):**

- **Kolom 1 (lebar):** Nama lembaga, deskripsi singkat, kontak lengkap:
  - 📍 Jl. Palopo, Tunon, Kec. Tegal Sel., Kota Tegal, Jawa Tengah 52135
  - 📞 +62 851-2267-4751
  - Ikon sosmed: WhatsApp · Instagram · Facebook · TikTok
- **Kolom 2:** Link cepat halaman (Beranda, Tentang Kami, Program, Hubungi Kami)
- **Kolom 3:** Program utama (6 program LIP)

**Footer bottom bar:**
```
Teks : "© 2026 Lembaga Insan Peduli · Organisasi Amal · Kota Tegal, Jawa Tengah"
Font : DM Sans 12px, #5C9E86
Align: center
```

---

### 4.5 Badge / Label

```
Radius     : 100px (pill)
Padding    : 4px 12px
Font       : DM Sans Medium 11px, uppercase, letter-spacing 0.6px
```

**Variasi:**
```
Hijau (default) : background #E8F5EE, teks #1B4D3E
Emas (unggulan) : background #FDF3E0, teks #8A5E1A
Abu (netral)    : background #F0EDE8, teks #5C5752
```

---

### 4.6 Form Kontak

```
Input / Textarea:
  Background  : #FFFFFF
  Border      : 1px solid #D4CFC9
  Radius      : 6px
  Padding     : 10px 14px
  Font        : DM Sans Regular 15px, #1A1814
  Fokus       : border #2D6A4F, outline none,
                box-shadow 0 0 0 3px rgba(45,106,79,0.12)
  Placeholder : #A09C95

Label:
  Font        : DM Sans Medium 13px
  Warna       : #3D3A36
  Margin bawah: 6px
```

---

## 5. Layout & Grid

### 5.1 Grid Sistem

```
Container max-width : 1160px
Padding horizontal  : 32px (desktop), 20px (mobile)
Kolom               : 12 kolom, gap 24px
```

**Pola grid yang digunakan:**

| Section | Desktop | Mobile |
|---|---|---|
| Kartu program | 3 kolom | 1 kolom |
| Nilai lembaga | 5 kolom | 2 kolom |
| Pengurus | 2 kolom | 1 kolom |
| Hero | Full width (1 kolom, teks kiri) | Full width |
| Footer | 3 kolom | 1 kolom stacked |

### 5.2 Spacing Sistem

Semua jarak menggunakan kelipatan **8px**:

```
4px   → Jarak sangat kecil (ikon ke teks dalam baris)
8px   → Jarak dalam komponen (label ke judul kartu)
16px  → Jarak antar elemen dalam satu blok
24px  → Padding kartu, gap antar kolom
32px  → Jarak antar section kecil
48px  → Jarak antar section besar
64px  → Padding vertikal section halaman
96px  → Jarak sangat besar (hero)
```

### 5.3 Pola Section Beranda

```
[Top Bar]        → hijau gelap, teks kontak
[Navigasi]       → putih, sticky
[Hero]           → krem lembut (#F8F6F1), teks kiri
[Program]        → putih (#FFFFFF)
[Nilai Lembaga]  → hijau institusional (#1B4D3E), teks putih
[CTA Donasi]     → krem emas (#FDF3E0)
[Footer]         → hijau institusional (#1B4D3E)
```

Pola alternating background ini menciptakan ritme visual yang memecah kebosanan tanpa perlu ornamen berlebihan.

---

## 6. Fotografi & Aset Visual

### 6.1 Prioritas Foto

Urutan prioritas foto yang digunakan di website:

1. **Foto dokumentasi kegiatan asli LIP** — prioritas utama, paling membangun kepercayaan.
2. **Foto potret penerima manfaat** (dengan izin) — menghidupkan empati.
3. **Foto tim pengurus saat kegiatan** — memperlihatkan lembaga dikelola orang nyata.
4. **Ilustrasi SVG** — pengganti sementara jika foto belum tersedia.
5. **Foto stock** — hanya sebagai last resort, pilih yang natural (bukan model yang terlalu sempurna).

### 6.2 Panduan Foto

```
Rasio       : 16:9 untuk banner, 4:3 untuk kartu, 1:1 untuk avatar/profil
Ukuran file : Maksimal 200KB setelah kompresi (gunakan squoosh.app atau TinyPNG)
Format      : WebP (utama), JPEG (fallback)
Resolusi    : Minimal 1200px lebar untuk banner hero
```

**Mood foto yang dicari:**
- Pengambilan sudut natural, bukan terlalu "posed"
- Cahaya alami lebih baik dari flash studio
- Konteks lapangan (desa, masjid, rumah warga) lebih kuat dari kantor
- Ekspresi nyata — senyum yang tulus, bukan senyum kamera

**Yang harus dihindari:**
- Foto close-up kemiskinan yang mengeksploitasi (anak menangis, kondisi sangat memprihatinkan tanpa konteks)
- Filter Instagram / preset tone yang berlebihan
- Watermark lembaga lain

### 6.3 Ilustrasi SVG (Placeholder)

Jika foto belum tersedia, gunakan ilustrasi SVG dengan karakter:
- Warna dari palet LIP (hijau + krem + emas)
- Gaya flat, bukan cartoon berlebihan
- Menggambarkan aktivitas sosial (orang berbagi, membangun, berdoa bersama)

---

## 7. Animasi & Interaksi

Prinsip: **animasi harus terasa fungsional, bukan dekoratif.**

### 7.1 Yang Boleh Digunakan

```
Hover kartu        : translateY(-2px) + shadow muncul, durasi 0.2s ease
Hover tombol       : perubahan background, durasi 0.2s ease
Hover link nav     : perubahan warna teks, durasi 0.15s
Fade-in on scroll  : opacity 0→1 + translateY(12px→0), durasi 0.4s
                     Hanya untuk section pertama yang terlihat
Sticky nav shadow  : box-shadow muncul halus saat scroll > 10px
```

### 7.2 Yang Dilarang

- Parallax scroll pada background atau gambar
- Auto-play video atau animasi looping tanpa pause button
- Loading screen / splash screen
- Animasi yang berjalan terus menerus (infinite loop yang mengganggu fokus)
- Efek ketik (typewriter) pada headline — terkesan gimmick
- Scroll-triggered animasi di setiap elemen (hanya gunakan 1–2 per halaman)

### 7.3 Performa

```
Durasi animasi : 150ms–400ms (tidak lebih)
Easing         : ease, ease-out (hindari linear untuk transisi UI)
Reduced motion : Semua animasi wajib dimatikan jika
                 prefers-reduced-motion: reduce aktif
```

---

## 8. Responsivitas

### 8.1 Breakpoint

```
Mobile   : 0px – 639px    (desain pertama dari sini)
Tablet   : 640px – 1023px
Desktop  : 1024px – 1279px
Wide     : 1280px ke atas (max-width container 1160px)
```

### 8.2 Penyesuaian Mobile

| Elemen | Desktop | Mobile |
|---|---|---|
| Font H1 Hero | 44px | 30px |
| Font H2 Section | 30px | 24px |
| Padding section | 64px vertikal | 40px vertikal |
| Grid kartu | 3 kolom | 1 kolom |
| Navigasi | Horizontal | Hamburger menu |
| Tombol | Inline | Full width (dalam form) |
| Footer | 3 kolom | 1 kolom stacked |

### 8.3 Touch Target

Semua elemen yang bisa diklik di mobile harus memiliki area sentuh minimal **44×44px** — termasuk ikon sosial di footer dan link navigasi di hamburger menu.

---

## 9. Aksesibilitas

Website ini harus dapat digunakan oleh semua orang, termasuk yang memiliki keterbatasan.

### Daftar Wajib

- [ ] Semua gambar punya atribut `alt` yang deskriptif
- [ ] Form memiliki `<label>` yang terhubung ke setiap input
- [ ] Navigasi keyboard berfungsi (Tab, Enter, Escape)
- [ ] Fokus elemen terlihat jelas (jangan hapus outline fokus)
- [ ] Heading berurutan (H1 → H2 → H3, tidak loncat)
- [ ] Warna tidak jadi satu-satunya penanda informasi (misal: error bukan hanya merah, tapi juga ada ikon atau teks)
- [ ] Ukuran teks bisa diperbesar sampai 200% tanpa layout rusak
- [ ] Video (jika ada nanti) memiliki teks transkrip atau caption

---

## 10. Checklist Sebelum Launch

### Visual
- [ ] Semua warna sesuai palet yang telah ditentukan
- [ ] Font Lora dan DM Sans dimuat dari Google Fonts
- [ ] Tidak ada placeholder "Lorem Ipsum" yang tersisa
- [ ] Semua foto sudah dikompres (< 200KB per gambar)
- [ ] Favicon sudah terpasang (logo LIP ukuran 32×32px)

### Fungsional
- [ ] Semua link navigasi berfungsi
- [ ] Tombol WhatsApp / donasi membuka aplikasi yang benar
- [ ] Form kontak terkirim ke email atau WhatsApp admin
- [ ] Website tampil baik di Chrome, Firefox, dan Safari mobile

### Performa
- [ ] Skor Google PageSpeed Insights ≥ 80 (mobile)
- [ ] Tidak ada gambar yang dimuat lebih besar dari yang diperlukan
- [ ] CSS dan JS sudah diminifikasi

---

*Dokumen ini digunakan bersama PRD_Website_LembagaInsanPeduli.md sebagai panduan lengkap pengembangan website LIP Fase 1.*

---

**Lembaga Insan Peduli** | Design System v1.0 | 2026
