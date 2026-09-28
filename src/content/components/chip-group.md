---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Things to consider: confirm dynamic chip insertion is fully supported.
#   - Things to consider: verify behaviour when toggling multiple after chips are already selected.
title: Chip group
description: >-
  Chip group wraps a row (or grid) of Chip elements with an optional label header,
  and manages selection for its choice-variant chips — exclusively by default (like
  a radio group), or independently when multiple is set.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=14003-23433
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
    Header (optional): an Input label showing label, description and/or helper,
    shown only when label is set.
  - 'Group: the container for real Chip elements nested in the default slot.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Chip group anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: With label
    description: Exclusive single-select choice chips under a labelled header.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: With label'
  - title: Multiple selection
    description: Independent multi-select choice chips.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: Multiple selection'
  - title: Group layouts
    description: inline and grid layouts shown together, mixing chip variants.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: Group layouts'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Selection management for choice chips only
    description: >-
      The group listens for chip-select events and manages selected on its choice-variant
      children — filter, assist and input chips are untouched and keep whatever
      the consumer sets on them directly.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: selection management for choice chips only'
  - title: Exclusive by default
    description: >-
      Selecting one choice chip moves the selection there and deselects any other
      choice chip in the group, same as a radio group.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: exclusive by default'
  - title: multiple
    description: >-
      Switches to independent toggles — each choice chip selects/deselects on its
      own, any combination allowed.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: multiple'
  - title: Layout
    description: >-
      inline wraps chips in a flexible row with consistent gaps; grid arranges them
      using CSS grid with columns fitted to content.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: layout'
  - title: Responsive behaviour
    description: >-
      Chips wrap naturally in inline layout as space allows; grid layout reflows
      its column count based on available width.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip group: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A set of mutually exclusive filter or choice options presented as chips rather
    than radio buttons.
  - >-
    A multi-select set of options where multiple is more appropriate than a checkbox
    list (e.g. tag-like filters).
  - >-
    Grouping filter or assist chips visually, even though the group doesn't manage
    their selection state directly.
  dont:
  - >-
    A single standalone chip with no group semantics — use Chip directly; a chip
    outside a group is inert on click.
  - >-
    Removable tags representing already-applied selections — while input-variant
    chips can sit inside a group visually, the group does not manage their removal;
    handle chip-remove events directly.
  - >-
    Traditional form fields needing native validation/required-field semantics —
    consider Checkbox/Radio instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the group label short and describe the category of choice being offered
    (e.g. "Cover level"), not an instruction.
  - >-
    Use description for a brief supporting line (e.g. "Choose one that suits you"
    or "Pick as many as you'd like" for multiple groups).
  - >-
    Chip contents themselves should follow Chip's own guidance — short, specific
    values.
  - Use sentence case for the label and description.
  - Use British English spelling.
  - >-
    For a multiple group, make the description explicit that more than one can be
    chosen, to set the right expectation.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip group example: "Cover level" / "Choose one that suits you"'
      label: Do
      caption: '"Cover level" / "Choose one that suits you"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip group example: "Options"'
      label: Don't
      caption: '"Options"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip group example: "Extras" / "Pick as many as you''d like"'
      label: Do
      caption: '"Extras" / "Pick as many as you''d like"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip group example: "Select extras (multi)"'
      label: Don't
      caption: '"Select extras (multi)"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Only choice-variant chips participate in the group's selection management —
    mixing filter/assist/input chips into the same group is visually fine but won't
    get exclusive/multiple selection behaviour applied to them.
  - >-
    The group reads its children via querySelectorAll('Chip') on the light DOM,
    not a <slot> assignment check — dynamically adding/removing chips after initial
    render should still work, but verify behaviour if chips are added asynchronously.
  - >-
    Switching multiple off at runtime doesn't automatically resolve multiple existing
    selections down to one — check actual behaviour before relying on this for a
    live toggle.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: ''''''
      description: Group label text. Header row is hidden entirely if empty.
    - name: description
      options: string
      defaultValue: ''''''
      description: Plain supporting line under the label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
    - name: layout
      options: inline | grid
      defaultValue: inline
      description: >-
        inline wraps chips in a flexible row; grid arranges them in a fitted grid
        of columns.
    - name: multiple
      options: boolean
      defaultValue: 'false'
      description: >-
        Allows independent multi-select of choice chips. Default is exclusive, single-select
        (radio-like).
- type: accessibility
  focusOrder:
  - >-
    Chips inside the group receive focus in normal tab order, following their DOM
    order (which visually matches the chosen layout).
  keyboard:
  - key: Tab / Shift+Tab
    action: Moves focus between chips in the group.
  - key: Enter / Space
    action: >-
      Activates the focused chip (native <button> behaviour, toggling selection
      for choice/filter/assist, or removing for input).
  aria:
  - >-
    The group container carries role="group" and, when label is set, aria-labelledby
    pointing at the label element — giving assistive technology a clear grouping
    and name for the set of chips.
  - Individual chip semantics (aria-pressed, etc.) come from Chip itself.
  seo:
  - >-
    The role="group" with aria-labelledby helps assistive technology and any automated
    agent understand that the chips form a single related set, not independent controls.
  - >-
    Ensure the group's label is descriptive enough on its own, since it's the only
    textual context tying the chips together for anyone not visually scanning the
    layout.
- type: related-components
  items:
  - label: Chip
    href: /components/chip
    note: The individual chip component nested inside the group.
  - label: Input label
    href: /components/input-label
    note: Renders the group's label/description/helper header.
  - label: Checkbox
    href: /components/checkbox
    note: Alternative selection patterns for more traditional form contexts.
  - label: Radio
    href: /components/radio
    note: Alternative selection patterns for more traditional form contexts.
---
