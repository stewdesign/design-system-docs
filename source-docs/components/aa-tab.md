# Aa-tab

## Overview
`aa-tab` is a single selectable item within an `aa-tabs` tablist, showing a label and an optional leading icon with a distinct active/inactive appearance. It's an internal primitive: it isn't meant to be reached for directly, and has no story of its own — `aa-tabs`'s own stories cover every state it renders.

## Anatomy
1. **Icon slot** (`icon`) — optional leading icon shown above the label.
2. **Label** (`part="label"`) — the tab's text content, via the default slot.
3. **Active indicator** — a bottom border that scales in from zero width when the tab is active.
4. **Focus ring** — a dashed outline shown on keyboard focus.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Whether this tab is the currently selected one. Reflected as an attribute; managed by the parent `aa-tabs`, not set directly by consumers in normal use. |
| `size` | `large` \| `small` | `large` | Controls padding, font size/weight, content gap and indicator thickness. Set by the parent `aa-tabs` on each tab unless a tab already carries an explicit `size` attribute of its own. |

## Behaviour
- **Selection**: clicking a tab dispatches a bubbling, composed `tab-select` custom event; the parent `aa-tabs` listens for this to manage exclusive selection across its tabs.
- **Hover**: label colour shifts to the heading text colour; unaffected by active state.
- **Active**: label and icon recolour to their "primary"/"headings" tokens (icon and label use separate colour tokens, not one shared `currentColor`, matching Figma's two distinct tokens per state), and the bottom indicator scales in from `scaleX(0)` to `scaleX(1)`.
- **Focus**: a dashed focus ring appears on `:focus-visible`, layered above the tab via `z-index`.
- **Tab order**: only the active tab has `tabindex="0"`; all others have `tabindex="-1"` — arrow-key roving focus (owned by the parent `aa-tabs`) is what moves focus between tabs, per the WAI-ARIA Tabs pattern.
- **Transitions**: colour changes use the shared interactive transition token; the active indicator additionally animates its scale over 160ms; the focus ring uses the shared focus-ring transition token.
- **Size variants**: `large` uses a taller, larger-type layout with a 4px active indicator; `small` uses a more compact layout with a 2px indicator. Both bump label font weight when active.

## Usage

### When to use
- As a child of `aa-tabs`, one per tab in the set — not standalone.
- When you need each tab to optionally carry a leading icon alongside its label.

### When not to use
- Directly, outside an `aa-tabs` wrapper — it has no tablist semantics or keyboard handling of its own; those are owned by the parent.
- For actions that aren't part of a mutually-exclusive set of panels/views — use `aa-button` instead.

## Content guidance

### What to write
- Keep labels short and specific to the content or view the tab reveals.
- Avoid generic wording such as "More" or "Other" — name what the tab actually contains.
- Keep labels short enough that they don't wrap onto a second line at either size.

### How to write
- Use sentence case, not title case.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily".
- Use the Harvard comma, not the Oxford comma, when writing a list of three or more items in sentence form.

| Do ✅ | Don't ❌ |
|---|---|
| "Cover options" | "More" |
| "Claims" | "Everything about claims" |
| "Your vehicle" | "Your Vehicle:" |

## Examples
- **Active / inactive** — selected and unselected states at default (`large`) size.
- **With icon** — a leading icon slotted above the label.
- **Small** — the compact size variant.
- **Comparison** — active/inactive, with/without icon and both sizes shown side by side.

## Things to consider
- `active` is managed by the parent `aa-tabs`, which resolves conflicts if more than one child tab is marked active — don't rely on setting `active` on multiple tabs directly.
- `size` set explicitly on an individual tab overrides the size the parent `aa-tabs` would otherwise apply — only omit it if you want the tab to follow its parent's size.
- Icon colour is owned by the component's state (default vs active), not by whatever is slotted in — the slot only supplies the icon graphic itself.

## Accessibility

### Focus order
Only the active tab is in the tab order (`tabindex="0"`); inactive tabs are removed from it (`tabindex="-1"`). Moving between tabs within the set is done with arrow keys, not Tab, per the WAI-ARIA Tabs pattern — Tab moves focus into and out of the tablist as a whole.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Activates the focused tab (native `<button>` behaviour). |

_TODO: arrow key, Home and End handling live on the parent `aa-tabs`, not on `aa-tab` itself — see `aa-tabs.md` for those mappings._

### ARIA
- `role="tab"` — applied to the rendered `<button>`, identifying it as a tab within the parent's `role="tablist"`.
- `aria-selected` — reflects `active` as the string `"true"` or `"false"`.
- `tabindex` — `0` when active, `-1` when inactive, implementing the roving-tabindex pattern.

### SEO and AI discovery
- Renders a real `<button>` with `role="tab"`, not a generic `<div>`, so semantics and focusability are native rather than simulated.
- Label text should describe the destination content on its own (per the content guidance above) — avoid vague labels that carry no meaning out of context for assistive tech or AI agents parsing the page.

## Related components
- `aa-tabs` — the required parent wrapper that provides tablist semantics, arrow-key roving focus and `size` fan-out.
- `aa-icon` — supplies the optional icon slotted into a tab.
- `aa-button` — for standalone actions that aren't part of a mutually-exclusive tab set.
