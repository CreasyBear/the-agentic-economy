# UI/UX/FEEL SYSTEM REVIEW — agentic-economy.ai

**Reviewed:** All source files, CSS, layouts, and page templates.
**Date:** April 2026

---

## 1. HOMEPAGE (index.astro)

### What's working

- **The hero has real presence.** `clamp(4rem, 10vw, 8rem)` for the title is bold — it fills the viewport and commands attention. The indented "Economy" line (`padding-left: 10vw`) and the muted color treatment create a genuine two-beat visual hierarchy. You read "The Agentic" first, then your eye drops to "Economy." That's good.
- **The tagline's left border + italic treatment** separates it from the title cleanly. The border-left on the tagline creates a visual anchor that says "this is context, not headline."
- **The staggered entrance animations** (`fadeSlideUp` with 0.6s–0.4s delays) are well-calibrated. Not too slow, not too fast. They respect `prefers-reduced-motion`.
- **The doctrine list on the homepage** is elegant — the three-column grid (number | title | description) with monospace numbers and display-font titles creates a table-of-contents feel that matches the publication's gravity.
- **The scroll indicator** at the bottom of the hero is a nice touch — the nudge animation is subtle.

### What's not working

- **The hero takes the entire viewport.** `min-height: calc(100svh - var(--header-h))` means the hero is a full-screen commitment. On a content-heavy publication, this is aggressive. The user has to scroll past a wall of brand messaging before seeing any actual content. For a first-time visitor who doesn't know what this site is, the hero is a barrier, not a welcome.
- **No visual connection between hero and content below.** The hero section ends abruptly. The "Latest Signal" section starts with a full-bleed border (`::before` pseudo-element). There's no transitional element — no gradient fade, no breathing space indicator. You go from immersive hero to bordered content section with no bridge.
- **Featured card "Read →" is an inline-styled CTA.** `<span class="cta-link" style="margin-top: var(--space-md); display: inline-flex;">Read →</span>` — this is a quick-fix, not a design decision. It works visually but feels bolted on.
- **Homepage cards use global `.deep-dives-card` styles** with no page-specific refinement. The featured card gets its own `.deep-dives-card--featured` class (bigger padding, offset box-shadow), but the grid cards are identical to global defaults. The homepage deserves its own treatment — it's the front door.
- **The Agent Voice section** feels like an afterthought at the bottom. A blockquote with an X link. The `border-top: border-bottom` framing is heavy for what is essentially a single quote + CTA. It's the last thing a user sees before the footer, and it doesn't land.

### The FEEL

The homepage communicates: "We are serious, we are structured, and we have strong typography." It feels like the cover of a heavyweight journal. But it also feels like a cover that doesn't open easily — the user has to work to get to the content. The design says "weighty and intentional" but the information architecture says "scroll past our branding first."

---

## 2. DOCTRINE ESSAY (Content.astro with type="doctrine")

### What's working

- **The reading progress bar** (`reading-progress`) is excellent. 3px accent-colored bar fixed at top. It tells the user "you're in a long-form piece, and here's where you are." This is a signal of editorial seriousness.
- **The essay title typography** (`clamp(2.5rem, 6vw, 4rem)`, `line-height: 1.05`, `font-weight: 700`) is dramatic without being absurd. It reads as a title, not a heading.
- **The standfirst with border-left** mirrors the hero tagline treatment — consistent design language. The italic body font + muted color clearly separates it from body prose.
- **The standfirst-rule's accent dot** (`::before` with the 8px circle) is a beautiful detail. It breaks the monotony of a horizontal rule and ties to the accent color.
- **The prose grid** (`grid-template-columns: 1fr min(var(--col-read), 100%) 1fr`) is sophisticated. It lets the text sit in a centered reading column while the background extends full-width. On desktop (1100px+), the third column becomes `minmax(280px, 1fr)` — a potential margin for annotations or pull-quotes (though it's unused now).
- **Justified text for doctrine** is a deliberate choice. It creates the "book page" density that suits long-form argument. The `hyphens: auto` prevents word-spacing disasters.
- **The blockquote treatment** (border-left: 3px solid accent, display font, `clamp(1.2rem, 2vw, 1.5rem)`) is editorial and weighty.
- **The section divider dots** (8px circle, accent border, on horizontal rules) are a recurring motif that gives the site character.
- **The series footer** with numbered entries and current-page highlighting is clean and functional.

### What's not working

- **The essay-shell padding is symmetric but not generous.** `padding: var(--space-2xl) 0 var(--space-4xl)` — 48px top, 96px bottom. The top feels tight for an arrival moment. When you land on a doctrine essay, the title starts almost immediately below the sticky header. There's no breathing room to orient.
- **The meta → title → standfirst → context-links → hero → prose sequence has inconsistent spacing.**
  - meta to title: `margin-bottom: var(--space-lg)` on meta (24px), then `margin-bottom: var(--space-2xl)` on title (48px). Total: 72px. That's decent.
  - title to standfirst: The standfirst has `margin: 0 auto var(--space-xl)` (32px). But there's no explicit margin-top. The title's `margin-bottom: var(--space-2xl)` (48px) provides the gap. 48px between title and standfirst feels right.
  - standfirst-rule to context-links: The rule has `margin: 0 auto var(--space-2xl)` (48px). Context-links has `margin: 0 auto var(--space-xl)` (32px). That's fine.
  - context-links to hero: `margin-bottom: var(--space-xl)` on context-links (32px), hero has `margin: 0 auto var(--space-3xl)` (72px). But wait — the hero's margin-top is 0. So the gap is 32px. That feels tight for a transition from navigation chrome to a full-width image.
  - hero to prose: `margin-bottom: var(--space-3xl)` on hero (72px). That's good — the image has room to breathe before text starts.
- **The essay-context-links feel lost.** They're small (11px), uppercase, with dot separators. On a long page, they're easy to miss. They serve a navigational purpose but they don't feel like part of the design — they feel like breadcrumbs that wandered into the wrong place.
- **The extends link** (on signals/reference pages) is rendered between title and standfirst. It has `border-bottom: 1px solid var(--border)` and its own padding. But visually, it's a label ("Extends") + a display-font link (1.25rem) between the massive title and the standfirst. It breaks the title → standfirst rhythm. It looks like a footnote that wandered into the header.
- **The essay-cta section** has `margin: var(--space-3xl) auto 0` — 72px above, nothing below. It's a bordered box with a box-shadow (6px 6px offset). It feels like it's floating at the end of the prose, not connected to it. The box-shadow treatment (which is the same as the homepage CTA links) makes it feel like a UI card, not an editorial element.
- **The AuthorBio component uses undefined CSS tokens.** `--surface`, `--heading`, `--fg`, `--link` are not defined in global.css. The component will render with browser defaults for `background` (transparent), which means it won't have the intended `var(--bg-alt)` background. The `border-radius: 0.5rem` also contradicts the site-wide `--radius-sm: 0px` token. This component is visually inconsistent with the rest of the system.

### The FEEL

A doctrine essay feels like reading a serious long-form piece in a well-designed publication. The typography is strong, the justified text creates density, and the progress bar signals "this matters." But the landing experience is abrupt — there's no moment of arrival. You're dropped into the content. The spacing is functional but not intentional enough to guide the eye through the hierarchy.

---

## 3. SIGNAL/BLOG POST (Content.astro with type="signal")

### What's working

- **Left-aligned text** (vs justified for doctrine) is the right call for signals. These are shorter, more scannable pieces. The user shouldn't have to read them like a book.
- **The extends link** conceptually works — it tells the reader "this signal connects to this doctrine essay." The accent-colored label is clear.
- **The CTA at the end** adapts its copy based on whether the piece extends something. "This piece extends [title] with deeper evidence and structural analysis." That's useful context.

### What's not working

- **The extends link's visual integration is poor.** The `.blog-extends` div has `padding: var(--space-lg) 0` and `border-bottom: 1px solid var(--border)`. It's rendered after the title and before the standfirst. Visually, it's: Title → [extends block with its own border] → Standfirst. The extends block has the same visual weight as a section separator, but it's actually metadata. It interrupts the title → standfirst flow.
- **The extends link font size (1.25rem, display font) competes with the standfirst (clamp(1.3rem, 2.5vw, 1.75rem)).** They're almost the same size. The extends link should be clearly smaller — it's supporting context, not primary content.
- **The signal footer** is just one line of text: "Part of The Agentic Economy — rapid analysis extending the core doctrine." No series list, no navigation. This is fine for signals but it feels thin compared to the doctrine and reference footers, which have full series lists.

### The FEEL

A signal post feels like a newsroom dispatch — quick, factual, connected to the main argument. But the extends link sits in the header area like an awkward guest at a dinner party. It's trying to do too much in too prominent a position. The page communicates "this is a satellite piece" without needing the extends link to be so visually assertive.

---

## 4. REFERENCE PIECE (Content.astro with type="reference")

### What's working

- **The 780px reading width** (vs 680px for doctrine) is appropriate. Reference pieces contain structured data — code blocks, JSON payloads. They need more horizontal space.
- **Left-aligned text** for scannability, like signals.
- **The series footer** lists all 8 petrodollar pieces with numbers and current-page highlighting. This is excellent for navigation within a structured series.

### What's not working

- **The reference prose grid at 780px** works on desktop, but at the `@media (max-width: 1099px)` breakpoint, ALL prose types get `padding: 0 var(--space-lg)`. There's no type-specific mobile treatment. The reference piece on mobile is just narrower text — no adaptation for the fact that it contains code/data blocks.
- **Code blocks in reference pieces** (`background: transparent, padding: var(--space-md) 0`) are intentionally stripped of chrome. This is fine for the monospace JSON payloads, but if a reference piece ever contains actual code (not data), the transparent background will make it indistinguishable from body text.
- **The extends link issue** applies here too. Reference pieces that extend doctrine essays get the same extends block as signals. The design doesn't differentiate the "extends" relationship between types.

### The FEEL

A reference piece feels like a technical appendix — dense, structured, wider-reading. It has the right typographic treatment for its content type. But it inherits the same landing-experience issues as doctrine essays, and the extends link is equally awkward.

---

## 5. DOCTRINE INDEX (doctrine.astro)

### What's working

- **The "What This Is / Who It Is For / How To Read It" context grid** is outstanding. Three columns (auto-fit, minmax(240px, 1fr)) with accent-colored labels. It answers the visitor's orientation questions immediately. This is the best piece of information design on the site.
- **The series cards** with staggered entrance animation (`opacity: 0 → 1`, `translateY(12px) → 0`, with `calc(var(--i, 0) * 80ms)` delay) create a waterfall effect that feels alive.
- **The card hover** (translateY(-6px) + accent bar scaleX from left) is satisfying and well-animated.
- **The branch grouping** with the indented layout and group title creates a clear hierarchy between core series and branches.

### What's not working

- **The CSS is duplicated.** The `.doctrine-hero`, `.series-card`, and all related styles exist in BOTH `global.css` (lines 1754-1903) AND `doctrine.astro` scoped styles (lines 200-463). The scoped styles win, but the global.css dead code adds 150 lines of confusion. Someone maintaining this will edit the wrong file.
- **The hero title "The permanent argument."** is set at `clamp(2rem, 5vw, 3.25rem)`. Compare this to the homepage hero at `clamp(4rem, 10vw, 8rem)` and the essay title at `clamp(2.5rem, 6vw, 4rem)`. The doctrine index hero is smaller than the essay title. For a landing page that should orient the reader, this feels underpowered.
- **The branch-group-title** is `font-size: 13px` — barely distinguishable from the card number labels (11px). The branch name should be more prominent as a section divider.
- **No description/copy under the hero.** The hero has "The permanent argument." as title and "Five dynamics, one transformation." as tagline, plus a body-font paragraph. But there's no substantial introduction. The "What This Is" grid below tries to do this work, but it's separated by `var(--space-3xl)` (72px) of padding. The hero and the context grid feel like two separate things, not one unit.

### The FEEL

The doctrine index feels like a well-organized table of contents for a serious publication. The context grid is the strongest piece of orientation design on the entire site. But the hero is underwhelming for a landing page — it doesn't have the same "you've arrived somewhere important" energy as the homepage hero.

---

## 6. SIGNALS INDEX (signals.astro)

### What's working

- **Simple, clean list layout.** Date → extends/eyebrow → title → description. Each item is a bordered block. Scannable.
- **The hero** with "Analysis" label, "Signals" title, description, and two CTA buttons is compact and functional.
- **Hover state** (opacity: 0.85) is subtle and doesn't cause layout shifts.

### What's not working

- **Dates are unformatted.** The template renders `{post.date}` directly from frontmatter, which is ISO format (`'2026-03-10'`). The homepage formats dates with `formatDate()`. The signals index does not. This is a bug — users see "2026-03-10" instead of "Mar 10, 2026."
- **The hover state uses opacity.** `.blog-list-item:hover { opacity: 0.85 }` dims the entire card. Compare this to the doctrine cards, which translate up and add an accent bar. The signals hover feels like a prototype, not a finished interaction.
- **No visual differentiation between post types.** A post that extends a doctrine essay and a standalone post look identical except for a text label. There's no card structure, no background treatment, no visual hierarchy within the list.
- **The hero label "Analysis"** uses `color: var(--subtle)` — the lightest readable color. On the doctrine index, the label uses `color: var(--accent)`. Inconsistency.
- **The `blog-hero` has `padding-left: var(--space-xl)` and `padding-right: var(--space-xl)`** applied directly to the section, constraining it to `max-width: var(--col-read)`. This is redundant with the `.site-inner` wrapper in Base.astro. It means the signals hero has extra horizontal padding that other sections don't.

### The FEEL

The signals index feels like a blog archive page from a minimal theme. It's functional but lacks the editorial weight of the doctrine index. It communicates "here are some posts" rather than "here is our analysis." The design doesn't match the content's importance.

---

## 7. REFERENCE INDEX (ref/index.astro)

### What's working

- **The vertical list layout** (vs grid) is appropriate for a sequential series. Each piece flows into the next.
- **Category labels** ("The Paradox", "The Evidence", "The Mechanism") in accent color provide topical grouping within the linear sequence.
- **The "Read →" link** that translates on hover (`translateX(4px)`) is a nice micro-interaction.
- **The header** — "The Fracturing of the Petrodollar" as a title with a full subtitle paragraph — is the most descriptive landing header on any index page.

### What's not working

- **The reference index is constrained to `--col-read` (680px).** This is the same width as body text. The cards don't breathe. Compare to the doctrine index, which uses `--site-max` (1200px) for the context grid and series cards. The reference index feels cramped.
- **Hover uses opacity (0.85)** — same underwhelming treatment as signals. The reference series deserves the card-lift treatment that doctrine gets.
- **No number styling differentiation.** The `.ref-card-num` uses `font-family: var(--mono), font-size: 11px` — the same size/weight as the category label. The number should be more prominent (it's a series identifier) or less prominent (it's just ordering).
- **The `ref-index` container has no max-width constraint beyond `--col-read`.** On wide screens, the cards stretch to 680px while the page background is 1200px. This creates a narrow column of content in a wide ocean of background. The doctrine index handles this better by using full-width grids.

### The FEEL

The reference index feels like a detailed table of contents for a policy paper. It's informative and well-structured. But it's constrained in a way that makes it feel like a sidebar, not a main attraction. The content is serious (petrodollar analysis) but the design treats it as secondary.

---

## 8. SPECIFIC CHECKS

### The Essay/Ref Page Landing Experience

**Verdict: Needs work.**

The arrival sequence is: sticky header → meta (eyebrow + date) → title → extends → standfirst → context-links → hero image → prose.

The problem is density. There's no breathing room at the top of the page. The `essay-shell` has `padding-top: var(--space-2xl)` (48px), but the sticky header overlaps this. Effective visual padding is closer to 48px minus the header height (64px) plus the header's backdrop blur. The user arrives and immediately sees metadata.

A strong landing experience would have: a clear gap below the header, then a large title, then a standfirst that orients, then a visual transition (hero image or divider), then prose. The current sequence has too many small elements before the hero image.

### The Footer Placement

**Verdict: Correct.**

The site footer ("By the team building Handshake", section links, year) is in `Base.astro`, rendered after `<main>`. It appears at the bottom of every page. Within content pages, there's also an `essay-footer` (series list) that appears before the site footer. The stacking order is correct: content → CTA → nav → author-bio → related → essay-footer → site-footer.

### The Extends-Link

**Verdict: Visually disconnected.**

The extends-link is a `.blog-extends` div rendered between the title and standfirst. It has its own `border-bottom: 1px solid var(--border)` and `padding: var(--space-lg) 0`. This creates a visual box that interrupts the title → standfirst flow.

The extends-label is `font-size: 11px, color: var(--subtle)` — fine. But the extends-link is `font-family: var(--display), font-size: 1.25rem, font-weight: 600, color: var(--accent)`. This is almost as large as the standfirst. The extends block competes for attention rather than supporting it.

**Fix direction:** Make the extends-link inline with the meta area, or render it below the standfirst-rule as a contextual note. Don't give it its own bordered section.

### The CTA Section

**Verdict: Functional but disconnected.**

The essay-cta has `margin: var(--space-3xl) auto 0` (72px above) and is a bordered box with offset box-shadow. The kicker ("Continue The Inquiry") is accent-colored and uppercase. The copy is body-font. The actions are two CTA links (primary filled, secondary outlined).

The CTA works as a "what next" prompt. But the box-shadow treatment (`6px 6px 0 rgba(0,0,0,0.05)`) makes it feel like a UI card from a dashboard, not an editorial element. The offset shadow is a signature design element used on the homepage CTAs and featured cards, but on a content page it feels like a different visual language.

### Spacing Between Sections

**Verdict: Inconsistent.**

In Content.astro, the section order and their margins:
- `.essay-meta`: `margin-bottom: var(--space-lg)` (24px)
- `.essay-title`: `margin-bottom: var(--space-2xl)` (48px)
- `.blog-extends`: `padding: var(--space-lg) 0` (24px top/bottom), `margin-bottom: var(--space-lg)` (24px) — but this has its own border, so the visual gap is `24px + border + 24px + 48px(title's margin) = ~100px`
- `.essay-standfirst`: `margin-bottom: var(--space-xl)` (32px)
- `.essay-standfirst-rule`: `margin-bottom: var(--space-2xl)` (48px)
- `.essay-context-links`: `margin-bottom: var(--space-xl)` (32px)
- `.essay-hero`: `margin-bottom: var(--space-3xl)` (72px)
- `.essay-cta`: `margin-top: var(--space-3xl)` (72px)
- `.essay-nav`: `margin-top: var(--space-3xl)` (72px)
- `.author-bio`: `margin: 3rem auto 0` (48px — note: uses raw `3rem`, not a token)
- `.essay-related`: `margin: var(--space-3xl) auto 0` (72px)
- `.essay-footer`: `margin: var(--space-3xl) auto 0` (72px)

The post-prose spacing is consistent at 72px (`--space-3xl`) between each section. That's good. But the pre-prose spacing varies from 24px to 100px. The author-bio uses `3rem` (48px) instead of a token — a minor inconsistency.

### Typography Scale

**Verdict: Strong but with gaps.**

- Homepage title: `clamp(4rem, 10vw, 8rem)` — massive
- Essay title: `clamp(2.5rem, 6vw, 4rem)` — large but clearly smaller
- Doctrine index title: `clamp(2rem, 5vw, 3.25rem)` — too small for a landing page
- Signals index title: `clamp(2.5rem, 6vw, 4rem)` — same as essay titles (should be bigger for a landing)
- Reference index title: `clamp(2rem, 5vw, 2.5rem)` — the smallest landing title

The homepage title is appropriately dramatic. Essay titles are well-proportioned. But the index pages don't have enough scale difference from their content pages. The doctrine index title should be at least as large as the essay title — ideally larger, since it's a landing page.

The standfirst (`clamp(1.3rem, 2.5vw, 1.75rem)`) is clearly different from body text (`1.2rem`). The meta labels (11px, uppercase, letter-spacing: 0.12em) are clearly UI, not content. These are correct.

---

## 9. SYSTEM-LEVEL ASSESSMENT

### Does the site feel like one system or multiple disconnected pages?

**Mostly one system, with seams showing.**

The design tokens are consistent: same colors, same fonts, same spacing scale. The header and footer are universal. The CTA link style is reused everywhere. The reading progress bar is a consistent content-page feature.

But the seams show in:
1. **Hover interactions.** Doctrine cards lift. Signal/reference items dim. Homepage cards lift with offset shadow. CTA links shift with offset shadow. There are at least 3 different hover philosophies.
2. **Index page treatments.** Doctrine uses full-width card grids. Signals uses a constrained list. Reference uses a constrained list with categories. Each index page was designed in isolation.
3. **The AuthorBio component** uses undefined tokens (`--surface`, `--heading`, `--fg`, `--link`) and a `border-radius: 0.5rem` that contradicts the site's `0px` radius token. It's a foreign object in the system.
4. **The extends-link** exists in the content layout but has no equivalent in the index pages. The relationship between doctrine → signals/reference is communicated on content pages but not on index pages (except for text labels on signals).

### What's the biggest gap?

**The landing experiences.** Every page you arrive at — homepage, doctrine index, signals index, reference index, individual essays — has a different approach to "welcome." The homepage is a full-viewport hero. The doctrine index has a compact hero + context grid. The signals index has a minimal hero. Individual essays have no arrival moment at all.

For a publication about structural economic shifts, the arrival moment matters. Every page should feel like you've arrived at something considered. The current approach is: some pages feel important when you land, others feel like you've been dropped into a list.

### What would a design director fix first?

**1. Fix the AuthorBio component.** It's using tokens that don't exist. Either define `--surface`, `--heading`, `--fg`, and `--link` in the token system, or rewrite the component to use the existing tokens (`--bg-alt`, `--text`, `--accent`). Remove the `border-radius: 0.5rem` — the site uses 0px everywhere. This component is on every content page and it's visually broken.

**2. Unify the hover interactions.** Pick one philosophy:
- Option A: Everything lifts (translateY). Doctrine + homepage cards already do this.
- Option B: Everything brightens (color change, no movement). Some links do this.
- Don't mix. The current state has cards that lift, items that dim, links that change color, and CTA buttons that shift with shadow. Four patterns is three too many.

**3. Give the content pages an arrival moment.** Add generous top padding to essay-shell (96px or more). Maybe add a subtle divider between the header and the content start. The user should feel a beat of whitespace before the meta label appears. Currently, `padding-top: 48px` on essay-shell is too tight — the title practically touches the sticky header.

**4. Fix the signals index dates.** They're rendering as ISO strings (`2026-03-10`) instead of formatted dates. This is a bug, not a design decision. The homepage formats dates correctly. Apply the same formatter.

**5. Rework the extends-link placement.** Move it below the standfirst-rule, or inline with the context-links. Don't give it its own bordered section between the title and standfirst. It interrupts the reading hierarchy.

**6. Fix the CSS duplication.** The `.doctrine-hero` and `.series-card` classes are defined in both `global.css` and `doctrine.astro`. Remove the global.css versions — they're dead code that will confuse future maintainers.

**7. Give index pages consistent scale.** The doctrine index title should be larger than the essay title (it's a landing page). The signals index should use the card-grid treatment from doctrine, not a flat list. The reference index should not be constrained to 680px.

---

## 10. POSITIVE HIGHLIGHTS (What to Protect)

These are working well and should not be changed:

1. **The design token system.** Four fonts, a clean spacing scale, a considered color palette with dark mode. The tokens are well-named and well-scoped.

2. **The prose grid.** The three-column CSS grid for prose (center column for text, flanking columns for whitespace) is sophisticated and well-implemented.

3. **The section divider dots.** The 8px accent-bordered circle on horizontal rules is a signature detail that gives the site personality.

4. **The doctrine context grid.** "What This Is / Who It Is For / How To Read It" is the best piece of orientation design on the site. This pattern should be used on other index pages.

5. **The reading progress bar.** Minimal, functional, accent-colored. It signals editorial seriousness.

6. **The justified text on doctrine essays.** A deliberate, old-world choice that suits the content type.

7. **The staggered card animations.** The `calc(var(--i, 0) * 80ms)` delay pattern creates a waterfall effect that feels alive without being gratuitous.

8. **The CTA copy adaptation.** Different copy for different content types and states (series complete vs in-progress, extends vs standalone). This is smart content design.

9. **The sticky header with backdrop blur.** Clean, functional, unobtrusive.

10. **The mobile nav.** The hamburger → full-screen dropdown pattern is well-implemented with proper ARIA labels and auto-close on link click.

---

## SUMMARY

The site has a strong typographic foundation, a clean token system, and several genuinely excellent design details (the context grid, the progress bar, the divider dots). But it's undermined by inconsistent hover treatments, an underdeveloped landing experience on content pages, a broken AuthorBio component, CSS duplication, and index pages that don't match each other's visual weight.

The bones are good. The execution needs a consistency pass. A design director would say: "The parts are well-designed. The system needs to be unified."
