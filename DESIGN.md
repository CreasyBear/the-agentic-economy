# Design System

## Above And Below The Fold

- Above the fold establishes authority: page identity, one clear point, and enough navigation to orient the reader.
- Below the fold proves depth without crowding the first viewport.
- The homepage is the field statement. Its first below-fold module is the site map: Thesis, Atlas, Handshake, Writing.
- Route heroes should not consume the whole viewport unless the page is intentionally poster-only. Home is allowed to be poster-like; Thesis, Atlas, Handshake, and Team are not.
- Thesis replaces About. It states the core view and then points to the actual essay themes, not decorative taxonomy.
- Atlas is the signature research surface, but it should behave like a visual field instrument, not a report. It is a plate series first and a page second.
- Team must be concrete. If profiles are not ready, keep the page minimal rather than filling it with field language.
- Handshake is one concrete primitive inside the field: authority travelling with agentic action, not a product shelf and not the whole company.
- Writing can carry richer media. Thesis, Atlas, Handshake, and Team should stay restrained and structural.

## Composition

- Build from shared route heroes, rails, indexed rows, cards, and editorial rows before adding bespoke components.
- Build Atlas from a typed field model, not hardcoded prose blocks. The current version uses six generated field plates managed through `atlasSeries`.
- Use warm paper, ink, burnt orange, and moss as the core palette.
- Avoid decorative grids, generic AI visuals, dashboard screenshots, blobs, and heavy explanatory sections.
- Avoid generic "six card" layouts and text-heavy dossiers for Atlas. It should read as a field instrument: spatial relationships, thin rules, restrained labels, and very little prose.
- Prefer short positioning statements over doctrine blocks on top-level routes.
- Keep sign-in, pricing, and account mechanics out of primary brand chrome unless the visitor is in an operational route or already signed in.
- Never expose internal file paths, implementation names, or build artifacts in public page chrome.

## Image Grammar

- Generated imagery should feel like field evidence: atlas surfaces, paper, ink, seals, traces, thresholds, institutional objects, and quiet infrastructure.
- Use images to create atmosphere and authority, not to explain the page in place of the writing.
- Home, Thesis, Writing, and article heroes can use soft background images when a strong paper overlay preserves text contrast.
- Atlas and Handshake use foreground proof objects: plate series for Atlas, trust-ceremony still life for Handshake.
- Team uses real portraiture. Do not cover the founder page with generic generated scenery.
- Generated backgrounds must leave text-safe negative space on mobile first, then scale to desktop.
- Avoid readable generated text, fake UI, dashboards, robots, AI brains, neon networks, blobs, cyberpunk, and decorative gradients.
- Every project-used generated image must live under `public/images`; do not reference `.codex/generated_images` from app code.

## Typography

- DM Serif Display carries grand statements.
- Bricolage Grotesque carries navigation, labels, body copy, and interface text.
- Headings use balanced wrapping and zero letter spacing.
- Body text follows Practical Typography constraints: 15-25px on the web, 120-145% line-height, and a 45-90 character measure.
- Longform writing uses the shared copy measure token rather than arbitrary content widths.
- All-caps labels must be short and tracked. Do not apply letter spacing to normal body text.
- Use mono only for labels, metadata, code, or proof-object details.
