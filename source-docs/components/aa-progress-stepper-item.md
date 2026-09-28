# Aa-progress-stepper-item

## Overview
`aa-progress-stepper-item` is a single step row inside the `aa-progress-stepper` dropdown. It is an internal sub-part designed to be composed as a light-DOM child of `aa-progress-stepper` — the same composition pattern as `aa-tabs`/`aa-tab` — and has little standalone usage of its own outside that parent; this doc describes it primarily in that context rather than as an independent component.

## Anatomy
1. **Item control** (`part="item"`) — an `<a>` when `href` is set, otherwise a `<button type="button">`.
2. **Row** (`part="row"`) — inner flex container holding the number and title.
3. **Number** (`part="number"`) — a circular badge showing the item's 1-based position, set by the parent.
4. **Title** (`part="title"`) — the step's visible label text.
5. **Subheading slot** (`slot="subheading"`, hidden) — optional custom content that overrides what the parent's trigger displays for this step, without changing the row's own visible title.
6. **Divider** — an `aa-divider` rendered after the item when `showDivider` is true (set by the parent on every item except the last).

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `current` | boolean | `false` | Marks this as the current step. Managed by the parent `aa-progress-stepper`, not typically set directly by a consumer once inside a live stepper. |
| `href` | string | `''` | Renders a real navigable `<a>` when set; omit to render a plain `<button>` instead. |
| `label` | string | `'Step'` | The step's visible title text, and the default subheading text shown in the parent's trigger. |
| `number` | number | `1` | Position among sibling items, 1-based. Managed by the parent `aa-progress-stepper`. |
| `showDivider` (`show-divider`) | boolean | `false` | Set by the parent on every item except the last, to render a trailing divider. |

## Behaviour
- **Selection**: clicking the item dispatches a bubbling, composed `step-select` custom event; the parent `aa-progress-stepper` listens for this, marks the clicked item `current`, and closes its dropdown.
- **Current state**: when `current` is true, the item's background, number badge and title all switch to their emphasised styling (filled background, primary-coloured number badge, medium-weight headings-coloured title).
- **Hover**: the item's background shifts to a tertiary hover surface on hover, independent of `current`.
- **Subheading override**: if a consumer slots content into `slot="subheading"`, the parent's trigger displays that slotted text instead of `label` for this step, while the row's own visible title still shows `label`.
- **Transitions**: background changes use the shared interactive transition token.
- **Responsive behaviour**: the item is a full-width block (`inline-size: 100%`) and has no responsive breakpoints of its own — it fills whatever width the parent dropdown provides (199px per the current implementation).

## Usage

### When to use
- As a direct light-DOM child of `aa-progress-stepper`, one per step in a multi-step journey (e.g. Quote, Cover, Details).

### When not to use
- Standalone, outside `aa-progress-stepper` — its `number`, `current` and `showDivider` state are managed by the parent, and it has no independent story or usage pattern of its own. _TODO: confirm with the team whether any standalone use case is planned; none exists in the current stories._
- A general-purpose list item or navigation link — use a plain link/list pattern instead.

## Content guidance

### What to write
- Keep `label` short — it is displayed both in the dropdown row and (by default) as the parent trigger's subheading, so it must read well at both scales.
- Only use the `subheading` slot when the trigger needs to show something more specific or different from the step's row title (e.g. "Your details" instead of "Quote").

### How to write
- Use sentence case for step labels, not title case.
- Use short, concrete nouns for step names (e.g. "Quote", "Cover", "Details") rather than full sentences or instructions.
- Use British English spelling throughout.

| Do ✅ | Don't ❌ |
|---|---|
| "Cover" | "Choose Your Cover Options" |
| "Details" | "details:" |

## Examples
- **Default step** — plain item, not current, with a divider (mid-list position).
- **Current step** — `current` set, emphasised styling applied.
- **Last step** — `showDivider` false, no trailing divider rendered.
- **Step with custom subheading** — a `slot="subheading"` child overriding the trigger's display text.
- **Button-only step** — no `href` set, rendering a `<button>` instead of a link.

_TODO: no example currently shows a disabled or not-yet-reached step distinct from the default state — confirm whether that state exists in Figma._

## Things to consider
- `number`, `current` and `showDivider` are recalculated and overwritten by the parent's `syncItems()` on every slot change — setting them directly on an item inside a live `aa-progress-stepper` will be overridden.
- Only set `href` when the step is a real, navigable destination; omitting it renders a `<button>`, which triggers `step-select` without navigating.
- Don't nest additional interactive elements inside the item — the whole row is a single link/button.

## Accessibility

### Focus order
The item participates in the natural tab order as either an `<a>` or a `<button>`, in document order among its sibling items, following the parent stepper's own trigger button.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the item (follows the link if `href` is set, or fires `step-select` for a button). |
| Space | Activates the item when rendered as a `<button>` (native behaviour; does not apply when rendered as an `<a>`). |

### ARIA
- No explicit `role` override — the semantic `<a>` or `<button>` element is used directly.
- _TODO: no `aria-current` is set on the current item in the source read — confirm whether this should be added so assistive tech can identify the active step._

### SEO and AI discovery
- Renders a real `<a>` (with `href`) or `<button>`, not a generic `<div>`, so semantics and focusability are native rather than simulated.
- When the step is a real destination, always set `href` so it is a crawlable link rather than a JavaScript-only click handler.
- Label text should name the step plainly (per the content guidance above) so its purpose is clear out of context to assistive tech, search engines or AI agents.

## Related components
- `aa-progress-stepper` — the parent dropdown that composes, sequences and manages state for one or more `aa-progress-stepper-item` children.
- `aa-divider` — rendered between items when `showDivider` is true.
- `aa-tabs` / `aa-tab` — uses the same light-DOM composition pattern for a parent/child relationship.
