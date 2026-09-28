---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: arrow-key/Home/End/PageUp/PageDown navigation is implemented on the parent Calendar, not this component directly — see Calendar's own keyboard interactions table.
title: Calendar day
description: >-
  Calendar day is a single day cell inside Calendar's date grid. It's a real <button
  role="gridcell">, since a WAI-ARIA grid's cells still need to be genuinely clickable
  and focusable — a button is the right native element underneath the gridcell role.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17400-2124
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Cell: the full 48×48px hit target, a native <button role="gridcell">.'
  - >-
    Dot: the visible 40×40px circle inside the cell, showing the day number and
    carrying the selected/today/range styling.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Calendar day anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: A plain enabled day.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: Default'
  - title: Today
    description: Ringed to indicate the current date.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: Today'
  - title: Selected
    description: Solid fill indicating the chosen date.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: Selected'
  - title: Range start / end / middle
    description: The three positions within a selected date range.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: Range start / end / middle'
  - title: Disabled
    description: An unavailable day, reduced opacity.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: Disabled'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Roving tabindex, owned by the parent
    description: >-
      Calendar day itself does not manage tabindex — Calendar sets tabindex-value
      on exactly one day (the currently focused one) per render, so only that day
      is reachable via Tab.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: roving tabindex, owned by the parent'
  - title: Range "snake" styling
    description: >-
      range-start/range-end/range-middle are computed by the parent calendar, including
      a live preview of the range that would result from the hovered or keyboard-focused
      day, so the visual range grows/shrinks before a second date is actually committed.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: range "snake" styling'
  - title: Hover
    description: The dot shows a subtle background fill on hover, suppressed when
      disabled.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: hover'
  - title: Today indicator
    description: >-
      today adds a visible ring around the dot, independent of whether the day is
      also selected.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: today indicator'
  - title: Disabled
    description: >-
      Opacity reduces to 0.4 and the cursor becomes not-allowed; disabled days are
      still rendered (not removed from the grid) so the month's layout stays consistent.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: disabled'
  - title: Focus ring
    description: A dashed focus ring appears on :focus-visible.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: focus ring'
  - title: Responsive behaviour
    description: Fixed 48×48px cell size; no breakpoints of its own.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar day: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Exclusively as a child cell inside Calendar's day grid — it has no standalone
    use case.
  dont:
  - >-
    Anywhere outside Calendar — its tabindex-value, selection and range state are
    all driven by the parent grid and have no meaning in isolation.
  - >-
    As a general-purpose numeric button — use a plain button or another control
    for anything not representing a calendar date.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    label should only be set when the plain day number alone isn't sufficient context
    — e.g. to announce "15, today" or similar enriched context; otherwise leave
    it unset to fall back to the plain number.
  - >-
    Keep any custom label short and specific — it replaces, rather than supplements,
    the visible day number as the accessible name.
  - >-
    Use British English date conventions in any surrounding calendar chrome (day-month-year
    ordering, month names via Intl.DateTimeFormat).
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Never set tabindex-value manually on a day expecting it to persist — Calendar
    recalculates and overwrites it on every relevant state change to maintain the
    roving-tabindex pattern.
  - >-
    disabled days remain in the grid (not removed), which is intentional — removing
    them would break the 7-column week layout and confuse the grid's row/column
    geometry for assistive technology.
  - >-
    range-middle deliberately squares off the cell's border-radius (rather than
    keeping the dot circular) to visually read as a continuous fill between the
    range's start and end.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: day
      options: number
      defaultValue: '1'
      description: The day-of-month number displayed.
    - name: label
      options: string
      defaultValue: ''''''
      description: Accessible label override; falls back to the plain day number
        if unset.
    - name: disabled
      options: boolean
      defaultValue: 'false'
      description: Marks the day unavailable/unselectable.
    - name: today
      options: boolean
      defaultValue: 'false'
      description: Marks the day as the current date (adds a ring around the dot).
    - name: selected
      options: boolean
      defaultValue: 'false'
      description: Marks the day as the single selected date.
    - name: range-start
      options: boolean
      defaultValue: 'false'
      description: Marks the day as the start of a selected range.
    - name: range-end
      options: boolean
      defaultValue: 'false'
      description: Marks the day as the end of a selected range.
    - name: range-middle
      options: boolean
      defaultValue: 'false'
      description: Marks the day as falling inside (but not at the edge of) a selected
        range.
    - name: tabindex-value
      options: number
      defaultValue: '-1'
      description: >-
        The cell's actual tabindex. Managed entirely by the parent Calendar's roving-tabindex
        logic — only one day in the whole grid is ever tabbable at a time.
- type: accessibility
  focusOrder:
  - >-
    Only the single day currently marked with tabindex-value="0" is reachable via
    Tab; all other days have tabindex="-1" and are reached via arrow-key navigation
    instead, managed by the parent Calendar.
  keyboard:
  - key: Enter / Space
    action: Selects the focused day (handled by the parent Calendar's keydown listener).
  aria:
  - >-
    role="gridcell" — applied to the underlying <button>, since the day sits inside
    Calendar's role="grid"/role="row" structure.
  - >-
    aria-selected — "true" when selected, range-start, or range-end is set, otherwise
    "false".
  - >-
    aria-current="date" — set when today is true, per the standard pattern for indicating
    "the current one" within a set.
  - aria-label — falls back to the plain day number if label is not set.
  - Native disabled attribute is used for unavailable days.
  seo:
  - >-
    Renders as a real <button> with role="gridcell", keeping the underlying control
    genuinely focusable and operable rather than a simulated, non-interactive cell
    — important for any automated agent attempting to select a date programmatically.
  - >-
    Calendar day cells are not typically indexed content for SEO purposes; the primary
    discoverability concern is ensuring assistive technology and automated tools
    can correctly interpret grid position and state via the ARIA attributes above.
- type: related-components
  items:
  - label: Calendar
    href: /components/calendar
    note: >-
      The required parent grid; owns roving tabindex, range-preview logic, and keyboard
      navigation for its day cells.
---
