export const prerender = true;

export async function GET() {
	const siteUrl = 'https://thedushofficial.com';
	const pages = [''];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${siteUrl}${page ? `/${page}` : ''}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
