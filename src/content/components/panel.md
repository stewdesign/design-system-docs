---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: name the appropriate component once one exists.
#   - ARIA: confirm whether a section-level heading/landmark relationship (e.g. aria-labelledby pointing at a slotted heading) is expected for page-level <section> semantics — not present in this file.
title: Panel
description: >-
  Panel is a major content section within a page, owning the section's background
  colour, block spacing, and content width. Figma: Panel (node 18556:22474). It
  sits in the composition Page → Panel → Columns → content, providing the themed
  surface that Columns and slotted content render inside.
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
    Frame (part="frame"): the outer band; carries the background colour and horizontal/vertical
    section padding.
  - >-
    Surface (part="surface"): centres and caps the content to the shared layout
    max inline size within the frame.
  - >-
    Content (part="content"): a flex column with the shared vertical grid row-gap
    applied between top-level slotted children, so slotted elements don't need their
    own margins.
  - >-
    Inset surface (when inset is set): an optional rounded, padded, contained surface
    in inset-colour, nested inside the outer frame.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Panel anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: White panel
    description: Default background, standard section.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: White panel'
  - title: Grey panel
    description: background="grey", for visual separation between white sections.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Grey panel'
  - title: Midnight panel
    description: background="midnight", dark themed section.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Midnight panel'
  - title: Yellow panel
    description: background="yellow", brand-accent themed section.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Yellow panel'
  - title: Tight spacing
    description: spacing="tight", reduced vertical padding between panels.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Tight spacing'
  - title: Inset (white with yellow inset)
    description: inset, inset-colour="yellow", a contained accent block within a
      white section.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Inset (white with yellow inset)'
  - title: Inset midnight (grey with midnight inset)
    description: background="grey", inset, inset-colour="midnight".
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Inset midnight (grey with midnight inset)'
  - title: Narrow
    description: narrow, content capped to a centred 48rem measure.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Narrow'
  - title: Surface matrix
    description: >-
      All four background values and all four inset-colour values shown together
      for comparison.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: Surface matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Theming
    description: >-
      The component sets a scoped colour theme (light, grey, dark, or yellow) based
      on whichever surface actually holds the content — background normally, or
      inset-colour when inset is true — so text and button contrast adapt automatically
      without the consumer managing theme separately. This re-syncs whenever background,
      inset, or insetColour changes.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: theming'
  - title: Spacing
    description: >-
      spacing="default" applies the standard between-panels vertical padding token;
      spacing="tight" applies a reduced token, both driven purely by CSS attribute
      selectors — no animation.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: spacing'
  - title: Inset surface
    description: >-
      When inset is set, the inner surface gets padding, a large corner radius,
      overflow: hidden, and the --surface-default-primary background, visually separating
      it from the outer frame band.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: inset surface'
  - title: Narrow
    description: >-
      When narrow is set, the content column is capped to 48rem and centred, independent
      of the outer frame's own max width.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: narrow'
  - title: Slotted spacing
    description: >-
      Top-level slotted children get their own block margins zeroed and instead
      rely on the panel's row-gap, so spacing between sections stays consistent
      regardless of what's slotted in.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: slotted spacing'
  - title: Slotted headings
    description: >-
      A slotted Heading has its max-width overridden to 100% (rather than its own
      default reading-length cap), so a section heading wraps at the panel's own
      measure, not a narrower one tuned for body copy.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: slotted headings'
  - title: Entrance animation
    description: >-
      The panel observes its own entrance into the viewport (observeEntrance/unobserveEntrance)
      to drive the shared motion-stagger styles on its content, and cleans this
      up on disconnect.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: entrance animation'
  - title: Responsive behaviour
    description: >-
      Inline padding, max inline size, and (for narrow) the capped content width
      all come from the shared responsive layout host styles, so the panel adapts
      across breakpoints via shared layout tokens rather than component-specific
      media queries.
    image: https://placehold.co/1280x720
    imageAlt: 'Panel: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Panel example: Any major page section that needs its own background colour,
        section-level spacing, and a consistent content width — the standard container
        for Columns and section content.
      label: Do
      caption: >-
        Any major page section that needs its own background colour, section-level
        spacing, and a consistent content width — the standard container for Columns
        and section content.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Panel example: For layout/column structure within a section — that's Columns'
        job; Panel only owns the outer band, width and spacing.
      label: Don't
      caption: >-
        For layout/column structure within a section — that's Columns' job; Panel
        only owns the outer band, width and spacing.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Panel example: When a section needs visual separation via colour (e.g. alternating
        white/grey panels down a page) or an accent inset block (e.g. a callout
        in yellow) within an otherwise neutral section.
      label: Do
      caption: >-
        When a section needs visual separation via colour (e.g. alternating white/grey
        panels down a page) or an accent inset block (e.g. a callout in yellow)
        within an otherwise neutral section.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Panel example: For a small, local grouping of content that doesn't represent
        a full page section — use a lighter-weight container instead.
      label: Don't
      caption: >-
        For a small, local grouping of content that doesn't represent a full page
        section — use a lighter-weight container instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Panel example: When the content should be constrained to a narrow, centred
        reading measure (narrow) rather than the panel's full width.
      label: Do
      caption: >-
        When the content should be constrained to a narrow, centred reading measure
        (narrow) rather than the panel's full width.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Panel example: When content needs its own independent spacing rhythm rather
        than sharing the row-gap contract described above — check whether the row-gap/margin-zeroing
        behaviour fits before slotting complex nested layouts directly.
      label: Don't
      caption: >-
        When content needs its own independent spacing rhythm rather than sharing
        the row-gap contract described above — check whether the row-gap/margin-zeroing
        behaviour fits before slotting complex nested layouts directly.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Content is fully open — headings, body copy, buttons, columns — since Panel
    only supplies the surface, not content structure; author copy per the guidance
    of whatever's slotted in (e.g. Heading, Button).
  - >-
    When using inset, keep inset content self-contained (e.g. a callout or highlighted
    block) since it visually reads as a distinct surface from the outer panel.
  - >-
    Follow the underlying content components' own copy guidance (e.g. Heading, Button)
    — Panel itself carries no text.
  - >-
    When choosing background/inset-colour, remember the choice drives the whole
    section's colour theme, including text and button contrast — pick colours for
    their communicative role (e.g. yellow for emphasis/brand moments, midnight for
    a dramatic dark section), not just decoration.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Choosing background/inset-colour changes the active colour theme for everything
    slotted inside — verify text and interactive components (e.g. Button) still
    read correctly against your chosen combination via the surface matrix example.
  - >-
    The panel's row-gap zeroes slotted elements' own block margins — don't rely
    on a slotted element's default margin for spacing; the panel controls that spacing.
  - >-
    narrow and the outer frame's own max inline size both cap content width — narrow
    further restricts within that, it doesn't override it, so combining them is
    expected to still respect the outer max width.
  - >-
    inset and inset-colour only take effect together — setting inset-colour alone
    without inset has no visible effect, and the theme scope will still follow background.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: background
      options: white | grey | midnight | yellow
      defaultValue: white
      description: >-
        Sets the outer frame's background colour and drives the theme scope (unless
        inset is set).
    - name: spacing
      options: default | tight
      defaultValue: default
      description: >-
        Controls block (vertical) padding between panels — tight uses a reduced
        spacing token.
    - name: inset
      options: boolean
      defaultValue: 'false'
      description: >-
        Adds a rounded, padded, contained surface inside the outer frame, coloured
        by inset-colour.
    - name: inset-colour (insetColour)
      options: white | grey | midnight | yellow
      defaultValue: yellow
      description: >-
        Colour of the inset surface; only visible/relevant when inset is true, and
        drives the theme scope while inset is set.
    - name: narrow
      options: boolean
      defaultValue: 'false'
      description: >-
        Caps content to a centred 48rem measure — equivalent to the 1-col-narrow
        Figma layout.
- type: accessibility
  focusOrder:
  - >-
    Panel renders a <section> wrapper with no focusable elements of its own; focus
    order is entirely determined by whatever is slotted inside (e.g. Columns, Button).
  - >-
    Not applicable — the component itself has no interactive elements; keyboard
    behaviour is inherited from slotted content.
  aria:
  - >-
    No ARIA roles or attributes are applied by Panel itself; it uses a plain <section>
    for the frame.
  seo:
  - >-
    Renders a semantic <section> rather than a generic <div>, giving page structure
    tools a real sectioning element to key off.
  - >-
    Because Panel sets no accessible name or heading relationship itself, a slotted
    heading (e.g. Heading) inside each panel is what actually gives search engines
    and AI agents a way to identify each section's topic — always include one per
    panel for discoverability.
- type: related-components
  items:
  - label: Columns
    href: /components/columns
    note: Provides column layout structure inside a panel's content.
  - label: Heading
    href: /components/heading
    note: >-
      Commonly slotted as a panel's section heading; its max-width is specially
      overridden inside a panel.
  - label: Button
    href: /components/button
    note: >-
      Commonly slotted as panel content, with contrast automatically handled by
      the panel's theme scope.
---
