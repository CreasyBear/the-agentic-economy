# Eval — agentic-economy.ai v1 Quality

**Date:** 2026-04-04
**Method:** Score 0-100 across 5 dimensions. Each dimension 0-20.

---

## Dimension 1: Design Polish (0-20)

| Criterion | Points | Check |
|-----------|--------|-------|
| No dead/orphaned CSS | 3 | global.css has no unused classes from removed sections |
| Consistent spacing | 3 | Sections use design tokens (--space-*), not magic numbers |
| Typography hierarchy clear | 3 | Headings use --display, body uses --body, UI uses --ui |
| Hover states on all interactive elements | 3 | Cards, links, nav items all have hover feedback |
| Transitions/animations consistent | 2 | Uses --ease-heavy, micro/short/medium durations |
| Dark mode parity | 3 | All new sections look correct in dark mode |
| No visual glitches | 3 | No overflow, misalignment, broken layouts |

## Dimension 2: Navigation & Discovery (0-20)

| Criterion | Points | Check |
|-----------|--------|-------|
| All content reachable from nav | 4 | Blog, ref, doctrine, signals all linked |
| Active state correct on every page | 3 | Each section highlights its nav item |
| Breadcrumbs or context links on content pages | 3 | Reader knows where they are |
| Related content visible | 3 | Doctrine shows related signals, signals show extends |
| Footer useful | 2 | Has links, not just copyright |
| Mobile nav works | 3 | Responsive, not broken |
| 404 page helpful | 2 | Links to key sections |

## Dimension 3: Content & Metadata (0-20)

| Criterion | Points | Check |
|-----------|--------|-------|
| Real dates on everything | 3 | No hardcoded "2026", month+day visible |
| JSON-LD correct on all page types | 3 | Article, Breadcrumb, Organization schemas |
| OG images set per page | 2 | Each essay/blog has correct og:image |
| llms.txt accurate | 2 | All content listed, no dead links |
| RSS feed complete | 2 | All blog posts in feed |
| "six-part" language gone | 3 | No references to 6 when there are 8 |
| Canonical URLs correct | 2 | No duplicates, proper rel=canonical |
| Meta descriptions present | 3 | Every page has unique description |

## Dimension 4: Content Architecture (0-20)

| Criterion | Points | Check |
|-----------|--------|-------|
| Homepage ≤ 1 viewport for hero | 3 | Hero doesn't dominate the page |
| Latest signal visible above fold | 3 | First scroll reveals latest content |
| Doctrine page shows core + branches | 3 | Tree structure visible |
| Signals page shows dates + extends | 3 | Date-first, extends-links working |
| Reference series discoverable | 3 | Linked from nav, index complete |
| Agent voice doesn't overwhelm | 2 | Condensed, not a monologue |
| Vision section removed | 3 | Not on homepage |

## Dimension 5: Technical Quality (0-20)

| Criterion | Points | Check |
|-----------|--------|-------|
| Build passes clean | 4 | No warnings, no errors |
| All routes generate | 3 | Every page exists in dist/ |
| Sitemap complete | 2 | All pages in sitemap.xml |
| No dead links | 3 | All internal links resolve |
| Images optimized | 2 | Using webp, proper dimensions |
| Reading progress bar works | 2 | On essay pages |
| Analytics firing | 1 | Vercel + GA on all pages |
| Performance reasonable | 3 | No massive bundles, fonts loaded efficiently |

---

## Scoring

Sum all 5 dimensions. Max = 100.

- 90+: Ship it
- 80-89: Good, minor polish needed
- 70-79: Functional but rough
- <70: Needs work
