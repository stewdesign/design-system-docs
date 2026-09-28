---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Examples: no dedicated story exists for this component — it is only exercised indirectly via the inputs that compose it (e.g. Input group, Numerical stepper).
#   - Keyboard interactions: keyboard interactions, when present, are owned by the composed Input helper — see its own documentation.
#   - SEO and AI discovery: not determinable from source — no SEO/AI-specific behaviour documented; not a standalone public component so not typically an independent target for discovery.
title: Input label
description: >-
  Input label is an internal primitive: the bold label line above an input, plus
  at most one of a static description line or the Input helper disclosure underneath
  it. Figma never shows both together, so helper (when set) always wins over description
  as the second line, rather than stacking them. It renders a plain <span>/<div>
  structure, not an HTML <label> — the real <label> (or the click-target wrapper
  around it) stays owned by whatever input composes this, exactly as it already
  is in Checkbox/Radio/Text field today. It is not part of the public component
  API, so it has no story of its own.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=19564-22626
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Label: the bold label text.'
  - 'Description: an optional static hint line, shown when helper is not set.'
  - >-
    Helper (Input helper): an optional disclosure, shown instead of description
    when helper is set.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Input label anatomy diagram
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      helper always takes priority over description as the second line — the two
      never stack.
    list:
    - >-
      error only recolours the label itself; the description or helper text underneath
      stays neutral, matching Figma's own Error variant.
    image: https://placehold.co/1280x720
    imageAlt: 'Input label: general behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Composed inside other input components (e.g. Checkbox, Radio, Text field, Input
    group, Numerical stepper) to render their label, description and helper consistently.
  dont:
  - >-
    As a standalone public component — it isn't intended to be used directly outside
    of another input component, and doesn't render a real <label> element itself.
  - >-
    For a group-level heading over multiple inputs (e.g. a <fieldset>) — use Input
    legend instead, which uses heading-weight type.
- type: side-by-side
  heading: Content guidance
  list:
  - Make label text short and direct, describing what the input is for.
  - Use description or helper to add any context the label alone doesn't cover.
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - Not part of the public component API — it has no story of its own.
  - >-
    Doesn't render a native <label> element — the consuming input owns the real
    label/click-target association.
  - Only one of description or helper is shown at a time.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Label'''
      description: The label text.
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
      defaultValue: large
      description: Controls the label's font size.
    - name: error
      options: boolean
      defaultValue: 'false'
      description: >-
        Recolours the label text to the danger colour; the description/helper underneath
        stays neutral.
- type: accessibility
  focusOrder:
  - >-
    Not focusable itself — it contributes no interactive element other than the
    Input helper disclosure when helper is set.
  aria:
  - >-
    No ARIA role is applied to the label itself; association with the real input
    (e.g. via aria-labelledby) is the responsibility of whichever component composes
    Input label.
- type: related-components
  items:
  - label: Input helper
    href: /components/input-helper
    note: Composed when helper is set, for the description-as-disclosure alternative.
  - label: Input legend
    href: /components/input-legend
    note: The equivalent primitive for a <fieldset>/<legend> group heading.
  - label: Checkbox
    href: /components/checkbox
    note: Components that compose Input label for their own labelling.
  - label: Radio
    href: /components/radio
    note: Components that compose Input label for their own labelling.
  - label: Text field
    href: /components/text-field
    note: Components that compose Input label for their own labelling.
  - label: Input group
    href: /components/input-group
    note: Components that compose Input label for their own labelling.
  - label: Numerical stepper
    href: /components/numerical-stepper
    note: Components that compose Input label for their own labelling.
---
