---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: not covered in source or stories — no guidance found for alternative components.
#   - Keyboard interactions: arrow-key/Home/End/PageUp/PageDown navigation within the calendar grid is documented on Calendar, not in this component's own source — see the Calendar documentation for popover-content keyboard behaviour.
#   - SEO and AI discovery: not covered in source or stories.
title: Date picker
description: >-
  Date picker is a text-entry date field paired with a calendar popover, used for
  choosing a single date or a start/end date range. Each field is a real text input
  — typing dd/mm/yyyy directly works — alongside a toggle button that opens an Calendar
  popover for point-and-click selection.
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
    Label (Input label): the field's label, with optional description or collapsed
    helper disclosure.
  - >-
    Input shell (part="control"): a bordered container holding the text input and
    toggle button.
  - 'Text input: accepts a typed dd/mm/yyyy value directly.'
  - >-
    Toggle button (part="toggle"): a calendar-icon button that opens/closes the
    popover for that field.
  - 'Popover (part="popover"): a role="dialog" surface containing an Calendar.'
  - >-
    Range fields: in range mode, a start field and an end field are rendered side
    by side, each with its own toggle and popover.
  - 'Error message (Message): shown below the field(s) when error is set.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Date picker anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Single
    description: One date field with a calendar popover.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: Single'
  - title: Range
    description: Start and end date fields, each with its own popover.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: Range'
  - title: Error
    description: Error state with an Message shown below the field.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: Error'
  - title: Range error
    description: Error state applied to the range fields.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: Range error'
  - title: With min and max
    description: >-
      A date field constrained to a range, e.g. not backdated and within the next
      90 days.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: With min and max'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Typed entry
    description: >-
      Each field is a real <input type="text"> with inputmode="numeric" and placeholder
      dd/mm/yyyy; a valid typed value commits on change and fires input/change events
      on the component.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: typed entry'
  - title: Toggle button
    description: >-
      Clicking the calendar icon opens the popover for that field (aria-haspopup="dialog",
      aria-expanded reflects state); clicking again while open for the same field
      closes it.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: toggle button'
  - title: Popover
    description: >-
      Rendered with role="dialog" and kept in the DOM, toggled with the inert attribute
      rather than hidden so its entrance transition (opacity + translateY + scale,
      260ms) can play. Escape closes it and returns focus to the toggle button that
      opened it. A pointerdown outside the whole component also closes it.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: popover'
  - title: Range selection
    description: >-
      A real two-click flow — the first day picked becomes start and the popover
      stays open, now targeting end; the second click becomes end, swapping the
      two if it lands before start.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: range selection'
  - title: Single selection
    description: >-
      Picking a day in the calendar sets value, closes the popover, and returns
      focus to the toggle button.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: single selection'
  - title: Error state
    description: >-
      Setting error switches the input shell to its error border and renders an
      Message of type="error" below the field(s), associated via aria-describedby.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: error state'
  - title: Events
    description: >-
      input and change (native Event, bubbling and composed) fire whenever value,
      start or end changes, from either typed entry or calendar selection.
    image: https://placehold.co/1280x720
    imageAlt: 'Date picker: events'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - Collecting a single date, e.g. a date of birth or policy start date.
  - Collecting a date range, e.g. a period of cover exclusion.
  - >-
    Where users may want to either type a date directly or pick it visually from
    a calendar.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Write the label to describe the date being collected, e.g. "Select a date" or
    "Select a date range".
  - >-
    Use description to explain any constraint on the date, e.g. a backdating restriction.
  - >-
    Use start-label/end-label to distinguish the two fields in range mode, e.g.
    "Start date" and "End date".
  - >-
    Write error messages that tell the user what to do, e.g. "Please select an end
    date".
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    In range mode, only one popover can be open at a time (tied to activeField)
    — opening the end field's popover closes the start field's, and vice versa.
  - >-
    The text input and the calendar popover stay in sync — a typed value updates
    the calendar, and a calendar selection updates the typed value.
  - >-
    Setting both min and max constrains the calendar; the text input itself does
    not validate typed dates against these bounds beyond what parseDisplayDate can
    parse.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: mode
      options: single | range
      defaultValue: single
      description: Whether the picker collects one date or a start/end range.
    - name: label
      options: string
      defaultValue: '''Label'''
      description: Label text for the field (single mode) or the group.
    - name: description
      options: string
      defaultValue: ''''''
      description: Supporting description text rendered via Input label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
    - name: error
      options: string
      defaultValue: ''''''
      description: Error message; when set, shows the error state and an Message.
    - name: start-label
      options: string
      defaultValue: '''Start date'''
      description: Label for the start field in range mode.
    - name: end-label
      options: string
      defaultValue: '''End date'''
      description: Label for the end field in range mode.
    - name: name
      options: string
      defaultValue: ''''''
      description: Base name for the underlying input(s); range mode suffixes it
        with -start/-end.
    - name: value
      options: string (ISO date)
      defaultValue: ''''''
      description: Selected date in single mode.
    - name: start
      options: string (ISO date)
      defaultValue: ''''''
      description: Selected start date in range mode.
    - name: end
      options: string (ISO date)
      defaultValue: ''''''
      description: Selected end date in range mode.
    - name: min
      options: string (ISO date)
      defaultValue: ''''''
      description: Earliest selectable date, passed through to Calendar.
    - name: max
      options: string (ISO date)
      defaultValue: ''''''
      description: Latest selectable date, passed through to Calendar.
    - name: open
      options: boolean (reflected)
      defaultValue: 'false'
      description: Whether a popover is currently open.
- type: accessibility
  focusOrder:
  - >-
    Each field's text input and toggle button sit in the natural tab order. Selecting
    a date in the popover (single mode, or the second click in range mode) closes
    the popover and returns focus to the toggle button that opened it. Escape does
    the same.
  keyboard:
  - key: Escape
    action: Closes the open popover and returns focus to the toggle button that
      opened it.
  aria:
  - >-
    aria-haspopup="dialog" and aria-expanded on each toggle button, reflecting whether
    its popover is open.
  - role="dialog" and aria-label="Choose a date" on the popover.
  - aria-label on each text input, set to the field's label.
  - >-
    aria-describedby on each text input, referencing the description/helper and
    error message ids.
  - aria-invalid="true"/"false" on each text input, reflecting the error state.
- type: related-components
  items:
  - label: Calendar
    href: /components/calendar
    note: The calendar grid rendered inside the popover.
  - label: Input label
    href: /components/input-label
    note: Supplies the label, description and helper disclosure.
  - label: Message
    href: /components/message
    note: Renders the error message.
  - label: Icon
    href: /components/icon
    note: Supplies the calendar icon on the toggle button.
---
