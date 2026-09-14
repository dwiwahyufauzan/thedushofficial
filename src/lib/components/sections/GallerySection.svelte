<script lang="ts">
	import { base } from '$app/paths';
	import type { GalleryItem } from '$lib/types';

	interface Props {
		galleryItems: GalleryItem[];
		bottomImage?: string;
	}
	let { galleryItems, bottomImage }: Props = $props();

	function resolveImage(img?: string) {
		if (!img) return '';
		if (img.startsWith('http') || img.startsWith('data:') || (base && img.startsWith(base))) {
			return img;
		}
		return `${base}${img}`;
	}

	const mosaicItems = $derived(
		bottomImage
			? galleryItems
			: galleryItems.length > 1
				? galleryItems.slice(0, -1)
				: galleryItems
	);

	const featuredBottom = $derived(
		bottomImage || (galleryItems.length > 0 ? galleryItems[galleryItems.length - 1].image : '')
	);

	function getMosaicSpan(index: number) {
		const spans = [
			'md:col-span-8 aspect-[16/10]',              // 0: Big (Left)
			'md:col-span-4 aspect-[4/3] md:aspect-[4/5]', // 1: Small (Right)
			'md:col-span-4 aspect-[4/3] md:aspect-[4/5]', // 2: Small (Left)
			'md:col-span-8 aspect-[16/10]',              // 3: Big (Right)
			'md:col-span-6 aspect-[16/10]',              // 4: Medium
			'md:col-span-6 aspect-[16/10]'               // 5: Medium
		];
		return spans[index % spans.length];
	}
</script>

<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- GALLERY SECTION — Editorial Mosaic with Split Background       -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="gallery" class="relative overflow-hidden pt-8 pb-5 sm:pt-12 sm:pb-7 lg:pt-14 lg:pb-8">
	<!-- Split Background: Top Half Black, Bottom Half White -->
	<div class="pointer-events-none absolute inset-0 z-0 flex flex-col">
		<div class="h-1/2 w-full bg-stone-950"></div>
		<div class="h-1/2 w-full bg-white"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-8">

		<!-- Top Editorial Mosaic Grid (Clean Hairline Gaps, No Thick Borders) -->
		<div class="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-12 md:gap-1.5 lg:gap-2">
			{#each mosaicItems as item, i}
				<div
					class="group relative w-full overflow-hidden bg-stone-900 shadow-xs transition-all duration-500 hover:shadow-xl {getMosaicSpan(i)}"
				>
					<img
						src={resolveImage(item.image)}
						alt="The Dush Live Performance {i + 1}"
						class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</div>
			{/each}
		</div>

		<!-- Large Landscape (6:4) Aspect Ratio Image at the Very Bottom -->
		{#if featuredBottom}
			<div class="mt-1 sm:mt-1.5 md:mt-2">
				<div
					class="group relative aspect-[6/4] w-full overflow-hidden bg-stone-900 shadow-xs transition-all duration-500 hover:shadow-2xl"
				>
					<img
						src={resolveImage(featuredBottom)}
						alt="The Dush Large Showcase Performance"
						class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</div>
			</div>
		{/if}
	</div>
</section>
