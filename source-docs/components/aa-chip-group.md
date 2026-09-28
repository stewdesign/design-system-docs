# Aa-chip-group

## Overview
`aa-chip-group` wraps a row (or grid) of `aa-chip` elements with an optional label header, and manages selection for its `choice`-variant chips — exclusively by default (like a radio group), or independently when `multiple` is set.

Figma verification: `Chips Group` (node `14003:23433`) — Variant Choice/Input/Filter/Assist.

## Anatomy
1. **Header** (optional) — an `aa-input-label` showing `label`, `description` and/or `helper`, shown only when `label` is set.
2. **Group** — the container for real `aa-chip` elements nested in the default slot.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `''` | Group label text. Header row is hidden entirely if empty. |
| `description` | string | `''` | Plain supporting line under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `layout` | `inline` \| `grid` | `inline` | `inline` wraps chips in a flexible row; `grid` arranges them in a fitted grid of columns. |
| `multiple` | `boolean` | `false` | Allows independent multi-select of `choice` chips. Default is exclusive, single-select (radio-like). |

## Behaviour
- **Selection management for `choice` chips only**: the group listens for `chip-select` events and manages `selected` on its `choice`-variant children — `filter`, `assist` and `input` chips are untouched and keep whatever the consumer sets on them directly.
- **Exclusive by default**: selecting one `choice` chip moves the selection there and deselects any other `choice` chip in the group, same as a radio group.
- **`multiple`**: switches to independent toggles — each `choice` chip selects/deselects on its own, any combination allowed.
- **Layout**: `inline` wraps chips in a flexible row with consistent gaps; `grid` arranges them using CSS grid with columns fitted to content.
- **Responsive behaviour**: chips wrap naturally in `inline` layout as space allows; `grid` layout reflows its column count based on available width.

## Usage

### When to use
- A set of mutually exclusive filter or choice options presented as chips rather than radio buttons.
- A multi-select set of options where `multiple` is more appropriate than a checkbox list (e.g. tag-like filters).
- Grouping `filter` or `assist` chips visually, even though the group doesn't manage their selection state directly.

### When not to use
- A single standalone chip with no group semantics — use `aa-chip` directly; a chip outside a group is inert on click.
- Removable tags representing already-applied selections — while `input`-variant chips can sit inside a group visually, the group does not manage their removal; handle `chip-remove` events directly.
- Traditional form fields needing native validation/required-field semantics — consider `aa-checkbox`/`aa-radio` instead.

## Content guidance

### What to write
- Keep the group `label` short and describe the category of choice being offered (e.g. "Cover level"), not an instruction.
- Use `description` for a brief supporting line (e.g. "Choose one that suits you" or "Pick as many as you'd like" for `multiple` groups).
- Chip contents themselves should follow `aa-chip`'s own guidance — short, specific values.

### How to write
- Use sentence case for the label and description.
- Use British English spelling.
- For a `multiple` group, make the description explicit that more than one can be chosen, to set the right expectation.

| Do ✅ | Don't ❌ |
|---|---|
| "Cover level" / "Choose one that suits you" | "Options" |
| "Extras" / "Pick as many as you'd like" | "Select extras (multi)" |

## Examples
- **With label** — exclusive single-select choice chips under a labelled header.
- **Multiple selection** — independent multi-select choice chips.
- **Group layouts** — `inline` and `grid` layouts shown together, mixing chip variants.

## Things to consider
- Only `choice`-variant chips participate in the group's selection management — mixing `filter`/`assist`/`input` chips into the same group is visually fine but won't get exclusive/multiple selection behaviour applied to them.
- The group reads its children via `querySelectorAll('aa-chip')` on the light DOM, not a `<slot>` assignment check — dynamically adding/removing chips after initial render should still work, but verify behaviour if chips are added asynchronously. _TODO: confirm dynamic chip insertion is fully supported._
- Switching `multiple` off at runtime doesn't automatically resolve multiple existing selections down to one — check actual behaviour before relying on this for a live toggle. _TODO: verify behaviour when toggling `multiple` after chips are already selected._

## Accessibility

### Focus order
Chips inside the group receive focus in normal tab order, following their DOM order (which visually matches the chosen `layout`).

### Keyboard interactions

| Key | Action |
|---|---|
| Tab / Shift+Tab | Moves focus between chips in the group. |
| Enter / Space | Activates the focused chip (native `<button>` behaviour, toggling selection for `choice`/`filter`/`assist`, or removing for `input`). |

### ARIA
- The group container carries `role="group"` and, when `label` is set, `aria-labelledby` pointing at the label element — giving assistive technology a clear grouping and name for the set of chips.
- Individual chip semantics (`aria-pressed`, etc.) come from `aa-chip` itself.

### SEO and AI discovery
- The `role="group"` with `aria-labelledby` helps assistive technology and any automated agent understand that the chips form a single related set, not independent controls.
- Ensure the group's `label` is descriptive enough on its own, since it's the only textual context tying the chips together for anyone not visually scanning the layout.

## Related components
- `aa-chip` — the individual chip component nested inside the group.
- `aa-input-label` — renders the group's label/description/helper header.
- `aa-checkbox` / `aa-radio` — alternative selection patterns for more traditional form contexts.
