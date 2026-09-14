# BMTH Reference Analysis — Untuk Adaptasi The Dush Official

> Analisis mendalam desain [bmthofficial.com](https://www.bmthofficial.com/) sebagai referensi utama desain website The Dush Official.

---

## 1. Navigasi Sidebar

### Karakteristik
- **Posisi**: Fixed kiri (desktop), full-screen overlay (mobile)
- **Lebar desktop**: ~144px (w-36) normal, ~208px (xl:w-52) di layar besar
- **Layout item nav**: flex-column, gap minimal antar item
- **blend mode**: `mix-blend-difference` pada `<header>` container

### Anatomi Nav Item
```
[Indx.01]          ← Index label: font-body, 10-12px, uppercase, scale-y-90
[Hom      e]  [↗]  ← Teks nav: font-serif 36-64px, font-black, scale-y-[1.7], -tracking-[4px]
                   ← Teks split: justify-between (dua span dengan ruang di tengah)
                   ← Arrow: SVG 25×25px, fill #c3423c, posisi flex-end
```

### Kode HTML Nav Item BMTH (diekstrak):
```html
<li class="relative block opacity-0 w-36 lg:w-36 xl:w-52 lg:opacity-100 overflow-clip">
  <a class="leading-none p-1 pb-3 xl:p-3 xl:pb-5 uppercase transition-colors hover:bg-white hover:text-black flex flex-col">
    <span class="block pb-1 scale-y-90">Indx.01</span>
    <span class="flex items-end flex-1 gap-2">
      <span class="font-serif text-3xl xl:text-4xl 2xl:text-5xl scale-y-[1.7] font-black duration-100 origin-center -tracking-[4px] flex justify-between flex-1">
        <span>Hom</span>
        <span>e</span>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25.25" viewBox="0 0 25 25.25" class="block object-contain w-4 h-auto max-w-full fill-current lg:-mb-1">
        <path fill="#c3423c" d="M25 25.25H0v-2.5h20.806L1.346 2.363 3.154.637 22.5 20.9V0H25Z"/>
      </svg>
    </span>
  </a>
</li>
```

### Mobile Menu
- Hamburger button: `fixed top-0 right-0 z-50 p-4 text-2xl font-medium uppercase text-white`
- Teks button: `_menu` (dengan underscore!)
- Nav list mobile: `fixed top-0 left-0 size-full` → `-translate-y-full` (tersembunyi) → `translate-y-0` (terbuka)
- Transition: `transition-transform duration-200`
- Mobile nav: `bg-white text-black` (invert dari desktop)
- Nav items mobile: `opacity-0` (tersembunyi default, muncul saat menu open)

---

## 2. Tipografi

### Prinsip Utama
1. **Font**: Serif serif condensed yang sangat bold — BMTH menggunakan font custom serif
2. **Transform**: `scaleY(1.7)` — membuat teks terasa "tertekan" vertikal → agresif
3. **Letter-spacing**: `-tracking-[4px]` = `-0.25rem` — sangat rapat antar huruf
4. **Uppercase**: semua heading dan nav uppercase
5. **Split character**: pemisahan karakter pertama dan terakhir dengan `justify-between`

### Teknik "Split Character" BMTH
```
"Home"  → <span>Hom</span><span>e</span>  (justify-between)
"Live"  → <span>L</span><span>1ve</span>  (+ angka menggantikan huruf)
"Music" → <span>Mu5i</span><span>c</span> (+ angka menggantikan huruf)
```

Perhatikan: BMTH mengganti beberapa huruf dengan angka yang mirip visual:
- `i` → `1`
- `e` → `3`
- `s` → `5`
- `o` → `0`

Ini adalah **leet speak aesthetic** yang memberikan feel tech/digital dark.

### Untuk The Dush — Nav Items
```
"Home"    → [Hom][e]          atau  [H0m][e]
"Music"   → [Mu5i][c]         atau  [Mus][ic]
"About"   → [Ab0ut]           atau  [Ab][out]
"Gallery" → [Gal3][ry]        atau  [Gall][ery]
"Gigs"    → [G1g5]            atau  [Gi][gs]
"Contact" → [Cont4][ct]       atau  [Con][tact]
```

---

## 3. Layout & Grid

### Global Layout BMTH
```
[SIDEBAR 144-208px] | [MAIN CONTENT                                    ]
                      margin-left: 256px (lg:mx-64)
                      overflow-x: clip
```

### Hero Section
- Fullscreen: `min-h-[calc(100svh)]` atau `min-h-svh`
- Overflow: `overflow-x-clip`
- Konten dalam hero: `mx-4 lg:mx-64` (mempertimbangkan sidebar)

### Section Margins
- Mobile: `mx-4` (16px kiri-kanan)
- Desktop: `lg:mx-64` (256px kiri untuk offset sidebar, 256px kanan untuk simetri)

---

## 4. Warna & Visual

| Elemen | Warna | Hex |
|---|---|---|
| Background | Hitam total | `#000000` atau `#0a0a0a` |
| Teks nav (desktop) | Putih | `#ffffff` |
| Teks nav (mobile) | Hitam | `#000000` |
| Arrow icon | Merah | `#c3423c` |
| Hover nav | Bg putih, teks hitam | `hover:bg-white hover:text-black` |
| Active nav | Bg putih, teks hitam | (sama dengan hover) |

### Satu Warna Aksen
BMTH hanya menggunakan **satu warna aksen**: merah `#c3423c` — dan itu **hanya** pada arrow icon SVG di nav. Semua elemen lain hitam atau putih.

Kesederhanaan ini membuat aksen tersebut **sangat berkesan dan mencolok**.

---

## 5. Animasi & Interaksi

### Nav Hover
- `transition-colors duration-100` (sangat cepat, 100ms)
- Tidak ada scale atau transform — hanya warna swap
- Efek: stark/langsung, bukan smooth/fluid

### Page Load
- Nav items: `opacity-0` default, `lg:opacity-100` (langsung visible di desktop)
- Mobile: nav items muncul saat menu dibuka (opacity animation)

### Scroll
- BMTH menggunakan scroll biasa tanpa parallax yang berlebihan
- Hero image statis (tidak parallax pada hero utama)

---

## 6. Elemen yang TIDAK Ada di BMTH (tapi kita bisa tambahkan)

Elemen berikut **tidak ada di BMTH** tapi **layak ditambahkan** untuk The Dush:
- Halaman Gallery (BMTH memiliki tapi berbeda)
- Music player mini
- Instagram feed embed
- Newsletter form
- Timeline sejarah band

---

## 7. Adaptasi untuk The Dush

| Elemen BMTH | Adaptasi The Dush |
|---|---|
| Warna aksen merah #c3423c | **Sama** — tetap merah #c3423c |
| Font serif custom | **Playfair Display** (gratis, feel serupa) |
| Nav items: Hom/e, L/1ve | **Adaptasi**: H0m/e, Mu5i/c, dll |
| Section: Home, Live, Videos, Music, Updates, Merch, Store | **Adaptasi**: Home, Music, About, Gallery, Gigs, Contact |
| Mix-blend-difference nav | **Sama persis** |
| Scale-y[1.7] heading | **Sama persis** |
| Arrow icon SVG | **Sama persis** |
| Sidebar lebar ~144-208px | **Sama** |

---

*Analisis ini berdasarkan inspeksi HTML/CSS dari bmthofficial.com pada September 2026*
