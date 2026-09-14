// ============================================================
// The Dush Official — TypeScript Data Interfaces
// Based on thedush-plan-and-skill/project/plan/03-data-model.md
// ============================================================

export type ReleaseType = 'single' | 'ep' | 'album' | 'video';

export interface MusicRelease {
	id: string;
	title: string;
	type: ReleaseType;
	releaseDate: string;
	thumbnail: string;
	youtubeUrl: string | null;
	spotifyUrl: string | null;
	tiktokUrl: string | null;
}

export type TicketStatus = 'tickets' | 'almost-gone' | 'sold-out' | 'tba';

export interface TourDate {
	id: string;
	date: string;
	city: string;
	venue: string;
	ticketStatus: TicketStatus;
	ticketUrl: string | null;
}

export type MerchStatus = 'new' | 'preorder' | 'out-of-stock' | 'available';

export interface MerchItem {
	id: string;
	name: string;
	price: number;
	currency: 'IDR';
	images: string[];
	status: MerchStatus;
	shopUrl: string;
}

export interface GalleryItem {
	id: string;
	image: string;
	caption: string;
	year: number;
}

export interface PressItem {
	id: string;
	date: string;
	headline: string;
	source: string;
	url: string;
}

export interface BandMember {
	name: string;
	role: string;
}

export interface BandProfile {
	name: string;
	tagline: string;
	genre: string;
	formedYear: number;
	originCity: string;
	coordinates: string;
	shortBio: string;
	fullBio: string;
	members: BandMember[];
	contact: {
		booking: string;
		press: string;
		management: string;
	};
	socials: {
		instagram: string;
		spotify: string;
		youtube: string;
		tiktok: string;
	};
}
