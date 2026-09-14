<script lang="ts">
	import type { MusicRelease } from '$lib/types';
	import SectionLabel from '../ui/SectionLabel.svelte';
	import { t } from '$lib/i18n';

	interface Props {
		releases: MusicRelease[];
	}
	let { releases }: Props = $props();

	const featured = $derived(releases[0]);
	const others = $derived(releases.slice(1));
</script>

<section id="music" class="border-t border-stone-100 bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Header: Top-Ruled Horizontal Split Layout -->
		<div class="mb-12 sm:mb-14">
			<div class="flex items-center justify-between border-b border-stone-200/80 pb-3 mb-5">
				<SectionLabel number="01" title={$t.music.sectionTitle} numberColor="text-stone-900" />
				{#if featured}
					<a
						href={featured.spotifyUrl ?? '#'}
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex items-center gap-1.5 font-mono text-xs text-stone-500 transition-colors hover:text-stone-950 sm:text-sm"
					>
						<span>{$t.music.allPlatforms}</span>
						<span
							class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
							>↗</span
						>
					</a>
				{/if}
			</div>
			<h2
				class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight"
			>
				{$t.music.heading}
			</h2>
		</div>

		<!-- Asymmetrical Editorial Music Showcase -->
		<div class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
			{#if featured}
				{@const targetUrl = featured.spotifyUrl || featured.youtubeUrl || '#'}
				<!-- Lead Featured Release (7 Cols) -->
				<div class="flex flex-col lg:col-span-7">
					<a
						href={targetUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex h-full flex-col no-underline"
						aria-label="Play {featured.title}"
					>
						<!-- Image Container (Sharp / No rounded) -->
						<div
							class="relative aspect-[16/10] w-full overflow-hidden border border-stone-200/80 bg-stone-100 shadow-sm transition-all duration-500 group-hover:border-stone-400 group-hover:shadow-xl"
						>
							<img
								src={featured.thumbnail}
								alt={featured.title}
								class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>

							<!-- Floating Minimalist Play Button -->
							<div class="absolute inset-0 flex items-center justify-center">
								<div
									class="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-stone-950 group-hover:text-white sm:h-20 sm:w-20"
								>
									<svg
										class="h-6 w-6 translate-x-0.5 sm:h-7 sm:w-7"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
										/>
									</svg>
								</div>
							</div>
						</div>

						<!-- Release Title Only (Navbar font & normal weight, not bold, closer & smaller) -->
						<div class="mt-2 flex items-center justify-between gap-3 sm:mt-2.5">
							<h3
								class="text-sm font-normal tracking-normal text-stone-900 transition-colors duration-200 group-hover:text-stone-600 sm:text-base"
							>
								{featured.title}
							</h3>
							<span
								class="flex shrink-0 items-center gap-1 text-xs font-normal text-stone-400 transition-colors group-hover:text-stone-900"
							>
								Listen
								<span
									class="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
									>↗</span
								>
							</span>
						</div>
					</a>
				</div>
			{/if}

			<!-- Stacked Side Releases (5 Cols) -->
			<div class="flex flex-col justify-between gap-8 lg:col-span-5">
				{#each others as release}
					{@const targetUrl = release.spotifyUrl || release.youtubeUrl || '#'}
					<a
						href={targetUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-1 flex-col no-underline"
						aria-label="Play {release.title}"
					>
						<!-- Image Container (Sharp / No rounded) -->
						<div
							class="relative aspect-[16/9] w-full overflow-hidden border border-stone-200/80 bg-stone-100 shadow-sm transition-all duration-500 group-hover:border-stone-400 group-hover:shadow-lg"
						>
							<img
								src={release.thumbnail}
								alt={release.title}
								class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>

							<!-- Floating Minimalist Play Button -->
							<div class="absolute inset-0 flex items-center justify-center">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-stone-950 group-hover:text-white sm:h-14 sm:w-14"
								>
									<svg
										class="h-5 w-5 translate-x-0.5 sm:h-6 sm:w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
										/>
									</svg>
								</div>
							</div>
						</div>

						<!-- Release Title Only (Navbar font & normal weight, not bold, closer & smaller) -->
						<div class="mt-1.5 flex items-center justify-between gap-3 sm:mt-2">
							<h3
								class="text-xs font-normal tracking-normal text-stone-900 transition-colors duration-200 group-hover:text-stone-600 sm:text-sm"
							>
								{release.title}
							</h3>
							<span
								class="flex shrink-0 items-center gap-1 text-[11px] font-normal text-stone-400 transition-colors group-hover:text-stone-900 sm:text-xs"
							>
								Listen
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
	</div>
</section>
