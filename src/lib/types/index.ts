// ============================================================
// The Dush Official — TypeScript Type Definitions
// ============================================================

// ---- Streaming & Social Links --------------------------------

export interface StreamingLinks {
	spotify?: string;
	youtube?: string;
	appleMusic?: string;
	soundcloud?: string;
}

export interface SocialLinks {
	instagram?: string;
	youtube?: string;
	tiktok?: string;
	spotify?: string;
	twitter?: string;
}

// ---- Site Config ---------------------------------------------

export interface SiteConfig {
	bandName: string;
	tagline: string;
	email: string;
	city: string;
	country: string;
	genre: string[];
	founded: number;
	socials: SocialLinks;
}

// ---- Band Members --------------------------------------------

export interface BandMember {
	id: string;
	name: string;
	role: string;
	photo: string;
	bio: string;
	instagram?: string;
}

// ---- Discography --------------------------------------------

export type ReleaseType = 'Single' | 'EP' | 'Album';

export interface Track {
	id: string;
	title: string;
	duration: string; // format: "3:45"
	youtubeId?: string;
}

export interface Release {
	id: string;
	title: string;
	type: ReleaseType;
	year: number;
	coverArt: string;
	tracks: Track[];
	streaming: StreamingLinks;
	isLatest?: boolean;
}

// ---- Gigs / Live Shows ---------------------------------------

export interface Gig {
	id: string;
	date: string; // ISO 8601: "2026-10-15"
	time?: string; // "20:00 WIB"
	venue: string;
	city: string;
	country?: string;
	eventName?: string;
	ticketUrl?: string;
	isPast: boolean;
	isSoldOut?: boolean;
}

// ---- Gallery Photos ------------------------------------------

export interface GalleryPhoto {
	src: string;
	alt: string;
	caption?: string;
	category: 'live' | 'editorial' | 'bts' | 'all';
}
