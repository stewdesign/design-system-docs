---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: no keyboard interactions specific to the container — interactive behaviour comes entirely from nested content.
title: Container
description: >-
  Container is a deliberately minimal content surface — padding, corner radius,
  and an optional background colour, nothing else. It's the sanctioned building
  block for wrapping content in a card-like surface without inventing bespoke layout
  props.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17127-10874
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Surface: a padded, rounded wrapper around the slotted content.'
  - >-
    Content slot (default): any content, including nested layout components like
    Columns.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Container anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default (filled)
    description: Padded surface with a visible background.
    image: https://placehold.co/1280x720
    imageAlt: 'Container: Default (filled)'
  - title: Flat
    description: Padding and radius only, no visible surface colour.
    image: https://placehold.co/1280x720
    imageAlt: 'Container: Flat'
  - title: Split
    description: An Columns nested inside for a two-column layout (mobile="1" tablet="2").
    image: https://placehold.co/1280x720
    imageAlt: 'Container: Split'
  - title: Ratio
    description: >-
      An Columns nested inside with an uneven ratio split (e.g. tablet="2:1"), such
      as a testimonial with an avatar attribution.
    image: https://placehold.co/1280x720
    imageAlt: 'Container: Ratio'
  - title: Plan card
    description: >-
      A structured "choose your cover" card built entirely from Container plus real
      nested components (Radio, a feature list, a link).
    image: https://placehold.co/1280x720
    imageAlt: 'Container: Plan card'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Deliberately empty shell
    description: >-
      No direction/justify/align props, no "left"/"right" slots, no ratio prop —
      this is intentional, to avoid inviting bespoke, hard-to-maintain one-off layouts.
      For positioning, splitting content, or sizing by ratio, nest an Columns inside
      it instead.
    image: https://placehold.co/1280x720
    imageAlt: 'Container: deliberately empty shell'
  - title: Table scroll fade integration
    description: >-
      When background="filled", the container sets a custom property (--aa-table-scroll-fade-color)
      matching its own surface colour, so a nested scrollable table's edge-fade
      blends correctly against it instead of assuming the page's default background.
    image: https://placehold.co/1280x720
    imageAlt: 'Container: table scroll fade integration'
  - title: Responsive behaviour
    description: >-
      None of its own; sizes to 100% of its container's inline size and stacks its
      content vertically with a consistent gap by default.
    image: https://placehold.co/1280x720
    imageAlt: 'Container: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Container example: Wrapping arbitrary content (text, a single component,
        or a nested layout) in a padded, optionally coloured card surface.
      label: Do
      caption: >-
        Wrapping arbitrary content (text, a single component, or a nested layout)
        in a padded, optionally coloured card surface.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Container example: When a fuller card anatomy (image, icon, tag, action
        slot) is needed — use Card instead.
      label: Don't
      caption: >-
        When a fuller card anatomy (image, icon, tag, action slot) is needed — use
        Card instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Container example: As the surface for a composed layout, with Columns nested
        inside for positioning, splitting, or ratio-based sizing.
      label: Do
      caption: >-
        As the surface for a composed layout, with Columns nested inside for positioning,
        splitting, or ratio-based sizing.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Container example: For custom positioning or splitting logic — don't add
        bespoke CSS; nest Columns inside the container instead, which is the sanctioned
        pattern.
      label: Don't
      caption: >-
        For custom positioning or splitting logic — don't add bespoke CSS; nest
        Columns inside the container instead, which is the sanctioned pattern.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Container example: Recreating structured card-like patterns (e.g. a plan/pricing
        card) using only real components — a heading, a radio, a list, a link —
        without needing a purpose-built card variant.
      label: Do
      caption: >-
        Recreating structured card-like patterns (e.g. a plan/pricing card) using
        only real components — a heading, a radio, a list, a link — without needing
        a purpose-built card variant.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Container example: As a general-purpose layout primitive on its own — it
        has no layout props; pair it with Columns for anything beyond a single stacked
        column of content.
      label: Don't
      caption: >-
        As a general-purpose layout primitive on its own — it has no layout props;
        pair it with Columns for anything beyond a single stacked column of content.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Any content type is valid inside — text, components, or a nested layout — since
    the container makes no assumptions about its content's structure.
  - >-
    When recreating a structured pattern (e.g. a plan card), use real semantic elements
    for each part (headings, lists, links) rather than generic <div>s.
  - >-
    Follow the content guidance of whatever component is nested inside (e.g. Heading,
    Button) — the container itself has no text of its own to author.
  - Use British English spelling and sentence case in any nested copy.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Resist the temptation to add custom CSS for positioning inside a container —
    nesting Columns is the sanctioned approach and keeps layouts consistent and
    maintainable across the system.
  - >-
    background="filled" sets a fade-colour custom property intended specifically
    for a nested scrollable table — if no such table is nested, this property has
    no visible effect.
  - >-
    The container's own gap between direct children is fixed (--vertical-type-between-text)
    — for a different gap or a non-stacked arrangement, nest Columns rather than
    trying to override the container's own layout.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: background
      options: filled | flat
      defaultValue: filled
      description: >-
        Whether the surface has a visible background colour, or is transparent (padding
        and radius only).
- type: accessibility
  focusOrder:
  - >-
    The container itself is not focusable and introduces no focus stops. Focus order
    follows the natural document order of any interactive content slotted inside
    it.
  aria:
  - >-
    No ARIA roles or attributes are applied by the container itself — it's a purely
    presentational wrapper.
  - >-
    Semantics for any nested content (headings, lists, form controls) come from
    those components themselves.
  seo:
  - >-
    Renders as a plain <div> wrapper with no semantic role — all discoverability
    depends on the real semantic elements nested inside it (headings, lists, links).
  - >-
    Because the container makes no structural assumptions, always ensure nested
    content uses correct heading levels and semantic HTML so the page's outline
    stays meaningful independent of the container's own styling.
- type: related-components
  items:
  - label: Card
    href: /components/card
    note: >-
      A fuller-featured surface with image/icon/tag/action anatomy, for when more
      structure is needed than a plain container.
  - label: Columns
    href: /components/columns
    note: >-
      The layout primitive intended to be nested inside a container for splitting,
      positioning, or ratio-based sizing.
  - label: Heading
    href: /components/heading
    note: Commonly used for a container's own content heading.
---
