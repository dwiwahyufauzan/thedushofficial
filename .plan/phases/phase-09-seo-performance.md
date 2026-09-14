# Phase 09 — SEO & Performance

## Tujuan
Mengoptimalkan website untuk mesin pencari dan performa loading agar website cepat, mudah ditemukan, dan memberikan pengalaman pengguna terbaik.

---

## Task List

### 9.1 SEO Meta Tags (semua halaman)
- [ ] Verifikasi `<title>` unik di setiap halaman
- [ ] Verifikasi `<meta name="description">` di setiap halaman
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Robots meta tag (`index, follow`)
- [ ] Author meta tag

### 9.2 Semantic HTML
- [ ] Verifikasi 1 `<h1>` per halaman
- [ ] Heading hierarchy: h1 → h2 → h3 (tidak melompat)
- [ ] `<nav>` dengan `aria-label`
- [ ] `<main>` element
- [ ] `<article>`, `<section>` sesuai konten
- [ ] `alt` attribute wajib di semua `<img>`

### 9.3 Structured Data (JSON-LD)
- [ ] Buat schema Organization untuk band
- [ ] Buat schema WebSite
- [ ] Tambahkan di `+layout.svelte` atau `+page.svelte` yang relevan

### 9.4 Sitemap
- [ ] Buat `src/routes/sitemap.xml/+server.ts`
- [ ] Generate XML sitemap otomatis dari semua routes
- [ ] URL: /, /music, /about, /gallery, /gigs, /contact

### 9.5 Performance
- [ ] Lazy load semua gambar (`loading="lazy"`)
- [ ] Compress gambar di /static (format WebP jika bisa)
- [ ] Minimalkan JavaScript bundle
- [ ] Gunakan `svelte/transition` bukan library animasi eksternal
- [ ] Check Core Web Vitals (LCP, CLS, FID)

### 9.6 Accessibility
- [ ] Skip-to-content link berfungsi
- [ ] Semua interactive elements keyboard accessible
- [ ] Color contrast ratio minimal 4.5:1 (WCAG AA)
- [ ] Focus visible states jelas
- [ ] Screen reader test (setidaknya dengan NVDA atau VoiceOver)

### 9.7 Error Pages
- [ ] Buat `src/routes/+error.svelte` — 404 on-brand
- [ ] Pesan error friendly dan on-brand
- [ ] Link kembali ke homepage

### 9.8 Deployment Preparation
- [ ] Verifikasi adapter (adapter-auto untuk Vercel/Netlify)
- [ ] Environment variables dokumentasi
- [ ] Build test: `npm run build` tanpa error
- [ ] Preview test: `npm run preview`

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/routes/sitemap.xml/+server.ts` | Baru | XML sitemap |
| `src/routes/+error.svelte` | Baru | 404 error page |
| `static/robots.txt` | Baru | Robots directives |
| Semua `+page.svelte` | Modifikasi | Verifikasi meta tags |

---

## Acceptance Criteria
- [ ] Lighthouse score: Performance >80, SEO >90, Accessibility >85
- [ ] Semua halaman punya meta description
- [ ] Sitemap accessible di /sitemap.xml
- [ ] robots.txt ada
- [ ] Tidak ada broken links
- [ ] Build berhasil tanpa error/warning

---

## Dependensi
- **Semua phase sebelumnya harus selesai**

---

## Estimasi Waktu
~2-3 jam
