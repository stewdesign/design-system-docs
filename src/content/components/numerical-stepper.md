---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - SEO and AI discovery: not determinable from source or story — no SEO/AI-specific behaviour documented.
title: Numerical stepper
description: >-
  Numerical stepper is a labelled +/- control for choosing a whole number within
  a range, e.g. quantity or number of passengers. Figma draws the value as plain
  bold text and the +/- controls as bare icons with no button chrome, but both stay
  real interactive elements underneath: the value is a real <input type="number">
  (styled to look like Figma's plain text, so it keeps arrow-key stepping and direct
  typing for free) and the controls are real <button>s with a :focus-visible ring,
  just visually unstyled to match. Hover/focus on the whole shell mirror Text field.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17146-4621
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
    Label (Input label): the stepper's label, with an optional description line
    or helper disclosure.
  - 'Shell: the bordered control container.'
  - >-
    Inline label: shown inside the shell in variant="stacked" only, e.g. "Quantity",
    for a list of steppers that don't each carry their own outer label.
  - 'Decrement button: a bare minus icon button.'
  - 'Value input: a real <input type="number"> styled as plain bold text.'
  - 'Increment button: a bare plus icon button.'
  - 'Visually-hidden live region: announces the new value after a committed change.'
  - 'Error message (Message): shown below the control when error is set.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Numerical stepper anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Stacked
    description: Default variant, inline label inside the shell, outer label above.
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: Stacked'
  - title: Compact
    description: No inline label, shell hugs its content; used standalone (e.g.
      "Passengers").
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: Compact'
  - title: Inline orientation
    description: Outer label beside the shell instead of above it.
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: Inline orientation'
  - title: Compact + inline orientation
    description: Combines both axes.
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: Compact + inline orientation'
  - title: With helper
    description: description shown as a collapsed disclosure instead of a plain
      line.
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: With helper'
  - title: Error
    description: Error message shown below the control.
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: Error'
  - title: At minimum / at maximum
    description: Decrement or increment button disabled at the bound.
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: At minimum / at maximum'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      variant and orientation are independent axes: variant controls whether an
      inline label shows inside the shell and how the shell sizes itself; orientation
      controls whether the outer label sits above or beside the shell.
    list:
    - >-
      The +/- buttons disable automatically once value would go past min/max on
      the next press.
    - >-
      Typing into the value input updates value on every keystroke (so the +/- buttons'
      disabled state stays accurate) but deliberately does not update the announced
      live-region value on every keystroke — announcing while typing would talk
      over the user. The live region only updates on a committed change: a +/- button
      press or blur.
    - >-
      Pressing +/- commits the change immediately, clamping to min/max, and dispatches
      both input and change events.
    - >-
      Focus stays on the +/- button after a press rather than moving to the input,
      which is why the visually-hidden aria-live region exists — to announce the
      new value to screen reader users without moving focus.
    - Calling .focus() on the component focuses the underlying value input.
    image: https://placehold.co/1280x720
    imageAlt: 'Numerical stepper: general behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Choosing a whole number within a bounded range, e.g. quantity of an item or
    number of passengers.
  - >-
    A list of steppers that share a common outer context, using variant="stacked"
    with an inlineLabel per row.
  - >-
    A standalone stepper that already has its own outer label, using variant="compact".
  - A settings-style label-left, control-right row, using orientation="inline".
  dont:
  - >-
    Free-form numeric entry with no meaningful stepping (e.g. currency amounts)
    — use Text field with a numeric input mode instead.
  - >-
    A choice between a small number of discrete named options — use a selection
    component instead of a numeric range.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep label and inlineLabel short and direct, naming what's being counted, e.g.
    "Quantity" or "Passengers".
  - Write error to state what the user needs to do, e.g. "Choose at least 1".
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - >-
    Spell out "zero" and "one" in sentence form; use numerals for the numbers shown
    in the stepper itself and for min/max/step values.
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Setting both min/max bounds and a step that doesn't evenly divide the range
    can leave the stepper unable to reach max exactly.
  - >-
    The value input accepts direct typing and native number-input arrow-key stepping
    in addition to the +/- buttons — don't assume the +/- buttons are the only way
    to change the value.
  - >-
    inlineLabel only renders in variant="stacked" — setting it while variant="compact"
    has no visible effect.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Label'''
      description: The stepper's outer label text.
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
      description: >-
        Error message shown below the control; also sets aria-invalid/aria-describedby
        on the input.
    - name: inlineLabel (inline-label)
      options: string
      defaultValue: ''''''
      description: Label shown inside the shell in variant="stacked", e.g. "Quantity".
    - name: name
      options: string
      defaultValue: ''''''
      description: Native name for the underlying <input>.
    - name: min
      options: number
      description: Minimum value; when reached, the decrement button disables.
    - name: max
      options: number
      description: Maximum value; when reached, the increment button disables.
    - name: step
      options: number
      defaultValue: '1'
      description: Amount added/subtracted per +/- press.
    - name: required
      options: boolean
      defaultValue: 'false'
      description: Sets the native required attribute on the input.
    - name: variant
      options: stacked | compact
      defaultValue: stacked
      description: >-
        stacked shows inlineLabel inside the shell and caps the shell's width (210-220px,
        verified). compact drops the inline label for a standalone stepper that
        already has one, and the shell hugs its content instead.
    - name: orientation
      options: stacked | inline
      defaultValue: stacked
      description: >-
        stacked keeps the outer label above the shell; inline sets it beside the
        shell instead, each keeping its own natural width spread across the row.
    - name: value
      options: number
      defaultValue: '0'
      description: The current numeric value.
- type: accessibility
  focusOrder:
  - >-
    The component includes the value input and the two +/- buttons in the natural
    tab order, in document order: decrement button, value input, increment button.
  keyboard:
  - key: Arrow up
    action: >-
      Increments the value by step (native number input behaviour, while the input
      is focused).
  - key: Arrow down
    action: >-
      Decrements the value by step (native number input behaviour, while the input
      is focused).
  - key: Enter / Space
    action: Activates the focused +/- button.
  aria:
  - >-
    Each +/- button has a descriptive aria-label (e.g. "Decrease Quantity"/"Increase
    Quantity") built from inlineLabel or label, since the buttons show only bare
    icons.
  - disabled is applied natively to whichever +/- button would exceed min/max.
  - >-
    The value input carries aria-label (from inlineLabel or label), aria-describedby
    (referencing the description/helper and error), and aria-invalid reflecting
    error.
  - >-
    A visually-hidden aria-live="polite" region announces the new value after each
    committed change, since focus stays on the +/- button rather than moving to
    the input.
- type: related-components
  items:
  - label: Input label
    href: /components/input-label
    note: Renders the stepper's outer label, description and helper.
  - label: Text field
    href: /components/text-field
    note: For free-form numeric or text entry without stepping.
  - label: Message
    href: /components/message
    note: Renders the stepper's error text.
  - label: Icon
    href: /components/icon
    note: Supplies the decrement/increment icons.
---
