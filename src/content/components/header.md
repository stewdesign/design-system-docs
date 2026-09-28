---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Header
description: >-
  Header is the site-wide header pattern, built around slots rather than link-array
  properties: the logo and breadcrumb are real Logo/Breadcrumb elements, utility/account
  links are plain <a>s the consumer authors directly, and the primary nav is authored
  once as real Menu elements. That single set of Menu elements is what mobile shows
  directly (a stacked disclosure list) and what desktop's flat, chevron-less link
  row is derived from — one authored source, two Figma-verified presentations. It
  also owns and renders its own internal desktop mega menu (Header dropdown).
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=2287-22651
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Logo (slot="logo"): defaults to Logo if nothing is slotted.'
  - >-
    Utility row: business customer prompt, utility links (slot="utility"), and account
    link (slot="account"); shown from the desktop breakpoint up.
  - >-
    Primary row: logo, desktop nav (derived from slotted aa-menus), mobile menu
    toggle, and the mobile primary nav (the Menu elements themselves, shown as disclosures
    when the menu is open).
  - >-
    Breadcrumb row (slot="breadcrumb"): takes a real Breadcrumb; hidden entirely
    when nothing is slotted.
  - >-
    Mega menu overlay: internal Header dropdown, populated from slot="dropdown"
    panels tagged data-dropdown="<label>".
  - >-
    Action row (your-account/in-journey experiences): logo plus a single slot="action"
    for a button or progress stepper.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Header anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: >-
      Full desktop header: utility row, business-customer prompt, primary nav with
      mega menus, breadcrumb.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: Default'
  - title: Mobile open (menuOpen, mobile preview width)
    description: >-
      Hamburger menu expanded, showing stacked Menu disclosures and the restated
      utility/account links.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: Mobile open (menuOpen, mobile preview width)'
  - title: Your account (experience="your-account")
    description: Simplified header with a single danger-styled "Report a breakdown"
      button.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: Your account (experience="your-account")'
  - title: In journey (experience="in-journey")
    description: Simplified header with an Progress stepper in the action slot.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: In journey (experience="in-journey")'
  - title: Example
    description: >-
      Seven mega-menu panels (Breakdown, Insurance, Vehicle maintenance, New and
      used cars, Driving School, Finance, Travel), each a link-columns-plus-quick-quote-card
      layout, matched to primary nav items by label.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: Example'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Desktop nav derivation
    description: >-
      The flat desktop link row is not authored separately — it reads label/href
      off the slotted Menu elements via slotchange, so one set of aa-menus drives
      both the mobile disclosure list and the desktop flat row.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: desktop nav derivation'
  - title: Mega menu trigger
    description: >-
      Hovering or focusing a desktop nav link whose label matches a data-dropdown
      panel (case-insensitive) opens that panel in the internal Header dropdown;
      a chevron icon indicates a link has an associated panel, and it rotates 180°
      while open.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: mega menu trigger'
  - title: Mega menu close delay
    description: >-
      Leaving the nav or the panel schedules a 350ms delayed close, cancelled if
      the pointer/focus re-enters either — long enough for a pointer moving diagonally
      from the nav link down into the panel not to trip an early close.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: mega menu close delay'
  - title: Mobile menu toggle
    description: >-
      A button (visible below the desktop breakpoint) toggles menuOpen, switching
      its label/icon between "Menu"/menu and "Close"/x, and dispatches a menu-change
      event with { open } in its detail.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: mobile menu toggle'
  - title: Breadcrumb visibility
    description: >-
      The breadcrumb row is hidden entirely (not just visually) whenever nothing
      is slotted into slot="breadcrumb".
    image: https://placehold.co/1280x720
    imageAlt: 'Header: breadcrumb visibility'
  - title: Utility/account link authoring
    description: >-
      Utility links (slot="utility") and the account link (slot="account") are plain
      <a> elements; the header reads their text content and href to render both
      the desktop utility row and the mobile restatement below the primary nav.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: utility/account link authoring'
  - title: Mobile utility restatement
    description: >-
      On mobile, with the menu open, the utility links and account link are restated
      as a stacked grey section below the primary nav, since the utility row itself
      only shows from the desktop breakpoint up.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: mobile utility restatement'
  - title: Responsive breakpoint
    description: >-
      The switch from mobile (hamburger + stacked Menu disclosures) to desktop (flat
      nav row + utility row) happens at a 72rem container width — deliberately wider
      than this system's usual 48rem "tablet" breakpoint, because the full seven-item
      primary nav doesn't fit next to the logo until that width.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: responsive breakpoint'
  - title: Theme
    description: Sets its own scoped theme to yellow on connect.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: theme'
  - title: Stacking
    description: >-
      The header establishes its own stacking context (z-index: 10) so later page
      content can't paint over it or its mega menu.
    image: https://placehold.co/1280x720
    imageAlt: 'Header: stacking'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    The primary site-wide header for full navigation journeys (experience="default").
  - >-
    Simplified in-journey headers where only a single action is needed alongside
    the logo — a danger-styled "Report a breakdown" button (your-account) or a progress
    stepper (in-journey).
  dont:
  - >-
    Do not author Header dropdown directly — mega-menu content is always supplied
    through Header's own dropdown slot.
  - >-
    Don't duplicate the primary nav links elsewhere for desktop — the desktop row
    is derived automatically from the slotted Menu elements.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Primary nav labels should match the real destination/product name (e.g. "Breakdown",
    "Insurance").
  - >-
    Utility links should be short, action- or support-oriented prompts (e.g. "Help
    and support", "Had an accident?").
  - >-
    Mega-menu panel headings and link labels should describe the actual products/pages
    they lead to, not generic groupings.
  - Use sentence case for nav labels, not title case.
  - Use British English spelling throughout.
  - >-
    Avoid adverbs and vague CTA wording in mega-menu buttons — frontload with the
    active verb describing the action (e.g. "Get a breakdown quote", not "Find out
    more").
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Only two mega menus (Breakdown, Insurance) are Figma-verified (Drop down, node
    3011:3505/3011:3506/3011:3547); the other five reuse the same layout for consistency
    even though Figma never designed them.
  - >-
    The mega menu's link/card layout inside header.stories.css is built with plain
    CSS grid/flex rather than Columns, because Columns' container-query breakpoints
    proved unreliable under the repeated display:none/'' toggling as the pointer
    moves between nav items.
  - >-
    businessCustomerHref being unset renders the highlighted label as plain, non-interactive
    text rather than a link.
  - >-
    The account link is deliberately positioned in the utility row (not the primary
    row) to avoid the primary nav crowding the logo; on mobile it's restated alongside
    the utility links.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: experience (reflected)
      options: default | your-account | in-journey
      defaultValue: default
      description: >-
        Selects between the full navigation header (default) and the simplified
        action-row header used for your-account/in-journey journeys.
    - name: menuOpen (attribute menu-open, reflected)
      options: boolean
      defaultValue: 'false'
      description: Controls whether the mobile primary nav disclosure is open.
    - name: businessCustomerPrefix
      options: string
      defaultValue: '''Are you a'''
      description: Leading text of the business-customer prompt shown in the utility
        row.
    - name: businessCustomerLabel
      options: string
      defaultValue: '''business customer'''
      description: The highlighted/linked portion of the business-customer prompt.
    - name: businessCustomerHref (attribute business-customer-href)
      options: string
      description: >-
        When set, renders businessCustomerLabel as a link; otherwise it renders
        as plain text.
    - name: businessCustomerSuffix
      options: string
      defaultValue: '''?'''
      description: Trailing text of the business-customer prompt.
- type: accessibility
  focusOrder:
  - >-
    Utility row links, then business-customer link (if any), then account link,
    then logo, then desktop nav links (or, on mobile, the menu toggle followed by
    the stacked Menu disclosures), then the breadcrumb, then any open mega-menu
    content.
  keyboard:
  - key: Tab
    action: >-
      Moves focus to the next interactive element (nav link, utility link, menu
      toggle).
  - key: Shift+Tab
    action: Moves focus to the previous interactive element.
  - key: Enter / Space
    action: Activates the focused link or the mobile menu toggle button.
  - key: Escape
    action: Closes an open mega menu (handled by Header dropdown).
  aria:
  - >-
    The mobile menu toggle button has aria-controls="aa-header-primary-nav" and
    aria-expanded reflecting menuOpen.
  - >-
    Desktop nav links with an associated mega menu get aria-haspopup="true" and
    aria-expanded (true/false) reflecting whether that panel is open; links without
    a mega menu get neither.
  - >-
    A nav item with a mega menu but no href renders as a <span role="button" tabindex="0">
    instead of a link, so it remains focusable and operable via keyboard despite
    not being a real anchor.
  - Utility and legal-style link lists use role="list" to preserve list semantics.
  - >-
    The utility divider and breadcrumb separator are decorative and excluded from
    the accessibility tree where applicable via the surrounding markup.
  - >-
    The primary nav (<nav aria-label="Primary">) and utility nav (<nav aria-label="Utility">)
    are each labelled landmarks.
  seo:
  - >-
    Primary, utility and account links render as real <a href> elements (when an
    href is supplied), so navigation is crawlable rather than JavaScript-only.
  - >-
    The desktop nav is derived from, not duplicated from, the mobile Menu source
    — so there's exactly one authored copy of each link, avoiding inconsistent or
    duplicate crawlable links.
  - >-
    The primary and utility navs are labelled <nav> landmarks (aria-label="Primary"/"Utility"),
    giving assistive tech and structured-data consumers clear regions to parse.
- type: related-components
  items:
  - label: Header dropdown
    href: /components/header-dropdown
    note: The internal mega-menu panel this component renders and controls.
  - label: Menu
    href: /components/menu
    note: >-
      The single authored source for both the mobile disclosure nav and the derived
      desktop nav row.
  - label: Menu item
    href: /components/menu-item
    note: >-
      The single authored source for both the mobile disclosure nav and the derived
      desktop nav row.
  - label: Breadcrumb
    href: /components/breadcrumb
    note: Slotted into the breadcrumb row.
  - label: Logo
    href: /components/logo
    note: The default logo, and can be overridden via slot="logo".
  - label: Quick quote card
    href: /components/quick-quote-card
    note: Typically used inside mega-menu dropdown panel content.
  - label: Button group
    href: /components/button-group
    note: Typically used inside mega-menu dropdown panel content.
  - label: Progress stepper
    href: /components/progress-stepper
    note: Typically slotted into the in-journey experience's action slot.
  - label: Footer
    href: /components/footer
    note: The corresponding bottom-of-page pattern.
---
