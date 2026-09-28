# Aa-list-item-trailing

## Overview
`aa-list-item-trailing` is an internal primitive that positions the trailing action inside an `aa-list-item` — a chevron button, switch, checkbox, radio or link. It is not meant to be reached for directly outside that context, and has no story of its own in Storybook — this doc covers its structure for engineers building or extending `aa-list-item`, not as a component designers pick independently.

## Anatomy
1. **Trailing wrapper** (`.trailing`, `part="trailing"`) — an inline-flex box that simply positions whatever real control is slotted in.
2. **Default slot** — holds a complete, independently focusable component: `aa-icon-button`, `aa-radio`, `aa-checkbox`, `aa-switch` or `aa-button`.

_TODO: reference a labeled anatomy diagram once one exists in Figma (node `19324:1834`, `.Trailing-Action`)._

## Properties
_TODO: `aa-list-item-trailing` exposes no configurable properties. It adds no chrome of its own — every one of Figma's trailing-action types (Button Icon/Radio/Checkbox/Switch/Button/Button Link) is already a complete, independently styled and focusable component in this system, so the wrapper's only job is positioning._

## Behaviour
- **No chrome or state of its own**: the wrapper never fights the slotted control's own interaction states (hover, focus, checked, disabled) — those all belong to whatever real component (`aa-switch`, `aa-checkbox`, etc.) is placed inside it.
- **Independent focusability**: because `aa-list-item` places its own `href` link behind the visible content (`pointer-events: none` on the label), a genuinely interactive control slotted into `aa-list-item-trailing` stays on top and independently focusable, rather than being nested inside the row's own link.

## Usage

### When to use
- Exclusively inside `aa-list-item`'s `slot="trailing"`, to present an action or control at the end of the row — e.g. a chevron icon button for navigation, or a switch/checkbox/radio for an inline setting.

### When not to use
- Standalone, outside of `aa-list-item` — it has no independent story or usage pattern and exists purely to support that parent component.
- As a general-purpose wrapper for interactive controls elsewhere in the system — use the control (`aa-switch`, `aa-checkbox`, etc.) directly instead.

## Content guidance

### What to write
- _TODO: not applicable — `aa-list-item-trailing` has no text content of its own; any labelling belongs to the slotted control (e.g. an `aa-icon-button`'s `label`, or an `aa-switch`'s `label`)._

### How to write
- _TODO: not applicable — see content guidance for the slotted control and for `aa-list-item`._

## Examples
_TODO: `aa-list-item-trailing` has no story of its own — see `src/stories/components/list-item.stories.ts` for usage in context: a chevron `aa-icon-button` (`Default`/`Group` stories), an `aa-switch` (`WithSwitch`), and an `aa-checkbox` (`WithCheckbox`)._

## Things to consider
- Because `aa-list-item` can also be a link (via its own `href`), never slot another link or nested interactive-in-interactive control here that would conflict with the row's own link semantics — stick to a single, real, independently focusable control per row.
- The wrapper does not resize or otherwise constrain its slotted content beyond basic inline-flex alignment — sizing (e.g. `size="small"` on an `aa-icon-button`) is the consumer's responsibility.

## Accessibility

### Focus order
`aa-list-item-trailing` is not itself focusable. It sits after the row's label/description in DOM order, so its slotted control (an `aa-icon-button`, `aa-switch`, `aa-checkbox`, `aa-radio` or `aa-button`) receives focus in that position within the tab order, independently of the row's own `href` link when one is set.

### Keyboard interactions
_TODO: not applicable at this component's level — keyboard behaviour (Enter/Space, arrow keys, etc.) belongs entirely to whichever control is slotted in. See that control's own documentation (`aa-icon-button`, `aa-switch`, `aa-checkbox`, `aa-radio`, `aa-button`)._

### ARIA
- No roles, states or properties are applied by `aa-list-item-trailing` itself — all ARIA semantics come from the slotted control.

### SEO and AI discovery
- Renders a plain `<span>` — no semantic meaning is added or implied; the slotted control (a real `<button>`, native form control, etc.) carries its own semantics directly.

## Related components
- `aa-list-item` — the parent component this primitive is designed exclusively to support, via `slot="trailing"`.
- `aa-list-item-leading` — the equivalent primitive for the leading side of an `aa-list-item`.
- `aa-icon-button`, `aa-switch`, `aa-checkbox`, `aa-radio`, `aa-button` — the real controls commonly slotted in.
