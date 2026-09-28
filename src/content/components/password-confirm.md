---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: no simplified/requirements-less variant currently exists in code.
#   - Things to consider: no explicit "submit"/validation-complete state or event is exposed — a consuming form must derive overall validity itself from value/confirmValue.
#   - Keyboard interactions: no component-specific keyboard interactions beyond what Text field itself provides.
#   - ARIA: requirement rows are not individually associated with the password field via aria-describedby — confirm whether this is needed for full screen-reader clarity.
title: Password confirm
description: >-
  Password confirm is the paired password-and-confirm pattern used when a user sets
  or changes a password. It combines two Text field password inputs with a live
  requirements checklist and a live match message, all driven reactively from the
  typed values rather than a discrete state prop.
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
    Password field: an Text field with type="password", using that component's own
    show/hide toggle.
  - 'Heading: "Your chosen password" label above the requirements checklist.'
  - >-
    Requirements checklist (part="requirements"): four rows, each an icon (part="requirement")
    plus text (part="requirement-text"), one per password rule.
  - >-
    Confirm field: a second Text field with type="password", named {name}-confirm
    when a name is set.
  - >-
    Confirm message (part="confirm-message"): an icon plus text (part="confirm-message-text")
    showing match/mismatch guidance.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Password confirm anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Both fields empty, no requirements met, neutral confirm message.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: Default'
  - title: Success
    description: A password meeting all four requirements entered, checklist fully
      ticked.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: Success'
  - title: Partial
    description: A password meeting some but not all requirements, checklist partially
      ticked.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: Partial'
  - title: Mismatch
    description: >-
      Password and confirm fields both filled but with different values, showing
      the mismatch message.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: Mismatch'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Live checklist
    description: >-
      On every keystroke in the password field, each of the four requirement rows
      re-evaluates against value and flips its icon/colour between info-circle/info
      (not met) and check-circle/positive (met). The row's text stays neutral grey
      throughout — only the icon carries the colour.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: live checklist'
  - title: Confirm message
    description: >-
      Shows "Let's check your passwords" (info-circle/info) until confirmValue is
      non-empty and differs from value, at which point it switches to "Your passwords
      don't match" (alert-circle/danger). There is no distinct "matched" message.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: confirm message'
  - title: No input-level error state
    description: >-
      The confirm field's own border never turns red — the checklist and message
      carry validity, not the input itself.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: no input-level error state'
  - title: Live regions
    description: >-
      Both the requirements list and the confirm message are wrapped in aria-live="polite"
      containers, so assistive tech announces changes as the user types.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: live regions'
  - title: Events
    description: >-
      Re-dispatches input and change events (bubbling, composed) from both internal
      fields, so a consumer can listen on the host element itself.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: events'
  - title: Password visibility
    description: Both fields inherit Text field's own type="password" show/hide
      toggle.
    image: https://placehold.co/1280x720
    imageAlt: 'Password confirm: password visibility'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Any password creation or change flow where the user must set a password and
    confirm it, e.g. account sign-up or password reset.
  - >-
    Where live feedback on password strength/requirements and confirmation match
    materially helps the user succeed on the first attempt.
  dont:
  - >-
    A single password entry with no confirmation step (e.g. login) — use Text field
    with type="password" directly.
  - A password field where requirements shouldn't be surfaced live
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the requirement text exactly matched to Figma's fixed four rules (a number,
    a letter, 8-20 characters, a special character from ! @ # $ % ^ &) — these are
    hard-coded in the component, not configurable per instance.
  - >-
    Keep label and confirmLabel short and in sentence case, matching the field's
    purpose (e.g. "Password", "Confirm password").
  - Use sentence case for labels and messages, not title case.
  - >-
    Use plain, direct language the user can act on immediately — "Your passwords
    don't match" states the problem clearly rather than hedging.
  - >-
    Avoid jargon or technical terms when describing requirements — write for a reading
    age of around 9.
  - Use British English spelling throughout.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Password confirm example: "Confirm password"'
      label: Do
      caption: '"Confirm password"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Password confirm example: "Confirm Password:"'
      label: Don't
      caption: '"Confirm Password:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Password confirm example: "Your passwords don''t match"'
      label: Do
      caption: '"Your passwords don''t match"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Password confirm example: "Passwords aren''t matching, please review"'
      label: Don't
      caption: '"Passwords aren''t matching, please review"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    This is a genuinely interactive/reactive component, not a set of static visual
    states — the four Figma variants (Default/Success/Mismatch/Partial) are snapshots
    of the same component at different input values, not separate modes to implement
    or toggle between.
  - >-
    The component has a fixed maximum width (max-inline-size: 26rem) and stretches
    to fill its container up to that point.
  - >-
    Requirement copy and the confirm message copy are not currently configurable
    via properties — changing them requires editing the component source.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Password'''
      description: Label for the password field.
    - name: confirmLabel (confirm-label)
      options: string
      defaultValue: '''Confirm password'''
      description: Label for the confirm field.
    - name: name
      options: string
      defaultValue: ''''''
      description: >-
        Name attribute for the password field; the confirm field is named {name}-confirm
        when set.
    - name: value
      options: string
      defaultValue: ''''''
      description: Current password field value.
    - name: confirmValue (confirm-value)
      options: string
      defaultValue: ''''''
      description: Current confirm field value.
- type: accessibility
  focusOrder:
  - >-
    The two Text field instances participate in the natural tab order in document
    order: password field, then confirm field. The requirements checklist and confirm
    message are not focusable — they are status text associated with the fields
    via live regions, not separately tabbable content.
  keyboard:
  - key: Tab / Shift+Tab
    action: >-
      Moves focus between the password field, confirm field, and each field's own
      show/hide toggle (per Text field).
  aria:
  - >-
    aria-live="polite" — applied to both the requirements container and the confirm
    message container, so updates are announced without interrupting the user.
  - >-
    No role overrides — relies on Text field's native labelling and semantics for
    both inputs.
  seo:
  - >-
    Renders real, labelled form fields (via Text field), so field purpose is discoverable
    to assistive tech and autofill.
  - >-
    Live-region text gives assistive tech and AI agents a textual, up-to-date description
    of password validity state without needing to interpret icon colour alone.
- type: related-components
  items:
  - label: Text field
    href: /components/text-field
    note: Supplies both password inputs, including the show/hide toggle.
  - label: Icon
    href: /components/icon
    note: Supplies the requirement and confirm-message icons.
---
