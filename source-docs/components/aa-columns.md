# Aa-columns

## Overview
`aa-columns` is the responsive grid layout primitive for arranging content into columns. The parent declares the layout per breakpoint and children carry no layout properties of their own, so any content can be dropped in without needing to know about the grid around it.

## Anatomy
1. **Host** — a container-query context (`container: aa-columns / inline-size`) that breakpoint rules resolve against.
2. **Grid wrapper** (`.columns`, `part="columns"`) — the actual CSS grid, with column and row gaps from design tokens.
3. **Default slot** — the children distributed across the grid's columns.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `mobile` | `1` \| `2` \| `3` \| `4` \| `5` \| `1:2` \| `2:1` \| `1:3` \| `3:1` \| `2:3` \| `3:2` \| `1:4` \| `4:1` | _undefined_ (falls back to a single `1fr` column) | Column layout at the base (mobile) breakpoint. |
| `tablet` | same options as `mobile` | _undefined_ | Column layout from `48rem` (container width) up. Values inherit upward from `mobile` unless overridden. |
| `desktop` | same options as `mobile` | _undefined_ | Column layout from `80rem` (container width) up. Values inherit upward from `tablet`/`mobile` unless overridden. |
| `auto` | `boolean` | `false` | Ignores the breakpoint properties entirely and fits as many equal columns as will fit the available width. Overrides `mobile`/`tablet`/`desktop` when set. |

## Behaviour
- **Responsive resolution**: breakpoints are resolved with container queries against the nearest `aa-columns` host, not the viewport — a Columns nested inside a narrow or inset panel responds to the space it actually has, not the window size.
- **Inheritance**: values inherit upward — setting only `mobile` and `tablet` means the `tablet` layout also applies at desktop, unless `desktop` is explicitly set.
- **Ratio distribution**: two-part values (e.g. `1:2`, `3:1`) distribute proportionally; with more children than ratio parts, odd children take the first width and even children the second.
- **Nesting**: an `aa-columns` nested inside a child resolves against its own host automatically, with no extra configuration — each level names its own container.
- **`auto`**: fits as many equal columns as will fit (`repeat(auto-fit, minmax(min(100%, var(--aa-columns-min, 16rem)), 1fr))`), which covers item counts a fixed grid can't divide evenly. It's declared last in the stylesheet so, at equal specificity to the breakpoint rules, source order lets it override them.
- **Child wrapping**: a slotted `<div>` automatically becomes a column flex layout with the design system's row-gap, so a plain wrapper stacking a heading, paragraph and list reads as intentionally spaced rather than falling back to browser default margins.

## Usage

### When to use
- Any responsive multi-column layout — page sections, card grids, form layouts, sidebar + content splits.
- Layouts that need to respond to their container's width rather than the viewport (e.g. inside a panel or narrow slot).
- Proportional splits (e.g. a 1:2 sidebar/content layout) that should hold their ratio across breakpoints.
- Item counts that don't divide evenly into a fixed grid — use `auto`.

### When not to use
- A single, non-responsive stack of items with no column requirement — a plain flex/block wrapper is simpler.
- Fine-grained placement of specific items to specific grid cells — `aa-columns` is deliberately parent-declares-layout-only, with no per-child span or position properties.
- Data tables — use a dedicated table component instead.

## Content guidance

### What to write
- _TODO: `aa-columns` is a structural layout primitive with no text content of its own — content guidance belongs to whatever is slotted inside it._

### How to write
- _TODO: not applicable — see the content guidance for the individual components placed inside `aa-columns`._

## Examples
- **Responsive** — `mobile="1" tablet="2" desktop="4"`, items reflow across all three breakpoints.
- **Single column** — `mobile="1"`, no tablet/desktop override, holding one column at every size.
- **Three up** — `mobile="1" tablet="3"`.
- **Ratio** — `mobile="1" tablet="1:3"`, a proportional two-column split.
- **Auto** — `auto` fits as many equal columns as the container allows.
- **Nested** — an `aa-columns` inside one column of a parent `aa-columns`, each resolving against its own container.
- **Layout matrix** — every supported layout value shown side by side.

## Things to consider
- Layout values are strings, not numbers — passing an out-of-range or malformed value silently falls back to the default single-column grid rather than erroring.
- `auto` and the breakpoint properties (`mobile`/`tablet`/`desktop`) are mutually exclusive in effect — `auto` always wins due to CSS source order, so don't rely on removing it dynamically without also clearing the breakpoint attributes if you need them to take over.
- Nesting relies on named containers — deeply nested `aa-columns` still resolve independently, but be mindful of column widths compounding at multiple levels on small screens.
- `::slotted(*)` sets `min-inline-size: 0` on every child, which is necessary for grid children to shrink below their content size — be aware of this if a child relies on its own intrinsic minimum width.

## Accessibility

### Focus order
`aa-columns` has no interactive elements of its own; it does not alter the natural DOM/tab order of its slotted children.

### Keyboard interactions
_TODO: not applicable — `aa-columns` is a non-interactive layout container._

### ARIA
- No roles, states or properties are applied — `aa-columns` renders a plain `<div>` wrapper with no semantic meaning beyond layout.

### SEO and AI discovery
- Purely visual/layout grouping — it does not introduce a landmark or heading structure, so document outline and semantics should come entirely from the content slotted inside it.
- _TODO: confirm whether a `role="presentation"` or similar should be considered for the wrapper `<div>`, or whether the current unmarked `<div>` is intentional._

## Related components
- `aa-list-item-group` — a fixed-purpose stacking container for list items, unlike the general-purpose grid `aa-columns` provides.
- `aa-card-group` — another thin, purpose-specific grouping wrapper, mentioned alongside `aa-list-item-group` as a comparable pattern.
