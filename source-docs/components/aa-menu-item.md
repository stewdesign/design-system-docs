# Aa-menu-item

## Overview
`aa-menu-item` is a single navigable row inside an `aa-menu` disclosure — a label with an optional trailing icon, rendered as a real link or a plain button. It appears exclusively as a child of `aa-menu`, representing one destination within an expandable navigation group.

## Anatomy
1. **Item container** — a real `<a>` when `href` is set, otherwise a plain `<button type="button">`, so the row is genuinely navigable or genuinely actionable rather than a styled non-semantic element.
2. **Label** — the slotted default content, wrapped in a `.label` span; bold when `current` is set.
3. **Trailing icon** — shown when `trailing-icon` is true, via a named `icon` slot defaulting to a link glyph (`aa-icon name="link"`).
4. **Divider** — an `aa-divider` rendered after the item when `show-divider` is true, set automatically by the parent `aa-menu` on every item except the last.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `current` | boolean | `false` | Marks this as the current page — renders the label in bold, matching Figma's "Active" state. |
| `href` | string | `''` | Renders a real navigable `<a>`. Omit it to render a plain `<button>` instead. |
| `show-divider` | boolean | `false` | Set by the parent `aa-menu` on every item except the last — not intended to be set manually. |
| `trailing-icon` | boolean | `false` | Shows the trailing icon area (`icon` slot), defaulting to a link glyph if the slot is left empty. |

## Behaviour
- **Hover**: the item's background changes to `--surface-inputs-hover` on hover, whether rendered as a link or a button.
- **Current state**: `current` only changes font weight (bold label) — it does not add a background fill; Figma verifies hover and current as two independent, non-stacked states.
- **Link vs button**: setting `href` swaps the rendered element from `<button>` to `<a>` — the visual treatment is otherwise identical.
- **Divider placement**: `show-divider` is managed by the parent `aa-menu`, which listens for slot changes and sets it on every item except the last — consumers don't need to set it themselves.
- **Transitions**: background changes use the shared interactive transition token.
- **Responsive behaviour**: the item fills its container's inline size; it has no breakpoints of its own.

## Usage

### When to use
- A single destination inside an `aa-menu` disclosure, as a slotted child.
- Marking the current page within a navigation group (`current`).
- A leaf item that should show a trailing icon to signal it opens/links elsewhere (`trailing-icon`).

### When not to use
- Outside an `aa-menu` — this component relies on its parent for divider placement and shares its visual language with the menu disclosure; use `aa-list-item` for a general-purpose list row instead.
- A primary, stand-alone call-to-action — use `aa-button`.
- A leaf-only navigation item with no parent group — set `href` directly on `aa-menu` instead of slotting a single `aa-menu-item`.

## Content guidance

### What to write
- Keep the label short, direct and specific to the destination — it should read clearly at a glance inside a list of related items.
- Match the label to the destination page's title where possible, for consistency between the menu and where it leads.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Use active, specific wording — avoid vague labels like "Click here" or "Learn more".
- Use British English spelling throughout.

| Do ✅ | Don't ❌ |
|---|---|
| "Roadside assistance" | "Roadside Assistance:" |
| "Family breakdown cover" | "Learn more about family cover" |
| "Compare cover" | "Click here to compare" |

## Examples
- **Default item** — plain label, `href` set, no trailing icon.
- **Current item** — `current` set, bold label.
- **Trailing icon item** — `trailing-icon` set, default link glyph shown.
- **Button item** — no `href`, renders as a plain button for an in-page action rather than navigation.

## Things to consider
- `show-divider` is managed automatically by the parent `aa-menu` — setting it manually on a standalone item outside that context has no guaranteed effect on spacing consistency.
- Don't slot another interactive element into the default slot alongside the label — the whole item is already the single interactive target (link or button).
- The trailing icon slot's default (a link glyph) is only shown when `trailing-icon` is explicitly set — leaving `trailing-icon` false hides the slot entirely, even if content is slotted into it.

## Accessibility

### Focus order
As either a real `<a>` or a `<button>`, `aa-menu-item` participates in the natural tab order at its position among sibling items inside the parent `aa-menu`'s disclosure body.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the link or button. |
| Space | Activates the button form (native `<button>` behaviour; does not apply to the anchor form). |

### ARIA
- `aria-current="page"` is applied when `current` is true; `aria-current="false"` otherwise, on both the link and button forms.
- No `role` override is used — the semantic `<a>` or `<button>` element is rendered directly.

### SEO and AI discovery
- Renders a real `<a>` or `<button>`, not a generic `<div>`, so semantics and crawlability are native.
- `aria-current="page"` gives assistive tech and AI agents parsing the page a clear, standard signal of which item represents the current page.
- Label text should describe the destination on its own, per the content guidance above, so it carries meaning out of context.

## Related components
- `aa-menu` — the parent disclosure that composes `aa-menu-item` children and manages their dividers.
- `aa-list-item` — the equivalent row for general-purpose lists, rather than navigation menus.
- `aa-divider` — rendered automatically between items via `show-divider`.
- `aa-icon` — supplies the trailing icon glyph.
