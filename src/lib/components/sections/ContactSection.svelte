<!-- ═══════════════════════════════════════════════════════════════ -->
<!-- CONTACT SECTION — 06 Contact Editorial Minimalist Layout        -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<script lang="ts">
	import { base } from '$app/paths';
	import SectionLabel from '../ui/SectionLabel.svelte';
	import { t } from '$lib/i18n';

	interface Props {
		image?: string;
		media?: string;
		video?: string;
	}

	let {
		image = 'https://media.tenor.com/-TT42-2gT8wAAAPo/poppy-screaming.mp4',
		media,
		video
	}: Props = $props();

	const activeSource = $derived(video || media || image);

	const resolvedMedia = $derived(
		activeSource.startsWith('http') || activeSource.startsWith('data:') || (base && activeSource.startsWith(base))
			? activeSource
			: `${base}${activeSource}`
	);

	const isVideo = $derived(
		/\.(mp4|webm|ogg)(\?.*)?$/i.test(resolvedMedia) ||
		resolvedMedia.includes('.mp4') ||
		resolvedMedia.includes('.webm')
	);
</script>

<section id="contact" data-theme="dark" class="relative overflow-hidden border-t border-stone-900 bg-stone-950 py-20 text-white sm:py-28 lg:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Left Column: 1:1 Aspect Ratio Media (Video or Image) -->
			<div class="flex items-center justify-center lg:col-span-5 lg:justify-start">
				<div
					class="group relative aspect-square w-full max-w-[340px] overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl sm:max-w-[400px] md:max-w-[440px] lg:max-w-[460px]"
				>
					{#if isVideo}
						<video
							src={resolvedMedia}
							autoplay
							loop
							muted
							playsinline
							class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
						></video>
					{:else}
						<img
							src={resolvedMedia}
							alt="The Dush Contact Artwork"
							class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
							loading="lazy"
						/>
					{/if}
					<div
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-60"
					></div>
				</div>
			</div>

			<!-- Right Column: Title, Description & Minimalist Contact Details -->
			<div class="flex flex-col justify-center lg:col-span-7">
				<!-- Section Number & Label -->
				<div class="mb-3 sm:mb-4 flex items-center justify-between">
					<SectionLabel number={$t.contact.sectionNum} title={$t.contact.sectionTitle} numberColor="text-white" />
					<span class="hidden sm:inline-block font-mono text-[10px] tracking-[0.25em] text-stone-500 uppercase">INQUIRIES</span>
				</div>

				<!-- Main Headline -->
				<h2
					class="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
				>
					{$t.contact.heading}
				</h2>

				<!-- Description (Light / Small / Not Bold) -->
				<p class="mt-4 text-xs font-normal leading-relaxed text-stone-400 sm:text-sm md:text-base">
					{$t.contact.description}
				</p>

				<!-- Hairline separator & Minimalist Contact Channels -->
				<div class="mt-8 space-y-6 border-t border-stone-800/80 pt-8 sm:mt-10 sm:pt-10">
					<!-- Contacts -->
					<div class="space-y-1">
						<span class="block font-mono text-[11px] font-normal tracking-[0.18em] text-stone-500 uppercase">
							{$t.contact.contacts}
						</span>
						<a
							href="mailto:thedushofficial@gmail.com"
							class="group inline-flex items-center gap-1.5 text-xs font-normal text-stone-300 transition-colors hover:text-white sm:text-sm"
						>
							<span class="underline decoration-stone-700 underline-offset-4 transition-colors group-hover:decoration-white">
								thedushofficial@gmail.com
							</span>
							<span class="text-stone-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
								↗
							</span>
						</a>
					</div>

					<!-- Booking -->
					<div class="space-y-1">
						<span class="block font-mono text-[11px] font-normal tracking-[0.18em] text-stone-500 uppercase">
							{$t.contact.booking}
						</span>
						<a
							href="https://wa.me/62881022272166"
							target="_blank"
							rel="noopener noreferrer"
							class="group inline-flex items-center gap-1.5 text-xs font-normal text-stone-300 transition-colors hover:text-white sm:text-sm"
						>
							<span class="underline decoration-stone-700 underline-offset-4 transition-colors group-hover:decoration-white">
								+62881022272166
							</span>
							<span class="text-stone-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
								↗
							</span>
						</a>
					</div>

					<!-- Follow with Instagram and Spotify SVG Logos -->
					<div class="space-y-2">
						<span class="block font-mono text-[11px] font-normal tracking-[0.18em] text-stone-500 uppercase">
							{$t.contact.follow}
						</span>
						<div class="flex flex-wrap items-center gap-4 pt-0.5 sm:gap-6">
							<!-- Instagram Link with SVG Icon -->
							<a
								href="https://www.instagram.com/official510music/?hl=en"
								target="_blank"
								rel="noopener noreferrer"
								class="group inline-flex items-center gap-2 text-xs font-normal text-stone-300 transition-colors hover:text-white sm:text-sm"
							>
								<svg
									class="h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-white"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
									/>
								</svg>
								<span class="underline decoration-stone-700 underline-offset-4 transition-colors group-hover:decoration-white">
									Instagram
								</span>
								<span class="text-stone-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
									↗
								</span>
							</a>

							<!-- Spotify Link with SVG Icon -->
							<a
								href="https://open.spotify.com/artist/298CtZa1wRSxNc38FmWbiX?si=EFvU5E3SRNutYzp_NJFRrg"
								target="_blank"
								rel="noopener noreferrer"
								class="group inline-flex items-center gap-2 text-xs font-normal text-stone-300 transition-colors hover:text-white sm:text-sm"
							>
								<svg
									class="h-4 w-4 shrink-0 text-stone-400 transition-colors group-hover:text-[#1DB954]"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308c-.215.354-.674.468-1.028.252-2.825-1.727-6.381-2.118-10.569-1.161-.406.094-.813-.159-.906-.566-.094-.406.158-.813.565-.906 4.582-1.047 8.513-.604 11.686 1.352.354.217.468.675.252 1.029zm1.47-3.267c-.27.442-.849.582-1.291.312-3.233-1.987-8.163-2.562-11.989-1.401-.498.151-1.026-.134-1.178-.631-.151-.497.134-1.025.631-1.178 4.382-1.33 9.818-.686 13.515 1.587.442.27.582.849.312 1.291zm.126-3.41c-3.876-2.302-10.274-2.514-13.987-1.387-.594.18-1.228-.159-1.408-.753-.18-.594.159-1.228.753-1.408 4.267-1.296 11.333-1.042 15.787 1.603.535.317.709 1.011.392 1.546-.318.535-1.012.71-1.547.399z"
									/>
								</svg>
								<span class="underline decoration-stone-700 underline-offset-4 transition-colors group-hover:decoration-white">
									Spotify
								</span>
								<span class="text-stone-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
									↗
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
