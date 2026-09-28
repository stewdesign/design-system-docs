# Aa-fieldset

## Overview
`aa-fieldset` groups one or more related inputs (typically `aa-input-group`s) under a shared legend, rendering a real `<fieldset>`/`<legend>` pair so the legend becomes the group's accessible name natively.

Figma verification: `Fieldset` (node `14013:10859`, default variant `14013:10858`).

## Anatomy
1. **Legend** (`part="legend"`) — a native `<legend>` containing `aa-input-legend` at its large size, matching Figma's heading-weight legend spec.
2. **Content** (`part="content"`) — a default `<slot>` for the grouped inputs, e.g. one or more `aa-input-group`s.
3. **Action** (`part="action"`) — a `slot="action"` for a single action such as a "Continue" button, hidden automatically when empty.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Legend'` | Legend text, rendered via `aa-input-legend`. |
| `description` | string | `''` | Supporting description text below the legend. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |

## Behaviour
- Renders a real `<fieldset>`/`<legend>` pair — a `<legend>` is the only element a native fieldset picks up as its accessible name, so `aa-input-legend` sits inside a genuine `<legend>` rather than standing in for it.
- Internal spacing (legend to content, and between multiple slotted inputs/groups) uses the `--vertical-form-between-inputs` token; a larger `--vertical-form-between-fieldsets` token is reserved for stacking separate `aa-fieldset`s within a form.
- The action slot is hidden automatically (via `slotchange` measurement) when nothing is slotted into `slot="action"`.

## Usage

### When to use
- Grouping one or more related inputs (e.g. an `aa-input-group` of radios or checkboxes) under a shared legend.
- Providing a single action, such as a "Continue" button, that applies to the whole group of inputs.

### When not to use
- _TODO: not covered in source or stories — no guidance found for alternative components._

## Content guidance

### What to write
- Write the legend (`label`) to describe what the group of inputs is choosing, e.g. "Cover options" or "Breakdown cover".
- Use `description` to add context, e.g. "Choose the cover that suits you" or "Tell us how you'd like to be covered".
- Write the action button label using an active verb describing what happens next, e.g. "Continue".

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout.

## Examples
- **Default** — a fieldset with one `aa-input-group` of radios.
- **With action** — the same fieldset with a "Continue" button in the action slot.
- **Multiple inputs** — a fieldset containing two `aa-input-group`s (radios and checkboxes) plus an action button.

## Things to consider
- A fieldset's rendered legend sits outside the normal box flow even when the fieldset itself is a grid container — browsers don't apply row-gap between it and the next child, so the gap between legend and content comes from the legend's own margin instead.
- Reserve the action slot for a single action that applies to the whole group, not per-input actions.

## Accessibility

### Focus order
Not applicable at the fieldset level — focus order among the slotted inputs follows their own natural tab order; the `<legend>` itself is not focusable.

### Keyboard interactions

| Key | Action |
|---|---|
| _TODO: none defined at the fieldset level — keyboard interactions belong to the slotted inputs (e.g. `aa-radio`, `aa-checkbox`)_ | _TODO: see individual input component documentation_ |

### ARIA
- Uses a native `<fieldset>`/`<legend>` pair, so the legend is picked up automatically as the fieldset's accessible name with no explicit ARIA attributes needed.

### SEO and AI discovery
_TODO: not covered in source or stories._

## Related components
- `aa-input-group` — typically slotted as the content of a fieldset, grouping a set of radios or checkboxes.
- `aa-input-legend` — renders the legend text, description and helper disclosure.
- `aa-button` — commonly slotted into the action slot.
