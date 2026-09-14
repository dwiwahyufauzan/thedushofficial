# 📋 Project Overview — The Dush Official Website

## Deskripsi Band

**The Dush Official** adalah sebuah band Indonesia yang bergerak di genre rock modern, indie alternatif. Band ini aktif di media sosial Instagram ([@thedush._](https://www.instagram.com/thedush._/)) dan membutuhkan sebuah website resmi yang mencerminkan identitas visual mereka yang dark, premium, dan penuh energi.

---

## Tujuan Website

Membangun **website profil band resmi** yang:
- Menampilkan identitas visual band secara profesional dan kuat
- Menjadi hub informasi untuk fans, promotor, dan media
- Menampilkan karya musik dan konten visual
- Menginformasikan jadwal penampilan (gigs)
- Memudahkan fans untuk terhubung via sosial media
- Berkesan premium dan berstandar internasional (seperti bmthofficial.com)

---

## Target Pengguna

| Pengguna | Tujuan |
|---|---|
| **Fans** | Mengetahui info terbaru, musik, jadwal, dan galeri |
| **Promotor / Event Organizer** | Melihat profil band, menghubungi untuk booking |
| **Media / Jurnalis** | Mendapatkan informasi resmi dan press kit |
| **Calon Pendengar Baru** | Mengenal band dan mendengarkan musik |

---

## Scope Fitur (IN SCOPE)

### Halaman Utama
- [ ] Hero section fullscreen dengan foto/artwork band
- [ ] Tagline / quote band
- [ ] Quick links ke section penting
- [ ] Latest news / update section

### Musik & Discography
- [ ] Daftar album, EP, dan single
- [ ] Cover art untuk setiap release
- [ ] Link streaming (Spotify, Apple Music, YouTube Music)
- [ ] Embed YouTube untuk music video

### About / Profil Band
- [ ] Deskripsi dan sejarah singkat band
- [ ] Profil personil (foto, nama, peran, bio singkat)
- [ ] Filosofi dan genre musik

### Gallery
- [ ] Grid foto band (behind the scenes, live, editorial)
- [ ] Video embed (YouTube)
- [ ] Lightbox untuk foto (expand)

### Gigs / Live Schedule
- [ ] Daftar jadwal manggung upcoming
- [ ] Detail lokasi, tanggal, waktu
- [ ] Link beli tiket (jika ada)
- [ ] Arsip past gigs

### Kontak
- [ ] Form kontak untuk booking dan media
- [ ] Daftar sosial media resmi
- [ ] Email bisnis (jika ada)

### Global / Shared
- [ ] Navigasi sidebar vertikal (desktop) + hamburger mobile
- [ ] Footer dengan copyright dan sosial links
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark mode by default (sesuai estetika band)
- [ ] Animasi dan micro-interactions premium
- [ ] Loading states yang elegan
- [ ] 404 page yang on-brand

---

## Out of Scope (TIDAK dibuat)

- ❌ E-commerce / toko merchandise (bisa link ke eksternal)
- ❌ Blog / news dengan CMS (menggunakan data statis)
- ❌ Forum atau komunitas fans
- ❌ Streaming musik langsung (hanya embed/link)
- ❌ Member login / area anggota
- ❌ Fitur donasi

---

## Referensi Desain

### Referensi Utama: [bmthofficial.com](https://www.bmthofficial.com/)
**Elemen yang diadaptasi:**
- Navigasi sidebar vertikal kiri dengan numbered indices (Indx.01, Indx.02...)
- Tipografi serif ultra-bold compressed (scale-y[1.7], letter-spacing negatif -4px)
- Color scheme: hitam total + putih + satu aksen merah (#c3423c)
- mix-blend-difference pada header untuk kontras otomatis
- Arrow icon SVG diagonal merah di setiap nav item
- Full-bleed imagery pada hero
- Uppercase text everywhere
- "Split character" technique pada nav items

**Adaptasi untuk The Dush:**
- Warna aksen tetap merah #c3423c (sama dengan BMTH karena sudah cocok untuk rock aesthetic)
- Konten disesuaikan dengan profil The Dush
- Halaman disesuaikan dengan kebutuhan band lokal Indonesia

### Referensi Sekunder
- [Architects](https://www.architectsofficial.com/) — band profile layout
- [Spiritbox](https://spiritbox.com/) — dark aesthetic
- [Bring Me The Horizon](https://www.bmthofficial.com/) — navigation pattern

---

## Constraints & Catatan Teknis

- **Package manager**: Bun (bukan npm/yarn)
- **Build tool**: Vite ^8.0.16
- **SSG/SSR**: Default SvelteKit (auto-detect) → kemungkinan SSG untuk halaman statis
- **Hosting target**: Vercel atau Netlify (free tier untuk permulaan)
- **Data**: Statis (hardcoded TypeScript/JSON, bukan database/CMS)
- **Gambar**: Disimpan di `/static/images/` → optimasi manual atau via Vite plugin
- **Bahasa**: Indonesia untuk konten, Inggris untuk kode/komentar

---

## Deliverables

1. ✅ Folder plan `.plan/` dengan semua file rencana
2. ✅ Skills AI agent untuk design system dan SvelteKit patterns
3. ⬜ Implementasi lengkap semua 9 phase
4. ⬜ Website yang bisa diakses via browser lokal (`npm run dev`)
5. ⬜ Kode siap deploy ke Vercel/Netlify

---

*Proyek: The Dush Official Website | Updated: September 2026*
