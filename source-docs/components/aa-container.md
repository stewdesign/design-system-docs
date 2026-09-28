# Aa-container

## Overview
`aa-container` is a deliberately minimal content surface — padding, corner radius, and an optional background colour, nothing else. It's the sanctioned building block for wrapping content in a card-like surface without inventing bespoke layout props.

Figma verification: `Container` (node `17127:10874`) — Background Filled/Flat.

## Anatomy
1. **Surface** — a padded, rounded wrapper around the slotted content.
2. **Content slot** (default) — any content, including nested layout components like `aa-columns`.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `background` | `filled` \| `flat` | `filled` | Whether the surface has a visible background colour, or is transparent (padding and radius only). |

## Behaviour
- **Deliberately empty shell**: no `direction`/`justify`/`align` props, no "left"/"right" slots, no ratio prop — this is intentional, to avoid inviting bespoke, hard-to-maintain one-off layouts. For positioning, splitting content, or sizing by ratio, nest an `aa-columns` inside it instead.
- **Table scroll fade integration**: when `background="filled"`, the container sets a custom property (`--aa-table-scroll-fade-color`) matching its own surface colour, so a nested scrollable table's edge-fade blends correctly against it instead of assuming the page's default background.
- **Responsive behaviour**: none of its own; sizes to 100% of its container's inline size and stacks its content vertically with a consistent gap by default.

## Usage

### When to use
- Wrapping arbitrary content (text, a single component, or a nested layout) in a padded, optionally coloured card surface.
- As the surface for a composed layout, with `aa-columns` nested inside for positioning, splitting, or ratio-based sizing.
- Recreating structured card-like patterns (e.g. a plan/pricing card) using only real components — a heading, a radio, a list, a link — without needing a purpose-built card variant.

### When not to use
- When a fuller card anatomy (image, icon, tag, action slot) is needed — use `aa-card` instead.
- For custom positioning or splitting logic — don't add bespoke CSS; nest `aa-columns` inside the container instead, which is the sanctioned pattern.
- As a general-purpose layout primitive on its own — it has no layout props; pair it with `aa-columns` for anything beyond a single stacked column of content.

## Content guidance

### What to write
- Any content type is valid inside — text, components, or a nested layout — since the container makes no assumptions about its content's structure.
- When recreating a structured pattern (e.g. a plan card), use real semantic elements for each part (headings, lists, links) rather than generic `<div>`s.

### How to write
- Follow the content guidance of whatever component is nested inside (e.g. `aa-heading`, `aa-button`) — the container itself has no text of its own to author.
- Use British English spelling and sentence case in any nested copy.

_TODO: no do/don't examples specific to this component — content guidance applies to nested components instead._

## Examples
- **Default (filled)** — padded surface with a visible background.
- **Flat** — padding and radius only, no visible surface colour.
- **Split** — an `aa-columns` nested inside for a two-column layout (`mobile="1" tablet="2"`).
- **Ratio** — an `aa-columns` nested inside with an uneven ratio split (e.g. `tablet="2:1"`), such as a testimonial with an avatar attribution.
- **Plan card** — a structured "choose your cover" card built entirely from `aa-container` plus real nested components (`aa-radio`, a feature list, a link).

## Things to consider
- Resist the temptation to add custom CSS for positioning inside a container — nesting `aa-columns` is the sanctioned approach and keeps layouts consistent and maintainable across the system.
- `background="filled"` sets a fade-colour custom property intended specifically for a nested scrollable table — if no such table is nested, this property has no visible effect.
- The container's own gap between direct children is fixed (`--vertical-type-between-text`) — for a different gap or a non-stacked arrangement, nest `aa-columns` rather than trying to override the container's own layout.

## Accessibility

### Focus order
The container itself is not focusable and introduces no focus stops. Focus order follows the natural document order of any interactive content slotted inside it.

### Keyboard interactions
_TODO: no keyboard interactions specific to the container — interactive behaviour comes entirely from nested content._

### ARIA
- No ARIA roles or attributes are applied by the container itself — it's a purely presentational wrapper.
- Semantics for any nested content (headings, lists, form controls) come from those components themselves.

### SEO and AI discovery
- Renders as a plain `<div>` wrapper with no semantic role — all discoverability depends on the real semantic elements nested inside it (headings, lists, links).
- Because the container makes no structural assumptions, always ensure nested content uses correct heading levels and semantic HTML so the page's outline stays meaningful independent of the container's own styling.

## Related components
- `aa-card` — a fuller-featured surface with image/icon/tag/action anatomy, for when more structure is needed than a plain container.
- `aa-columns` — the layout primitive intended to be nested inside a container for splitting, positioning, or ratio-based sizing.
- `aa-heading` — commonly used for a container's own content heading.
