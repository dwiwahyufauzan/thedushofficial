---
name: thedush-sveltekit-patterns
description: >
  Panduan pattern SvelteKit 2 + Svelte 5 khusus untuk proyek website
  The Dush Official. Berisi konvensi data loading, state management,
  routing, form handling, dan implementasi fitur-fitur spesifik
  band website. Aktifkan skill ini saat membuat routes, load functions,
  stores, atau fitur-fitur teknis di proyek The Dush Official.
---

# The Dush Official — SvelteKit Patterns Skill

## ⚡ WAJIB DIINGAT

- Svelte: `^5.56.1` — gunakan **Runes API**, bukan Svelte 4
- SvelteKit: `^2.63.0`
- TypeScript: `^6.0.3`
- Package manager: **Bun** (`bun run dev`, bukan `npm run dev`)
- Tidak ada database — semua data **statis** (TypeScript files)

---

## 1. TYPESCRIPT TYPES

### `src/lib/types/index.ts`
```typescript
// === Band Member ===
export interface BandMember {
  id: string;
  name: string;
  role: string;           // 'Vocalist' | 'Guitarist' | 'Bassist' | 'Drummer' | 'Keyboardist'
  photo: string;          // path: '/images/member-[id].jpg'
  bio: string;            // bio singkat 2-3 kalimat
  instagram?: string;     // username tanpa @
  isFeatured?: boolean;
}

// === Discography ===
export type ReleaseType = 'Single' | 'EP' | 'Album';

export interface Track {
  id: string;
  title: string;
  duration?: string;       // format: "3:45"
  youtubeId?: string;
}

export interface Release {
  id: string;             // slug: 'debut-single-2024'
  title: string;
  type: ReleaseType;
  releaseYear: number;
  releaseDate?: string;   // ISO date: "2024-03-15"
  coverArt: string;       // '/images/album-[id]-cover.jpg'
  tracks: Track[];
  streaming: StreamingLinks;
  description?: string;
  isLatest?: boolean;
}

// === Gigs ===
export interface Gig {
  id: string;
  date: string;           // ISO date: "2026-10-15"
  time?: string;          // "20:00 WIB"
  eventName?: string;     // nama event/festival
  venue: string;          // nama venue
  city: string;
  province?: string;
  ticketUrl?: string;
  isFree?: boolean;
  isSoldOut?: boolean;
  isPast: boolean;        // true jika sudah lewat
  notes?: string;
}

// === Social Links ===
export interface StreamingLinks {
  spotify?: string;
  youtube?: string;
  youtubeMusic?: string;
  appleMusic?: string;
  deezer?: string;
  soundcloud?: string;
}

export interface SocialLinks {
  instagram?: string;     // full URL
  youtube?: string;
  tiktok?: string;
  facebook?: string;
  twitter?: string;
  spotify?: string;
}

// === Config ===
export interface SiteConfig {
  bandName: string;
  tagline: string;
  email?: string;
  city: string;
  genre: string;
  socials: SocialLinks;
  ogImage: string;
}
```

---

## 2. DATA STATIS

### `src/lib/data/config.ts`
```typescript
import type { SiteConfig } from '$lib/types';

export const siteConfig: SiteConfig = {
  bandName: 'The Dush Official',
  tagline: 'Dark & Raw — Indonesian Rock',
  email: 'booking@thedush.id',  // ganti jika ada
  city: 'Indonesia',
  genre: 'Rock / Alternative',
  socials: {
    instagram: 'https://www.instagram.com/thedush._/',
    youtube:   '',   // isi jika ada
    tiktok:    '',   // isi jika ada
    spotify:   '',   // isi jika ada
  },
  ogImage: '/images/og-image.jpg',
};
```

### `src/lib/data/band-members.ts` (Template)
```typescript
import type { BandMember } from '$lib/types';

export const bandMembers: BandMember[] = [
  {
    id: 'vocalist',
    name: 'Nama Vokalis',   // ganti dengan nama asli
    role: 'Vocalist',
    photo: '/images/member-vocalist.jpg',
    bio: 'Deskripsi singkat vokalis band.',
    instagram: 'username_instagram',
  },
  {
    id: 'guitarist',
    name: 'Nama Gitaris',
    role: 'Guitarist',
    photo: '/images/member-guitarist.jpg',
    bio: 'Deskripsi singkat gitaris.',
    instagram: 'username_instagram',
  },
  // Tambah member lain...
];
```

### `src/lib/data/gigs.ts` (Template)
```typescript
import type { Gig } from '$lib/types';

export const gigs: Gig[] = [
  {
    id: 'gig-2026-10-example',
    date: '2026-10-15',
    time: '20:00 WIB',
    eventName: 'Rock Night Vol. 3',
    venue: 'Venue Name',
    city: 'Jakarta',
    province: 'DKI Jakarta',
    ticketUrl: 'https://tiket.com/example',
    isPast: false,
  },
  // Tambah gigs lain...
];
```

---

## 3. DATA LOADING PATTERN

### +page.ts (load function)
```typescript
// src/routes/gigs/+page.ts
import type { PageLoad } from './$types';
import { gigs } from '$lib/data/gigs';

export const load: PageLoad = () => {
  const now = new Date();
  
  const upcoming = gigs
    .filter(g => !g.isPast && new Date(g.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const past = gigs
    .filter(g => g.isPast || new Date(g.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { upcoming, past };
};

// SSG: data statis bisa prerender
export const prerender = true;
```

### +page.svelte yang menggunakan load data
```svelte
<script lang="ts">
  import type { PageData } from './$types';
  import GigCard from '$lib/components/GigCard.svelte';

  let { data } = $props<{ data: PageData }>();
  // data.upcoming : Gig[]
  // data.past     : Gig[]
</script>
```

---

## 4. STATE MANAGEMENT (Svelte 5)

### State di component (lokal)
```svelte
<script lang="ts">
  let isMenuOpen = $state(false);
  let activeFilter = $state<'all' | 'live' | 'editorial'>('all');
  let selectedPhoto = $state<string | null>(null);
</script>
```

### Shared state (global — tanpa stores jika sederhana)
Untuk state yang perlu di-share antar komponen, gunakan **module-level $state** di file terpisah:

```typescript
// src/lib/stores/menu.svelte.ts
export const menuState = $state({ isOpen: false });

// Cara pakai di komponen:
// import { menuState } from '$lib/stores/menu.svelte';
// menuState.isOpen = true;
```

> **Catatan**: File yang berisi `$state` di level module HARUS berakhiran `.svelte.ts`

---

## 5. COMPONENT PROPS PATTERN

### Cara definisikan props dengan TypeScript
```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { Gig } from '$lib/types';

  // Props dengan type
  let {
    gig,
    showTicketLink = true,
    class: className = '',
    children,
  } = $props<{
    gig: Gig;
    showTicketLink?: boolean;
    class?: string;
    children?: Snippet;
  }>();
</script>

<!-- Template -->
<div class="gig-card {className}">
  <span>{gig.venue}</span>
  {#if children}
    {@render children()}
  {/if}
</div>
```

---

## 6. ROUTING STRUCTURE

```
src/routes/
├── +layout.svelte          # Layout global (NavSidebar + Footer)
├── +layout.ts              # Optional: load function global
├── +page.svelte            # Homepage (/)
├── +error.svelte           # Error page (404, 500)
├── music/
│   ├── +page.svelte        # /music — daftar semua musik
│   └── +page.ts            # load: discography data
├── about/
│   ├── +page.svelte        # /about — profil band
│   └── +page.ts            # load: bandMembers data
├── gallery/
│   └── +page.svelte        # /gallery — foto & video
├── gigs/
│   ├── +page.svelte        # /gigs — jadwal manggung
│   └── +page.ts            # load: gigs data (upcoming/past)
├── contact/
│   └── +page.svelte        # /contact — form kontak
└── sitemap.xml/
    └── +server.ts          # Generate sitemap
```

---

## 7. SEO META TAGS (Setiap Halaman)

```svelte
<!-- Di setiap +page.svelte -->
<script lang="ts">
  const pageTitle = 'Music — The Dush Official';
  const pageDesc = 'Dengarkan musik terbaru dari The Dush Official.';
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDesc} />
  <meta name="author" content="The Dush Official" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#0a0a0a" />

  <!-- Open Graph -->
  <meta property="og:title"       content={pageTitle} />
  <meta property="og:description" content={pageDesc} />
  <meta property="og:image"       content="/images/og-image.jpg" />
  <meta property="og:url"         content="https://thedush.id/music" />
  <meta property="og:type"        content="website" />
  <meta property="og:locale"      content="id_ID" />

  <!-- Twitter Card -->
  <meta name="twitter:card"  content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:image" content="/images/og-image.jpg" />
</svelte:head>
```

---

## 8. FORM HANDLING (Contact Page)

```svelte
<script lang="ts">
  let formData = $state({
    name: '',
    email: '',
    subject: 'general' as 'booking' | 'media' | 'general',
    message: '',
  });
  
  let isSubmitting = $state(false);
  let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
  
  // Validasi sederhana
  let errors = $derived({
    name:    formData.name.trim().length < 2 ? 'Nama terlalu pendek' : null,
    email:   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'Email tidak valid' : null,
    message: formData.message.trim().length < 10 ? 'Pesan terlalu pendek' : null,
  });
  
  let isValid = $derived(!Object.values(errors).some(Boolean));
  
  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!isValid) return;
    
    isSubmitting = true;
    
    // Untuk saat ini: gunakan mailto atau Formspree
    // Option 1: mailto (paling sederhana)
    const mailtoUrl = `mailto:booking@thedush.id?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoUrl);
    submitStatus = 'success';
    isSubmitting = false;
    
    // Option 2: Formspree (https://formspree.io - free tier)
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    // submitStatus = res.ok ? 'success' : 'error';
  }
</script>
```

---

## 9. UTILITY FUNCTIONS

### `src/lib/utils/index.ts`
```typescript
// Format tanggal gig
export function formatGigDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  // Output: "15 Oktober 2026"
}

// Format tanggal singkat
export function formatDateShort(dateStr: string): { day: string; month: string; year: string } {
  const date = new Date(dateStr);
  return {
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleDateString('id-ID', { month: 'short' }).toUpperCase(),
    year: date.getFullYear().toString(),
  };
}

// Extract YouTube ID dari berbagai format URL
export function getYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Cek apakah gig masih upcoming
export function isUpcoming(dateStr: string): boolean {
  return new Date(dateStr) >= new Date();
}
```

---

## 10. PRERENDER & SSG

Karena data statis, aktifkan prerendering untuk performa:

```typescript
// src/routes/+layout.ts
export const prerender = true;
export const trailingSlash = 'never';
```

```typescript
// Di setiap +page.ts juga bisa override:
export const prerender = true;
```

Dengan prerender, Vite akan menghasilkan file HTML statis yang bisa di-deploy ke Netlify/Vercel dengan sangat cepat.
