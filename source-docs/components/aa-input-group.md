# Aa-input-group

## Overview
`aa-input-group` labels and lays out a set of related, slotted inputs (e.g. `aa-radio`, `aa-checkbox`, `aa-switch`, `aa-selector`) under a single shared label, description and error. It doesn't own any checked/selected state itself — per Figma's own note on the component, "coded radio fields are grouped and the value of the field indicates its state" — it only groups, labels and lays out whatever real inputs the consumer nests inside it. `role="group"` plus `aria-labelledby`/`aria-describedby` tie the whole set to the outer label and error, the same relationship a native `<fieldset>`/`<legend>` has to its inputs.

Figma verification: `Input Group` (node `17666:5575`) — Type Radio/Checkbox/Switch/Selector × Is Inline True/False × Default/Error.

## Anatomy
1. **Label** (`aa-input-label`) — group label, with an optional static `description` line or `helper` disclosure underneath.
2. **Group** — the slotted inputs, laid out per `layout`, with `role="group"` tying them to the label.
3. **Slotted inputs** (default slot) — the real interactive controls, e.g. `aa-radio`, `aa-checkbox`, `aa-switch`, `aa-selector`.
4. **Error message** (`aa-message`) — shown below the group when `error` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | Group label text, rendered via `aa-input-label`. |
| `description` | string | `''` | Static description line under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `error` | string | `''` | Error message shown below the group; also sets `aria-describedby` on the group. |
| `layout` | `stack` \| `inline` | `stack` | `stack` lays slotted inputs out in a column; `inline` wraps them in a row, each flexing to a minimum width. |

## Behaviour
- The group doesn't manage checked/selected state — it purely lays out and labels whatever inputs are slotted in.
- `aria-labelledby` always points at the label; `aria-describedby` is built from the description/helper label id and the error id, whichever are present.
- In `layout="inline"`, slotted inputs flex (`flex: 1 1 12rem`) and wrap rather than each taking a fixed width.
- When `helper` is set it replaces `description` as the second line under the label, rather than the two stacking together.

## Usage

### When to use
- A set of related radio buttons, checkboxes, switches or selectors that share one label, description and error.
- Anywhere a native `<fieldset>`/`<legend>` grouping would apply, but with the design system's own label/description/error styling.

### When not to use
- A single standalone input — use the input's own labelling (e.g. `aa-text-field`), not `aa-input-group`.
- Inputs that aren't related to each other or don't share a common error — group them separately instead.

## Content guidance

### What to write
- Write the group label as a short question or instruction describing the choice, e.g. "Choose your cover".
- Use `description` (or `helper` for longer detail) to add any context the label alone doesn't cover.
- Write `error` to state what the user needs to do, e.g. "Please make a selection".

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout.

## Examples
- **Stack** — default column layout for a group of radio options.
- **Inline** — options wrap in a row instead of a column.
- **With error** — error message shown below the group, tied via `aria-describedby`.

## Things to consider
- The group is type-agnostic — it doesn't validate or constrain what's slotted in, so the consumer is responsible for giving all slotted inputs a shared `name` where relevant (e.g. radios).
- Don't stack `description` and `helper` — only one renders, with `helper` taking priority.

## Accessibility

### Focus order
Focus moves through the slotted inputs in document order; the group element itself is not focusable.

### Keyboard interactions
_TODO: keyboard interactions are owned by whichever inputs are slotted in (e.g. `aa-radio`), not by `aa-input-group` itself._

### ARIA
- `role="group"` on the wrapper containing the slotted inputs.
- `aria-labelledby` points at the label element, tying the group to its label.
- `aria-describedby` references the description/helper label id and the error id, when present.

### SEO and AI discovery
_TODO: not determinable from source or story — no SEO/AI-specific behaviour documented._

## Related components
- `aa-input-label` — renders the group's label, description and helper.
- `aa-radio`, `aa-checkbox`, `aa-switch`, `aa-selector` — the real inputs typically slotted into a group.
- `aa-message` — renders the group's error text.
