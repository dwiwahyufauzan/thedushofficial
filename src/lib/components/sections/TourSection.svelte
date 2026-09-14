<script lang="ts">
	import { base } from '$app/paths';
	import type { TourDate } from '$lib/types';
	import SectionLabel from '../ui/SectionLabel.svelte';
	import { t } from '$lib/i18n';

	interface Props {
		tourDates: TourDate[];
		featuredImage?: string;
	}
	let { tourDates, featuredImage = '/images/background.jpg' }: Props = $props();

	let selectedShow = $state<TourDate>(tourDates[0]);

	function resolveImage(img?: string) {
		const raw = img || featuredImage;
		if (raw.startsWith('http') || raw.startsWith('data:') || (base && raw.startsWith(base))) {
			return raw;
		}
		return `${base}${raw}`;
	}

	const currentShowImage = $derived(resolveImage(selectedShow?.image));

	function formatTourDate(dateStr: string) {
		try {
			const parts = dateStr.split('-');
			if (parts.length === 3) {
				const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
				const day = parts[2];
				const month = months[parseInt(parts[1], 10) - 1] || '';
				const year = parts[0];
				return `${day} ${month} ${year}`;
			}
		} catch {
			// fallback
		}
		return dateStr;
	}
</script>

<section id="tour" class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header: Centered Monumental Layout -->
		<div class="mb-12 sm:mb-14 text-center">
			<div class="flex justify-center mb-3">
				<SectionLabel number="02" title={$t.tour.sectionTitle} numberColor="text-stone-900" />
			</div>
			<h2
				class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight"
			>
				{$t.tour.heading}
			</h2>
			<div class="mt-3 flex items-center justify-center gap-3">
				<span class="h-[1px] w-6 sm:w-12 bg-stone-300"></span>
				<span class="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-stone-400 uppercase">Stage Schedule</span>
				<span class="h-[1px] w-6 sm:w-12 bg-stone-300"></span>
			</div>
		</div>

		<!-- Asymmetrical Editorial Tour Showcase: Flipped Layout relative to MusicSection -->
		<!-- Left: Tour Schedule List (5 cols) | Right: Lead Featured Show (7 cols) -->
		<div class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
			<!-- Tour Schedule List (5 Cols on Left) -->
			<div class="flex flex-col justify-between divide-y divide-stone-200/80 border-t border-b border-stone-200/80 lg:col-span-5">
				{#each tourDates as show}
					{@const isSelected = selectedShow?.id === show.id}
					<button
						type="button"
						onclick={() => (selectedShow = show)}
						class="group flex w-full items-center justify-between py-4 text-left transition-colors duration-150 sm:py-5
						{isSelected ? 'bg-stone-50/90 px-3 -mx-3' : 'hover:bg-stone-50/50 px-3 -mx-3'}"
					>
						<div class="flex flex-col gap-0.5">
							<span class="font-mono text-xs tracking-wider {isSelected ? 'font-medium text-stone-900' : 'text-stone-400'}">
								{formatTourDate(show.date)}
							</span>
							<span class="text-base font-normal tracking-tight text-stone-900 transition-colors group-hover:text-stone-600 sm:text-lg">
								{show.city}
							</span>
							<span class="text-xs font-normal text-stone-500">
								{show.venue}
							</span>
						</div>

						<span class="transition-transform duration-200 group-hover:translate-x-1 group-hover:text-stone-900 {isSelected ? 'translate-x-1 text-stone-900' : 'text-stone-300'}">
							→
						</span>
					</button>
				{/each}
			</div>

			<!-- Lead Featured Tour Show (7 Cols on Right) -->
			{#if selectedShow}
				{@const targetUrl = selectedShow.ticketUrl || '#contact'}
				<div class="flex flex-col lg:col-span-7">
					<a
						href={targetUrl}
						target={selectedShow.ticketUrl ? '_blank' : undefined}
						rel="noopener noreferrer"
						class="group flex h-full flex-col no-underline"
						aria-label="View {selectedShow.city} concert details"
					>
						<!-- Image Container (Sharp / No rounded, consistent with MusicSection) -->
						<div
							class="relative aspect-[16/10] w-full overflow-hidden border border-stone-200/80 bg-stone-100 shadow-sm transition-all duration-500 group-hover:border-stone-400 group-hover:shadow-xl"
						>
							{#key selectedShow.id}
								<img
									src={currentShowImage}
									alt="The Dush live in {selectedShow.city}"
									class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
									loading="lazy"
								/>
							{/key}
							<div
								class="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</div>

						<!-- Bottom Show Title Only (Navbar font & normal weight, consistent with MusicSection) -->
						<div class="mt-2 flex items-center justify-between gap-3 sm:mt-2.5">
							<h3
								class="text-sm font-normal tracking-normal text-stone-900 transition-colors duration-200 group-hover:text-stone-600 sm:text-base"
							>
								{selectedShow.city} — {selectedShow.venue}
							</h3>
							<span
								class="flex shrink-0 items-center gap-1 text-xs font-normal text-stone-400 transition-colors group-hover:text-stone-900"
							>
								<span
									class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									>↗</span
								>
							</span>
						</div>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>
