# Aa-icon-button

## Overview
`aa-icon-button` is a compact, circular, icon-only control used where a visible text label isn't needed or doesn't fit — a close button, a "next" arrow, a toolbar action. Because it has no visible label, a `label` property is required and becomes the control's accessible name.

Figma: `Button Icon`.

## Anatomy
1. **Circular control** — a native `<button>`, sized from the icon's own size token plus symmetric padding so the box stays square and in proportion at every size.
2. **Icon slot** — the default slot; defaults to an `arrow-right` `aa-icon` if nothing is slotted.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `intent` | `primary` \| `secondary` \| `tertiary` \| `subtle` | `primary` | Visual style/hierarchy of the control. |
| `size` | `large` \| `medium` \| `small` | `medium` | Control size; also sets the slotted icon's size to match. |
| `label` | string | `'Icon button'` | Required accessible name — becomes the `aria-label`, since the control has no visible text. |
| `type` | `button` \| `submit` \| `reset` | `button` | Native button `type`. |
| `disabled` | `boolean` | `false` | Disables the control. |

## Behaviour
- **Icon sizing is owned by the button**: the control sets `--aa-icon-size` based on its own `size`, so a slotted icon is always sized to match regardless of what size prop is set on the icon itself.
- **Fallback icon**: if no icon is slotted, an `arrow-right` icon renders at the size matching the button's `size`.
- **Hover**: each `intent` has its own distinct hover background/border treatment; `subtle` has no visible resting border and only shows a background fill on hover.
- **Disabled**: opacity reduces to 0.6 and the cursor becomes `not-allowed`; hover styling is suppressed via `:not(:disabled)` selectors.
- **Shape**: the control is always a perfect circle — `aspect-ratio: 1` combined with a fully rounded border-radius, sized from the icon plus padding rather than a fixed height, so it stays proportional at every `size`.
- **Transitions**: colour and border changes use the shared interactive transition token; focus rings use the shared focus-ring transition token.
- **Responsive behaviour**: no breakpoints of its own; sizes to its fixed `size` regardless of viewport.

## Usage

### When to use
- An icon-only control with no visible label, where the icon alone is clear in context (e.g. a close "x", a chevron "next" button).
- Compact toolbar or card actions where space doesn't allow a labelled button.
- Navigation controls like "previous"/"next" (e.g. inside `aa-calendar`'s month navigation).

### When not to use
- Any action where a visible text label would aid clarity — use `aa-button` instead.
- A set of mutually exclusive or multi-select icon toggles — use a purpose-built selection component.
- When the icon's meaning isn't obvious without a label — pair with visible text or use a fully labelled `aa-button`.

## Content guidance

### What to write
- `label` is required and must describe the actual action the button performs, not the icon itself (e.g. "Delete item", not "Trash icon").
- Be specific: prefer "Next step" over a generic "Next" if more context helps the action read clearly out of context (e.g. to screen reader users navigating by control name).

### How to write
- Use sentence case for the label text (used only as `aria-label`, but should still read naturally).
- Use active, specific verbs describing the exact action, consistent with `aa-button`'s content guidance.
- Avoid vague labels like "Click here" or "Icon button" (the default placeholder) in real usage — always set a real, specific label.

| Do ✅ | Don't ❌ |
|---|---|
| `label="Delete item"` | `label="Icon button"` |
| `label="Previous month"` | `label="Back"` |

## Examples
- **Primary** — default, filled intent.
- **Secondary / tertiary** — lower-emphasis intents.
- **Subtle** — no border, minimal visual weight until hovered.
- **Disabled** — inactive state, opacity reduced.
- **Custom icon** — a slotted icon other than the default arrow.
- **Variant matrix** — all size/intent combinations shown together for comparison.

## Things to consider
- `label` has no visible on-screen text — always set a real, specific value; the default `"Icon button"` placeholder is not acceptable in production use.
- Setting a `size` on a slotted `aa-icon` has no effect — the button always overrides it via `--aa-icon-size` to keep the icon proportional to the control.
- There is no `href` support (unlike `aa-button`) — this is always a native `<button>`, not an anchor.
- No dedicated `danger`/destructive intent exists for this component (unlike `aa-button`'s `intent="danger"`) — confirm the right visual treatment for a destructive icon-only action. _TODO: confirm destructive-intent guidance for icon buttons._

## Accessibility

### Focus order
`aa-icon-button` is a native `<button>` and participates in the natural tab order at its position on the page. When `disabled`, the native `disabled` attribute removes it from the tab order.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the button. |
| Space | Activates the button (native `<button>` behaviour). |

### ARIA
- `aria-label` — always set from the `label` property, since the control has no visible text to name it.
- Native `disabled` attribute is used, rather than `aria-disabled`.
- No `role` override is needed — a real `<button>` element is used directly.

### SEO and AI discovery
- Renders as a real `<button>`, so semantics and focusability are native rather than simulated.
- Because there is no visible text, the `label`/`aria-label` is the only signal available to assistive technology, search engines, and AI agents about what the control does — treat it with the same care as visible button copy.

## Related components
- `aa-button` — the labelled counterpart; use it whenever a visible text label is appropriate.
- `aa-button-group` — for arranging multiple icon buttons (or a mix of icon and text buttons) with consistent spacing.
- `aa-icon` — supplies the icon rendered inside the control.
