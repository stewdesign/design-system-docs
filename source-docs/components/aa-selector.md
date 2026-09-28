# Aa-selector

## Overview
`aa-selector` is a card-style selection control that wraps a checkbox, radio or switch input in a richer, clickable card with a label, description, optional media, price and tags. It matches Figma's `Single/Selector` component (node `17348:7569`), covering the Checkbox, Radio and Switch variants in one component.

## Anatomy
1. **Card** — the clickable `<label>` wrapping the whole control, with a border that thickens/recolours when checked and a dashed focus ring.
2. **Control** — the visible checkbox square, radio dot or switch track/thumb, depending on `input-type`.
3. **Content** — the label, description and optional helper disclosure (via `aa-input-label`), plus optional tags and price rows.
4. **Tags row** (`tags` slot, shown when `has-tags`) — arbitrary slotted content, typically `aa-tag`.
5. **Price row** (shown when `has-price`) — a price value and a period (e.g. "From £16.19" / "month").
6. **Media** (`media` slot, shown when `has-media`) — trailing visual area; falls back to a fixed 32px icon (`icon` property) when nothing is slotted.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `inputType` (`input-type`) | `checkbox` \| `radio` \| `switch` | `checkbox` | Which native input semantics and control visual the card uses. |
| `checked` | `boolean` | `false` | Whether the card is selected. |
| `label` | string | `'Label'` | The card's visible label. |
| `description` | string | `'Description'` | Supporting text shown under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `hasMedia` (`has-media`) | `boolean` | `true` | Shows the trailing media area. Figma default: true. |
| `icon` | string | `'car'` | Icon name for the default media content, used only when nothing is slotted into `media`. Fixed at 32px — not configurable, matching Figma's `Car` fallback, which never varies. |
| `hasPrice` (`has-price`) | `boolean` | `false` | Shows the price row. Figma default: false. |
| `price` | string | `'From £16.19'` | The price value text. |
| `pricePeriod` (`price-period`) | string | `'/ month'` | The price period text. |
| `hasTags` (`has-tags`) | `boolean` | `false` | Shows the tags row (content comes from the `tags` slot). Figma default: false. |
| `name` | string | `''` | Form field name; also used to group radio cards together. |
| `value` | string | `'on'` | The native input's value. |

## Behaviour
- **Selecting**: clicking anywhere on the card (it's a `<label>`) toggles the underlying native input and updates `checked`, dispatching a bubbling `change` event.
- **Radio grouping**: when `inputType="radio"` and a `name` is set, checking one card automatically unchecks every other `aa-selector` radio card sharing that `name`, scoped to the nearest ancestor `<form>` (or the document if there isn't one).
- **Hover**: the control (checkbox/radio/switch) gets a hover background and border colour; the card border itself doesn't change on hover.
- **Checked styling**: the card border switches to the primary border colour; the checkbox fills and shows a check icon, the radio dot scales in, or the switch thumb slides across and turns white, depending on `input-type`.
- **Focus**: a dashed focus ring appears around the whole card (not just the control) on `:focus-visible` of the hidden native input, sitting behind the card so it doesn't affect its layout.
- **Media fallback**: when nothing is slotted into `media`, a fixed 32px `aa-icon` (from the `icon` property) is shown instead; when something is slotted, it fully replaces the fallback icon.
- **Border width stability**: the card's border is always rendered at the "selected" thickness, even when unchecked — only its colour changes on toggle, so nothing inside the card shifts by a pixel when the state changes.
- **Responsive behaviour**: the card has a `min-width` of 180px and a `max-width` of 320px; content wraps within that range, and tags/price rows wrap onto multiple lines if needed.

## Usage

### When to use
- A single option that needs more visual weight or content than a plain checkbox/radio — e.g. product tiles with a price, an icon, or tags.
- Grouped, mutually exclusive choices with `input-type="radio"` and a shared `name`, where richer context (price, tags, media) helps the user compare options.
- On/off toggles that benefit from a card layout, using `input-type="switch"`.

### When not to use
- A plain, low-context checkbox or radio with no supporting content — use `aa-checkbox` or `aa-radio` directly instead.
- A single, isolated on/off setting with no surrounding card content — use `aa-switch` directly instead.
- A long list of simple, text-only options — use `aa-select` for a more compact, scrollable list.

## Content guidance

### What to write
- Keep the `label` short and specific to the option being described (e.g. a product name or plan tier).
- Use `description` for the one or two lines of supporting detail a user needs to decide, and `helper` only when that description is long enough to be worth collapsing.
- Only enable `has-tags`/`has-price` when the option genuinely has that information — don't show an empty or placeholder price.
- Keep tag content (via the `tags` slot) to short, scannable labels, consistent with `aa-tag` content guidance.

### How to write
- Use sentence case, not title case.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily".
- Write prices exactly as agreed with the numbers style (e.g. "From £16.19 / month") rather than abbreviating or rounding without a reason.

| Do ✅ | Don't ❌ |
|---|---|
| "Comprehensive cover" | "COMPREHENSIVE COVER" |
| "From £16.19 / month" | "16.19 quid a month" |
| "Includes breakdown cover" | "Simply includes breakdown cover" |

## Examples
- **Checkbox** — default `input-type="checkbox"`.
- **Selected checkbox** — `checked` true.
- **Radio** — `input-type="radio"`.
- **Switch** — `input-type="switch"`.
- **With helper** — description collapsed behind a helper disclosure button.
- **With price** — price row shown.
- **With tags** — tags row with slotted `aa-tag` content.
- **No media** — trailing media area hidden.
- **Radio group** — two radio cards sharing a `name`, only one selectable at a time.
- **State matrix** — checkbox, radio, switch, helper, price, tags and no-media variants side by side.

## Things to consider
- Radio grouping is scoped by shared `name` and nearest `<form>` ancestor (or the document) — cards outside that scope with the same `name` won't be kept in sync.
- The `icon` fallback is fixed at 32px and not configurable — if a different size is needed, slot custom content into `media` instead.
- Don't nest another interactive control (e.g. a button) inside the `tags` or `media` slot content in a way that would conflict with the card's own click target.
- The card's minimum width (180px) can compress content on narrow layouts — check tag/price wrapping at small viewport widths.

## Accessibility

### Focus order
`aa-selector` participates in the natural tab order via its visually-hidden native `<input>`, which the `<label>` wraps. It occupies a single tab stop per card, consistent with `aa-checkbox`/`aa-radio`/`aa-switch`.

### Keyboard interactions

| Key | Action |
|---|---|
| Space | Toggles the checkbox or switch; selects the radio if not already selected (native input behaviour). |
| Arrow keys | Move selection between radio cards sharing the same `name`, within the browser's native radio-group behaviour. |

### ARIA
- Native input `type` (`checkbox` or `radio`, with `switch` also rendering as a `checkbox`) provides the base semantics; no `role` override is used.
- `aria-label` on the native input mirrors the visible `label`.
- `aria-describedby` on the native input references the label's description/helper, plus the tags and price rows' `id`s when present, so assistive tech reads the full card context, not just the label.

### SEO and AI discovery
- Renders a real native `<input>` wrapped in a `<label>`, not a simulated clickable `<div>`, so form semantics, focusability and state are native rather than recreated in script.
- All card content relevant to the decision (label, description, tags, price) is wired into `aria-describedby`, so assistive technology and AI agents parsing the page get the same context a sighted user sees, not just the visible label text.

## Related components
- `aa-checkbox` — the plain, low-context checkbox control this card wraps.
- `aa-radio` — the plain, low-context radio control this card wraps.
- `aa-switch` — the plain, low-context switch control this card wraps.
- `aa-select` — a more compact alternative for a longer list of simple, text-only options.
- `aa-tag` — typically slotted into the `tags` row.
- `aa-input-label` — supplies the label/description/helper row shared across form fields.
