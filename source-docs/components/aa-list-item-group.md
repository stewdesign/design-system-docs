# Aa-list-item-group

## Overview
`aa-list-item-group` is a thin, purpose-specific wrapper that stacks `aa-list-item` elements on a plain, lightly-rounded surface with consistent spacing between them. It's typically used to present a related set of navigable or settings-style rows, such as a menu of cover options or an account settings list.

## Anatomy
1. **Group surface** (`.group`, `part="group"`) — a flex column container with a rounded corner and a default-primary background.
2. **Default slot** — the `aa-list-item` elements nested inside, each separated by a small gap.

_TODO: reference a labeled anatomy diagram once one exists in Figma (node `18654:27278`)._

## Properties
_TODO: `aa-list-item-group` exposes no configurable properties — it is deliberately as thin as possible. The surface and spacing are all it owns; each `aa-list-item` inside still decides its own `divider`, `badge` and `href`._

## Behaviour
- **Layout**: children are stacked in a flex column, stretched to the group's full width, with a small (`--padding-xsml`) gap between each item.
- **Surface**: renders a single rounded, default-primary-coloured background behind all items, rather than each item styling its own surface.
- **No state of its own**: `aa-list-item-group` has no interaction states, hover/focus behaviour, or variants — all interactive states (hover, focus, link behaviour) live on the individual `aa-list-item` children.

## Usage

### When to use
- Grouping a set of related `aa-list-item` rows on a single visual surface, e.g. a menu of cover options or a settings screen.
- Whenever list items should read as one coherent block rather than a loose, ungrouped stack.

### When not to use
- A single, standalone list item with no group context — render the `aa-list-item` directly, without wrapping it.
- A general-purpose responsive grid or column layout — use `aa-columns` instead.
- A grouped set of cards or chips — use `aa-card-group`/`aa-chip-group` instead, which follow the same thin-wrapper pattern for their respective components.

## Content guidance

### What to write
- _TODO: `aa-list-item-group` has no text content of its own — content guidance belongs to the `label`/`description` of each `aa-list-item` inside it._

### How to write
- _TODO: not applicable — see the content guidance for `aa-list-item`._

## Examples
- **Group** — three `aa-list-item` rows (with leading icons, descriptions, dividers and a trailing icon button) stacked inside a single `aa-list-item-group` surface.

## Things to consider
- Each item inside the group still owns its own `divider`, `badge` and `href` — the group itself adds no visual separators beyond the gap between items.
- Keep the surface's background in mind when nesting a group inside another coloured surface — it's a plain, default-primary background, not transparent.

## Accessibility

### Focus order
`aa-list-item-group` introduces no focus stop of its own; focus order follows the natural DOM order of the slotted `aa-list-item` elements (and any interactive controls they contain).

### Keyboard interactions
_TODO: not applicable — `aa-list-item-group` is a non-interactive grouping container. See `aa-list-item` for its own keyboard behaviour._

### ARIA
- No roles, states or properties are applied by `aa-list-item-group` itself — it renders a plain `<div>` wrapper with no semantic meaning beyond grouping and layout.
- _TODO: confirm whether a `role="list"` (with each `aa-list-item` as `role="listitem"`) is intended, or whether the current unmarked grouping is deliberate._

### SEO and AI discovery
- Purely visual grouping — it introduces no landmark or heading structure of its own, so any semantic meaning of the group (e.g. "cover options") should be conveyed by a preceding heading outside the component, not by the wrapper itself.
- _TODO: confirm whether a group should be preceded by a visually-associated heading for AI/assistive-tech context, and whether that's a documented pattern elsewhere._

## Related components
- `aa-list-item` — the individual row rendered inside the group; owns its own `label`, `description`, `divider`, `badge` and `href`.
- `aa-list-item-leading` — the leading-element primitive slotted into an `aa-list-item`.
- `aa-list-item-trailing` — the trailing-action primitive slotted into an `aa-list-item`.
- `aa-columns` — the general-purpose responsive grid layout, unlike this fixed-purpose stacking container.
