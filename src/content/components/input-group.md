---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: keyboard interactions are owned by whichever inputs are slotted in (e.g. Radio), not by Input group itself.
#   - SEO and AI discovery: not determinable from source or story — no SEO/AI-specific behaviour documented.
title: Input group
description: >-
  Input group labels and lays out a set of related, slotted inputs (e.g. Radio,
  Checkbox, Switch, Selector) under a single shared label, description and error.
  It doesn't own any checked/selected state itself — per Figma's own note on the
  component, "coded radio fields are grouped and the value of the field indicates
  its state" — it only groups, labels and lays out whatever real inputs the consumer
  nests inside it. role="group" plus aria-labelledby/aria-describedby tie the whole
  set to the outer label and error, the same relationship a native <fieldset>/<legend>
  has to its inputs.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17666-5575
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
    Label (Input label): group label, with an optional static description line or
    helper disclosure underneath.
  - >-
    Group: the slotted inputs, laid out per layout, with role="group" tying them
    to the label.
  - >-
    Slotted inputs (default slot): the real interactive controls, e.g. Radio, Checkbox,
    Switch, Selector.
  - 'Error message (Message): shown below the group when error is set.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Input group anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Stack
    description: Default column layout for a group of radio options.
    image: https://placehold.co/1280x720
    imageAlt: 'Input group: Stack'
  - title: Inline
    description: Options wrap in a row instead of a column.
    image: https://placehold.co/1280x720
    imageAlt: 'Input group: Inline'
  - title: With error
    description: Error message shown below the group, tied via aria-describedby.
    image: https://placehold.co/1280x720
    imageAlt: 'Input group: With error'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      The group doesn't manage checked/selected state — it purely lays out and labels
      whatever inputs are slotted in.
    list:
    - >-
      aria-labelledby always points at the label; aria-describedby is built from
      the description/helper label id and the error id, whichever are present.
    - >-
      In layout="inline", slotted inputs flex (flex: 1 1 12rem) and wrap rather
      than each taking a fixed width.
    - >-
      When helper is set it replaces description as the second line under the label,
      rather than the two stacking together.
    image: https://placehold.co/1280x720
    imageAlt: 'Input group: general behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Input group example: A set of related radio buttons, checkboxes, switches
        or selectors that share one label, description and error.
      label: Do
      caption: >-
        A set of related radio buttons, checkboxes, switches or selectors that share
        one label, description and error.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Input group example: A single standalone input — use the input's own labelling
        (e.g. Text field), not Input group.
      label: Don't
      caption: >-
        A single standalone input — use the input's own labelling (e.g. Text field),
        not Input group.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Input group example: Anywhere a native <fieldset>/<legend> grouping would
        apply, but with the design system's own label/description/error styling.
      label: Do
      caption: >-
        Anywhere a native <fieldset>/<legend> grouping would apply, but with the
        design system's own label/description/error styling.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Input group example: Inputs that aren't related to each other or don't share
        a common error — group them separately instead.
      label: Don't
      caption: >-
        Inputs that aren't related to each other or don't share a common error —
        group them separately instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Write the group label as a short question or instruction describing the choice,
    e.g. "Choose your cover".
  - >-
    Use description (or helper for longer detail) to add any context the label alone
    doesn't cover.
  - Write error to state what the user needs to do, e.g. "Please make a selection".
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The group is type-agnostic — it doesn't validate or constrain what's slotted
    in, so the consumer is responsible for giving all slotted inputs a shared name
    where relevant (e.g. radios).
  - >-
    Don't stack description and helper — only one renders, with helper taking priority.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Label'''
      description: Group label text, rendered via Input label.
    - name: description
      options: string
      defaultValue: ''''''
      description: Static description line under the label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
    - name: error
      options: string
      defaultValue: ''''''
      description: Error message shown below the group; also sets aria-describedby
        on the group.
    - name: layout
      options: stack | inline
      defaultValue: stack
      description: >-
        stack lays slotted inputs out in a column; inline wraps them in a row, each
        flexing to a minimum width.
- type: accessibility
  focusOrder:
  - >-
    Focus moves through the slotted inputs in document order; the group element
    itself is not focusable.
  aria:
  - role="group" on the wrapper containing the slotted inputs.
  - aria-labelledby points at the label element, tying the group to its label.
  - >-
    aria-describedby references the description/helper label id and the error id,
    when present.
- type: related-components
  items:
  - label: Input label
    href: /components/input-label
    note: Renders the group's label, description and helper.
  - label: Radio
    href: /components/radio
    note: The real inputs typically slotted into a group.
  - label: Checkbox
    href: /components/checkbox
    note: The real inputs typically slotted into a group.
  - label: Switch
    href: /components/switch
    note: The real inputs typically slotted into a group.
  - label: Selector
    href: /components/selector
    note: The real inputs typically slotted into a group.
  - label: Message
    href: /components/message
    note: Renders the group's error text.
---
