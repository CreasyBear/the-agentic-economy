# Design System — The Agentic Economy

## Product Context
- **What this is:** A six-part whitepaper series on the structural shift from human-speed institutions to machine-speed economic actors, with a product section introducing Handshake (trust infrastructure for agent-to-agent interactions).
- **Who it's for:** Thinkers, builders, CTOs, economists, and technologists reasoning about the next institutional layer.
- **Space/industry:** Technology, Economics, Agent Infrastructure.
- **Project type:** Editorial publication + product introduction. Two siblings on one site.

---

## Aesthetic Direction
- **Direction:** Institutional Gravity — the site reads like a think tank publication that also ships infrastructure. Not a startup. Not a blog. An institution with a thesis and the engineering to back it.
- **Decoration level:** Intentional — structural shifts (asymmetric layouts, tectonic plate metaphors), strong typographic hierarchy, rare color. Decoration serves the argument; nothing is ornamental.
- **Mood:** Weighty, precise, consequential. The writing carries the page. The design creates authority without competing with the prose.
- **Reference caliber:** Stripe Press (craft + warmth), The Atlantic (editorial confidence), Works in Progress (intellectual rigor), The New Criterion (classical type + digital precision).

---

## Typography

- **Display/Hero:** `Fraunces` — variable serif with optical sizing and WONK axis. At hero scale (72px+), it's unmistakable: soft wedge serifs, wide apertures, gentle humanity in a structural frame. Signals institution, not startup. The optical size axis means it sharpens automatically at body sizes and opens up at display sizes.
- **Body:** `Newsreader` — variable serif designed specifically for editorial long-form reading. Optical sizing, sharp letterforms, warm x-height. Built for 18–20px body text at 1.7 line-height — the exact use case. Better than Playfair Display for sustained reading (lower contrast, less eye fatigue).
- **UI/Labels/Nav:** `Space Grotesk` — monospace heritage gives it a technical, constructed quality. Clean at small sizes (11–14px). The structural precision matches the tectonic concept. For navigation, buttons, eyebrows, meta text.
- **Code:** `JetBrains Mono` — excellent ligatures, high legibility in code blocks.
- **Loading:** Google Fonts CDN (all variable)
  ```
  https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono&display=swap
  ```

### Type Scale
| Role | Font | Size | Weight | Line-height |
|------|------|------|--------|-------------|
| Display hero | Fraunces | clamp(4rem, 10vw, 8rem) | 800 | 0.92 |
| H2 / Article title | Fraunces | clamp(2.5rem, 5vw, 4rem) | 600 | 1.05 |
| H3 / Section heading | Fraunces | clamp(1.4rem, 2.5vw, 1.75rem) | 500 | 1.25 |
| Standfirst | Newsreader italic | clamp(1.3rem, 2.5vw, 1.75rem) | 400i | 1.45 |
| Body long-form | Newsreader | 1.2rem (19.2px) | 400 | 1.75 |
| Body lede | Newsreader | clamp(1.3rem, 2vw, 1.45rem) | 400 | 1.65 |
| UI / Button / Nav | Space Grotesk | 12–14px | 500–600 | 1.4 |
| Eyebrow / Cap label | Space Grotesk | 11px | 600 | — |
| Code / Mono | JetBrains Mono | 14px | 400 | 1.6 |

---

## Color

- **Approach:** Restrained — one accent, warm stone surfaces, deep ink. Color is rare and structural. When the accent appears, it marks a moment of tension or action.

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| bg | `#EFECE7` | `#121110` | Page background — warm stone |
| bg-alt | `#F8F6F2` | `#1C1B18` | Lifted surface — cards, callouts |
| text | `#1A1816` | `#E8E4DE` | Primary text — deep warm ink |
| muted | `#706B64` | `#8A857E` | Secondary text, descriptions |
| subtle | `#9E9890` | `#5A5650` | Tertiary text, metadata |
| accent | `#D4421A` | `#E8562D` | Structural marker — links, rules, active states |
| accent-strong | `#B8350E` | `#F06840` | Hover, emphasis |
| border | `#D4CFC7` | `#2C2A26` | Dividers, card borders |

### Semantic colors
| Role | Light | Dark |
|------|-------|------|
| Success | `#2D7A4E` | `#4DB87A` |
| Warning | `#C08A20` | `#D4A43A` |
| Error | `#C43838` | `#E07070` |
| Info | `#2E5FA0` | `#6699DD` |

### Dark mode
Dark mode is a first-class surface. Surfaces use warm near-black, not pure `#000`. Accent desaturates slightly and lightens for contrast. Text is warm off-white (`#E8E4DE`), never pure white.

---

## Spacing

- **Base unit:** 8px
- **Density:** Generous for editorial sections (prose needs air), tighter for navigation and UI chrome.
- **Scale:**

| Token | Value |
|-------|-------|
| 2xs | 4px |
| xs | 8px |
| sm | 12px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 72px |
| 4xl | 96px |

---

## Layout

- **Approach:** Creative-editorial with structural interruptions. Text columns are constrained for readability; structural elements (tectonic plates, hero shifts, section dividers) break the grid and bleed.
- **Grid:** 12 columns; 24px gutters
- **Max content width:** 1200px (full layout); 680px (reading column for essays)
- **Breakpoints:** mobile <640px, tablet 640–1024px, desktop >1024px
- **Border radius:** 0px everywhere. No soft corners. Cut from stone.

---

## Motion

- **Approach:** Intentional and heavy. Elements don't "fade and float" — they settle into place with weight.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` — smooth power curve (fast start, heavy settle)
- **Duration:**

| Token | Range | Usage |
|-------|-------|-------|
| micro | 80–120ms | Hover states, color transitions |
| short | 150–250ms | Theme toggle, small state changes |
| medium | 300–450ms | Card reveals, section transitions |
| long | 500–700ms | Hero entrance, scroll-triggered reveals |

- **`prefers-reduced-motion`:** respected. All animation gated behind media query.

---

## Handshake Section (`/handshake`)

The product sibling. Shares site chrome (header, footer) but shifts tone from editorial to institutional-product.

- Same type stack, same color tokens
- Accent usage shifts: more amber/gold secondary warmth alongside the burnt orange
- Layout shifts from reading-column prose to structured sections (problem/solution, ceremony diagram, stack position)
- CTAs are more prominent (waitlist capture)
- Feels like the same publication's "what we're building" section

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-19 | Fraunces as display font | Variable serif with optical sizing. Institutional weight at hero scale, sharp at body. Distinctive — no competitor in developer infra uses it. |
| 2026-03-19 | Newsreader as body font | Purpose-built for editorial reading. Lower contrast than Playfair Display = less eye fatigue over 5000-word essays. Optical sizing adapts to context. |
| 2026-03-19 | Space Grotesk for UI | Monospace heritage gives technical precision. Matches the "constructed/tectonic" concept. |
| 2026-03-19 | Burnt orange (#D4421A) replaces Safety Orange (#FF4500) | Deeper, more authoritative. Same construction-site family but weathered — feels earned, not picked from a color picker. |
| 2026-03-19 | Redesign from tectonic v1 | v1 used Inter (overused, generic) + Playfair (high contrast, fatiguing for long reading). The concept was right but the execution was median. New type stack is 99th percentile editorial. |
| 2026-03-19 | Border radius stays 0px | The brutalist structural aesthetic requires sharp edges. This is a deliberate choice, not a default. |
| 2026-03-19 | /handshake as sibling section | Same site, shared chrome, distinct tone. Product section inherits the publication's authority. |
