<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- FOOTER — Ultra-Smooth 60/120fps Infinite Logo Marquee           -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<script lang="ts">
	import { base } from '$app/paths';

	// 16 items in a single track with seamless -50% translate loop
	const marqueeItems = Array(16).fill(0);
</script>

<footer class="relative overflow-hidden border-t border-stone-900 bg-stone-950 text-white select-none">
	<!-- Full-bleed Infinite Logo Marquee -->
	<div class="marquee-wrapper group/marquee relative w-full overflow-hidden py-6 sm:py-8 md:py-10">
		<!-- Left and Right Gradient Edge Fades (Pure CSS GPU composited, zero mask overhead) -->
		<div
			class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-stone-950 to-transparent sm:w-24"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-stone-950 to-transparent sm:w-24"
		></div>

		<!-- Single continuous hardware-accelerated scrolling track -->
		<div class="marquee-track flex w-max cursor-pointer">
			{#each marqueeItems as _}
				<a
					href="#hero"
					class="logo-item group/logo relative shrink-0 px-3 sm:px-4 md:px-5 no-underline focus-visible:outline-none"
					aria-label="The Dush - Back to top"
				>
					<!-- Default White Logo (Instant GPU paint) -->
					<img
						src="{base}/images/Thedush-white.png"
						alt="The Dush"
						class="h-8 sm:h-11 md:h-14 lg:h-18 w-auto object-contain opacity-75 transition-opacity duration-200 group-hover/marquee:opacity-0"
						loading="lazy"
					/>
					<!-- Hover Red-600 Logo (Instant GPU paint, zero lag) -->
					<img
						src="{base}/images/Thedush-red.png"
						alt="The Dush"
						class="absolute inset-x-3 sm:inset-x-4 md:inset-x-5 inset-y-0 h-8 sm:h-11 md:h-14 lg:h-18 w-auto object-contain opacity-0 transition-all duration-200 group-hover/marquee:opacity-90 group-hover/logo:opacity-100 group-hover/logo:scale-105"
						loading="lazy"
					/>
				</a>
			{/each}
		</div>
	</div>

	<!-- Footer Bottom Metadata & Copyright -->
	<div class="border-t border-stone-900/80 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
		<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
			<p class="font-mono text-xs tracking-wider text-stone-500 sm:text-sm">
				© 2026 The Dush. All rights reserved.
			</p>
			<a
				href="#hero"
				class="font-mono text-xs tracking-widest uppercase text-stone-500 transition-colors hover:text-white"
			>
				Back to top ↑
			</a>
		</div>
	</div>
</footer>

<style>
	@keyframes marquee-infinite {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-50%, 0, 0);
		}
	}

	.marquee-track {
		display: flex;
		width: max-content;
		animation: marquee-infinite 22s linear infinite;
		will-change: transform;
		transform: translate3d(0, 0, 0);
	}

	.marquee-wrapper:hover .marquee-track {
		animation-play-state: paused;
	}
</style>
