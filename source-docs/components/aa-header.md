# Aa-header

## Overview
`aa-header` is the site-wide header pattern, built around slots rather than link-array properties: the logo and breadcrumb are real `aa-logo`/`aa-breadcrumb` elements, utility/account links are plain `<a>`s the consumer authors directly, and the primary nav is authored once as real `aa-menu` elements. That single set of `aa-menu` elements is what mobile shows directly (a stacked disclosure list) and what desktop's flat, chevron-less link row is derived from — one authored source, two Figma-verified presentations. It also owns and renders its own internal desktop mega menu (`aa-header-dropdown`).

Figma verification: `Header` (node `2287:22651`), three `Experience` variants (`Default`, `Your account`, `In journey`) across Desktop/Tablet/Mobile.

## Anatomy
1. **Logo** (`slot="logo"`) — defaults to `aa-logo` if nothing is slotted.
2. **Utility row** — business customer prompt, utility links (`slot="utility"`), and account link (`slot="account"`); shown from the desktop breakpoint up.
3. **Primary row** — logo, desktop nav (derived from slotted `aa-menu`s), mobile menu toggle, and the mobile primary nav (the `aa-menu` elements themselves, shown as disclosures when the menu is open).
4. **Breadcrumb row** (`slot="breadcrumb"`) — takes a real `aa-breadcrumb`; hidden entirely when nothing is slotted.
5. **Mega menu overlay** — internal `aa-header-dropdown`, populated from `slot="dropdown"` panels tagged `data-dropdown="<label>"`.
6. **Action row** (`your-account`/`in-journey` experiences) — logo plus a single `slot="action"` for a button or progress stepper.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `experience` (reflected) | `default` \| `your-account` \| `in-journey` | `default` | Selects between the full navigation header (`default`) and the simplified action-row header used for `your-account`/`in-journey` journeys. |
| `menuOpen` (attribute `menu-open`, reflected) | `boolean` | `false` | Controls whether the mobile primary nav disclosure is open. |
| `businessCustomerPrefix` | string | `'Are you a'` | Leading text of the business-customer prompt shown in the utility row. |
| `businessCustomerLabel` | string | `'business customer'` | The highlighted/linked portion of the business-customer prompt. |
| `businessCustomerHref` (attribute `business-customer-href`) | string | _undefined_ | When set, renders `businessCustomerLabel` as a link; otherwise it renders as plain text. |
| `businessCustomerSuffix` | string | `'?'` | Trailing text of the business-customer prompt. |

## Behaviour
- **Desktop nav derivation**: the flat desktop link row is not authored separately — it reads `label`/`href` off the slotted `aa-menu` elements via `slotchange`, so one set of `aa-menu`s drives both the mobile disclosure list and the desktop flat row.
- **Mega menu trigger**: hovering or focusing a desktop nav link whose label matches a `data-dropdown` panel (case-insensitive) opens that panel in the internal `aa-header-dropdown`; a chevron icon indicates a link has an associated panel, and it rotates 180° while open.
- **Mega menu close delay**: leaving the nav or the panel schedules a 350ms delayed close, cancelled if the pointer/focus re-enters either — long enough for a pointer moving diagonally from the nav link down into the panel not to trip an early close.
- **Mobile menu toggle**: a button (visible below the desktop breakpoint) toggles `menuOpen`, switching its label/icon between "Menu"/`menu` and "Close"/`x`, and dispatches a `menu-change` event with `{ open }` in its detail.
- **Breadcrumb visibility**: the breadcrumb row is hidden entirely (not just visually) whenever nothing is slotted into `slot="breadcrumb"`.
- **Utility/account link authoring**: utility links (`slot="utility"`) and the account link (`slot="account"`) are plain `<a>` elements; the header reads their text content and `href` to render both the desktop utility row and the mobile restatement below the primary nav.
- **Mobile utility restatement**: on mobile, with the menu open, the utility links and account link are restated as a stacked grey section below the primary nav, since the utility row itself only shows from the desktop breakpoint up.
- **Responsive breakpoint**: the switch from mobile (hamburger + stacked `aa-menu` disclosures) to desktop (flat nav row + utility row) happens at a `72rem` container width — deliberately wider than this system's usual `48rem` "tablet" breakpoint, because the full seven-item primary nav doesn't fit next to the logo until that width.
- **Theme**: sets its own scoped theme to `yellow` on connect.
- **Stacking**: the header establishes its own stacking context (`z-index: 10`) so later page content can't paint over it or its mega menu.

## Usage

### When to use
- The primary site-wide header for full navigation journeys (`experience="default"`).
- Simplified in-journey headers where only a single action is needed alongside the logo — a danger-styled "Report a breakdown" button (`your-account`) or a progress stepper (`in-journey`).

### When not to use
- Do not author `aa-header-dropdown` directly — mega-menu content is always supplied through `aa-header`'s own `dropdown` slot.
- Don't duplicate the primary nav links elsewhere for desktop — the desktop row is derived automatically from the slotted `aa-menu` elements.

## Content guidance

### What to write
- Primary nav labels should match the real destination/product name (e.g. "Breakdown", "Insurance").
- Utility links should be short, action- or support-oriented prompts (e.g. "Help and support", "Had an accident?").
- Mega-menu panel headings and link labels should describe the actual products/pages they lead to, not generic groupings.

### How to write
- Use sentence case for nav labels, not title case.
- Use British English spelling throughout.
- Avoid adverbs and vague CTA wording in mega-menu buttons — frontload with the active verb describing the action (e.g. "Get a breakdown quote", not "Find out more").

## Examples
- **Default** — full desktop header: utility row, business-customer prompt, primary nav with mega menus, breadcrumb.
- **Mobile open** (`menuOpen`, mobile preview width) — hamburger menu expanded, showing stacked `aa-menu` disclosures and the restated utility/account links.
- **Your account** (`experience="your-account"`) — simplified header with a single danger-styled "Report a breakdown" button.
- **In journey** (`experience="in-journey"`) — simplified header with an `aa-progress-stepper` in the action slot.
- Seven mega-menu panels (Breakdown, Insurance, Vehicle maintenance, New and used cars, Driving School, Finance, Travel), each a link-columns-plus-quick-quote-card layout, matched to primary nav items by label.

## Things to consider
- Only two mega menus (`Breakdown`, `Insurance`) are Figma-verified (`Drop down`, node `3011:3505`/`3011:3506`/`3011:3547`); the other five reuse the same layout for consistency even though Figma never designed them.
- The mega menu's link/card layout inside `header.stories.css` is built with plain CSS grid/flex rather than `aa-columns`, because `aa-columns`' container-query breakpoints proved unreliable under the repeated `display:none`/`''` toggling as the pointer moves between nav items.
- `businessCustomerHref` being unset renders the highlighted label as plain, non-interactive text rather than a link.
- The account link is deliberately positioned in the utility row (not the primary row) to avoid the primary nav crowding the logo; on mobile it's restated alongside the utility links.

## Accessibility

### Focus order
Utility row links, then business-customer link (if any), then account link, then logo, then desktop nav links (or, on mobile, the menu toggle followed by the stacked `aa-menu` disclosures), then the breadcrumb, then any open mega-menu content.

### Keyboard interactions

| Key | Action |
|---|---|
| Tab | Moves focus to the next interactive element (nav link, utility link, menu toggle). |
| Shift+Tab | Moves focus to the previous interactive element. |
| Enter / Space | Activates the focused link or the mobile menu toggle button. |
| Escape | Closes an open mega menu (handled by `aa-header-dropdown`). |

### ARIA
- The mobile menu toggle button has `aria-controls="aa-header-primary-nav"` and `aria-expanded` reflecting `menuOpen`.
- Desktop nav links with an associated mega menu get `aria-haspopup="true"` and `aria-expanded` (`true`/`false`) reflecting whether that panel is open; links without a mega menu get neither.
- A nav item with a mega menu but no `href` renders as a `<span role="button" tabindex="0">` instead of a link, so it remains focusable and operable via keyboard despite not being a real anchor.
- Utility and legal-style link lists use `role="list"` to preserve list semantics.
- The utility divider and breadcrumb separator are decorative and excluded from the accessibility tree where applicable via the surrounding markup.
- The primary nav (`<nav aria-label="Primary">`) and utility nav (`<nav aria-label="Utility">`) are each labelled landmarks.

### SEO and AI discovery
- Primary, utility and account links render as real `<a href>` elements (when an `href` is supplied), so navigation is crawlable rather than JavaScript-only.
- The desktop nav is derived from, not duplicated from, the mobile `aa-menu` source — so there's exactly one authored copy of each link, avoiding inconsistent or duplicate crawlable links.
- The primary and utility navs are labelled `<nav>` landmarks (`aria-label="Primary"`/`"Utility"`), giving assistive tech and structured-data consumers clear regions to parse.

## Related components
- `aa-header-dropdown` — the internal mega-menu panel this component renders and controls.
- `aa-menu` / `aa-menu-item` — the single authored source for both the mobile disclosure nav and the derived desktop nav row.
- `aa-breadcrumb` — slotted into the breadcrumb row.
- `aa-logo` — the default logo, and can be overridden via `slot="logo"`.
- `aa-quick-quote-card`, `aa-button-group` — typically used inside mega-menu dropdown panel content.
- `aa-progress-stepper` — typically slotted into the `in-journey` experience's action slot.
- `aa-footer` — the corresponding bottom-of-page pattern.
