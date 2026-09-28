---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma (node 19324:6349, .Leading-Element).
#   - Examples: List item leading has no story of its own — see src/stories/components/list-item.stories.ts for usage in context: a car icon (type="icon", default), an avatar (Avatar story, type="avatar"), and a positive status bullet with a check icon (Status story, type="status" intent="positive").
#   - Content guidance (what to write): not applicable — List item leading has no text content; any labelling belongs to the slotted icon/avatar or the parent List item.
#   - Content guidance (how to write): not applicable — see content guidance for List item.
#   - Keyboard interactions: not applicable — List item leading has no interactive behaviour.
#   - ARIA: confirm whether the leading element (particularly type="status") should be marked aria-hidden="true" when it's purely decorative alongside a text label, or whether its slotted icon already handles this.
title: List item leading
description: >-
  List item leading is an internal primitive that positions the leading element
  (icon, avatar or status indicator) inside an List item. It is not meant to be
  reached for directly outside that context, and has no story of its own in Storybook
  — this doc covers its structure for engineers building or extending List item,
  not as a component designers pick independently.
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
    Leading wrapper (.leading, part="leading"): an inline-flex box, centring its
    slotted content, whose visual treatment depends on type.
  - >-
    Default slot: holds whatever is passed in: an Icon/Brand icon for type="icon",
    an Avatar for type="avatar", or a small icon for type="status".
  image: https://placehold.co/1280x720
  imageAlt: Labelled List item leading anatomy diagram
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      No other interaction states — this is a purely presentational wrapper with
      no hover, focus or disabled behaviour of its own.
    image: https://placehold.co/1280x720
    imageAlt: 'List item leading: general behaviour'
  - title: icon
    description: >-
      A fixed 36×36px rounded box with a light-grey (--surface-default-secondary)
      background — the same box used for both Figma's "Leading Icon" and "Illustration"
      treatments, since both are visually identical and only differ in what's slotted
      inside.
    image: https://placehold.co/1280x720
    imageAlt: 'List item leading: icon'
  - title: avatar
    description: >-
      No extra chrome is applied — the slotted Avatar renders exactly as it would
      standalone, since it already owns its own circular shape.
    image: https://placehold.co/1280x720
    imageAlt: 'List item leading: avatar'
  - title: status
    description: >-
      A smaller, fully-rounded circle whose background and icon colour are set from
      intent via the --aa-list-item-leading-color/--aa-list-item-leading-background
      custom properties, computed inline per render.
    image: https://placehold.co/1280x720
    imageAlt: 'List item leading: status'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Exclusively inside List item's slot="leading", to present an icon, avatar or
    status indicator ahead of the item's label/description.
  dont:
  - >-
    Standalone, outside of List item — it has no independent story or usage pattern
    and exists purely to support that parent component.
  - >-
    As a general-purpose icon container elsewhere in the system — use Icon (optionally
    with its own background styling) directly instead.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    type="icon" and type="avatar" share the same generic slot — passing an Avatar
    into a type="icon" leading element (or vice versa) will render incorrectly,
    since the wrapper's chrome assumes a matching slot content.
  - >-
    Sizing of the slotted icon (e.g. size="20") is the consumer's responsibility
    — the wrapper does not enforce or override it, unlike Button's icon slots.
  - >-
    intent only has a visible effect when type="status" — setting it alongside type="icon"
    or type="avatar" has no effect.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: type
      options: icon | avatar | status
      defaultValue: icon
      description: >-
        Visual treatment of the leading element. icon renders a 36px light-grey
        rounded box; avatar renders its slot bare (since Avatar already has its
        own circular treatment); status renders a smaller coloured circle.
    - name: intent
      options: info | positive | warning | danger
      defaultValue: info
      description: >-
        Colour tone applied only when type="status" — sets the status circle's background
        and icon colour.
- type: accessibility
  focusOrder:
  - >-
    List item leading is not focusable and introduces no tab stop — it is purely
    decorative positioning around content that, if interactive, would need its own
    focus handling (which is not the pattern used here; leading elements are presentational).
  aria:
  - No roles, states or properties are applied by List item leading itself.
  seo:
  - >-
    Renders a plain <span> — no semantic meaning is added or implied; any meaning
    should come from the List item's own label/description text, not this wrapper.
- type: related-components
  items:
  - label: List item
    href: /components/list-item
    note: >-
      The parent component this primitive is designed exclusively to support, via
      slot="leading".
  - label: List item trailing
    href: /components/list-item-trailing
    note: The equivalent primitive for the trailing side of an List item.
  - label: Icon
    href: /components/icon
    note: Commonly slotted into type="icon".
  - label: Brand icon
    href: /components/brand-icon
    note: Commonly slotted into type="icon".
  - label: Avatar
    href: /components/avatar
    note: Commonly slotted into type="avatar".
---
