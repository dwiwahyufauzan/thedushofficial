<script lang="ts">
	import { base } from '$app/paths';
	import type { MusicRelease, TourDate, MerchItem, GalleryItem, PressItem } from '$lib/types';

	import musicData from '$lib/data/music.json';
	import tourData from '$lib/data/tour.json';
	import merchData from '$lib/data/merch.json';
	import galleryData from '$lib/data/gallery.json';
	import pressData from '$lib/data/press.json';
	import bandData from '$lib/data/band.json';

	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import MusicSection from '$lib/components/sections/MusicSection.svelte';
	import TourSection from '$lib/components/sections/TourSection.svelte';
	import MerchSection from '$lib/components/sections/MerchSection.svelte';
	import GallerySection from '$lib/components/sections/GallerySection.svelte';
	import PressSection from '$lib/components/sections/PressSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';

	const releases = musicData as MusicRelease[];
	const tourDates = tourData as TourDate[];
	const merchItems = merchData as MerchItem[];
	const galleryItems = galleryData as GalleryItem[];
	const pressItems = pressData as PressItem[];

	const schemaData = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'MusicGroup',
		name: bandData.officialName,
		genre: bandData.genre,
		foundingLocation: {
			'@type': 'City',
			name: bandData.originCity
		},
		description: bandData.shortBio,
		sameAs: [
			bandData.socials.spotify,
			bandData.socials.youtube,
			bandData.socials.instagram,
			bandData.socials.tiktok
		]
	});
</script>

<svelte:head>
	<title>{bandData.officialName} | INDIEPOPROCK PINGGIRAN SUBANG.</title>
	<meta name="description" content={bandData.shortBio} />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{bandData.officialName} | INDIEPOPROCK PINGGIRAN SUBANG." />
	<meta property="og:description" content={bandData.shortBio} />
	<meta property="og:image" content="{base}/images/background.jpg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{bandData.officialName} | INDIEPOPROCK PINGGIRAN SUBANG." />
	<meta name="twitter:description" content={bandData.shortBio} />
	<meta name="twitter:image" content="{base}/images/background.jpg" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${schemaData}</script>`}
</svelte:head>

<!-- One-Pager 8 Sections Flow -->
<HeroSection heroImage="{base}/images/background.jpg" logoIcon="{base}/images/thedushhero.png" />
<MusicSection {releases} />
<ContactSection />
