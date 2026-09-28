---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When to use: confirm any sanctioned standalone use — the current story shows it in isolation only to illustrate its default/disabled states, not as a recommended pattern on its own.
#   - Content guidance (what to write): confirm the accessible name applied when composed — this component sets no aria-label itself, so the label must come from a parent or wrapping context.
#   - Content guidance (how to write): not applicable — the component carries no copy of its own; see the parent component (Pagination counter) for any accessible-name guidance.
#   - Things to consider: confirm whether this is intentional or a gap.
#   - ARIA: confirm expected accessible name — Pagination counter does not currently set aria-label on the buttons it renders either, so the accessible name relies solely on the chevron icon; this should be verified against the source.
title: Pagination control button
description: >-
  Pagination control button is a round icon-only button for stepping to the previous
  or next item in a paginated sequence. It renders a chevron icon in either direction
  and is used as a sub-part of Pagination counter (previous/next controls either
  side of the "page of total" label); it also appears standalone in the Pagination
  story as a raw building block, but has no independent usage pattern of its own
  beyond that.
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
    Button: a circular 48×48px <button> (part="button"), bordered, transparent background.
  - >-
    Icon: a 24px Icon, chevron-left for direction="previous" or chevron-right for
    direction="next".
  image: https://placehold.co/1280x720
  imageAlt: Labelled Pagination control button anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Previous button (enabled)
    description: Default state, hoverable.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination control button: Previous button (enabled)'
  - title: Previous button (disabled)
    description: Muted border/icon, not interactive.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination control button: Previous button (disabled)'
  - title: Next button
    description: direction="next", chevron pointing right.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination control button: Next button'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      The component holds no internal page-stepping logic itself — it is a presentational
      control; Pagination counter supplies the disabled state and click handling.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination control button: general behaviour'
  - title: Hover
    description: Background fills with --surface-default-secondary when not disabled.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination control button: hover'
  - title: Disabled
    description: >-
      Border and icon colour switch to the muted --border-default-secondary token
      and the cursor becomes default.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination control button: disabled'
  - title: Transitions
    description: >-
      Colour/background changes use the shared interactive transition token; focus
      rings use the shared focus-ring transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination control button: transitions'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pagination control button example: As the previous/next control inside Pagination
        counter (its only current composed usage).
      label: Do
      caption: >-
        As the previous/next control inside Pagination counter (its only current
        composed usage).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pagination control button example: As a general-purpose icon button — use
        Icon button for standalone icon-only actions unrelated to pagination.
      label: Don't
      caption: >-
        As a general-purpose icon button — use Icon button for standalone icon-only
        actions unrelated to pagination.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pagination control button example: For dot-style page indicators — use Pagination
        simple instead.
      label: Don't
      caption: For dot-style page indicators — use Pagination simple instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    No visible label text — the icon alone communicates direction. There is no configurable
    text content.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    This is documented as an internal sub-part of Pagination simple/Pagination counter
    composition, with limited standalone usage — check the parent component before
    reaching for this directly.
  - >-
    The button carries no accessible name of its own (no aria-label); a consumer
    using it outside Pagination counter needs to supply one.
  - Fixed 48×48px size meets the 44px minimum touch target.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: direction
      options: previous | next
      defaultValue: previous
      description: Sets which chevron icon is shown.
    - name: disabled
      options: boolean
      defaultValue: 'false'
      description: Disables the button natively.
- type: accessibility
  focusOrder:
  - >-
    Participates in the natural tab order as a native <button>; the native disabled
    attribute removes it from the tab order when disabled is set.
  keyboard:
  - key: Enter
    action: Activates the button.
  - key: Space
    action: Activates the button (native <button> behaviour).
  aria:
  - No ARIA attributes are set by this component itself.
  seo:
  - >-
    Renders as a real <button>, so it's natively focusable and operable rather than
    a simulated click target.
  - >-
    Because it has no visible or programmatic label, it offers minimal semantic
    information to assistive tech, search engines, or AI agents on its own — any
    consuming context should supply an accessible name.
- type: related-components
  items:
  - label: Pagination counter
    href: /components/pagination-counter
    note: Composes two of these buttons around a "page of total" label.
  - label: Pagination simple
    href: /components/pagination-simple
    note: An alternative, dot-based pagination pattern that does not use this button.
  - label: Icon
    href: /components/icon
    note: Supplies the chevron icon.
---
