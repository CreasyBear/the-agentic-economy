# Eval — agentic-economy.ai Fine-Tooth-Comb

**Method:** Score 0-100. Each check is binary (pass/fail). Weighted by impact.
**Loop:** Audit → Fix → Re-score → Commit if improved → Repeat until 90+

---

## D1: Typography & Prose (25 pts)

| # | Check | Pts |
|---|-------|-----|
| 1 | Essay prose text-align: justified | 3 |
| 2 | Blog post prose text-align: justified | 2 |
| 3 | Ref prose text-align: justified | 2 |
| 4 | No orphaned/widowed lines (text-wrap: balance on headings) | 2 |
| 5 | Body text uses --body (Newsreader) everywhere in prose | 2 |
| 6 | Headings use --display (Fraunces) everywhere | 2 |
| 7 | UI labels use --ui (Space Grotesk) everywhere | 2 |
| 8 | Code/mono uses --mono (JetBrains Mono) | 1 |
| 9 | Line-height 1.75 on body prose | 1 |
| 10 | Paragraph spacing consistent (--space-lg between paragraphs) | 2 |
| 11 | Standfirst/lede in italics (Newsreader italic) | 1 |
| 12 | Blockquotes styled consistently (accent border, indented) | 2 |
| 13 | h2/h3 spacing consistent (margin-top larger than margin-bottom) | 2 |
| 14 | No raw <b> or <i> — uses <strong> and <em> | 1 |

## D2: AgenticPayload / JSON Blocks (15 pts)

| # | Check | Pts |
|---|-------|-----|
| 1 | Payloads visible on desktop (margin position) | 2 |
| 2 | Payloads visible on mobile (inline, not hidden) | 3 |
| 3 | Font size appropriate (small but readable, ~12-13px) | 2 |
| 4 | Code block has proper chrome (bg, border, padding) | 2 |
| 5 | Syntax highlighting or at least monochrome readable | 1 |
| 6 | Doesn't break prose flow on any viewport | 2 |
| 7 | Dark mode code bg appropriate | 2 |
| 8 | JSON keys/values legible (not too faint) | 1 |

## D3: Navigation & Wayfinding (15 pts)

| # | Check | Pts |
|---|-------|-----|
| 1 | Hamburger works on mobile (<768px) | 2 |
| 2 | Active state correct on every section | 2 |
| 3 | Footer links work | 1 |
| 4 | Essay prev/next navigation works | 2 |
| 5 | "Related Signals" shows on doctrine essays | 2 |
| 6 | Blog post "Extends" links resolve correctly | 1 |
| 7 | Breadcrumbs or context links on all content pages | 2 |
| 404 page helpful (links to key sections) | 1 |
| 9 | No dead links anywhere | 2 |

## D4: Visual Polish (20 pts)

| # | Check | Pts |
|---|-------|-----|
| 1 | Hover states on ALL interactive elements | 2 |
| 2 | Transitions use --ease-heavy, not default ease | 2 |
| 3 | Card shadows appropriate in both themes | 2 |
| 4 | Border colors use --border, not hardcoded | 1 |
| 5 | Background colors use --bg/--bg-alt, not hardcoded | 1 |
| 6 | Accent color used sparingly (links, active, CTA only) | 2 |
| 7 | Reading progress bar visible and functional | 2 |
| 8 | Images have proper alt text or role=presentation | 1 |
| 9 | No layout shift on load (font-display: swap with fallback) | 2 |
| 10 | Smooth scroll behavior where appropriate | 1 |
| 11 | Focus states on all interactive elements (accessibility) | 2 |
| 12 | Consistent border-radius (0px everywhere) | 1 |
| 13 | Section dividers/horizontal rules styled | 1 |

## D5: Responsive (15 pts)

| # | Check | Pts |
|---|-------|-----|
| 1 | Hero fits in 1 viewport on mobile | 2 |
| 2 | Nav doesn't overflow on 320px | 2 |
| 3 | Prose readable at all widths (no horizontal scroll) | 2 |
| 4 | Cards/images scale properly | 2 |
| 5 | Touch targets >= 44px | 2 |
| 6 | Doctrine page responsive | 2 |
| 7 | Signals page responsive | 1 |
| 8 | Ref index responsive | 1 |
| 9 | Footer wraps on mobile | 1 |

## D6: Metadata & SEO (10 pts)

| # | Check | Pts |
|---|-------|-----|
| 1 | Every page has unique meta description | 2 |
| 2 | Every page has correct og:image | 2 |
| 3 | JSON-LD on all page types | 2 |
| 4 | RSS includes all content | 1 |
| 5 | llms.txt complete and accurate | 1 |
| 6 | Sitemap includes all routes | 1 |
| 7 | Canonical URLs correct | 1 |

---

## Scoring

D1 + D2 + D3 + D4 + D5 + D6 = total / 100

Target: 90+
