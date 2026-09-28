# Aa-input-legend

## Overview
`aa-input-legend` is an internal primitive with the same label/description/helper shape as `aa-input-label`, but for a `<fieldset>`'s `<legend>` — a heading over a group of inputs (e.g. a radio group), in bigger heading-weight type rather than the input-label type scale. Figma models it as a genuinely separate component (its own node, its own type sizes), not a variant of Label, so it stays a separate component rather than an "as" prop on `aa-input-label`. It is not part of the public component API, so it has no story of its own.

Figma reference: `.Legend` (node `19577:10905`).

## Anatomy
1. **Label** — the legend text, in heading-weight type.
2. **Description** — an optional static hint line, shown when `helper` is not set.
3. **Helper** (`aa-input-helper`) — an optional disclosure, shown instead of `description` when `helper` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Legend label'` | The legend text. |
| `description` | string | `''` | Static description line, shown only when `helper` is not set. |
| `helper` | string | `''` | Button text for the description-as-disclosure alternative; when set, replaces `description` as the second line. |
| `size` | `large` \| `small` | `small` | `large` uses the same bold display face as page headings (AA Sans); `small` uses the input label's own type family. Figma models these as two different typefaces, not just two sizes of one. |
| `error` | `boolean` | `false` | Recolours the legend text to the danger colour. |

## Behaviour
- `helper` always takes priority over `description` as the second line — the two never stack.
- `size="large"` and `size="small"` switch typeface family as well as size — they are modelled in Figma as genuinely different type styles, not a single scaled-down face.
- `error` recolours the legend label only.

## Usage

### When to use
- As the heading over a group of related inputs, e.g. inside a `<fieldset>` or `aa-input-group`, where the heading needs more visual weight than an individual input's label.

### When not to use
- As the label for a single input — use `aa-input-label` instead, which uses the smaller input-label type scale.
- As a standalone public component — it isn't intended to be used directly outside of a group-level component.

## Content guidance

### What to write
- Make legend text short and direct, describing the group of inputs it introduces.
- Use `description` or `helper` to add any context the legend alone doesn't cover.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout.

## Examples
_TODO: no dedicated story exists for this component — it is only exercised indirectly via the group-level components that compose it (e.g. `aa-input-group`)._

## Things to consider
- Not part of the public component API — it has no story of its own.
- Only one of `description` or `helper` is shown at a time.
- `size="large"` pulls in a separate heading font family — confirm the font is loaded wherever this variant is used.

## Accessibility

### Focus order
Not focusable itself — it contributes no interactive element other than the `aa-input-helper` disclosure when `helper` is set.

### Keyboard interactions
_TODO: keyboard interactions, when present, are owned by the composed `aa-input-helper` — see its own documentation._

### ARIA
- No ARIA role is applied to the legend itself; association with the grouped inputs (e.g. via `aria-labelledby`) is the responsibility of whichever component composes `aa-input-legend`.

### SEO and AI discovery
_TODO: not determinable from source — no SEO/AI-specific behaviour documented; not a standalone public component so not typically an independent target for discovery._

## Related components
- `aa-input-helper` — composed when `helper` is set, for the description-as-disclosure alternative.
- `aa-input-label` — the equivalent primitive for a single input's own label.
- `aa-input-group` — a component that composes `aa-input-legend`-style labelling for a group of inputs.
