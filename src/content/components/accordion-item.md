---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Accordion item
description: >-
  Accordion item is a single collapsible row: a heading with a chevron that expands
  to reveal supporting content. It is always used inside Accordion, which owns shared
  sizing, surface and grouping behaviour across all items in a group.
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
    Divider (optional): a leading Divider, shown when show-divider is set by the
    parent Accordion (applies to the flat type only).
  - 'Summary row: the always-visible header, built on native <summary>.'
  - 'Leading icon slot (icon-start): optional icon shown before the heading text.'
  - 'Heading: the item''s heading text (heading property).'
  - 'Chevron: a decorative Icon (chevron-down) that rotates 180° when open.'
  - 'Content: the collapsible body, projected through the default slot.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Accordion item anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default item
    description: Filled surface, medium padding, closed.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: Default item'
  - title: Open item
    description: Expanded, chevron rotated, content visible.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: Open item'
  - title: Slim item
    description: Reduced padding and smaller leading icon, for denser lists.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: Slim item'
  - title: Item with leading icon
    description: An icon slotted before the heading.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: Item with leading icon'
  - title: Flat item with divider
    description: No fill, a divider line above (all but the first item in the group).
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: Flat item with divider'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Toggle
    description: >-
      Built on native <details>/<summary> — clicking the summary row toggles open
      and dispatches a bubbling, composed toggle event so the parent Accordion can
      coordinate exclusive-open behaviour.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: toggle'
  - title: Expand/collapse animation
    description: >-
      A smooth height and opacity transition (350ms ease-in-out) driven entirely
      by CSS (max-block-size and opacity), with no JavaScript animation. Closed
      content is visually collapsed but not removed from the accessibility tree
      or tab order — a deliberate trade-off.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: expand/collapse animation'
  - title: Chevron rotation
    description: Rotates 180° over 350ms when the item opens.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: chevron rotation'
  - title: Hover
    description: The summary row gets a subtle fill on hover.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: hover'
  - title: Reduced motion
    description: >-
      Chevron rotation and the expand/collapse transition are both disabled under
      prefers-reduced-motion: reduce.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: reduced motion'
  - title: Icon sizing
    description: >-
      The item owns the leading icon's size (--aa-icon-size), varying by size, so
      consumers don't need to size their own slotted icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: icon sizing'
  - title: Responsive behaviour
    description: No breakpoints of its own; it sizes to its container's inline size.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion item: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - As a child of Accordion — it has no standalone use case outside that group.
  - >-
    For an individual FAQ entry, a collapsible content section, or one row in a
    grouped set of expandable panels.
  dont:
  - >-
    Never nested outside Accordion — it relies on the group for shared size, surface
    and exclusive-open coordination.
  - >-
    For a single, page-level expand/collapse control unrelated to a set — consider
    a plain disclosure pattern instead.
  - >-
    For primary or urgent content the user must see immediately — see content guidance
    below.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep headings short, direct and in sentence case — they act as scannable labels
    for what's inside.
  - >-
    Content guidance from Figma: accordion content should be supporting, optional
    or secondary information — scannable, self-contained and non-critical.
  - >-
    Avoid putting urgent warnings, required instructions, primary calls to action,
    legal consent, or anything users must compare side by side inside an accordion
    item — users may never open it.
  - Use sentence case for the heading, not title case.
  - >-
    Frontload headings with the topic or question, not a generic label like "More
    info".
  - >-
    Use British English spelling and plain, familiar language throughout the body
    content.
  - Avoid jargon and technical terms; write for a reading age of around 9.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion item example: "How do I make a claim?"'
      label: Do
      caption: '"How do I make a claim?"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion item example: "Claims: more information"'
      label: Don't
      caption: '"Claims: more information"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion item example: "What''s covered under Home cover"'
      label: Do
      caption: '"What''s covered under Home cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion item example: "Click here for cover details"'
      label: Don't
      caption: '"Click here for cover details"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    size, surface and show-divider are all set by the parent Accordion — don't set
    them directly on an item that's meant to match its siblings, or it will drift
    out of sync when the group's own props change.
  - >-
    Closed content stays in the DOM and accessibility tree (just visually collapsed),
    so don't rely on it being removed for performance reasons.
  - >-
    The expand animation measures against a fixed max-block-size cap (8rem) rather
    than real content height — very tall content is clipped mid-transition rather
    than fully revealed until the transition ends.
  - >-
    Word-wrapping is enabled on the heading; very long headings will wrap onto multiple
    lines rather than truncating.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: size
      options: default | slim
      defaultValue: default
      description: >-
        Controls padding and leading-icon size. Set by the parent Accordion, not
        directly by consumers.
    - name: surface
      options: fill | flat
      defaultValue: fill
      description: >-
        Whether the item has its own filled, rounded background. Set by the parent
        Accordion based on its type.
    - name: heading
      options: string
      defaultValue: '''Heading'''
      description: The item's heading text.
    - name: open
      options: boolean
      defaultValue: 'false'
      description: Whether the item is expanded.
    - name: show-divider
      options: boolean
      defaultValue: 'false'
      description: >-
        Shows a leading Divider. Set by the parent group on every item after the
        first when dividing (flat type only).
- type: accessibility
  focusOrder:
  - >-
    The summary row is a native <summary> element and receives focus in normal tab
    order at its position in the page. Content inside an open item is focusable
    in its own document order after the summary; content inside a closed item is
    not reachable by Tab because native <details> skips collapsed content, though
    it is not removed from the accessibility tree.
  keyboard:
  - key: Enter / Space
    action: Toggles the item open or closed (native <summary> behaviour).
  aria:
  - >-
    No custom ARIA roles are applied — semantics come entirely from native <details>/<summary>,
    which already expose expand/collapse state to assistive technology.
  - >-
    The chevron icon is marked aria-hidden="true" since it's purely decorative and
    rotation alone carries no independent meaning beyond the native open/closed
    state.
  seo:
  - >-
    Renders as real <details>/<summary> elements, which are natively crawlable and
    semantically meaningful to search engines and assistive technology — content
    is not hidden via display: none in a way that would exclude it from being indexed.
  - >-
    Because native <details> content stays in the DOM when collapsed, text inside
    a closed item remains available to crawlers and AI agents parsing the page,
    even though it isn't visible to sighted users until expanded.
- type: related-components
  items:
  - label: Accordion
    href: /components/accordion
    note: >-
      The required parent group; owns type, size, dividing and exclusive/multiple-open
      coordination for its items.
  - label: Divider
    href: /components/divider
    note: Used internally for the show-divider separator between items.
  - label: Icon
    href: /components/icon
    note: Supplies the leading icon and the chevron indicator.
---
