# Phase 05 — Halaman About: Profil Band

## Tujuan
Membangun halaman tentang band yang menampilkan sejarah, filosofi, dan profil setiap personil dengan visual yang kuat.

---

## Task List

### 5.1 BandMemberCard Component
- [ ] Buat `src/lib/components/BandMemberCard.svelte`
- [ ] Foto personil (hitam-putih + hover jadi berwarna)
- [ ] Nama dan peran (Vocalist, Guitarist, dll)
- [ ] Bio singkat
- [ ] Sosial media personil (Instagram, dll)
- [ ] Hover animation elegan

### 5.2 Band Members Grid
- [ ] Layout responsif untuk 3-5 personil
- [ ] Mobile: stacked vertikal atau 2 kolom
- [ ] Desktop: horizontal row atau 3-4 kolom

### 5.3 Band Story Section
- [ ] Teks narasi sejarah singkat band
- [ ] Tahun berdiri
- [ ] Genre dan style deskripsi
- [ ] Quote band (jika ada)
- [ ] Background: foto band besar sebagai backdrop

### 5.4 Halaman About (+page.svelte)
- [ ] Buat `src/routes/about/+page.svelte`
- [ ] Section: Hero dengan judul "About" compressed typography
- [ ] Section: Band story / bio
- [ ] Section: Band members grid
- [ ] Section: Press kit download (link, opsional)
- [ ] SEO meta tags

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/lib/components/BandMemberCard.svelte` | Baru | Kartu personil |
| `src/routes/about/+page.svelte` | Baru | Halaman about |
| `src/routes/about/+page.ts` | Baru | Data loader |

---

## Acceptance Criteria
- [ ] Semua personil tampil dengan foto dan info
- [ ] Hover foto: efek berwarna atau zoom
- [ ] Teks band story readable dan elegan
- [ ] Responsive
- [ ] SEO meta tags

---

## Dependensi
- **Phase 01** (data band-members)
- **Phase 02** (layout)

---

## Estimasi Waktu
~2-3 jam
