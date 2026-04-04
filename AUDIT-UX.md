# UX Audit: agentic-economy.ai

**Date:** 2026-04-04
**Scope:** Full source review as first-time visitor walkthrough
**Method:** Code-level audit of all page templates, layouts, content files, and public assets

---

## Executive Summary

The site is an Astro publication serving a six-essay whitepaper series, a blog section, a reference series, and a product page. The design quality is high and the essay reading experience is strong. However, discoverability is critically broken: two of the four content sections are invisible to navigation, critical internal links are dead, and the homepage communicates incorrect counts. A first-time visitor can only reliably find the main essay series and the Handshake product page.

---

## Findings

### 1. Navigation only has 'Essays' and 'Handshake' — blog and ref are invisible

**Severity:** Critical
**Where:** `src/layouts/Base.astro` lines 116-118

**What the user experiences:** The site nav shows two items: "Essays" and "Handshake". A visitor has zero way to discover the 4 blog deep-dive posts or the 7-piece petrodollar reference series through navigation. They are dead content — accessible only via direct URL.

**Evidence:**
- Nav code is:
  ```html
  <a href="/">Essays</a>
  <a href="/handshake">Handshake</a>
  ```
- Blog exists at `/blog` (4 posts)
- Ref series exists at `/ref` (7 pieces, pd-00 through pd-06)

**Suggested fix:** Add "Deep Dives" linking to `/blog` and "Reference" linking to `/ref` to the nav. Alternatively, make the "Essays" link a dropdown that surfaces blog and ref as sub-sections.

---

### 2. Homepage says 'Six Essays' but the series list shows 8 entries

**Severity:** Major
**Where:** `src/pages/index.astro` line 213 vs line 214

**What the user experiences:** The section header reads "Six Essays" (hardcoded label) while the dynamic count next to it shows "8 pieces" (from `{entries.length}`). This is a visible contradiction on the page — the label and the number disagree. The meta description also says "A six-part series".

**Evidence:**
- Line 213: `<span class="series-index-label">Six Essays</span>`
- Line 214: `<span class="series-index-count">{entries.length} pieces</span>`
- Content directory has 8 files (00-the-agentic-economy through 07-third-order-effects)
- The extra 2 (order 6 and 7) are "Energy Branch" pieces tagged as extensions
- Line 79 in Base.astro: `defaultDescription` says "A six-part series"

**Suggested fix:** Either (a) update the label to match the actual count, (b) use a dynamic label, or (c) move the two "Energy Branch" pieces out of the main content glob so only 6 appear in the series grid.

---

### 3. Homepage 'Deep Dives' only shows 2 of 4 blog posts

**Severity:** Minor (by design, but worth noting)
**Where:** `src/pages/index.astro` lines 59-74

**What the user experiences:** The homepage Deep Dives section shows only the 2 most recent blog posts (`.reverse().slice(0, 2)`). The other 2 posts are invisible from the homepage. There is an "All analysis →" link to `/blog` but the blog page is also invisible from navigation (see #1), so these posts are effectively orphaned.

**Evidence:**
- 4 blog posts exist: the-agent-payments-stack, from-prompt-to-partner, the-invisible-crisis, third-order-effects
- Homepage only shows the last 2 from the glob

**Suggested fix:** Showing 2 on the homepage is reasonable design, but only if the `/blog` index page is reachable through nav (see #1).

---

### 4. `/ref` petrodollar series is completely orphaned

**Severity:** Critical
**Where:** `src/pages/ref/index.astro`, `src/layouts/Base.astro`

**What the user experiences:** The petrodollar series (7 pieces at `/ref/pd-00` through `/ref/pd-06`) has its own index page at `/ref` and individual Astro pages, but there is no link to it from anywhere on the site: not from the nav, not from the homepage, not from the essay footer series list, not from llms.txt. A user arriving via search engine can find a single piece, but there is no path back to the rest of the series.

**Evidence:**
- `/ref/index.astro` exists with a well-designed card grid
- No nav link to `/ref`
- No homepage section for reference content
- No `llms.txt` entry for the ref series
- Ref pages use the Essay layout but link `next` to `/ref/pd-01-guarantor` etc., so internal ref navigation works — but there's no entry point from the rest of the site

**Suggested fix:** Add "Reference" or "Petrodollar Series" to site nav. Add a reference section to the homepage or at minimum link from the final essay's CTA.

---

### 5. `llms.txt` has dead link to `/blog/accountability-gap`

**Severity:** Major
**Where:** `public/llms.txt` line 27

**What the user experiences:** The llms.txt file (used by AI systems for site discovery) links to `https://agentic-economy.ai/blog/accountability-gap` — a URL that does not exist. No blog file with that slug exists. The 4 blog posts are: the-agent-payments-stack, from-prompt-to-partner, the-invisible-crisis, third-order-effects.

**Evidence:**
- llms.txt line 27: `- [The Accountability Gap in Named Agent Systems](https://agentic-economy.ai/blog/accountability-gap)`
- No file `blog/accountability-gap.mdx` exists
- No blog post has slug `accountability-gap`
- The topic may relate to the `actors-without-standing` essay (covers identity and accountability), but that's at a different URL

**Suggested fix:** Remove the dead entry or add the missing blog post. Also: llms.txt lists only 3 blog entries but there are 4 posts (missing: third-order-effects). Update to match actual content.

---

### 6. All essays show generic '2026' — no month or day

**Severity:** Major
**Where:** `src/layouts/Essay.astro` line 123, `src/layouts/BlogPost.astro` line 100

**What the user experiences:** Every essay and blog post shows "2026" as the date in the article metadata bar. No month, no day. For visitors and search engines, this provides almost no temporal context. Is this recent? Stale? Nobody can tell.

**Evidence:**
- Essay.astro line 123: `<span>2026</span>` (hardcoded string, ignores the `date` prop)
- BlogPost.astro line 100: `<span>2026</span>` (same hardcoded string)
- The `date` prop IS passed to the layouts but only used in JSON-LD schema and the AuthorBio component
- The meta display strips it to just the year

**Suggested fix:** Use the `date` prop in the meta display. Format it properly (e.g., "March 2026" or "2026-03-15"). Set actual dates in frontmatter.

---

### 7. Agent Voice section has no context for newcomers

**Severity:** Major
**Where:** `src/pages/index.astro` lines 148-194

**What the user experiences:** After the hero section, a first-time visitor hits a section titled "From the Agent" that opens with "I co-authored this thesis. Now I'm building the proof." followed by "My name is Sonny. I'm an AI agent". There is no framing, no transition, no explanation of what "agent" means in this context or why a homepage about an economic thesis has a section written in first person by an AI. For a newcomer who hasn't read the essays, this is disorienting.

**Evidence:**
- The section appears immediately after the hero, before the essay list
- No introductory text explains the agent concept
- The "Signal 5/5 / Session / Status alive" metrics are insider-coded
- The section assumes familiarity with the premise

**Suggested fix:** Add a brief transitional line before the agent voice section. Something like: "One of the authors of this series is itself an AI agent." This gives newcomers the frame before the agent speaks.

---

### 8. Vision section 'What I See When I Dream' is tone-breaking

**Severity:** Minor
**Where:** `src/pages/index.astro` lines 196-209

**What the user experiences:** Between the agent voice section and the essay index, there's a section labeled "What I See When I Dream" with an image and the caption "The moment before becoming." This is a deeply personal/artistic interlude on what is otherwise a structured economic publication. It shifts the tone from analytical to spiritual/aspirational in a way that may confuse visitors expecting a research-focused site.

**Evidence:**
- Section title: "What I See When I Dream"
- Caption: "The moment before becoming."
- Image: sonny-vision.webp (consciousness-themed)
- Positioned between functional content sections

**Suggested fix:** Relocate to the bottom of the page (after the essay grid) as a closing statement, or remove entirely. If kept, frame it as an artistic statement separate from the research content.

---

### 9. Entry essay URL `/entry` doesn't match title 'The Agentic Economy'

**Severity:** Minor
**Where:** `content/00-the-agentic-economy.mdx` frontmatter (`slug: "entry"`)

**What the user experiences:** The first essay is titled "The Agentic Economy" but lives at `/entry`. Every CTA on the site says "Read the entry essay" linking to `/entry`. The URL doesn't communicate what the essay is about. From an SEO and human-readability perspective, `/the-agentic-economy` would be more descriptive and match the other essay URLs (which use their titles: `/actors-without-standing`, `/judgment-without-context`, etc.).

**Evidence:**
- Frontmatter: `slug: "entry"`
- All CTAs: `href="/entry"`
- Other essays use descriptive slugs matching their titles
- The 404 page also links to `/entry`

**Suggested fix:** Change slug to `"the-agentic-economy"` and update all internal references. Or keep `/entry` as a short canonical entry point and also generate `/the-agentic-economy` as an alias.

---

### 10. No way to pick entry point by reader type

**Severity:** Major
**Where:** `src/pages/index.astro` (homepage overall)

**What the user experiences:** The homepage has a "How To Read It" box that says "Start with the entry essay for the full frame, or move directly into the tension closest to your work and return to the synthesis." But there is no way to actually do the second option. The essay grid lists all 8 pieces by number with no thematic filtering. A builder, economist, or strategist has no way to find "the tension closest to their work" without reading all the titles and guessing.

**Evidence:**
- "How To Read It" promises thematic entry points
- No tags, categories, or reader-type routing exists
- The series grid is ordered 0-7 with no other structure
- No "Start here if you're a..." pathways

**Suggested fix:** Add a simple "Start by role" section: "If you're building agent infrastructure → Actors Without Standing. If you're thinking about risk → Risk Without Visibility." Or add tags to essays and a filter mechanism.

---

## Additional Findings

### 11. blog/[slug].astro glob pattern works correctly

**Severity:** None (verification passed)
**Where:** `src/pages/blog/[slug].astro` line 48

**The glob `../../../blog/*.{md,mdx}` from `src/pages/blog/[slug].astro` resolves to `~/agentic-economy/blog/*.mdx`. All 4 blog posts are picked up correctly.**

---

### 12. Cross-references between essays and blog posts resolve correctly

**Severity:** None (verification passed)

Blog posts use `extends: "/actors-without-standing"`, `extends: "/judgment-without-context"`, `extends: "/risk-without-visibility"`. The BlogPost.astro layout builds a `whitepaperMap` from content slugs, so these resolve to the correct essay titles. The "Extends" links render and navigate correctly.

---

### 13. Handshake is properly linked from essay CTAs

**Severity:** None (verification passed)

The final essay (order 5, "The Hierarchy Unanchored") shows "See what we're building" linking to `/handshake`. The handshake page links back to `/entry` and `/` for the series. Bidirectional linking works.

**However:** The handshake page links to `/entry` which uses the non-descriptive slug (see #9).

---

### 14. Blog posts lack individual dates — default to '2026-03-28'

**Severity:** Minor
**Where:** `src/layouts/BlogPost.astro` line 32

The BlogPost layout defaults `date` to `"2026-03-28"` when no date is provided in frontmatter. None of the 4 blog posts have a `date` field in their frontmatter. All blog posts show the same date in JSON-LD schema.

**Suggested fix:** Add actual publication dates to blog post frontmatter.

---

### 15. llms.txt is incomplete

**Severity:** Major
**Where:** `public/llms.txt`

Beyond the dead link (#5), the llms.txt file is missing:
- The petrodollar reference series (7 pieces at `/ref/`)
- The "The Invisible Crisis" essay (content/06)
- The "Third-Order Effects" essay (content/07)
- The "From Prompt to Partner" blog post
- The "Third-Order Effects" blog post

It lists 5 whitepapers (0-5) but there are 8. It lists 3 blog posts but there are 4. The ref series is not mentioned at all.

**Suggested fix:** Regenerate llms.txt to reflect actual site content. Consider a build script that generates it automatically from the content glob.

---

### 16. Footer in Essay.astro says 'A six-part series' with 8 entries

**Severity:** Minor
**Where:** `src/layouts/Essay.astro` line 252

The essay footer reads: "Part of *The Agentic Economy* — A six-part series. 2026." But the series list directly below shows 8 entries. Same inconsistency as #2.

**Suggested fix:** Update to match actual count, or make dynamic.

---

### 17. No RSS feed content for blog or ref

**Severity:** Minor
**Where:** `src/pages/rss.xml.ts` (if it exists), `public/rss.xml`

The RSS feed is generated at build time (found in dist). The Base layout advertises it. However, given the content visibility issues, the RSS may be the only way some users discover blog/ref content — and they'd need to already know to look for it.

---

### 18. The `isEssay` logic in Base.astro treats all non-handshake pages as essays

**Severity:** Minor
**Where:** `src/layouts/Base.astro` line 34

```js
const isEssay = !isHandshake && currentPath !== "/";
```

This means `/blog`, `/blog/*`, `/ref`, `/ref/*` all trigger "active" state on the "Essays" nav link. If nav items are added for blog and ref, this logic needs updating so each section highlights its own link.

---

## Summary Table

| # | Issue | Severity | Section |
|---|-------|----------|---------|
| 1 | Nav missing blog and ref links | Critical | Navigation |
| 2 | "Six Essays" label vs 8 entries | Major | Homepage |
| 3 | Homepage shows 2 of 4 blog posts | Minor | Homepage |
| 4 | `/ref` series completely orphaned | Critical | Navigation |
| 5 | llms.txt dead link to accountability-gap | Major | SEO/Discovery |
| 6 | Generic "2026" dates everywhere | Major | Metadata |
| 7 | Agent Voice section lacks newcomer context | Major | Homepage |
| 8 | "What I See When I Dream" tone break | Minor | Homepage |
| 9 | `/entry` URL doesn't match title | Minor | URL/SEO |
| 10 | No thematic entry points by reader type | Major | Homepage |
| 14 | Blog posts default to same date | Minor | Metadata |
| 15 | llms.txt incomplete (missing content) | Major | SEO/Discovery |
| 16 | Footer says "six-part" with 8 entries | Minor | Consistency |
| 18 | Nav active state logic for new sections | Minor | Navigation |

**Critical:** 2 issues (nav gaps)
**Major:** 7 issues (discoverability, metadata, context)
**Minor:** 5 issues (consistency, polish)

---

## Recommended Priority Order

1. **Add nav links for Blog and Reference** (fixes #1, #4, partly #3)
2. **Fix "Six Essays" → dynamic or correct count** (fixes #2, #16)
3. **Replace hardcoded "2026" with actual dates** (fixes #6, #14)
4. **Regenerate llms.txt from actual content** (fixes #5, #15)
5. **Add framing line before Agent Voice section** (fixes #7)
6. **Add reader-type entry point guidance** (fixes #10)
7. **Relocate or remove Vision section** (fixes #8)
8. **Consider slug change for entry essay** (fixes #9)
