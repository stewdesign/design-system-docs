# Aa-tile

## Overview
`aa-tile` is a single interactive tile combining an icon, a heading and optional supporting text — used for grid-based navigation or selection, such as a set of product or service options. The whole tile is one clickable control: a real `<a>` when `href` is set, otherwise a real `<button>`.

## Anatomy
Figma verification: `Tile/Action` (node `18577:9361`) — Variant Icon/Illustration × Surface Outline/Filled × State Default/Hover/Focus × Standout False/True × Intent Default/Info/Positive; `Tile/Cancel` (node `18576:14861`) for `intent="danger"`; `Tile/Breakdown` (node `19184:50863`) for `surface="breakdown"`.

1. **Badge** — a corner `aa-badge` shown when `standout` is true and `intent` is `info` or `positive`; positioned absolutely at the top-left corner.
2. **Icon** (`icon` slot) — a plain `aa-icon` ("Icon" variant) or an `aa-brand-icon` ("Illustration" variant) slotted in, each already sized correctly on its own — `variant` is not a component prop, it's just which atom the consumer slots in.
3. **Heading** — the tile's main text, truncated with an ellipsis if it overflows.
4. **Description** — optional supporting text beneath the heading, shown only when `description` is set.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `heading` | string | `'Heading'` | The tile's main text. |
| `description` | string | `''` | Optional supporting text beneath the heading. |
| `surface` | `outline` \| `filled` \| `breakdown` | `outline` | Background/border treatment. `breakdown` is a solid brand-teal fill for the Breakdown product line. |
| `standout` | `boolean` | `false` | Adds a coloured border and a corner `aa-badge`. Only applies when `intent` is `info` or `positive`. |
| `intent` | `info` \| `positive` \| `danger` | `info` | Semantic tone. `danger` is a separate Figma component with no subtle look — background, border and text are fully tinted whenever set, with no `standout` toggle needed and no badge. |
| `badgeText` (`badge-text`) | string | `'New'` | Text shown in the corner badge when `standout` is active. |
| `href` | string | `''` | Renders the tile as an `<a>` instead of a `<button>` when set. |

## Behaviour
- **Hover**: background changes to `--surface-neutral-secondary-default` (or `--surface-action-breakdown-hover` for the `breakdown` surface).
- **Focus**: a dashed focus ring appears around the tile on `:focus-visible`.
- **Standout**: adds a coloured border (`--border-info-default` for `info`, `--border-positive-secondary` for `positive`) and shows a corner `aa-badge` with `badgeText`, reusing the badge's existing "information"/"positive" intent tokens verified pixel-for-pixel against this component's own Info/Positive citations. Does not apply when `intent="danger"`.
- **Danger intent**: applies fully tinted background, border and text (no subtle/default look, no badge) whenever `intent="danger"` is set, regardless of `standout`.
- **Breakdown surface**: solid brand-teal background and matching hover state; heading, description and icon switch to tertiary/info-tertiary text tokens for contrast against the fill.
- **Transitions**: colour and border changes use the shared interactive transition token; the focus ring uses the shared focus-ring transition token.
- **Responsive behaviour**: the host has a `min-inline-size` of 160px and grows to fill its container (`inline-size: 100%`); intended for use inside a grid such as `aa-columns`.

## Usage

### When to use
- A grid of navigational or selectable options, e.g. product categories, service types or account actions.
- A destructive or high-consequence action presented as a tile, e.g. cancelling a policy (`intent="danger"`).
- Highlighting a new or noteworthy option with a badge (`standout`).
- A Breakdown-branded action tile (`surface="breakdown"`).

### When not to use
- A single, standalone call-to-action outside a grid layout — use `aa-button` instead.
- An icon-only control with no heading — use `aa-icon-button` instead.
- A card-style container with more complex content than an icon, heading and short description — use `aa-card` instead.

## Content guidance

### What to write
- Keep the heading short enough not to wrap or truncate — it is clipped to a single line with an ellipsis.
- Use `description` only when the heading alone doesn't convey enough context to distinguish the tile from others in the same grid.
- Frontload the heading with the noun or action it represents, e.g. "Roadside" or "Report a breakdown", rather than a generic phrase.
- Keep `badgeText` to one or two words, e.g. "New" or "Saved".

### How to write
- Use sentence case for the heading and description.
- Use British English spelling throughout.
- Avoid adverbs like "simply", "just" or "easily".
- Avoid generic wording such as "Find out more" — say what the tile actually represents or does.

| Do ✅ | Don't ❌ |
|---|---|
| "Report a breakdown" | "Click here for breakdown help" |
| "Cancel renewal" | "Cancel Renewal:" |
| "Saved" | "You've saved money!" |

## Examples
- **Default tile** — outline surface, icon variant, no description.
- **Filled tile** — `surface="filled"`.
- **Tile with description** — supporting text beneath the heading.
- **Illustration tile** — an `aa-brand-icon` slotted in place of `aa-icon`.
- **Standout tile** — coloured border and badge, `intent="info"`.
- **Standout positive tile** — `intent="positive"`, custom `badgeText` ("Saved").
- **Danger tile** — fully tinted destructive treatment, e.g. "Cancel renewal".
- **Breakdown tile** — solid brand-teal fill, e.g. "Report a breakdown".
- **Tile as link** (`href` set) — renders an anchor styled identically to a tile.
- **Grid of tiles** — multiple tiles inside `aa-columns`, mixing surfaces, standout and default states.

## Things to consider
- `standout` has no visible effect when `intent="danger"` — danger always renders fully tinted with no badge, regardless of `standout`.
- The heading truncates with `white-space: nowrap` and an ellipsis — a heading longer than the tile's width will be clipped, so keep it concise.
- Don't nest another interactive element (e.g. a link or button) inside the icon slot — the whole tile is already a single `<a>` or `<button>`.
- The host has a 160px minimum width but no maximum — place tiles inside a constrained grid (e.g. `aa-columns`) to avoid them growing too wide.

## Accessibility

### Focus order
`aa-tile` participates in the natural tab order as either a `<button type="button">` or an `<a href>`, depending on whether `href` is set.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the tile or follows the link. |
| Space | Activates the tile (native `<button>` behaviour; does not apply to anchors). |

### ARIA
- No `role` override is needed — the semantic `<button>` or `<a>` element is used directly.
- _TODO: confirm whether the corner badge or icon needs to be hidden from assistive tech (e.g. `aria-hidden`) so only the heading/description are announced, since the source doesn't set this explicitly._

### SEO and AI discovery
- Renders as a real `<button>` or `<a>`, not a generic `<div>`, so semantics, focusability and link crawlability are native rather than simulated.
- When used for navigation, always set `href` so the destination is a real, crawlable link rather than a JavaScript-only click handler.
- The heading should describe the destination or action on its own (per the content guidance above), since it is the primary text assistive tech, search engines and AI agents will read for this control.

## Related components
- `aa-card` — for richer content than an icon, heading and short description.
- `aa-button` — a standalone call-to-action outside a grid layout.
- `aa-badge` — supplies the corner badge shown in the `standout` state.
- `aa-icon` / `aa-brand-icon` — supply the icon or illustration slotted into the tile.
- `aa-columns` — the grid layout typically used to arrange multiple tiles.
