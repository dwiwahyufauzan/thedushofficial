# Technical Conventions — SvelteKit + TailwindCSS v4

## 1. Svelte 5 Runes (WAJIB)

Proyek ini menggunakan **Svelte 5 Runes API**. JANGAN gunakan sintaks Svelte 4 lama.

### ✅ GUNAKAN (Svelte 5)
```svelte
<script lang="ts">
  // Props
  let { title, children, class: className = '' } = $props<{
    title: string;
    children?: Snippet;
    class?: string;
  }>();

  // State lokal
  let count = $state(0);
  let isOpen = $state(false);

  // Derived/computed
  let doubled = $derived(count * 2);
  let isActive = $derived(count > 0);

  // Side effects
  $effect(() => {
    console.log('count changed:', count);
    return () => { /* cleanup */ };
  });

  // Event handlers (inline)
  function handleClick() {
    count++;
  }
</script>

<!-- Event handlers: gunakan onclick, onmouseover, dll (bukan on:click) -->
<button onclick={handleClick} class={className}>Click {count}</button>

<!-- Render children dengan {@render} -->
{@render children?.()}
```

### ❌ JANGAN GUNAKAN (Svelte 4 lama)
```svelte
<script>
  export let title;          // ❌ gunakan $props()
  let count = 0;             // ❌ harus $state() untuk reaktivitas
  $: doubled = count * 2;   // ❌ gunakan $derived()
</script>

<button on:click={handleClick}>...</button>  <!-- ❌ gunakan onclick= -->
<slot />                                       <!-- ❌ gunakan {@render children()} -->
```

---

## 2. TailwindCSS v4 Config

### app.css (entry point)
```css
/* Selalu di baris pertama */
@import 'tailwindcss';

/* Custom design tokens */
@theme {
  /* Warna */
  --color-bg-primary:   #0a0a0a;
  --color-text-primary: #f5f5f5;
  --color-accent:       #c3423c;

  /* Font */
  --font-display: 'Playfair Display', serif;
  --font-body:    'Inter', sans-serif;
}

/* Override base styles */
@layer base {
  body {
    @apply bg-[#0a0a0a] text-[#f5f5f5] font-body antialiased;
  }

  ::selection {
    @apply bg-[#c3423c] text-white;
  }

  html {
    scroll-behavior: smooth;
  }
}

/* Custom utilities */
@layer utilities {
  .heading-compressed {
    font-family: var(--font-display);
    font-weight: 900;
    letter-spacing: -0.25rem;
    transform: scaleY(1.7);
    transform-origin: bottom;
    text-transform: uppercase;
    display: inline-block;
  }
}
```

### Penting: Tidak ada tailwind.config.js di v4!
TailwindCSS v4 tidak menggunakan `tailwind.config.js`. Semua konfigurasi ada di `@theme {}` dalam CSS.

---

## 3. File Structure Conventions

```
src/
├── app.html            # Template HTML — tambahkan Google Fonts di sini
├── app.css             # Entry CSS — @import tailwindcss + @theme + @layer base
├── app.d.ts            # TypeScript global types
├── lib/
│   ├── components/     # Komponen Svelte (PascalCase.svelte)
│   ├── stores/         # State/stores (camelCase.ts)
│   ├── data/           # Data statis (camelCase.ts)
│   ├── types/          # TypeScript types (index.ts)
│   └── utils/          # Helper functions (index.ts)
└── routes/
    ├── +layout.svelte  # Layout global
    ├── +layout.ts      # Load function global
    ├── +page.svelte    # Homepage
    └── [route]/
        ├── +page.svelte
        └── +page.ts    # Data loading
```

### Naming Conventions
- **Components**: `PascalCase.svelte` (NavSidebar.svelte, HeroSection.svelte)
- **Routes**: `kebab-case/` (tidak ada, SvelteKit default lowercase)
- **Data files**: `camelCase.ts` (bandMembers.ts, discography.ts)
- **Types**: `index.ts` di folder types
- **CSS classes**: Tailwind utility, tambahan custom di `@layer utilities`

---

## 4. Data Loading Pattern

### +page.ts untuk halaman dengan data
```typescript
// src/routes/gigs/+page.ts
import type { PageLoad } from './$types';
import { gigs } from '$lib/data/gigs';

export const load: PageLoad = () => {
  const upcoming = gigs.filter(g => !g.isPast).sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const past = gigs.filter(g => g.isPast).sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return { upcoming, past };
};
```

### +page.svelte yang menggunakan data
```svelte
<script lang="ts">
  import type { PageData } from './$types';
  let { data } = $props<{ data: PageData }>();
  // data.upcoming, data.past tersedia
</script>
```

---

## 5. Gambar & Asset

### Lokasi
- **Static assets**: `/static/images/` (diakses sebagai `/images/foto.jpg`)
- **Component-specific**: tetap di `/static/images/` dengan prefix nama komponen

### Konvensi nama file gambar
```
hero-thedush-main.jpg
hero-thedush-mobile.jpg
member-[nama].jpg        (contoh: member-andi.jpg)
album-[slug]-cover.jpg  (contoh: album-debut-cover.jpg)
gallery-live-[no].jpg   (contoh: gallery-live-01.jpg)
og-image.jpg             (Open Graph image, 1200x630px)
```

### Penggunaan
```svelte
<img 
  src="/images/hero-thedush-main.jpg" 
  alt="The Dush Official — Band Indonesia"
  class="w-full h-full object-cover"
  loading="lazy"
  width="1920"
  height="1080"
/>
```

---

## 6. Import Paths

Gunakan alias `$lib` untuk import dari src/lib:
```typescript
import NavSidebar from '$lib/components/NavSidebar.svelte';
import { gigs } from '$lib/data/gigs';
import type { Gig } from '$lib/types';
```

---

## 7. Build & Dev Commands

```bash
# Development (menggunakan bun)
bun run dev       # atau npm run dev

# Type check
bun run check

# Format
bun run format

# Build production
bun run build

# Preview production build
bun run preview
```

---

## 8. Svelte Transitions

Gunakan transitions bawaan Svelte (tidak perlu library eksternal):

```svelte
<script>
  import { fade, fly, slide, scale } from 'svelte/transition';
  import { quintOut, cubicInOut } from 'svelte/easing';
</script>

<!-- Fade sederhana -->
<div transition:fade={{ duration: 300 }}>...</div>

<!-- Fly dari bawah -->
<div in:fly={{ y: 20, duration: 400, easing: quintOut }}>...</div>

<!-- Mobile menu (slide dari atas) -->
<div transition:fly={{ y: -20, duration: 200 }}>...</div>

<!-- Stagger (delay per item) -->
{#each items as item, i}
  <div in:fly={{ y: 10, delay: i * 50, duration: 300 }}>...</div>
{/each}
```

---

*Konvensi ini WAJIB diikuti untuk konsistensi kode di seluruh proyek.*
