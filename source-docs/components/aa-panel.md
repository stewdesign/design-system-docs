# Aa-panel

## Overview
`aa-panel` is a major content section within a page, owning the section's background colour, block spacing, and content width. Figma: `Panel` (node `18556:22474`). It sits in the composition `Page → Panel → Columns → content`, providing the themed surface that `aa-columns` and slotted content render inside.

## Anatomy
1. **Frame** (`part="frame"`) — the outer band; carries the `background` colour and horizontal/vertical section padding.
2. **Surface** (`part="surface"`) — centres and caps the content to the shared layout max inline size within the frame.
3. **Content** (`part="content"`) — a flex column with the shared vertical grid row-gap applied between top-level slotted children, so slotted elements don't need their own margins.
4. **Inset surface** (when `inset` is set) — an optional rounded, padded, contained surface in `inset-colour`, nested inside the outer frame.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `background` | `white` \| `grey` \| `midnight` \| `yellow` | `white` | Sets the outer frame's background colour and drives the theme scope (unless `inset` is set). |
| `spacing` | `default` \| `tight` | `default` | Controls block (vertical) padding between panels — `tight` uses a reduced spacing token. |
| `inset` | `boolean` | `false` | Adds a rounded, padded, contained surface inside the outer frame, coloured by `inset-colour`. |
| `inset-colour` (`insetColour`) | `white` \| `grey` \| `midnight` \| `yellow` | `yellow` | Colour of the inset surface; only visible/relevant when `inset` is true, and drives the theme scope while `inset` is set. |
| `narrow` | `boolean` | `false` | Caps content to a centred 48rem measure — equivalent to the `1-col-narrow` Figma layout. |

## Behaviour
- **Theming**: the component sets a scoped colour theme (`light`, `grey`, `dark`, or `yellow`) based on whichever surface actually holds the content — `background` normally, or `inset-colour` when `inset` is true — so text and button contrast adapt automatically without the consumer managing theme separately. This re-syncs whenever `background`, `inset`, or `insetColour` changes.
- **Spacing**: `spacing="default"` applies the standard between-panels vertical padding token; `spacing="tight"` applies a reduced token, both driven purely by CSS attribute selectors — no animation.
- **Inset surface**: when `inset` is set, the inner surface gets padding, a large corner radius, `overflow: hidden`, and the `--surface-default-primary` background, visually separating it from the outer frame band.
- **Narrow**: when `narrow` is set, the content column is capped to 48rem and centred, independent of the outer frame's own max width.
- **Slotted spacing**: top-level slotted children get their own block margins zeroed and instead rely on the panel's row-gap, so spacing between sections stays consistent regardless of what's slotted in.
- **Slotted headings**: a slotted `aa-heading` has its max-width overridden to 100% (rather than its own default reading-length cap), so a section heading wraps at the panel's own measure, not a narrower one tuned for body copy.
- **Entrance animation**: the panel observes its own entrance into the viewport (`observeEntrance`/`unobserveEntrance`) to drive the shared motion-stagger styles on its content, and cleans this up on disconnect.
- **Responsive behaviour**: inline padding, max inline size, and (for `narrow`) the capped content width all come from the shared responsive layout host styles, so the panel adapts across breakpoints via shared layout tokens rather than component-specific media queries.

## Usage

### When to use
- Any major page section that needs its own background colour, section-level spacing, and a consistent content width — the standard container for `aa-columns` and section content.
- When a section needs visual separation via colour (e.g. alternating white/grey panels down a page) or an accent inset block (e.g. a callout in `yellow`) within an otherwise neutral section.
- When the content should be constrained to a narrow, centred reading measure (`narrow`) rather than the panel's full width.

### When not to use
- For layout/column structure within a section — that's `aa-columns`' job; `aa-panel` only owns the outer band, width and spacing.
- For a small, local grouping of content that doesn't represent a full page section — use a lighter-weight container instead. _TODO: name the appropriate component once one exists._
- When content needs its own independent spacing rhythm rather than sharing the row-gap contract described above — check whether the row-gap/margin-zeroing behaviour fits before slotting complex nested layouts directly.

## Content guidance

### What to write
- Content is fully open — headings, body copy, buttons, columns — since `aa-panel` only supplies the surface, not content structure; author copy per the guidance of whatever's slotted in (e.g. `aa-heading`, `aa-button`).
- When using `inset`, keep inset content self-contained (e.g. a callout or highlighted block) since it visually reads as a distinct surface from the outer panel.

### How to write
- Follow the underlying content components' own copy guidance (e.g. `aa-heading`, `aa-button`) — `aa-panel` itself carries no text.
- When choosing `background`/`inset-colour`, remember the choice drives the whole section's colour theme, including text and button contrast — pick colours for their communicative role (e.g. `yellow` for emphasis/brand moments, `midnight` for a dramatic dark section), not just decoration.

## Examples
- **White panel** — default background, standard section.
- **Grey panel** — `background="grey"`, for visual separation between white sections.
- **Midnight panel** — `background="midnight"`, dark themed section.
- **Yellow panel** — `background="yellow"`, brand-accent themed section.
- **Tight spacing** — `spacing="tight"`, reduced vertical padding between panels.
- **Inset (white with yellow inset)** — `inset`, `inset-colour="yellow"`, a contained accent block within a white section.
- **Inset midnight (grey with midnight inset)** — `background="grey"`, `inset`, `inset-colour="midnight"`.
- **Narrow** — `narrow`, content capped to a centred 48rem measure.
- **Surface matrix** — all four `background` values and all four `inset-colour` values shown together for comparison.

## Things to consider
- Choosing `background`/`inset-colour` changes the active colour theme for everything slotted inside — verify text and interactive components (e.g. `aa-button`) still read correctly against your chosen combination via the surface matrix example.
- The panel's row-gap zeroes slotted elements' own block margins — don't rely on a slotted element's default margin for spacing; the panel controls that spacing.
- `narrow` and the outer frame's own max inline size both cap content width — `narrow` further restricts within that, it doesn't override it, so combining them is expected to still respect the outer max width.
- `inset` and `inset-colour` only take effect together — setting `inset-colour` alone without `inset` has no visible effect, and the theme scope will still follow `background`.

## Accessibility

### Focus order
`aa-panel` renders a `<section>` wrapper with no focusable elements of its own; focus order is entirely determined by whatever is slotted inside (e.g. `aa-columns`, `aa-button`).

### Keyboard interactions
Not applicable — the component itself has no interactive elements; keyboard behaviour is inherited from slotted content.

### ARIA
- No ARIA roles or attributes are applied by `aa-panel` itself; it uses a plain `<section>` for the frame.
- _TODO: confirm whether a section-level heading/landmark relationship (e.g. `aria-labelledby` pointing at a slotted heading) is expected for page-level `<section>` semantics — not present in this file._

### SEO and AI discovery
- Renders a semantic `<section>` rather than a generic `<div>`, giving page structure tools a real sectioning element to key off.
- Because `aa-panel` sets no accessible name or heading relationship itself, a slotted heading (e.g. `aa-heading`) inside each panel is what actually gives search engines and AI agents a way to identify each section's topic — always include one per panel for discoverability.

## Related components
- `aa-columns` — provides column layout structure inside a panel's content.
- `aa-heading` — commonly slotted as a panel's section heading; its max-width is specially overridden inside a panel.
- `aa-button` — commonly slotted as panel content, with contrast automatically handled by the panel's theme scope.
