# Aa-pill

## Overview
`aa-pill` is the individual selectable segment rendered inside `aa-segmented-control`. It's an internal primitive — not intended to be reached for directly — that displays a label, an optional leading icon and an optional notification badge, and reflects its own default/hover/active/focus visual states.

## Anatomy
1. **Icon slot** (`slot="icon"`) — optional leading icon, coloured to match the label via `currentColor`.
2. **Label** — the pill's text, via the default (unnamed) slot.
3. **Badge** — a small circular indicator shown when `badge` is true, e.g. to flag a notification against that option.

Figma verification: `.Segmented Pill` (node `17285:15725`) — Size Small/Large × State Default/Hover/Active/Focus.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Whether this pill is the currently selected segment. Reflects to an attribute. |
| `size` | `small` \| `large` | `small` | Control height, padding and type scale. |
| `badge` | `boolean` | `false` | Shows a small circular badge on the pill, e.g. to indicate a notification. |

## Behaviour
- **Selection**: clicking the pill dispatches a bubbling, composed `pill-select` event, which the parent `aa-segmented-control` listens for to update which pill is `active`.
- **Active state**: the active pill gets a solid background (`--surface-neutral-primary-default`), a tertiary text colour and bold weight. At `size="large"`, the active state also steps down to the medium type scale rather than reusing Large's own larger size — bold text at that size read as too heavy.
- **Hover**: inactive pills show a secondary neutral background on hover; the active pill has no separate hover treatment.
- **Focus**: a dashed focus ring appears around the pill on `:focus-visible`, expanding slightly outward from its edge.
- **Roving tabindex**: `tabindex` is `0` only when `active`, and `-1` otherwise — this supports the parent's roving-focus keyboard pattern rather than every pill being independently tabbable.
- **Focus delegation**: calling `.focus()` on the host element focuses its internal `<button>` directly.
- **Responsive behaviour**: the pill has no responsive breakpoints of its own; its label has a minimum inline size (2.5rem at `small`, 4rem at `large`) and the pill otherwise sizes to its content, wrapping only if forced by the container.

## Usage

### When to use
- As a child of `aa-segmented-control` — this is its only intended host; do not use `aa-pill` standalone.
- Options that need an inline icon and/or notification badge alongside their label within a segmented control.

### When not to use
- Anywhere outside `aa-segmented-control` — it has no keyboard roving-focus or exclusive-selection logic of its own; that all lives in the parent. Use `aa-segmented-control` with its child pills instead of assembling `aa-pill` independently.
- A single standalone toggle — use a dedicated toggle/switch component instead.

## Content guidance

### What to write
- Keep labels short — pills sit side by side in a fixed-height row and don't truncate long text.
- Use the `badge` property only for a genuine notification or update against that option, not decoratively.
- Only add an icon via `slot="icon"` when it adds real clarity to the option, not purely for decoration.

### How to write
- Use sentence case for pill labels.
- Use British English spelling throughout.
- Avoid adverbs such as "simply", "just" or "easily".
- Keep labels short enough not to wrap within the pill.

| Do ✅ | Don't ❌ |
|---|---|
| "Monthly" | "Pay on a monthly basis" |
| "Comprehensive" | "Comprehensive cover option" |
| "Option 1" | "Click here for option 1" |

## Examples
- **Small, default state** — unselected pill at small size.
- **Small, active state** — selected pill with bold tertiary styling.
- **Large, default/active** — larger size, including the active state's stepped-down type scale.
- **With icon** — leading icon slotted before the label.
- **With badge** — notification badge shown on an inactive pill.

_TODO: this component has no story of its own — `aa-segmented-control`'s stories (Small, Large, Option counts, With icons, With badge) cover every pill state; confirm these example names against that file if a dedicated pill story is ever added._

## Things to consider
- `aa-pill` is an internal primitive with no story of its own — its states are exercised entirely through `aa-segmented-control`'s stories.
- Setting `size` directly on an `aa-pill` overrides the size the parent `aa-segmented-control` would otherwise apply — the parent only fans out its own `size` to pills that don't already have a `size` attribute set.
- The badge is purely visual — it carries no accessible label of its own, so don't rely on it to convey information that isn't otherwise available to assistive tech.
- Don't nest another interactive element inside the icon slot.

## Accessibility

### Focus order
Only the `active` pill is in the natural tab order (`tabindex="0"`); all other pills in the group are `tabindex="-1"` and are reached via arrow-key roving focus managed by the parent `aa-segmented-control`, not sequential tabbing.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Activates the focused pill (native `<button>` behaviour). |
| Arrow keys / Home / End | _Handled by the parent `aa-segmented-control`, not `aa-pill` itself — see that component's documentation._ |

### ARIA
- `role="radio"` — set on the internal button, since the pill is one option within a mutually exclusive group (the parent sets `role="radiogroup"`).
- `aria-checked` — reflects `active` as `"true"`/`"false"`.
- `tabindex` — `0` when `active`, `-1` otherwise, implementing the roving-tabindex pattern required for a native-equivalent radio-group experience.

### SEO and AI discovery
- Renders as a real `<button>` with `role="radio"`, so its selected state is exposed natively to assistive tech rather than simulated with styling alone.
- Label text (from the default slot) should describe the option on its own, since it's the primary accessible name for the control.

## Related components
- `aa-segmented-control` — the required parent; owns exclusive selection, arrow-key roving focus and `size` fan-out to its child pills.
- `aa-icon` — supplies the optional leading icon.
- `aa-radio` — an alternative exclusive-choice control with room for label, description and error copy, for contexts where a segmented control's compact row isn't suitable.
