# Aa-icon

## Overview
`aa-icon` renders the exported AA system icon set (UI iconography such as arrows, checks and alerts) from `src/assets/system_icons`. Icons are monochrome and colour-inheriting (`currentColor`) by default, with an optional `color` prop to apply one of the alias intent colours or brand yellow.

## Anatomy
1. **Icon graphic** — the inlined SVG for the requested name and size.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `name` | one of the exported system icon names (e.g. `arrow-right`, `check`) | `''` | The icon to render. Names are normalised (lowercased, spaces/underscores to hyphens) before lookup. |
| `size` | `16` \| `20` \| `24` \| `32` \| `40` \| `48` | `24` | Rendered size in pixels (both width and height). |
| `color` | `danger` \| `warning` \| `info` \| `positive` \| `brand` \| _(empty, inherits `currentColor`)_ | `''` | Applies one of the alias intent colours or brand yellow. Deliberately not the full `--icon-*` token surface (action/neutral/decorative/etc.) — not needed yet. |
| `label` | string | `''` | Accessible label for the icon. When set, the icon is exposed to assistive technology as `role="img"` with that label; when empty, the icon is treated as decorative. |

## Behaviour
- **Loading**: icons are loaded asynchronously per name/size combination and cached after first load; nothing renders until the SVG has loaded.
- **Empty/unresolved states**: renders nothing if `name` is empty, `size` isn't one of the supported values, or the requested name has no matching asset.
- **Size fallback**: if a requested icon has no variant at the exact requested size, it falls back to the 24px variant, then to whatever size variant is available.
- **Colour**: by default, icon fill/stroke are rewritten to `currentColor` so the icon inherits the surrounding text colour; setting `color` overrides this with a fixed token colour instead.
- **Decorative by default**: without a `label`, the icon is marked `aria-hidden="true"` with `role="presentation"`; setting `label` switches it to `role="img"` with `aria-hidden="false"`.
- **Consumed by `aa-button`**: when slotted into `aa-button`'s icon slots, the button forces the icon to `1em` regardless of its own `size` property, so sizing set here is ignored in that context.

## Usage

### When to use
- General-purpose UI iconography — arrows, checks, alerts, chevrons, etc. — anywhere in the interface.
- Alongside text to reinforce meaning (e.g. a check icon next to a list item), typically with `label` left empty since the adjacent text already conveys the meaning.
- As a semantic icon on its own with no adjacent text (e.g. a standalone status icon), with `label` set so its meaning is available to assistive technology.

### When not to use
- Displaying an AA product/brand mark (e.g. "AA Cars") — use `aa-brand-icon` instead.
- An icon-only interactive control — use `aa-icon-button`, which wraps an icon in a proper button semantics and accessible name.

## Content guidance

### What to write
- `label`: only set it when the icon conveys meaning on its own and isn't already described by adjacent visible text.
- Keep the label a concise, accurate description of what the icon represents, not the icon's visual appearance (e.g. "Success" rather than "Green tick").

### How to write
- Use sentence case.
- Avoid adverbs and avoid jargon.
- Use British English spelling throughout.

## Examples
- **Default** — a single icon at 24px, inheriting colour.
- **Colors** — the same icon shown in each intent colour alongside the default.
- **Gallery** — every available system icon rendered together at a chosen size.
- **Available names** — a reference list of valid `name` values.

## Things to consider
- `name` values must match the normalised (lowercase, hyphenated) form of the exported asset filenames — check the `AvailableNames` story for the current list.
- `color` is limited to the alias intent set (danger/warning/info/positive) plus brand — it is not a general-purpose colour override.
- Inside `aa-button`, icon sizing is owned by the button and any `size` set here is overridden.

## Accessibility

### Focus order
Not a focusable element — `aa-icon` has no interactive semantics and does not participate in the tab order.

### Keyboard interactions

| Key | Action |
|---|---|
| _TODO: not applicable — the component is not interactive._ | |

### ARIA
- `role="img"` and `aria-hidden="false"` when `label` is set.
- `role="presentation"` and `aria-hidden="true"` when `label` is empty (decorative default).
- `aria-label` is set to `label` when provided.
- The underlying SVG itself is marked `focusable="false"` and `aria-hidden="true"` so it never introduces a second, redundant accessible node.

### SEO and AI discovery
- Decorative by default (`aria-hidden="true"`), so it doesn't add noise to the accessibility tree or page text when its meaning is already conveyed by adjacent text.
- Set `label` when the icon is the sole conveyance of meaning, so it's discoverable to assistive technology and any AI agent parsing the page.

## Related components
- `aa-brand-icon` — the equivalent component for AA product/brand marks rather than system iconography.
- `aa-icon-button` — wraps an icon in an interactive, accessible button control.
- `aa-button` — accepts `aa-icon` in its leading/trailing icon slots.
