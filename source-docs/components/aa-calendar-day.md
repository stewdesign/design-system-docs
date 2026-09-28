# Aa-calendar-day

## Overview
`aa-calendar-day` is a single day cell inside `aa-calendar`'s date grid. It's a real `<button role="gridcell">`, since a WAI-ARIA grid's cells still need to be genuinely clickable and focusable — a button is the right native element underneath the `gridcell` role.

Figma verification: `.Cal Day` (node `17400:2124`) — Availability Enabled/Disabled × Selection None/Today/Selected/Range Start/Range End/Range Middle × Interaction Default/Hover/Focus.

## Anatomy
1. **Cell** — the full 48×48px hit target, a native `<button role="gridcell">`.
2. **Dot** — the visible 40×40px circle inside the cell, showing the day number and carrying the selected/today/range styling.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `day` | number | `1` | The day-of-month number displayed. |
| `label` | string | `''` | Accessible label override; falls back to the plain day number if unset. |
| `disabled` | `boolean` | `false` | Marks the day unavailable/unselectable. |
| `today` | `boolean` | `false` | Marks the day as the current date (adds a ring around the dot). |
| `selected` | `boolean` | `false` | Marks the day as the single selected date. |
| `range-start` | `boolean` | `false` | Marks the day as the start of a selected range. |
| `range-end` | `boolean` | `false` | Marks the day as the end of a selected range. |
| `range-middle` | `boolean` | `false` | Marks the day as falling inside (but not at the edge of) a selected range. |
| `tabindex-value` | number | `-1` | The cell's actual `tabindex`. Managed entirely by the parent `aa-calendar`'s roving-tabindex logic — only one day in the whole grid is ever tabbable at a time. |

## Behaviour
- **Roving tabindex, owned by the parent**: `aa-calendar-day` itself does not manage `tabindex` — `aa-calendar` sets `tabindex-value` on exactly one day (the currently focused one) per render, so only that day is reachable via Tab.
- **Range "snake" styling**: `range-start`/`range-end`/`range-middle` are computed by the parent calendar, including a live preview of the range that would result from the hovered or keyboard-focused day, so the visual range grows/shrinks before a second date is actually committed.
- **Hover**: the dot shows a subtle background fill on hover, suppressed when `disabled`.
- **Today indicator**: `today` adds a visible ring around the dot, independent of whether the day is also selected.
- **Disabled**: opacity reduces to 0.4 and the cursor becomes `not-allowed`; disabled days are still rendered (not removed from the grid) so the month's layout stays consistent.
- **Focus ring**: a dashed focus ring appears on `:focus-visible`.
- **Responsive behaviour**: fixed 48×48px cell size; no breakpoints of its own.

## Usage

### When to use
- Exclusively as a child cell inside `aa-calendar`'s day grid — it has no standalone use case.

### When not to use
- Anywhere outside `aa-calendar` — its `tabindex-value`, selection and range state are all driven by the parent grid and have no meaning in isolation.
- As a general-purpose numeric button — use a plain button or another control for anything not representing a calendar date.

## Content guidance

### What to write
- `label` should only be set when the plain day number alone isn't sufficient context — e.g. to announce "15, today" or similar enriched context; otherwise leave it unset to fall back to the plain number.

### How to write
- Keep any custom `label` short and specific — it replaces, rather than supplements, the visible day number as the accessible name.
- Use British English date conventions in any surrounding calendar chrome (day-month-year ordering, month names via `Intl.DateTimeFormat`).

_TODO: no further do/don't examples — this component carries almost no free-text content of its own._

## Examples
- **Default** — a plain enabled day.
- **Today** — ringed to indicate the current date.
- **Selected** — solid fill indicating the chosen date.
- **Range start / end / middle** — the three positions within a selected date range.
- **Disabled** — an unavailable day, reduced opacity.

## Things to consider
- Never set `tabindex-value` manually on a day expecting it to persist — `aa-calendar` recalculates and overwrites it on every relevant state change to maintain the roving-tabindex pattern.
- `disabled` days remain in the grid (not removed), which is intentional — removing them would break the 7-column week layout and confuse the grid's row/column geometry for assistive technology.
- `range-middle` deliberately squares off the cell's border-radius (rather than keeping the dot circular) to visually read as a continuous fill between the range's start and end.

## Accessibility

### Focus order
Only the single day currently marked with `tabindex-value="0"` is reachable via Tab; all other days have `tabindex="-1"` and are reached via arrow-key navigation instead, managed by the parent `aa-calendar`.

### Keyboard interactions
_TODO: arrow-key/Home/End/PageUp/PageDown navigation is implemented on the parent `aa-calendar`, not this component directly — see `aa-calendar`'s own keyboard interactions table._

| Key | Action |
|---|---|
| Enter / Space | Selects the focused day (handled by the parent `aa-calendar`'s keydown listener). |

### ARIA
- `role="gridcell"` — applied to the underlying `<button>`, since the day sits inside `aa-calendar`'s `role="grid"`/`role="row"` structure.
- `aria-selected` — `"true"` when `selected`, `range-start`, or `range-end` is set, otherwise `"false"`.
- `aria-current="date"` — set when `today` is true, per the standard pattern for indicating "the current one" within a set.
- `aria-label` — falls back to the plain day number if `label` is not set.
- Native `disabled` attribute is used for unavailable days.

### SEO and AI discovery
- Renders as a real `<button>` with `role="gridcell"`, keeping the underlying control genuinely focusable and operable rather than a simulated, non-interactive cell — important for any automated agent attempting to select a date programmatically.
- Calendar day cells are not typically indexed content for SEO purposes; the primary discoverability concern is ensuring assistive technology and automated tools can correctly interpret grid position and state via the ARIA attributes above.

## Related components
- `aa-calendar` — the required parent grid; owns roving tabindex, range-preview logic, and keyboard navigation for its day cells.
