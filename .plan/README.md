# 🎸 The Dush Official — Project Plan

> Website resmi band **The Dush Official** — membangun pengalaman digital yang gelap, agresif, dan premium terinspirasi dari [bmthofficial.com](https://www.bmthofficial.com/)

---

## 🔗 Links Penting
| | |
|---|---|
| Instagram | [@thedush._](https://www.instagram.com/thedush._/) |
| Referensi Desain | [bmthofficial.com](https://www.bmthofficial.com/) |
| Repo | `thedushofficial` |

---

## ⚙️ Tech Stack

| Teknologi | Versi | Peran |
|---|---|---|
| **SvelteKit** | ^2.63.0 | Framework web utama |
| **Svelte** | ^5.56.1 | UI components (Runes API) |
| **TailwindCSS** | ^4.3.0 | Styling & design tokens |
| **@tailwindcss/vite** | ^4.3.0 | Integrasi Vite + Tailwind |
| **TypeScript** | ^6.0.3 | Type safety |
| **Vite** | ^8.0.16 | Build tool |
| **Bun** | latest | Package manager |

---

## 📋 Phase Implementasi

| Phase | Nama | File Plan | Status |
|---|---|---|---|
| 01 | Foundation (Setup & Design System) | [phase-01-foundation.md](phases/phase-01-foundation.md) | ⬜ Todo |
| 02 | Layout Global (Navbar, Footer) | [phase-02-layout.md](phases/phase-02-layout.md) | ⬜ Todo |
| 03 | Homepage (Hero, Featured) | [phase-03-homepage.md](phases/phase-03-homepage.md) | ⬜ Todo |
| 04 | Halaman Musik & Discography | [phase-04-music.md](phases/phase-04-music.md) | ⬜ Todo |
| 05 | Halaman About (Profil Band) | [phase-05-about.md](phases/phase-05-about.md) | ⬜ Todo |
| 06 | Halaman Galeri (Foto & Video) | [phase-06-gallery.md](phases/phase-06-gallery.md) | ⬜ Todo |
| 07 | Halaman Gigs (Jadwal Manggung) | [phase-07-gigs.md](phases/phase-07-gigs.md) | ⬜ Todo |
| 08 | Halaman Kontak | [phase-08-contact.md](phases/phase-08-contact.md) | ⬜ Todo |
| 09 | SEO & Performance | [phase-09-seo-performance.md](phases/phase-09-seo-performance.md) | ⬜ Todo |

**Legend:** ⬜ Todo | 🔄 In Progress | ✅ Done

---

## 📁 Struktur Folder Plan

```
.plan/
├── README.md                       ← Kamu di sini
├── 00-project-overview.md          ← Deskripsi project & scope
├── phases/                         ← Rencana per phase
│   ├── phase-01-foundation.md
│   ├── phase-02-layout.md
│   ├── phase-03-homepage.md
│   ├── phase-04-music.md
│   ├── phase-05-about.md
│   ├── phase-06-gallery.md
│   ├── phase-07-gigs.md
│   ├── phase-08-contact.md
│   └── phase-09-seo-performance.md
├── design/                         ← Design system & referensi
│   ├── design-system.md
│   ├── bmth-reference-analysis.md
│   ├── component-library.md
│   └── animation-guide.md
├── components/                     ← Spec tiap komponen
│   ├── navigation.md
│   ├── hero-section.md
│   ├── music-player.md
│   ├── photo-gallery.md
│   ├── video-embed.md
│   ├── gig-card.md
│   ├── band-member-card.md
│   ├── social-links.md
│   └── footer.md
├── routes/                         ← Struktur routing
│   ├── route-structure.md
│   ├── page-home.md
│   ├── page-music.md
│   ├── page-about.md
│   ├── page-gallery.md
│   ├── page-gigs.md
│   └── page-contact.md
├── data/                           ← Data & konten
│   ├── band-profile.md
│   ├── discography.md
│   ├── gigs-data.md
│   └── social-media.md
└── technical/                      ← Panduan teknis
    ├── sveltekit-conventions.md
    ├── tailwind-config.md
    ├── state-management.md
    ├── image-optimization.md
    └── deployment.md
```

---

## 🎨 Design Brief

### Estetika
- **Dark & Aggressive** — hitam dominan, kontras tinggi
- **Compressed Typography** — serif bold dengan scale vertikal (terinspirasi BMTH)
- **Sidebar Navigation** — navigasi vertikal kiri (desktop) + hamburger (mobile)
- **Full-bleed Imagery** — foto/video memenuhi viewport
- **Single Accent Color** — merah #c3423c sebagai satu-satunya warna aksen

### Warna Utama
| Nama | Hex | Penggunaan |
|---|---|---|
| Background Deep | `#0a0a0a` | Background utama |
| Text Primary | `#f5f5f5` | Teks utama |
| Accent Red | `#c3423c` | Arrow, hover, aksen |
| Surface | `#1a1a1a` | Card, overlay |
| Muted | `#a0a0a0` | Teks sekunder |

### Font
| Font | Style | Penggunaan |
|---|---|---|
| **Playfair Display** | 700-900 | Heading besar (compressed) |
| **Cormorant Garamond** | 600-700 | Heading medium |
| **Inter** | 300-600 | Body text, UI |

---

## 🚀 Cara Memulai

1. Baca `00-project-overview.md` untuk memahami scope
2. Baca `design/design-system.md` untuk memahami visual identity
3. Baca `design/bmth-reference-analysis.md` untuk memahami referensi desain
4. Ikuti phase satu per satu mulai dari `phase-01-foundation.md`
5. Centang task list di setiap file phase saat selesai

---

*Last updated: September 2026*
