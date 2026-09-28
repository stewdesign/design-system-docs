# Aa-text-field

## Overview
`aa-text-field` is the single control for free-text entry across the design system, covering plain text, email, telephone, search and password inputs. It pairs a label, optional description/helper text and error messaging with a native `<input>`, so the same accessible structure applies to every text-entry field regardless of type.

## Anatomy
1. **Label** (`aa-input-label`) — rendered above the control, along with the optional description/helper text.
2. **Prefix slot** (`slot="prefix"`) — optional leading content (e.g. a currency symbol or dialling code) shown before the input, separated by a divider.
3. **Input** — the native `<input>` element; its `type` switches between `text`, `email`, `tel`, `search` and `password`.
4. **Trailing icon slot** (`slot="icon"`) — optional icon shown after the input. Not available on `type="password"`.
5. **Password toggle** — for `type="password"` only, a built-in show/hide button replaces the icon slot position.
6. **Error message** (`aa-message`) — shown below the control when `error` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | The field's visible label, also set as the input's `aria-label`. |
| `description` | string | `''` | Plain supporting line shown under the label. Ignored if `helper` is set. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. Figma never shows both `description` and `helper` at once, so `helper` wins if both are set. |
| `error` | string | `''` | Error message shown below the control. Also sets `aria-invalid="true"` on the input. |
| `type` | `text` \| `email` \| `tel` \| `search` \| `password` | `text` | Native input type. `password` additionally gets a built-in show/hide toggle. |
| `name` | string | `''` | Native `name` attribute, passed through when set. |
| `value` | string | `''` | The current input value, kept in sync with the native input via `live()`. |
| `required` | `boolean` | `false` | Reflects the native `required` attribute. |

## Behaviour
- **Focus**: the control shell shows a dashed focus ring (`::after`), positioned behind the shell in its own stacking context, when the inner input has focus (`:focus-within`).
- **Hover**: the control shell's background changes on hover, unless it's in the error state.
- **Error**: the shell's border switches to an error-coloured, thicker border, and an `aa-message` of `type="error"` appears below the control with `aria-invalid="true"` set on the input.
- **Prefix**: when content is slotted into `slot="prefix"`, a vertical divider appears between it and the input, and the prefix is included in `aria-describedby` so it's announced as context rather than purely decorative.
- **Trailing icon**: appears only when something is slotted into `slot="icon"`, and only for non-password types.
- **Password visibility**: `type="password"` renders a real, focusable show/hide toggle button (native `eye`/`eye-off` icon) that flips the actual `<input type>` between `password` and `text` — not a custom masking character — so paste, autofill and password-manager behaviour keep working. `aria-pressed` and the accessible label ("Show password" / "Hide password") update with the state.
- **Description vs helper**: `description` renders as a plain line; setting `helper` turns that same line into an expand/collapse disclosure instead. They are mutually exclusive in the rendered output.
- **`aria-describedby`**: built up dynamically from whichever of the label's description/helper, the prefix, and the error message are present.

## Usage

### When to use
- Any single-line free-text input: names, emails, phone numbers, search queries, passwords.
- Fields that need a prefix (e.g. a currency symbol) or a trailing icon (e.g. an info icon) alongside the value.
- Fields requiring inline validation messaging (`error`).

### When not to use
- Multi-line input — _TODO: name the multi-line/textarea equivalent, if one exists in this system._
- Numeric steppers or currency amounts requiring formatting/validation logic beyond a plain prefix — consider a dedicated numeric input component if one exists.
- Selecting from a fixed set of options — use a select, radio group or combobox component instead.

## Content guidance

### What to write
- Keep labels short, direct and in sentence case — it's easier to read and spot nouns.
- Avoid colons at the end of labels.
- Use `description` for a single supporting line; use `helper` only when that guidance is long enough to warrant hiding it behind a disclosure.
- Error messages should tell the user what's wrong and, where possible, how to fix it.

### How to write
- Use sentence case, not title case, for labels and helper/description text.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily".
- Use "not" rather than contractions like "isn't"/"aren't" when describing exclusions or requirements, for clarity.

| Do ✅ | Don't ❌ |
|---|---|
| "Email address" | "Email Address:" |
| "Password" | "Just enter your password" |
| "Enter a valid postcode" | "Postcode isn't valid" |

## Examples
- **Default** — label only, no description, helper, error or icon.
- **With description** — a plain supporting line under the label.
- **With helper** — supporting text collapsed behind a disclosure toggle.
- **Error** — error-coloured border and message shown below the control.
- **With trailing icon** — an `aa-icon` slotted after the input.
- **With prefix** — a currency symbol (e.g. "£") before the input, for an amount field.
- **Filled value** — pre-populated input value.
- **Password** — `type="password"` with the built-in show/hide toggle.
- **Password error** — password field combined with an error message.

## Things to consider
- `aria-describedby` can only target the whole `aa-input-label` host, since its description/helper text lives behind its own shadow boundary — there's no inner id to point at directly. This means the label text is effectively announced twice (once as `aria-label`, once via `aria-describedby`); accepted for now rather than having the primitive expose its text another way.
- `description` and `helper` are mutually exclusive in the rendered output — setting both still only shows the helper disclosure.
- The trailing icon slot is not available on `type="password"` — that position is reserved for the show/hide toggle.
- `:host` has a `max-inline-size` of `22.5rem` (`--aa-text-field-max-inline-size`) and a `min-inline-size` of `min(100%, 15rem)` — the field does not grow arbitrarily wide.

## Accessibility

### Focus order
The field participates in the natural tab order as a single native `<input>`. When `type="password"`, the show/hide toggle button is a separate, independently focusable stop immediately after the input.

### Keyboard interactions

| Key | Action |
|---|---|
| Tab | Moves focus into (and out of) the input, then to the password toggle if present. |
| Enter | Submits the enclosing form, per native `<input>` behaviour. |
| Space | Activates the password show/hide toggle when it has focus. |

### ARIA
- `aria-label` — set to the visible `label` value on the input.
- `aria-describedby` — points at the label's description/helper container, the prefix (if present), and the error message (if present).
- `aria-invalid` — `"true"` when `error` is set, `"false"` otherwise.
- `aria-pressed` — on the password toggle button, reflecting whether the password is currently shown.
- `aria-label` on the password toggle — "Show password" or "Hide password", depending on state.

### SEO and AI discovery
- Renders a real native `<input>` and `<button>` (for the password toggle), so semantics and focusability are native rather than simulated.
- The visible label is also the input's accessible name via `aria-label`, so assistive tech and AI agents parsing the page get an accurate description of the field's purpose without relying on visual position alone.
- _TODO: confirm whether this component is expected to appear inside a `<form>` landmark or with any additional metadata for SEO purposes._

## Related components
- `aa-input-label` — renders the label, description and helper disclosure; used internally by `aa-text-field`.
- `aa-message` — renders the error message shown below the control.
- `aa-icon` — supplies the optional trailing icon.
- `aa-date-picker` — uses the same unstyled-button-with-dashed-focus pattern for its own toggle.
