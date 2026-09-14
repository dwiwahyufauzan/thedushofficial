# Phase 01 — Foundation: Setup & Design System

## Tujuan
Membangun fondasi proyek: konfigurasi TailwindCSS, design tokens, Google Fonts, TypeScript types, dan data statis. Ini adalah landasan untuk semua phase berikutnya.

---

## Task List

### 1.1 Konfigurasi TailwindCSS v4
- [ ] Verifikasi instalasi `tailwindcss ^4.3.0` dan `@tailwindcss/vite`
- [ ] Update `src/app.css` dengan `@import 'tailwindcss'`
- [ ] Buat `@theme {}` block dengan semua custom tokens
- [ ] Test bahwa TailwindCSS berjalan dengan `npm run dev`

### 1.2 Google Fonts
- [ ] Tambahkan `<link>` Google Fonts di `src/app.html`
  - Playfair Display: 700, 800, 900 (regular + italic)
  - Cormorant Garamond: 600, 700 (regular + italic)
  - Inter: 300, 400, 500, 600
- [ ] Tambahkan `rel="preconnect"` untuk performa
- [ ] Daftarkan font di `@theme` sebagai `--font-display`, `--font-heading`, `--font-body`

### 1.3 Design Tokens (@theme)
- [ ] Color tokens: `--color-bg-primary: #0a0a0a`, dll
- [ ] Font tokens: `--font-display`, `--font-heading`, `--font-body`
- [ ] Spacing tokens (opsional, Tailwind sudah punya default yang bagus)
- [ ] Custom utilities: `.heading-compressed` untuk tipografi ala BMTH

### 1.4 Global Base Styles (@layer base)
- [ ] `body`: dark background, off-white text, antialiasing
- [ ] `::selection`: highlight merah #c3423c
- [ ] `html`: scroll-behavior: smooth
- [ ] `img`: default block, max-width 100%
- [ ] Focus visible styles untuk accessibility

### 1.5 TypeScript Types
- [ ] Buat `src/lib/types/index.ts`
- [ ] Interface: `BandMember`, `Track`, `Album`, `Gig`, `SocialLinks`
- [ ] Export semua types

### 1.6 Data Statis
- [ ] Buat `src/lib/data/band-members.ts` — data personil band
- [ ] Buat `src/lib/data/discography.ts` — data album/single
- [ ] Buat `src/lib/data/gigs.ts` — data jadwal manggung
- [ ] Buat `src/lib/data/config.ts` — konfigurasi global (nama band, sosmed)

### 1.7 Utility Functions
- [ ] Buat `src/lib/utils/index.ts`
- [ ] Helper: `formatDate()`, `getYoutubeId()`, dll

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/app.html` | Modifikasi | Tambah Google Fonts + meta |
| `src/app.css` | Modifikasi | @import tailwindcss + @theme |
| `src/lib/types/index.ts` | Baru | TypeScript interfaces |
| `src/lib/data/band-members.ts` | Baru | Data personil |
| `src/lib/data/discography.ts` | Baru | Data musik |
| `src/lib/data/gigs.ts` | Baru | Data gigs |
| `src/lib/data/config.ts` | Baru | Config global |
| `src/lib/utils/index.ts` | Baru | Helper functions |

---

## Acceptance Criteria
- [ ] `npm run dev` berjalan tanpa error
- [ ] Font Playfair Display dan Inter terlihat di browser
- [ ] Background halaman default hitam (#0a0a0a)
- [ ] Teks default off-white (#f5f5f5)
- [ ] TailwindCSS classes berfungsi
- [ ] TypeScript tidak ada error

---

## Dependensi
- Tidak ada dependensi ke phase lain
- Phase ini harus selesai SEBELUM phase lainnya dimulai

---

## Estimasi Waktu
~2-3 jam (implementasi) + review
