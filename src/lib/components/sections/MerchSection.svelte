<script lang="ts">
	import { base } from '$app/paths';
	import type { MerchItem } from '$lib/types';
	import SectionLabel from '../ui/SectionLabel.svelte';
	import { t } from '$lib/i18n';

	interface Props {
		merchItems: MerchItem[];
		bgImage?: string;
	}
	let {
		merchItems,
		bgImage = 'https://t2.genius.com/unsafe/2096x0/https%3A%2F%2Fimages.genius.com%2Fd4efcceb45b037f93e3aa9e84823675d.1000x1000x1.png'
	}: Props = $props();

	// State for active image index on each product card
	let activeIndices = $state<Record<string, number>>({});

	function getActiveIndex(itemId: string, total: number): number {
		const current = activeIndices[itemId] ?? 0;
		return ((current % total) + total) % total;
	}

	function handlePrev(e: MouseEvent, itemId: string, total: number) {
		e.preventDefault();
		e.stopPropagation();
		const current = activeIndices[itemId] ?? 0;
		activeIndices[itemId] = (current - 1 + total) % total;
	}

	function handleNext(e: MouseEvent, itemId: string, total: number) {
		e.preventDefault();
		e.stopPropagation();
		const current = activeIndices[itemId] ?? 0;
		activeIndices[itemId] = (current + 1) % total;
	}

	function handleSelect(e: MouseEvent, itemId: string, idx: number) {
		e.preventDefault();
		e.stopPropagation();
		activeIndices[itemId] = idx;
	}

	const resolvedBgImage = $derived(
		bgImage.startsWith('http') || bgImage.startsWith('data:') || (base && bgImage.startsWith(base))
			? bgImage
			: `${base}${bgImage}`
	);

	function resolveImage(img?: string) {
		if (!img) return '';
		if (img.startsWith('http') || img.startsWith('data:') || (base && img.startsWith(base))) {
			return img;
		}
		return `${base}${img}`;
	}

	function formatPrice(price: number) {
		return 'IDR ' + price.toLocaleString('id-ID');
	}
</script>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- MERCH SECTION — Dark Background Aesthetic with Right-Side BG    -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="merch" data-theme="dark" class="relative overflow-hidden bg-stone-950 pt-20 pb-12 text-white sm:pt-28 sm:pb-16">
	<!-- Right-side Background Atmosphere (Desktop only, hidden on mobile) -->
	<div
		class="pointer-events-none absolute top-0 right-0 bottom-0 z-0 hidden overflow-hidden select-none md:block md:w-1/2 lg:w-5/12"
	>
		<img
			src={resolvedBgImage}
			alt="The Dush Merch Atmosphere"
			class="h-full w-full object-cover object-right"
			loading="lazy"
		/>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header: Asymmetrical Right-Aligned Layout -->
		<div class="mb-14 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
			<!-- Left: Tokopedia CTA pill -->
			<div class="order-2 sm:order-1">
				<a
					href="https://tokopedia.com"
					target="_blank"
					rel="noopener noreferrer"
					class="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-mono tracking-wider text-stone-300 transition-all duration-200 hover:border-white/60 hover:bg-white/5 hover:text-white"
				>
					<span>{$t.merch.officialStore}</span>
					<span
						class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						>↗</span
					>
				</a>
			</div>
			<!-- Right: Label & Title right-aligned -->
			<div class="order-1 sm:order-2 flex flex-col sm:items-end text-left sm:text-right">
				<SectionLabel number="03" title={$t.merch.sectionTitle} numberColor="text-white" class="mb-3" />
				<h2
					class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
				>
					{$t.merch.heading}
				</h2>
			</div>
		</div>

		<!-- 3-Column Editorial Grid -->
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
			{#each merchItems as item}
				{@const targetUrl = item.shopUrl || '#'}
				{@const totalImages = item.images?.length || 1}
				{@const currentIndex = getActiveIndex(item.id, totalImages)}
				<a
					href={targetUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex flex-col no-underline"
					aria-label="Shop {item.name}"
				>
					<!-- Sharp Product Card Container with Thin Border & No Background -->
					<div
						class="relative aspect-square w-full overflow-hidden border border-white/20"
					>
						<!-- Layered Crossfading Images (Static on Hover / Touch) -->
						<div class="relative h-full w-full">
							{#each item.images as img, imgIdx}
								{@const isActive = currentIndex === imgIdx}
								<img
									src={resolveImage(img)}
									alt="{item.name} — view {imgIdx + 1}"
									class="absolute inset-0 h-full w-full object-contain p-3 sm:p-4 transition-opacity duration-300 ease-out
									{isActive ? 'opacity-100 z-1 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}"
									loading={imgIdx === 0 ? 'eager' : 'lazy'}
								/>
							{/each}
						</div>

						<!-- Left / Right Navigation Arrows (Transparent on Dark) -->
						{#if totalImages > 1}
							<button
								type="button"
								aria-label="Previous image"
								class="absolute top-1/2 left-1.5 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white/70 backdrop-blur-xs transition-colors duration-200 hover:text-white hover:bg-black/40 opacity-0 group-hover:opacity-100 focus:opacity-100"
								onclick={(e) => handlePrev(e, item.id, totalImages)}
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="15 18 9 12 15 6"></polyline>
								</svg>
							</button>

							<button
								type="button"
								aria-label="Next image"
								class="absolute top-1/2 right-1.5 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white/70 backdrop-blur-xs transition-colors duration-200 hover:text-white hover:bg-black/40 opacity-0 group-hover:opacity-100 focus:opacity-100"
								onclick={(e) => handleNext(e, item.id, totalImages)}
							>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<polyline points="9 18 15 12 9 6"></polyline>
								</svg>
							</button>

							<!-- Segmented Pagination Dots -->
							<div
								class="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 bg-transparent p-1 transition-all duration-300"
							>
								{#each item.images as _, dotIdx}
									<button
										type="button"
										aria-label="Switch to photo {dotIdx + 1}"
										class="h-1.5 rounded-full transition-all duration-300 {currentIndex === dotIdx ? 'w-4 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/60'}"
										onclick={(e) => handleSelect(e, item.id, dotIdx)}
										onmouseenter={(e) => handleSelect(e, item.id, dotIdx)}
									></button>
								{/each}
							</div>
						{/if}
					</div>

					<!-- Bottom Item Metadata (Navbar font, normal weight) -->
					<div class="mt-2.5 flex items-start justify-between gap-3 sm:mt-3">
						<div class="flex flex-col gap-1">
							<h3
								class="text-sm font-normal tracking-normal text-stone-100 transition-colors duration-200 group-hover:text-stone-300 sm:text-base"
							>
								{item.name}
							</h3>
							<p class="font-mono text-xs text-stone-400">
								{formatPrice(item.price)}
							</p>
						</div>
						<span
							class="flex shrink-0 items-center gap-1 pt-0.5 text-xs font-normal text-stone-500 transition-colors group-hover:text-white"
						>
							<span
								class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								>↗</span
							>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
