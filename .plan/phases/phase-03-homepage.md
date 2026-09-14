# Phase 03 — Homepage: Hero & Featured Content

## Tujuan
Membangun halaman utama yang memberikan kesan pertama yang kuat: hero fullscreen dengan foto band, dan section konten teaser.

---

## Task List

### 3.1 HeroSection Component
- [ ] Buat `src/lib/components/HeroSection.svelte`
- [ ] Background foto band fullscreen (object-cover)
- [ ] Gradient overlay dari bawah (hitam fade)
- [ ] Nama band "The Dush" dengan typography compressed besar
- [ ] Subtitle "Official Website" atau tagline band
- [ ] CTA buttons (Listen Now → /music, See Gigs → /gigs)
- [ ] Scroll indicator (animated arrow bawah)
- [ ] Foto responsif (mobile crop berbeda dari desktop)

### 3.2 Featured Music Section
- [ ] Section preview release terbaru
- [ ] Tampilkan 1-2 single/album terbaru
- [ ] Cover art + judul + link ke halaman musik
- [ ] Layout grid atau horizontal scroll

### 3.3 Upcoming Gigs Teaser
- [ ] Section preview 2-3 gig terdekat
- [ ] Tanggal, venue, kota
- [ ] Link "See All Gigs" ke /gigs
- [ ] Jika tidak ada gig, sembunyikan section ini

### 3.4 About Teaser Section
- [ ] Foto band dan paragraf singkat
- [ ] Link "Learn More" ke /about
- [ ] Tampilan menarik (teks di samping gambar, atau full-bleed)

### 3.5 Social Media Links Section
- [ ] CTA untuk follow di media sosial
- [ ] Ikon dan link Instagram, YouTube, Spotify, TikTok
- [ ] Desain minimal dan elegan

### 3.6 Homepage Page (+page.svelte)
- [ ] Update `src/routes/+page.svelte`
- [ ] Gunakan semua section components
- [ ] Load data (gigs upcoming, latest release)
- [ ] SEO meta tags (`<svelte:head>`)
- [ ] `<h1>` dengan sr-only untuk SEO (visual tidak tampilkan h1 besar jika hero sudah jelas)

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/lib/components/HeroSection.svelte` | Baru | Hero fullscreen |
| `src/lib/components/FeaturedMusic.svelte` | Baru | Preview musik terbaru |
| `src/lib/components/GigsTeaser.svelte` | Baru | Preview gigs |
| `src/lib/components/AboutTeaser.svelte` | Baru | Preview about |
| `src/routes/+page.svelte` | Modifikasi | Homepage utama |

---

## Acceptance Criteria
- [ ] Hero tampil fullscreen di semua ukuran layar
- [ ] Tipografi heading besar dan compressed (serif bold)
- [ ] Animasi entrance smooth saat halaman load
- [ ] Foto band terlihat jelas dan dramatis
- [ ] CTA buttons berfungsi (navigasi ke halaman lain)
- [ ] Scroll indicator beranimasi
- [ ] SEO: title, meta description, og:image tersedia

---

## Dependensi
- **Phase 01** (design tokens)
- **Phase 02** (navbar + footer)

---

## Estimasi Waktu
~4-5 jam
