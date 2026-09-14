// ============================================================
// The Dush Official — Utility Functions
// ============================================================

/**
 * Format tanggal gig jadi string yang mudah dibaca.
 * Input: "2026-10-25"
 * Output: "25 Oktober 2026"
 */
export function formatGigDate(dateStr: string): string {
	const date = new Date(dateStr + 'T00:00:00');
	return date.toLocaleDateString('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}

/**
 * Format tanggal menjadi bagian-bagian terpisah untuk layout card tanggal besar.
 * Input: "2026-10-25"
 * Output: { day: "25", month: "OKT", year: "2026" }
 */
export function formatDateShort(dateStr: string): { day: string; month: string; year: string } {
	const date = new Date(dateStr + 'T00:00:00');
	return {
		day: date.toLocaleDateString('id-ID', { day: '2-digit' }),
		month: date
			.toLocaleDateString('id-ID', { month: 'short' })
			.toUpperCase()
			.replace('.', ''),
		year: date.toLocaleDateString('id-ID', { year: 'numeric' })
	};
}

/**
 * Format durasi lagu dari detik ke string mm:ss.
 * Input: 225
 * Output: "3:45"
 */
export function formatDuration(seconds: number): string {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Ekstrak YouTube Video ID dari berbagai format URL YouTube.
 * Input: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 * Output: "dQw4w9WgXcQ"
 *
 * Mendukung:
 * - https://www.youtube.com/watch?v=...
 * - https://youtu.be/...
 * - https://www.youtube.com/embed/...
 * - https://www.youtube.com/shorts/...
 */
export function getYoutubeId(url: string): string | null {
	if (!url) return null;

	const patterns = [
		/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
		/^([a-zA-Z0-9_-]{11})$/ // bare ID
	];

	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match) return match[1];
	}

	return null;
}

/**
 * Cek apakah tanggal gig masih akan datang (upcoming).
 * Input: "2026-10-25"
 * Output: true / false
 */
export function isUpcoming(dateStr: string): boolean {
	const gigDate = new Date(dateStr + 'T00:00:00');
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return gigDate >= today;
}

/**
 * Generate thumbnail URL YouTube dari video ID.
 * Quality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault'
 */
export function getYoutubeThumbnail(
	videoId: string,
	quality: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault' = 'maxresdefault'
): string {
	return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Truncate teks panjang dengan ellipsis.
 * Input: ("Lorem ipsum dolor sit amet", 15)
 * Output: "Lorem ipsum dol..."
 */
export function truncate(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength).trim() + '...';
}
