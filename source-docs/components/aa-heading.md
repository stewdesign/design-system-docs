# Aa-heading

## Overview
`aa-heading` renders a real `<h1>`–`<h6>` element for whatever `level` is set, so screen readers and the page outline see a genuine heading rather than a styled `<div>`. It optionally pairs the heading with a second, smaller line of supporting copy via a `subheading` slot, keeping both aligned and sized consistently as a single block.

_TODO: no dedicated story file found for this component — Figma reference and variant list not determinable from source alone._

## Anatomy
1. **Heading** — the real `<h1>`–`<h6>` element (per `level`), containing the default slot content.
2. **Subheading** (optional, `slot="subheading"`) — a plain `<p>`, not itself a heading, so it does not appear in the page outline.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `level` (reflected) | `1` \| `2` \| `3` \| `4` \| `5` \| `6` | `2` | Sets which semantic heading element (`<h1>`–`<h6>`) is rendered, and which size/weight/line-height from the `--typography-heading-*` scale is applied. |
| `align` (reflected) | `start` \| `center` | `start` | Aligns both the heading and subheading together as one block. |

## Behaviour
- **Semantic level drives both markup and style**: changing `level` swaps the actual rendered tag (via `lit/static-html`), not just its visual size — the page outline and heading semantics always match what's visually shown.
- **Typeface**: levels 1–3 use the display typeface (`--font-family-family-display`); levels 4–6 use the sans typeface (`--font-family-family-sans`) at bold weight, distinguishing smaller headings' typographic treatment from the larger display ones.
- **Subheading visibility**: the subheading `<p>` is only shown (`hidden` removed) once its slot actually receives an element or non-whitespace text content; it stays sized off the body text scale regardless of `level`, since it is supporting text, not a smaller heading.
- **Max width**: content is capped at `48.75ch` (overridable via `--aa-heading-max-width`) — derived from the ~45–75 character readable line-length range (Bringhurst's "Elements of Typographic Style"; WCAG 1.4.8), reduced 25% because headings read shorter than body copy — so long headings wrap rather than stretching edge-to-edge on wide screens.
- **Alignment**: `align="center"` centers both the heading and subheading together, so they stay a single visually-aligned block rather than drifting apart independently.

## Usage

### When to use
- Any page or section title that should appear in the document's heading outline, at whatever semantic level (`h1`–`h6`) is correct for that position in the page structure.
- Pairing a heading with a short line of supporting copy underneath it, via the `subheading` slot.

### When not to use
- Purely decorative large text that is not a genuine section/page title — use styled body text instead, so the heading outline isn't polluted with non-structural entries.
- Supporting copy that itself needs to be a heading (e.g. a sub-section title) — the `subheading` slot renders a `<p>`, not a heading, so use a second `aa-heading` at the appropriate level instead.

## Content guidance

### What to write
- Keep headings short and descriptive of the section or page they introduce.
- Use the `subheading` slot only for genuinely supporting copy, not for content that should itself be structurally a heading.

### How to write
- Use sentence case, not title case.
- Use British English spelling throughout.
- Avoid adverbs and filler words.

## Examples
_TODO: no story file exists for this component to source concrete example variants from._

## Things to consider
- Choose `level` based on correct document structure (heading outline), not on the visual size wanted — use CSS custom properties or a different `level` rather than skipping levels purely for appearance.
- The subheading is always a `<p>`, never a heading — don't rely on it appearing in the page outline or being announced as a heading by assistive tech.
- `--aa-heading-max-width` can override the default `48.75ch` cap if a specific layout genuinely needs a different wrap width.

## Accessibility

### Focus order
`aa-heading` renders no focusable elements itself; it does not participate in the tab order (unless slotted content, such as a link, does).

### Keyboard interactions
_TODO: no keyboard interactions — the component is not interactive._

### ARIA
- No ARIA roles are added or needed — the real `<h1>`–`<h6>` element supplies correct heading semantics natively.
- The subheading renders as a plain `<p>`, deliberately excluded from the heading/page outline.

### SEO and AI discovery
- Renders a genuine semantic heading element, so search engines, assistive tech and AI agents parsing the page see a real, correctly-leveled heading rather than simulated styling on a generic element.
- Correct, non-skipped heading levels should be used to preserve a meaningful document outline for crawlers and screen-reader users navigating by heading.

## Related components
- _TODO: no explicit related-components list found in source or stories._
