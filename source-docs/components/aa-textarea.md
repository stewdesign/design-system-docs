# Aa-textarea

## Overview
`aa-textarea` is a multi-line text input for longer free-text content, such as comments or descriptions. It pairs a native `<textarea>` with the shared `aa-input-label` (label/description/helper) and `aa-message` (error) primitives also used by `aa-text-field`, so labelling and error presentation stay consistent across text inputs.

## Anatomy
Figma verification: `Single/Text Area` (node `17120:19095`).

1. **Label** (`aa-input-label`) — bold label line, required for every instance.
2. **Description or helper** — at most one of a static `description` line or the `helper` disclosure button renders beneath the label; `helper`, when set, always wins over `description`.
3. **Control shell** — the bordered container around the textarea, showing hover, focus and error states.
4. **Textarea** — the native, vertically resizable multi-line input.
5. **Error message** (`aa-message`) — appears beneath the control shell when `error` is set.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | The label text above the control. |
| `description` | string | `''` | Static supporting text shown under the label, unless `helper` is also set. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. Takes priority over `description` when both are set. |
| `error` | string | `''` | Error message text. When set, renders an `aa-message` beneath the control and applies the error border style. |
| `required` | `boolean` | `false` | Marks the native `<textarea>` as required. |
| `name` | string | `''` | Native `name` attribute, applied only when non-empty. |
| `value` | string | `''` | The current textarea value. |

## Behaviour
- **Hover**: only the control shell's background changes (`--surface-inputs-hover`); the border colour never changes. This differs from `aa-text-field`, which changes both.
- **Focus**: a dashed focus ring appears around the control shell (`focus-within`); as with hover, the border colour itself never changes.
- **Error**: the control shell's border width and colour switch to the error tokens, and an `aa-message` with an alert icon renders beneath the control with the `error` text.
- **Resize**: the textarea uses the native `resize: vertical` affordance — there is no custom resize handle icon.
- **Value updates**: `input` and `change` events update `value` internally and are re-dispatched (bubbling, composed) so consumers can listen on the host element.
- **Sizing**: the host has a minimum inline size of `15rem` and a maximum of `22.5rem` (exposed as `--aa-textarea-max-inline-size`); the control shell has a minimum block size of 96px.
- **Focus delegation**: calling `.focus()` on the host focuses the inner `<textarea>` directly.

## Usage

### When to use
- Collecting longer free-text input, such as a comment, description, or explanation, where a single-line field would be too short.
- Any form field where the expected answer could reasonably run to multiple lines or sentences.

### When not to use
- A single line of text, e.g. a name or reference number — use `aa-text-field` instead.
- A fixed set of options — use a select, radio group, or checkbox group instead.

## Content guidance

### What to write
- Keep the label short, direct and in sentence case so nouns are easy to spot.
- Use `description` for a single static supporting line; use `helper` instead when the supporting text is long enough to warrant a collapsed disclosure.
- Only set `error` to a message that tells the user what to do to fix the problem, not just that a problem exists.
- Mark a field `required` only when it is genuinely mandatory to submit the form.

### How to write
- Use sentence case for the label, and avoid colons at the end of it.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily" — what feels straightforward to one person may not be to another.
- Use the Harvard comma, not the Oxford comma, in any list within description or helper text.

| Do ✅ | Don't ❌ |
|---|---|
| "Tell us what happened" | "Simply describe what happened:" |
| "Enter a value to continue" | "You couldn't continue without entering a value" |
| "Additional details (optional)" | "Additional Details" |

## Examples
- **Default textarea** — label and description, empty value.
- **Textarea with helper** — description collapsed behind a helper disclosure button instead of shown as a plain line.
- **Textarea with error** — error border and `aa-message` shown beneath the control.
- **Textarea with value** — pre-filled with example content.
- **Required textarea** — `required` set.
- **State matrix** — default, with helper, with error and with value shown side by side.

## Things to consider
- Setting both `description` and `helper` does not stack them — only `helper` renders, since Figma never shows both together.
- The component does not truncate or limit the value length itself — apply any character limit and its messaging separately.
- `aria-describedby` can only target the whole `aa-input-label` host, not an inner element, since its description/helper text lives behind its own shadow boundary.
- The label passed to `aa-input-label` does not receive the `error` state — only the `aa-message` beneath the control communicates the error visually and via text; _TODO: confirm whether the label should also visually indicate error state, since `aa-input-label` supports an `error` property that `aa-textarea` does not currently pass through._

## Accessibility

### Focus order
`aa-textarea` participates in the natural tab order via its native `<textarea>` element, in the position the host occupies in the DOM.

### Keyboard interactions

| Key | Action |
|---|---|
| Tab | Moves focus into or out of the textarea in document order. |
| Any character key | Inserts text at the cursor position (native `<textarea>` behaviour). |
| Enter | Inserts a new line (native `<textarea>` behaviour). |

### ARIA
- `aria-label` — set to the `label` value on the native `<textarea>`.
- `aria-describedby` — points at the `aa-input-label` host (when `description` or `helper` is set) and/or the error message element `id`, space-separated.
- `aria-invalid` — set to `"true"` when `error` is set, `"false"` otherwise.
- `required` — native HTML attribute, applied when `required` is true.

### SEO and AI discovery
- Renders a real `<label>`-wrapped native `<textarea>`, so semantics and form association are native rather than simulated.
- The visible label and `aria-label` should state what content is expected, since a generic label like "Comments" carries less meaning out of context for assistive tech or AI agents parsing the page than a specific one.

## Related components
- `aa-text-field` — the single-line equivalent, sharing the same label/description/helper/error primitives.
- `aa-input-label` — supplies the label, description and helper disclosure above the control.
- `aa-message` — displays the error text beneath the control.
