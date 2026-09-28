---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Content guidance (what to write): content guidance is owned by whatever is slotted into the panel (link columns, Quick quote card, Button group) rather than by this component itself.
#   - Content guidance (how to write): as above — see the content guidance for the slotted components.
#   - Things to consider: confirm whether the open/close transition is adjusted; not addressed in the component source.
#   - SEO and AI discovery: not addressed in the component source — see Header's own SEO/AI discovery notes for how mega-menu links are exposed.
title: Header dropdown
description: >-
  Header dropdown is the internal mega-menu panel Header renders and controls for
  its desktop primary navigation. It is not authored directly by consumers of Header
  — instead, panel content is slotted into Header's own slot="dropdown", and Header
  mounts and toggles this component itself. It provides the scrim, panel surface
  and open/close transition; the panel content (link columns, cards, buttons) is
  authored plainly in the default slot by whatever composes it.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=3011-3505
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Scrim: a fixed, full-viewport dimming/blur layer behind the panel.'
  - >-
    Panel: the light-surface container (role="region") that holds the slotted content.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Header dropdown anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Breakdown mega menu
    description: >-
      Link columns, a secondary "Broken down?" group and a quick-quote card, opened
      by hovering/focusing the "Breakdown" primary link.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: Breakdown mega menu'
  - title: Insurance mega menu
    description: The same layout pattern with insurance-specific links and card.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: Insurance mega menu'
  - title: Example
    description: >-
      (See Header's story file for the full set of seven mega-menu panels, one per
      primary nav item.)
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: Example'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Open/close transition
    description: >-
      The scrim fades in (background and blur) and the panel fades in with a slide/scale-up
      (translateY(-8px) scale(0.98) to resting position), both over 260ms with the
      same easing curve used by Date picker's popover and Progress stepper's dropdown.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: open/close transition'
  - title: Inert while closed
    description: >-
      The panel and scrim are kept in the DOM and toggled with the inert attribute
      (not hidden), so the transition can actually play; inert also removes them
      from the accessibility tree and tab order while closed.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: inert while closed'
  - title: Escape to close
    description: >-
      Pressing <kbd>Escape</kbd> anywhere inside the panel closes it and dispatches
      dropdown-close.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: escape to close'
  - title: Click scrim to close
    description: Clicking the scrim closes the panel and dispatches dropdown-close.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: click scrim to close'
  - title: Always light theme
    description: >-
      The panel always renders in the light palette, never inheriting Header's yellow
      scope — its stylesheet re-reads and rewrites the shared light-scope tokens
      onto :host directly, since the usual setAaScopedTheme escape hatch can't reach
      into another component's shadow root.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: always light theme'
  - title: Stacking with Header
    description: >-
      The scrim is position: fixed; inset: 0 and dims the whole viewport, but Header
      gives its own yellow band a higher z-index, so the band stays visible and
      undimmed above the scrim.
    image: https://placehold.co/1280x720
    imageAlt: 'Header dropdown: stacking with header'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Never authored directly — it is rendered internally by Header whenever a slotted
    Menu's label matches a data-dropdown panel supplied to Header's slot="dropdown".
  dont:
  - >-
    Do not instantiate Header dropdown directly in application code; compose mega-menu
    content through Header's dropdown slot instead.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The component owns its own open/close state via the open property, but in practice
    Header drives it entirely — setting open, listening for dropdown-close, and
    managing hover/focus timing (a 350ms close delay) so the panel doesn't close
    as the pointer travels from the nav link down into it.
  - >-
    Content is authored plainly in the default slot (ordinary <a> links, Quick quote
    card, Button group) rather than via a structured property, so any markup can
    be slotted in.
  - Under prefers-reduced-motion,
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: open
      options: boolean (reflected attribute)
      defaultValue: 'false'
      description: >-
        Shows the panel and scrim, and makes both interactive. When false, both
        are kept in the DOM but marked inert so they can transition rather than
        being removed outright.
- type: accessibility
  focusOrder:
  - >-
    While closed, the panel and scrim are inert, removing all descendants from the
    tab order. While open, focus order follows the slotted content's own document
    order.
  keyboard:
  - key: Escape
    action: Closes the panel (fires dropdown-close).
  aria:
  - The panel has role="region".
  - >-
    Both the scrim and panel are marked inert while closed, removing them from the
    accessibility tree entirely rather than relying on aria-hidden alone.
- type: related-components
  items:
  - label: Header
    href: /components/header
    note: Owns and controls this component; the only place it should be used.
  - label: Menu
    href: /components/menu
    note: >-
      The primary nav item whose label is matched against a slotted panel's data-dropdown
      attribute.
  - label: Quick quote card
    href: /components/quick-quote-card
    note: Typically slotted inside the panel content.
  - label: Button group
    href: /components/button-group
    note: Typically slotted inside the panel content.
---
