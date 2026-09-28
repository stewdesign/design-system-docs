# Aa-tabs

## Overview
`aa-tabs` is the wrapper that turns a set of slotted `aa-tab` children into an accessible tablist — exclusive selection, arrow-key roving focus, and a shared `size`. It stays intentionally small: it provides tablist semantics and spacing, while each `aa-tab` owns its own default/hover/active/focus states and optional icon anatomy.

## Anatomy
1. **Tablist container** (`part="tablist"`, `role="tablist"`) — the flex row holding all tabs.
2. **Slotted `aa-tab` children** — one per tab, each rendering its own label, optional icon and active indicator.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `size` | `large` \| `small` | `large` | Sets the gap between tabs and fans out to every slotted `aa-tab` that doesn't already carry an explicit `size` attribute of its own. |

## Behaviour
- **Selection**: `aa-tabs` listens for the `tab-select` event bubbling up from a child `aa-tab` and activates that tab, deactivating all others — only one tab is ever active at a time.
- **Initial state**: on slot change (i.e. when tabs are first added or changed), if no child tab is already marked `active`, the first tab is activated automatically.
- **Size fan-out**: when `size` changes, or when tabs are (re)slotted, every child tab without its own explicit `size` attribute is updated to match the parent's `size`. A tab with its own `size` attribute keeps it, overriding the parent.
- **Keyboard roving focus**: arrow keys move both selection and focus between tabs, implementing the WAI-ARIA Tabs pattern (only the active tab sits in the tab order; see Keyboard interactions below).
- **Responsive behaviour**: the tablist has no responsive breakpoints of its own; it's a `display: flex` row that fills its container's width (`width: 100%`) and wraps only if forced to by tab content — content guidance requires short enough labels not to wrap on mobile.

## Usage

### When to use
- Switching between related views or panels of content within the same context, where only one is visible at a time.
- Grouping sub-navigation within a page or section, e.g. switching between "Cover", "Claims" and "Documents" for the same policy.

### When not to use
- A single standalone action — use `aa-button`.
- Primary, page-level navigation between distinct areas of the product — use a dedicated navigation component.
- A small, fixed set of mutually exclusive options that aren't panels of content — use a radio group instead.

## Content guidance

### What to write
- Keep the tab set focused — each tab should represent one distinct view or panel, not an overlapping or ambiguous subset of another tab's content.
- Order tabs by expected frequency of use or logical sequence, with the most relevant view first (it's activated by default if no tab is set active).
- See `aa-tab.md` for label-level content guidance.

### How to write
- Use sentence case, not title case.
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid adverbs like "simply", "just" or "easily".
- Use the Harvard comma, not the Oxford comma, when writing a list of three or more items in sentence form.

| Do ✅ | Don't ❌ |
|---|---|
| "Cover", "Claims", "Documents" | "Cover", "More info", "Other stuff" |
| "Your vehicle" | "Your Vehicle:" |
| "Payment history" | "Simply view your payment history" |

## Examples
- **Large** — default size, no icons.
- **Large with icons** — default size, each tab with a leading icon.
- **Small** — compact size, no icons.
- **Small with icons** — compact size, each tab with a leading icon.

## Things to consider
- `aa-tabs` only renders the tablist — the corresponding tab panels (the content each tab reveals) are the consumer's responsibility to build and associate.
- If no child tab is marked `active`, the first tab is activated automatically — don't rely on all tabs starting inactive.
- A child tab's own explicit `size` attribute always wins over the parent's `size` — remove it from individual tabs if they should follow the parent instead.
- Tab labels aren't truncated by the component — long labels will wrap or force the tablist to overflow, so keep labels concise per the content guidance above.

## Accessibility

### Focus order
The tablist itself is not a single tab stop. Tab moves focus into the currently active tab (the only one with `tabindex="0"`); moving between tabs within the set is then done with arrow keys, not Tab, matching the WAI-ARIA Tabs pattern.

### Keyboard interactions

| Key | Action |
|---|---|
| Right arrow / Down arrow | Moves selection and focus to the next tab, wrapping to the first after the last. |
| Left arrow / Up arrow | Moves selection and focus to the previous tab, wrapping to the last after the first. |
| Home | Moves selection and focus to the first tab. |
| End | Moves selection and focus to the last tab. |
| Enter / Space | Activates the focused tab (handled by `aa-tab`). |

### ARIA
- `role="tablist"` — applied to the container element holding the slotted tabs.
- `role="tab"`, `aria-selected` and `tabindex` — applied per tab by `aa-tab` itself; see `aa-tab.md`.

_TODO: no `aria-controls`/`role="tabpanel"` wiring is present in this component — associating each tab with its panel is left to the consumer._

### SEO and AI discovery
- Renders a real `role="tablist"` container around native, focusable `aa-tab` buttons, so tablist semantics are explicit rather than simulated with plain `<div>`s.
- Tab labels should describe their panel's content on their own (per the content guidance above) — avoid vague labels that carry no meaning out of context for assistive tech or AI agents parsing the page.

## Related components
- `aa-tab` — the individual selectable item rendered inside `aa-tabs`; not meant to be used standalone.
- `aa-icon` — supplies the optional icon slotted into each tab.
- `aa-button` — for a single standalone action rather than a set of mutually exclusive views.
