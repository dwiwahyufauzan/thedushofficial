# 🚀 Implementation Tracker — The Dush Official

> File ini adalah panduan implementasi **step-by-step** dari Phase 01 hingga Phase 09.
> Setiap task diselesaikan → update status → commit → push ke GitHub.

---

## 📋 Cara Menggunakan File Ini

1. Kerjakan task **dari atas ke bawah**, jangan melompat
2. Setelah task selesai, ganti `[ ]` menjadi `[x]`
3. Setelah setiap **sub-section** selesai, jalankan perintah commit yang tersedia
4. Lanjut ke task berikutnya

### Status Legend
```
[ ]  → Belum dikerjakan
[/]  → Sedang dikerjakan
[x]  → Selesai
```

---

## ⚡ PHASE 01 — Foundation

> **Tujuan**: Setup design tokens, font, TypeScript types, dan data statis sebagai fondasi proyek.

---

### Task 1.1 — Konfigurasi TailwindCSS v4

- [ ] Verifikasi `tailwindcss ^4.3.0` dan `@tailwindcss/vite` ada di `package.json`
- [ ] Buka `src/app.css`, pastikan baris pertama adalah `@import 'tailwindcss';`
- [ ] Tambahkan block `@theme {}` dengan design tokens warna dan font
- [ ] Jalankan `bun run dev` dan verifikasi tidak ada error

**Commit setelah 1.1 selesai:**
```bash
git add src/app.css
git commit -m "feat(foundation): setup TailwindCSS v4 with @theme design tokens"
git push origin main
```

---

### Task 1.2 — Google Fonts

- [ ] Buka `src/app.html`
- [ ] Tambahkan `<link rel="preconnect">` untuk `fonts.googleapis.com` dan `fonts.gstatic.com`
- [ ] Tambahkan `<link href="...">` Google Fonts untuk:
  - `Playfair Display` — weight 700, 800, 900 (regular + italic)
  - `Cormorant Garamond` — weight 600, 700
  - `Inter` — weight 300, 400, 500, 600
- [ ] Daftarkan font di `@theme` dalam `app.css`:
  - `--font-display: 'Playfair Display', serif;`
  - `--font-heading: 'Cormorant Garamond', serif;`
  - `--font-body: 'Inter', sans-serif;`
- [ ] Verifikasi font muncul di browser (DevTools → Network → filter Font)

**Commit setelah 1.2 selesai:**
```bash
git add src/app.html src/app.css
git commit -m "feat(foundation): add Google Fonts (Playfair Display, Cormorant Garamond, Inter)"
git push origin main
```

---

### Task 1.3 — Design Tokens Lengkap (@theme)

- [ ] Tambahkan semua color tokens di `@theme {}` dalam `app.css`:
  - Background: `--color-bg-primary`, `--color-bg-surface`, dll
  - Text: `--color-text-primary`, `--color-text-secondary`, dll
  - Accent: `--color-accent-primary: #c3423c`
  - Border: `--color-border-primary`
- [ ] Tambahkan custom utility `.heading-compressed` di `@layer utilities {}`

**Commit setelah 1.3 selesai:**
```bash
git add src/app.css
git commit -m "feat(foundation): add complete design tokens and heading-compressed utility"
git push origin main
```

---

### Task 1.4 — Global Base Styles (@layer base)

- [ ] Tambahkan `@layer base {}` di `app.css` dengan:
  - `body`: `bg-[#0a0a0a] text-[#f5f5f5] font-body antialiased`
  - `::selection`: `bg-[#c3423c] text-white`
  - `html`: `scroll-behavior: smooth`
  - `img`: `display: block; max-width: 100%`
  - Focus visible styles untuk accessibility
- [ ] Verifikasi background halaman hitam di browser

**Commit setelah 1.4 selesai:**
```bash
git add src/app.css
git commit -m "feat(foundation): add global base styles with dark theme defaults"
git push origin main
```

---

### Task 1.5 — TypeScript Types

- [ ] Buat file `src/lib/types/index.ts`
- [ ] Definisikan interface `BandMember` (id, name, role, photo, bio, instagram)
- [ ] Definisikan interface `Track` (id, title, duration, youtubeId)
- [ ] Definisikan interface `Release` (id, title, type, year, coverArt, tracks, streaming)
- [ ] Definisikan type `ReleaseType = 'Single' | 'EP' | 'Album'`
- [ ] Definisikan interface `Gig` (id, date, time, venue, city, ticketUrl, isPast)
- [ ] Definisikan interface `StreamingLinks` dan `SocialLinks`
- [ ] Definisikan interface `SiteConfig`
- [ ] Export semua types

**Commit setelah 1.5 selesai:**
```bash
git add src/lib/types/
git commit -m "feat(foundation): add TypeScript type definitions for band data"
git push origin main
```

---

### Task 1.6 — Data Statis: Config & Band Members

- [ ] Buat file `src/lib/data/config.ts`
  - `siteConfig`: bandName, tagline, email, city, genre, socials
  - socials.instagram: `https://www.instagram.com/thedush._/`
- [ ] Buat file `src/lib/data/band-members.ts`
  - Minimal 3-4 member (Vocalist, Guitarist, Bassist, Drummer)
  - Isi data placeholder yang realistis (nama, role, bio singkat)
  - Photo path: `/images/member-[id].jpg` (file placeholder belum perlu ada)

**Commit setelah 1.6 selesai:**
```bash
git add src/lib/data/
git commit -m "feat(foundation): add site config and band members static data"
git push origin main
```

---

### Task 1.7 — Data Statis: Discography & Gigs

- [ ] Buat file `src/lib/data/discography.ts`
  - Minimal 2-3 release (bisa single atau EP)
  - Cover art path: `/images/album-[id]-cover.jpg`
  - Streaming links (kosong string jika belum ada)
- [ ] Buat file `src/lib/data/gigs.ts`
  - Minimal 2 upcoming gigs (tanggal di masa depan)
  - Minimal 2 past gigs (isPast: true)

**Commit setelah 1.7 selesai:**
```bash
git add src/lib/data/
git commit -m "feat(foundation): add discography and gigs static data"
git push origin main
```

---

### Task 1.8 — Utility Functions

- [ ] Buat file `src/lib/utils/index.ts`
- [ ] Tambahkan fungsi `formatGigDate(dateStr: string): string`
- [ ] Tambahkan fungsi `formatDateShort(dateStr)` → `{day, month, year}`
- [ ] Tambahkan fungsi `getYoutubeId(url: string): string | null`
- [ ] Tambahkan fungsi `isUpcoming(dateStr: string): boolean`
- [ ] Jalankan `bun run check` — pastikan tidak ada TypeScript error

**Commit setelah 1.8 selesai:**
```bash
git add src/lib/utils/
git commit -m "feat(foundation): add utility functions (formatDate, getYoutubeId, isUpcoming)"
git push origin main
```

---

### ✅ Phase 01 Complete Commit

Setelah semua task 1.1–1.8 selesai:
```bash
git add .
git commit -m "feat: complete Phase 01 - Foundation (design tokens, fonts, types, data)"
git push origin main
```

---
---

## ⚡ PHASE 02 — Layout Global

> **Tujuan**: Membangun navigasi sidebar, footer, dan layout global yang dipakai di semua halaman.

---

### Task 2.1 — ArrowIcon Component

- [ ] Buat file `src/lib/components/ArrowIcon.svelte`
- [ ] Implementasi SVG ikon panah diagonal kanan-bawah merah (#c3423c)
- [ ] Props: `size?: number` (default 25), `color?: string` (default `#c3423c`)
- [ ] Pastikan menggunakan Svelte 5 `$props()`

**Commit setelah 2.1 selesai:**
```bash
git add src/lib/components/ArrowIcon.svelte
git commit -m "feat(layout): add ArrowIcon SVG component"
git push origin main
```

---

### Task 2.2 — NavSidebar Component (KRITIS)

- [ ] Buat file `src/lib/components/NavSidebar.svelte`
- [ ] Data nav items array: `[{ index, label, href, text: [part1, part2] }]`
  - Home, Music, About, Gallery, Gigs, Contact
- [ ] Layout `<header>` dengan `lg:mix-blend-difference`
- [ ] `<ul>` dengan class untuk mobile overlay dan desktop sidebar
- [ ] Setiap nav item: index label kecil + teks besar serif + arrow icon
- [ ] Teks nav: `scale-y-[1.7] font-black -tracking-[4px] font-serif uppercase`
- [ ] Teks split: `<span>Hom</span><span>e</span>` dengan `justify-between`
- [ ] Active route highlight menggunakan `$page.url.pathname`
- [ ] Hover state: `hover:bg-white hover:text-black`
- [ ] State `isMenuOpen = $state(false)` untuk mobile toggle

**Commit setelah 2.2 selesai:**
```bash
git add src/lib/components/NavSidebar.svelte
git commit -m "feat(layout): add NavSidebar component with BMTH-style design"
git push origin main
```

---

### Task 2.3 — Mobile Hamburger Menu

- [ ] Di `NavSidebar.svelte`, tambahkan hamburger button:
  - `fixed top-0 right-0 z-50 p-4 text-2xl font-medium uppercase lg:hidden text-white`
  - Teks: `_menu` (saat tutup) / `_close` (saat buka)
- [ ] Toggle `isMenuOpen` saat button di-klik
- [ ] Nav list:
  - Tersembunyi: `-translate-y-full` (mobile default)
  - Terbuka: `translate-y-0`
  - Desktop: selalu `lg:translate-y-0`
- [ ] Animasi: `transition-transform duration-200`
- [ ] Nav items: tutup menu saat diklik (`onclick={closeMenu}`)
- [ ] Test di viewport mobile (Chrome DevTools → mobile view)

**Commit setelah 2.3 selesai:**
```bash
git add src/lib/components/NavSidebar.svelte
git commit -m "feat(layout): add mobile hamburger menu with slide animation"
git push origin main
```

---

### Task 2.4 — SocialLinks Component

- [ ] Buat file `src/lib/components/SocialLinks.svelte`
- [ ] Props: `links: SocialLinks`, `size?: 'sm' | 'md' | 'lg'`
- [ ] Tampilkan ikon + link untuk Instagram, YouTube, Spotify, TikTok
- [ ] Hover animation (opacity atau scale)
- [ ] Buka di tab baru (`target="_blank" rel="noopener noreferrer"`)

**Commit setelah 2.4 selesai:**
```bash
git add src/lib/components/SocialLinks.svelte
git commit -m "feat(layout): add SocialLinks component"
git push origin main
```

---

### Task 2.5 — Footer Component

- [ ] Buat file `src/lib/components/Footer.svelte`
- [ ] Nama band "The Dush Official" dengan font serif
- [ ] Gunakan `SocialLinks` component dengan data dari `siteConfig`
- [ ] Copyright: `© {tahun sekarang} The Dush Official. All rights reserved.`
- [ ] Dark background, minimal styling
- [ ] Responsive (stack di mobile, flex di desktop)

**Commit setelah 2.5 selesai:**
```bash
git add src/lib/components/Footer.svelte
git commit -m "feat(layout): add Footer component with social links"
git push origin main
```

---

### Task 2.6 — Global Layout (+layout.svelte)

- [ ] Update `src/routes/+layout.svelte`
- [ ] Import `NavSidebar` dan `Footer`
- [ ] Import `'../app.css'`
- [ ] Skip-to-content link (pertama di DOM, `sr-only focus:not-sr-only`)
- [ ] Wrapper `<div>` dengan `bg-[#0a0a0a] min-h-svh text-[#f5f5f5]`
- [ ] `<NavSidebar />` sebelum `<main>`
- [ ] `<main id="main-content">` dengan `overflow-x-clip`
- [ ] `{@render children()}` di dalam main
- [ ] `<Footer />` setelah main
- [ ] Gunakan Svelte 5: `let { children } = $props()`
- [ ] Test semua halaman: navbar dan footer muncul

**Commit setelah 2.6 selesai:**
```bash
git add src/routes/+layout.svelte
git commit -m "feat(layout): setup global layout with NavSidebar and Footer"
git push origin main
```

---

### Task 2.7 — Verifikasi Layout

- [ ] `bun run dev` → tidak ada error
- [ ] `bun run check` → tidak ada TypeScript error
- [ ] Test di browser: sidebar muncul di desktop kiri
- [ ] Test mobile: hamburger button ada, menu bisa dibuka/tutup
- [ ] Test active link: nav item yang sesuai route tampil highlighted
- [ ] Test mix-blend-difference: nav terlihat di atas foto (uji nanti saat hero ada)

**Commit setelah 2.7 selesai:**
```bash
git add .
git commit -m "feat: complete Phase 02 - Global Layout (NavSidebar, Footer, layout.svelte)"
git push origin main
```

---
---

## ⚡ PHASE 03 — Homepage

> **Tujuan**: Membangun halaman utama dengan hero fullscreen, teaser musik, gigs, dan about.

---

### Task 3.1 — Button Component

- [ ] Buat file `src/lib/components/Button.svelte`
- [ ] Props: `href?: string`, `variant: 'primary' | 'outline' | 'ghost'`, `size?: 'sm' | 'md' | 'lg'`
- [ ] Variant `primary`: `bg-[#c3423c] text-white hover:bg-[#e04c46]`
- [ ] Variant `outline`: `border border-[#f5f5f5] text-[#f5f5f5] hover:bg-white hover:text-black`
- [ ] Jika ada `href`: render `<a>`, jika tidak: render `<button>`
- [ ] Semua uppercase, tracking-wider, font-body font-semibold

**Commit setelah 3.1 selesai:**
```bash
git add src/lib/components/Button.svelte
git commit -m "feat(homepage): add reusable Button component with variants"
git push origin main
```

---

### Task 3.2 — SectionTitle Component

- [ ] Buat file `src/lib/components/SectionTitle.svelte`
- [ ] Props: `title: string`, `subtitle?: string`, `align?: 'left' | 'center'`
- [ ] Title: font-serif, font-black, uppercase, -tracking-[3px], scale-y-[1.5]
- [ ] Subtitle (jika ada): font-body, text-[#a0a0a0], uppercase, tracking-wide, text-sm

**Commit setelah 3.2 selesai:**
```bash
git add src/lib/components/SectionTitle.svelte
git commit -m "feat(homepage): add SectionTitle component"
git push origin main
```

---

### Task 3.3 — HeroSection Component

- [ ] Buat file `src/lib/components/HeroSection.svelte`
- [ ] Wrapper: `relative min-h-svh flex items-end overflow-hidden bg-[#0a0a0a]`
- [ ] Background image: `absolute inset-0`, object-cover, `fetchpriority="high"`
- [ ] Gradient overlay bawah: `from-[#0a0a0a] via-transparent to-transparent`
- [ ] Content area: `relative z-10 p-6 lg:p-12 lg:ml-56 xl:ml-64`
- [ ] Label kecil: "Official Website" — font-body, uppercase, tracking-[0.3em], text-[#a0a0a0]
- [ ] Heading: "THE DUSH" — font-serif, text-7xl lg:text-9xl, font-black, scale-y-[1.7], -tracking-[4px]
- [ ] CTA buttons: "Listen Now" (primary) + "See Gigs" (outline)
- [ ] Gunakan foto placeholder dari `/images/hero-placeholder.jpg` atau gradient sementara

**Commit setelah 3.3 selesai:**
```bash
git add src/lib/components/HeroSection.svelte
git commit -m "feat(homepage): add HeroSection fullscreen component"
git push origin main
```

---

### Task 3.4 — GigsTeaser Component

- [ ] Buat file `src/lib/components/GigsTeaser.svelte`
- [ ] Props: `gigs: Gig[]` (tampilkan max 3 gig upcoming)
- [ ] Layout: tanggal besar di kiri, detail venue/kota di kanan
- [ ] Jika tidak ada gig: jangan render section (gunakan `{#if gigs.length > 0}`)
- [ ] Link "All Gigs" ke /gigs di bagian bawah

**Commit setelah 3.4 selesai:**
```bash
git add src/lib/components/GigsTeaser.svelte
git commit -m "feat(homepage): add GigsTeaser component"
git push origin main
```

---

### Task 3.5 — Homepage +page.svelte

- [ ] Update `src/routes/+page.svelte`
- [ ] Buat `src/routes/+page.ts` dengan load function:
  - Filter 3 upcoming gigs terbaru
  - Ambil release terbaru (isLatest atau index 0)
- [ ] Tambahkan `<svelte:head>` dengan SEO meta tags lengkap
- [ ] Susunan section halaman:
  1. `<HeroSection />` — fullscreen
  2. Section Musik terbaru (jika ada)
  3. `<GigsTeaser />` (jika ada upcoming gigs)
  4. Section About singkat dengan link ke /about
  5. Section Social Media links
- [ ] `<h1 class="sr-only">The Dush Official — Indonesian Rock Band</h1>` (untuk SEO)
- [ ] Test di browser: semua section tampil

**Commit setelah 3.5 selesai:**
```bash
git add src/routes/+page.svelte src/routes/+page.ts
git commit -m "feat(homepage): build homepage with Hero, Gigs teaser, and About teaser"
git push origin main
```

---

### ✅ Phase 03 Complete Commit

```bash
git add .
git commit -m "feat: complete Phase 03 - Homepage (Hero, sections, SEO meta)"
git push origin main
```

---
---

## ⚡ PHASE 04 — Halaman Musik

> **Tujuan**: Membangun halaman yang menampilkan discography, music cards, dan video embed.

---

### Task 4.1 — MusicCard Component

- [ ] Buat file `src/lib/components/MusicCard.svelte`
- [ ] Props: `release: Release`
- [ ] Cover art dengan `overflow-hidden` dan `hover:scale-105 transition-transform`
- [ ] Badge type: `Single` / `EP` / `Album` (uppercase, kecil)
- [ ] Judul: font-serif, font-bold, uppercase
- [ ] Tahun rilis dan streaming links
- [ ] Hover: lift up (`hover:-translate-y-1`)

**Commit setelah 4.1 selesai:**
```bash
git add src/lib/components/MusicCard.svelte
git commit -m "feat(music): add MusicCard component"
git push origin main
```

---

### Task 4.2 — StreamingLinks Component

- [ ] Buat file `src/lib/components/StreamingLinks.svelte`
- [ ] Props: `links: StreamingLinks`, `layout?: 'row' | 'column'`
- [ ] Tampilkan: Spotify, YouTube, Apple Music (jika URL tidak kosong)
- [ ] Ikon platform + label teks
- [ ] Hover: underline atau opacity

**Commit setelah 4.2 selesai:**
```bash
git add src/lib/components/StreamingLinks.svelte
git commit -m "feat(music): add StreamingLinks component"
git push origin main
```

---

### Task 4.3 — VideoEmbed Component

- [ ] Buat file `src/lib/components/VideoEmbed.svelte`
- [ ] Props: `youtubeId: string`, `title: string`, `thumbnail?: string`
- [ ] Default: tampilkan thumbnail + overlay play button (TIDAK autoload YouTube)
- [ ] Klik thumbnail → load iframe YouTube (lazy embed)
- [ ] Aspect ratio 16:9: gunakan padding-bottom trick atau `aspect-video`
- [ ] Placeholder thumbnail jika `thumbnail` tidak diberikan: `https://i.ytimg.com/vi/{youtubeId}/maxresdefault.jpg`

**Commit setelah 4.3 selesai:**
```bash
git add src/lib/components/VideoEmbed.svelte
git commit -m "feat(music): add VideoEmbed component with lazy YouTube loading"
git push origin main
```

---

### Task 4.4 — Halaman Musik (+page.svelte)

- [ ] Buat `src/routes/music/+page.ts` — load semua releases dan sort by year
- [ ] Buat `src/routes/music/+page.svelte`:
  - SEO meta tags
  - Hero section kecil dengan judul "Music" (compressed heading)
  - Section: Latest Release (featured card besar)
  - Section: All Releases (grid MusicCard)
  - Section: Music Videos (VideoEmbed grid, jika ada youtubeId)
- [ ] Test: semua release tampil, link streaming buka tab baru

**Commit setelah 4.4 selesai:**
```bash
git add src/routes/music/
git commit -m "feat(music): build music page with discography grid and video embeds"
git push origin main
```

---

### ✅ Phase 04 Complete Commit

```bash
git add .
git commit -m "feat: complete Phase 04 - Music Page (discography, streaming links, video)"
git push origin main
```

---
---

## ⚡ PHASE 05 — Halaman About

> **Tujuan**: Profil band dan personil dengan visual kuat.

---

### Task 5.1 — BandMemberCard Component

- [ ] Buat file `src/lib/components/BandMemberCard.svelte`
- [ ] Props: `member: BandMember`
- [ ] Foto: hitam-putih default (`grayscale`), hover jadi berwarna (`hover:grayscale-0 transition-all`)
- [ ] Nama (font-serif bold), Role (uppercase kecil, text-[#a0a0a0])
- [ ] Bio singkat (font-body)
- [ ] Instagram link (jika ada)
- [ ] Hover card: `hover:-translate-y-1 transition-transform`

**Commit setelah 5.1 selesai:**
```bash
git add src/lib/components/BandMemberCard.svelte
git commit -m "feat(about): add BandMemberCard component"
git push origin main
```

---

### Task 5.2 — Halaman About (+page.svelte)

- [ ] Buat `src/routes/about/+page.ts` — load band members
- [ ] Buat `src/routes/about/+page.svelte`:
  - SEO meta tags
  - Hero section dengan judul "About"
  - Section: Band Story (paragraf sejarah + genre)
  - Section: Band Members grid (BandMemberCard per member)
  - Section: Link ke halaman Contact dan Gigs
- [ ] Test: foto member tampil, hover grayscale to color berfungsi

**Commit setelah 5.2 selesai:**
```bash
git add src/routes/about/
git commit -m "feat(about): build about page with band story and member profiles"
git push origin main
```

---

### ✅ Phase 05 Complete Commit

```bash
git add .
git commit -m "feat: complete Phase 05 - About Page (band story, member profiles)"
git push origin main
```

---
---

## ⚡ PHASE 06 — Halaman Gallery

---

### Task 6.1 — PhotoGrid Component

- [ ] Buat file `src/lib/components/PhotoGrid.svelte`
- [ ] Props: `photos: Array<{src, alt, caption?}>`
- [ ] Grid: `grid-cols-2 lg:grid-cols-3` dengan `gap-1` atau `gap-2`
- [ ] Setiap foto: `overflow-hidden`, hover overlay dengan ikon expand
- [ ] `loading="lazy"` di semua gambar
- [ ] Klik foto → emit event atau callback untuk buka Lightbox

**Commit setelah 6.1 selesai:**
```bash
git add src/lib/components/PhotoGrid.svelte
git commit -m "feat(gallery): add PhotoGrid component with hover overlay"
git push origin main
```

---

### Task 6.2 — Lightbox Component

- [ ] Buat file `src/lib/components/Lightbox.svelte`
- [ ] Props: `photos[]`, `activeIndex: number`, `isOpen: boolean`
- [ ] Overlay fullscreen hitam semi-transparan (`z-[9999]`)
- [ ] Tampilkan foto aktif di tengah
- [ ] Tombol prev/next
- [ ] Tombol close (× atau klik di luar foto)
- [ ] Keyboard: `ArrowLeft` / `ArrowRight` / `Escape`
- [ ] `$effect` untuk bind keyboard events (dan cleanup saat closed)

**Commit setelah 6.2 selesai:**
```bash
git add src/lib/components/Lightbox.svelte
git commit -m "feat(gallery): add Lightbox component with keyboard navigation"
git push origin main
```

---

### Task 6.3 — Halaman Gallery (+page.svelte)

- [ ] Buat `src/routes/gallery/+page.svelte`:
  - SEO meta tags
  - Hero section dengan judul "Gallery"
  - Filter tab: All, Live, Editorial, BTS (Behind the Scenes)
  - `PhotoGrid` dengan filter aktif
  - `Lightbox` yang terhubung ke PhotoGrid
  - Section: Video Gallery (`VideoEmbed` components)
- [ ] Data foto: buat array statis sementara di `+page.svelte` atau file terpisah

**Commit setelah 6.3 selesai:**
```bash
git add src/routes/gallery/
git commit -m "feat(gallery): build gallery page with photo grid, lightbox, and video"
git push origin main
```

---

### ✅ Phase 06 Complete Commit

```bash
git add .
git commit -m "feat: complete Phase 06 - Gallery Page (photo grid, lightbox, videos)"
git push origin main
```

---
---

## ⚡ PHASE 07 — Halaman Gigs

---

### Task 7.1 — GigCard Component

- [ ] Buat file `src/lib/components/GigCard.svelte`
- [ ] Props: `gig: Gig`
- [ ] Layout: tanggal besar di kiri (day + month), detail di kanan (venue, city, event name)
- [ ] Badge: "Upcoming" (aksen merah) atau "Past" (abu-abu)
- [ ] Tombol "Get Tickets" (link, jika `ticketUrl` ada)
- [ ] Tombol "Sold Out" (disabled, jika `isSoldOut`)
- [ ] Past gigs: `opacity-60` dan tidak ada tombol tiket

**Commit setelah 7.1 selesai:**
```bash
git add src/lib/components/GigCard.svelte
git commit -m "feat(gigs): add GigCard component"
git push origin main
```

---

### Task 7.2 — Halaman Gigs (+page.svelte)

- [ ] Buat `src/routes/gigs/+page.ts` — filter upcoming/past, sort by date
- [ ] Buat `src/routes/gigs/+page.svelte`:
  - SEO meta tags
  - Hero section dengan judul "Gigs" / "Live"
  - Section: Upcoming Gigs (list GigCard)
  - Empty state jika tidak ada upcoming: pesan elegan
  - Section: Past Gigs (list GigCard, collapsible/accordion opsional)
- [ ] Gunakan `formatDateShort()` util untuk format tanggal

**Commit setelah 7.2 selesai:**
```bash
git add src/routes/gigs/
git commit -m "feat(gigs): build gigs page with upcoming and past events"
git push origin main
```

---

### ✅ Phase 07 Complete Commit

```bash
git add .
git commit -m "feat: complete Phase 07 - Gigs Page (upcoming, past, ticket links)"
git push origin main
```

---
---

## ⚡ PHASE 08 — Halaman Contact

---

### Task 8.1 — ContactForm Component

- [ ] Buat file `src/lib/components/ContactForm.svelte`
- [ ] Fields: Nama, Email, Subjek (select: Booking/Media/General), Pesan
- [ ] State: `formData = $state({...})`, `errors = $derived(...)`, `isValid = $derived(...)`
- [ ] Validasi: nama ≥ 2 char, email valid, pesan ≥ 10 char
- [ ] Submit: buka mailto link atau Formspree
- [ ] Loading state saat submit (`isSubmitting = $state(false)`)
- [ ] Success message setelah submit
- [ ] Styling: dark input fields dengan `border-[#2a2a2a] focus:border-[#c3423c]`
- [ ] Label uppercase, teks merah aksen saat focus

**Commit setelah 8.1 selesai:**
```bash
git add src/lib/components/ContactForm.svelte
git commit -m "feat(contact): add ContactForm with validation and dark styling"
git push origin main
```

---

### Task 8.2 — Halaman Contact (+page.svelte)

- [ ] Buat `src/routes/contact/+page.svelte`:
  - SEO meta tags
  - Hero section dengan judul "Contact"
  - Layout desktop split: Form (kiri) + Info (kanan)
  - Section Info: email, lokasi, sosial media besar
  - `ContactForm` component
- [ ] Test form: validasi muncul, submit buka email client

**Commit setelah 8.2 selesai:**
```bash
git add src/routes/contact/
git commit -m "feat(contact): build contact page with form and social info"
git push origin main
```

---

### ✅ Phase 08 Complete Commit

```bash
git add .
git commit -m "feat: complete Phase 08 - Contact Page (form, validation, social info)"
git push origin main
```

---
---

## ⚡ PHASE 09 — SEO & Performance

---

### Task 9.1 — Error Page (+error.svelte)

- [ ] Buat `src/routes/+error.svelte`
- [ ] Import `$app/stores page`
- [ ] Tampilkan kode error (404/500) dengan tipografi compressed besar
- [ ] Pesan error yang on-brand ("Lost in the darkness...")
- [ ] Link kembali ke Homepage

**Commit setelah 9.1 selesai:**
```bash
git add src/routes/+error.svelte
git commit -m "feat(seo): add on-brand 404 error page"
git push origin main
```

---

### Task 9.2 — Sitemap & Robots

- [ ] Buat `src/routes/sitemap.xml/+server.ts`
  - Generate XML dengan semua routes: /, /music, /about, /gallery, /gigs, /contact
  - Return Response dengan `Content-Type: application/xml`
- [ ] Buat `static/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://thedush.id/sitemap.xml
  ```
- [ ] Test: akses `/sitemap.xml` di browser → tampil XML

**Commit setelah 9.2 selesai:**
```bash
git add src/routes/sitemap.xml/ static/robots.txt
git commit -m "feat(seo): add XML sitemap and robots.txt"
git push origin main
```

---

### Task 9.3 — Structured Data (JSON-LD)

- [ ] Di `src/routes/+layout.svelte`, tambahkan `<svelte:head>` dengan JSON-LD:
  - Schema `Organization`: nama band, URL, logo, sameAs (sosmed)
  - Schema `WebSite`: nama, URL, publisher
- [ ] Verifikasi di Google Rich Results Test

**Commit setelah 9.3 selesai:**
```bash
git add src/routes/+layout.svelte
git commit -m "feat(seo): add JSON-LD structured data (Organization, WebSite schema)"
git push origin main
```

---

### Task 9.4 — SEO Audit Semua Halaman

- [ ] Verifikasi setiap halaman punya `<title>` unik
- [ ] Verifikasi setiap halaman punya `<meta name="description">`
- [ ] Verifikasi setiap halaman punya 1 `<h1>`
- [ ] Verifikasi Open Graph image ada di `/static/images/og-image.jpg`
- [ ] Semua `<img>` punya attribute `alt`
- [ ] Semua link eksternal punya `target="_blank" rel="noopener noreferrer"`

**Commit setelah 9.4 selesai:**
```bash
git add .
git commit -m "fix(seo): audit and fix meta tags, alt texts, heading hierarchy across all pages"
git push origin main
```

---

### Task 9.5 — Performance & Accessibility

- [ ] Verifikasi semua gambar punya `loading="lazy"` (kecuali hero/above-fold)
- [ ] Hero image punya `fetchpriority="high"` dan `loading="eager"`
- [ ] Skip-to-content link ada dan berfungsi (Tab key pertama)
- [ ] Test keyboard navigation: Tab melalui semua interaktif elemen
- [ ] Test mobile: semua halaman, semua gesture
- [ ] Jalankan `bun run build` → tidak ada error

**Commit setelah 9.5 selesai:**
```bash
git add .
git commit -m "feat(performance): add lazy loading, fetchpriority, accessibility improvements"
git push origin main
```

---

### Task 9.6 — Final Cleanup & Prerender

- [ ] Tambahkan di `src/routes/+layout.ts`:
  ```typescript
  export const prerender = true;
  export const trailingSlash = 'never';
  ```
- [ ] Jalankan `bun run build` → sukses
- [ ] Jalankan `bun run preview` → test semua halaman di preview mode
- [ ] Fix semua error yang muncul saat build

**Commit setelah 9.6 selesai:**
```bash
git add .
git commit -m "feat(build): enable prerender SSG, final build verification"
git push origin main
```

---

### ✅ Phase 09 — FINAL COMMIT 🎉

```bash
git add .
git commit -m "feat: complete Phase 09 - SEO, Performance, Accessibility, Build Ready

- Added XML sitemap and robots.txt
- Added JSON-LD structured data
- All pages have unique meta tags
- Lazy loading on all images
- Skip-to-content accessibility link
- Prerender enabled (SSG)
- Build verified with no errors"
git push origin main
```

---
---

## 🏁 PROJECT COMPLETE

```bash
# Final push dengan tag versi
git tag -a v1.0.0 -m "The Dush Official Website v1.0.0 — Initial Release"
git push origin v1.0.0
```

---

## 📊 Progress Tracker

| Phase | Status | Tasks Done |
|---|---|---|
| Phase 01 — Foundation | ⬜ | 0/8 |
| Phase 02 — Layout | ⬜ | 0/7 |
| Phase 03 — Homepage | ⬜ | 0/5 |
| Phase 04 — Music | ⬜ | 0/4 |
| Phase 05 — About | ⬜ | 0/2 |
| Phase 06 — Gallery | ⬜ | 0/3 |
| Phase 07 — Gigs | ⬜ | 0/2 |
| Phase 08 — Contact | ⬜ | 0/2 |
| Phase 09 — SEO | ⬜ | 0/6 |

**Total Tasks: 39** | **Selesai: 0/39**

---

*Update file ini setiap kali task selesai dengan mengubah `[ ]` → `[x]`*
*Last updated: September 2026*
