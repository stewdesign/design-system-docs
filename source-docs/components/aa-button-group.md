# Aa-button-group

## Overview
`aa-button-group` arranges a set of related `aa-button` elements with consistent spacing and alignment. It owns layout only — each button's own variant, size and intent stay with the button itself.

Figma verification: `Button - Group` (node `2072:9432`).

## Anatomy
1. **Group container** — a flex wrapper applying gap and alignment to its slotted children.
2. **Buttons** — real `aa-button` (or similar) elements nested in the default slot.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `align` | `start` \| `center` \| `end` \| `stack` | `start` | Horizontal alignment of the button row, or vertical full-width stacking. |

## Behaviour
- **Wrapping**: buttons wrap onto a new line if they don't fit the available width, keeping consistent gap and alignment on each line.
- **Stack**: `align="stack"` switches to a vertical column layout with each button stretched to full width, rather than a horizontal row.
- **No shared button state**: the group does not coordinate selection, disabled state, or any other cross-button behaviour — it is purely a layout wrapper.
- **Responsive behaviour**: no explicit breakpoints; layout responds naturally via flex wrapping and the `stack` alignment option for narrow contexts.

## Usage

### When to use
- A primary and secondary (or tertiary) action presented together, e.g. "Save" and "Cancel".
- Any set of related buttons that should visually group together with consistent spacing.
- Stacking buttons full-width on narrow layouts (`align="stack"`).

### When not to use
- A single standalone button — use `aa-button` directly with no wrapping group.
- Mutually exclusive or multi-select choices — use the relevant selection component (radio/checkbox group, or `aa-chip-group`), not a set of buttons.
- Icon-only controls needing a compact row — consider whether `aa-icon-button` instances need their own grouping treatment. _TODO: confirm if icon-button grouping has separate guidance._

## Content guidance

### What to write
- Each button inside the group should follow `aa-button`'s own content guidance (frontloaded active verbs, specific labels).
- Order buttons by priority — typically primary action first (or, per platform convention, positioned per the group's alignment), with lower-emphasis actions alongside it.

### How to write
- Use sentence case for every button's label.
- Avoid generic wording like "Find out more" — say what each button actually does.
- Use British English spelling throughout.

| Do ✅ | Don't ❌ |
|---|---|
| "Save changes" / "Cancel" | "OK" / "Cancel" |
| "Choose cover" / "Compare plans" | "Submit" / "Go back" |

## Examples
- **Start** — buttons aligned to the start (default).
- **Center** — buttons centred as a group.
- **End** — buttons aligned to the end, common for form actions.
- **Stack** — buttons stacked vertically, each full width.

## Things to consider
- The group does not enforce a maximum number of buttons — very long rows will wrap, which may look uneven; keep groups to a small number of related actions.
- `align="stack"` stretches every slotted child to full width via `::slotted(*) { width: 100% }` — this could conflict with a child that has its own fixed-width styling.
- Button variant hierarchy (primary/secondary/tertiary) is not managed by the group — it's the consumer's responsibility to choose an appropriate combination of variants for the buttons placed inside it.

## Accessibility

### Focus order
Buttons inside the group receive focus in normal tab order, following the DOM order of the slotted children (which visually matches the chosen `align` layout in left-to-right reading order, except in `stack`, which is a vertical column).

### Keyboard interactions

| Key | Action |
|---|---|
| Tab / Shift+Tab | Moves focus between buttons in the group, and to/from surrounding page content. |
| Enter / Space | Activates the focused button (native `aa-button` behaviour). |

### ARIA
- No ARIA role is applied to the group container itself — it's a plain layout wrapper, not a semantic group like a toolbar or radiogroup.
- Each slotted button carries its own accessibility semantics independently (see `aa-button`).

### SEO and AI discovery
- The group itself has no semantic markup beyond a `<div>` wrapper — accessibility and crawlability come entirely from the real `<button>`/`<a>` elements slotted inside it.
- Ensure each slotted button's label is specific and self-describing, since the group provides no additional context of its own.

## Related components
- `aa-button` — the component this group is designed to arrange; also usable standalone.
- `aa-icon-button` — a compact, icon-only alternative that can also be grouped.
