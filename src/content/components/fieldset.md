---
# Gaps from the source doc (TODOs), for review:
#   - When not to use: not covered in source or stories — no guidance found for alternative components.
#   - Keyboard interactions: none defined at the fieldset level — keyboard interactions belong to the slotted inputs (e.g. Radio, Checkbox)
#   - SEO and AI discovery: not covered in source or stories.
title: Fieldset
description: >-
  Fieldset groups one or more related inputs (typically aa-input-groups) under a
  shared legend, rendering a real <fieldset>/<legend> pair so the legend becomes
  the group's accessible name natively.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=14013-10859
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
    Legend (part="legend"): a native <legend> containing Input legend at its large
    size, matching Figma's heading-weight legend spec.
  - >-
    Content (part="content"): a default <slot> for the grouped inputs, e.g. one
    or more aa-input-groups.
  - >-
    Action (part="action"): a slot="action" for a single action such as a "Continue"
    button, hidden automatically when empty.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Fieldset anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: A fieldset with one Input group of radios.
    image: https://placehold.co/1280x720
    imageAlt: 'Fieldset: Default'
  - title: With action
    description: The same fieldset with a "Continue" button in the action slot.
    image: https://placehold.co/1280x720
    imageAlt: 'Fieldset: With action'
  - title: Multiple inputs
    description: >-
      A fieldset containing two aa-input-groups (radios and checkboxes) plus an
      action button.
    image: https://placehold.co/1280x720
    imageAlt: 'Fieldset: Multiple inputs'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      Renders a real <fieldset>/<legend> pair — a <legend> is the only element a
      native fieldset picks up as its accessible name, so Input legend sits inside
      a genuine <legend> rather than standing in for it.
    list:
    - >-
      Internal spacing (legend to content, and between multiple slotted inputs/groups)
      uses the --vertical-form-between-inputs token; a larger --vertical-form-between-fieldsets
      token is reserved for stacking separate aa-fieldsets within a form.
    - >-
      The action slot is hidden automatically (via slotchange measurement) when
      nothing is slotted into slot="action".
    image: https://placehold.co/1280x720
    imageAlt: 'Fieldset: general behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Grouping one or more related inputs (e.g. an Input group of radios or checkboxes)
    under a shared legend.
  - >-
    Providing a single action, such as a "Continue" button, that applies to the
    whole group of inputs.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Write the legend (label) to describe what the group of inputs is choosing, e.g.
    "Cover options" or "Breakdown cover".
  - >-
    Use description to add context, e.g. "Choose the cover that suits you" or "Tell
    us how you'd like to be covered".
  - >-
    Write the action button label using an active verb describing what happens next,
    e.g. "Continue".
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    A fieldset's rendered legend sits outside the normal box flow even when the
    fieldset itself is a grid container — browsers don't apply row-gap between it
    and the next child, so the gap between legend and content comes from the legend's
    own margin instead.
  - >-
    Reserve the action slot for a single action that applies to the whole group,
    not per-input actions.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Legend'''
      description: Legend text, rendered via Input legend.
    - name: description
      options: string
      defaultValue: ''''''
      description: Supporting description text below the legend.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
- type: accessibility
  focusOrder:
  - >-
    Not applicable at the fieldset level — focus order among the slotted inputs
    follows their own natural tab order; the <legend> itself is not focusable.
  aria:
  - >-
    Uses a native <fieldset>/<legend> pair, so the legend is picked up automatically
    as the fieldset's accessible name with no explicit ARIA attributes needed.
- type: related-components
  items:
  - label: Input group
    href: /components/input-group
    note: >-
      Typically slotted as the content of a fieldset, grouping a set of radios or
      checkboxes.
  - label: Input legend
    href: /components/input-legend
    note: Renders the legend text, description and helper disclosure.
  - label: Button
    href: /components/button
    note: Commonly slotted into the action slot.
---
