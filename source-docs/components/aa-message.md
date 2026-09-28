# Aa-message

## Overview
`aa-message` is an internal primitive that pairs a semantic icon with a line of text to communicate an error, warning, informational note, or positive confirmation. It has no story of its own and is not used directly by consumers — it is composed inside other components, such as the error text under `aa-text-field`, `aa-textarea`, `aa-select`, `aa-checkbox`, `aa-radio`, `aa-input-group`, `aa-date-of-birth`, `aa-date-picker` and `aa-numerical-stepper`.

## Anatomy
1. **Icon** — a 16px `aa-icon`, chosen automatically from the `type` (`alert-circle` for error/warning, `info-circle` for information, `check-circle` for positive).
2. **Text** — the slotted message content, wrapped in a `.text` span (`part="text"`).

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `type` | `error` \| `warning` \| `information` \| `positive` | `error` | Semantic tone; sets both the icon and the text/icon colour via design tokens. |

## Behaviour
- The component is a static, non-interactive display primitive — it has no hover, press, loading or disabled states of its own.
- Colour and icon are derived entirely from `type`: each type maps to a text colour token (e.g. `--text-danger-primary` for `error`) and an icon name (e.g. `alert-circle`, `info-circle`, `check-circle`).
- Layout is `inline-flex`, so it sits inline with surrounding content and sizes to its text.
- _TODO: confirm whether appearance/disappearance (e.g. when a host component's error clears) is animated at the host level — `aa-message` itself has no transition or entrance styling._

## Usage

### When to use
- Inside a form control to surface a validation error, warning, informational hint, or success confirmation tied to that field (this is its only current use in the codebase).
- Anywhere a short, single-line, icon-plus-text status message is needed at the same visual weight as existing usages.

### When not to use
- As a standalone, user-facing component — it is an internal primitive with no story and no established API contract for direct use; compose it inside a host component instead.
- For multi-line or complex feedback content — keep it to one line of text; use a different pattern for longer explanatory copy or dismissible banners.
- For page- or section-level system status — use a banner/alert pattern intended for that scope. _TODO: name the banner/alert component once one exists._

## Content guidance

### What to write
- Keep the message to one concise line — the component is designed for a single line of text, not a paragraph.
- State what happened and, where relevant, what the user needs to do next (e.g. for a validation error, say what's wrong and how to fix it).
- Match the message to its `type`: only use `error` for something that blocks progress, `warning` for something to be aware of, `information` for neutral context, and `positive` for confirmation of success.

### How to write
- Use sentence case.
- Use British English spelling.
- Avoid vague wording — say specifically what's wrong or confirmed, not generic phrases like "Something went wrong".
- Use active voice and specific verbs, consistent with the AA writing principles (dynamic, warm, empowering, expert).
- Avoid exclamation marks in product copy.

| Do ✅ | Don't ❌ |
|---|---|
| "Enter a valid email address" | "Error: invalid input!" |
| "Your changes have been saved" | "Success!!" |

## Examples
- **Error message** — `type="error"`, e.g. inline validation text under `aa-text-field`.
- **Warning message** — `type="warning"`, for a cautionary note that doesn't block submission.
- **Information message** — `type="information"`, for neutral supporting context.
- **Positive message** — `type="positive"`, for confirming a successful action.

_TODO: dedicated Storybook examples — no `aa-message.stories.ts` exists; the only current usages are embedded inside other components' stories (e.g. `checkbox.stories.ts`, `textarea.stories.ts`, `radio.stories.ts`)._

## Things to consider
- This is an internal primitive, not a public API — treat its props as an implementation detail of the host components that use it, and check those host components' own docs for how errors/messages are triggered.
- The icon size is fixed at 16px and is not configurable.
- Because it is inline-flex and un-truncated, very long text will wrap rather than truncate — keep messages short per the content guidance above.

## Accessibility

### Focus order
`aa-message` is not focusable and has no interactive elements — it does not participate in tab order. _TODO: confirm how host components associate the message with its control for assistive tech (e.g. `aria-describedby`) — not present in this file._

### Keyboard interactions
Not applicable — the component has no interactive elements.

### ARIA
- No ARIA roles or attributes are set by `aa-message` itself.
- _TODO: confirm whether host components (e.g. `aa-text-field`) apply `role="alert"`/`aria-live` or `aria-describedby` when rendering an `aa-message` for an error — not present in this file; `aa-text-field` gives the rendered message `id="error"` for that purpose but the association attribute itself lives on the host._

### SEO and AI discovery
- Renders as semantic inline `<span>` elements with slotted text content, so the message text is readable in the DOM rather than hidden in a background image or pseudo-element.
- _TODO: confirm any landmark or live-region guidance from the host components that use it._

## Related components
- `aa-icon` — supplies the semantic icon shown alongside the message text.
- `aa-text-field`, `aa-textarea`, `aa-select`, `aa-checkbox`, `aa-radio`, `aa-input-group`, `aa-date-of-birth`, `aa-date-picker`, `aa-numerical-stepper` — form components that compose `aa-message` to show their error text.
