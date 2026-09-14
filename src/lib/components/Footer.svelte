<script lang="ts">
  // ============================================================
  // Footer.svelte — Global footer The Dush Official
  // Dark minimal, nama band serif, social links, copyright
  // ============================================================
  import SocialLinks from './SocialLinks.svelte';
  import { siteConfig } from '$lib/data/config';

  const currentYear = new Date().getFullYear();
</script>

<footer
  class="
    bg-[#0a0a0a] border-t border-[#2a2a2a]
    px-6 py-12 lg:px-16 lg:ml-40 xl:ml-52
  "
  aria-label="Site footer"
>
  <div class="max-w-5xl">
    <!-- Band name + tagline -->
    <div class="mb-8">
      <p class="font-sans text-[10px] uppercase tracking-[0.3em] text-[#606060] mb-3">
        Official Website
      </p>
      <h2 class="font-serif text-3xl lg:text-4xl font-black uppercase -tracking-[2px] scale-y-[1.5] origin-bottom inline-block text-[#f5f5f5] leading-none">
        The Dush
      </h2>
      <p class="font-sans text-sm text-[#a0a0a0] mt-4 uppercase tracking-widest">
        {siteConfig.tagline}
      </p>
    </div>

    <!-- Divider -->
    <div class="w-12 h-px bg-[#c3423c] mb-8"></div>

    <!-- Bottom bar: social + copyright -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <!-- Social Links -->
      <SocialLinks links={siteConfig.socials} size="md" />

      <!-- Copyright -->
      <p class="font-sans text-xs text-[#606060] uppercase tracking-wider">
        © {currentYear} The Dush Official.<br class="sm:hidden" />
        All rights reserved.
      </p>
    </div>
  </div>
</footer>
