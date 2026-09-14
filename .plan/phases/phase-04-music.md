# Phase 04 — Halaman Musik & Discography

## Tujuan
Membangun halaman musik yang menampilkan semua karya band: album, single, EP, beserta link streaming dan music video.

---

## Task List

### 4.1 MusicCard Component
- [ ] Buat `src/lib/components/MusicCard.svelte`
- [ ] Props: `track | album` (type Track | Album)
- [ ] Cover art gambar
- [ ] Judul, tahun rilis, type (Single/Album/EP)
- [ ] Streaming links (Spotify, YouTube, Apple Music)
- [ ] Hover animation (lift up, glow subtle)

### 4.2 Discography Grid
- [ ] Grid responsif: 2 kolom mobile, 3-4 kolom desktop
- [ ] Sort by release year (terbaru dulu)
- [ ] Filter by type (All/Singles/Albums/EPs) — optional

### 4.3 VideoEmbed Component
- [ ] Buat `src/lib/components/VideoEmbed.svelte`
- [ ] Props: `youtubeId`, `title`, `thumbnail`
- [ ] Lazy load embed (click untuk load YouTube player)
- [ ] Custom thumbnail dengan play button overlay
- [ ] Aspect ratio 16:9

### 4.4 Halaman Musik (+page.svelte)
- [ ] Update `src/routes/music/+page.svelte`
- [ ] Load data dari `discography.ts`
- [ ] Section: Latest Release (featured)
- [ ] Section: All Music (grid)
- [ ] Section: Music Videos (YouTube embeds)
- [ ] SEO meta tags

### 4.5 Streaming Links Component
- [ ] Buat `src/lib/components/StreamingLinks.svelte`
- [ ] Props: links object { spotify, youtube, appleMusic, ... }
- [ ] Ikon + teks per platform
- [ ] Compact dan full variant

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/lib/components/MusicCard.svelte` | Baru | Kartu musik/album |
| `src/lib/components/VideoEmbed.svelte` | Baru | YouTube embed |
| `src/lib/components/StreamingLinks.svelte` | Baru | Link streaming |
| `src/routes/music/+page.svelte` | Baru | Halaman musik |
| `src/routes/music/+page.ts` | Baru | Data loader |

---

## Acceptance Criteria
- [ ] Semua musik/single tampil di grid
- [ ] Link streaming berfungsi (buka tab baru)
- [ ] Video embed tidak autoplay (click dulu)
- [ ] Responsive di semua ukuran
- [ ] SEO meta tags tersedia

---

## Dependensi
- **Phase 01** (types, data discography)
- **Phase 02** (layout)

---

## Estimasi Waktu
~3-4 jam
