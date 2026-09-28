---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma (node 18654:27278).
#   - Content guidance (what to write): List item group has no text content of its own — content guidance belongs to the label/description of each List item inside it.
#   - Content guidance (how to write): not applicable — see the content guidance for List item.
#   - Properties: List item group exposes no configurable properties — it is deliberately as thin as possible. The surface and spacing are all it owns; each List item inside still decides its own divider, badge and href.
#   - Keyboard interactions: not applicable — List item group is a non-interactive grouping container. See List item for its own keyboard behaviour.
#   - ARIA: confirm whether a role="list" (with each List item as role="listitem") is intended, or whether the current unmarked grouping is deliberate.
#   - SEO and AI discovery: confirm whether a group should be preceded by a visually-associated heading for AI/assistive-tech context, and whether that's a documented pattern elsewhere.
title: List item group
description: >-
  List item group is a thin, purpose-specific wrapper that stacks List item elements
  on a plain, lightly-rounded surface with consistent spacing between them. It's
  typically used to present a related set of navigable or settings-style rows, such
  as a menu of cover options or an account settings list.
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
    Group surface (.group, part="group"): a flex column container with a rounded
    corner and a default-primary background.
  - >-
    Default slot: the List item elements nested inside, each separated by a small
    gap.
  image: https://placehold.co/1280x720
  imageAlt: Labelled List item group anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Group
    description: >-
      Three List item rows (with leading icons, descriptions, dividers and a trailing
      icon button) stacked inside a single List item group surface.
    image: https://placehold.co/1280x720
    imageAlt: 'List item group: Group'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Layout
    description: >-
      Children are stacked in a flex column, stretched to the group's full width,
      with a small (--padding-xsml) gap between each item.
    image: https://placehold.co/1280x720
    imageAlt: 'List item group: layout'
  - title: Surface
    description: >-
      Renders a single rounded, default-primary-coloured background behind all items,
      rather than each item styling its own surface.
    image: https://placehold.co/1280x720
    imageAlt: 'List item group: surface'
  - title: No state of its own
    description: >-
      List item group has no interaction states, hover/focus behaviour, or variants
      — all interactive states (hover, focus, link behaviour) live on the individual
      List item children.
    image: https://placehold.co/1280x720
    imageAlt: 'List item group: no state of its own'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Grouping a set of related List item rows on a single visual surface, e.g. a
    menu of cover options or a settings screen.
  - >-
    Whenever list items should read as one coherent block rather than a loose, ungrouped
    stack.
  dont:
  - >-
    A single, standalone list item with no group context — render the List item
    directly, without wrapping it.
  - A general-purpose responsive grid or column layout — use Columns instead.
  - >-
    A grouped set of cards or chips — use Card group/Chip group instead, which follow
    the same thin-wrapper pattern for their respective components.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Each item inside the group still owns its own divider, badge and href — the
    group itself adds no visual separators beyond the gap between items.
  - >-
    Keep the surface's background in mind when nesting a group inside another coloured
    surface — it's a plain, default-primary background, not transparent.
- type: accessibility
  focusOrder:
  - >-
    List item group introduces no focus stop of its own; focus order follows the
    natural DOM order of the slotted List item elements (and any interactive controls
    they contain).
  aria:
  - >-
    No roles, states or properties are applied by List item group itself — it renders
    a plain <div> wrapper with no semantic meaning beyond grouping and layout.
  seo:
  - >-
    Purely visual grouping — it introduces no landmark or heading structure of its
    own, so any semantic meaning of the group (e.g. "cover options") should be conveyed
    by a preceding heading outside the component, not by the wrapper itself.
- type: related-components
  items:
  - label: List item
    href: /components/list-item
    note: >-
      The individual row rendered inside the group; owns its own label, description,
      divider, badge and href.
  - label: List item leading
    href: /components/list-item-leading
    note: The leading-element primitive slotted into an List item.
  - label: List item trailing
    href: /components/list-item-trailing
    note: The trailing-action primitive slotted into an List item.
  - label: Columns
    href: /components/columns
    note: >-
      The general-purpose responsive grid layout, unlike this fixed-purpose stacking
      container.
---
