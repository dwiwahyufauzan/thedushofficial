<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { base } from '$app/paths';

	let menuOpen = $state(false);
	let activeHash = $state('');
	let isDark = $state(true); // Hero starts as dark

	const desktopLinks = [
		{ label: 'Music', href: '#music' },
		{ label: 'Tour', href: '#tour' },
		{ label: 'Merch', href: '#merch' },
		{ label: 'Gallery', href: '#gallery' },
		{ label: 'Press', href: '#press' }
	];

	const mobileLinks = [
		{ number: '01', label: 'Music', href: '#music' },
		{ number: '02', label: 'Tour', href: '#tour' },
		{ number: '03', label: 'Merch', href: '#merch' },
		{ number: '04', label: 'Gallery', href: '#gallery' },
		{ number: '05', label: 'Press', href: '#press' },
		{ number: '06', label: 'Contact', href: '#contact' }
	];

	function updateNavbarTheme() {
		const checkY = 60; // Point below the top of the viewport under the navbar
		const sections = document.querySelectorAll<HTMLElement>('section[id]');

		let foundDark = false;
		for (const section of sections) {
			const rect = section.getBoundingClientRect();
			if (rect.top <= checkY && rect.bottom > checkY) {
				const isSectionDark =
					section.id === 'hero' ||
					section.dataset.theme === 'dark' ||
					section.classList.contains('bg-stone-950') ||
					section.classList.contains('bg-black');
				foundDark = isSectionDark;
				break;
			}
		}
		isDark = foundDark;
	}

	onMount(() => {
		updateNavbarTheme();
		window.addEventListener('scroll', updateNavbarTheme, { passive: true });
		window.addEventListener('resize', updateNavbarTheme, { passive: true });

		// Highlight active nav link via IntersectionObserver
		const sections = document.querySelectorAll('section[id]');
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) activeHash = '#' + e.target.id;
				}
			},
			{ rootMargin: '-40% 0px -55%' }
		);
		sections.forEach((s) => io.observe(s));

		return () => {
			window.removeEventListener('scroll', updateNavbarTheme);
			window.removeEventListener('resize', updateNavbarTheme);
			io.disconnect();
		};
	});

	$effect(() => {
		if (typeof document !== 'undefined') {
			if (menuOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	});

	function close() {
		menuOpen = false;
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && close()} />

<!-- ─── Transparent Navbar with Dynamic Blend Mode (Hue & Inversion) ────── -->
<header
	class="pointer-events-auto fixed inset-x-0 top-0 z-50 bg-transparent py-4 transition-colors duration-300 sm:py-5 {menuOpen ? '' : 'nav-blend-mode'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
		<!-- Brand: Thedush Logo Image -->
		<a
			href="#hero"
			class="group flex shrink-0 items-center no-underline transition-opacity hover:opacity-75"
			aria-label="The Dush Home"
		>
			<img
				src="{base}/images/Thedush-white.png"
				alt="The Dush"
				class="h-6 sm:h-7 md:h-8 w-auto object-contain"
			/>
		</a>

		<!-- Desktop Nav -->
		<nav class="hidden items-center gap-1 sm:gap-2 md:flex" aria-label="Main">
			{#each desktopLinks as { label, href }}
				<a
					{href}
					class="px-3 py-1.5 text-sm tracking-normal text-white transition-opacity duration-150
					{activeHash === href ? 'font-semibold opacity-100' : 'font-normal opacity-85 hover:opacity-100'}"
				>
					{label}
				</a>
			{/each}
		</nav>

		<!-- Right actions -->
		<div class="hidden items-center gap-3 md:flex">
			<a
				href="#contact"
				class="px-3 py-1.5 text-sm font-normal text-white opacity-85 transition-opacity duration-150 hover:opacity-100"
			>
				Contact
			</a>
			<a
				href="#tour"
				class="rounded-full border border-white/80 px-3.5 py-1 text-xs font-normal text-white transition-opacity duration-150 hover:opacity-80 sm:text-sm"
			>
				Get Tickets
			</a>
		</div>

		<!-- Hamburger Toggle -->
		<button
			type="button"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
			class="relative z-50 rounded-full p-2 text-white transition-all duration-200 md:hidden"
		>
			{#if menuOpen}
				<svg
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
				</svg>
			{/if}
		</button>
	</div>
</header>

<!-- ─── Mobile Menu Overlay & Drawer (Closes on backdrop tap or link tap) ─── -->
{#if menuOpen}
	<!-- Backdrop Blur Overlay (Tap anywhere outside to close) -->
	<button
		type="button"
		class="fixed inset-0 z-40 m-0 h-full w-full cursor-default border-0 bg-black/80 p-0 text-left backdrop-blur-md transition-opacity md:hidden"
		transition:fade={{ duration: 250 }}
		onclick={close}
		aria-label="Close mobile menu by clicking outside"
	></button>

	<!-- Mobile Menu Content Drawer -->
	<div
		class="fixed inset-x-0 top-0 z-40 max-h-[92vh] overflow-y-auto border-b border-stone-800 bg-stone-950/98 px-6 pt-20 pb-8 text-white shadow-2xl backdrop-blur-2xl md:hidden"
		transition:fly={{ y: -24, duration: 320, easing: cubicOut }}
	>
		<div class="mx-auto flex max-w-lg flex-col gap-6">
			<!-- Nav Links List with Index Numbers -->
			<nav class="flex flex-col divide-y divide-stone-900" aria-label="Mobile Navigation">
				{#each mobileLinks as { number, label, href }}
					<a
						{href}
						onclick={close}
						class="group flex items-center justify-between py-3.5 no-underline transition-colors"
					>
						<div class="flex items-baseline gap-4">
							<span
								class="font-mono text-xs text-stone-500 transition-colors group-hover:text-stone-300"
							>
								{number}
							</span>
							<span
								class="font-display text-2xl font-medium tracking-tight text-stone-100 transition-colors group-hover:text-white sm:text-3xl"
							>
								{label}
							</span>
						</div>
						<span
							class="text-stone-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-stone-200"
						>
							→
						</span>
					</a>
				{/each}
			</nav>

			<!-- Action CTA Buttons -->
			<div class="flex flex-col gap-3 pt-2">
				<a
					href="#tour"
					onclick={close}
					class="w-full rounded-full bg-white py-3.5 text-center text-sm font-medium tracking-wide text-stone-950 shadow-md transition-all hover:bg-stone-200"
				>
					Get Tickets
				</a>
				<p class="pt-1 text-center font-mono text-[10px] tracking-wider text-stone-600 uppercase">
					Tap anywhere outside to close
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	:global(.nav-blend-mode),
	.nav-blend-mode {
		mix-blend-mode: difference;
	}
</style>
