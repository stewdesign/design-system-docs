# Aa-login

## Overview
`aa-login` is the complete log-in flow pattern — email, password, one-time-code destination choice, and code entry — composed as a single component that manages its own steps and navigation. It appears wherever a returning user signs in, such as a dedicated log-in page or a modal triggered from account areas.

## Anatomy
1. **Back control** — a text link with a leading arrow icon, shown on every step; on the first step (`email`) it dispatches a `back` event instead of navigating internally, since there's no previous step to return to.
2. **Fieldset** (`aa-fieldset`) — wraps each step's field and action, with a step-specific `label`/`description`.
3. **Field slot** — a named slot (`email-field`, `password-field`, `code-field`) with a default `aa-text-field`, or `destination-options` with two default `aa-radio` choices.
4. **Action slot** — a named slot (`email-action`, `password-action`, `destination-action`, `code-action`) with a default `aa-button`.
5. **Email playback** — on the `password` step, shows the entered email with a "Change email" link back to the `email` step.
6. **Support prompts** — secondary links below the main action, e.g. "Create an account" or "Get a one-time login code".
7. **Resend control** — on the `code` step, either a "Send a new code" link or a live cooldown countdown, depending on `resendCooldown`.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `email` | string | `''` | The entered email address, shown in the password-step playback and used in code-destination copy. |
| `phone-last-digits` | string | `'495'` | Last digits of the mobile number, shown in the destination choice and code-step description. |
| `step` | `email` \| `password` \| `destination` \| `code` | `'email'` | Which step of the flow is showing. Reflected as an attribute so a page can resume a returning user directly into e.g. `code`. |

Named slots — `email-field`, `email-action`, `password-field`, `password-action`, `destination-options`, `destination-action`, `code-field`, `code-action` — each ship a Figma-verified default and can be replaced with a team's own element (e.g. a custom `aa-text-field` with its own validation), provided it bubbles `input`/`change` and exposes `.value` (fields), or bubbles `click` (actions).

## Behaviour
- **Step navigation**: the component owns its own flow — `Continue`, `Log in`, `Get a one-time login code` and `Send` move it between steps internally; `Back` returns to the previous step, or dispatches a `back` event on the first step.
- **Cancelable transitions**: every transition (`continue`, `login`, `send-code`, `resend-code`) fires as a cancelable `CustomEvent` *before* the component moves. A consumer can call `event.preventDefault()` (e.g. on a failed validation or a rejected API call) and the step/cooldown won't advance, leaving the consumer to show its own error state on its own slotted field.
- **Resend cooldown**: reaching or resending on the `code` step starts a genuine 60-second countdown; the "Send a new code" link is replaced by a countdown message until it clears, then reappears.
- **Slot replacement**: a team can slot in its own field or action element; this component only needs it to bubble the expected native events, so a replacement keeps working with zero extra wiring.
- **Responsive behaviour**: the component has a `max-inline-size` of 24rem and stacks its content in a single column; it has no other breakpoints of its own.

## Usage

### When to use
- A dedicated log-in page or modal for returning users, covering email/password and one-time-code paths in one pattern.
- Products that need to resume a user directly into a specific step (e.g. deep-linking into `code` after an email prompt sent elsewhere).
- Flows where validation, error display and network calls are owned by the consuming team via slotted fields/actions and cancelable events.

### When not to use
- Account creation — use a dedicated sign-up pattern, not this component (the "Create an account" prompt only links out to one).
- A single stand-alone field or button outside a login context — use `aa-text-field`/`aa-button` directly.
- A flow whose steps don't match this pattern's four steps (email, password, destination, code) — build a custom flow rather than forcing it into `aa-login`.

## Content guidance

### What to write
- Keep field labels short and specific, e.g. "Email", "Password", "Verification code (6 digits)".
- Use the description under each fieldset to set clear expectations for what happens next, e.g. "We'll send a short code to verify it's you".
- Support prompts should frontload the outcome for the user, e.g. "Forgot your password?" before the linked action.

### How to write
- Use sentence case throughout — headings, descriptions, and button labels.
- Frontload button/link labels with active verbs that accurately describe the action, e.g. "Continue", "Log in", "Send".
- Avoid generic wording such as "Find out more" — every action here should say exactly what it does.
- Use British English spelling throughout.
- Address the user directly with "you"/"your".

| Do ✅ | Don't ❌ |
|---|---|
| "Enter the email address for your account" | "Please input your email details" |
| "We'll send a short code to verify it's you" | "A code will be sent by us" |
| "Send a new code" | "Simply click to resend" |

## Examples
- **Email step** — default entry point, email field and Continue action.
- **Password step** — email playback, password field, Log in action, "Get a one-time login code" prompt.
- **Destination step** — radio choice between text and email delivery for the one-time code.
- **Code step** — code field, resend prompt with live cooldown countdown.

## Things to consider
- `phone-last-digits` is display-only — it does not validate or mask an actual phone number; the consuming app must supply the real value.
- The resend cooldown timer is cleared on `disconnectedCallback`, but a consumer navigating away mid-countdown should not assume state persists if the component is re-mounted.
- Replacing a field/action slot with a custom element only works if that element bubbles the expected native events (`input`/`change`/`click`) and exposes `.value` — a non-conforming custom element silently breaks the flow's data capture.
- Setting `step` directly resumes into any step, but skips the component's own guard logic (e.g. it won't validate that an `email` was actually captured before jumping to `password`) — the consuming app is responsible for only resuming into a step the user has legitimately reached.

## Accessibility

### Focus order
Each step renders its own back control, fieldset (field then action), and support prompts in that visual and DOM order, so tab order follows the same top-to-bottom sequence a sighted user sees. Moving between steps re-renders the DOM; focus is not automatically moved to the new step's first field. _TODO: confirm whether focus should move to the new step's heading/field after a transition — not addressed in the source._

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Submits the focused field's associated action (native form/button behaviour). |
| Tab | Moves through back control, field, action, and support prompts in order. |

### ARIA
_TODO: no explicit ARIA roles/attributes are set by this component beyond what its slotted `aa-fieldset`, `aa-text-field`, `aa-radio` and `aa-button` children provide natively — confirm whether step transitions need an `aria-live` announcement._

### SEO and AI discovery
- Renders real form fields and buttons (via its slotted defaults), not custom, non-semantic controls.
- Step descriptions clearly state the purpose of each action (e.g. "We'll send a short code to verify it's you"), giving assistive tech and AI agents enough context to understand what submitting will do.

## Related components
- `aa-fieldset` — wraps each step's field and action with a label/description.
- `aa-text-field` — the default field rendered in `email-field`/`password-field`/`code-field`.
- `aa-radio` — the default destination choice control.
- `aa-button` — the default action control in every action slot, and the support prompt links.
