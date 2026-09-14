<script lang="ts">
  // ============================================================
  // ArrowIcon.svelte — SVG arrow diagonal kanan-bawah
  // Digunakan di NavSidebar dan tempat lain yang butuh arrow aksen
  // ============================================================

  let {
    size = 25,
    color = '#c3423c',
    class: className = '',
  } = $props<{
    size?: number;
    color?: string;
    class?: string;
  }>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size * 1.01}
  viewBox="0 0 25 25.25"
  class="block object-contain w-4 h-auto max-w-full {className}"
  aria-hidden="true"
  focusable="false"
>
  <path fill={color} d="M25 25.25H0v-2.5h20.806L1.346 2.363 3.154.637 22.5 20.9V0H25Z" />
</svg>
