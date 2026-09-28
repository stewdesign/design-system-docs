# Aa-brand-icon

## Overview
`aa-brand-icon` renders the exported AA brand asset set (product/brand marks such as "AA Cars") from `src/assets/brand_icons`, backed directly by the verified size and treatment combinations present in the file naming convention.

## Anatomy
1. **Icon graphic** — the inlined SVG mark for the requested brand name, size and treatment.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `name` | one of the exported brand icon names (e.g. `aa-cars`) | `''` | The brand icon to render. Names are normalised (lowercased, spaces/underscores to hyphens) before lookup. |
| `size` | `medium` \| `large` | `medium` | Rendered size — `medium` is 32px, `large` is 48px. |
| `treatment` | `black` \| `white` \| `layer-white` \| `layer-yellow` | `black` | Colour treatment of the mark, matched against the exported asset variants for that name/size; falls back to `black` if the requested treatment isn't available. |
| `label` | string | `''` | Accessible label for the icon. When set, the icon is exposed to assistive technology as `role="img"` with that label; when empty, the icon is treated as decorative. |

## Behaviour
- **Loading**: icons are loaded asynchronously per name/size/treatment combination and cached after first load; nothing renders until the SVG has loaded.
- **Empty/unresolved states**: renders nothing if `name` is empty or the requested name/size/treatment combination has no matching asset.
- **Treatment fallback**: if a requested `treatment` has no exported variant for the given name/size, the component falls back to the `black` treatment for that name/size.
- **Decorative by default**: without a `label`, the icon is marked `aria-hidden="true"` with `role="presentation"`; setting `label` switches it to `role="img"` with `aria-hidden="false"`.
- **Sizing**: sized via CSS custom property per the `size` value; width is fixed and height is `auto`, so the SVG's own aspect ratio is preserved rather than being forced square.

## Usage

### When to use
- Displaying a recognisable AA product or brand mark (e.g. "AA Cars", "AA Insurance") in navigation, cards or promotional content.
- Where a specific colour treatment is needed to sit correctly on a given background (e.g. `white` or `layer-white` on a dark or photographic background).

### When not to use
- General-purpose UI iconography (arrows, checks, alerts, etc.) — use `aa-icon` instead.
- Where no matching brand asset exists for the required name — check `AvailableNames` in the Brand Icon story before using a name.

## Content guidance

### What to write
- `label`: only set it when the icon conveys meaning on its own (e.g. not accompanied by adjacent text naming the same brand); otherwise leave it empty so the icon stays decorative.
- Keep the label a concise, accurate name of the brand/product the icon represents.

### How to write
- Use sentence case.
- Avoid adverbs and avoid jargon.
- Use British English spelling throughout.

## Examples
- **Default** — a single brand icon at `medium` size, `black` treatment.
- **Gallery** — every available brand icon rendered together at a chosen size/treatment.
- **Available names** — a reference list of every valid `name` value.

## Things to consider
- `name` values must match the normalised (lowercase, hyphenated) form of the exported asset filenames — check the `AvailableNames` story for the current list.
- Not every name/size/treatment combination is guaranteed to exist; the component silently falls back to `black` or renders nothing rather than erroring.
- `size` only accepts `medium`/`large` — there's no arbitrary numeric sizing, unlike `aa-icon`.

## Accessibility

### Focus order
Not a focusable element — `aa-brand-icon` has no interactive semantics and does not participate in the tab order.

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
- Decorative by default (`aria-hidden="true"`), so it doesn't add noise to the accessibility tree or page text when the brand name is already conveyed elsewhere.
- Set `label` when the icon is the only conveyance of the brand name, so it's discoverable to assistive technology and any AI agent parsing the page.

## Related components
- `aa-icon` — the general-purpose system icon component for UI iconography.
