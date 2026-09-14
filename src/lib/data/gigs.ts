import type { Gig } from '$lib/types';

// ============================================================
// The Dush Official — Gigs / Live Shows Data
// Perbarui tanggal dan venue saat ada info resmi
// ============================================================

export const gigs: Gig[] = [
	// Upcoming Gigs
	{
		id: 'gig-upcoming-01',
		date: '2026-10-25',
		time: '20:00 WIB',
		venue: 'GOR Soemantri Brodjonegoro',
		city: 'Jakarta',
		country: 'Indonesia',
		eventName: 'Dark Horizon Festival 2026',
		ticketUrl: '',
		isPast: false,
		isSoldOut: false
	},
	{
		id: 'gig-upcoming-02',
		date: '2026-11-15',
		time: '19:30 WIB',
		venue: 'Synchronize Hall',
		city: 'Bandung',
		country: 'Indonesia',
		eventName: 'Bandung Rock Night Vol. 3',
		ticketUrl: '',
		isPast: false,
		isSoldOut: false
	},
	{
		id: 'gig-upcoming-03',
		date: '2026-12-07',
		time: '21:00 WIB',
		venue: 'Tennis Indoor Senayan',
		city: 'Jakarta',
		country: 'Indonesia',
		eventName: 'Year End Riot 2026',
		ticketUrl: '',
		isPast: false,
		isSoldOut: false
	},
	// Past Gigs
	{
		id: 'gig-past-01',
		date: '2026-08-17',
		time: '20:00 WIB',
		venue: 'Echopark',
		city: 'Jakarta',
		country: 'Indonesia',
		eventName: 'Independence Rock Night',
		isPast: true
	},
	{
		id: 'gig-past-02',
		date: '2026-06-10',
		time: '19:00 WIB',
		venue: 'Dago Tea House',
		city: 'Bandung',
		country: 'Indonesia',
		eventName: 'Bandung Underground Session',
		isPast: true
	}
];

// Helper: hanya upcoming gigs (sorted by date ascending)
export const upcomingGigs = gigs
	.filter((g) => !g.isPast)
	.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

// Helper: hanya past gigs (sorted by date descending — terbaru dulu)
export const pastGigs = gigs
	.filter((g) => g.isPast)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
