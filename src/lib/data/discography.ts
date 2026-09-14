import type { Release } from '$lib/types';

// ============================================================
// The Dush Official — Discography Data
// Cover art: ganti path ke gambar asli saat tersedia
// ============================================================

export const releases: Release[] = [
	{
		id: 'single-01',
		title: 'Darker Than Before',
		type: 'Single',
		year: 2024,
		coverArt: '/images/album-single-01-cover.jpg',
		isLatest: true,
		tracks: [
			{
				id: 'track-01',
				title: 'Darker Than Before',
				duration: '3:47',
				youtubeId: ''
			}
		],
		streaming: {
			spotify: '',
			youtube: '',
			appleMusic: ''
		}
	},
	{
		id: 'single-02',
		title: 'Collapse',
		type: 'Single',
		year: 2023,
		coverArt: '/images/album-single-02-cover.jpg',
		tracks: [
			{
				id: 'track-02',
				title: 'Collapse',
				duration: '4:12',
				youtubeId: ''
			}
		],
		streaming: {
			spotify: '',
			youtube: '',
			appleMusic: ''
		}
	},
	{
		id: 'ep-01',
		title: 'Void Sessions',
		type: 'EP',
		year: 2022,
		coverArt: '/images/album-ep-01-cover.jpg',
		tracks: [
			{ id: 'ep-01-track-01', title: 'Into The Void', duration: '4:05' },
			{ id: 'ep-01-track-02', title: 'Shattered', duration: '3:52' },
			{ id: 'ep-01-track-03', title: 'We Burn', duration: '5:10' },
			{ id: 'ep-01-track-04', title: 'Last Signal', duration: '3:38' }
		],
		streaming: {
			spotify: '',
			youtube: '',
			appleMusic: ''
		}
	}
];
