# Sprint Plan: agentic-economy.ai v1

**Date:** 2026-04-04
**Source:** DESIGN-V1.md + AUDIT-UX.md + AUDIT-VOICE.md + BENCHMARK.md
**Status:** Phase 1 implementation ~90% complete

---

## What Exists (verified)

| Component | Status | File |
|-----------|--------|------|
| Homepage rewrite | ✅ Done (has 1 bug) | `src/pages/index.astro` |
| Nav restructure | ✅ Done | `src/layouts/Base.astro` |
| Doctrine page | ✅ Done | `src/pages/doctrine.astro` |
| Signals page | ✅ Done | `src/pages/signals.astro` |
| Date formatting | ✅ Done | `src/layouts/Essay.astro`, `BlogPost.astro` |
| Blog frontmatter dates | ✅ Done | `blog/*.mdx` (4 posts) |
| pd-07 in ref index | ✅ Done | `src/pages/ref/index.astro` |
| llms.txt rewrite | ✅ Done | `public/llms.txt` |
| "six-part" language | ✅ Updated | Multiple files |
| Scoped CSS | ✅ Done | Inline `<style>` in index.astro |
| Build | ✅ Passing | 7.45s |

---

## What's Broken

| # | Issue | Severity | Fix |
|---|-------|----------|-----|
| 1 | `featured.mtime` on line 135 — should be `featured.date` | Bug | Replace `mtime` → `date` in template |
| 2 | `post.mtime` on line 160 — should be `post.date` | Bug | Replace `mtime` → `date` in template |

These are the only remaining bugs. The data mapping was already fixed (returns `date` not `mtime`), but two template lines still reference the old field.

---

## What's Missing vs DESIGN-V1

| # | Item | Priority | Notes |
|---|------|----------|-------|
| 1 | Blog → /signals route rename | Low | Currently /blog still works, /signals is a parallel page. Can keep both. |
| 2 | Ref page routes under /reference | Low | Currently at /ref. Moving routes is risky — breaks existing links/SEO. Keep /ref. |
| 3 | Related Signals on doctrine essays | Phase 2 | Requires querying blog/ by extends field on essay pages |
| 4 | API endpoint | Phase 2 | Static JSON payloads — future sprint |
| 5 | Signal type tags | Phase 2 | Frontmatter addition — future sprint |

---

## Premortem

| Threat | Category | Mitigation |
|--------|----------|------------|
| Hero still too tall (original CSS may force 4 viewports) | Tiger | Check global.css `.hero` height — if `min-height: 100vh`, reduce to auto |
| Doctrine page reuses blog-hero CSS but may look wrong | Paper Tiger | Build test passes — page renders |
| Nav active state logic wrong for new sections | Tiger | Verify `isDoctrine`, `isSignals`, `isRef` detection in Base.astro |
| SEO regression from content restructure | Elephant | Routes unchanged (/entry, /actors-without-standing, /blog/*). No broken URLs. |
| Missing "View all" link from recent signals to /signals | Minor | Line 154 links to /blog. Change to /signals if we rename. |

---

## Tasks

### Task 1: Fix mtime bug (CRITICAL)
- File: `src/pages/index.astro`
- Line 135: `formatDate(featured.mtime)` → `formatDate(featured.date)`
- Line 160: `formatDate(post.mtime)` → `formatDate(post.date)`
- Build test: `npx astro build`
- **Risk:** None. Data already provides `date`.

### Task 2: Audit hero CSS height
- File: `src/styles/global.css`
- Check `.hero` class for `min-height: 100vh` or excessive padding
- If hero forces multiple viewports, reduce to `auto` or `min-height: 60vh`
- The homepage should be 1 viewport for the hero, not 4
- Build test after change

### Task 3: Verify nav active states
- File: `src/layouts/Base.astro`
- Check that `isDoctrine` is true on /doctrine pages
- Check that `isSignals` is true on /blog and /signals pages
- Check that `isRef` is true on /ref pages
- Fix any broken logic

### Task 4: Commit and deploy
- `git add -A && git commit -m "feat: v1 redesign — homepage, nav, doctrine, signals, dates, refs"`
- `git push origin main` (triggers Vercel deploy)
- Verify live site

---

## Execution Order

1. Fix mtime bug (Task 1) — 2 lines
2. Audit hero CSS (Task 2) — read + possibly patch
3. Verify nav states (Task 3) — read + possibly patch
4. Final build test
5. Commit + push

Total estimated: 15 minutes.
