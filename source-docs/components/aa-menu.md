# Aa-menu

## Overview
`aa-menu` is an expandable navigation disclosure — a parent label that opens to reveal slotted `aa-menu-item` children, or, with no children, renders as a plain leaf link. It typically appears in primary or mobile navigation, grouping related destinations under a single expandable heading.

## Anatomy
1. **Icon** (optional, `icon` slot) — shown before the label when `variant` is `icon` or `hero`; hidden entirely for `default`.
2. **Label** — the parent's heading text (`label` property).
3. **Chevron** — rotates 180° when open, indicating expand/collapse state (only present on the expandable/disclosure form).
4. **Body** — the disclosure's content area, holding slotted `aa-menu-item` children; padding varies by `variant` to align with the icon column.
5. **Leaf link form** — when `href` is set, the whole component renders as a single `<a>` with no chevron or expandable body.

Figma verification: `Menu` (node `17264:5450`, `Default`/`Icon`/`Hero` variants) and `.Menu-item-child` (node `17264:5350`, Default/Hover/Active/Focus states).

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `href` | string | `''` | Real navigable link for a leaf item with no children. Mutually exclusive with slotted `aa-menu-item`s — setting it turns the component into a plain leaf link instead of an expandable disclosure. Matches Figma's `hasDropdown` toggle. |
| `label` | string | `'Parent'` | The parent item's heading text. |
| `open` | boolean | `false` | Reflected attribute controlling whether the disclosure is expanded. |
| `variant` | `default` \| `icon` \| `hero` | `default` | Controls whether a leading icon is shown and how the body/icon area is styled and indented. |

## Behaviour
- **Leaf vs disclosure**: setting `href` renders a plain link with no chevron or expand/collapse behaviour — the disclosure markup only appears when there are children to expand.
- **Expand/collapse**: built on a native `<details>`/`<summary>` pair, reusing `aa-accordion-item`'s exact `::details-content` technique so it animates open/closed consistently with the rest of the system.
- **Toggle event**: clicking the parent toggles `open` and dispatches a `toggle` event (bubbling, composed) whenever the open state actually changes.
- **Divider assignment on slot change**: on every slot change, the component filters its assigned `aa-menu-item` children and sets `show-divider` on every item except the last, so dividers stay correct as items are added or removed.
- **Icon and body indentation**: `variant="hero"` gives the icon its own boxed background (40×40px) and indents the body further to align with it; `variant="icon"` shows a plain icon with a smaller indent; `variant="default"` shows no icon and the smallest indent.
- **Scoped theme**: establishes its own light-theme palette (`setAaScopedTheme(this, 'light')`) on connect, so it renders consistently even when slotted inside a component that scopes itself to a different theme (e.g. `aa-header`'s yellow band).
- **Collapse sizing**: the open body is capped at a generous `max-block-size: 24rem` and clipped beyond that, rather than scaled — sized larger than `aa-accordion-item`'s equivalent since a menu typically holds more links.
- **Reduced motion**: chevron rotation and collapse/expand transitions are removed entirely under `prefers-reduced-motion: reduce`, rather than slowed.
- **Responsive behaviour**: capped at `max-inline-size: 22.5rem`; no other breakpoints of its own.

## Usage

### When to use
- A group of related navigation destinations under a single expandable heading, e.g. in primary or mobile navigation.
- A single, leaf-level navigation link with no children — set `href` directly rather than slotting a lone `aa-menu-item`.
- Navigation groups that need an icon for quick visual scanning (`variant="icon"` or `"hero"`).

### When not to use
- A settings or account list with no navigational hierarchy — use `aa-list-item`/`aa-list-item-group` instead.
- An accordion for FAQ-style content rather than navigation — use `aa-accordion-item`, even though it shares the same expand/collapse technique.
- A flat set of top-level tabs — use `aa-tabs`/`aa-tab`.

## Content guidance

### What to write
- Keep `label` short and specific — it should describe the group of destinations it expands to reveal, e.g. "Breakdown cover".
- Match child `aa-menu-item` labels to their destination page titles where possible.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Use active, specific wording — avoid vague labels like "More" or "Explore".
- Use British English spelling throughout.

| Do ✅ | Don't ❌ |
|---|---|
| "Breakdown cover" | "All About Breakdown Cover" |
| "Help and support" | "Need Some Help?" |
| "Insurance" | "Our Insurance Products" |

## Examples
- **Default** — plain parent label, no icon, collapsed.
- **Open** — same as Default, expanded to show children.
- **Icon** — `variant="icon"`, plain leading icon, expanded.
- **Hero** — `variant="hero"`, boxed leading icon, expanded.
- **Leaf link** — `href` set, no children, renders as a plain link.
- **List** — several `aa-menu` instances stacked, mixing expandable groups and leaf links.

## Things to consider
- `href` and slotted `aa-menu-item` children are mutually exclusive in intent — setting `href` on a menu that also has slotted children will still render the leaf-link form, so the children won't be shown; don't mix the two.
- The open body clips content beyond `24rem` block size rather than scrolling or scaling — very long child lists may be visually cut off.
- `show-divider` on child items is managed automatically; don't set it manually on `aa-menu-item` children of an `aa-menu`.
- Icon indentation (`padding-inline-start`) is tied to `variant` — swapping variants after content is authored may require re-checking alignment between the icon and body.

## Accessibility

### Focus order
The parent (`<summary>` or leaf `<a>`) is one focusable stop in the natural tab order. When expanded, its slotted `aa-menu-item` children follow immediately after in DOM order, each a focusable stop of their own.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Toggles the disclosure open/closed (native `<summary>` behaviour), or activates the link (leaf form). |
| Tab | Moves focus to the parent, then into its children once expanded. |

### ARIA
- No explicit ARIA roles or attributes are set by `aa-menu` itself — it relies on the native semantics of `<details>`/`<summary>` (disclosure) or `<a>` (leaf link) for expand/collapse and navigation state.
- The chevron icon is marked `aria-hidden="true"`, since the native `<summary>` element already communicates expanded/collapsed state to assistive tech.

### SEO and AI discovery
- Uses native `<details>`/`<summary>` for the disclosure form, giving search engines and AI agents a standard, well-understood expand/collapse landmark rather than a custom widget.
- The leaf form renders a real, crawlable `<a>` rather than a JavaScript-only click handler.
- Label text should describe the group or destination on its own, per the content guidance above.

## Related components
- `aa-menu-item` — the slotted child rows this component composes and manages dividers for.
- `aa-accordion-item` — shares the same `<details>`/`::details-content` expand/collapse technique, for non-navigational content.
- `aa-list-item` — the equivalent row for general-purpose, non-navigational lists.
- `aa-icon` — supplies the leading icon slotted into the `icon` slot.
