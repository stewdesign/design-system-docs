# Aa-progress-stepper

## Overview
`aa-progress-stepper` is a compact, right-aligned dropdown that shows a user's position in a multi-step journey (e.g. a quote flow) and lets them jump back to a completed step. It renders as a trigger button showing "Step X of Y" and the current step's name, which opens a dropdown listing every step declared as a light-DOM `aa-progress-stepper-item` child.

## Anatomy
1. **Trigger button** — shows the step count (`Step X of Y`) and the current step's subheading text, plus a chevron icon that rotates 180° when open.
2. **Dropdown panel** — a floating, right-aligned panel containing the list of steps; stays in the DOM and is toggled with the `inert` attribute (not `hidden`) so it can transition in/out.
3. **`aa-progress-stepper-item`** (child component) — one row per step:
   - **Number badge** — the step's 1-based position, styled solid when current.
   - **Title** — the step's `label`.
   - **Divider** (`aa-divider`) — shown between items except after the last.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

### `aa-progress-stepper`

| Property | Options | Default | Description |
|---|---|---|---|
| `open` | `boolean` | `false` | Whether the dropdown is expanded. Reflects to an attribute. |
| `variant` | `minimal` | `minimal` | Visual style. `minimal` is the only variant implemented so far. |

### `aa-progress-stepper-item`

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Step'` | The step's title, and the default text shown in the trigger's subheading. |
| `href` | string | _undefined_ | Renders the item as a real navigable `<a>`; omit to render a plain `<button>`. |
| `current` | `boolean` | `false` | Marks this as the active step. Managed by the parent, but can be set initially in markup. |
| `number` | number | `1` | 1-based position among siblings. Managed by the parent — do not set manually. |
| `showDivider` | `boolean` (attribute `show-divider`) | `false` | Whether a divider renders after this item. Managed by the parent — set on every item except the last. |
| `subheading` slot | — | — | Optional slotted content that overrides what the trigger shows for this step, without changing the row's own displayed title. |

## Behaviour
- **Opening/closing**: clicking the trigger toggles `open`. Pressing `Escape` while open closes it. Clicking anywhere outside the component (checked via `event.composedPath()`) also closes it.
- **Selecting a step**: clicking an `aa-progress-stepper-item` dispatches a `step-select` event that bubbles up; the parent marks that item `current` and closes the dropdown.
- **Syncing items**: on every slot change, the parent recomputes each item's `current`, `number` and `showDivider` state from the light-DOM children's order — if none is marked `current`, the first item becomes current by default.
- **Transitions**: the dropdown fades and translates in from 4px above its resting position over 260ms with a `cubic-bezier(0.16, 1, 0.3, 1)` easing — the same entrance feel as `aa-reset`'s focus-ring scale — and reverses for free on close since it's a CSS transition, not a one-shot animation.
- **Chevron**: rotates 180° when `open` is true, with a 200ms ease-in-out transition.
- **Item states**: hovering an item shows a tertiary hover background; the current item shows a persistent secondary-surface background and bolder number/title styling.
- **Responsive behaviour**: _TODO: no explicit breakpoints found in source — confirm intended small-screen behaviour._

## Usage

### When to use
- A multi-step flow (e.g. quote journeys) where the user needs to see their current step and jump back to a previous one.
- Contexts where space is constrained and a full horizontal stepper won't fit — this is a dropdown, not an inline stepper.

### When not to use
- A flow where every step should be visible at once inline — use a different, non-collapsing stepper pattern.
- A simple linear progress indication with no navigation to previous steps — a plain progress bar or label may be more appropriate.
- Grouping unrelated actions — this component is specifically for sequential journey steps.

## Content guidance

### What to write
- Keep each step's `label` short — it appears both in the trigger's subheading and in the dropdown row, so it must read clearly at small sizes.
- Use a `subheading` slot only when the trigger needs to show something more specific than the step's own title (e.g. a sub-stage within a step).
- Only link to steps that are genuinely navigable (`href` set); steps that can't yet be revisited should render as inert buttons rather than links.

### How to write
- Use sentence case for step labels.
- Use British English spelling throughout.
- Avoid adverbs such as "simply", "just" or "easily".
- Keep labels short enough not to wrap in the fixed-width (199px) dropdown.

| Do ✅ | Don't ❌ |
|---|---|
| "Cover" | "Choose your cover options" |
| "Details" | "Enter your personal details here" |
| "Quote" | "Get a quote" |

## Examples
- **Default (closed)** — trigger only, showing step count and current step name.
- **Open** — dropdown expanded, listing all steps with the current one highlighted.
- **Step two active** — dropdown open with the second of three steps marked current.
- **Custom subheading** — the current item slots custom `subheading` content that differs from its own row title.

## Things to consider
- The parent stepper derives step order entirely from DOM order of `aa-progress-stepper-item` children — reordering the light DOM changes numbering.
- `number` and `showDivider` on `aa-progress-stepper-item` are managed by the parent; setting them manually will be overwritten on the next slot change.
- Since the dropdown is right-aligned and positioned absolutely, ensure there's enough space to its left/below in the layout — the story file wraps it in a flex container with `justify-content: flex-end` and padding specifically for this reason.
- `variant="minimal"` is currently the only implemented variant — treat other values as unsupported.

## Accessibility

### Focus order
The trigger button sits in the natural tab order. The dropdown panel is toggled with the `inert` attribute rather than `hidden`, which both allows it to animate and (when `inert`) removes its contents from the tab order and accessibility tree while closed.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Activates the trigger button (opens/closes the dropdown) or activates a focused step item. |
| Escape | Closes the dropdown if open. |

_TODO: no arrow-key navigation between dropdown items found in source — confirm whether this is intended or a gap._

### ARIA
- `aria-expanded` — set on the trigger button, reflecting `open`.
- `aria-controls="dropdown"` — set on the trigger button, pointing at the dropdown panel's `id`.
- `inert` — applied to the dropdown panel while closed.
- _TODO: no `aria-current` or equivalent found on the current `aa-progress-stepper-item` — confirm whether assistive tech is informed which step is current beyond visual styling._

### SEO and AI discovery
- Steps render as real `<a>` or `<button>` elements, so navigable steps are genuine, crawlable links rather than JavaScript-only click handlers.
- Step `label` text should describe the step itself (e.g. "Cover", "Details") so its meaning is clear out of context to assistive tech, search engines or AI agents parsing the page.

## Related components
- `aa-tabs` / `aa-tab` — uses the same light-DOM child composition pattern for a different (non-sequential) navigation use case.
- `aa-divider` — used internally to separate step rows.
- `aa-icon` — supplies the chevron icon in the trigger.
