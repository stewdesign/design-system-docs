# Aa-alert

## Overview
`aa-alert` is a self-contained message panel used to surface status information, warnings, or confirmations to the user — in-page, not as a transient toast. It renders as a semantic live region so assistive technology announces it appropriately, and supports an optional dismiss control and action button.

Figma verification: `Alert` (node `124:8256`).

## Anatomy
1. **Leading icon** — a status icon in a coloured badge, one per `variant`, hidden if `has-leading-icon` is set to false.
2. **Heading slot** (`heading`) — plain-text `heading` prop by default, or a slotted heading element for a specific semantic level.
3. **Body slot** (`body`) — plain-text `body` prop by default, or slotted rich content (links, lists, multiple paragraphs).
4. **Dismiss button** — optional close control, shown when `dismissible` is true.
5. **Action slot** (`action`) — optional area for a real button (e.g. `aa-button`), shown only when populated.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `neutral` \| `error` \| `warning` \| `positive` \| `info` \| `critical` | `neutral` | Visual style and semantic tone; also sets the underlying ARIA role/live-region behaviour and icon. |
| `heading` | string | `''` | Plain-text heading; ignored if a heading is slotted instead. |
| `body` | string | `'Body text.'` | Plain-text body copy; ignored if body content is slotted instead. |
| `dismissible` | `boolean` | `false` | Shows a dismiss (close) button. |
| `has-leading-icon` | `boolean` | `true` | Whether the leading status icon is shown. |

## Behaviour
- **Live region semantics**: each `variant` maps to a specific `role` (`status` or `alert`) and `aria-live` value (`polite` or `assertive`) — `error`, `warning` and `critical` are assertive/`alert`; `neutral`, `positive` and `info` are polite/`status`.
- **Dismiss**: clicking the dismiss button fires a cancelable `dismiss` event first. If nothing calls `preventDefault()`, the alert measures its own rendered height, pins it inline, then animates to zero height and opacity before removing itself from the DOM — no manual cleanup required from the consumer.
- **No fixed height cap**: because heading/body accept arbitrary slotted content, there's no fixed collapse height guessed in advance — the real height is measured right before the dismiss animation starts, so real content is never clipped.
- **Sizing**: full-width below the tablet breakpoint (48rem); above it, the alert shrinks to fit its content with a minimum width of 20rem and a maximum of 60ch, so a short alert stays compact and a long one grows to a comfortable reading measure.
- **Custom heading level**: slotting a heading (`slot="heading"`) fully overrides the default `<h3>` — the visual size stays the alert's own compact scale regardless of which semantic level (`h1`–`h6`) the consumer chooses.
- **Rich body content**: slotting `slot="body"` content (instead of using the `body` string) allows inline links, lists, or other rich markup; links inside slotted body copy automatically pick up the same colour as `aa-button`'s `link` variant.
- **Reduced motion**: the dismiss collapse transition is disabled under `prefers-reduced-motion: reduce`.

## Usage

### When to use
- Communicating the result of an action (success, error) directly in the page flow.
- Flagging a warning or blocking issue that needs the user's attention before proceeding.
- Providing informational context tied to a specific section of a page.
- Critical, hard-to-miss messaging (`variant="critical"`) for serious, high-consequence situations.

### When not to use
- Transient, auto-dismissing confirmation toasts — use a dedicated toast/notification component instead. _TODO: name the toast component once one exists._
- Inline field-level validation messages — use `aa-message` instead.
- A persistent page banner unrelated to a specific event or state — consider `aa-hero` or a plain content section.

## Content guidance

### What to write
- Keep the heading short and specific to what happened or what's needed — avoid a generic label like "Notice".
- Use the body copy to explain what happened and, where relevant, what the user should do next.
- When an action is relevant (e.g. retrying, undoing, editing), slot a real button rather than describing the action only in prose.
- Only mark an alert `dismissible` when the user genuinely doesn't need to act on it before moving on.

### How to write
- Use sentence case for both heading and body.
- Use the active voice and specific action verbs — say what happened and what to do, not vague instructions.
- Avoid exclamation marks in alert copy; reserve them for cases that specifically require it.
- Use British English spelling throughout.
- For product exclusions or hard limits, use "not" rather than contractions like "isn't"/"aren't" for clarity, e.g. "Vehicles over 3,500 kg are not covered."

| Do ✅ | Don't ❌ |
|---|---|
| "Payment declined" | "Uh oh, something went wrong!" |
| "Update your payment details or try a different card" | "Please try again" |

## Examples
- **Neutral alert** — default, informational tone.
- **Critical alert** — solid, high-emphasis surface for serious situations.
- **Without action** — heading and body only, no button.
- **Without heading** — body copy sits directly beside the icon.
- **Custom heading level** — a slotted `<h2>` instead of the default `<h3>`.
- **Rich body** — slotted body content with an inline link and a list.
- **Variant stack** — all six variants shown together for comparison.

## Things to consider
- Setting both `heading`/`body` props and slotting `slot="heading"`/`slot="body"` content is redundant — the slotted content takes priority and the plain-text prop's fallback is not rendered.
- The dismiss button always has a fixed `aria-label="Dismiss alert"` — it does not currently accept a custom label. _TODO: confirm whether a per-instance dismiss label is needed._
- `critical` uses a solid, high-contrast surface — its link colour, heading colour and dismiss colour all swap to white automatically since the brand link blue fails contrast against it.
- Because the component removes itself from the DOM on dismiss (unless `preventDefault()` is called on the `dismiss` event), any consumer state tracking whether the alert is shown should listen for that event rather than assuming the element persists.

## Accessibility

### Focus order
`aa-alert` itself is not a focusable element; it participates in tab order only through its dismiss button (when `dismissible`) and any slotted action button, in that visual order.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Activates the focused dismiss button or slotted action button. |

### ARIA
- `role="status"` or `role="alert"` — set per `variant`; `alert` variants (`error`, `warning`, `critical`) interrupt more assertively than `status` variants (`neutral`, `positive`, `info`).
- `aria-live="polite"` or `aria-live="assertive"` — paired with the role above, per variant.
- The dismiss button carries a fixed `aria-label="Dismiss alert"` since it has no visible text label.
- No custom `aria-label` is applied to the alert container itself; its accessible name comes from its heading and body content in normal reading order.

### SEO and AI discovery
- Renders as a semantic `<aside>` with a live-region role, so assistive technology and any automated agent parsing the page can distinguish it from ordinary content.
- Slotting a real heading element keeps the page's heading outline intact and machine-readable, rather than relying on a generic, unstructured label.
- Because alerts are typically injected dynamically in response to user actions, ensure any surrounding page state (e.g. a submitted form) is also reflected in the DOM so an AI agent or crawler revisiting the page later doesn't see a stale alert with no matching context.

## Related components
- `aa-message` — for inline, field-level validation messages rather than a standalone panel.
- `aa-button` — supplies the optional action slot content.
- `aa-icon` — supplies the leading status icon.
