# Aa-date-of-birth

## Overview
`aa-date-of-birth` is a three-segment (day/month/year) text-entry pattern for capturing a date of birth. It is typed, not picked — there is no calendar popover — since date-of-birth entry is fastest and most accessible as three plain numeric fields.

Figma verification: `Pattern/Date Of Birth` (node `17153:2361`) — Default / Error - Missing value / Error - Age limit.

## Anatomy
1. **Group label** — an `aa-input-label` showing `label`, `description` and/or `helper` for the whole group.
2. **Day field** — a plain bordered numeric input, 2-character max, placeholder "DD".
3. **Month field** — a plain bordered numeric input, 2-character max, placeholder "MM".
4. **Year field** — a plain bordered numeric input, 4-character max, placeholder "YYYY".
5. **Error message** (optional) — rendered via `aa-message` below the fields when `error` is set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Enter your date of birth'` | Group label text. |
| `description` | string | `'For example 20/4/1980'` | Plain supporting line under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `error` | string | `''` | Error message shown below the fields. |
| `name` | string | `''` | Base name for the three native inputs; each is suffixed (`-day`, `-month`, `-year`). |
| `day` / `month` / `year` | string | `''` | The three segment values. |
| `day-error` / `month-error` / `year-error` | `boolean` | `false` | Marks which specific segment(s) should render red when `error` is set. Leaving all three unset while `error` is set defaults to reddening all three. |

## Behaviour
- **Two Figma error variants, one mechanism**: "Missing value" reddens just the empty segment; "Age limit" reddens all three (the values are individually fine, the combination isn't). Rather than inferring this from emptiness — fragile, since the static mock's placeholders don't distinguish empty from filled — the three `*-error` properties let the consumer say explicitly which segment(s) are invalid; leaving them all unset while `error` is set covers the "all three" age-limit case automatically.
- **Combined value**: reading `.value` returns the ISO `yyyy-mm-dd` string once all three segments form a real, valid date — otherwise it returns an empty string. Uses the same `parseDisplayDate` utility built for `aa-date-picker`.
- **Numeric input mode**: each field sets `inputmode="numeric"` to bring up a numeric keypad on mobile.
- **Events**: fires a bubbling `input` event on every keystroke in any segment, and a bubbling `change` event when a segment loses focus after changing.
- **Focus ring**: a dashed focus ring appears around whichever segment currently has focus.
- **Responsive behaviour**: fixed maximum width (16rem); the three fields sit in a fixed-ratio grid (`1fr 1fr 1.25fr`, giving the year field slightly more room for its four digits).

## Usage

### When to use
- Capturing a user's date of birth in a form, especially where quick, precise typed entry is preferable to picking from a calendar.
- Any context where Figma's `Pattern/Date Of Birth` has been specified.

### When not to use
- Picking an arbitrary future or past date (e.g. an appointment date) where visually browsing a calendar helps — use `aa-calendar`/a date-picker pattern instead.
- A single combined date field — this pattern is specifically three separate segments, not one text field.

## Content guidance

### What to write
- Keep the group label direct and specific, e.g. "Enter your date of birth".
- Use `description` to show an example format (e.g. "For example 20/4/1980") so users understand the expected order without extra instruction.
- Write the error message to describe the actual problem — a missing value vs. an age limit issue are different problems and should read differently even though this component renders them with the same string.

### How to write
- Use sentence case throughout.
- Use British English spelling and day-month-year ordering, consistent with UK date conventions.
- Avoid the adverb "simply" or similar language in instructions — describe the format plainly instead.
- For product/age-limit exclusions, use "not" rather than contractions like "isn't" for clarity, e.g. "You must not be under 18 to apply."

| Do ✅ | Don't ❌ |
|---|---|
| "Enter your date of birth" / "For example 20/4/1980" | "DOB:" |
| "Please enter a valid year" | "Error" |

## Examples
- **Default** — three empty fields with placeholders and example description.
- **Filled** — a complete, valid date entered.
- **Error - missing value** — only the empty segment reddened, with a message.
- **Error - age limit** — all three segments reddened, with a message explaining the age restriction.

## Things to consider
- `aria-describedby` can only target the whole `aa-input-label` host, since its description/helper text lives behind its own shadow boundary — same trade-off as `aa-checkbox` and `aa-text-field`.
- `.value` only returns a non-empty result once all three segments combine into a genuinely valid date — don't rely on any single segment's value alone to determine completeness.
- The component does not itself enforce an age limit or valid calendar-day/month range (e.g. "31" for February) — validation logic and the resulting `error`/`*-error` state must be supplied by the consumer.
- The year field allows up to 4 digits but does not restrict to a sensible year range on its own.

## Accessibility

### Focus order
Each of the three native inputs (day, month, year) receives focus in normal left-to-right tab order at their position on the page.

### Keyboard interactions

| Key | Action |
|---|---|
| Tab / Shift+Tab | Moves focus between the day, month and year fields, and to/from surrounding content. |
| Number keys | Enters digits into the focused field (native text input behaviour). |

### ARIA
- The three-field wrapper carries `role="group"`, `aria-labelledby` pointing at the group label, and `aria-describedby` pointing at the error message when present.
- Each individual field carries its own `aria-label` (e.g. "Day", "Month", "Year") and `aria-invalid` reflecting its specific error state.
- `aria-invalid` per field is computed from both the shared `error` and that field's own `*-error` flag — a field is only marked invalid if either no specific segment was flagged (defaulting to "all invalid") or it was explicitly flagged itself.

### SEO and AI discovery
- Uses real `<input type="text" inputmode="numeric">` elements with individual `aria-label`s, so an automated form-filling tool or AI agent can identify and fill each segment distinctly rather than treating the group as one opaque control.
- Because there's no native `<input type="date">` involved, any automated agent relying on standard date-input semantics should instead read the three labelled segments individually.

## Related components
- `aa-calendar` — for picking a date visually rather than typing it, when that's the more appropriate interaction (e.g. future appointment dates).
- `aa-input-label` — renders the group's label/description/helper text.
- `aa-message` — renders the error message shown below the fields.
