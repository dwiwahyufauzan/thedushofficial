import type { BandMember } from '$lib/types';

// ============================================================
// The Dush Official — Band Members Data
// Foto: ganti path ke foto asli saat tersedia
// ============================================================

export const bandMembers: BandMember[] = [
	{
		id: 'vocalist',
		name: 'Vocalist',
		role: 'Vocalist',
		photo: '/images/member-vocalist.jpg',
		bio: 'Suara ikonik The Dush. Ekspresif, emosional, dan penuh energi di atas panggung. Menginspirasi generasi muda Indonesia dengan lirik yang jujur dan vokal yang membekukan.',
		instagram: 'https://www.instagram.com/thedush._/'
	},
	{
		id: 'guitarist',
		name: 'Guitarist',
		role: 'Guitarist',
		photo: '/images/member-guitarist.jpg',
		bio: 'Arsitek suara The Dush. Riff gelap, chord yang menghantui, dan solo yang tidak terduga menjadi ciri khasnya. Terinspirasi dari post-hardcore hingga metal alternatif.',
		instagram: 'https://www.instagram.com/thedush._/'
	},
	{
		id: 'bassist',
		name: 'Bassist',
		role: 'Bassist',
		photo: '/images/member-bassist.jpg',
		bio: 'Tulang punggung ritme The Dush. Bass yang berat dan groove yang konstan menciptakan fondasi yang kuat untuk setiap lagu. Presisi dan powerful.',
		instagram: 'https://www.instagram.com/thedush._/'
	},
	{
		id: 'drummer',
		name: 'Drummer',
		role: 'Drummer',
		photo: '/images/member-drummer.jpg',
		bio: 'Mesin ritmis The Dush. Pukulan yang eksplosif namun terkontrol, mampu membawa pendengar dari tenang ke chaos dalam hitungan detik. Energi murni di balik kit.',
		instagram: 'https://www.instagram.com/thedush._/'
	}
];
