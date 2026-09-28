# Aa-date-picker

## Overview
`aa-date-picker` is a text-entry date field paired with a calendar popover, used for choosing a single date or a start/end date range. Each field is a real text input — typing `dd/mm/yyyy` directly works — alongside a toggle button that opens an `aa-calendar` popover for point-and-click selection.

## Anatomy
1. **Label** (`aa-input-label`) — the field's label, with optional description or collapsed helper disclosure.
2. **Input shell** (`part="control"`) — a bordered container holding the text input and toggle button.
3. **Text input** — accepts a typed `dd/mm/yyyy` value directly.
4. **Toggle button** (`part="toggle"`) — a calendar-icon button that opens/closes the popover for that field.
5. **Popover** (`part="popover"`) — a `role="dialog"` surface containing an `aa-calendar`.
6. **Range fields** — in `range` mode, a `start` field and an `end` field are rendered side by side, each with its own toggle and popover.
7. **Error message** (`aa-message`) — shown below the field(s) when `error` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `mode` | `single` \| `range` | `single` | Whether the picker collects one date or a start/end range. |
| `label` | string | `'Label'` | Label text for the field (single mode) or the group. |
| `description` | string | `''` | Supporting description text rendered via `aa-input-label`. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `error` | string | `''` | Error message; when set, shows the error state and an `aa-message`. |
| `start-label` | string | `'Start date'` | Label for the start field in `range` mode. |
| `end-label` | string | `'End date'` | Label for the end field in `range` mode. |
| `name` | string | `''` | Base name for the underlying input(s); `range` mode suffixes it with `-start`/`-end`. |
| `value` | string (ISO date) | `''` | Selected date in `single` mode. |
| `start` | string (ISO date) | `''` | Selected start date in `range` mode. |
| `end` | string (ISO date) | `''` | Selected end date in `range` mode. |
| `min` | string (ISO date) | `''` | Earliest selectable date, passed through to `aa-calendar`. |
| `max` | string (ISO date) | `''` | Latest selectable date, passed through to `aa-calendar`. |
| `open` | boolean (reflected) | `false` | Whether a popover is currently open. |

## Behaviour
- **Typed entry**: each field is a real `<input type="text">` with `inputmode="numeric"` and placeholder `dd/mm/yyyy`; a valid typed value commits on `change` and fires `input`/`change` events on the component.
- **Toggle button**: clicking the calendar icon opens the popover for that field (`aria-haspopup="dialog"`, `aria-expanded` reflects state); clicking again while open for the same field closes it.
- **Popover**: rendered with `role="dialog"` and kept in the DOM, toggled with the `inert` attribute rather than `hidden` so its entrance transition (opacity + translateY + scale, 260ms) can play. Escape closes it and returns focus to the toggle button that opened it. A pointerdown outside the whole component also closes it.
- **Range selection**: a real two-click flow — the first day picked becomes `start` and the popover stays open, now targeting `end`; the second click becomes `end`, swapping the two if it lands before `start`.
- **Single selection**: picking a day in the calendar sets `value`, closes the popover, and returns focus to the toggle button.
- **Error state**: setting `error` switches the input shell to its error border and renders an `aa-message` of `type="error"` below the field(s), associated via `aria-describedby`.
- **Events**: `input` and `change` (native `Event`, bubbling and composed) fire whenever `value`, `start` or `end` changes, from either typed entry or calendar selection.

## Usage

### When to use
- Collecting a single date, e.g. a date of birth or policy start date.
- Collecting a date range, e.g. a period of cover exclusion.
- Where users may want to either type a date directly or pick it visually from a calendar.

### When not to use
- _TODO: not covered in source or stories — no guidance found for alternative components._

## Content guidance

### What to write
- Write the label to describe the date being collected, e.g. "Select a date" or "Select a date range".
- Use `description` to explain any constraint on the date, e.g. a backdating restriction.
- Use `start-label`/`end-label` to distinguish the two fields in range mode, e.g. "Start date" and "End date".
- Write error messages that tell the user what to do, e.g. "Please select an end date".

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout.

## Examples
- **Single** — one date field with a calendar popover.
- **Range** — start and end date fields, each with its own popover.
- **Error** — error state with an `aa-message` shown below the field.
- **Range error** — error state applied to the range fields.
- **With min and max** — a date field constrained to a range, e.g. not backdated and within the next 90 days.

## Things to consider
- In range mode, only one popover can be open at a time (tied to `activeField`) — opening the end field's popover closes the start field's, and vice versa.
- The text input and the calendar popover stay in sync — a typed value updates the calendar, and a calendar selection updates the typed value.
- Setting both `min` and `max` constrains the calendar; the text input itself does not validate typed dates against these bounds beyond what `parseDisplayDate` can parse.

## Accessibility

### Focus order
Each field's text input and toggle button sit in the natural tab order. Selecting a date in the popover (single mode, or the second click in range mode) closes the popover and returns focus to the toggle button that opened it. Escape does the same.

### Keyboard interactions

| Key | Action |
|---|---|
| Escape | Closes the open popover and returns focus to the toggle button that opened it. |

_TODO: arrow-key/Home/End/PageUp/PageDown navigation within the calendar grid is documented on `aa-calendar`, not in this component's own source — see the `aa-calendar` documentation for popover-content keyboard behaviour._

### ARIA
- `aria-haspopup="dialog"` and `aria-expanded` on each toggle button, reflecting whether its popover is open.
- `role="dialog"` and `aria-label="Choose a date"` on the popover.
- `aria-label` on each text input, set to the field's label.
- `aria-describedby` on each text input, referencing the description/helper and error message ids.
- `aria-invalid="true"`/`"false"` on each text input, reflecting the `error` state.

### SEO and AI discovery
_TODO: not covered in source or stories._

## Related components
- `aa-calendar` — the calendar grid rendered inside the popover.
- `aa-input-label` — supplies the label, description and helper disclosure.
- `aa-message` — renders the error message.
- `aa-icon` — supplies the calendar icon on the toggle button.
