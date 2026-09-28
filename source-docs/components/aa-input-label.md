# Aa-input-label

## Overview
`aa-input-label` is an internal primitive: the bold label line above an input, plus at most one of a static `description` line or the `aa-input-helper` disclosure underneath it. Figma never shows both together, so `helper` (when set) always wins over `description` as the second line, rather than stacking them.

It renders a plain `<span>`/`<div>` structure, not an HTML `<label>` — the real `<label>` (or the click-target wrapper around it) stays owned by whatever input composes this, exactly as it already is in `aa-checkbox`/`aa-radio`/`aa-text-field` today. It is not part of the public component API, so it has no story of its own.

Figma reference: `.Label` (node `19564:22626`).

## Anatomy
1. **Label** — the bold label text.
2. **Description** — an optional static hint line, shown when `helper` is not set.
3. **Helper** (`aa-input-helper`) — an optional disclosure, shown instead of `description` when `helper` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | The label text. |
| `description` | string | `''` | Static description line, shown only when `helper` is not set. |
| `helper` | string | `''` | Button text for the description-as-disclosure alternative; when set, replaces `description` as the second line. |
| `size` | `large` \| `small` | `large` | Controls the label's font size. |
| `error` | `boolean` | `false` | Recolours the label text to the danger colour; the description/helper underneath stays neutral. |

## Behaviour
- `helper` always takes priority over `description` as the second line — the two never stack.
- `error` only recolours the label itself; the description or helper text underneath stays neutral, matching Figma's own Error variant.

## Usage

### When to use
- Composed inside other input components (e.g. `aa-checkbox`, `aa-radio`, `aa-text-field`, `aa-input-group`, `aa-numerical-stepper`) to render their label, description and helper consistently.

### When not to use
- As a standalone public component — it isn't intended to be used directly outside of another input component, and doesn't render a real `<label>` element itself.
- For a group-level heading over multiple inputs (e.g. a `<fieldset>`) — use `aa-input-legend` instead, which uses heading-weight type.

## Content guidance

### What to write
- Make label text short and direct, describing what the input is for.
- Use `description` or `helper` to add any context the label alone doesn't cover.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout.

## Examples
_TODO: no dedicated story exists for this component — it is only exercised indirectly via the inputs that compose it (e.g. `aa-input-group`, `aa-numerical-stepper`)._

## Things to consider
- Not part of the public component API — it has no story of its own.
- Doesn't render a native `<label>` element — the consuming input owns the real label/click-target association.
- Only one of `description` or `helper` is shown at a time.

## Accessibility

### Focus order
Not focusable itself — it contributes no interactive element other than the `aa-input-helper` disclosure when `helper` is set.

### Keyboard interactions
_TODO: keyboard interactions, when present, are owned by the composed `aa-input-helper` — see its own documentation._

### ARIA
- No ARIA role is applied to the label itself; association with the real input (e.g. via `aria-labelledby`) is the responsibility of whichever component composes `aa-input-label`.

### SEO and AI discovery
_TODO: not determinable from source — no SEO/AI-specific behaviour documented; not a standalone public component so not typically an independent target for discovery._

## Related components
- `aa-input-helper` — composed when `helper` is set, for the description-as-disclosure alternative.
- `aa-input-legend` — the equivalent primitive for a `<fieldset>`/`<legend>` group heading.
- `aa-checkbox`, `aa-radio`, `aa-text-field`, `aa-input-group`, `aa-numerical-stepper` — components that compose `aa-input-label` for their own labelling.
