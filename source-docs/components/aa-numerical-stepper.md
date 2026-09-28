# Aa-numerical-stepper

## Overview
`aa-numerical-stepper` is a labelled +/- control for choosing a whole number within a range, e.g. quantity or number of passengers. Figma draws the value as plain bold text and the +/- controls as bare icons with no button chrome, but both stay real interactive elements underneath: the value is a real `<input type="number">` (styled to look like Figma's plain text, so it keeps arrow-key stepping and direct typing for free) and the controls are real `<button>`s with a `:focus-visible` ring, just visually unstyled to match. Hover/focus on the whole shell mirror `aa-text-field`.

Figma verification: `Single/Numerical Stepper` (node `17146:4621`) — Variant Stacked/Compact × Orientation Stacked/Inline × Default/Hover/Focus.

## Anatomy
1. **Label** (`aa-input-label`) — the stepper's label, with an optional `description` line or `helper` disclosure.
2. **Shell** — the bordered control container.
3. **Inline label** — shown inside the shell in `variant="stacked"` only, e.g. "Quantity", for a list of steppers that don't each carry their own outer label.
4. **Decrement button** — a bare `minus` icon button.
5. **Value input** — a real `<input type="number">` styled as plain bold text.
6. **Increment button** — a bare `plus` icon button.
7. **Visually-hidden live region** — announces the new value after a committed change.
8. **Error message** (`aa-message`) — shown below the control when `error` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | The stepper's outer label text. |
| `description` | string | `''` | Static description line under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `error` | string | `''` | Error message shown below the control; also sets `aria-invalid`/`aria-describedby` on the input. |
| `inlineLabel` (`inline-label`) | string | `''` | Label shown inside the shell in `variant="stacked"`, e.g. "Quantity". |
| `name` | string | `''` | Native `name` for the underlying `<input>`. |
| `min` | number | _undefined_ | Minimum value; when reached, the decrement button disables. |
| `max` | number | _undefined_ | Maximum value; when reached, the increment button disables. |
| `step` | number | `1` | Amount added/subtracted per +/- press. |
| `required` | `boolean` | `false` | Sets the native `required` attribute on the input. |
| `variant` | `stacked` \| `compact` | `stacked` | `stacked` shows `inlineLabel` inside the shell and caps the shell's width (210-220px, verified). `compact` drops the inline label for a standalone stepper that already has one, and the shell hugs its content instead. |
| `orientation` | `stacked` \| `inline` | `stacked` | `stacked` keeps the outer label above the shell; `inline` sets it beside the shell instead, each keeping its own natural width spread across the row. |
| `value` | number | `0` | The current numeric value. |

## Behaviour
- `variant` and `orientation` are independent axes: `variant` controls whether an inline label shows inside the shell and how the shell sizes itself; `orientation` controls whether the outer label sits above or beside the shell.
- The +/- buttons disable automatically once `value` would go past `min`/`max` on the next press.
- Typing into the value input updates `value` on every keystroke (so the +/- buttons' disabled state stays accurate) but deliberately does not update the announced live-region value on every keystroke — announcing while typing would talk over the user. The live region only updates on a committed change: a +/- button press or blur.
- Pressing +/- commits the change immediately, clamping to `min`/`max`, and dispatches both `input` and `change` events.
- Focus stays on the +/- button after a press rather than moving to the input, which is why the visually-hidden `aria-live` region exists — to announce the new value to screen reader users without moving focus.
- Calling `.focus()` on the component focuses the underlying value input.

## Usage

### When to use
- Choosing a whole number within a bounded range, e.g. quantity of an item or number of passengers.
- A list of steppers that share a common outer context, using `variant="stacked"` with an `inlineLabel` per row.
- A standalone stepper that already has its own outer label, using `variant="compact"`.
- A settings-style label-left, control-right row, using `orientation="inline"`.

### When not to use
- Free-form numeric entry with no meaningful stepping (e.g. currency amounts) — use `aa-text-field` with a numeric input mode instead.
- A choice between a small number of discrete named options — use a selection component instead of a numeric range.

## Content guidance

### What to write
- Keep `label` and `inlineLabel` short and direct, naming what's being counted, e.g. "Quantity" or "Passengers".
- Write `error` to state what the user needs to do, e.g. "Choose at least 1".

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Spell out "zero" and "one" in sentence form; use numerals for the numbers shown in the stepper itself and for `min`/`max`/`step` values.
- Use British English spelling throughout.

## Examples
- **Stacked** — default variant, inline label inside the shell, outer label above.
- **Compact** — no inline label, shell hugs its content; used standalone (e.g. "Passengers").
- **Inline orientation** — outer label beside the shell instead of above it.
- **Compact + inline orientation** — combines both axes.
- **With helper** — `description` shown as a collapsed disclosure instead of a plain line.
- **Error** — error message shown below the control.
- **At minimum / at maximum** — decrement or increment button disabled at the bound.

## Things to consider
- Setting both `min`/`max` bounds and a `step` that doesn't evenly divide the range can leave the stepper unable to reach `max` exactly.
- The value input accepts direct typing and native number-input arrow-key stepping in addition to the +/- buttons — don't assume the +/- buttons are the only way to change the value.
- `inlineLabel` only renders in `variant="stacked"` — setting it while `variant="compact"` has no visible effect.

## Accessibility

### Focus order
The component includes the value input and the two +/- buttons in the natural tab order, in document order: decrement button, value input, increment button.

### Keyboard interactions

| Key | Action |
|---|---|
| Arrow up | Increments the value by `step` (native number input behaviour, while the input is focused). |
| Arrow down | Decrements the value by `step` (native number input behaviour, while the input is focused). |
| Enter / Space | Activates the focused +/- button. |

### ARIA
- Each +/- button has a descriptive `aria-label` (e.g. "Decrease Quantity"/"Increase Quantity") built from `inlineLabel` or `label`, since the buttons show only bare icons.
- `disabled` is applied natively to whichever +/- button would exceed `min`/`max`.
- The value input carries `aria-label` (from `inlineLabel` or `label`), `aria-describedby` (referencing the description/helper and error), and `aria-invalid` reflecting `error`.
- A visually-hidden `aria-live="polite"` region announces the new value after each committed change, since focus stays on the +/- button rather than moving to the input.

### SEO and AI discovery
_TODO: not determinable from source or story — no SEO/AI-specific behaviour documented._

## Related components
- `aa-input-label` — renders the stepper's outer label, description and helper.
- `aa-text-field` — for free-form numeric or text entry without stepping.
- `aa-message` — renders the stepper's error text.
- `aa-icon` — supplies the decrement/increment icons.
