# Aa-header-dropdown

## Overview
`aa-header-dropdown` is the internal mega-menu panel `aa-header` renders and controls for its desktop primary navigation. It is not authored directly by consumers of `aa-header` — instead, panel content is slotted into `aa-header`'s own `slot="dropdown"`, and `aa-header` mounts and toggles this component itself. It provides the scrim, panel surface and open/close transition; the panel content (link columns, cards, buttons) is authored plainly in the default slot by whatever composes it.

Figma verification: `Drop down` (node `3011:3505`), Breakdown (`3011:3506`) and Insurance (`3011:3547`) variants.

## Anatomy
1. **Scrim** — a fixed, full-viewport dimming/blur layer behind the panel.
2. **Panel** — the light-surface container (`role="region"`) that holds the slotted content.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `open` | `boolean` (reflected attribute) | `false` | Shows the panel and scrim, and makes both interactive. When `false`, both are kept in the DOM but marked `inert` so they can transition rather than being removed outright. |

## Behaviour
- **Open/close transition**: the scrim fades in (background and blur) and the panel fades in with a slide/scale-up (`translateY(-8px) scale(0.98)` to resting position), both over 260ms with the same easing curve used by `aa-date-picker`'s popover and `aa-progress-stepper`'s dropdown.
- **Inert while closed**: the panel and scrim are kept in the DOM and toggled with the `inert` attribute (not `hidden`), so the transition can actually play; `inert` also removes them from the accessibility tree and tab order while closed.
- **Escape to close**: pressing <kbd>Escape</kbd> anywhere inside the panel closes it and dispatches `dropdown-close`.
- **Click scrim to close**: clicking the scrim closes the panel and dispatches `dropdown-close`.
- **Always light theme**: the panel always renders in the light palette, never inheriting `aa-header`'s yellow scope — its stylesheet re-reads and rewrites the shared light-scope tokens onto `:host` directly, since the usual `setAaScopedTheme` escape hatch can't reach into another component's shadow root.
- **Stacking with aa-header**: the scrim is `position: fixed; inset: 0` and dims the whole viewport, but `aa-header` gives its own yellow band a higher z-index, so the band stays visible and undimmed above the scrim.

## Usage

### When to use
- Never authored directly — it is rendered internally by `aa-header` whenever a slotted `aa-menu`'s `label` matches a `data-dropdown` panel supplied to `aa-header`'s `slot="dropdown"`.

### When not to use
- Do not instantiate `aa-header-dropdown` directly in application code; compose mega-menu content through `aa-header`'s `dropdown` slot instead.

## Content guidance

### What to write
- _TODO: content guidance is owned by whatever is slotted into the panel (link columns, `aa-quick-quote-card`, `aa-button-group`) rather than by this component itself._

### How to write
- _TODO: as above — see the content guidance for the slotted components._

## Examples
- **Breakdown mega menu** — link columns, a secondary "Broken down?" group and a quick-quote card, opened by hovering/focusing the "Breakdown" primary link.
- **Insurance mega menu** — the same layout pattern with insurance-specific links and card.
- _(See `aa-header`'s story file for the full set of seven mega-menu panels, one per primary nav item.)_

## Things to consider
- The component owns its own open/close state via the `open` property, but in practice `aa-header` drives it entirely — setting `open`, listening for `dropdown-close`, and managing hover/focus timing (a 350ms close delay) so the panel doesn't close as the pointer travels from the nav link down into it.
- Content is authored plainly in the default slot (ordinary `<a>` links, `aa-quick-quote-card`, `aa-button-group`) rather than via a structured property, so any markup can be slotted in.
- Under `prefers-reduced-motion`, _TODO: confirm whether the open/close transition is adjusted; not addressed in the component source._

## Accessibility

### Focus order
While closed, the panel and scrim are `inert`, removing all descendants from the tab order. While open, focus order follows the slotted content's own document order.

### Keyboard interactions

| Key | Action |
|---|---|
| Escape | Closes the panel (fires `dropdown-close`). |

### ARIA
- The panel has `role="region"`.
- Both the scrim and panel are marked `inert` while closed, removing them from the accessibility tree entirely rather than relying on `aria-hidden` alone.

### SEO and AI discovery
- _TODO: not addressed in the component source — see `aa-header`'s own SEO/AI discovery notes for how mega-menu links are exposed._

## Related components
- `aa-header` — owns and controls this component; the only place it should be used.
- `aa-menu` — the primary nav item whose `label` is matched against a slotted panel's `data-dropdown` attribute.
- `aa-quick-quote-card`, `aa-button-group` — typically slotted inside the panel content.
