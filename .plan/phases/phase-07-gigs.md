# Phase 07 — Halaman Gigs: Jadwal Manggung

## Tujuan
Membangun halaman jadwal manggung yang menampilkan event mendatang dan arsip penampilan masa lalu dengan UI yang jelas dan informatif.

---

## Task List

### 7.1 GigCard Component
- [ ] Buat `src/lib/components/GigCard.svelte`
- [ ] Tampilkan: tanggal, nama event, venue, kota
- [ ] Badge: "Upcoming" atau "Past"
- [ ] Tombol "Get Tickets" (jika ada link tiket)
- [ ] Tombol "Sold Out" (disabled, jika habis)
- [ ] Layout: tanggal besar di kiri, detail di kanan

### 7.2 Gigs List
- [ ] Pisahkan Upcoming Gigs dan Past Gigs
- [ ] Upcoming: tampil normal
- [ ] Past: tampil dengan opacity lebih rendah atau grayscale
- [ ] Sort by date (upcoming: ascending, past: descending)
- [ ] Kosong state jika tidak ada gig

### 7.3 Halaman Gigs (+page.svelte)
- [ ] Buat `src/routes/gigs/+page.svelte`
- [ ] Section: Hero dengan judul "Gigs" atau "Live"
- [ ] Section: Upcoming Gigs (list)
- [ ] Section: Past Gigs (list, collapsible)
- [ ] SEO meta tags

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/lib/components/GigCard.svelte` | Baru | Kartu gig/event |
| `src/routes/gigs/+page.svelte` | Baru | Halaman gigs |
| `src/routes/gigs/+page.ts` | Baru | Data loader |

---

## Acceptance Criteria
- [ ] Upcoming dan past gigs dipisah dengan jelas
- [ ] Link tiket buka tab baru
- [ ] Sold out tampil berbeda
- [ ] Empty state elegan jika tidak ada gig
- [ ] Date format konsisten (contoh: 21 Sep 2026)
- [ ] Responsif

---

## Dependensi
- **Phase 01** (data gigs, types)
- **Phase 02** (layout)

---

## Estimasi Waktu
~2-3 jam
