# Aa-switch

## Overview
`aa-switch` is a toggle control for a single on/off setting that takes effect immediately, without a separate save or submit action. It renders as a labelled toggle track by default, or as an icon-only "atom" track with no visible label, description or helper.

## Anatomy
1. **Track** (`part="control"`) — the pill-shaped background that shows checked/unchecked state.
2. **Thumb** — the circular indicator inside the track that slides between unchecked (start) and checked (end) positions.
3. **Label** — the control's name, rendered via `aa-input-label`. Hidden visually in the `atom` variant, but still exposed to assistive tech via `aria-label`.
4. **Description** — an optional plain line of supporting copy under the label.
5. **Helper** — an optional expand/collapse disclosure that replaces the description line with a toggleable one. Figma never shows both `description` and `helper` at once, so `helper` wins if both are set.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the switch is on. Reflected as an attribute. |
| `variant` | `default` \| `atom` | `default` | `default` shows label/description/helper alongside the track; `atom` renders the track alone, icon-only, with no visible copy. |
| `position` | `start` \| `end` | `end` | Places the label before (`start`) or after (`end`) the track. Has no effect on `atom`, which has no label to position. |
| `label` | string | `'Label'` | The switch's name. Used as visible label text on `default`, and as the `aria-label` fallback text on `atom`. |
| `description` | string | `''` | Optional plain line of supporting copy shown under the label. Ignored if `helper` is set. |
| `helper` | string | `''` | Optional disclosure button text that turns `description` into an expand/collapse disclosure instead of a plain line. Wins over `description` when both are set. |
| `name` | string | `''` | Native form field name, forwarded to the underlying checkbox input. |
| `value` | string | `'on'` | Native form field value submitted when checked. |

## Behaviour
- **Toggling**: clicking or activating the control flips `checked` and dispatches a bubbling, composed `change` event — the same pattern as a native checkbox.
- **Hover**: the track's border and background shift to hover tokens; the thumb is unaffected.
- **Checked**: the track's border/background switch to "checked" tokens, and the thumb slides from the start to the end of the track (`translateX`) and recolours to white.
- **Focus**: a dashed focus ring appears around the track on `:focus-visible`, expanding outward from the track's edge rather than sitting flush against it.
- **Label/description/helper layout**: in `position="end"` (the default), the label and track are spread to the row's opposite edges; in `position="start"`, they simply read left to right (track, gap, label) — matching Figma's two distinct position variants rather than one shared justification.
- **Transitions**: track colour and focus-ring changes use the shared interactive/focus-ring transition tokens; the thumb additionally animates its slide over 160ms.
- **Responsive behaviour**: `default` fills the width of its container (`width: 100%`); `atom` sizes to its content only (`display: inline-flex`, `width: auto`).

## Usage

### When to use
- A single setting that applies immediately when changed, with no separate confirmation step (e.g. enabling notifications, turning a feature on or off).
- Icon-only, space-constrained contexts where a full label isn't needed visually — use `variant="atom"`, but still supply `label` for assistive tech.
- Settings where the current state (on/off) is the primary thing the user needs to see at a glance.

### When not to use
- A choice that requires an explicit save/submit action before taking effect — use `aa-checkbox` instead.
- Selecting one option from a list of two or more mutually exclusive choices that aren't simply "on/off" — use a radio group.
- Multiple independent selections from a list — use `aa-checkbox` in a group, not a set of switches.

## Content guidance

### What to write
- Label the setting being controlled, not the action of toggling it, e.g. "Marketing emails", not "Toggle marketing emails".
- Use `description` for a short, static line of extra context that's always relevant.
- Use `helper` only when the extra context is long enough to warrant hiding it behind a disclosure by default — don't set both `description` and `helper`, since `helper` always wins and `description` will be silently dropped from view.
- Keep labels short enough that they don't wrap awkwardly next to the track on mobile.

### How to write
- Use sentence case, not title case.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily" — what feels easy to one person may not be to another.
- Use the Harvard comma, not the Oxford comma, when writing a list of three or more items in sentence form.

| Do ✅ | Don't ❌ |
|---|---|
| "Marketing emails" | "Toggle marketing emails" |
| "Location sharing" | "Simply turn on location sharing" |
| "Get breakdown updates by text" | "Get breakdown updates by text:" |

## Examples
- **Off / On** — default unchecked and checked states.
- **With description** — a static supporting line under the label.
- **With helper** — the description collapsed behind an expand/collapse disclosure.
- **Label start** — label positioned before the track instead of after.
- **Atom** — icon-only track with no visible label, description or helper.
- **State matrix** — off/on, start/end position and atom variants shown together for comparison.

## Things to consider
- Setting both `description` and `helper` is redundant — `helper` always wins, so `description` is never shown.
- `atom` still requires a meaningful `label` even though it isn't rendered visually — it's the only accessible name the control has.
- The native checkbox input is visually hidden (clipped, not `display: none`) so it stays part of the accessibility tree and focus order.
- Label length isn't truncated by the component — long labels will wrap, so keep copy concise per the content guidance above.

## Accessibility

### Focus order
`aa-switch` renders a native `<input type="checkbox">`, visually hidden but present in the DOM, so it participates in the natural tab order at its position in the document.

### Keyboard interactions

| Key | Action |
|---|---|
| Tab | Moves focus to/from the switch in document order. |
| Space | Toggles the switch (native checkbox behaviour). |

### ARIA
- `aria-describedby` — points at the `aa-input-label` host's id when a `description` or `helper` is set on `variant="default"`, since the description/helper text lives behind that component's own shadow boundary with no inner id to target directly.
- `aria-label` — applied on `variant="atom"`, using `label` (or "Switch" as a fallback) as the accessible name, since no visible label text is rendered.
- No `role` override is needed — the native `<input type="checkbox">` provides switch/checkbox semantics directly.

### SEO and AI discovery
- Renders a real native checkbox input rather than a simulated toggle built from `<div>`s, so state, focusability and form participation are native.
- `label` should describe the setting being controlled in plain terms, since it doubles as the accessible name on `atom` and as visible copy on `default` — avoid vague labels that carry no meaning out of context for assistive tech or AI agents parsing the page.

## Related components
- `aa-checkbox` — for settings that require an explicit save/submit action, or for multi-select lists.
- `aa-input-label` — internal primitive that renders the switch's label, description and helper text.
- `aa-input-helper` — internal primitive that renders the expand/collapse disclosure used by `helper`.
