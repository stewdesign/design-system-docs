---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: name the multi-line/textarea equivalent, if one exists in this system.
#   - SEO and AI discovery: confirm whether this component is expected to appear inside a <form> landmark or with any additional metadata for SEO purposes.
title: Text field
description: >-
  Text field is the single control for free-text entry across the design system,
  covering plain text, email, telephone, search and password inputs. It pairs a
  label, optional description/helper text and error messaging with a native <input>,
  so the same accessible structure applies to every text-entry field regardless
  of type.
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
    Label (Input label): rendered above the control, along with the optional description/helper
    text.
  - >-
    Prefix slot (slot="prefix"): optional leading content (e.g. a currency symbol
    or dialling code) shown before the input, separated by a divider.
  - >-
    Input: the native <input> element; its type switches between text, email, tel,
    search and password.
  - >-
    Trailing icon slot (slot="icon"): optional icon shown after the input. Not available
    on type="password".
  - >-
    Password toggle: for type="password" only, a built-in show/hide button replaces
    the icon slot position.
  - 'Error message (Message): shown below the control when error is set.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Text field anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Label only, no description, helper, error or icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: Default'
  - title: With description
    description: A plain supporting line under the label.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: With description'
  - title: With helper
    description: Supporting text collapsed behind a disclosure toggle.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: With helper'
  - title: Error
    description: Error-coloured border and message shown below the control.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: Error'
  - title: With trailing icon
    description: An Icon slotted after the input.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: With trailing icon'
  - title: With prefix
    description: A currency symbol (e.g. "£") before the input, for an amount field.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: With prefix'
  - title: Filled value
    description: Pre-populated input value.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: Filled value'
  - title: Password
    description: type="password" with the built-in show/hide toggle.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: Password'
  - title: Password error
    description: Password field combined with an error message.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: Password error'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Focus
    description: >-
      The control shell shows a dashed focus ring (::after), positioned behind the
      shell in its own stacking context, when the inner input has focus (:focus-within).
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: focus'
  - title: Hover
    description: The control shell's background changes on hover, unless it's in
      the error state.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: hover'
  - title: Error
    description: >-
      The shell's border switches to an error-coloured, thicker border, and an Message
      of type="error" appears below the control with aria-invalid="true" set on
      the input.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: error'
  - title: Prefix
    description: >-
      When content is slotted into slot="prefix", a vertical divider appears between
      it and the input, and the prefix is included in aria-describedby so it's announced
      as context rather than purely decorative.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: prefix'
  - title: Trailing icon
    description: >-
      Appears only when something is slotted into slot="icon", and only for non-password
      types.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: trailing icon'
  - title: Password visibility
    description: >-
      type="password" renders a real, focusable show/hide toggle button (native
      eye/eye-off icon) that flips the actual <input type> between password and
      text — not a custom masking character — so paste, autofill and password-manager
      behaviour keep working. aria-pressed and the accessible label ("Show password"
      / "Hide password") update with the state.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: password visibility'
  - title: Description vs helper
    description: >-
      description renders as a plain line; setting helper turns that same line into
      an expand/collapse disclosure instead. They are mutually exclusive in the
      rendered output.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: description vs helper'
  - title: aria-describedby
    description: >-
      Built up dynamically from whichever of the label's description/helper, the
      prefix, and the error message are present.
    image: https://placehold.co/1280x720
    imageAlt: 'Text field: aria-describedby'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Text field example: Any single-line free-text input: names, emails, phone
        numbers, search queries, passwords.
      label: Do
      caption: >-
        Any single-line free-text input: names, emails, phone numbers, search queries,
        passwords.
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: Multi-line input'
      label: Don't
      caption: Multi-line input
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Text field example: Fields that need a prefix (e.g. a currency symbol) or
        a trailing icon (e.g. an info icon) alongside the value.
      label: Do
      caption: >-
        Fields that need a prefix (e.g. a currency symbol) or a trailing icon (e.g.
        an info icon) alongside the value.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Text field example: Numeric steppers or currency amounts requiring formatting/validation
        logic beyond a plain prefix — consider a dedicated numeric input component
        if one exists.
      label: Don't
      caption: >-
        Numeric steppers or currency amounts requiring formatting/validation logic
        beyond a plain prefix — consider a dedicated numeric input component if
        one exists.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: Fields requiring inline validation messaging
        (error).'
      label: Do
      caption: Fields requiring inline validation messaging (error).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Text field example: Selecting from a fixed set of options — use a select,
        radio group or combobox component instead.
      label: Don't
      caption: >-
        Selecting from a fixed set of options — use a select, radio group or combobox
        component instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep labels short, direct and in sentence case — it's easier to read and spot
    nouns.
  - Avoid colons at the end of labels.
  - >-
    Use description for a single supporting line; use helper only when that guidance
    is long enough to warrant hiding it behind a disclosure.
  - >-
    Error messages should tell the user what's wrong and, where possible, how to
    fix it.
  - Use sentence case, not title case, for labels and helper/description text.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - Avoid adverbs like "simply", "just" or "easily".
  - >-
    Use "not" rather than contractions like "isn't"/"aren't" when describing exclusions
    or requirements, for clarity.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: "Email address"'
      label: Do
      caption: '"Email address"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: "Email Address:"'
      label: Don't
      caption: '"Email Address:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: "Password"'
      label: Do
      caption: '"Password"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: "Just enter your password"'
      label: Don't
      caption: '"Just enter your password"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: "Enter a valid postcode"'
      label: Do
      caption: '"Enter a valid postcode"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Text field example: "Postcode isn''t valid"'
      label: Don't
      caption: '"Postcode isn''t valid"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    aria-describedby can only target the whole Input label host, since its description/helper
    text lives behind its own shadow boundary — there's no inner id to point at
    directly. This means the label text is effectively announced twice (once as
    aria-label, once via aria-describedby); accepted for now rather than having
    the primitive expose its text another way.
  - >-
    description and helper are mutually exclusive in the rendered output — setting
    both still only shows the helper disclosure.
  - >-
    The trailing icon slot is not available on type="password" — that position is
    reserved for the show/hide toggle.
  - >-
    :host has a max-inline-size of 22.5rem (--aa-text-field-max-inline-size) and
    a min-inline-size of min(100%, 15rem) — the field does not grow arbitrarily
    wide.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Label'''
      description: The field's visible label, also set as the input's aria-label.
    - name: description
      options: string
      defaultValue: ''''''
      description: Plain supporting line shown under the label. Ignored if helper
        is set.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line. Figma never shows both description and helper at once, so
        helper wins if both are set.
    - name: error
      options: string
      defaultValue: ''''''
      description: >-
        Error message shown below the control. Also sets aria-invalid="true" on
        the input.
    - name: type
      options: text | email | tel | search | password
      defaultValue: text
      description: Native input type. password additionally gets a built-in show/hide
        toggle.
    - name: name
      options: string
      defaultValue: ''''''
      description: Native name attribute, passed through when set.
    - name: value
      options: string
      defaultValue: ''''''
      description: The current input value, kept in sync with the native input via
        live().
    - name: required
      options: boolean
      defaultValue: 'false'
      description: Reflects the native required attribute.
- type: accessibility
  focusOrder:
  - >-
    The field participates in the natural tab order as a single native <input>.
    When type="password", the show/hide toggle button is a separate, independently
    focusable stop immediately after the input.
  keyboard:
  - key: Tab
    action: Moves focus into (and out of) the input, then to the password toggle
      if present.
  - key: Enter
    action: Submits the enclosing form, per native <input> behaviour.
  - key: Space
    action: Activates the password show/hide toggle when it has focus.
  aria:
  - aria-label — set to the visible label value on the input.
  - >-
    aria-describedby — points at the label's description/helper container, the prefix
    (if present), and the error message (if present).
  - aria-invalid — "true" when error is set, "false" otherwise.
  - >-
    aria-pressed — on the password toggle button, reflecting whether the password
    is currently shown.
  - >-
    aria-label on the password toggle — "Show password" or "Hide password", depending
    on state.
  seo:
  - >-
    Renders a real native <input> and <button> (for the password toggle), so semantics
    and focusability are native rather than simulated.
  - >-
    The visible label is also the input's accessible name via aria-label, so assistive
    tech and AI agents parsing the page get an accurate description of the field's
    purpose without relying on visual position alone.
- type: related-components
  items:
  - label: Input label
    href: /components/input-label
    note: >-
      Renders the label, description and helper disclosure; used internally by Text
      field.
  - label: Message
    href: /components/message
    note: Renders the error message shown below the control.
  - label: Icon
    href: /components/icon
    note: Supplies the optional trailing icon.
  - label: Date picker
    href: /components/date-picker
    note: Uses the same unstyled-button-with-dashed-focus pattern for its own toggle.
---
