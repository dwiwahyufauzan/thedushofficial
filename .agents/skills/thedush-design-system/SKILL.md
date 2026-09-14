---
name: thedush-design-system
description: >
  Panduan lengkap design system untuk website The Dush Official,
  terinspirasi dari gaya desain bmthofficial.com. Berisi sistem warna,
  tipografi compressed, navigasi sidebar dengan mix-blend-difference,
  layout, komponen, animasi, dan konvensi kode SvelteKit + TailwindCSS v4
  untuk menciptakan tampilan dark rock band yang premium dan agresif.
  Aktifkan skill ini setiap kali membuat atau memodifikasi komponen,
  halaman, atau styling untuk proyek website The Dush Official.
---

# The Dush Official — Design System Skill

## ⚡ PRINSIP UTAMA (BACA DULU SEBELUM MULAI)

1. **Dark always** — background selalu hitam (#0a0a0a), teks off-white (#f5f5f5)
2. **One accent only** — aksen HANYA merah #c3423c, tidak ada warna lain
3. **Compressed serif heading** — Playfair Display, font-black, scaleY(1.7), -tracking-[4px]
4. **Sidebar navigation** — persis seperti bmthofficial.com (numbered index + arrow icon)
5. **mix-blend-difference** pada header/nav
6. **Svelte 5 Runes** — $state, $derived, $props(), $effect (BUKAN Svelte 4)
7. **TailwindCSS v4** — @theme untuk tokens, tidak ada tailwind.config.js
8. **Mobile-first** — desain dari mobile dulu

---

## 🎨 COLOR SYSTEM

### Palette (tambahkan di `src/app.css` dalam `@theme {}`)

```css
@theme {
  --color-bg-primary:   #0a0a0a;
  --color-bg-secondary: #111111;
  --color-bg-surface:   #1a1a1a;
  --color-bg-elevated:  #222222;
  --color-text-primary:   #f5f5f5;
  --color-text-secondary: #a0a0a0;
  --color-text-muted:     #606060;
  --color-text-inverse:   #0a0a0a;
  --color-accent-primary: #c3423c;
  --color-accent-hover:   #e04c46;
  --color-border-primary: #2a2a2a;
  --color-font-display: 'Playfair Display', serif;
  --color-font-body:    'Inter', sans-serif;
}
```

### Aturan Warna Ketat
| Elemen | WAJIB gunakan |
|---|---|
| Background halaman | `bg-[#0a0a0a]` |
| Teks utama | `text-[#f5f5f5]` |
| Teks sekunder/subtitle | `text-[#a0a0a0]` |
| Aksen (arrow, border highlight) | `text-[#c3423c]` atau `border-[#c3423c]` |
| Card/panel background | `bg-[#1a1a1a]` |
| Border halus | `border-[#2a2a2a]` |
| Hover nav item | `hover:bg-white hover:text-black` |

---

## 🔤 TYPOGRAPHY

### Google Fonts di `src/app.html` (dalam `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,900&family=Cormorant+Garamond:wght@600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Font Tokens
```css
@theme {
  --font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
  --font-heading: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

### Teknik Heading Compressed (WAJIB untuk heading besar)
```svelte
<!-- Hero heading — ukuran terbesar -->
<h1 class="font-serif text-7xl lg:text-9xl font-black uppercase -tracking-[4px] scale-y-[1.7] origin-bottom leading-none text-[#f5f5f5]">
  THE DUSH
</h1>

<!-- Nav item text -->
<span class="font-serif text-3xl xl:text-5xl scale-y-[1.7] font-black origin-center -tracking-[4px] flex justify-between flex-1">
  <span>Hom</span>
  <span>e</span>
</span>

<!-- Section heading H2 -->
<h2 class="font-serif text-4xl lg:text-6xl font-black uppercase -tracking-[3px] scale-y-[1.5] origin-bottom">
  MUSIK
</h2>
```

### Scale Nav Items (Leet Speak Style)
Ganti beberapa huruf dengan angka untuk estetika tech-dark:
- `i → 1`, `e → 3`, `s → 5`, `o → 0`, `a → 4`

```
Home    → H0m + e     (atau Hom + e)
Music   → Mu5i + c
About   → Ab0ut
Gallery → Gal3 + ry
Gigs    → G1g5
Contact → Cont4 + ct
```

---

## 🧭 NAVIGASI SIDEBAR (Persis BMTH)

### NavSidebar.svelte — Implementasi Lengkap

```svelte
<script lang="ts">
  import { page } from '$app/stores';
  import ArrowIcon from './ArrowIcon.svelte';
  
  let isMenuOpen = $state(false);
  
  const navItems = [
    { index: '01', label: 'Home',    href: '/',        text: ['H0m', 'e']     },
    { index: '02', label: 'Music',   href: '/music',   text: ['Mu5i', 'c']    },
    { index: '03', label: 'About',   href: '/about',   text: ['Ab0ut', '']    },
    { index: '04', label: 'Gallery', href: '/gallery', text: ['Gal3', 'ry']   },
    { index: '05', label: 'Gigs',    href: '/gigs',    text: ['G1g5', '']     },
    { index: '06', label: 'Contact', href: '/contact', text: ['Cont4', 'ct']  },
  ];
  
  function toggleMenu() { isMenuOpen = !isMenuOpen; }
  function closeMenu() { isMenuOpen = false; }
</script>

<header class="relative z-50 lg:flex lg:items-center lg:fixed lg:top-0 lg:left-4 lg:h-svh lg:mix-blend-difference">
  <!-- Hamburger button (mobile only) -->
  <button
    onclick={toggleMenu}
    aria-expanded={isMenuOpen}
    aria-label="Toggle navigation menu"
    class="fixed top-0 right-0 z-50 p-4 m-0 text-2xl font-medium uppercase lg:hidden text-white"
  >
    {isMenuOpen ? '_close' : '_menu'}
  </button>

  <!-- Nav list -->
  <nav aria-label="primary_navigation">
    <p id="primary_navigation" class="sr-only">Primary Navigation</p>
    <ul
      class="fixed top-0 left-0 size-full lg:size-auto lg:relative flex-col gap-px lg:gap-1 flex items-center lg:items-start justify-start py-8 lg:py-0 transition-transform duration-200 z-40 text-black lg:text-white bg-white lg:bg-transparent overflow-y-auto w-full"
      class:-translate-y-full={!isMenuOpen}
      class:translate-y-0={isMenuOpen}
      class:lg:translate-y-0={true}
    >
      {#each navItems as item}
        {@const isActive = $page.url.pathname === item.href}
        <li class="relative block w-36 lg:w-36 xl:w-52 overflow-clip">
          <a
            href={item.href}
            onclick={closeMenu}
            class="leading-none p-1 pb-3 xl:p-3 xl:pb-5 uppercase transition-colors hover:bg-white hover:text-black flex flex-col"
            class:bg-white={isActive}
            class:text-black={isActive}
          >
            <!-- Index label -->
            <span class="block pb-1 text-[10px] lg:text-xs tracking-wide scale-y-90 font-body font-medium">
              Indx.{item.index}
            </span>

            <!-- Nav text + arrow -->
            <span class="flex items-end flex-1 gap-2">
              <span class="font-serif text-3xl xl:text-4xl 2xl:text-5xl scale-y-[1.7] font-black duration-100 origin-center -tracking-[4px] flex justify-between flex-1">
                <span>{item.text[0]}</span>
                {#if item.text[1]}
                  <span>{item.text[1]}</span>
                {/if}
              </span>
              <!-- Arrow icon SVG merah #c3423c -->
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25.25" viewBox="0 0 25 25.25" class="block object-contain w-4 h-auto max-w-full fill-current lg:-mb-1" aria-hidden="true">
                <path fill="#c3423c" d="M25 25.25H0v-2.5h20.806L1.346 2.363 3.154.637 22.5 20.9V0H25Z"/>
              </svg>
            </span>

            <span class="sr-only">{item.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
```

### CSS Mix-blend-difference — Cara Kerja
```
Mode: mix-blend-difference
Header warna elemen: WHITE (#ffffff)
Di atas bg hitam (#000000): WHITE - BLACK = WHITE → terlihat putih ✓
Di atas bg putih (#ffffff): WHITE - WHITE = BLACK → terlihat hitam ✓
Di atas foto berwarna: hasil warna komplementer → selalu kontras ✓
```

---

## 🖼️ HERO SECTION

```svelte
<section class="relative min-h-svh flex items-end overflow-hidden bg-[#0a0a0a]">
  <!-- Background foto band -->
  <div class="absolute inset-0 z-0">
    <img
      src="/images/hero-thedush-main.jpg"
      alt="The Dush Official"
      class="w-full h-full object-cover object-top"
      fetchpriority="high"
    />
    <!-- Gradient overlay: foto fade ke hitam di bagian bawah -->
    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.3)] to-transparent"></div>
    <!-- Overlay kiri untuk membantu readability teks -->
    <div class="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.6)] to-transparent lg:hidden"></div>
  </div>

  <!-- Content (offset dari sidebar di desktop) -->
  <div class="relative z-10 p-6 lg:p-12 lg:ml-56 xl:ml-64 pb-12 lg:pb-16 max-w-4xl">
    <p class="font-body text-xs uppercase tracking-[0.3em] text-[#a0a0a0] mb-4">
      Official Website
    </p>
    <!-- Heading compressed -->
    <h1 class="font-serif text-7xl sm:text-8xl lg:text-9xl font-black uppercase -tracking-[4px] scale-y-[1.7] origin-bottom leading-none text-[#f5f5f5] mb-8">
      THE DUSH
    </h1>
    <!-- CTA buttons -->
    <div class="flex flex-wrap gap-4">
      <a href="/music" class="px-6 py-3 bg-[#c3423c] text-white text-sm font-body font-semibold uppercase tracking-wider hover:bg-[#e04c46] transition-colors">
        Listen Now
      </a>
      <a href="/gigs" class="px-6 py-3 border border-[#f5f5f5] text-[#f5f5f5] text-sm font-body font-semibold uppercase tracking-wider hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-colors">
        See Gigs
      </a>
    </div>
  </div>
</section>
```

---

## 📐 GLOBAL LAYOUT

### +layout.svelte
```svelte
<script lang="ts">
  import '../app.css';
  import NavSidebar from '$lib/components/NavSidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  let { children } = $props();
</script>

<!-- Skip to content (aksesibilitas) -->
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:underline"
>
  Skip to main content
</a>

<div class="layout bg-[#0a0a0a] min-h-svh text-[#f5f5f5]">
  <NavSidebar />
  <main id="main-content" class="min-h-svh overflow-x-clip relative pt-px">
    {@render children()}
  </main>
  <Footer />
</div>
```

### Margin System untuk Konten
- Mobile: `mx-4` atau `px-4`
- Desktop: `lg:mx-64` atau `lg:ml-64` (offset sidebar 256px)
- Section dalam hero: `lg:ml-56 xl:ml-64`

---

## 🎭 ANIMASI PANDUAN

### Svelte Transitions (gunakan bawaan, tidak perlu library)
```svelte
<script>
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<!-- Page content entrance -->
<main in:fade={{ duration: 400, delay: 100 }}>...</main>

<!-- Nav items mobile stagger -->
{#each navItems as item, i}
  <li in:fly={{ y: -10, delay: i * 60, duration: 300, easing: quintOut }}>
    ...
  </li>
{/each}
```

### CSS Transitions
```css
/* Hover cepat (ala BMTH) */
transition-colors duration-100

/* Hover medium */
transition-all duration-200

/* Mobile menu slide */
transition-transform duration-200
```

### Hover Effects Wajib
- **Nav items**: `hover:bg-white hover:text-black` (swap total, cepat 100ms)
- **Buttons**: scale + bg color change
- **Cards**: `hover:-translate-y-1 hover:shadow-lg transition-transform duration-200`
- **Images**: `hover:scale-105 transition-transform duration-500` (pada container overflow-hidden)

---

## 🏗️ KOMPONEN YANG HARUS DIBUAT

### Urutan pembuatan (per dependencies):
1. `ArrowIcon.svelte` — SVG sederhana, dipakai NavSidebar
2. `NavSidebar.svelte` — Navigasi utama
3. `Footer.svelte` — Footer global
4. `SocialLinks.svelte` — Links sosmed (dipakai Footer + Contact)
5. `Button.svelte` — Tombol reusable
6. `SectionTitle.svelte` — Judul section (h2 compressed)
7. `HeroSection.svelte` — Hero homepage
8. `MusicCard.svelte` — Kartu musik
9. `GigCard.svelte` — Kartu gig
10. `BandMemberCard.svelte` — Kartu personil
11. `PhotoGrid.svelte` — Grid foto
12. `Lightbox.svelte` — Viewer foto fullscreen
13. `VideoEmbed.svelte` — YouTube embed
14. `ContactForm.svelte` — Form kontak

---

## ✅ CHECKLIST SETIAP KOMPONEN

Sebelum submit komponen baru, verifikasi:
- [ ] Background gelap (#0a0a0a atau #1a1a1a)
- [ ] Teks utama off-white (#f5f5f5)
- [ ] Aksen HANYA merah #c3423c
- [ ] Font heading: Playfair Display / Cormorant Garamond
- [ ] Font body: Inter
- [ ] Menggunakan Svelte 5 Runes ($props, $state, dll)
- [ ] Responsive (mobile → desktop)
- [ ] Hover states ada
- [ ] aria-label / alt text ada
- [ ] Tidak ada warna selain hitam, putih, abu, merah
