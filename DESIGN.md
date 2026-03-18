# Design System — The Agentic Economy

## Product Context

- **What this is:** A six-part whitepaper series exploring the structural shift of commerce moving from human-speed to machine-speed.
- **Who it's for:** Thinkers, builders, economists, and technologists trying to understand the next era of the internet.
- **Space/industry:** Technology, Economics, Philosophy.
- **Project type:** Editorial / Whitepaper Website.

## Aesthetic Direction

- **Direction:** Tectonic / Structural.
- **Decoration level:** Intentional. We use "fault lines" (staggered layouts, off-axis background gradients) and physical mass (heavy blocks, stark drop shadows) to convey that the ground is moving beneath the reader's feet.
- **Mood:** Weighty, tangible, urgent, and slightly unsettling. It should feel like a construction site for a new paradigm.
- **Core Concept:** "The world is moving beneath our feet." The design must have mass, friction, and tension.

## Typography

- **Display/Hero:** `Inter` (Tight, heavy, structural sans-serif). Used for massive, load-bearing headlines.
- **Body:** `Playfair Display` (A serif with high contrast between thick and thin strokes). Gives the text a very physical, carved-in-stone feel.
- **UI/Labels:** `Inter` (Uppercase, tracked out).
- **Data/Tables:** `JetBrains Mono` (Optional, for strictly technical data).
- **Scale:**
  - Hero: `clamp(4rem, 10vw, 9rem)`
  - H2: `2rem`
  - Body: `1.25rem` to `1.35rem` (optimized for long-form reading)
  - Meta/Labels: `0.85rem`

## Color

- **Approach:** Earthy but high-contrast.
- **Background (Concrete/Plaster):** `#EAE8E3` — Has physical weight, unlike pure white.
- **Surface (Blocks):** `#F5F4F0` — Slightly lighter to lift off the background.
- **Text (Charcoal):** `#1A1A1A` — Heavy ink.
- **Muted Text:** `#666666`
- **Primary Accent (Safety Orange):** `#FF4500` — The color of construction sites, warning signs, and heavy machinery. Signals that something is being built (or torn down).
- **Border/Fault Lines:** `#C8C6C0`
- **Dark mode:** Invert the concrete to a deep asphalt (`#121212`), keep the Safety Orange.

## Spacing

- **Base unit:** 8px
- **Density:** Spacious but deliberate. Elements are either tightly grouped (structural blocks) or separated by massive chasms (fault lines).
- **Scale:** xs(4) sm(8) md(16) lg(32) xl(64) 2xl(128)

## Layout

- **Approach:** Creative-editorial with structural interruptions.
- **Grid:** Asymmetric. Text columns are constrained for readability (`max-width: 700px`), but pull quotes and structural elements break the grid and bleed across the screen.
- **The Shift:** Typography and layout elements are occasionally staggered (e.g., the title shifting off-axis) to reinforce the "tectonic" concept.
- **Border radius:** `0px`. No soft corners. Everything is cut from stone or steel.

## Motion

- **Approach:** Intentional and heavy.
- **Feel:** Elements don't "fade and float"; they slide into place with friction. Hover states on cards should feel like lifting a heavy physical object (e.g., a stark drop shadow appearing, revealing the Safety Orange underneath).
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy start, slow heavy settle).

## Decisions Log

- `2026-03-18` Pivot from "Academic Journal" to "Tectonic Shift"
  The subject matter requires a design that feels tangible and structural. The old design was "the mean"; the new design reflects a world moving beneath our feet.
- `2026-03-18` Adopt Safety Orange (`#FF4500`) as primary accent
  Replaces generic cyan to evoke construction, warning, and heavy machinery.
- `2026-03-18` Remove all border-radius
  Reinforces the brutal, structural, "cut from stone" aesthetic.
