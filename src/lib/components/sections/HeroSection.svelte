<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		heroImage?: string;
		logoIcon?: string;
	}
	let {
		heroImage = '/images/background.jpg',
		logoIcon = '/images/thedushhero.png'
	}: Props = $props();

	const resolvedHeroImage = $derived(
		heroImage.startsWith('http') || heroImage.startsWith('data:') || (base && heroImage.startsWith(base))
			? heroImage
			: `${base}${heroImage}`
	);
	const resolvedLogoIcon = $derived(
		logoIcon.startsWith('http') || logoIcon.startsWith('data:') || (base && logoIcon.startsWith(base))
			? logoIcon
			: `${base}${logoIcon}`
	);
</script>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- HERO SECTION — Concert Background with 3D Vertical Rotating Art  -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section
	id="hero"
	data-theme="dark"
	class="relative w-full h-[100svh] min-h-[550px] overflow-hidden bg-stone-950 flex items-center justify-center select-none"
>
	<!-- Concert Background Image -->
	<img
		src={resolvedHeroImage}
		alt="The Dush Live Performance"
		class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
		loading="eager"
		fetchpriority="high"
	/>

	<!-- Cinematic Vignette for Depth & Focus -->
	<div class="absolute inset-0 bg-black/25 pointer-events-none"></div>
	<div
		class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.7)_100%)] pointer-events-none"
	></div>

	<!-- Centered 3D Rotating Band Artwork (Non-interactive / Constant 3D Rotation) -->
	<div class="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 perspective-container pointer-events-none select-none">
		<div class="emblem-3d-wrapper pointer-events-none">
			<img
				src={resolvedLogoIcon}
				alt="The Dush Artwork"
				class="emblem-3d h-[48vh] sm:h-[50vh] md:h-[54vh] max-h-[540px] max-w-[86vw] w-auto object-contain pointer-events-none select-none"
				loading="eager"
			/>
		</div>
	</div>
</section>

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
		filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.35))
			drop-shadow(0 20px 35px rgba(0, 0, 0, 0.85));
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
