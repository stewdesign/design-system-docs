# Aa-button

## Overview
`aa-button` is the single control for every button and link call-to-action in the design system. It renders as a native `<button>` by default, or as an `<a>` when an `href` is supplied, so the same variants, sizes and states apply whether the action is in-page or a navigation.

## Anatomy
1. **Leading icon slot** (`icon-start`) — optional icon shown before the label.
2. **Label** — the button text, wrapped in a `.label` span.
3. **Trailing icon slot** (`icon-end`) — optional icon shown after the label.
4. **Loading spinner** — replaces the trailing position while `loading` is true; the label stays visible so the control does not change width.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `primary` \| `secondary` \| `tertiary` \| `link` | `primary` | Visual style/hierarchy of the button. |
| `size` | `medium` \| `small` | `medium` | Control height and padding. `small` is below the 44px touch-target minimum by design. |
| `intent` | `default` \| `danger` | `default` | Semantic tone. `danger` replaces the former `aa-button-danger` component. |
| `disabled` | `boolean` | `false` | Disables the control. On an anchor, this drops `href` and adds `aria-disabled="true"` since links have no native disabled state. |
| `loading` | `boolean` | `false` | Shows a spinner and sets `aria-busy="true"`; the control remains disabled to interaction. |
| `href` | string | _undefined_ | Renders an anchor instead of a button. Replaces the former `aa-cta` component. |
| `target` | string | _undefined_ | Anchor `target`. Setting `target="_blank"` without an explicit `rel` auto-applies `rel="noreferrer noopener"`. |
| `rel` | string | _undefined_ | Anchor `rel`. Overrides the automatic `noreferrer noopener` behaviour. |
| `type` | `button` \| `submit` \| `reset` | `button` | Native button `type`, ignored when `href` is set. |

## Behaviour
- **Hover**: `primary`, `secondary` and `tertiary` variants darken/shift their background on hover; `link` has no background so only its underline and colour are affected by state.
- **Disabled**: opacity reduces to 0.6 and the cursor becomes `not-allowed`. On an anchor, `href` is removed so the control is neither focusable nor activatable, and `aria-disabled="true"` communicates the state to assistive tech.
- **Loading**: a spinner replaces the icon-end position (or sits after the label if none is set), `aria-busy="true"` is applied, and the control is inert in the same way as `disabled`. The label stays visible so width doesn't shift when loading starts or ends.
- **Icons**: icon size is owned by the button, not the consumer — a `size` set on a slotted `aa-icon` is ignored, so icons are always sized to `1em` and match the label. When an icon is present, the button tightens the padding on that side by one step for optical balance (excluded on `link`, which has no horizontal padding).
- **Transitions**: colour and border changes use the shared interactive transition token; focus rings use the shared focus-ring transition token.
- **Reduced motion**: the loading spinner's animation slows from 640ms to 2400ms per rotation under `prefers-reduced-motion: reduce`, rather than stopping outright.
- **Responsive behaviour**: the control has no responsive breakpoints of its own; it sizes to its content (`min-width: max-content`) and wraps only if the container forces it — content guidance requires labels short enough not to wrap on mobile.

## Usage

### When to use
- Any primary, secondary or tertiary call-to-action, in-page or navigating elsewhere.
- Form submission, resets, or in-page actions (`type="submit"`, `type="reset"`, `type="button"`).
- Navigational CTAs that should look and behave like part of the action hierarchy (set `href`).
- Destructive or high-consequence actions (`intent="danger"`), e.g. deleting cover or cancelling a policy.

### When not to use
- An icon-only control with no visible label — use `aa-icon-button` instead.
- Grouped, mutually exclusive or multi-select choices — use the relevant selection component (e.g. radio/checkbox group), not a set of buttons.
- Plain inline navigation within body copy — use a standard inline text link, not `variant="link"` at button scale, unless the action needs button-level prominence.
- A set of related actions that should visually group together — use `aa-button-group`.

## Content guidance

### What to write
- Frontload with active verbs that accurately describe the action, e.g. "Edit" or "Choose".
- Avoid generic wording such as "Find out more" or "Read more" — say what the button actually does.
- Consider what the user will do next and where the button takes them; where practical, match the label to the destination page title.
- Keep labels concise enough that they don't wrap on mobile, and ensure the button is wide enough to fit the label text.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily" — what feels easy to one person may not be to another.
- Use British English spelling throughout (e.g. "Customise", not "Customize").

| Do ✅ | Don't ❌ |
|---|---|
| "Choose cover" | "Find out more" |
| "Add your details" | "Simply add your details" |
| "Delete cover" | "Delete Cover:" |

## Examples
- **Primary button** — default call-to-action styling.
- **Secondary / tertiary button** — lower-emphasis actions alongside a primary action.
- **Link-style button** — `variant="link"`, typically at `size="small"`, for the lowest-emphasis action in a group.
- **Button with leading/trailing icon** — icon slotted alongside the label, sized automatically to match text.
- **Disabled button** — inactive state, opacity reduced.
- **Loading button** — spinner shown, label retained, `aria-busy` set.
- **Button as link** (`href` set) — renders an anchor styled identically to a button.
- **Danger button** (`intent="danger"`) — for destructive actions, available across all variants.

## Things to consider
- `small` size falls below the 44px touch-target minimum by design — consider this for primary mobile actions.
- Don't nest interactive elements (e.g. another link or button) inside the icon slots.
- Setting both `disabled` and `loading` is unnecessary — `loading` already disables interaction.
- On anchors, a custom `rel` is only needed to override the automatic `noreferrer noopener` applied when `target="_blank"`.
- Label length isn't visually truncated by the component — long labels will wrap or overflow, so content guidance on conciseness must be followed.

## Accessibility

### Focus order
`aa-button` participates in the natural tab order as either a `<button>` or an `<a>`. When `disabled` or `loading`, an anchor's `href` is removed so it is skipped entirely (matching native disabled-button behaviour); a `<button>` uses the native `disabled` attribute, which removes it from the tab order in the same way.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the button or follows the link. |
| Space | Activates the button (native `<button>` behaviour; does not apply to anchors). |

### ARIA
- `aria-disabled="true"` — applied to the anchor form when `disabled` or `loading` is true, since anchors have no native disabled state.
- `aria-busy="true"` — applied while `loading` is true, on both the button and anchor forms.
- Native `disabled` attribute is used on the `<button>` form instead of `aria-disabled`.
- No `role` override is needed — the semantic `<button>` or `<a>` element is used directly.

### SEO and AI discovery
- Renders as a real `<button>` or `<a>`, not a generic `<div>`, so semantics, focusability and link crawlability are native rather than simulated.
- When used for navigation, always set `href` so the destination is a real, crawlable link rather than a JavaScript-only click handler.
- Label text should describe the destination or action on its own (per the content guidance above) — avoid vague labels like "Click here", which carry no meaning out of context for assistive tech, search engines or AI agents parsing the page.

## Related components
- `aa-icon-button` — a compact, icon-only variant with no visible label.
- `aa-button-group` — groups related buttons together with consistent spacing/alignment.
- `aa-icon` — supplies the leading/trailing icons slotted into a button.
