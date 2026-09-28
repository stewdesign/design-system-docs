# Aa-pagination-control-button

## Overview
`aa-pagination-control-button` is a round icon-only button for stepping to the previous or next item in a paginated sequence. It renders a chevron icon in either direction and is used as a sub-part of `aa-pagination-counter` (previous/next controls either side of the "page of total" label); it also appears standalone in the Pagination story as a raw building block, but has no independent usage pattern of its own beyond that.

## Anatomy
1. **Button** — a circular 48×48px `<button>` (`part="button"`), bordered, transparent background.
2. **Icon** — a 24px `aa-icon`, `chevron-left` for `direction="previous"` or `chevron-right` for `direction="next"`.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `direction` | `previous` \| `next` | `previous` | Sets which chevron icon is shown. |
| `disabled` | `boolean` | `false` | Disables the button natively. |

## Behaviour
- **Hover**: background fills with `--surface-default-secondary` when not disabled.
- **Disabled**: border and icon colour switch to the muted `--border-default-secondary` token and the cursor becomes `default`.
- **Transitions**: colour/background changes use the shared interactive transition token; focus rings use the shared focus-ring transition token.
- The component holds no internal page-stepping logic itself — it is a presentational control; `aa-pagination-counter` supplies the `disabled` state and click handling.

## Usage

### When to use
- As the previous/next control inside `aa-pagination-counter` (its only current composed usage).
- _TODO: confirm any sanctioned standalone use — the current story shows it in isolation only to illustrate its default/disabled states, not as a recommended pattern on its own._

### When not to use
- As a general-purpose icon button — use `aa-icon-button` for standalone icon-only actions unrelated to pagination.
- For dot-style page indicators — use `aa-pagination-simple` instead.

## Content guidance

### What to write
- No visible label text — the icon alone communicates direction. There is no configurable text content.
- _TODO: confirm the accessible name applied when composed — this component sets no `aria-label` itself, so the label must come from a parent or wrapping context._

### How to write
_TODO: not applicable — the component carries no copy of its own; see the parent component (`aa-pagination-counter`) for any accessible-name guidance._

## Examples
- **Previous button (enabled)** — default state, hoverable.
- **Previous button (disabled)** — muted border/icon, not interactive.
- **Next button** — `direction="next"`, chevron pointing right.

## Things to consider
- This is documented as an internal sub-part of `aa-pagination-simple`/`aa-pagination-counter` composition, with limited standalone usage — check the parent component before reaching for this directly.
- The button carries no accessible name of its own (no `aria-label`); a consumer using it outside `aa-pagination-counter` needs to supply one. _TODO: confirm whether this is intentional or a gap._
- Fixed 48×48px size meets the 44px minimum touch target.

## Accessibility

### Focus order
Participates in the natural tab order as a native `<button>`; the native `disabled` attribute removes it from the tab order when `disabled` is set.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the button. |
| Space | Activates the button (native `<button>` behaviour). |

### ARIA
- No ARIA attributes are set by this component itself.
- _TODO: confirm expected accessible name — `aa-pagination-counter` does not currently set `aria-label` on the buttons it renders either, so the accessible name relies solely on the chevron icon; this should be verified against the source._

### SEO and AI discovery
- Renders as a real `<button>`, so it's natively focusable and operable rather than a simulated click target.
- Because it has no visible or programmatic label, it offers minimal semantic information to assistive tech, search engines, or AI agents on its own — any consuming context should supply an accessible name.

## Related components
- `aa-pagination-counter` — composes two of these buttons around a "page of total" label.
- `aa-pagination-simple` — an alternative, dot-based pagination pattern that does not use this button.
- `aa-icon` — supplies the chevron icon.
