---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Content guidance (what to write): Columns is a structural layout primitive with no text content of its own — content guidance belongs to whatever is slotted inside it.
#   - Content guidance (how to write): not applicable — see the content guidance for the individual components placed inside Columns.
#   - Keyboard interactions: not applicable — Columns is a non-interactive layout container.
#   - SEO and AI discovery: confirm whether a role="presentation" or similar should be considered for the wrapper <div>, or whether the current unmarked <div> is intentional.
title: Columns
description: >-
  Columns is the responsive grid layout primitive for arranging content into columns.
  The parent declares the layout per breakpoint and children carry no layout properties
  of their own, so any content can be dropped in without needing to know about the
  grid around it.
storybookUrl: ''
figmaUrl: ''
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
    Host: a container-query context (container: Columns / inline-size) that breakpoint
    rules resolve against.
  - >-
    Grid wrapper (.columns, part="columns"): the actual CSS grid, with column and
    row gaps from design tokens.
  - 'Default slot: the children distributed across the grid''s columns.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Columns anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Responsive
    description: mobile="1" tablet="2" desktop="4", items reflow across all three
      breakpoints.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: Responsive'
  - title: Single column
    description: mobile="1", no tablet/desktop override, holding one column at every
      size.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: Single column'
  - title: Three up
    description: mobile="1" tablet="3".
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: Three up'
  - title: Ratio
    description: mobile="1" tablet="1:3", a proportional two-column split.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: Ratio'
  - title: Auto
    description: auto fits as many equal columns as the container allows.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: Auto'
  - title: Nested
    description: >-
      An Columns inside one column of a parent Columns, each resolving against its
      own container.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: Nested'
  - title: Layout matrix
    description: Every supported layout value shown side by side.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: Layout matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Responsive resolution
    description: >-
      Breakpoints are resolved with container queries against the nearest Columns
      host, not the viewport — a Columns nested inside a narrow or inset panel responds
      to the space it actually has, not the window size.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: responsive resolution'
  - title: Inheritance
    description: >-
      Values inherit upward — setting only mobile and tablet means the tablet layout
      also applies at desktop, unless desktop is explicitly set.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: inheritance'
  - title: Ratio distribution
    description: >-
      Two-part values (e.g. 1:2, 3:1) distribute proportionally; with more children
      than ratio parts, odd children take the first width and even children the
      second.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: ratio distribution'
  - title: Nesting
    description: >-
      An Columns nested inside a child resolves against its own host automatically,
      with no extra configuration — each level names its own container.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: nesting'
  - title: auto
    description: >-
      Fits as many equal columns as will fit (repeat(auto-fit, minmax(min(100%,
      var(--aa-columns-min, 16rem)), 1fr))), which covers item counts a fixed grid
      can't divide evenly. It's declared last in the stylesheet so, at equal specificity
      to the breakpoint rules, source order lets it override them.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: auto'
  - title: Child wrapping
    description: >-
      A slotted <div> automatically becomes a column flex layout with the design
      system's row-gap, so a plain wrapper stacking a heading, paragraph and list
      reads as intentionally spaced rather than falling back to browser default
      margins.
    image: https://placehold.co/1280x720
    imageAlt: 'Columns: child wrapping'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Columns example: Any responsive multi-column layout — page sections, card
        grids, form layouts, sidebar + content splits.
      label: Do
      caption: >-
        Any responsive multi-column layout — page sections, card grids, form layouts,
        sidebar + content splits.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Columns example: A single, non-responsive stack of items with no column
        requirement — a plain flex/block wrapper is simpler.
      label: Don't
      caption: >-
        A single, non-responsive stack of items with no column requirement — a plain
        flex/block wrapper is simpler.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Columns example: Layouts that need to respond to their container's width
        rather than the viewport (e.g. inside a panel or narrow slot).
      label: Do
      caption: >-
        Layouts that need to respond to their container's width rather than the
        viewport (e.g. inside a panel or narrow slot).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Columns example: Fine-grained placement of specific items to specific grid
        cells — Columns is deliberately parent-declares-layout-only, with no per-child
        span or position properties.
      label: Don't
      caption: >-
        Fine-grained placement of specific items to specific grid cells — Columns
        is deliberately parent-declares-layout-only, with no per-child span or position
        properties.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Columns example: Proportional splits (e.g. a 1:2 sidebar/content layout)
        that should hold their ratio across breakpoints.
      label: Do
      caption: >-
        Proportional splits (e.g. a 1:2 sidebar/content layout) that should hold
        their ratio across breakpoints.
    - image: https://placehold.co/1280x720
      imageAlt: 'Columns example: Data tables — use a dedicated table component
        instead.'
      label: Don't
      caption: Data tables — use a dedicated table component instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Columns example: Item counts that don't divide evenly into a fixed grid
        — use auto.
      label: Do
      caption: Item counts that don't divide evenly into a fixed grid — use auto.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Layout values are strings, not numbers — passing an out-of-range or malformed
    value silently falls back to the default single-column grid rather than erroring.
  - >-
    auto and the breakpoint properties (mobile/tablet/desktop) are mutually exclusive
    in effect — auto always wins due to CSS source order, so don't rely on removing
    it dynamically without also clearing the breakpoint attributes if you need them
    to take over.
  - >-
    Nesting relies on named containers — deeply nested Columns still resolve independently,
    but be mindful of column widths compounding at multiple levels on small screens.
  - >-
    ::slotted(*) sets min-inline-size: 0 on every child, which is necessary for
    grid children to shrink below their content size — be aware of this if a child
    relies on its own intrinsic minimum width.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: mobile
      options: 1 | 2 | 3 | 4 | 5 | 1:2 | 2:1 | 1:3 | 3:1 | 2:3 | 3:2 | 1:4 | 4:1
      defaultValue: None (falls back to a single 1fr column)
      description: Column layout at the base (mobile) breakpoint.
    - name: tablet
      options: same options as mobile
      description: >-
        Column layout from 48rem (container width) up. Values inherit upward from
        mobile unless overridden.
    - name: desktop
      options: same options as mobile
      description: >-
        Column layout from 80rem (container width) up. Values inherit upward from
        tablet/mobile unless overridden.
    - name: auto
      options: boolean
      defaultValue: 'false'
      description: >-
        Ignores the breakpoint properties entirely and fits as many equal columns
        as will fit the available width. Overrides mobile/tablet/desktop when set.
- type: accessibility
  focusOrder:
  - >-
    Columns has no interactive elements of its own; it does not alter the natural
    DOM/tab order of its slotted children.
  aria:
  - >-
    No roles, states or properties are applied — Columns renders a plain <div> wrapper
    with no semantic meaning beyond layout.
  seo:
  - >-
    Purely visual/layout grouping — it does not introduce a landmark or heading
    structure, so document outline and semantics should come entirely from the content
    slotted inside it.
- type: related-components
  items:
  - label: List item group
    href: /components/list-item-group
    note: >-
      A fixed-purpose stacking container for list items, unlike the general-purpose
      grid Columns provides.
  - label: Card group
    href: /components/card-group
    note: >-
      Another thin, purpose-specific grouping wrapper, mentioned alongside List
      item group as a comparable pattern.
---
