---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Examples: no dedicated story exists for this component — it is only exercised indirectly via the group-level components that compose it (e.g. Input group).
#   - Keyboard interactions: keyboard interactions, when present, are owned by the composed Input helper — see its own documentation.
#   - SEO and AI discovery: not determinable from source — no SEO/AI-specific behaviour documented; not a standalone public component so not typically an independent target for discovery.
title: Input legend
description: >-
  Input legend is an internal primitive with the same label/description/helper shape
  as Input label, but for a <fieldset>'s <legend> — a heading over a group of inputs
  (e.g. a radio group), in bigger heading-weight type rather than the input-label
  type scale. Figma models it as a genuinely separate component (its own node, its
  own type sizes), not a variant of Label, so it stays a separate component rather
  than an "as" prop on Input label. It is not part of the public component API,
  so it has no story of its own.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=19577-10905
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Label: the legend text, in heading-weight type.'
  - 'Description: an optional static hint line, shown when helper is not set.'
  - >-
    Helper (Input helper): an optional disclosure, shown instead of description
    when helper is set.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Input legend anatomy diagram
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      helper always takes priority over description as the second line — the two
      never stack.
    list:
    - >-
      size="large" and size="small" switch typeface family as well as size — they
      are modelled in Figma as genuinely different type styles, not a single scaled-down
      face.
    - error recolours the legend label only.
    image: https://placehold.co/1280x720
    imageAlt: 'Input legend: general behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    As the heading over a group of related inputs, e.g. inside a <fieldset> or Input
    group, where the heading needs more visual weight than an individual input's
    label.
  dont:
  - >-
    As the label for a single input — use Input label instead, which uses the smaller
    input-label type scale.
  - >-
    As a standalone public component — it isn't intended to be used directly outside
    of a group-level component.
- type: side-by-side
  heading: Content guidance
  list:
  - Make legend text short and direct, describing the group of inputs it introduces.
  - Use description or helper to add any context the legend alone doesn't cover.
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - Not part of the public component API — it has no story of its own.
  - Only one of description or helper is shown at a time.
  - >-
    size="large" pulls in a separate heading font family — confirm the font is loaded
    wherever this variant is used.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Legend label'''
      description: The legend text.
    - name: description
      options: string
      defaultValue: ''''''
      description: Static description line, shown only when helper is not set.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text for the description-as-disclosure alternative; when set, replaces
        description as the second line.
    - name: size
      options: large | small
      defaultValue: small
      description: >-
        large uses the same bold display face as page headings (AA Sans); small
        uses the input label's own type family. Figma models these as two different
        typefaces, not just two sizes of one.
    - name: error
      options: boolean
      defaultValue: 'false'
      description: Recolours the legend text to the danger colour.
- type: accessibility
  focusOrder:
  - >-
    Not focusable itself — it contributes no interactive element other than the
    Input helper disclosure when helper is set.
  aria:
  - >-
    No ARIA role is applied to the legend itself; association with the grouped inputs
    (e.g. via aria-labelledby) is the responsibility of whichever component composes
    Input legend.
- type: related-components
  items:
  - label: Input helper
    href: /components/input-helper
    note: Composed when helper is set, for the description-as-disclosure alternative.
  - label: Input label
    href: /components/input-label
    note: The equivalent primitive for a single input's own label.
  - label: Input group
    href: /components/input-group
    note: A component that composes aa-input-legend-style labelling for a group
      of inputs.
---
