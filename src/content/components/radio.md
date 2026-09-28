---
# Gaps from the source doc (TODOs), for review:
#   - SEO and AI discovery: confirm whether the shadow-DOM aria-describedby targeting (host-level ids) is resolved consistently across all assistive tech, given cross-shadow-boundary aria-describedby support varies by browser.
title: Radio
description: >-
  Radio is the control for choosing a single option from a set of mutually exclusive
  choices. It wraps a visually hidden native <input type="radio"> so browser radio-group
  semantics and keyboard behaviour work natively, while rendering its own label,
  description, helper and error copy via Input label and Message.
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
    Native input: a visually hidden <input type="radio"> that drives the real checked
    state and browser radio-group behaviour.
  - >-
    Control: the visible circular radio dial, with an inner dot that scales in when
    checked.
  - >-
    Copy (Input label): label, description and/or helper text, rendered by the shared
    Input label primitive. Omitted entirely on the atom variant.
  - >-
    Error message (Message): shown below the row when error is set. Not available
    on atom, which has no room for it. Figma verification: Single/Radio (node 17645:10031)
    for default/outline; Radio/.Atom (node 17645:9892) for atom.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Radio anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Label with description, unselected.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: Default'
  - title: Selected
    description: Default variant, checked.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: Selected'
  - title: With helper
    description: Description collapsed behind an expand/collapse disclosure.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: With helper'
  - title: With error
    description: Red border and error message shown.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: With error'
  - title: Outline
    description: Bordered card variant, unselected and selected states.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: Outline'
  - title: Outline with error
    description: Bordered card showing the error border colour.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: Outline with error'
  - title: Atom
    description: Icon-only radio with no copy.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: Atom'
  - title: Group
    description: Multiple default radios sharing one name, showing exclusive selection.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: Group'
  - title: Outline group
    description: Multiple outline radios sharing one name.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: Outline group'
  - title: State matrix
    description: Default/outline × unchecked/checked/helper/error combinations shown
      together.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: State matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Grouping
    description: >-
      Radios are grouped by native name, matching Figma's own note that grouping
      happens by field value/name, not a per-item checked/unchecked toggle managed
      externally. Checking one radio automatically unchecks every other Radio sharing
      its name within the same <form> (or the whole document if not in a form).
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: grouping'
  - title: Change
    description: Selecting a radio dispatches a bubbling, composed change event.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: change'
  - title: Hover
    description: >-
      The control's border and background shift to the hover tokens; on outline,
      the whole card's border colour shifts.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: hover'
  - title: Checked
    description: >-
      The control's border widens to the "selected" thickness and the inner dot
      scales in over a 160ms ease transition. On outline, the card border also switches
      to the checked colour.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: checked'
  - title: Error
    description: >-
      The control (or, on outline, the whole card) shows the error border colour
      and width; an Message renders below with the error copy. aria-invalid="true"
      is set on the native input.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: error'
  - title: Focus
    description: >-
      A dashed focus ring appears around the control on :focus-visible, using the
      shared focus-ring transition.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: focus'
  - title: Responsive behaviour
    description: >-
      default sizes to content (width: fit-content); outline stretches to fill its
      container up to a 500px max width with a 120px minimum.
    image: https://placehold.co/1280x720
    imageAlt: 'Radio: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Radio example: A set of mutually exclusive options where exactly one must
        (or can) be selected.
      label: Do
      caption: A set of mutually exclusive options where exactly one must (or can)
        be selected.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Radio example: Multiple options that can be selected independently — use
        Checkbox instead.
      label: Don't
      caption: Multiple options that can be selected independently — use Checkbox
        instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Radio example: Options that benefit from supporting description or helper
        copy alongside the label — use default or outline.
      label: Do
      caption: >-
        Options that benefit from supporting description or helper copy alongside
        the label — use default or outline.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Radio example: A binary on/off toggle rather than a choice among options
        — use Switch/toggle instead.
      label: Don't
      caption: >-
        A binary on/off toggle rather than a choice among options — use Switch/toggle
        instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Radio example: A dense, icon-only selection control with no room for copy
        — use atom.
      label: Do
      caption: A dense, icon-only selection control with no room for copy — use
        atom.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Radio example: A small, closed set of mutually exclusive options better
        suited to a compact segmented control — use Segmented control.
      label: Don't
      caption: >-
        A small, closed set of mutually exclusive options better suited to a compact
        segmented control — use Segmented control.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Radio example: A selection that should read as a bordered, tappable card
        (e.g. plan/cover options) — use outline.
      label: Do
      caption: >-
        A selection that should read as a bordered, tappable card (e.g. plan/cover
        options) — use outline.
- type: side-by-side
  heading: Content guidance
  list:
  - Keep label short and specific to the option it represents.
  - >-
    Use description for a single supporting line; switch to helper only when that
    supporting content is long enough to warrant a collapsed disclosure — never
    set both expecting them to show together.
  - >-
    Reserve error for a genuine validation message explaining what the user needs
    to do, e.g. selecting one of the options.
  - Use sentence case for labels, descriptions and error messages.
  - Use British English spelling throughout.
  - Avoid adverbs such as "simply", "just" or "easily".
  - Keep error messages actionable and specific rather than generic.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Radio example: "Please make a selection"'
      label: Do
      caption: '"Please make a selection"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Radio example: "Error: selection required"'
      label: Don't
      caption: '"Error: selection required"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Radio example: "Monthly payment"'
      label: Do
      caption: '"Monthly payment"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Radio example: "Monthly"'
      label: Don't
      caption: '"Monthly"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Radio example: "Comprehensive cover"'
      label: Do
      caption: '"Comprehensive cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Radio example: "Comprehensive"'
      label: Don't
      caption: '"Comprehensive"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    outline's border is always rendered at the "selected" (2px) thickness — hover/checked/error
    only ever change its colour, never its width, so nothing inside shifts when
    state changes.
  - >-
    helper and description are mutually exclusive in effect — setting both results
    in helper taking over the row; don't rely on description still being visible.
  - >-
    atom silently drops description, helper and error — don't set them expecting
    any visible effect.
  - >-
    Grouping by name scans the nearest <form> ancestor, or the whole document if
    there isn't one — radios with the same name outside a shared form context anywhere
    on the page will still affect each other.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: default | outline | atom
      defaultValue: default
      description: >-
        Visual style. outline wraps the row in a bordered, padded card (same shape
        as Checkbox's outline). atom is an icon-only radio with no label/description/helper/error.
    - name: checked
      options: boolean
      defaultValue: 'false'
      description: Whether this radio is selected. Reflects to an attribute.
    - name: label
      options: string
      defaultValue: '''Label'''
      description: >-
        The radio's label text. Not rendered on atom, but still used as the native
        input's aria-label.
    - name: description
      options: string
      defaultValue: ''''''
      description: A plain supporting line under the label. Not shown on atom.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed expand/collapse disclosure
        instead of a plain line. Figma never shows both description and helper at
        once — helper wins if both are set.
    - name: error
      options: string
      defaultValue: ''''''
      description: >-
        Shows a red border plus an error message below the row, via Message. Not
        available on atom.
    - name: name
      options: string
      defaultValue: ''''''
      description: >-
        Native radio group name — radios sharing a name within the same <form> (or
        document) are mutually exclusive.
    - name: value
      options: string
      defaultValue: '''on'''
      description: The native input's value.
- type: accessibility
  focusOrder:
  - >-
    The native <input type="radio"> sits in the natural tab order; each Radio in
    a group participates in the browser's native radio-group tabbing behaviour (only
    the checked radio, or the first if none is checked, is tab-stoppable within
    a group with the same name).
  keyboard:
  - key: Arrow keys
    action: Move selection between radios sharing the same name (native browser
      behaviour).
  - key: Space
    action: Selects the focused radio (native browser behaviour).
  aria:
  - >-
    aria-label — set on the native input to label (or "Radio option" if label is
    empty), since the visible label lives outside the input in a separate Input
    label.
  - >-
    aria-describedby — points at the Input label copy and/or the Message error,
    when either is present, joined as a space-separated id list. Both targets are
    the whole host element's id, since their internal description/helper text lives
    behind their own shadow boundary with no inner id to point at directly.
  - >-
    aria-invalid — "true" when error is set (and the variant supports copy), otherwise
    "false".
  - Native type="radio" semantics are used directly — no role override.
  seo:
  - >-
    Uses a real native <input type="radio">, so grouping, checked state and keyboard
    behaviour are all natively understood by assistive tech and browsers rather
    than simulated.
  - >-
    label text should describe the option on its own, since it's the only text exposed
    via aria-label when the visible label element itself sits outside the accessibility
    tree's direct reach.
- type: related-components
  items:
  - label: Checkbox
    href: /components/checkbox
    note: >-
      The equivalent control for independently selectable (non-exclusive) options;
      shares the outline card shape.
  - label: Input label
    href: /components/input-label
    note: Renders the label/description/helper copy for default and outline.
  - label: Message
    href: /components/message
    note: Renders the error copy below the row.
  - label: Segmented control
    href: /components/segmented-control
    note: >-
      An alternative, compact exclusive-choice control for a small closed set of
      options.
---
