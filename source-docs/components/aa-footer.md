# Aa-footer

## Overview
`aa-footer` is the site-wide footer pattern: a brand mark and breadcrumb, a set of data-driven link sections, and a bottom bar with a copyright notice and legal links. The section and legal link content is passed in as data rather than fixed markup, so the real content can be edited without introducing new component variants.

## Anatomy
1. **Breadcrumb** — brand mark (`aa-logo`), a separator, and the current section label (e.g. "Breakdown cover").
2. **Section groups** — one or more headed columns of links (`sections`), laid out in a responsive grid.
3. **Bottom bar** — a copyright mark and copyright text, alongside a list of legal links (`legalLinks`).

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `sections` | `AaFooterSection[]` (`{ heading, links: { label, href? }[] }[]`) | Default AA sections ("Products and services", "Existing customers", "Company") | The headed link columns rendered in the main footer grid. |
| `legalLinks` | `AaFooterLink[]` (`{ label, href? }[]`) | Default legal links (terms, cookies, modern slavery statement, privacy hub, privacy notice) | The links rendered in the bottom legal bar. |
| `breadcrumb` | string | `'Breakdown cover'` | The current section label shown next to the brand mark. |
| `copyrightText` (attribute `copyright-text`) | string | `'© Automobile Association Developments Ltd. 2025'` | The copyright notice shown in the bottom bar. |
| `brandHref` (attribute `brand-href`) | string | _undefined_ | When set, wraps both brand marks (breadcrumb and copyright) in a link to this URL. |

## Behaviour
- **Link vs. static text**: any `AaFooterLink` without an `href` renders as plain text (a `<span>`), not a link — used for section links that don't yet have a destination.
- **Brand mark**: `aa-logo` supplies its own accessible name (`role="img"` with `aria-label="The AA"`), so no additional label is needed on the wrapping link.
- **Responsive layout**: section columns wrap via `repeat(auto-fit, minmax(min(100%, 20rem), 1fr))`, so the number of visible columns depends on available width rather than a fixed breakpoint. At `48rem` and above, the bottom bar switches from a stacked layout to a two-column row (copyright left, legal links right, wrapping and right-aligned).
- **Theme**: sets its own scoped theme to `light` on connect, regardless of the surrounding page theme.

## Usage

### When to use
- The footer of any AA site page, where a consistent set of navigation, legal and brand elements is required.

### When not to use
- Mid-page navigation or link groups — use standard navigation or link list components instead.
- A minimal or single-purpose page that doesn't need the full section/legal link structure — _TODO: confirm whether a lighter-weight footer variant exists._

## Content guidance

### What to write
- Keep section headings short and scannable (e.g. "Products and services", "Existing customers").
- Link labels should describe the destination on their own, without relying on the surrounding section heading for context.
- Use the current page or journey name for `breadcrumb` so users can see where they are relative to the brand.

### How to write
- Use sentence case for section headings and link labels, not title case.
- Use British English spelling throughout (e.g. "Organisation", not "Organization").
- Avoid adverbs and filler words in link labels.

## Examples
- **Default** — desktop-width footer with the standard AA sections, breadcrumb and legal links.
- **Mobile** — the same footer rendered at mobile preview width, showing the stacked bottom bar.

## Things to consider
- `sections` and `legalLinks` are passed as properties (not attributes), so they must be set via JavaScript/Lit bindings (`.sections=`, `.legalLinks=`), not as HTML attribute strings.
- A link without an `href` deliberately renders as non-interactive text — don't rely on it being clickable.
- The brand mark is sized at a fixed `2.25rem` to match the adjacent body text's line height, not `aa-logo`'s own larger default size.

## Accessibility

### Focus order
Focusable elements follow document order: brand mark link (if `brandHref` is set) and breadcrumb, then each section's links in turn, then the bottom bar's brand mark link and legal links.

### Keyboard interactions

| Key | Action |
|---|---|
| Tab | Moves focus to the next link in the footer. |
| Shift+Tab | Moves focus to the previous link in the footer. |
| Enter | Activates the focused link. |

### ARIA
- The section links list and legal links list both use `role="list"` to preserve list semantics against browsers/assistive tech that strip implicit list role from list-styled `<ul>` elements.
- The breadcrumb separator (`/`) is marked `aria-hidden="true"` since it is purely visual.
- `aa-logo` provides its own accessible name (`role="img"` with `aria-label="The AA"`); no extra labelling is added when it's wrapped in a link.

### SEO and AI discovery
- Section and legal links render as real `<a href>` elements (when a link has an `href`), so they are crawlable rather than JavaScript-only click handlers.
- Section headings render as real `<h2>` elements, giving crawlers and assistive tech a genuine heading structure for the footer's link groups.

## Related components
- `aa-logo` — supplies the brand mark used in both the breadcrumb and the copyright row.
- `aa-header` — the corresponding top-of-page pattern.
