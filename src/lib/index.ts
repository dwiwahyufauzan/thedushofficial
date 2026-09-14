// ============================================================
// The Dush Official — Central Library Exports ($lib)
// ============================================================

// Types
export type * from '$lib/types';

// Data Models
export { default as musicData } from '$lib/data/music.json';
export { default as tourData } from '$lib/data/tour.json';
export { default as merchData } from '$lib/data/merch.json';
export { default as galleryData } from '$lib/data/gallery.json';
export { default as pressData } from '$lib/data/press.json';
export { default as bandData } from '$lib/data/band.json';

// Utility Functions
export {
	formatGigDate,
	formatDateShort,
	formatDuration,
	getYoutubeId,
	isUpcoming,
	getYoutubeThumbnail,
	truncate
} from '$lib/utils';

// UI Primitives
export { default as SectionLabel } from '$lib/components/ui/SectionLabel.svelte';
export { default as Button } from '$lib/components/ui/Button.svelte';
export { default as Badge } from '$lib/components/ui/Badge.svelte';

// Layout Components
export { default as Navbar } from '$lib/components/layout/Navbar.svelte';
export { default as Footer } from '$lib/components/layout/Footer.svelte';

// Section Components
export { default as HeroSection } from '$lib/components/sections/HeroSection.svelte';
export { default as MusicSection } from '$lib/components/sections/MusicSection.svelte';
export { default as TourSection } from '$lib/components/sections/TourSection.svelte';
export { default as MerchSection } from '$lib/components/sections/MerchSection.svelte';
export { default as GallerySection } from '$lib/components/sections/GallerySection.svelte';
export { default as PressSection } from '$lib/components/sections/PressSection.svelte';
export { default as ContactSection } from '$lib/components/sections/ContactSection.svelte';
