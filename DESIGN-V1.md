# DESIGN-V1 — agentic-economy.ai Structural Proposal

**Date:** 2026-04-04
**Source:** Atlas Reframing Analysis (REFRAMING.md) + Current Site Audit
**Direction:** Hybrid of Intelligence Briefing + Protocol Layer, weighted toward Briefing

---

## 1. Strategic Summary

The site currently performs as a finished argument. The Atlas reframing identifies the correct move: editorial cadence + structured knowledge layer. The essays become **doctrine** (permanent, authoritative, linked). The blog and new content become **signals** (dated, event-responsive, high-velocity). The JSON payloads become a **first-class protocol layer** — not decorative, but deliberately queryable.

The homepage transforms from a static pitch page into a **live feed**. The doctrine remains deep-linked and discoverable, but it no longer dominates the entry point. The entry point says: *here is what is happening right now, here is what it means, and here is the framework for understanding it.*

---

## 2. Content Taxonomy

### Current State (confused)
```
content/     → 8 essays (labeled "six-part series" despite being 8)
blog/        → 4 posts (labeled "deep dives," some duplicate titles with content/)
ref/         → 7 pieces (petrodollar series — completely orphaned, no routes)
```

### Proposed V1 Taxonomy

| Layer | Name | Content | Cadence | Purpose |
|-------|------|---------|---------|---------|
| **Doctrine** | Core Series | content/00-05 (entry + 4 dynamics + synthesis) | Static, revised quarterly | The permanent argument. What the site believes. |
| **Branches** | Extended Analysis | content/06-07 (energy branch), future branches | New branch per event cycle | Deep structural analysis of specific domains that test the thesis |
| **Signals** | Rapid Analysis | blog/ (renamed from "deep dives") | 1-3 per week target | Event-responsive analysis. "Here is what happened. Here is what it means for the structural question." |
| **Reference** | Protocol Maps | ref/ (integrated, not orphaned) | As needed | Petrodollar series, payments stack maps, supply chain analyses. Structured, scannable, citation-ready. |
| **Payloads** | Machine-Readable Layer | AgenticPayload blocks + /api endpoint | Tied to content | JSON structured data that agents and builders consume programmatically |

### Content Relationships (new frontmatter schema)

```yaml
# Doctrine essays (content/)
type: doctrine          # or 'branch'
series: core            # or 'energy', 'finance', etc.
order: 1

# Signals (blog/)
type: signal
extends: /actors-without-standing    # links to doctrine
series: null | energy                # optional series tag
signal_type: analysis | map | case-study | protocol
date: 2026-03-15                     # becomes critical — signals are dated

# Reference (ref/)
type: reference
extends: /risk-without-visibility    # links to doctrine
series: petrodollar
ref_order: 0
```

### What to Cut
- **"Six-part series" language everywhere.** It's 8 essays. The framing should be "Core Doctrine" (5 essays) + "Branches" (ongoing).
- **"Deep Dives" label for blog.** Rename to "Signals" or "Analysis." The blog is rapid-response, not deep-dive. The depth lives in the doctrine.
- **Duplicate titles.** "The Invisible Crisis" exists in both content/ and blog/. The content/ version is the branch essay; the blog/ version is a signal extending risk-without-visibility. Differentiate clearly or merge.

### What to Add
- **Date prominence on signals.** Every signal carries a published date above the fold. Age-of-analysis is a feature, not metadata.
- **"Extends" as navigable relationship.** Every signal and reference piece visibly links to its parent doctrine essay. Clicking "Extends: Actors Without Standing" navigates to the doctrine.
- **Series tags on blog posts.** Energy signals grouped under "Energy Branch." Petrodollar grouped under "Finance Branch." Cross-referencing enabled.

---

## 3. Navigation Structure

### Current Nav
```
Brand → Home
Essays → Home (confusing — same destination)
Handshake → /handshake
Theme → toggle button
```

### Proposed Nav
```
Brand → Home (live feed)
Doctrine → /doctrine (series index — the permanent argument)
Signals → /signals (reverse-chronological feed of rapid analysis)
Reference → /reference (protocol maps, structured analyses)
Handshake → /handshake (product)
/api → /api (machine-readable endpoint — quiet link, footer or utility nav)
[Theme toggle]
```

### Rationale
- **Doctrine separated from Home.** The homepage becomes the live feed. Doctrine gets its own dedicated path for people who want the argument, not the news cycle.
- **Signals is the new "blog."** Explicit framing as rapid analysis. Reverse-chronological. Dated. Event-responsive.
- **Reference un-orphaned.** The petrodollar series and future structured analyses get a proper route and discoverable home.
- **Handshake stays.** It's the product sibling. Same relationship to the publication.
- **/api is quiet.** Not in main nav. Linked from footer, from AgenticPayload blocks, and from a small utility link. "For agents and builders." Signals the protocol layer without foregrounding it.

---

## 4. Homepage Layout (Proposed)

The homepage transforms from a static pitch into a live feed that also provides entry points to the permanent argument.

### Section Order (top to bottom)

#### 4.1 — Compact Hero
```
───────────────────────────────────────
THE AGENTIC ECOMOMY
[One-line thesis] Commerce is becoming a machine-speed activity.
                 We are mapping the structural consequences.
[Two CTAs]       Read the latest signal | Start the doctrine
───────────────────────────────────────
```
- Shrink dramatically. Current hero is 4 viewport heights. New hero is 1 viewport or less.
- Two clear paths: "what's new" (latest signal) and "what we believe" (doctrine entry essay).
- Kill the three-panel "What This Is / Who It Is For / How To Read It" — that information belongs on the /doctrine index page, not the homepage.

#### 4.2 — Latest Signal (above the fold priority)
```
───────────────────────────────────────
LATEST SIGNAL
[Date]          2026-03-28
[Title]         The Agent Payments Stack
[Extends]       ← Actors Without Standing
[Description]   The definitive stack analysis: how x402, MPP, AP2,
                ERC-8004, and OWS fit together as layers.
[Read →]
───────────────────────────────────────
```
- One featured signal. Most recent. Full-width card.
- Dated. Extends-link visible. The entire section says: *we are actively analyzing this*.
- This is the "intelligence briefing" signal. It says "we published something recently and it matters."

#### 4.3 — Recent Signals Grid (3-4 cards)
```
───────────────────────────────────────
RECENT ANALYSIS                View all →

[2026-03-22]  Third-Order Effects
              ← Risk Without Visibility
              Tracing the causal chain from Iranian missiles...

[2026-03-18]  The Invisible Crisis
              ← Risk Without Visibility
              The Gulf crisis disrupted 33% of global helium...

[2026-03-10]  From Prompt to Partner
              ← Judgment Without Context
              The five stages of working with AI...
───────────────────────────────────────
```
- Smaller cards. Date-first. Extends-link visible.
- "View all →" links to /signals.

#### 4.4 — Doctrine Map (the permanent argument, de-emphasized but present)
```
───────────────────────────────────────
DOCTRINE                          Read the series →

00  The Agentic Economy           Entry — the structural frame
01  Actors Without Standing       Identity, liability, transacting without existence
02  Judgment Without Context      Delegation, specification gaps, alignment
03  Scale Without Organization    Coase, the headless firm, surplus capture
04  Risk Without Visibility       Correlation, propagation, intervention limits
05  The Hierarchy Unanchored      Synthesis — one transformation, four manifestations

    └─ Energy Branch
       06  The Invisible Crisis
       07  Third-Order Effects
───────────────────────────────────────
```
- Compact list, not a card grid. Functional, not atmospheric.
- Shows the tree structure: core + branches.
- The energy branch visually nests under core. Future branches (finance, compute) do the same.

#### 4.5 — Agent Voice (condensed)
```
───────────────────────────────────────
FROM THE AGENT
"I co-authored this thesis. Now I'm building the proof."
[Read more →]     @SonnyClawAI on X
───────────────────────────────────────
```
- Compress dramatically. Current section is massive prose. New version is a pull-quote + link.
- The agent voice is a differentiator, but on the homepage it should be a hook, not a monologue.
- Full agent voice essay moves to a dedicated /about or /agent page if desired.

#### 4.6 — Kill: Vision Section
- The "What I See When I Dream" section with the image is atmospheric but not functional.
- It occupies a full viewport on the homepage. Move it to the /about or /agent page.
- The homepage needs velocity, not atmosphere.

#### 4.7 — Kill: Series Grid (replaced by 4.4)
- The current animated card grid is beautiful but slow to scan.
- The compact list in 4.4 communicates the same information faster.

#### 4.8 — What We're Watching (optional v1.1, not v1)
```
───────────────────────────────────────
WHAT WE'RE WATCHING
Topic               Status       Last Updated
Agent payments       Active       2026-03-28
Helium supply chain  Monitoring   2026-03-22
x402 adoption        Tracking     2026-03-15
ERC-8004 governance  Active       2026-03-10
───────────────────────────────────────
- An intelligence dashboard. Structured. Scannable.
- Indicates the team is tracking multiple threads, not just publishing essays.
- Defer to v1.1. Not essential for launch but directionally correct.
```

---

## 5. User Journey Map

### 5.1 — First-Time Reader (found via search/X)

**Goal:** Understand the thesis in <2 minutes. Decide if it's worth reading deeply.

**Journey:**
```
Homepage → Latest Signal (dated, fresh, shows the site is active)
         → Doctrine Map (sees the argument structure)
         → Entry Essay (00) — "Commerce, as we have known it..."
         → Either reads deeply or bookmarks and follows
```

**Key design requirements:**
- Homepage must answer "what is this?" in <5 seconds. Compact hero does this.
- Homepage must show "is this active?" in <2 seconds. Latest Signal with date does this.
- Entry essay must be one click from homepage. "Read the latest signal" OR "Start the doctrine" both achieve this.
- Kill the current hero's three-panel explainer — it's a barrier, not a welcome.

**Current friction points to eliminate:**
- Hero is too long (4 viewports). First-time reader scrolls past 1000px of atmosphere before seeing content.
- No clear signal of recency. Site looks static. "2026" in the footer doesn't count.
- "Essays" in nav links to homepage, which is confusing. The nav says "Essays" but shows a hero.

### 5.2 — Returning Reader (came back for new analysis)

**Goal:** Find what's new since last visit. Read the latest signal. Check if any doctrine has been updated.

**Journey:**
```
Homepage → Latest Signal (immediately visible, dated)
         → Recent Signals Grid (scan for titles they haven't read)
         → Clicks into signal
         → Signal page has "Extends: [Doctrine Essay]" — can trace back to framework
```

**Key design requirements:**
- Latest signal must be the first content block after the hero. No scrolling past hero + agent voice + vision + series grid to find new content.
- Signals are reverse-chronological. The reader's last-visit-date determines what's new.
- RSS feed already exists (/rss.xml). Ensure signals populate it.

**Current friction points to eliminate:**
- Blog posts are buried below the series grid. A returning reader must scroll past 8 essay cards to find 2 blog posts.
- No dates on homepage blog cards. Can't tell what's new.
- Blog is labeled "Deep Dives" — doesn't signal recency.

### 5.3 — Decision-Maker (GC/Compliance)

**Goal:** Find governance-relevant analysis. Map their risk posture against the framework.

**Journey:**
```
Signals → Filter by relevance (liability, risk, governance)
       → "Actors Without Standing" (doctrine — the legal brief)
       → "The Agent Payments Stack" (signal — the due diligence map)
       → Reference series for specific domains (petrodollar, energy)
```

**Key design requirements:**
- Doctrine essays already contain governance-relevant analysis. "Actors Without Standing" IS a legal brief. The content exists.
- Signals need better tagging. "signal_type: analysis | map | case-study" lets a GC filter for case-studies and maps.
- Reference pieces (petrodollar) are structured and scannable — exactly what a decision-maker needs.

**Current friction points to eliminate:**
- Reference series is completely orphaned. No routes, no nav entry, no discovery path.
- No filtering or tagging. A GC must read everything to find the 2 pieces relevant to their domain.
- Blog posts don't signal their governance relevance. "The Agent Payments Stack" is a compliance goldmine but it's labeled a "deep dive."

### 5.4 — Agent Builder (structured data, protocol analysis)

**Goal:** Consume machine-readable analysis. Query structured data. Build against the protocol layer.

**Journey:**
```
/api endpoint → JSON schema documentation
             → Query by topic, series, or signal type
             → AgenticPayload blocks embedded in every essay are queryable
             → Reference pieces (protocol maps) return structured stack data
```

**Key design requirements:**
- /api endpoint serves structured JSON. Not documentation for humans — a machine-readable interface.
- AgenticPayload blocks already exist in every essay. Make them queryable: "give me all payloads related to identity" or "give me the payments stack map as JSON."
- Reference pieces are already structured (raw JSON in the petrodollar series). Formalize this.

**Current friction points to eliminate:**
- No /api route. AgenticPayload blocks are visual-only (rendered as sidebar annotations).
- Reference pieces have no routes at all. Can't access them.
- No schema for the JSON payloads. Builders can't program against them.

---

## 6. Page-Level Structure

### 6.1 — Homepage (`/`)
*Already detailed in Section 4.*

### 6.2 — Doctrine Index (`/doctrine`)

Replaces the current homepage's essay grid as the primary series view.

```
THE DOCTRINE
[Standfirst] The permanent argument. Five dynamics, one transformation.
             Start with the entry essay, or enter at the tension closest to your work.

CORE SERIES
00  The Agentic Economy              [Entry]
01  Actors Without Standing          [Identity & Liability]
02  Judgment Without Context         [Delegation & Alignment]
03  Scale Without Organization       [Coordination & Cost]
04  Risk Without Visibility          [Emergence & Speed]
05  The Hierarchy Unanchored         [Synthesis]

BRANCHES
  Energy
    06  The Invisible Crisis
    07  Third-Order Effects

  Finance                          [future]
    —
```

- Each essay card shows title + one-line description + reading time.
- The branch structure is visible and extensible.
- This is where the "What This Is / Who It Is For / How To Read It" copy lives.

### 6.3 — Signals Feed (`/signals`)

New page. Reverse-chronological feed.

```
SIGNALS
Rapid analysis of events as they unfold.
New signals when the cycle demands it.

[2026-03-28]  The Agent Payments Stack              ← Actors Without Standing
[2026-03-22]  Third-Order Effects                    ← Risk Without Visibility
[2026-03-18]  The Invisible Crisis                   ← Risk Without Visibility
[2026-03-10]  From Prompt to Partner                 ← Judgment Without Context
```

- Date-first. Always.
- Each signal shows its extends-relationship.
- Optional: filter by series tag (energy, finance, payments).
- Optional: filter by signal type (analysis, map, case-study).

### 6.4 — Signal Page (`/signals/[slug]`)

Individual signal pages. Currently served at `/blog/[slug]`. Rename the route.

```
[same Essay layout]
+ Date prominently displayed
+ "Extends: [Doctrine Title]" as a visible link above the standfirst
+ Related signals sidebar (other signals extending the same doctrine essay)
+ AgenticPayload blocks in the margin (same as doctrine essays)
```

### 6.5 — Reference Index (`/reference`)

New page. Un-orphaned.

```
REFERENCE
Structured analyses and protocol maps.
Machine-readable. Citation-ready.

Petrodollar Series
  pd-00  The Physical Toll
  pd-01  The Guarantor Became the Source
  pd-02  The Vault Drain
  pd-03  Yuan at the Strait
  pd-04  The Hierarchy Breaks From the Bottom
  pd-05  Who Pays
  pd-06  Petrodollar 2.0
  pd-07  Australia's Moment
```

- Each reference piece gets a proper route: `/reference/pd-00-infrastructure-hits`
- These pages use a different layout — more scannable, less editorial. Tables, structured data, JSON payloads prominent.
- Each links to its parent doctrine essay.

### 6.6 — API Endpoint (`/api`)

New page. Machine-readable.

```
/api
Machine-readable structured data from The Agentic Economy.

Endpoints:
  GET /api/payloads            → All AgenticPayload blocks
  GET /api/payloads?topic=identity → Filtered by topic
  GET /api/doctrine             → Doctrine series index as JSON
  GET /api/signals              → Signals feed as JSON
  GET /api/reference/pd-series  → Petrodollar reference as JSON

Schema: [link to JSON schema]
```

- Quiet page. Not in main nav. Linked from footer and from within AgenticPayload blocks.
- The payloads are already in every essay. This just makes them queryable.
- Can be a static JSON file or a serverless function. Start with static JSON built at build time.

### 6.7 — Individual Doctrine Essay (`/[slug]`)

Keep current Essay layout with these additions:

- "Part of the Core Doctrine" badge (not "Part of a six-part series")
- "Related Signals" section at the bottom: links to all signals that extend this essay
- "Related Reference" section at the bottom: links to all reference pieces connected to this essay
- AgenticPayload blocks remain in the margin (already working)
- Series navigation at bottom stays

### 6.8 — Handshake (`/handshake`)

No structural change. It's the product sibling. Keep it.

### 6.9 — About / Agent (`/about` — optional)

New page. Houses the full Agent Voice essay and Vision section that move off the homepage.

- Sonny's full statement
- Vision image
- Session metadata
- "How this project works" explanation

---

## 7. What to Add / Cut / Restructure

### ADD
| Item | Priority | Effort |
|------|----------|--------|
| `/doctrine` index page | P0 | Low — rework homepage grid into standalone page |
| `/signals` feed page | P0 | Low — new page, reverse-chron blog listing |
| `/reference` index + routes for ref/ pieces | P0 | Medium — add routes, layout, un-orphan content |
| `/api` static JSON endpoint | P1 | Medium — build-time JSON generation from payloads |
| Date-first signal cards on homepage | P0 | Low — frontmatter already has dates |
| "Extends" relationship visible on signal cards | P0 | Low — frontmatter already has extends field |
| Compact hero (replace 4-viewport hero) | P0 | Medium — design + build |
| "Latest Signal" featured section on homepage | P0 | Low — pull most recent blog post |
| Related signals on doctrine essay pages | P1 | Low — query blog/ by extends field |
| RSS feed includes signals (already exists at /rss.xml, verify) | P1 | Low — verify |
| Signal type tags (analysis, map, case-study) | P1 | Low — frontmatter addition |
| Schema.org structured data for signals (datePublished critical) | P1 | Low — already partially done |

### CUT
| Item | Priority | Rationale |
|------|----------|-----------|
| "What I See When I Dream" vision section from homepage | P0 | Occupies full viewport, not functional for any user journey. Move to /about. |
| "Six-part series" language everywhere | P0 | It's 8 essays. The framing should be "Core Doctrine" + "Branches." |
| Three-panel "What/Who/How" from homepage hero | P0 | Belongs on /doctrine index, not homepage. Homepage needs velocity. |
| Animated series card grid on homepage | P1 | Replace with compact list. Faster to scan. Cards can stay on /doctrine. |
| "Deep Dives" label for blog | P0 | Rename to "Signals." Deep Dives implies slow. Signals implies fast. |

### RESTRUCTURE
| Item | Current | Proposed |
|------|---------|----------|
| Homepage purpose | Static pitch page | Live feed with doctrine entry points |
| Blog route | `/blog/[slug]` | `/signals/[slug]` (or keep /blog/ but rename label) |
| Blog label | "Deep Dives" | "Signals" or "Analysis" |
| Essay label | "Six Essays" / "Six-part series" | "Core Doctrine" |
| Hero size | 4 viewports | 1 viewport or less |
| Content discovery order | Hero → Agent → Vision → Series → Blog | Hero → Latest Signal → Recent Signals → Doctrine Map |
| Nav items | Essays / Handshake / Theme | Doctrine / Signals / Reference / Handshake / Theme |
| Reference pieces | Orphaned (no routes) | Full routes + index page |
| Agent voice | Full homepage section | Condensed to pull-quote on homepage, full version on /about |

---

## 8. Implementation Phases

### Phase 1: Structural (ship in 1 week)
1. Create `/doctrine` page (move series grid off homepage)
2. Create `/signals` page (blog listing, reverse-chron, dated)
3. Create `/reference` index page + routes for all 7 pd-* pieces
4. Rewrite homepage: compact hero → latest signal → recent signals → doctrine map → agent voice (condensed)
5. Update nav: Doctrine / Signals / Reference / Handshake
6. Add "extends" links visibly on all signal cards
7. Update all "six-part series" language

### Phase 2: Protocol Layer (ship in 2 weeks)
1. Build static /api endpoint with JSON payloads
2. Add "Related Signals" to doctrine essay pages
3. Add "Related Reference" to doctrine essay pages
4. Add signal type tags to blog frontmatter
5. Add filtering to /signals page (by series, by type)

### Phase 3: Velocity (ongoing)
1. Establish editorial cadence: 1-2 signals per week
2. Email briefing (weekly digest of signals)
3. "What We're Watching" dashboard on homepage
4. Expand API with query capabilities

---

## 9. Information Architecture Diagram

```
/
├── Hero (compact)
├── Latest Signal → /signals/[slug]
├── Recent Signals → /signals
├── Doctrine Map → /doctrine
│   ├── 00 → /entry
│   ├── 01 → /actors-without-standing
│   ├── 02 → /judgment-without-context
│   ├── 03 → /scale-without-organization
│   ├── 04 → /risk-without-visibility
│   ├── 05 → /the-hierarchy-unanchored
│   └── Branches
│       ├── 06 → /the-invisible-crisis
│       └── 07 → /third-order-effects
├── Agent Voice (condensed)
│
/signals
├── Reverse-chron feed
├── Filter by series / type
│
/signals/[slug]
├── Signal content
├── Extends → [doctrine essay]
├── Related signals
│
/doctrine
├── Core series listing
├── Branch structure
│
/reference
├── Petrodollar series (pd-00 through pd-07)
├── Future reference sets
│
/reference/[slug]
├── Structured analysis
├── AgenticPayload blocks prominent
├── Extends → [doctrine essay]
│
/handshake
├── Product page (unchanged)
│
/api
├── GET /api/payloads
├── GET /api/doctrine
├── GET /api/signals
├── GET /api/reference
│
/about (optional)
├── Full agent voice essay
├── Vision section
├── Project context
```

---

## 10. Design System Notes

The existing DESIGN.md is strong. No changes to typography, color, or spacing tokens. Additions only:

- **Signal card styles:** Date-first layout. Smaller than essay cards. Accent border on left (like AgenticPayload).
- **Doctrine list styles:** Compact ordered list. Number-first. Not a card grid.
- **Reference page layout:** More structured, more scannable. Wider reading column (800px vs 680px). Tables prominent. JSON payloads inline (not margin-only).
- **API page:** Terminal/code aesthetic. JetBrains Mono dominant. Minimal decoration.

---

*End of DESIGN-V1.md*
