# Opervia website

A static Astro site for an AI automation studio serving HVAC, plumbing, roofing, and electrical companies.
Core promise: **Never miss a lead again.**

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
npm run preview
```

Deploy `dist/` to Netlify, Cloudflare Pages, Vercel, or any static host.

## About AstroWind

This project follows AstroWind's conventions (`src/layouts`, `src/components`, `src/pages`, one config file)
but is **not** the AstroWind repository. It was built without network access, so the template could not be
cloned. It depends only on `astro` and uses plain CSS, so it builds without Tailwind.

To use the real AstroWind instead:

```bash
git clone https://github.com/arthelokyo/astrowind.git
cd astrowind && npm install
```

Then copy these in and adapt:

- `src/styles/global.css` (the design tokens: colors, type, components)
- `src/components/DispatchTicket.astro`, `Calculator.astro`
- the page bodies from `src/pages/*.astro`, wrapped in AstroWind's `Layout`

## Blog

- Posts are markdown files in `src/content/blog/`. Copy an existing one and edit the front matter
  (`title`, `description` under 170 characters, `pubDate`, `tags`). Set `draft: true` to hide a post.
- The blog index is `/blog/`, the sitemap is `/sitemap.xml`, and the RSS feed is `/rss.xml`.
- When you add a new top-level page, add its path to the `pages` list in `src/pages/sitemap.xml.ts`.
- After launch, submit `https://opervia.com/sitemap.xml` in Google Search Console.

## Edit before launch

- `src/config.ts`: business name, phone, email, form endpoint (Formspree, Netlify Forms, etc.)
- `astro.config.mjs`: set `site` to your real domain
- `src/pages/pricing.astro`: **prices are placeholders**
- `src/pages/about.astro`: add your real story and team
- Confirm claims you make (response time, "live in about two weeks", month-to-month terms) match what you deliver
- Text messaging in the US requires carrier registration and opt-in/opt-out handling; make sure your setup process covers it

## Design notes

- Type: Archivo (condensed, heavy, like truck lettering) for headlines; Public Sans for body
- Colors: truck-door navy, work-order paper, safety-vest yellow, with red and green used only for missed and booked states
- The hero's lead log is the one animated moment; it respects reduced-motion settings and can be replayed
