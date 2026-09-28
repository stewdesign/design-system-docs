# Aa-list-item

## Overview
`aa-list-item` is a single row in a list — a label, optional description, and optional leading/trailing content, with an optional real link across the whole row. It appears wherever content is presented as a scannable vertical list, such as a settings screen, an account menu, or a group of cover options.

## Anatomy
1. **Leading slot** (`slot="leading"`) — optional `aa-list-item-leading` primitive holding an icon, avatar, or status bullet.
2. **Label and description** — rendered via an internal `aa-input-label` (size `small`), supporting a `label`, an optional `description` line, and an optional collapsible `helper` disclosure.
3. **Badge** — an 8px dot (`badge`) shown between the label area and the trailing slot, e.g. to flag unread or new content.
4. **Trailing slot** (`slot="trailing"`) — optional `aa-list-item-trailing` primitive holding an interactive control (icon button, switch, checkbox, radio, button) or a chevron.
5. **Full-row link** — when `href` is set, an absolutely-positioned `<a>` sits behind the visible content so the whole row is clickable/focusable, while any interactive control in the trailing slot stays independently focusable on top.
6. **Divider** — an `aa-divider` rendered below the row when `divider` is true, for separating items in a group.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `label` | string | `'Label'` | The item's primary text. |
| `description` | string | `''` | Optional secondary line under the label. |
| `helper` | string | `''` | Button text that turns `description` into a collapsed disclosure instead of a plain line. |
| `href` | string | `''` | Makes the whole row a real, focusable link. Without it, the row itself is non-interactive and only a slotted trailing control (if any) is interactive. |
| `badge` | boolean | `false` | Shows a small status dot before the trailing slot. |
| `divider` | boolean | `false` | Renders an `aa-divider` below the item, e.g. between items in an `aa-list-item-group`. |

`aa-list-item-leading` (slotted, `type`: `icon` \| `avatar` \| `status`, `intent`: `info` \| `positive` \| `warning` \| `danger`) and `aa-list-item-trailing` (slotted, no props of its own) are internal primitives used to compose leading/trailing content — see Anatomy.

## Behaviour
- **Hover/focus**: only applies when `href` is set — the row's background changes on hover (`--surface-neutral-secondary-default`), and a dashed focus ring appears around the whole row on keyboard focus.
- **Non-link rows**: with no `href`, the row itself never shows a hover or focus treatment — only a genuinely interactive trailing control (e.g. a slotted `aa-switch`) responds to its own interaction states.
- **Click pass-through**: the label/leading area has `pointer-events: none` so clicks land on the full-row link underneath rather than being swallowed by a plain `<span>`.
- **Leading visuals**: `type="icon"` renders a 36px rounded box around a slotted icon; `type="avatar"` renders the slot bare (an `aa-avatar` already has its own circular treatment); `type="status"` renders a small coloured circle, tinted by `intent`.
- **Badge**: a static 8px dot — it does not animate or update on its own; the consumer toggles the `badge` property.
- **Transitions**: background/hover changes use the shared interactive transition token; the focus ring uses the shared focus-ring transition token.
- **Responsive behaviour**: the item fills its container's inline size (`inline-size: 100%`); content wrapping/truncation is not handled by the component itself.

## Usage

### When to use
- A row of content in a scannable vertical list — settings, account options, cover choices, search results.
- Rows that navigate elsewhere on click — set `href` so the whole row is a real link.
- Rows that host a single, genuinely interactive control (switch, checkbox, radio, icon button) without an outer link.
- Grouped, related rows sharing a single surface — wrap items in `aa-list-item-group`.

### When not to use
- A single, standalone call-to-action — use `aa-button` instead.
- Primary in-page navigation between top-level sections — use `aa-menu`/`aa-menu-item`.
- A row that needs both a full-row link **and** multiple independent interactive controls in the trailing area — only one trailing control is supported per item; consider a custom layout instead.

## Content guidance

### What to write
- Keep the `label` short, direct and in sentence case — it's the noun the user is scanning for.
- Use `description` for supporting detail only, not a repeat of the label.
- Reserve `helper` for genuinely optional detail that can stay collapsed until the user asks for it.

### How to write
- Use sentence case for `label` and `description`, not title case.
- Avoid colons at the end of labels.
- Use active, specific wording rather than generic terms.
- Use British English spelling (e.g. "Customise", not "Customize").

| Do ✅ | Don't ❌ |
|---|---|
| "Roadside" | "Roadside Assistance:" |
| "Email notifications" | "Notification Settings For Email" |
| "24/7 help if you break down" | "Learn more about this cover" |

## Examples
- **Default** — label, leading icon, trailing icon-button, `href` set.
- **With description** — adds a supporting second line.
- **With badge** — status dot shown before the trailing slot.
- **No trailing link** — leading icon only, no trailing content.
- **Avatar** — `aa-list-item-leading type="avatar"` holding an `aa-avatar`.
- **Status** — `aa-list-item-leading type="status" intent="positive"` holding a small icon.
- **With switch** — a slotted `aa-switch` as the only interactive element, no `href`.
- **With checkbox** — a slotted `aa-checkbox`, no `href`.
- **Group** — several items composed inside `aa-list-item-group`, each with its own `divider`/`badge`/`href`.

## Things to consider
- Don't nest a second interactive element inside the leading slot — it isn't designed to be focusable.
- When `href` is set, avoid also slotting a link-like trailing control that duplicates the same destination.
- `aa-list-item-leading` and `aa-list-item-trailing` are internal primitives, hidden from Storybook's sidebar — always reach for `aa-list-item` and slot them in, not the other way round.
- `aa-list-item-group` only supplies the shared surface and spacing; each item still owns its own `divider`, `badge` and `href`.

## Accessibility

### Focus order
When `href` is set, the row is one focusable stop (the underlying `<a>`) in the natural tab order; any interactive trailing control (e.g. a slotted `aa-switch`) is a separate, independent stop immediately after, since it sits visually on top of — not nested inside — the row's link. Without `href`, the row itself is not focusable and only a slotted trailing control participates in tab order.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the row's link (when `href` is set). |
| Tab | Moves focus to the row's link, then to any independently focusable trailing control. |

_TODO: keyboard interactions for slotted trailing controls (switch/checkbox/radio) are owned by those components, not `aa-list-item` — confirm whether this doc should cross-reference them explicitly._

### ARIA
- The row's link uses `aria-labelledby` pointing at the internal label element, so its accessible name matches the visible label rather than any surrounding text.
- No `role` override is applied — the component renders a real `<a>` when `href` is set, and a plain, non-semantic container otherwise.

### SEO and AI discovery
- When `href` is set, the row renders a real, crawlable `<a>`, not a `<div>` with a click handler.
- Label text should describe the destination or setting on its own — avoid vague labels like "More", which carry no meaning out of context for assistive tech, search engines or AI agents parsing the page.

## Related components
- `aa-list-item-group` — wraps a set of items in a shared surface.
- `aa-list-item-leading` — internal primitive for the leading icon/avatar/status slot.
- `aa-list-item-trailing` — internal primitive for the trailing control slot.
- `aa-menu-item` — the equivalent row for primary/navigation menus, rather than general lists.
- `aa-divider` — used internally when `divider` is set, and directly between ungrouped items.
