# Aa-breadcrumb

## Overview
`aa-breadcrumb` shows the user's current position in the site hierarchy as a trail of links ending in the current page. It carries its own full-width background and sits directly in the page (like `aa-hero`), rather than nesting inside `aa-panel`.

Figma verification: `Breadcrumb` (node `20326:4600`), `Theme=Light`/`Theme=Yellow`.

## Anatomy
1. **Crumb links** — one per ancestor page, authored as plain `<a href>` elements in the component's light DOM.
2. **Separators** — a decorative chevron icon between each crumb.
3. **Current page** — the final, non-link crumb, marked with `aria-current="page"`.
4. **Overflow trigger** (when collapsed) — a button showing a "more" icon that reveals hidden crumbs when clicked.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `items` | `{ href?: string; label: string }[]` | `[]` | Breadcrumb entries. If left empty and light-DOM children are present, they're read automatically on connect. |
| `max-visible` | number | `4` | Maximum crumbs shown before collapsing to first crumb + overflow trigger + trailing crumbs. |
| `theme` | `light` \| `yellow` | `light` | Colour theme scope, matching the mechanism used by `aa-panel`/`aa-hero`. |

## Behaviour
- **Authoring via light DOM**: consumers can author breadcrumbs as plain `<a href>` elements (ending in a non-link element for the current page) instead of only through the `items` property — read once on connect.
- **Collapsing**: when the number of items exceeds `max-visible`, the trail collapses to the first crumb, an overflow trigger, and the trailing items (always including the current page) — matching the common "start > … > parent > current" pattern rather than hiding from either end.
- **Expanding**: clicking the overflow trigger reveals all crumbs; this state does not automatically re-collapse.
- **Hover**: non-current crumbs underline on hover; the current-page crumb has no hover state since it isn't a link.
- **Theme scoping**: `theme` applies the same scoped-theme mechanism as `aa-panel`/`aa-hero` — colour comes entirely from existing theme-scoped tokens, so light vs yellow needed no bespoke styling of its own.
- **Responsive behaviour**: the crumb list wraps onto multiple lines if it doesn't fit the available width; the container itself is capped and centred to the page's content width, matching `aa-hero`'s "full-bleed host, capped inner content" pattern.

## Usage

### When to use
- At the top of any page nested more than one level deep in the site hierarchy.
- Helping users understand and navigate back through the page hierarchy.
- Pages that sit directly in a yellow-themed section of the site (`theme="yellow"`).

### When not to use
- On top-level or landing pages with no meaningful hierarchy above them.
- As a replacement for primary navigation — breadcrumbs supplement, not replace, the main nav.
- Inside `aa-panel` — like `aa-hero`, it's designed to carry its own full-bleed background directly in the page.

## Content guidance

### What to write
- Match each crumb's label to the destination page's actual title, for clarity and consistency.
- Keep labels short — long labels increase the chance of wrapping and crowd the trail.
- Always end with the current page as a plain (non-link) label.

### How to write
- Use sentence case for crumb labels.
- Use British English spelling.
- Avoid vague labels like "Page" or "Section" — use the real page name.

| Do ✅ | Don't ❌ |
|---|---|
| "Breakdown cover" | "Click here" |
| "Quote" | "Next page" |

## Examples
- **Default (light theme)** — standard trail with three or four crumbs.
- **Yellow theme** — same trail on the yellow-themed background.
- **Collapsed** — a longer trail (five items) collapsed to first + overflow + trailing items via `max-visible`.

## Things to consider
- `max-visible` counts include the first crumb and the trailing items together — setting it very low (e.g. below 3) may not leave room for a meaningful trailing set; verify the collapsing behaviour reads sensibly at your chosen value.
- Once expanded via the overflow trigger, the trail does not automatically re-collapse — this is a one-way reveal per page view.
- Reading breadcrumb items automatically from light-DOM children only happens if the `items` property is left empty — setting `items` programmatically will always take priority over slotted children.

## Accessibility

### Focus order
Each linked crumb and the overflow trigger (when present) sit in normal tab order, in visual left-to-right order. The current-page crumb, being a plain `<span>`, is not focusable.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Follows the focused crumb link, or activates the overflow trigger to reveal hidden crumbs. |

### ARIA
- The container is a `<nav>` with `aria-label="Breadcrumb"`, giving assistive technology a clear landmark for the trail.
- The current-page crumb carries `aria-current="page"`.
- The overflow trigger button has `aria-label="Show hidden breadcrumb items"` since it has no visible text label, only an icon.
- Separator icons are marked `aria-hidden="true"` since they're purely decorative.

### SEO and AI discovery
- Uses a semantic `<nav>` landmark with a descriptive `aria-label`, helping search engines and AI agents identify the breadcrumb trail as navigation rather than generic content.
- Crumbs are real `<a href>` elements, so they're crawlable links contributing to the site's discoverable hierarchy — avoid JavaScript-only navigation for any crumb that should be indexed.
- Consider adding `BreadcrumbList` structured data alongside this component for enhanced search result display. _TODO: confirm whether structured data is added elsewhere in the page template._

## Related components
- `aa-hero` — shares the same full-bleed-host, capped-content layout pattern and theme-scoping mechanism.
- `aa-panel` — an alternative container `aa-breadcrumb` deliberately does not nest inside.
- `aa-icon` — supplies the separator and overflow-trigger icons.
