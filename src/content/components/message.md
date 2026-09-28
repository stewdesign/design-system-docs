---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Examples: dedicated Storybook examples — no Message.stories.ts exists; the only current usages are embedded inside other components' stories (e.g. checkbox.stories.ts, textarea.stories.ts, radio.stories.ts).
#   - Behaviour: confirm whether appearance/disappearance (e.g. when a host component's error clears) is animated at the host level — Message itself has no transition or entrance styling.
#   - When not to use: name the banner/alert component once one exists.
#   - Focus order: confirm how host components associate the message with its control for assistive tech (e.g. aria-describedby) — not present in this file.
#   - ARIA: confirm whether host components (e.g. Text field) apply role="alert"/aria-live or aria-describedby when rendering an Message for an error — not present in this file; Text field gives the rendered message id="error" for that purpose but the association attribute itself lives on the host.
#   - SEO and AI discovery: confirm any landmark or live-region guidance from the host components that use it.
title: Message
description: >-
  Message is an internal primitive that pairs a semantic icon with a line of text
  to communicate an error, warning, informational note, or positive confirmation.
  It has no story of its own and is not used directly by consumers — it is composed
  inside other components, such as the error text under Text field, Textarea, Select,
  Checkbox, Radio, Input group, Date of birth, Date picker and Numerical stepper.
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
    Icon: a 16px Icon, chosen automatically from the type (alert-circle for error/warning,
    info-circle for information, check-circle for positive).
  - 'Text: the slotted message content, wrapped in a .text span (part="text").'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Message anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Error message
    description: type="error", e.g. inline validation text under Text field.
    image: https://placehold.co/1280x720
    imageAlt: 'Message: Error message'
  - title: Warning message
    description: type="warning", for a cautionary note that doesn't block submission.
    image: https://placehold.co/1280x720
    imageAlt: 'Message: Warning message'
  - title: Information message
    description: type="information", for neutral supporting context.
    image: https://placehold.co/1280x720
    imageAlt: 'Message: Information message'
  - title: Positive message
    description: type="positive", for confirming a successful action.
    image: https://placehold.co/1280x720
    imageAlt: 'Message: Positive message'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      The component is a static, non-interactive display primitive — it has no hover,
      press, loading or disabled states of its own.
    list:
    - >-
      Colour and icon are derived entirely from type: each type maps to a text colour
      token (e.g. --text-danger-primary for error) and an icon name (e.g. alert-circle,
      info-circle, check-circle).
    - >-
      Layout is inline-flex, so it sits inline with surrounding content and sizes
      to its text.
    image: https://placehold.co/1280x720
    imageAlt: 'Message: general behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Inside a form control to surface a validation error, warning, informational
    hint, or success confirmation tied to that field (this is its only current use
    in the codebase).
  - >-
    Anywhere a short, single-line, icon-plus-text status message is needed at the
    same visual weight as existing usages.
  dont:
  - >-
    As a standalone, user-facing component — it is an internal primitive with no
    story and no established API contract for direct use; compose it inside a host
    component instead.
  - >-
    For multi-line or complex feedback content — keep it to one line of text; use
    a different pattern for longer explanatory copy or dismissible banners.
  - >-
    For page- or section-level system status — use a banner/alert pattern intended
    for that scope.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the message to one concise line — the component is designed for a single
    line of text, not a paragraph.
  - >-
    State what happened and, where relevant, what the user needs to do next (e.g.
    for a validation error, say what's wrong and how to fix it).
  - >-
    Match the message to its type: only use error for something that blocks progress,
    warning for something to be aware of, information for neutral context, and positive
    for confirmation of success.
  - Use sentence case.
  - Use British English spelling.
  - >-
    Avoid vague wording — say specifically what's wrong or confirmed, not generic
    phrases like "Something went wrong".
  - >-
    Use active voice and specific verbs, consistent with the AA writing principles
    (dynamic, warm, empowering, expert).
  - Avoid exclamation marks in product copy.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Message example: "Enter a valid email address"'
      label: Do
      caption: '"Enter a valid email address"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Message example: "Error: invalid input!"'
      label: Don't
      caption: '"Error: invalid input!"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Message example: "Your changes have been saved"'
      label: Do
      caption: '"Your changes have been saved"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Message example: "Success!!"'
      label: Don't
      caption: '"Success!!"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    This is an internal primitive, not a public API — treat its props as an implementation
    detail of the host components that use it, and check those host components'
    own docs for how errors/messages are triggered.
  - The icon size is fixed at 16px and is not configurable.
  - >-
    Because it is inline-flex and un-truncated, very long text will wrap rather
    than truncate — keep messages short per the content guidance above.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: type
      options: error | warning | information | positive
      defaultValue: error
      description: Semantic tone; sets both the icon and the text/icon colour via
        design tokens.
- type: accessibility
  focusOrder:
  - >-
    Message is not focusable and has no interactive elements — it does not participate
    in tab order.
  - Not applicable — the component has no interactive elements.
  aria:
  - No ARIA roles or attributes are set by Message itself.
  seo:
  - >-
    Renders as semantic inline <span> elements with slotted text content, so the
    message text is readable in the DOM rather than hidden in a background image
    or pseudo-element.
- type: related-components
  items:
  - label: Icon
    href: /components/icon
    note: Supplies the semantic icon shown alongside the message text.
  - label: Text field
    href: /components/text-field
    note: Form components that compose Message to show their error text.
  - label: Textarea
    href: /components/textarea
    note: Form components that compose Message to show their error text.
  - label: Select
    href: /components/select
    note: Form components that compose Message to show their error text.
  - label: Checkbox
    href: /components/checkbox
    note: Form components that compose Message to show their error text.
  - label: Radio
    href: /components/radio
    note: Form components that compose Message to show their error text.
  - label: Input group
    href: /components/input-group
    note: Form components that compose Message to show their error text.
  - label: Date of birth
    href: /components/date-of-birth
    note: Form components that compose Message to show their error text.
  - label: Date picker
    href: /components/date-picker
    note: Form components that compose Message to show their error text.
  - label: Numerical stepper
    href: /components/numerical-stepper
    note: Form components that compose Message to show their error text.
---
