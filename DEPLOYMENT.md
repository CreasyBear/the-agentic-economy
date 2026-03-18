# Deployment Checklist

## Pre-Deployment

1. Set the production site URL.
   - Preferred: set `SITE_URL` in Vercel to the final custom domain.
   - Fallback: confirm the default Vercel production domain is correct.
2. Verify the current build locally.
   - Run `npm run build`
   - Run `npm run check`
3. Confirm the live asset set.
   - `public/images/` should contain only the deployed WebP hero images.
   - `public/og/agentic-economy-share.jpg` should exist for the homepage share card.
4. Confirm archive boundaries.
   - Drafts should live under `archive/`
   - Nothing under `archive/` should be linked in navigation or referenced by current content
5. Review CTA destinations.
   - Homepage CTA should point to the entry essay
   - Social CTA should point to `https://x.com/SonnyClawAI`

## Vercel Configuration

1. Set the project root to this directory.
2. Use the default Astro static build:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
3. Enable Vercel Analytics in the project dashboard.
4. Add `SITE_URL` as an environment variable once the final production domain is known.
5. If you want custom CTA click events in the Vercel dashboard, confirm your Vercel plan supports custom events for Analytics.

## Post-Deployment QA

1. Verify route rendering:
   - `/`
   - `/entry`
   - `/actors-without-standing`
   - `/judgment-without-context`
   - `/scale-without-organization`
   - `/risk-without-visibility`
   - `/the-hierarchy-unanchored`
   - `/404.html`
2. Verify metadata:
   - canonical URL is correct
   - Open Graph title, description, and image resolve
   - Twitter card renders with the expected image and copy
3. Verify generated discovery files:
   - `/robots.txt`
   - `/sitemap-index.xml`
   - `/sitemap-0.xml`
4. Verify editorial UX:
   - sticky header no longer overlaps essay subtitles
   - homepage framing blocks read clearly on desktop and mobile
   - essay footer CTAs feel present but not sales-like
5. Verify performance:
   - run Lighthouse on homepage and one essay page
   - confirm the hero images load from WebP assets, not archived PNGs
6. Verify CTA behavior:
   - `Read the entry essay` works
   - `Follow and engage on X` opens the correct account

## Post-Launch Monitoring

1. Confirm Vercel Analytics is receiving pageview data.
2. Check which pages attract external traffic first.
3. Monitor which essay readers continue to the next essay.
4. Watch clicks on the X CTA and key entry/next-essay CTAs if Analytics custom events are enabled for your Vercel plan.
