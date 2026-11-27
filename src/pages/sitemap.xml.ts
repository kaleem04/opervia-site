import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Hand-built sitemap so no extra package is needed.
// Add a path to `pages` when you create a new top-level page.
const pages = ['/', '/services/', '/pricing/', '/about/', '/contact/', '/blog/'];

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://opervia.com');
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const urls = [
    ...pages.map((p) => ({ loc: new URL(p, base).toString(), lastmod: undefined as string | undefined })),
    ...posts.map((post) => ({
      loc: new URL(`/blog/${post.id}/`, base).toString(),
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
