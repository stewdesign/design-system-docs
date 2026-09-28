---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - SEO and AI discovery: confirm whether structured data is added elsewhere in the page template.
title: Breadcrumb
description: >-
  Breadcrumb shows the user's current position in the site hierarchy as a trail
  of links ending in the current page. It carries its own full-width background
  and sits directly in the page (like Hero), rather than nesting inside Panel.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=20326-4600
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - >-
    Crumb links: one per ancestor page, authored as plain <a href> elements in the
    component's light DOM.
  - 'Separators: a decorative chevron icon between each crumb.'
  - 'Current page: the final, non-link crumb, marked with aria-current="page".'
  - >-
    Overflow trigger (when collapsed): a button showing a "more" icon that reveals
    hidden crumbs when clicked.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Breadcrumb anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default (light theme)
    description: Standard trail with three or four crumbs.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: Default (light theme)'
  - title: Yellow theme
    description: Same trail on the yellow-themed background.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: Yellow theme'
  - title: Collapsed
    description: >-
      A longer trail (five items) collapsed to first + overflow + trailing items
      via max-visible.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: Collapsed'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Authoring via light DOM
    description: >-
      Consumers can author breadcrumbs as plain <a href> elements (ending in a non-link
      element for the current page) instead of only through the items property —
      read once on connect.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: authoring via light dom'
  - title: Collapsing
    description: >-
      When the number of items exceeds max-visible, the trail collapses to the first
      crumb, an overflow trigger, and the trailing items (always including the current
      page) — matching the common "start > … > parent > current" pattern rather
      than hiding from either end.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: collapsing'
  - title: Expanding
    description: >-
      Clicking the overflow trigger reveals all crumbs; this state does not automatically
      re-collapse.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: expanding'
  - title: Hover
    description: >-
      Non-current crumbs underline on hover; the current-page crumb has no hover
      state since it isn't a link.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: hover'
  - title: Theme scoping
    description: >-
      theme applies the same scoped-theme mechanism as Panel/Hero — colour comes
      entirely from existing theme-scoped tokens, so light vs yellow needed no bespoke
      styling of its own.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: theme scoping'
  - title: Responsive behaviour
    description: >-
      The crumb list wraps onto multiple lines if it doesn't fit the available width;
      the container itself is capped and centred to the page's content width, matching
      Hero's "full-bleed host, capped inner content" pattern.
    image: https://placehold.co/1280x720
    imageAlt: 'Breadcrumb: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - At the top of any page nested more than one level deep in the site hierarchy.
  - Helping users understand and navigate back through the page hierarchy.
  - Pages that sit directly in a yellow-themed section of the site (theme="yellow").
  dont:
  - On top-level or landing pages with no meaningful hierarchy above them.
  - >-
    As a replacement for primary navigation — breadcrumbs supplement, not replace,
    the main nav.
  - >-
    Inside Panel — like Hero, it's designed to carry its own full-bleed background
    directly in the page.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Match each crumb's label to the destination page's actual title, for clarity
    and consistency.
  - >-
    Keep labels short — long labels increase the chance of wrapping and crowd the
    trail.
  - Always end with the current page as a plain (non-link) label.
  - Use sentence case for crumb labels.
  - Use British English spelling.
  - Avoid vague labels like "Page" or "Section" — use the real page name.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Breadcrumb example: "Breakdown cover"'
      label: Do
      caption: '"Breakdown cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Breadcrumb example: "Click here"'
      label: Don't
      caption: '"Click here"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Breadcrumb example: "Quote"'
      label: Do
      caption: '"Quote"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Breadcrumb example: "Next page"'
      label: Don't
      caption: '"Next page"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    max-visible counts include the first crumb and the trailing items together —
    setting it very low (e.g. below 3) may not leave room for a meaningful trailing
    set; verify the collapsing behaviour reads sensibly at your chosen value.
  - >-
    Once expanded via the overflow trigger, the trail does not automatically re-collapse
    — this is a one-way reveal per page view.
  - >-
    Reading breadcrumb items automatically from light-DOM children only happens
    if the items property is left empty — setting items programmatically will always
    take priority over slotted children.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: items
      options: '{ href?: string; label: string }[]'
      defaultValue: '[]'
      description: >-
        Breadcrumb entries. If left empty and light-DOM children are present, they're
        read automatically on connect.
    - name: max-visible
      options: number
      defaultValue: '4'
      description: >-
        Maximum crumbs shown before collapsing to first crumb + overflow trigger
        + trailing crumbs.
    - name: theme
      options: light | yellow
      defaultValue: light
      description: Colour theme scope, matching the mechanism used by Panel/Hero.
- type: accessibility
  focusOrder:
  - >-
    Each linked crumb and the overflow trigger (when present) sit in normal tab
    order, in visual left-to-right order. The current-page crumb, being a plain
    <span>, is not focusable.
  keyboard:
  - key: Enter
    action: >-
      Follows the focused crumb link, or activates the overflow trigger to reveal
      hidden crumbs.
  aria:
  - >-
    The container is a <nav> with aria-label="Breadcrumb", giving assistive technology
    a clear landmark for the trail.
  - The current-page crumb carries aria-current="page".
  - >-
    The overflow trigger button has aria-label="Show hidden breadcrumb items" since
    it has no visible text label, only an icon.
  - Separator icons are marked aria-hidden="true" since they're purely decorative.
  seo:
  - >-
    Uses a semantic <nav> landmark with a descriptive aria-label, helping search
    engines and AI agents identify the breadcrumb trail as navigation rather than
    generic content.
  - >-
    Crumbs are real <a href> elements, so they're crawlable links contributing to
    the site's discoverable hierarchy — avoid JavaScript-only navigation for any
    crumb that should be indexed.
  - >-
    Consider adding BreadcrumbList structured data alongside this component for
    enhanced search result display.
- type: related-components
  items:
  - label: Hero
    href: /components/hero
    note: >-
      Shares the same full-bleed-host, capped-content layout pattern and theme-scoping
      mechanism.
  - label: Panel
    href: /components/panel
    note: An alternative container Breadcrumb deliberately does not nest inside.
  - label: Icon
    href: /components/icon
    note: Supplies the separator and overflow-trigger icons.
---
