import { writable, derived } from 'svelte/store';

export type Lang = 'id' | 'en';

const initialLang: Lang =
	typeof window !== 'undefined' && localStorage.getItem('site_lang') === 'en'
		? 'en'
		: 'id';

export const lang = writable<Lang>(initialLang);

if (typeof window !== 'undefined') {
	lang.subscribe((val) => {
		try {
			localStorage.setItem('site_lang', val);
		} catch {
			// ignore storage quota errors
		}
	});
}

export function toggleLanguage() {
	lang.update((current) => (current === 'id' ? 'en' : 'id'));
}

export function setLanguage(newLang: Lang) {
	lang.set(newLang);
}

export const translations = {
	id: {
		nav: {
			music: 'Music',
			tour: 'Tour',
			merch: 'Merch',
			gallery: 'Gallery',
			contact: 'Contact'
		},
		music: {
			sectionNum: '01',
			sectionTitle: 'Musik & Rilis',
			heading: 'Rilis Terbaru',
			allPlatforms: 'Semua Platform',
			listen: 'Dengarkan'
		},
		tour: {
			sectionNum: '02',
			sectionTitle: 'Jadwal & Tur',
			heading: 'Jadwal Tur',
			tickets: 'Beli Tiket',
			free: 'Gratis',
			soldOut: 'Tiket Habis',
			venueInfo: 'Informasi Panggung'
		},
		merch: {
			sectionNum: '03',
			sectionTitle: 'Merchandise',
			heading: 'Official Merch',
			officialStore: 'Toko Resmi',
			viewProduct: 'Lihat Produk'
		},
		gallery: {
			sectionNum: '04',
			sectionTitle: 'Galeri & Arsip',
			heading: 'Arsip Visual'
		},
		contact: {
			sectionNum: '05',
			sectionTitle: 'Kontak',
			heading: 'Hubungi Kami',
			description: 'Untuk booking, kolaborasi, dan pertanyaan media — hubungi kami via email.',
			contacts: 'Kontak',
			booking: 'Booking',
			follow: 'Ikuti Kami'
		},
		footer: {
			backToTop: 'KEMBALI KE ATAS',
			allRights: 'Hak cipta dilindungi.'
		}
	},
	en: {
		nav: {
			music: 'Music',
			tour: 'Tour',
			merch: 'Merch',
			gallery: 'Gallery',
			contact: 'Contact'
		},
		music: {
			sectionNum: '01',
			sectionTitle: 'Music & Releases',
			heading: 'Latest Releases',
			allPlatforms: 'All Platforms',
			listen: 'Listen'
		},
		tour: {
			sectionNum: '02',
			sectionTitle: 'Live & Tour',
			heading: 'Tour Dates',
			tickets: 'Get Tickets',
			free: 'Free Entry',
			soldOut: 'Sold Out',
			venueInfo: 'Stage Info'
		},
		merch: {
			sectionNum: '03',
			sectionTitle: 'Merchandise',
			heading: 'Official Merch',
			officialStore: 'Official Store',
			viewProduct: 'View Product'
		},
		gallery: {
			sectionNum: '04',
			sectionTitle: 'Visual Archives',
			heading: 'Visual Archives'
		},
		contact: {
			sectionNum: '05',
			sectionTitle: 'Contact',
			heading: 'Get In Touch',
			description: 'For booking, collaboration, and press inquiries — reach out via email.',
			contacts: 'Contacts',
			booking: 'Booking',
			follow: 'Follow'
		},
		footer: {
			backToTop: 'BACK TO TOP',
			allRights: 'All rights reserved.'
		}
	}
};

export const t = derived(lang, ($lang) => translations[$lang]);
