# Phase 02 — Layout Global: Navbar & Footer

## Tujuan
Membangun komponen layout global yang digunakan di semua halaman: navigasi sidebar vertikal, hamburger mobile menu, dan footer.

---

## Task List

### 2.1 NavSidebar Component
- [ ] Buat `src/lib/components/NavSidebar.svelte`
- [ ] Nav items: Home, Music, About, Gallery, Gigs, Contact
- [ ] Numbered index label ("Indx.01", "Indx.02", ...)
- [ ] Teks nav besar serif bold compressed
- [ ] Arrow icon SVG diagonal merah (#c3423c) per item
- [ ] Active state (halaman saat ini) — highlight berbeda
- [ ] `mix-blend-difference` di desktop header
- [ ] `lg:fixed left-4` untuk posisi sidebar desktop

### 2.2 Mobile Menu
- [ ] Hamburger button fixed top-right `_menu` text style (sesuai BMTH)
- [ ] Menu full-screen overlay (mobile)
- [ ] Animasi slide-in / slide-out (-translate-y-full → translate-y-0)
- [ ] Nav items fade-in dengan stagger delay
- [ ] Close menu saat klik nav item
- [ ] Toggle state dengan Svelte 5 `$state`

### 2.3 Footer Component
- [ ] Buat `src/lib/components/Footer.svelte`
- [ ] Logo / nama band "The Dush Official"
- [ ] Social media links (Instagram, YouTube, Spotify, TikTok)
- [ ] Copyright text
- [ ] Dark background, minimal design
- [ ] Responsive layout

### 2.4 Global Layout (+layout.svelte)
- [ ] Update `src/routes/+layout.svelte`
- [ ] Import dan gunakan NavSidebar
- [ ] Import dan gunakan Footer
- [ ] `<main>` dengan margin offset dari sidebar
- [ ] Skip-to-content link (aksesibilitas)
- [ ] Global page transition (fade)
- [ ] Svelte 5 `let { children } = $props()`

### 2.5 ArrowIcon Component
- [ ] Buat `src/lib/components/ArrowIcon.svelte`
- [ ] SVG ikon panah diagonal kanan-bawah
- [ ] Props: `size`, `color` (default #c3423c)
- [ ] Reusable di nav dan tempat lain

### 2.6 SocialLinks Component
- [ ] Buat `src/lib/components/SocialLinks.svelte`
- [ ] Props: `links` (object SocialLinks), `size`, `direction`
- [ ] Ikon per platform (Instagram, YouTube, Spotify, TikTok)
- [ ] Hover animation

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/lib/components/NavSidebar.svelte` | Baru | Navigasi utama |
| `src/lib/components/ArrowIcon.svelte` | Baru | SVG arrow icon |
| `src/lib/components/Footer.svelte` | Baru | Footer global |
| `src/lib/components/SocialLinks.svelte` | Baru | Social media links |
| `src/routes/+layout.svelte` | Modifikasi | Gunakan components |

---

## Acceptance Criteria
- [ ] Sidebar navigasi tampil di sisi kiri (desktop)
- [ ] Mobile menu berfungsi dan animasi smooth
- [ ] Active nav item tampil berbeda
- [ ] mix-blend-difference pada sidebar berfungsi (putih di gelap = putih, putih di terang = hitam)
- [ ] Footer tampil di semua halaman
- [ ] Skip-to-content link ada dan berfungsi (keyboard tab)
- [ ] Layout tidak ada overflow horizontal

---

## Dependensi
- **Phase 01 harus selesai** (membutuhkan design tokens dan types)

---

## Estimasi Waktu
~3-4 jam
