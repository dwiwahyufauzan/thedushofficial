# Phase 08 — Halaman Kontak

## Tujuan
Membangun halaman kontak untuk booking, media inquiry, dan fan messages, beserta tampilan social media resmi band.

---

## Task List

### 8.1 ContactForm Component
- [ ] Buat `src/lib/components/ContactForm.svelte`
- [ ] Fields: Nama, Email, Subjek (dropdown: Booking/Media/General), Pesan
- [ ] Validasi client-side (required fields, email format)
- [ ] Submit handler (untuk sekarang: console.log atau mailto: link)
- [ ] Loading state saat submit
- [ ] Success state setelah submit
- [ ] Error state jika gagal
- [ ] Styling dark dengan border merah aksen pada focus

### 8.2 Contact Info Section
- [ ] Email kontak (jika tersedia)
- [ ] Lokasi (kota, Indonesia)
- [ ] Social media resmi dengan link

### 8.3 Halaman Kontak (+page.svelte)
- [ ] Buat `src/routes/contact/+page.svelte`
- [ ] Section: Hero dengan judul "Contact"
- [ ] Section: Contact form (kiri) + Info (kanan) — desktop split
- [ ] Section: Social media links besar
- [ ] SEO meta tags

---

## File yang Dibuat/Dimodifikasi

| File | Status | Keterangan |
|---|---|---|
| `src/lib/components/ContactForm.svelte` | Baru | Form kontak |
| `src/routes/contact/+page.svelte` | Baru | Halaman kontak |

---

## Acceptance Criteria
- [ ] Form validasi berfungsi (pesan error jelas)
- [ ] Submit memberikan feedback visual
- [ ] Social links berfungsi dan buka tab baru
- [ ] Responsif (stack vertikal di mobile)
- [ ] Focus states jelas untuk accessibility

---

## Dependensi
- **Phase 02** (layout)

---

## Estimasi Waktu
~2-3 jam
