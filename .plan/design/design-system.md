# Design System — The Dush Official

> Panduan visual lengkap untuk website The Dush Official. Semua keputusan desain HARUS mengacu pada dokumen ini.

---

## 🎨 Color System

### Inspirasi & Filosofi
Terinspirasi dari **bmthofficial.com**: monokromatik hitam-putih dengan satu aksen merah untuk energi dan agresi. Warna minimal = kesan premium dan terfokus.

### Palette Utama

```css
/* TailwindCSS v4 — @theme di app.css */
@theme {
  /* === BACKGROUND === */
  --color-bg-primary:   #0a0a0a;  /* Hitam deep — background utama */
  --color-bg-secondary: #111111;  /* Hitam sedikit lebih terang */
  --color-bg-surface:   #1a1a1a;  /* Surface: card, panel */
  --color-bg-elevated:  #222222;  /* Elevated: modal, dropdown */
  --color-bg-overlay:   rgba(10, 10, 10, 0.9); /* Overlay gelap */

  /* === TEXT === */
  --color-text-primary:   #f5f5f5;  /* Off-white — teks utama */
  --color-text-secondary: #a0a0a0;  /* Abu-abu — teks sekunder */
  --color-text-muted:     #606060;  /* Abu gelap — placeholder */
  --color-text-inverse:   #0a0a0a;  /* Hitam — teks di atas bg putih */

  /* === ACCENT === */
  --color-accent-primary: #c3423c;  /* Merah BMTH — aksen utama */
  --color-accent-hover:   #e04c46;  /* Merah lebih terang (hover) */
  --color-accent-dark:    #8b2e2a;  /* Merah gelap */
  --color-accent-light:   rgba(195, 66, 60, 0.15); /* Merah transparan */

  /* === BORDER === */
  --color-border-primary: #2a2a2a;  /* Border halus di bg gelap */
  --color-border-accent:  #c3423c;  /* Border aksen merah */
  --color-border-muted:   #1a1a1a;  /* Border sangat halus */

  /* === SPECIAL === */
  --color-white: #ffffff;
  --color-black: #000000;
}
```

### Panduan Penggunaan Warna

| Elemen | Warna | Class Tailwind |
|---|---|---|
| Background halaman | `#0a0a0a` | `bg-[#0a0a0a]` |
| Teks utama | `#f5f5f5` | `text-[#f5f5f5]` |
| Teks sekunder | `#a0a0a0` | `text-[#a0a0a0]` |
| Aksen / Arrow icon | `#c3423c` | `text-[#c3423c]` |
| Card background | `#1a1a1a` | `bg-[#1a1a1a]` |
| Border kartu | `#2a2a2a` | `border-[#2a2a2a]` |
| Hover background | `#ffffff` | `hover:bg-white` |
| Hover teks | `#0a0a0a` | `hover:text-black` |

---

## 🔤 Typography System

### Google Fonts (tambahkan di app.html)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

### Font Definitions

```css
@theme {
  --font-display:  'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  --font-heading:  'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-body:     'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:     'JetBrains Mono', 'Fira Code', monospace;
}
```

### Typography Scale

| Level | Font | Size | Weight | Letter-spacing | Transform |
|---|---|---|---|---|---|
| **Display** (hero H1) | Playfair Display | 72-120px | 900 (Black) | -4px | uppercase + scaleY(1.7) |
| **H1** (page title) | Playfair Display | 56-80px | 800-900 | -3px | uppercase |
| **H2** (section title) | Cormorant Garamond | 40-56px | 700 | -2px | uppercase |
| **H3** (subsection) | Cormorant Garamond | 28-36px | 600 | -1px | uppercase |
| **Nav Index** | Inter | 10-12px | 500 | normal | uppercase |
| **Nav Label** | Playfair Display | 36-48px | 900 | -4px | uppercase + scaleY(1.7) |
| **Body** | Inter | 16-18px | 400 | normal | — |
| **Caption / Label** | Inter | 12-14px | 400-500 | +0.1em | uppercase |
| **Button** | Inter | 14px | 600 | +0.05em | uppercase |

### CSS Utilities untuk Typography

```css
/* Custom utilities di @layer utilities */
@layer utilities {
  /* Heading compressed — signature BMTH style */
  .heading-compressed {
    font-family: var(--font-display);
    font-weight: 900;
    letter-spacing: -0.25rem;
    transform: scaleY(1.7);
    transform-origin: bottom center;
    text-transform: uppercase;
    line-height: 0.85;
    display: inline-block;
  }

  /* Heading compressed medium */
  .heading-compressed-md {
    font-family: var(--font-heading);
    font-weight: 700;
    letter-spacing: -0.15rem;
    transform: scaleY(1.5);
    transform-origin: bottom center;
    text-transform: uppercase;
    line-height: 0.9;
    display: inline-block;
  }

  /* Label kecil uppercase */
  .label-sm {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
}
```

---

## 📐 Spacing System

Menggunakan Tailwind default 8px base unit. Panduan utama:

| Spacing | Value | Penggunaan |
|---|---|---|
| `gap-1` / `p-1` | 4px | Micro spacing |
| `gap-2` / `p-2` | 8px | Small spacing |
| `gap-4` / `p-4` | 16px | Base spacing |
| `gap-8` / `p-8` | 32px | Section padding |
| `gap-16` / `p-16` | 64px | Large section |
| `gap-24` | 96px | Hero spacing |
| `lg:ml-64` | 256px | Offset dari sidebar |

---

## 📱 Breakpoints

Menggunakan default Tailwind:

| Prefix | Min-width | Device |
|---|---|---|
| (none) | 0px | Mobile |
| `sm:` | 640px | Large mobile |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Very large |

---

## 🌊 Shadows & Depth

```css
@theme {
  /* Custom shadows untuk dark theme */
  --shadow-glow-red:  0 0 20px rgba(195, 66, 60, 0.3);
  --shadow-card:      0 4px 24px rgba(0, 0, 0, 0.5);
  --shadow-overlay:   0 8px 48px rgba(0, 0, 0, 0.8);
}
```

---

## 🔲 Border Radius

```css
@theme {
  /* Radius minimal (band rock = lebih angular) */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
}
```

Band rock aesthetic = **lebih angular** (radius kecil atau tanpa radius sama sekali).

---

## 📊 Z-Index Layers

| Layer | Z-index | Elemen |
|---|---|---|
| `z-0` | 0 | Background images |
| `z-10` | 10 | Content sections |
| `z-20` | 20 | Sticky elements |
| `z-40` | 40 | Mobile menu overlay |
| `z-50` | 50 | Header, hamburger button |
| `z-[9999]` | 9999 | Lightbox, skip-to-content |

---

## 🎭 Special Effect: mix-blend-difference

Efek ini digunakan pada **navigasi sidebar** agar selalu kontras dengan apapun background di belakangnya.

**Cara kerja:**
- Header/nav berwarna **putih** (`text-white`, `bg-white` untuk hover state)
- Header memiliki `mix-blend-mode: difference`
- Di atas background **hitam** → teks terlihat **putih** (difference: white - black = white)
- Di atas background **putih** → teks terlihat **hitam** (difference: white - white = black)

**Implementasi Tailwind:**
```html
<header class="lg:mix-blend-difference">
  <!-- Semua elemen di dalam harus menggunakan text-white atau bg-white -->
</header>
```

---

*Design System ini WAJIB diikuti untuk semua komponen dan halaman.*
