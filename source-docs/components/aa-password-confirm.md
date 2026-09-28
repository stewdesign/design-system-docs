# Aa-password-confirm

## Overview
`aa-password-confirm` is the paired password-and-confirm pattern used when a user sets or changes a password. It combines two `aa-text-field` password inputs with a live requirements checklist and a live match message, all driven reactively from the typed values rather than a discrete `state` prop.

## Anatomy
1. **Password field** — an `aa-text-field` with `type="password"`, using that component's own show/hide toggle.
2. **Heading** — "Your chosen password" label above the requirements checklist.
3. **Requirements checklist** (`part="requirements"`) — four rows, each an icon (`part="requirement"`) plus text (`part="requirement-text"`), one per password rule.
4. **Confirm field** — a second `aa-text-field` with `type="password"`, named `{name}-confirm` when a `name` is set.
5. **Confirm message** (`part="confirm-message"`) — an icon plus text (`part="confirm-message-text"`) showing match/mismatch guidance.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Password'` | Label for the password field. |
| `confirmLabel` (`confirm-label`) | string | `'Confirm password'` | Label for the confirm field. |
| `name` | string | `''` | Name attribute for the password field; the confirm field is named `{name}-confirm` when set. |
| `value` | string | `''` | Current password field value. |
| `confirmValue` (`confirm-value`) | string | `''` | Current confirm field value. |

## Behaviour
- **Live checklist**: on every keystroke in the password field, each of the four requirement rows re-evaluates against `value` and flips its icon/colour between `info-circle`/`info` (not met) and `check-circle`/`positive` (met). The row's text stays neutral grey throughout — only the icon carries the colour.
- **Confirm message**: shows "Let's check your passwords" (`info-circle`/info) until `confirmValue` is non-empty and differs from `value`, at which point it switches to "Your passwords don't match" (`alert-circle`/danger). There is no distinct "matched" message.
- **No input-level error state**: the confirm field's own border never turns red — the checklist and message carry validity, not the input itself.
- **Live regions**: both the requirements list and the confirm message are wrapped in `aria-live="polite"` containers, so assistive tech announces changes as the user types.
- **Events**: re-dispatches `input` and `change` events (bubbling, composed) from both internal fields, so a consumer can listen on the host element itself.
- **Password visibility**: both fields inherit `aa-text-field`'s own `type="password"` show/hide toggle.

## Usage

### When to use
- Any password creation or change flow where the user must set a password and confirm it, e.g. account sign-up or password reset.
- Where live feedback on password strength/requirements and confirmation match materially helps the user succeed on the first attempt.

### When not to use
- A single password entry with no confirmation step (e.g. login) — use `aa-text-field` with `type="password"` directly.
- A password field where requirements shouldn't be surfaced live — _TODO: no simplified/requirements-less variant currently exists in code._

## Content guidance

### What to write
- Keep the requirement text exactly matched to Figma's fixed four rules (a number, a letter, 8-20 characters, a special character from `! @ # $ % ^ &`) — these are hard-coded in the component, not configurable per instance.
- Keep `label` and `confirmLabel` short and in sentence case, matching the field's purpose (e.g. "Password", "Confirm password").

### How to write
- Use sentence case for labels and messages, not title case.
- Use plain, direct language the user can act on immediately — "Your passwords don't match" states the problem clearly rather than hedging.
- Avoid jargon or technical terms when describing requirements — write for a reading age of around 9.
- Use British English spelling throughout.

| Do ✅ | Don't ❌ |
|---|---|
| "Confirm password" | "Confirm Password:" |
| "Your passwords don't match" | "Passwords aren't matching, please review" |

## Examples
- **Default** — both fields empty, no requirements met, neutral confirm message.
- **Success** — a password meeting all four requirements entered, checklist fully ticked.
- **Partial** — a password meeting some but not all requirements, checklist partially ticked.
- **Mismatch** — password and confirm fields both filled but with different values, showing the mismatch message.

## Things to consider
- This is a genuinely interactive/reactive component, not a set of static visual states — the four Figma variants (Default/Success/Mismatch/Partial) are snapshots of the same component at different input values, not separate modes to implement or toggle between.
- The component has a fixed maximum width (`max-inline-size: 26rem`) and stretches to fill its container up to that point.
- Requirement copy and the confirm message copy are not currently configurable via properties — changing them requires editing the component source.
- _TODO: no explicit "submit"/validation-complete state or event is exposed — a consuming form must derive overall validity itself from `value`/`confirmValue`._

## Accessibility

### Focus order
The two `aa-text-field` instances participate in the natural tab order in document order: password field, then confirm field. The requirements checklist and confirm message are not focusable — they are status text associated with the fields via live regions, not separately tabbable content.

### Keyboard interactions

| Key | Action |
|---|---|
| Tab / Shift+Tab | Moves focus between the password field, confirm field, and each field's own show/hide toggle (per `aa-text-field`). |

_TODO: no component-specific keyboard interactions beyond what `aa-text-field` itself provides._

### ARIA
- `aria-live="polite"` — applied to both the requirements container and the confirm message container, so updates are announced without interrupting the user.
- No `role` overrides — relies on `aa-text-field`'s native labelling and semantics for both inputs.
- _TODO: requirement rows are not individually associated with the password field via `aria-describedby` — confirm whether this is needed for full screen-reader clarity._

### SEO and AI discovery
- Renders real, labelled form fields (via `aa-text-field`), so field purpose is discoverable to assistive tech and autofill.
- Live-region text gives assistive tech and AI agents a textual, up-to-date description of password validity state without needing to interpret icon colour alone.

## Related components
- `aa-text-field` — supplies both password inputs, including the show/hide toggle.
- `aa-icon` — supplies the requirement and confirm-message icons.
