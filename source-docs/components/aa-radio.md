# Aa-radio

## Overview
`aa-radio` is the control for choosing a single option from a set of mutually exclusive choices. It wraps a visually hidden native `<input type="radio">` so browser radio-group semantics and keyboard behaviour work natively, while rendering its own label, description, helper and error copy via `aa-input-label` and `aa-message`.

## Anatomy
1. **Native input** — a visually hidden `<input type="radio">` that drives the real checked state and browser radio-group behaviour.
2. **Control** — the visible circular radio dial, with an inner dot that scales in when checked.
3. **Copy** (`aa-input-label`) — label, description and/or helper text, rendered by the shared `aa-input-label` primitive. Omitted entirely on the `atom` variant.
4. **Error message** (`aa-message`) — shown below the row when `error` is set. Not available on `atom`, which has no room for it.

Figma verification: `Single/Radio` (node `17645:10031`) for `default`/`outline`; `Radio/.Atom` (node `17645:9892`) for `atom`.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `default` \| `outline` \| `atom` | `default` | Visual style. `outline` wraps the row in a bordered, padded card (same shape as `aa-checkbox`'s `outline`). `atom` is an icon-only radio with no label/description/helper/error. |
| `checked` | `boolean` | `false` | Whether this radio is selected. Reflects to an attribute. |
| `label` | string | `'Label'` | The radio's label text. Not rendered on `atom`, but still used as the native input's `aria-label`. |
| `description` | string | `''` | A plain supporting line under the label. Not shown on `atom`. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed expand/collapse disclosure instead of a plain line. Figma never shows both `description` and `helper` at once — `helper` wins if both are set. |
| `error` | string | `''` | Shows a red border plus an error message below the row, via `aa-message`. Not available on `atom`. |
| `name` | string | `''` | Native radio group name — radios sharing a `name` within the same `<form>` (or document) are mutually exclusive. |
| `value` | string | `'on'` | The native input's value. |

## Behaviour
- **Grouping**: radios are grouped by native `name`, matching Figma's own note that grouping happens by field `value`/`name`, not a per-item checked/unchecked toggle managed externally. Checking one radio automatically unchecks every other `aa-radio` sharing its `name` within the same `<form>` (or the whole document if not in a form).
- **Change**: selecting a radio dispatches a bubbling, composed `change` event.
- **Hover**: the control's border and background shift to the hover tokens; on `outline`, the whole card's border colour shifts.
- **Checked**: the control's border widens to the "selected" thickness and the inner dot scales in over a 160ms ease transition. On `outline`, the card border also switches to the checked colour.
- **Error**: the control (or, on `outline`, the whole card) shows the error border colour and width; an `aa-message` renders below with the error copy. `aria-invalid="true"` is set on the native input.
- **Focus**: a dashed focus ring appears around the control on `:focus-visible`, using the shared focus-ring transition.
- **Responsive behaviour**: `default` sizes to content (`width: fit-content`); `outline` stretches to fill its container up to a 500px max width with a 120px minimum.

## Usage

### When to use
- A set of mutually exclusive options where exactly one must (or can) be selected.
- Options that benefit from supporting description or helper copy alongside the label — use `default` or `outline`.
- A dense, icon-only selection control with no room for copy — use `atom`.
- A selection that should read as a bordered, tappable card (e.g. plan/cover options) — use `outline`.

### When not to use
- Multiple options that can be selected independently — use `aa-checkbox` instead.
- A binary on/off toggle rather than a choice among options — use `aa-switch`/toggle instead.
- A small, closed set of mutually exclusive options better suited to a compact segmented control — use `aa-segmented-control`.

## Content guidance

### What to write
- Keep `label` short and specific to the option it represents.
- Use `description` for a single supporting line; switch to `helper` only when that supporting content is long enough to warrant a collapsed disclosure — never set both expecting them to show together.
- Reserve `error` for a genuine validation message explaining what the user needs to do, e.g. selecting one of the options.

### How to write
- Use sentence case for labels, descriptions and error messages.
- Use British English spelling throughout.
- Avoid adverbs such as "simply", "just" or "easily".
- Keep error messages actionable and specific rather than generic.

| Do ✅ | Don't ❌ |
|---|---|
| "Please make a selection" | "Error: selection required" |
| "Monthly payment" | "Monthly" |
| "Comprehensive cover" | "Comprehensive" |

## Examples
- **Default** — label with description, unselected.
- **Selected** — default variant, checked.
- **With helper** — description collapsed behind an expand/collapse disclosure.
- **With error** — red border and error message shown.
- **Outline** — bordered card variant, unselected and selected states.
- **Outline with error** — bordered card showing the error border colour.
- **Atom** — icon-only radio with no copy.
- **Group** — multiple `default` radios sharing one `name`, showing exclusive selection.
- **Outline group** — multiple `outline` radios sharing one `name`.
- **State matrix** — default/outline × unchecked/checked/helper/error combinations shown together.

## Things to consider
- `outline`'s border is always rendered at the "selected" (2px) thickness — hover/checked/error only ever change its colour, never its width, so nothing inside shifts when state changes.
- `helper` and `description` are mutually exclusive in effect — setting both results in `helper` taking over the row; don't rely on `description` still being visible.
- `atom` silently drops `description`, `helper` and `error` — don't set them expecting any visible effect.
- Grouping by `name` scans the nearest `<form>` ancestor, or the whole document if there isn't one — radios with the same `name` outside a shared form context anywhere on the page will still affect each other.

## Accessibility

### Focus order
The native `<input type="radio">` sits in the natural tab order; each `aa-radio` in a group participates in the browser's native radio-group tabbing behaviour (only the checked radio, or the first if none is checked, is tab-stoppable within a group with the same `name`).

### Keyboard interactions

| Key | Action |
|---|---|
| Arrow keys | Move selection between radios sharing the same `name` (native browser behaviour). |
| Space | Selects the focused radio (native browser behaviour). |

### ARIA
- `aria-label` — set on the native input to `label` (or `"Radio option"` if `label` is empty), since the visible label lives outside the input in a separate `aa-input-label`.
- `aria-describedby` — points at the `aa-input-label` copy and/or the `aa-message` error, when either is present, joined as a space-separated id list. Both targets are the whole host element's id, since their internal description/helper text lives behind their own shadow boundary with no inner id to point at directly.
- `aria-invalid` — `"true"` when `error` is set (and the variant supports copy), otherwise `"false"`.
- Native `type="radio"` semantics are used directly — no `role` override.

### SEO and AI discovery
- Uses a real native `<input type="radio">`, so grouping, checked state and keyboard behaviour are all natively understood by assistive tech and browsers rather than simulated.
- `label` text should describe the option on its own, since it's the only text exposed via `aria-label` when the visible label element itself sits outside the accessibility tree's direct reach.
- _TODO: confirm whether the shadow-DOM `aria-describedby` targeting (host-level ids) is resolved consistently across all assistive tech, given cross-shadow-boundary `aria-describedby` support varies by browser._

## Related components
- `aa-checkbox` — the equivalent control for independently selectable (non-exclusive) options; shares the `outline` card shape.
- `aa-input-label` — renders the label/description/helper copy for `default` and `outline`.
- `aa-message` — renders the error copy below the row.
- `aa-segmented-control` — an alternative, compact exclusive-choice control for a small closed set of options.
