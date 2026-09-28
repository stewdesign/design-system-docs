---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Examples: no story file exists yet for this component — examples above are inferred from source behaviour and should be verified against real Storybook stories once written.
#   - Things to consider: confirm whether a dedicated Date picker trigger component exists or is planned.
title: Calendar
description: >-
  Calendar is a full month-view date picker grid, supporting both single-date and
  date-range selection. It's built as a genuine WAI-ARIA grid (not a plain table
  of buttons), with roving-tabindex arrow-key navigation between days.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17421-19437
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
    Header: month/year label (e.g. "September 2026") with previous/next month navigation
    buttons.
  - >-
    Weekday row: single-letter weekday headers (role="columnheader"), localised
    via Intl.DateTimeFormat.
  - >-
    Day grid: up to six weeks of Calendar day cells, with empty placeholder cells
    for days outside the current month.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Calendar anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Single-date selection
    description: mode="single", browsing and picking one date.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: Single-date selection'
  - title: Range selection
    description: mode="range", showing the live "snake" preview while picking the
      end date.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: Range selection'
  - title: Constrained range
    description: min/max set to disable dates outside a valid window.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: Constrained range'
- type: two-col
  heading: Behaviour and states
  items:
  - title: WAI-ARIA grid navigation
    description: >-
      Arrow keys move a roving tabindex between days (Up/Down ±7 days, Left/Right
      ±1 day, Home/End to the current week's edges, PageUp/PageDown ±1 month, Shift+PageUp/PageDown
      ±12 months). Only the currently active day is ever in the tab order, the same
      pattern a native <select> listbox uses.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: wai-aria grid navigation'
  - title: Live-announced month heading
    description: >-
      The month/year heading is aria-live="polite", since focus stays on the day
      grid while paging — screen reader users hear the month change without focus
      moving away from the grid.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: live-announced month heading'
  - title: Range "snake" preview
    description: >-
      While range-start is set and range-end isn't, hovering or keyboard-focusing
      a candidate end day shows a live preview of the range that selecting it would
      produce — low/high-sorted so hovering *before* the start date also works.
      Keyboard focus and mouse hover both drive this; whichever is currently live
      takes priority.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: range "snake" preview'
  - title: Selecting a date
    description: >-
      Clicking or pressing Enter/Space on an enabled day moves focus there and dispatches
      a bubbling, composed select-date custom event with detail: { date: <ISO string>
      }.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: selecting a date'
  - title: Disabled range
    description: >-
      Any day before min or after max renders disabled and cannot be selected via
      click or keyboard.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: disabled range'
  - title: Month navigation
    description: >-
      Previous/next month buttons shift the displayed month without changing the
      current selection.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: month navigation'
  - title: Responsive behaviour
    description: >-
      The grid has a fixed cell size (48px) and sizes to fit its content (inline-size:
      fit-content) — no responsive breakpoints of its own; a container may need
      to handle horizontal scrolling or scaling on very narrow viewports.
    image: https://placehold.co/1280x720
    imageAlt: 'Calendar: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Picking a single date visually, especially when browsing nearby dates helps
    (e.g. choosing an appointment or start date).
  - Picking a date range (mode="range"), e.g. a trip start/end or a cover period.
  - >-
    Constraining selection to a valid window via min/max (e.g. no dates in the past).
  dont:
  - >-
    Capturing a date of birth — use Date of birth's typed-entry pattern instead,
    since typing three known numbers is faster and more accessible than browsing
    a calendar for a date decades in the past.
  - >-
    A lightweight, low-stakes date entry where a plain text field with format guidance
    is sufficient.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    No free-text content is authored directly on this component — month/weekday
    labels are generated via Intl.DateTimeFormat from the browser's locale, not
    hand-authored strings.
  - >-
    If wrapping the calendar in a labelled field (e.g. inside a popover triggered
    from a text input), ensure that triggering control's own label clearly states
    what date is being picked and why.
  - >-
    Use British English/UK date conventions for any surrounding labels (day-month-year
    ordering).
  - >-
    Keep any accompanying instructional text (e.g. "Select your preferred appointment
    date") concise and in sentence case.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The calendar always renders six weeks (42 cells) per month view, with empty
    placeholder cells for days outside the current month — layout height stays constant
    across months regardless of how many weeks the actual month spans.
  - >-
    min/max only disable dates for selection; they don't prevent navigating the
    header to a month entirely outside that range — a consumer navigating far past
    the valid window will see an all-disabled month.
  - >-
    The component itself does not manage a text-input trigger or popover — it's
    the calendar surface only; a full "date picker" experience (input + popover
    + this calendar) needs to be composed by the consumer.
  - >-
    select-date fires on every valid selection, including repeated selection of
    the same date in range mode when re-clicking a start date before an end is chosen
    — check integration logic accounts for this.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: mode
      options: single | range
      defaultValue: single
      description: Whether the calendar selects one date or a start/end range.
    - name: value
      options: string (ISO yyyy-mm-dd)
      defaultValue: ''''''
      description: The selected date, for mode="single".
    - name: range-start
      options: string (ISO yyyy-mm-dd)
      defaultValue: ''''''
      description: The selected range's start date, for mode="range".
    - name: range-end
      options: string (ISO yyyy-mm-dd)
      defaultValue: ''''''
      description: The selected range's end date, for mode="range".
    - name: min
      options: string (ISO yyyy-mm-dd)
      defaultValue: ''''''
      description: Earliest selectable date; earlier dates render disabled.
    - name: max
      options: string (ISO yyyy-mm-dd)
      defaultValue: ''''''
      description: Latest selectable date; later dates render disabled.
- type: accessibility
  focusOrder:
  - >-
    Only the single day currently focused (tracked internally as focusedIso) has
    tabindex="0"; every other day has tabindex="-1". Tab moves focus into and out
    of the grid as one stop; arrow keys move focus between days within the grid
    without changing the tab order stop itself. The previous/next month buttons
    and the day grid are separate, ordered tab stops.
  keyboard:
  - key: Arrow Left / Right
    action: Moves focus one day earlier/later.
  - key: Arrow Up / Down
    action: Moves focus one week earlier/later (±7 days).
  - key: Home
    action: Moves focus to the start of the current week.
  - key: End
    action: Moves focus to the end of the current week.
  - key: Page Up
    action: Moves focus back one month (same day-of-month).
  - key: Page Down
    action: Moves focus forward one month (same day-of-month).
  - key: Shift+Page Up
    action: Moves focus back one year.
  - key: Shift+Page Down
    action: Moves focus forward one year.
  - key: Enter / Space
    action: Selects the focused day, if not disabled.
  aria:
  - >-
    The day grid carries role="grid" with an aria-label set to the current month/year.
  - >-
    Each week is a role="row"; each weekday header is role="columnheader" with an
    aria-label for the full weekday name (even though only its first letter is shown
    visually).
  - >-
    Each day is a role="gridcell" (see Calendar day), with aria-selected/aria-current="date"
    reflecting selection and "today" state.
  - >-
    The month/year heading is aria-live="polite", announcing month changes to screen
    reader users without moving focus away from the grid.
  - >-
    Previous/next month buttons carry aria-label="Previous month"/aria-label="Next
    month".
  seo:
  - >-
    Uses a genuine WAI-ARIA grid pattern (role="grid"/row/gridcell) rather than
    a plain table of buttons, so assistive technology and any automated agent can
    navigate it using standard grid conventions.
  - >-
    Month/weekday labels are locale-aware (Intl.DateTimeFormat), so an AI agent
    or crawler reading rendered text sees real, correctly localised month and day
    names rather than hardcoded English strings — useful in internationalised deployments.
  - >-
    Because selection is communicated via a custom select-date event rather than
    a native form control's value, any automated agent driving this component programmatically
    should trigger a real click/keyboard interaction rather than only setting the
    value attribute, to ensure the event fires as expected.
- type: related-components
  items:
  - label: Calendar day
    href: /components/calendar-day
    note: The individual day cell rendered inside this component's grid.
  - label: Date of birth
    href: /components/date-of-birth
    note: The typed, three-segment alternative for date-of-birth entry specifically.
  - label: Icon
    href: /components/icon
    note: Supplies the previous/next month navigation icons.
---
