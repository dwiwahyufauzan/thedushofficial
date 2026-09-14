<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- FOOTER — Majestic Band Showcase: Large Logotype & 3D Artwork    -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer class="overflow-hidden border-t border-stone-900 bg-stone-950 text-white">
	<div
		class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-12 select-none sm:gap-6 sm:px-6 sm:py-16 lg:px-8"
	>
		<!-- Top: Navbar Logo (Thedush) -->
		<a
			href="#hero"
			class="transition-opacity duration-300 hover:opacity-80 focus-visible:outline-none"
			aria-label="The Dush - Back to top"
		>
			<img
				src="{base}/images/Thedush.png"
				alt="The Dush Logo"
				class="h-20 sm:h-28 md:h-32 w-auto object-contain brightness-0 invert drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
				loading="lazy"
			/>
		</a>

		<!-- Bottom: Hero Logo (The Dush Hero) — Larger & 3D Rotating, closely stacked -->
		<div
			class="perspective-container pointer-events-none relative -mt-1 flex items-center justify-center sm:-mt-2"
		>
			<div class="emblem-3d-wrapper">
				<img
					src="{base}/images/thedushhero.png"
					alt="The Dush Hero Artwork"
					class="emblem-3d h-60 max-h-[440px] w-auto object-contain sm:h-76 md:h-88"
					loading="lazy"
				/>
			</div>
		</div>

		<!-- Copyright — Close below the emblem -->
		<div class="w-full max-w-xs border-t border-stone-900/60 pt-4 text-center sm:pt-6">
			<p class="font-mono text-xs tracking-wider text-stone-500 sm:text-sm">
				© 2026 — All rights reserved.
			</p>
		</div>
	</div>
</footer>

<style>
	.perspective-container {
		perspective: 1200px;
	}

	.emblem-3d-wrapper {
		transform-style: preserve-3d;
		animation: rotate-3d-vertical 14s linear infinite;
		will-change: transform;
	}

	.emblem-3d {
		filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.25))
			drop-shadow(0 20px 40px rgba(0, 0, 0, 0.95));
		backface-visibility: visible;
	}

	@keyframes rotate-3d-vertical {
		0% {
			transform: rotateX(4deg) rotateY(0deg);
		}
		50% {
			transform: rotateX(4deg) rotateY(180deg);
		}
		100% {
			transform: rotateX(4deg) rotateY(360deg);
		}
	}
</style>
