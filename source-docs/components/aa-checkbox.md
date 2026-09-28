# Aa-checkbox

## Overview
`aa-checkbox` is a single checkbox control with a label, optional description/helper text, and error state. It supports a real tri-state (checked/unchecked/indeterminate) and an alternative "outline" presentation that turns the whole row into a bordered, selectable card.

Figma verification: `Single/Checkbox` (node `17638:21846`).

## Anatomy
1. **Native checkbox input** — visually hidden but present for real form semantics and keyboard/pointer interaction.
2. **Control** — the visible box, showing a check or minus icon depending on state.
3. **Label copy** — rendered via `aa-input-label`, showing `label`, and optionally `description` or `helper`.
4. **Error message** (optional) — rendered via `aa-message` below the control row when `error` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `indeterminate` | `boolean` | `false` | Tri-state indicator. A real tri-state, not just visual — clicking clears it, same as a native indeterminate checkbox. |
| `variant` | `default` \| `outline` | `default` | `default` is a plain checkbox+label row; `outline` wraps the same row in a bordered, padded card. |
| `label` | string | `'Label'` | Accessible label text, also shown visually via `aa-input-label`. |
| `description` | string | `''` | Plain supporting line under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. Figma never shows both `description` and `helper` at once — `helper` wins if both are set. |
| `error` | string | `''` | Error message, shown via `aa-message` and reflected as a red border on the control. |
| `name` | string | `''` | Native form field name. |
| `value` | string | `'on'` | Native form field value. |

## Behaviour
- **Native checkbox underneath**: a real, visually-hidden `<input type="checkbox">` drives all state, keyboard and form-submission behaviour — the visible box is purely presentational, styled to reflect the native input's state.
- **Indeterminate is a real tri-state**: setting `indeterminate` sets the native input's `.indeterminate` property; clicking the control clears indeterminate the same way a native indeterminate checkbox does.
- **Outline variant**: the same control row is wrapped in a bordered, padded card — the same "selectable card" shape `aa-radio`'s `contained` variant uses. Hovering an outline card previews the "selected" border even before it's checked; checked/indeterminate states get the same border permanently.
- **Error state**: shows a red border (checkbox and, for `outline`, the whole card) plus a message below via `aa-message`; error always wins over the hover-preview border on the outline variant.
- **Description vs. helper**: `description` renders a plain supporting line; setting `helper` instead turns that line into an expand/collapse disclosure rather than a static line — the two aren't shown together.
- **Focus ring**: a dashed focus ring appears around the control on native `:focus-visible`, not on click.
- **Responsive behaviour**: sizes to fit its content (`width: fit-content`) by default; `outline` variant stretches to fill its container up to a maximum width (500px), with a minimum width of 120px.

## Usage

### When to use
- A single binary choice within a form (agree/disagree, opt in/out).
- One option within a group of independently selectable choices.
- A tri-state "select all" control representing a partially-selected group (`indeterminate`).
- A more prominent, card-like selectable option — `variant="outline"`.

### When not to use
- Mutually exclusive choices — use `aa-radio` instead.
- A toggle for an immediate setting change (rather than a form field to submit) — consider a switch/toggle component instead. _TODO: confirm the appropriate toggle component if one exists._
- Multiple related choice chips in a compact row — use `aa-chip-group` instead.

## Content guidance

### What to write
- Keep the label short, direct and in sentence case — it should read as a clear statement of what checking the box means.
- Use `description` for a brief supporting line; use `helper` instead only when that context is long enough to warrant hiding it behind a disclosure.
- Word the label so it's unambiguous both checked and unchecked — avoid double negatives.

### How to write
- Use sentence case for the label; avoid colons at the end.
- Avoid double negatives — they're confusing at best and deceptive at worst, e.g. avoid "Don't disable notifications".
- Use British English spelling.
- Keep error messages specific about what's needed, e.g. "Please make a selection" rather than a generic "Error".

| Do ✅ | Don't ❌ |
|---|---|
| "Send me marketing emails" | "Don't opt out of marketing emails" |
| "I agree to the terms and conditions" | "Agreement:" |

## Examples
- **Unchecked / Checked** — default states.
- **Indeterminate** — tri-state, partially selected.
- **With description** — supporting line under the label.
- **With helper** — description shown as a collapsible disclosure.
- **With error** — red border plus error message.
- **Outline / Outline checked / Outline with error** — the bordered card presentation.
- **State matrix** — all combinations shown together for comparison.

## Things to consider
- `aria-describedby` can only target the whole `aa-input-label` host, since its description/helper text lives behind its own shadow boundary — there's no inner id to point at more precisely.
- Setting both `description` and `helper` results in `helper` winning — `description`'s plain line is not also shown.
- The outline variant's border is always rendered at the "selected" 2px thickness, never a thinner default, to avoid layout shift between resting and selected/hover states — only its colour changes.
- `variant="outline"` changes the host's own width behaviour (stretches with a max-width cap) — mixing `default` and `outline` checkboxes in the same layout may need explicit width handling to align them.

## Accessibility

### Focus order
The native `<input type="checkbox">` receives focus in normal tab order at the checkbox's position on the page — it is visually hidden but remains the real focusable, interactive element.

### Keyboard interactions

| Key | Action |
|---|---|
| Space | Toggles the checkbox between checked and unchecked (clears indeterminate if set), native `<input type="checkbox">` behaviour. |

### ARIA
- `aria-label` — set from the `label` property on the native input.
- `aria-describedby` — points to the label host (when `description`/`helper` is set) and/or the error message element, joined together.
- `aria-invalid` — `"true"` when `error` is set, otherwise `"false"`.
- The visually-hidden native input retains all real checkbox semantics (checked/indeterminate state) rather than relying on ARIA state alone.

### SEO and AI discovery
- Uses a real native `<input type="checkbox">` under the hood, so form semantics, checked state, and keyboard behaviour are all native rather than simulated — critical for any automated form-filling tool or AI agent interacting with the page.
- Because the visible control is a separate, purely presentational element, ensure any custom styling changes don't obscure that the real interactive target is the underlying (visually hidden) input paired with its label.

## Related components
- `aa-radio` — for mutually exclusive choices; shares the same "outline"/`contained` card presentation concept.
- `aa-chip-group` — for a compact row of independently selectable choice chips instead of a list of checkboxes.
- `aa-input-label` — renders the label/description/helper text used internally.
- `aa-message` — renders the error message shown below the control.
