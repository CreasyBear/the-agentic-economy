# ADR: Unified Content Layout

**Date:** 2026-04-04
**Status:** Proposed

---

## Context

The site has three content types rendered through two layouts (Essay.astro, BlogPost.astro) plus ad-hoc ref pages. This creates:

1. **Inconsistent chrome:** Doctrine essays have author bio, series footer, prev/next nav. Signals are missing all three. Reference reuses the essay layout but doesn't need editorial elements.
2. **Duplicated logic:** Essay.astro and BlogPost.astro share 80% of their structure — meta, title, standfirst, hero, prose, CTA. The differences are small (extends-link, series footer) but maintained in two files.
3. **Ref pages are second-class:** They use the essay layout with no ref-specific treatment. No description in frontmatter, no hero image, no eyebrow. The pd-series navigation is hardcoded in ref/index.astro, not in the layout.

## Decision

Consolidate into one shared `Content.astro` layout with a `type` prop that conditionally renders sections.

### Shared structure (all types)

```
reading-progress (fixed top bar)
essay-shell
  essay-meta (eyebrow · date)
  essay-title
  blog-extends (if type=signal, show extends link)
  essay-standfirst
  essay-standfirst-rule
  essay-context-links (Doctrine · All signals · Start the series)
  essay-hero (if heroImage exists)
  essay-prose (3-column grid, content slot)
  essay-cta (Continue / Next piece)
  essay-nav (← prev · next →)
  essay-related (if matching signals exist)
  author-bio
  essay-footer (type-specific footer content)
```

### Conditional sections by type

| Section | Doctrine | Signal | Reference |
|---------|----------|--------|-----------|
| eyebrow | "The Agentic Economy — Entry" | custom | "Reference · Petrodollar Series" |
| date | from frontmatter | from frontmatter | from frontmatter |
| extends-link | — | ✓ (above standfirst) | ✓ (if extends field) |
| heroImage | ✓ | ✓ | optional (none yet) |
| context-links | "Doctrine · Start the series" | "Doctrine · All signals" | "Doctrine · Reference" |
| prev/next | ✓ (00→01→02...) | — | ✓ (pd-00→pd-01...) |
| related signals | ✓ (blog posts extending this) | — | ✓ (if extends set) |
| author-bio | ✓ | ✓ | ✓ |
| footer | series list (00-07) | "Part of The Agentic Economy" | pd-series list (00-07) |

### Text alignment by type

| Type | text-align | Rationale |
|------|-----------|-----------|
| Doctrine | justify | Long-form immersive reading, Newsreader designed for it |
| Signal | left | Scannable, fast consumption, event-responsive |
| Reference | left | Data-heavy, structured, tables/lists need left alignment |

This is applied via class on the prose container: `.essay-prose[data-type="doctrine"]` vs default left.

### Frontmatter requirements

All content types should have these fields:

```yaml
title: "..."          # required
description: "..."    # required (standfirst)
slug: "..."           # required
date: "2026-03-28"    # required (all types)
eyebrow: "..."        # required (section label)
heroImage: "/images/..." # optional (omit for no image)
extends: "/slug"      # optional (signals and ref)
order: 0              # optional (doctrine only, for series ordering)
```

Ref pieces currently missing: description, eyebrow, date. Need to add.

### Code block treatment

- **Doctrine essays:** AgenticPayload in margin (desktop), inline (mobile). No bordered code blocks in prose.
- **Signals:** Same — AgenticPayload margin/inline. Clean code blocks.
- **Reference:** AgenticPayload inline always (data is the content, not decoration). Code blocks styled but minimal — bg-alt + border, no heavy chrome.

The `.essay-prose pre` styles I added earlier with bordered blocks are wrong for all types. Revert to clean: `all: unset` matching AgenticPayload's approach, or minimal bg-alt with no border.

---

## Implementation

### Phase 1: Create unified Content.astro

1. Create `src/layouts/Content.astro` based on Essay.astro
2. Add `type` prop (doctrine | signal | reference)
3. Add conditional rendering for all sections listed above
4. Migrate BlogPost.astro's extends-link logic into Content.astro
5. Add ref-series footer (list pd-00 through pd-07)

### Phase 2: Update frontmatter

1. Add description, eyebrow, date to all ref/*.mdx files
2. Verify all blog/*.mdx have date and extends
3. Verify all content/*.mdx have all required fields

### Phase 3: Update page templates

1. Update all ref/pd-*.astro to use Content.astro instead of Essay.astro
2. Update blog/[slug].astro to use Content.astro instead of BlogPost.astro
3. Update [slug].astro to use Content.astro instead of Essay.astro
4. Delete Essay.astro and BlogPost.astro (or keep as aliases during migration)

### Phase 4: CSS refinement

1. Add `[data-type="signal"]` and `[data-type="reference"]` selectors to prose styles
2. Doctrine: text-align: justify. Signal/Reference: text-align: left
3. Revert `.essay-prose pre` bordered styles — use clean minimal treatment
4. Update essay-context-links labels per type
5. Style the ref-series footer (compact list, like doctrine series footer)

### Phase 5: Verify

1. Build test
2. Check all 3 content types render correctly
3. Check mobile responsive
4. Commit and push

---

## Anti-patterns to avoid

- Three separate layout files (defeats the purpose)
- Complex conditional logic in templates (keep it simple — if/else, not switch/case)
- Forgetting to add frontmatter to ref pieces (they'll render empty standfirsts)
- Over-styling code blocks (keep them clean, let content speak)
