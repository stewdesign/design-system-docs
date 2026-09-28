# Aa-accordion-item

## Overview
`aa-accordion-item` is a single collapsible row: a heading with a chevron that expands to reveal supporting content. It is always used inside `aa-accordion`, which owns shared sizing, surface and grouping behaviour across all items in a group.

## Anatomy
1. **Divider** (optional) — a leading `aa-divider`, shown when `show-divider` is set by the parent `aa-accordion` (applies to the `flat` type only).
2. **Summary row** — the always-visible header, built on native `<summary>`.
3. **Leading icon slot** (`icon-start`) — optional icon shown before the heading text.
4. **Heading** — the item's heading text (`heading` property).
5. **Chevron** — a decorative `aa-icon` (`chevron-down`) that rotates 180° when open.
6. **Content** — the collapsible body, projected through the default slot.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `size` | `default` \| `slim` | `default` | Controls padding and leading-icon size. Set by the parent `aa-accordion`, not directly by consumers. |
| `surface` | `fill` \| `flat` | `fill` | Whether the item has its own filled, rounded background. Set by the parent `aa-accordion` based on its `type`. |
| `heading` | string | `'Heading'` | The item's heading text. |
| `open` | `boolean` | `false` | Whether the item is expanded. |
| `show-divider` | `boolean` | `false` | Shows a leading `aa-divider`. Set by the parent group on every item after the first when dividing (`flat` type only). |

## Behaviour
- **Toggle**: built on native `<details>`/`<summary>` — clicking the summary row toggles `open` and dispatches a bubbling, composed `toggle` event so the parent `aa-accordion` can coordinate exclusive-open behaviour.
- **Expand/collapse animation**: a smooth height and opacity transition (350ms ease-in-out) driven entirely by CSS (`max-block-size` and `opacity`), with no JavaScript animation. Closed content is visually collapsed but not removed from the accessibility tree or tab order — a deliberate trade-off.
- **Chevron rotation**: rotates 180° over 350ms when the item opens.
- **Hover**: the summary row gets a subtle fill on hover.
- **Reduced motion**: chevron rotation and the expand/collapse transition are both disabled under `prefers-reduced-motion: reduce`.
- **Icon sizing**: the item owns the leading icon's size (`--aa-icon-size`), varying by `size`, so consumers don't need to size their own slotted icon.
- **Responsive behaviour**: no breakpoints of its own; it sizes to its container's inline size.

## Usage

### When to use
- As a child of `aa-accordion` — it has no standalone use case outside that group.
- For an individual FAQ entry, a collapsible content section, or one row in a grouped set of expandable panels.

### When not to use
- Never nested outside `aa-accordion` — it relies on the group for shared `size`, `surface` and exclusive-open coordination.
- For a single, page-level expand/collapse control unrelated to a set — consider a plain disclosure pattern instead.
- For primary or urgent content the user must see immediately — see content guidance below.

## Content guidance

### What to write
- Keep headings short, direct and in sentence case — they act as scannable labels for what's inside.
- Content guidance from Figma: accordion content should be supporting, optional or secondary information — scannable, self-contained and non-critical.
- Avoid putting urgent warnings, required instructions, primary calls to action, legal consent, or anything users must compare side by side inside an accordion item — users may never open it.

### How to write
- Use sentence case for the heading, not title case.
- Frontload headings with the topic or question, not a generic label like "More info".
- Use British English spelling and plain, familiar language throughout the body content.
- Avoid jargon and technical terms; write for a reading age of around 9.

| Do ✅ | Don't ❌ |
|---|---|
| "How do I make a claim?" | "Claims: more information" |
| "What's covered under Home cover" | "Click here for cover details" |

## Examples
- **Default item** — filled surface, medium padding, closed.
- **Open item** — expanded, chevron rotated, content visible.
- **Slim item** — reduced padding and smaller leading icon, for denser lists.
- **Item with leading icon** — an icon slotted before the heading.
- **Flat item with divider** — no fill, a divider line above (all but the first item in the group).

## Things to consider
- `size`, `surface` and `show-divider` are all set by the parent `aa-accordion` — don't set them directly on an item that's meant to match its siblings, or it will drift out of sync when the group's own props change.
- Closed content stays in the DOM and accessibility tree (just visually collapsed), so don't rely on it being removed for performance reasons.
- The expand animation measures against a fixed `max-block-size` cap (`8rem`) rather than real content height — very tall content is clipped mid-transition rather than fully revealed until the transition ends.
- Word-wrapping is enabled on the heading; very long headings will wrap onto multiple lines rather than truncating.

## Accessibility

### Focus order
The summary row is a native `<summary>` element and receives focus in normal tab order at its position in the page. Content inside an open item is focusable in its own document order after the summary; content inside a closed item is not reachable by Tab because native `<details>` skips collapsed content, though it is not removed from the accessibility tree.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Toggles the item open or closed (native `<summary>` behaviour). |

### ARIA
- No custom ARIA roles are applied — semantics come entirely from native `<details>`/`<summary>`, which already expose expand/collapse state to assistive technology.
- The chevron icon is marked `aria-hidden="true"` since it's purely decorative and rotation alone carries no independent meaning beyond the native open/closed state.

### SEO and AI discovery
- Renders as real `<details>`/`<summary>` elements, which are natively crawlable and semantically meaningful to search engines and assistive technology — content is not hidden via `display: none` in a way that would exclude it from being indexed.
- Because native `<details>` content stays in the DOM when collapsed, text inside a closed item remains available to crawlers and AI agents parsing the page, even though it isn't visible to sighted users until expanded.

## Related components
- `aa-accordion` — the required parent group; owns `type`, `size`, dividing and exclusive/multiple-open coordination for its items.
- `aa-divider` — used internally for the `show-divider` separator between items.
- `aa-icon` — supplies the leading icon and the chevron indicator.
