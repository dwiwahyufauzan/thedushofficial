# Phase 06 — Halaman Gallery: Foto & Video

## Tujuan
Membangun galeri foto dan video yang menampilkan konten visual band: live performance, editorial, dan behind-the-scenes.

---

## Task List

### 6.1 PhotoGrid Component
- [ ] Buat `src/lib/components/PhotoGrid.svelte`
- [ ] Masonry grid atau grid uniform
- [ ] Lazy loading gambar (loading="lazy")
- [ ] Hover overlay dengan ikon expand
- [ ] Responsive (1 kolom mobile, 2-3 desktop)

### 6.2 Lightbox Component
- [ ] Buat `src/lib/components/Lightbox.svelte`
- [ ] Open foto dalam overlay fullscreen
- [ ] Navigasi prev/next
- [ ] Close dengan ESC atau klik di luar
- [ ] Swipe gesture (mobile)
- [ ] Keyboard navigation (Arrow keys)

### 6.3 Gallery Categories
- [ ] Filter: All, Live, Editorial, Behind the Scenes
- [ ] Tab atau toggle UI
- [ ] Animasi saat filter berubah

### 6.4 Video Gallery
- [ ] Section terpisah untuk video
- [ ] Gunakan VideoEmbed component (dari Phase 04)
- [ ] Grid 2 kolom (mobile 1, desktop 2-3)

### 6.5 Halaman Gallery (+page.svelte)
- [ ] Buat `src/routes/gallery/+page.svelte`
- [ ] Section: Hero dengan judul "Gallery"
- [ ] Section: Photo grid dengan filter
- [ ] Section: Video gallery
- [ ] SEO meta tags

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/lib/components/PhotoGrid.svelte` | Baru | Grid foto |
| `src/lib/components/Lightbox.svelte` | Baru | Fullscreen viewer |
| `src/routes/gallery/+page.svelte` | Baru | Halaman galeri |

---

## Acceptance Criteria
- [ ] Grid foto tampil rapi dan responsif
- [ ] Lightbox buka dan tutup dengan smooth
- [ ] Navigasi keyboard berfungsi di lightbox
- [ ] Gambar lazy load
- [ ] Video tidak autoplay

---

## Dependensi
- **Phase 02** (layout)
- **Phase 04** (VideoEmbed component)

---

## Estimasi Waktu
~3-4 jam
