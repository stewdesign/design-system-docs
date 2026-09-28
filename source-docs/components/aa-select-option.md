# Aa-select-option

## Overview
`aa-select-option` is an internal primitive that represents a single choice inside an `aa-select` dropdown. It has no story of its own and is not designed to be used standalone — document and use it only as a light-DOM child of `aa-select`, the same composition pattern as `aa-tabs`/`aa-tab`.

## Anatomy
1. **Option row** — the clickable area (`role="option"`) holding the slotted content, with padding and rounded corners matching the listbox.
2. **Content slot** (default slot) — the option's label content, provided by the consumer as plain text or markup.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `value` | string | `''` | The option's value, matched against the parent `aa-select`'s `value` to determine selection. |
| `active` | `boolean` | `false` | Keyboard-highlighted but not yet committed. Managed entirely by the parent `aa-select`; not intended to be set directly by a consumer. |
| `selected` | `boolean` | `false` | Reflects whether this option matches the parent's current value. Managed entirely by the parent `aa-select`; not intended to be set directly by a consumer. |

## Behaviour
- **Click**: dispatches an `option-select` event that bubbles and composes across shadow boundaries, which the parent `aa-select` listens for to commit the selection.
- **Hover**: dispatches an `option-hover` event, which the parent uses to move keyboard highlighting to the hovered option (mouse and keyboard highlighting stay in sync).
- **Selected styling**: when `selected` is true, the label switches to a heading colour and medium weight to distinguish the current value from the rest of the list.
- **Active styling**: when `active` is true (keyboard-highlighted), the row gets a hover-style background so the highlighted option is visually distinct while the listbox is open.
- **Responsive behaviour**: the option fills the width of its parent listbox; it has no independent responsive behaviour.

## Usage

### When to use
- As a direct child of `aa-select`, one per selectable value.

### When not to use
- Anywhere outside `aa-select` — it has no standalone story or supported usage and depends entirely on its parent for state (`active`, `selected`) and behaviour (keyboard navigation, commit-on-select).
- As a rich multi-line or heavily interactive item — keep option content to the label text `aa-select` needs for its display value; if a selection needs richer content, review with the design system team.

## Content guidance

### What to write
- Keep the label content short enough to fit on one line so it doesn't wrap inside the listbox or get truncated in the closed trigger.
- Make sure the label text alone is meaningful — `aa-select` uses each option's own text content as its accessible display value.
- Order options in a sensible, predictable sequence (e.g. alphabetical or by likelihood of use) since the component doesn't group or sort them itself.

### How to write
- Use sentence case, not title case.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily".

| Do ✅ | Don't ❌ |
|---|---|
| "Comprehensive" | "COMPREHENSIVE" |
| "Third party, fire and theft" | "3rd Party Fire & Theft (TPFT)" |

## Examples
- **Option list** — see `aa-select` documentation; every `aa-select` example composes a set of `aa-select-option` children.

_TODO: no standalone story exists for this component; examples are documented under `aa-select` only._

## Things to consider
- Never set `active` or `selected` yourself — both are owned and synced by the parent `aa-select` on every render; manual changes will be overwritten.
- The component assigns its own `id` (via the parent's slot-change handler) if one isn't already present — don't rely on a specific `id` format.
- Label content should be plain enough that `textContent` (used by `aa-select` for its display value) reads correctly; avoid burying the meaningful text inside deeply nested markup or icons only.

## Accessibility

### Focus order
`aa-select-option` is never itself a focus stop. Real focus stays on the parent `aa-select` trigger at all times; the option is only ever keyboard-highlighted via `aria-activedescendant` pointing at its `id` from the parent, matching how a native `<select>` keeps focus on itself while its popup is open.

### Keyboard interactions
_TODO: keyboard interactions (arrow keys, Enter, Escape) are implemented and documented on the parent `aa-select`, not on this component directly — see `aa-select.md`._

### ARIA
- `role="option"` — identifies the element as a selectable item within the parent's `role="listbox"`.
- `aria-selected` — reflects the `selected` property (`"true"`/`"false"`), telling assistive technology which option matches the current value.

### SEO and AI discovery
- Renders as a real `role="option"` element inside the parent's listbox rather than a generic clickable `<div>`, so assistive technology can correctly enumerate the available choices.
- Because this primitive has no page or route of its own, SEO considerations apply only at the `aa-select` level.

## Related components
- `aa-select` — the required parent; owns all selection, keyboard and open/close behaviour for its `aa-select-option` children.
