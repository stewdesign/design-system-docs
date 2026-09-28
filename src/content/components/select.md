---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Select
description: >-
  Select is a custom single-selection dropdown control used wherever a native <select>
  would be, but with full control over styling and states. It composes Select option
  light-DOM children for its choices, matching Figma's Single/Dropdown component
  (node 17060:22052, internally named "Select").
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
    Input label (Input label): the label, optional description and optional collapsible
    helper text shown above the control.
  - >-
    Trigger: the button (role="combobox") that shows the current value or placeholder
    and opens/closes the listbox.
  - >-
    Value: the trigger's text content: the selected option's label, or the placeholder
    when nothing is selected.
  - >-
    Chevron (Icon): indicates open/closed state and rotates 180° when the listbox
    is open.
  - >-
    Listbox: the absolutely-positioned panel (role="listbox") containing the slotted
    Select option children, shown when open is true.
  - 'Error message (Message): shown below the control when error is set.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Select anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Label, description, closed trigger with a selected value.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: Default'
  - title: With helper
    description: Description collapsed behind a helper disclosure button.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: With helper'
  - title: With error
    description: Error message shown, trigger in error styling.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: With error'
  - title: Placeholder
    description: No value selected, placeholder text shown in the trigger.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: Placeholder'
  - title: Required
    description: required set on the trigger.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: Required'
  - title: Open
    description: Listbox expanded, showing the option list and active highlight.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: Open'
  - title: State matrix
    description: Default, helper, error and placeholder variants side by side.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: State matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Opening/closing
    description: >-
      Clicking the trigger toggles the listbox. Clicking anywhere outside the component
      (tracked via a document-level pointerdown listener) closes it. Opening sets
      the active (highlighted) option to the current value, or the first option
      if nothing is selected, and scrolls it into view.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: opening/closing'
  - title: Selecting
    description: >-
      Clicking an option, or pressing Enter/Space while it's highlighted, commits
      it as the new value, dispatches a bubbling change event, closes the listbox,
      and returns focus to the trigger.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: selecting'
  - title: Keyboard highlighting
    description: >-
      Arrow Down/Up move the highlighted option when open, or open the listbox when
      closed; Home/End jump to the first/last option. Hovering an option with the
      mouse also moves the highlight, keeping mouse and keyboard in sync.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: keyboard highlighting'
  - title: Focus stays on the trigger
    description: >-
      This follows the ARIA "select-only combobox" pattern — real focus never moves
      into the listbox. The highlighted option is only ever communicated via aria-activedescendant,
      matching how a native <select> behaves.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: focus stays on the trigger'
  - title: Hover
    description: >-
      The trigger's background and border colour both change on hover (like Text
      field), except in the error state.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: hover'
  - title: Focus
    description: >-
      Only the shared dashed focus ring appears; the trigger's border colour never
      changes on focus (like Textarea).
    image: https://placehold.co/1280x720
    imageAlt: 'Select: focus'
  - title: Error state
    description: >-
      The trigger's border switches to the error colour and width, and an Message
      with type="error" appears below the control.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: error state'
  - title: Stacking
    description: >-
      The component only raises its own z-index while its own listbox is open, so
      an earlier-in-DOM select never gets covered by a later, closed one, and vice
      versa.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: stacking'
  - title: Responsive behaviour
    description: >-
      The control has a minimum inline size of 240px on the trigger and a maximum
      inline size of 22.5rem on the host; the value text truncates with an ellipsis
      rather than wrapping, and the listbox scrolls internally past a maximum height
      of 21rem.
    image: https://placehold.co/1280x720
    imageAlt: 'Select: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A single-selection field with more options than comfortably fit in a segmented
    control or a set of radio buttons.
  - >-
    Form fields where a native-<select>-style interaction is expected, but the design
    needs custom visual states (error, hover, focus) matched to the rest of the
    design system.
  dont:
  - >-
    2-4 always-visible, closely related options — use Segmented control instead
    so all choices are visible without opening a panel.
  - >-
    Multi-select choices — Select only supports a single value; use a multi-select
    checkbox group instead.
  - >-
    A short, mutually exclusive set of options where showing all choices at once
    aids comparison — use Selector with input-type="radio" instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the label short and specific to what's being chosen (e.g. "Cover type",
    not "Please choose").
  - >-
    Use placeholder to prompt a choice ("Select an option") rather than pre-selecting
    an arbitrary first value when there's no sensible default.
  - >-
    Reserve description for information the user needs before choosing, and helper
    only when that description is long enough to be worth collapsing.
  - >-
    Write error messages that state what's needed to fix the problem, not just that
    one exists.
  - >-
    Use sentence case, not title case, for the label, description and option content.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - Avoid adverbs like "simply", "just" or "easily".
  - Avoid colons at the end of labels.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Select example: "Cover type"'
      label: Do
      caption: '"Cover type"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Select example: "Cover Type:"'
      label: Don't
      caption: '"Cover Type:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Select example: "Select an option"'
      label: Do
      caption: '"Select an option"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Select example: "Choose one"'
      label: Don't
      caption: '"Choose one"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Select example: "Please make a selection"'
      label: Do
      caption: '"Please make a selection"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Select example: "Error: no value"'
      label: Don't
      caption: '"Error: no value"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    value must match a child Select option's value exactly, or the trigger falls
    back to the placeholder even though a value string is set.
  - >-
    The component derives its displayed label from the selected option's textContent
    — keep option content simple enough that this reads correctly.
  - >-
    Don't set both error and expect the hover background change — the error trigger
    state intentionally suppresses the hover treatment.
  - >-
    Long option lists scroll inside a fixed max height rather than growing indefinitely
    — very long lists may need a search/filter pattern instead.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Label'''
      description: The field's visible label, passed to Input label.
    - name: description
      options: string
      defaultValue: ''''''
      description: Supporting text shown under the label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
    - name: placeholder
      options: string
      defaultValue: ''''''
      description: Text shown in the trigger when no value is selected.
    - name: value
      options: string
      defaultValue: ''''''
      description: >-
        The currently selected option's value, matched against child Select option
        elements.
    - name: name
      options: string
      defaultValue: ''''''
      description: Form field name.
    - name: required
      options: boolean
      defaultValue: 'false'
      description: Marks the trigger as required.
    - name: error
      options: string
      defaultValue: ''''''
      description: >-
        Error message text. When set, shows the error message and switches the trigger
        to its error styling.
    - name: open
      options: boolean
      defaultValue: 'false'
      description: Whether the listbox is currently expanded. Reflected as an attribute.
- type: accessibility
  focusOrder:
  - >-
    Select occupies a single stop in the surrounding tab order (the trigger button).
    Focus never moves into the listbox while it's open, matching native <select>
    behaviour; the component exposes a focus() method that focuses the trigger directly.
  keyboard:
  - key: Arrow down
    action: Highlights the next option, or opens the listbox if closed.
  - key: Arrow up
    action: Highlights the previous option, or opens the listbox if closed.
  - key: Home
    action: Highlights the first option (when open).
  - key: End
    action: Highlights the last option (when open).
  - key: Enter / Space
    action: Commits the highlighted option, or opens the listbox if closed.
  - key: Escape
    action: Closes the listbox (when open).
  aria:
  - >-
    role="combobox" on the trigger, with aria-haspopup="listbox" and aria-expanded
    reflecting open.
  - aria-controls on the trigger points to the listbox's id.
  - >-
    aria-activedescendant on the trigger points to the currently highlighted option's
    id, only while open.
  - >-
    aria-label on the trigger mirrors the visible label since the trigger has no
    visible text node of its own beyond the current value.
  - >-
    aria-describedby on the trigger references the label/helper description and
    the error message, when present.
  - aria-invalid="true" when error is set.
  - >-
    role="listbox" on the panel; role="option" and aria-selected on each child (see
    Select option).
  seo:
  - >-
    Uses real ARIA combobox/listbox semantics rather than a generic clickable <div>,
    so assistive technology and automated agents can identify it as a selection
    control and read its current value and options.
  - >-
    The label, description and error text are all exposed via aria-label/aria-describedby,
    giving agents and screen readers the full context without needing to parse visual
    layout.
  - >-
    Because the underlying value is presentational text rather than a native form
    field, a server-rendered fallback or hidden native <select> should be considered
    where indexable form structure is required.
- type: related-components
  items:
  - label: Select option
    href: /components/select-option
    note: The required child; represents each selectable value inside the listbox.
  - label: Segmented control
    href: /components/segmented-control
    note: For a small, always-visible set of mutually exclusive options.
  - label: Selector
    href: /components/selector
    note: >-
      For a card-style single- or multi-select choice with richer content (media,
      price, tags).
  - label: Input label
    href: /components/input-label
    note: Supplies the label/description/helper row shared across form fields.
  - label: Message
    href: /components/message
    note: Renders the error message below the control.
---
