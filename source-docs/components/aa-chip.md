# Aa-chip

## Overview
`aa-chip` is a compact, pill-shaped control used for choices, filters, assists, and removable input tags. Its behaviour varies by `variant`: three variants (`choice`, `filter`, `assist`) are controlled toggles reporting intent to an ancestor; `input` is a removable tag with no toggle state.

Figma verification: `Chip` (node `13000:6412`) — Variant Choice/Input/Filter/Assist × State Default/Hover/Selected/Focus.

## Anatomy
1. **Icon slot** (`icon`) — optional leading icon. `assist` chips show a default `calendar` icon automatically if none is slotted.
2. **State icon** — a `check-circle` shown on selected `filter` chips, or an `x-circle` "remove" icon shown unconditionally on `input` chips.
3. **Label** — the chip's value text, via the default slot (falls back to `"Value"` if empty).

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `choice` \| `input` \| `filter` \| `assist` | `choice` | Determines interaction model: `choice`/`filter`/`assist` are controlled toggles; `input` is a removable tag. |
| `selected` | `boolean` | `false` | Visual selected state. For toggle variants, a click never mutates this directly — only a managing ancestor (`aa-chip-group`) should set it. |

## Behaviour
- **`input` has no selected state**: its trailing `x-circle` icon shows unconditionally (not gated on `selected`), and a click fires `chip-remove` rather than participating in toggle semantics.
- **`choice`/`filter`/`assist` stay controlled**: a click never mutates `selected` itself — it only dispatches a bubbling, composed `chip-select` event. An ancestor (typically `aa-chip-group`) decides what "selected" should mean (exclusive vs. multiple) and sets the attribute accordingly.
- **Standalone chip is inert on click**: with no managing group, clicking a `choice`/`filter`/`assist` chip dispatches the event but nothing visibly changes — same behaviour as a standalone `aa-pill`/`aa-segmented-control` leaf.
- **`assist` default icon**: shows a `calendar` icon automatically if no icon is slotted.
- **`filter` selected icon**: shows a `check-circle` state icon when selected.
- **Hover/focus**: background and border colour shift on hover; a dashed focus ring appears on `:focus-visible`.
- **Selected styling**: selected chips (`choice`/`filter`/`assist`) switch to a solid dark background and light text.
- **Responsive behaviour**: sizes to its content; no dedicated breakpoints of its own (wrapping/layout is handled by a parent like `aa-chip-group`).

## Usage

### When to use
- A single selectable option among several, especially inside `aa-chip-group` (`choice`).
- A filter toggle in a filter bar (`filter`).
- A quick, icon-led action suggestion (`assist`), e.g. offering to open a date picker.
- A removable value representing an already-applied input, like a selected tag (`input`).

### When not to use
- A binary on/off setting in a traditional form — use `aa-checkbox` instead.
- Mutually exclusive choices needing full radio-button semantics and native form submission — use `aa-radio`.
- A standalone chip expecting click feedback with no managing group — pair `choice`/`filter`/`assist` chips with `aa-chip-group`, since a standalone chip is inert on click.

## Content guidance

### What to write
- Keep chip values short — a word or short phrase, since the pill shape doesn't wrap gracefully (text is set to `white-space: nowrap`).
- For `input` chips, use the exact value being represented (e.g. a selected filter term) so removal is unambiguous.
- For `assist` chips, phrase the value as a suggested action or shortcut, not a full sentence.

### How to write
- Use sentence case.
- Use British English spelling.
- Keep wording specific and scannable — avoid vague values like "Option 1".

| Do ✅ | Don't ❌ |
|---|---|
| "Roadside & Home" | "Option A" |
| "European cover" | "Additional Coverage For Europe" |

## Examples
- **Choice** — default selectable chip.
- **Selected** — the selected visual state.
- **Input** — a removable tag with a trailing remove icon.
- **Assist** — an icon-led suggestion chip.
- **Removable** — a row of `input` chips that remove themselves on `chip-remove`.
- **With label** — `choice` chips inside a labelled `aa-chip-group`.
- **Multiple selection** — independently toggled `choice` chips inside a `multiple` group.
- **Group layouts** — inline and grid layouts, mixing variants.

## Things to consider
- Because text is set to `white-space: nowrap`, very long chip values will overflow rather than wrap — keep values short by design, not just by convention.
- `selected` is not mutated internally for toggle variants — setting it directly on a standalone chip works for initial/demo state, but any interactive toggling logic must live in a managing ancestor like `aa-chip-group`.
- `input`'s remove icon includes visually-hidden text (", remove") appended to the accessible name — don't duplicate "remove" in the visible chip value itself, or the announced name will be redundant.

## Accessibility

### Focus order
`aa-chip` renders a real `<button>` and participates in normal tab order at its position on the page.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the chip — dispatches `chip-select` (toggle variants) or `chip-remove` (`input`). |
| Space | Activates the chip (native `<button>` behaviour). |

### ARIA
- `aria-pressed` — set to `"true"`/`"false"` on `choice`/`filter`/`assist` chips to reflect toggle state; omitted entirely on `input` chips, since they aren't a toggle.
- The `input` variant's remove icon is paired with visually-hidden text (", remove") appended after the visible label, so the accessible name communicates the remove action.
- No `role` override is needed — a real `<button>` element is used directly.

### SEO and AI discovery
- Renders as a real `<button>`, so it's natively focusable and interactive to assistive technology, without relying on simulated ARIA widget roles.
- Because `choice`/`filter`/`assist` chips don't manage their own `selected` state, an automated agent inspecting the page should rely on the live `aria-pressed` value (reflecting what the managing group has set) rather than assuming click always toggles state directly.

## Related components
- `aa-chip-group` — manages selection for `choice` chips; groups chips visually and provides an optional label header.
- `aa-checkbox` / `aa-radio` — alternative selection patterns for traditional form contexts.
- `aa-icon` — supplies the leading icon and state icons.
