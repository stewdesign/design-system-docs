---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Date of birth
description: >-
  Date of birth is a three-segment (day/month/year) text-entry pattern for capturing
  a date of birth. It is typed, not picked — there is no calendar popover — since
  date-of-birth entry is fastest and most accessible as three plain numeric fields.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17153-2361
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
    Group label: an Input label showing label, description and/or helper for the
    whole group.
  - 'Day field: a plain bordered numeric input, 2-character max, placeholder "DD".'
  - 'Month field: a plain bordered numeric input, 2-character max, placeholder "MM".'
  - 'Year field: a plain bordered numeric input, 4-character max, placeholder "YYYY".'
  - >-
    Error message (optional): rendered via Message below the fields when error is
    set.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Date of birth anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Three empty fields with placeholders and example description.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: Default'
  - title: Filled
    description: A complete, valid date entered.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: Filled'
  - title: Error - missing value
    description: Only the empty segment reddened, with a message.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: Error - missing value'
  - title: Error - age limit
    description: All three segments reddened, with a message explaining the age
      restriction.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: Error - age limit'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Two Figma error variants, one mechanism
    description: >-
      "Missing value" reddens just the empty segment; "Age limit" reddens all three
      (the values are individually fine, the combination isn't). Rather than inferring
      this from emptiness — fragile, since the static mock's placeholders don't
      distinguish empty from filled — the three *-error properties let the consumer
      say explicitly which segment(s) are invalid; leaving them all unset while
      error is set covers the "all three" age-limit case automatically.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: two figma error variants, one mechanism'
  - title: Combined value
    description: >-
      Reading .value returns the ISO yyyy-mm-dd string once all three segments form
      a real, valid date — otherwise it returns an empty string. Uses the same parseDisplayDate
      utility built for Date picker.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: combined value'
  - title: Numeric input mode
    description: Each field sets inputmode="numeric" to bring up a numeric keypad
      on mobile.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: numeric input mode'
  - title: Events
    description: >-
      Fires a bubbling input event on every keystroke in any segment, and a bubbling
      change event when a segment loses focus after changing.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: events'
  - title: Focus ring
    description: A dashed focus ring appears around whichever segment currently
      has focus.
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: focus ring'
  - title: Responsive behaviour
    description: >-
      Fixed maximum width (16rem); the three fields sit in a fixed-ratio grid (1fr
      1fr 1.25fr, giving the year field slightly more room for its four digits).
    image: https://placehold.co/1280x720
    imageAlt: 'Date of birth: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Capturing a user's date of birth in a form, especially where quick, precise
    typed entry is preferable to picking from a calendar.
  - Any context where Figma's Pattern/Date Of Birth has been specified.
  dont:
  - >-
    Picking an arbitrary future or past date (e.g. an appointment date) where visually
    browsing a calendar helps — use Calendar/a date-picker pattern instead.
  - >-
    A single combined date field — this pattern is specifically three separate segments,
    not one text field.
- type: side-by-side
  heading: Content guidance
  list:
  - Keep the group label direct and specific, e.g. "Enter your date of birth".
  - >-
    Use description to show an example format (e.g. "For example 20/4/1980") so
    users understand the expected order without extra instruction.
  - >-
    Write the error message to describe the actual problem — a missing value vs.
    an age limit issue are different problems and should read differently even though
    this component renders them with the same string.
  - Use sentence case throughout.
  - >-
    Use British English spelling and day-month-year ordering, consistent with UK
    date conventions.
  - >-
    Avoid the adverb "simply" or similar language in instructions — describe the
    format plainly instead.
  - >-
    For product/age-limit exclusions, use "not" rather than contractions like "isn't"
    for clarity, e.g. "You must not be under 18 to apply."
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Date of birth example: "Enter your date of birth" / "For example
        20/4/1980"'
      label: Do
      caption: '"Enter your date of birth" / "For example 20/4/1980"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Date of birth example: "DOB:"'
      label: Don't
      caption: '"DOB:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Date of birth example: "Please enter a valid year"'
      label: Do
      caption: '"Please enter a valid year"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Date of birth example: "Error"'
      label: Don't
      caption: '"Error"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    aria-describedby can only target the whole Input label host, since its description/helper
    text lives behind its own shadow boundary — same trade-off as Checkbox and Text
    field.
  - >-
    .value only returns a non-empty result once all three segments combine into
    a genuinely valid date — don't rely on any single segment's value alone to determine
    completeness.
  - >-
    The component does not itself enforce an age limit or valid calendar-day/month
    range (e.g. "31" for February) — validation logic and the resulting error/*-error
    state must be supplied by the consumer.
  - >-
    The year field allows up to 4 digits but does not restrict to a sensible year
    range on its own.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Enter your date of birth'''
      description: Group label text.
    - name: description
      options: string
      defaultValue: '''For example 20/4/1980'''
      description: Plain supporting line under the label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
    - name: error
      options: string
      defaultValue: ''''''
      description: Error message shown below the fields.
    - name: name
      options: string
      defaultValue: ''''''
      description: Base name for the three native inputs; each is suffixed (-day,
        -month, -year).
    - name: day / month / year
      options: string
      defaultValue: ''''''
      description: The three segment values.
    - name: day-error / month-error / year-error
      options: boolean
      defaultValue: 'false'
      description: >-
        Marks which specific segment(s) should render red when error is set. Leaving
        all three unset while error is set defaults to reddening all three.
- type: accessibility
  focusOrder:
  - >-
    Each of the three native inputs (day, month, year) receives focus in normal
    left-to-right tab order at their position on the page.
  keyboard:
  - key: Tab / Shift+Tab
    action: >-
      Moves focus between the day, month and year fields, and to/from surrounding
      content.
  - key: Number keys
    action: Enters digits into the focused field (native text input behaviour).
  aria:
  - >-
    The three-field wrapper carries role="group", aria-labelledby pointing at the
    group label, and aria-describedby pointing at the error message when present.
  - >-
    Each individual field carries its own aria-label (e.g. "Day", "Month", "Year")
    and aria-invalid reflecting its specific error state.
  - >-
    aria-invalid per field is computed from both the shared error and that field's
    own *-error flag — a field is only marked invalid if either no specific segment
    was flagged (defaulting to "all invalid") or it was explicitly flagged itself.
  seo:
  - >-
    Uses real <input type="text" inputmode="numeric"> elements with individual aria-labels,
    so an automated form-filling tool or AI agent can identify and fill each segment
    distinctly rather than treating the group as one opaque control.
  - >-
    Because there's no native <input type="date"> involved, any automated agent
    relying on standard date-input semantics should instead read the three labelled
    segments individually.
- type: related-components
  items:
  - label: Calendar
    href: /components/calendar
    note: >-
      For picking a date visually rather than typing it, when that's the more appropriate
      interaction (e.g. future appointment dates).
  - label: Input label
    href: /components/input-label
    note: Renders the group's label/description/helper text.
  - label: Message
    href: /components/message
    note: Renders the error message shown below the fields.
---
