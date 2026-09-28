---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: confirm the appropriate toggle component if one exists.
title: Checkbox
description: >-
  Checkbox is a single checkbox control with a label, optional description/helper
  text, and error state. It supports a real tri-state (checked/unchecked/indeterminate)
  and an alternative "outline" presentation that turns the whole row into a bordered,
  selectable card.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17638-21846
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
    Native checkbox input: visually hidden but present for real form semantics and
    keyboard/pointer interaction.
  - 'Control: the visible box, showing a check or minus icon depending on state.'
  - >-
    Label copy: rendered via Input label, showing label, and optionally description
    or helper.
  - >-
    Error message (optional): rendered via Message below the control row when error
    is set.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Checkbox anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Unchecked / Checked
    description: Default states.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: Unchecked / Checked'
  - title: Indeterminate
    description: Tri-state, partially selected.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: Indeterminate'
  - title: With description
    description: Supporting line under the label.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: With description'
  - title: With helper
    description: Description shown as a collapsible disclosure.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: With helper'
  - title: With error
    description: Red border plus error message.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: With error'
  - title: Outline / Outline checked / Outline with error
    description: The bordered card presentation.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: Outline / Outline checked / Outline with error'
  - title: State matrix
    description: All combinations shown together for comparison.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: State matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Native checkbox underneath
    description: >-
      A real, visually-hidden <input type="checkbox"> drives all state, keyboard
      and form-submission behaviour — the visible box is purely presentational,
      styled to reflect the native input's state.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: native checkbox underneath'
  - title: Indeterminate is a real tri-state
    description: >-
      Setting indeterminate sets the native input's .indeterminate property; clicking
      the control clears indeterminate the same way a native indeterminate checkbox
      does.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: indeterminate is a real tri-state'
  - title: Outline variant
    description: >-
      The same control row is wrapped in a bordered, padded card — the same "selectable
      card" shape Radio's contained variant uses. Hovering an outline card previews
      the "selected" border even before it's checked; checked/indeterminate states
      get the same border permanently.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: outline variant'
  - title: Error state
    description: >-
      Shows a red border (checkbox and, for outline, the whole card) plus a message
      below via Message; error always wins over the hover-preview border on the
      outline variant.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: error state'
  - title: Description vs. helper
    description: >-
      description renders a plain supporting line; setting helper instead turns
      that line into an expand/collapse disclosure rather than a static line — the
      two aren't shown together.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: description vs. helper'
  - title: Focus ring
    description: >-
      A dashed focus ring appears around the control on native :focus-visible, not
      on click.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: focus ring'
  - title: Responsive behaviour
    description: >-
      Sizes to fit its content (width: fit-content) by default; outline variant
      stretches to fill its container up to a maximum width (500px), with a minimum
      width of 120px.
    image: https://placehold.co/1280x720
    imageAlt: 'Checkbox: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Checkbox example: A single binary choice within a form (agree/disagree,
        opt in/out).
      label: Do
      caption: A single binary choice within a form (agree/disagree, opt in/out).
    - image: https://placehold.co/1280x720
      imageAlt: 'Checkbox example: Mutually exclusive choices — use Radio instead.'
      label: Don't
      caption: Mutually exclusive choices — use Radio instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Checkbox example: One option within a group of independently selectable
        choices.'
      label: Do
      caption: One option within a group of independently selectable choices.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Checkbox example: A toggle for an immediate setting change (rather than
        a form field to submit) — consider a switch/toggle component instead.
      label: Don't
      caption: >-
        A toggle for an immediate setting change (rather than a form field to submit)
        — consider a switch/toggle component instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Checkbox example: A tri-state "select all" control representing a partially-selected
        group (indeterminate).
      label: Do
      caption: >-
        A tri-state "select all" control representing a partially-selected group
        (indeterminate).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Checkbox example: Multiple related choice chips in a compact row — use Chip
        group instead.
      label: Don't
      caption: Multiple related choice chips in a compact row — use Chip group instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Checkbox example: A more prominent, card-like selectable option — variant="outline".
      label: Do
      caption: A more prominent, card-like selectable option — variant="outline".
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the label short, direct and in sentence case — it should read as a clear
    statement of what checking the box means.
  - >-
    Use description for a brief supporting line; use helper instead only when that
    context is long enough to warrant hiding it behind a disclosure.
  - >-
    Word the label so it's unambiguous both checked and unchecked — avoid double
    negatives.
  - Use sentence case for the label; avoid colons at the end.
  - >-
    Avoid double negatives — they're confusing at best and deceptive at worst, e.g.
    avoid "Don't disable notifications".
  - Use British English spelling.
  - >-
    Keep error messages specific about what's needed, e.g. "Please make a selection"
    rather than a generic "Error".
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Checkbox example: "Send me marketing emails"'
      label: Do
      caption: '"Send me marketing emails"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Checkbox example: "Don''t opt out of marketing emails"'
      label: Don't
      caption: '"Don''t opt out of marketing emails"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Checkbox example: "I agree to the terms and conditions"'
      label: Do
      caption: '"I agree to the terms and conditions"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Checkbox example: "Agreement:"'
      label: Don't
      caption: '"Agreement:"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    aria-describedby can only target the whole Input label host, since its description/helper
    text lives behind its own shadow boundary — there's no inner id to point at
    more precisely.
  - >-
    Setting both description and helper results in helper winning — description's
    plain line is not also shown.
  - >-
    The outline variant's border is always rendered at the "selected" 2px thickness,
    never a thinner default, to avoid layout shift between resting and selected/hover
    states — only its colour changes.
  - >-
    variant="outline" changes the host's own width behaviour (stretches with a max-width
    cap) — mixing default and outline checkboxes in the same layout may need explicit
    width handling to align them.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: checked
      options: boolean
      defaultValue: 'false'
      description: Whether the checkbox is checked.
    - name: indeterminate
      options: boolean
      defaultValue: 'false'
      description: >-
        Tri-state indicator. A real tri-state, not just visual — clicking clears
        it, same as a native indeterminate checkbox.
    - name: variant
      options: default | outline
      defaultValue: default
      description: >-
        default is a plain checkbox+label row; outline wraps the same row in a bordered,
        padded card.
    - name: label
      options: string
      defaultValue: '''Label'''
      description: Accessible label text, also shown visually via Input label.
    - name: description
      options: string
      defaultValue: ''''''
      description: Plain supporting line under the label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line. Figma never shows both description and helper at once — helper
        wins if both are set.
    - name: error
      options: string
      defaultValue: ''''''
      description: Error message, shown via Message and reflected as a red border
        on the control.
    - name: name
      options: string
      defaultValue: ''''''
      description: Native form field name.
    - name: value
      options: string
      defaultValue: '''on'''
      description: Native form field value.
- type: accessibility
  focusOrder:
  - >-
    The native <input type="checkbox"> receives focus in normal tab order at the
    checkbox's position on the page — it is visually hidden but remains the real
    focusable, interactive element.
  keyboard:
  - key: Space
    action: >-
      Toggles the checkbox between checked and unchecked (clears indeterminate if
      set), native <input type="checkbox"> behaviour.
  aria:
  - aria-label — set from the label property on the native input.
  - >-
    aria-describedby — points to the label host (when description/helper is set)
    and/or the error message element, joined together.
  - aria-invalid — "true" when error is set, otherwise "false".
  - >-
    The visually-hidden native input retains all real checkbox semantics (checked/indeterminate
    state) rather than relying on ARIA state alone.
  seo:
  - >-
    Uses a real native <input type="checkbox"> under the hood, so form semantics,
    checked state, and keyboard behaviour are all native rather than simulated —
    critical for any automated form-filling tool or AI agent interacting with the
    page.
  - >-
    Because the visible control is a separate, purely presentational element, ensure
    any custom styling changes don't obscure that the real interactive target is
    the underlying (visually hidden) input paired with its label.
- type: related-components
  items:
  - label: Radio
    href: /components/radio
    note: >-
      For mutually exclusive choices; shares the same "outline"/contained card presentation
      concept.
  - label: Chip group
    href: /components/chip-group
    note: >-
      For a compact row of independently selectable choice chips instead of a list
      of checkboxes.
  - label: Input label
    href: /components/input-label
    note: Renders the label/description/helper text used internally.
  - label: Message
    href: /components/message
    note: Renders the error message shown below the control.
---
