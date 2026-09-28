# Aa-select

## Overview
`aa-select` is a custom single-selection dropdown control used wherever a native `<select>` would be, but with full control over styling and states. It composes `aa-select-option` light-DOM children for its choices, matching Figma's `Single/Dropdown` component (node `17060:22052`, internally named "Select").

## Anatomy
1. **Input label** (`aa-input-label`) — the label, optional description and optional collapsible helper text shown above the control.
2. **Trigger** — the button (`role="combobox"`) that shows the current value or placeholder and opens/closes the listbox.
3. **Value** — the trigger's text content: the selected option's label, or the `placeholder` when nothing is selected.
4. **Chevron** (`aa-icon`) — indicates open/closed state and rotates 180° when the listbox is open.
5. **Listbox** — the absolutely-positioned panel (`role="listbox"`) containing the slotted `aa-select-option` children, shown when `open` is true.
6. **Error message** (`aa-message`) — shown below the control when `error` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | The field's visible label, passed to `aa-input-label`. |
| `description` | string | `''` | Supporting text shown under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `placeholder` | string | `''` | Text shown in the trigger when no value is selected. |
| `value` | string | `''` | The currently selected option's `value`, matched against child `aa-select-option` elements. |
| `name` | string | `''` | Form field name. |
| `required` | `boolean` | `false` | Marks the trigger as required. |
| `error` | string | `''` | Error message text. When set, shows the error message and switches the trigger to its error styling. |
| `open` | `boolean` | `false` | Whether the listbox is currently expanded. Reflected as an attribute. |

## Behaviour
- **Opening/closing**: clicking the trigger toggles the listbox. Clicking anywhere outside the component (tracked via a document-level `pointerdown` listener) closes it. Opening sets the active (highlighted) option to the current value, or the first option if nothing is selected, and scrolls it into view.
- **Selecting**: clicking an option, or pressing Enter/Space while it's highlighted, commits it as the new `value`, dispatches a bubbling `change` event, closes the listbox, and returns focus to the trigger.
- **Keyboard highlighting**: Arrow Down/Up move the highlighted option when open, or open the listbox when closed; Home/End jump to the first/last option. Hovering an option with the mouse also moves the highlight, keeping mouse and keyboard in sync.
- **Focus stays on the trigger**: this follows the ARIA "select-only combobox" pattern — real focus never moves into the listbox. The highlighted option is only ever communicated via `aria-activedescendant`, matching how a native `<select>` behaves.
- **Hover**: the trigger's background and border colour both change on hover (like `aa-text-field`), except in the error state.
- **Focus**: only the shared dashed focus ring appears; the trigger's border colour never changes on focus (like `aa-textarea`).
- **Error state**: the trigger's border switches to the error colour and width, and an `aa-message` with `type="error"` appears below the control.
- **Stacking**: the component only raises its own `z-index` while its own listbox is open, so an earlier-in-DOM select never gets covered by a later, closed one, and vice versa.
- **Responsive behaviour**: the control has a minimum inline size of `240px` on the trigger and a maximum inline size of `22.5rem` on the host; the value text truncates with an ellipsis rather than wrapping, and the listbox scrolls internally past a maximum height of `21rem`.

## Usage

### When to use
- A single-selection field with more options than comfortably fit in a segmented control or a set of radio buttons.
- Form fields where a native-`<select>`-style interaction is expected, but the design needs custom visual states (error, hover, focus) matched to the rest of the design system.

### When not to use
- 2-4 always-visible, closely related options — use `aa-segmented-control` instead so all choices are visible without opening a panel.
- Multi-select choices — `aa-select` only supports a single value; use a multi-select checkbox group instead.
- A short, mutually exclusive set of options where showing all choices at once aids comparison — use `aa-selector` with `input-type="radio"` instead.

## Content guidance

### What to write
- Keep the `label` short and specific to what's being chosen (e.g. "Cover type", not "Please choose").
- Use `placeholder` to prompt a choice ("Select an option") rather than pre-selecting an arbitrary first value when there's no sensible default.
- Reserve `description` for information the user needs before choosing, and `helper` only when that description is long enough to be worth collapsing.
- Write `error` messages that state what's needed to fix the problem, not just that one exists.

### How to write
- Use sentence case, not title case, for the label, description and option content.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily".
- Avoid colons at the end of labels.

| Do ✅ | Don't ❌ |
|---|---|
| "Cover type" | "Cover Type:" |
| "Select an option" | "Choose one" |
| "Please make a selection" | "Error: no value" |

## Examples
- **Default** — label, description, closed trigger with a selected value.
- **With helper** — description collapsed behind a helper disclosure button.
- **With error** — error message shown, trigger in error styling.
- **Placeholder** — no value selected, placeholder text shown in the trigger.
- **Required** — `required` set on the trigger.
- **Open** — listbox expanded, showing the option list and active highlight.
- **State matrix** — default, helper, error and placeholder variants side by side.

## Things to consider
- `value` must match a child `aa-select-option`'s `value` exactly, or the trigger falls back to the placeholder even though a value string is set.
- The component derives its displayed label from the selected option's `textContent` — keep option content simple enough that this reads correctly.
- Don't set both `error` and expect the hover background change — the error trigger state intentionally suppresses the hover treatment.
- Long option lists scroll inside a fixed max height rather than growing indefinitely — very long lists may need a search/filter pattern instead.

## Accessibility

### Focus order
`aa-select` occupies a single stop in the surrounding tab order (the trigger button). Focus never moves into the listbox while it's open, matching native `<select>` behaviour; the component exposes a `focus()` method that focuses the trigger directly.

### Keyboard interactions

| Key | Action |
|---|---|
| Arrow down | Highlights the next option, or opens the listbox if closed. |
| Arrow up | Highlights the previous option, or opens the listbox if closed. |
| Home | Highlights the first option (when open). |
| End | Highlights the last option (when open). |
| Enter / Space | Commits the highlighted option, or opens the listbox if closed. |
| Escape | Closes the listbox (when open). |

### ARIA
- `role="combobox"` on the trigger, with `aria-haspopup="listbox"` and `aria-expanded` reflecting `open`.
- `aria-controls` on the trigger points to the listbox's `id`.
- `aria-activedescendant` on the trigger points to the currently highlighted option's `id`, only while open.
- `aria-label` on the trigger mirrors the visible `label` since the trigger has no visible text node of its own beyond the current value.
- `aria-describedby` on the trigger references the label/helper description and the error message, when present.
- `aria-invalid="true"` when `error` is set.
- `role="listbox"` on the panel; `role="option"` and `aria-selected` on each child (see `aa-select-option`).

### SEO and AI discovery
- Uses real ARIA combobox/listbox semantics rather than a generic clickable `<div>`, so assistive technology and automated agents can identify it as a selection control and read its current value and options.
- The label, description and error text are all exposed via `aria-label`/`aria-describedby`, giving agents and screen readers the full context without needing to parse visual layout.
- Because the underlying value is presentational text rather than a native form field, a server-rendered fallback or hidden native `<select>` should be considered where indexable form structure is required.

## Related components
- `aa-select-option` — the required child; represents each selectable value inside the listbox.
- `aa-segmented-control` — for a small, always-visible set of mutually exclusive options.
- `aa-selector` — for a card-style single- or multi-select choice with richer content (media, price, tags).
- `aa-input-label` — supplies the label/description/helper row shared across form fields.
- `aa-message` — renders the error message below the control.
