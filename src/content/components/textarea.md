---
# Gaps from the source doc (TODOs), for review:
#   - Things to consider: confirm whether the label should also visually indicate error state, since Input label supports an error property that Textarea does not currently pass through.
title: Textarea
description: >-
  Textarea is a multi-line text input for longer free-text content, such as comments
  or descriptions. It pairs a native <textarea> with the shared Input label (label/description/helper)
  and Message (error) primitives also used by Text field, so labelling and error
  presentation stay consistent across text inputs.
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
  - 'Label (Input label): bold label line, required for every instance.'
  - >-
    Description or helper: at most one of a static description line or the helper
    disclosure button renders beneath the label; helper, when set, always wins over
    description.
  - >-
    Control shell: the bordered container around the textarea, showing hover, focus
    and error states.
  - 'Textarea: the native, vertically resizable multi-line input.'
  - 'Error message (Message): appears beneath the control shell when error is set.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Textarea anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default textarea
    description: Label and description, empty value.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: Default textarea'
  - title: Textarea with helper
    description: >-
      Description collapsed behind a helper disclosure button instead of shown as
      a plain line.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: Textarea with helper'
  - title: Textarea with error
    description: Error border and Message shown beneath the control.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: Textarea with error'
  - title: Textarea with value
    description: Pre-filled with example content.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: Textarea with value'
  - title: Required textarea
    description: required set.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: Required textarea'
  - title: State matrix
    description: Default, with helper, with error and with value shown side by side.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: State matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Hover
    description: >-
      Only the control shell's background changes (--surface-inputs-hover); the
      border colour never changes. This differs from Text field, which changes both.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: hover'
  - title: Focus
    description: >-
      A dashed focus ring appears around the control shell (focus-within); as with
      hover, the border colour itself never changes.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: focus'
  - title: Error
    description: >-
      The control shell's border width and colour switch to the error tokens, and
      an Message with an alert icon renders beneath the control with the error text.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: error'
  - title: Resize
    description: >-
      The textarea uses the native resize: vertical affordance — there is no custom
      resize handle icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: resize'
  - title: Value updates
    description: >-
      input and change events update value internally and are re-dispatched (bubbling,
      composed) so consumers can listen on the host element.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: value updates'
  - title: Sizing
    description: >-
      The host has a minimum inline size of 15rem and a maximum of 22.5rem (exposed
      as --aa-textarea-max-inline-size); the control shell has a minimum block size
      of 96px.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: sizing'
  - title: Focus delegation
    description: Calling .focus() on the host focuses the inner <textarea> directly.
    image: https://placehold.co/1280x720
    imageAlt: 'Textarea: focus delegation'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Collecting longer free-text input, such as a comment, description, or explanation,
    where a single-line field would be too short.
  - >-
    Any form field where the expected answer could reasonably run to multiple lines
    or sentences.
  dont:
  - A single line of text, e.g. a name or reference number — use Text field instead.
  - A fixed set of options — use a select, radio group, or checkbox group instead.
- type: side-by-side
  heading: Content guidance
  list:
  - Keep the label short, direct and in sentence case so nouns are easy to spot.
  - >-
    Use description for a single static supporting line; use helper instead when
    the supporting text is long enough to warrant a collapsed disclosure.
  - >-
    Only set error to a message that tells the user what to do to fix the problem,
    not just that a problem exists.
  - Mark a field required only when it is genuinely mandatory to submit the form.
  - Use sentence case for the label, and avoid colons at the end of it.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - >-
    Avoid adverbs like "simply", "just" or "easily" — what feels straightforward
    to one person may not be to another.
  - >-
    Use the Harvard comma, not the Oxford comma, in any list within description
    or helper text.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Textarea example: "Tell us what happened"'
      label: Do
      caption: '"Tell us what happened"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Textarea example: "Simply describe what happened:"'
      label: Don't
      caption: '"Simply describe what happened:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Textarea example: "Enter a value to continue"'
      label: Do
      caption: '"Enter a value to continue"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Textarea example: "You couldn''t continue without entering a value"'
      label: Don't
      caption: '"You couldn''t continue without entering a value"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Textarea example: "Additional details (optional)"'
      label: Do
      caption: '"Additional details (optional)"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Textarea example: "Additional Details"'
      label: Don't
      caption: '"Additional Details"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Setting both description and helper does not stack them — only helper renders,
    since Figma never shows both together.
  - >-
    The component does not truncate or limit the value length itself — apply any
    character limit and its messaging separately.
  - >-
    aria-describedby can only target the whole Input label host, not an inner element,
    since its description/helper text lives behind its own shadow boundary.
  - >-
    The label passed to Input label does not receive the error state — only the
    Message beneath the control communicates the error visually and via text;
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Label'''
      description: The label text above the control.
    - name: description
      options: string
      defaultValue: ''''''
      description: Static supporting text shown under the label, unless helper is
        also set.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line. Takes priority over description when both are set.
    - name: error
      options: string
      defaultValue: ''''''
      description: >-
        Error message text. When set, renders an Message beneath the control and
        applies the error border style.
    - name: required
      options: boolean
      defaultValue: 'false'
      description: Marks the native <textarea> as required.
    - name: name
      options: string
      defaultValue: ''''''
      description: Native name attribute, applied only when non-empty.
    - name: value
      options: string
      defaultValue: ''''''
      description: The current textarea value.
- type: accessibility
  focusOrder:
  - >-
    Textarea participates in the natural tab order via its native <textarea> element,
    in the position the host occupies in the DOM.
  keyboard:
  - key: Tab
    action: Moves focus into or out of the textarea in document order.
  - key: Any character key
    action: Inserts text at the cursor position (native <textarea> behaviour).
  - key: Enter
    action: Inserts a new line (native <textarea> behaviour).
  aria:
  - aria-label — set to the label value on the native <textarea>.
  - >-
    aria-describedby — points at the Input label host (when description or helper
    is set) and/or the error message element id, space-separated.
  - aria-invalid — set to "true" when error is set, "false" otherwise.
  - required — native HTML attribute, applied when required is true.
  seo:
  - >-
    Renders a real <label>-wrapped native <textarea>, so semantics and form association
    are native rather than simulated.
  - >-
    The visible label and aria-label should state what content is expected, since
    a generic label like "Comments" carries less meaning out of context for assistive
    tech or AI agents parsing the page than a specific one.
- type: related-components
  items:
  - label: Text field
    href: /components/text-field
    note: >-
      The single-line equivalent, sharing the same label/description/helper/error
      primitives.
  - label: Input label
    href: /components/input-label
    note: Supplies the label, description and helper disclosure above the control.
  - label: Message
    href: /components/message
    note: Displays the error text beneath the control.
---
