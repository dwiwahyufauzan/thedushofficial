<script lang="ts">
  // ============================================================
  // +layout.svelte — Global Layout
  // NavSidebar (kiri) + main content + Footer
  // ============================================================
  import './layout.css';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';
  import NavSidebar from '$lib/components/NavSidebar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content="#0a0a0a" />
</svelte:head>

<!-- Skip to content (aksesibilitas keyboard) -->
<a
  href="#main-content"
  class="
    sr-only focus:not-sr-only
    focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2
    focus:z-[9999] focus:px-6 focus:py-3
    focus:bg-[#c3423c] focus:text-white
    focus:font-sans focus:text-sm focus:uppercase focus:tracking-wider
    focus:no-underline
  "
>
  Skip to main content
</a>

<!-- Root wrapper: dark background -->
<div class="bg-[#0a0a0a] min-h-svh text-[#f5f5f5] relative">
  <!-- Navigasi Sidebar -->
  <NavSidebar />

  <!-- Main content dengan offset dari sidebar -->
  <main
    id="main-content"
    class="min-h-svh overflow-x-clip relative"
    tabindex="-1"
  >
    {#key $page.url.pathname}
      <div in:fade={{ duration: 300, delay: 50 }}>
        {@render children()}
      </div>
    {/key}
  </main>

  <!-- Footer global -->
  <Footer />
</div>
