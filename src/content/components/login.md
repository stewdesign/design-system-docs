---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Focus order: confirm whether focus should move to the new step's heading/field after a transition — not addressed in the source.
#   - ARIA: no explicit ARIA roles/attributes are set by this component beyond what its slotted Fieldset, Text field, Radio and Button children provide natively — confirm whether step transitions need an aria-live announcement.
title: Login
description: >-
  Login is the complete log-in flow pattern — email, password, one-time-code destination
  choice, and code entry — composed as a single component that manages its own steps
  and navigation. It appears wherever a returning user signs in, such as a dedicated
  log-in page or a modal triggered from account areas.
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
    Back control: a text link with a leading arrow icon, shown on every step; on
    the first step (email) it dispatches a back event instead of navigating internally,
    since there's no previous step to return to.
  - >-
    Fieldset (Fieldset): wraps each step's field and action, with a step-specific
    label/description.
  - >-
    Field slot: a named slot (email-field, password-field, code-field) with a default
    Text field, or destination-options with two default Radio choices.
  - >-
    Action slot: a named slot (email-action, password-action, destination-action,
    code-action) with a default Button.
  - >-
    Email playback: on the password step, shows the entered email with a "Change
    email" link back to the email step.
  - >-
    Support prompts: secondary links below the main action, e.g. "Create an account"
    or "Get a one-time login code".
  - >-
    Resend control: on the code step, either a "Send a new code" link or a live
    cooldown countdown, depending on resendCooldown.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Login anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Email step
    description: Default entry point, email field and Continue action.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: Email step'
  - title: Password step
    description: >-
      Email playback, password field, Log in action, "Get a one-time login code"
      prompt.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: Password step'
  - title: Destination step
    description: Radio choice between text and email delivery for the one-time code.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: Destination step'
  - title: Code step
    description: Code field, resend prompt with live cooldown countdown.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: Code step'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Step navigation
    description: >-
      The component owns its own flow — Continue, Log in, Get a one-time login code
      and Send move it between steps internally; Back returns to the previous step,
      or dispatches a back event on the first step.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: step navigation'
  - title: Cancelable transitions
    description: >-
      Every transition (continue, login, send-code, resend-code) fires as a cancelable
      CustomEvent *before* the component moves. A consumer can call event.preventDefault()
      (e.g. on a failed validation or a rejected API call) and the step/cooldown
      won't advance, leaving the consumer to show its own error state on its own
      slotted field.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: cancelable transitions'
  - title: Resend cooldown
    description: >-
      Reaching or resending on the code step starts a genuine 60-second countdown;
      the "Send a new code" link is replaced by a countdown message until it clears,
      then reappears.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: resend cooldown'
  - title: Slot replacement
    description: >-
      A team can slot in its own field or action element; this component only needs
      it to bubble the expected native events, so a replacement keeps working with
      zero extra wiring.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: slot replacement'
  - title: Responsive behaviour
    description: >-
      The component has a max-inline-size of 24rem and stacks its content in a single
      column; it has no other breakpoints of its own.
    image: https://placehold.co/1280x720
    imageAlt: 'Login: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A dedicated log-in page or modal for returning users, covering email/password
    and one-time-code paths in one pattern.
  - >-
    Products that need to resume a user directly into a specific step (e.g. deep-linking
    into code after an email prompt sent elsewhere).
  - >-
    Flows where validation, error display and network calls are owned by the consuming
    team via slotted fields/actions and cancelable events.
  dont:
  - >-
    Account creation — use a dedicated sign-up pattern, not this component (the
    "Create an account" prompt only links out to one).
  - >-
    A single stand-alone field or button outside a login context — use Text field/Button
    directly.
  - >-
    A flow whose steps don't match this pattern's four steps (email, password, destination,
    code) — build a custom flow rather than forcing it into Login.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep field labels short and specific, e.g. "Email", "Password", "Verification
    code (6 digits)".
  - >-
    Use the description under each fieldset to set clear expectations for what happens
    next, e.g. "We'll send a short code to verify it's you".
  - >-
    Support prompts should frontload the outcome for the user, e.g. "Forgot your
    password?" before the linked action.
  - Use sentence case throughout — headings, descriptions, and button labels.
  - >-
    Frontload button/link labels with active verbs that accurately describe the
    action, e.g. "Continue", "Log in", "Send".
  - >-
    Avoid generic wording such as "Find out more" — every action here should say
    exactly what it does.
  - Use British English spelling throughout.
  - Address the user directly with "you"/"your".
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Login example: "Enter the email address for your account"'
      label: Do
      caption: '"Enter the email address for your account"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Login example: "Please input your email details"'
      label: Don't
      caption: '"Please input your email details"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Login example: "We''ll send a short code to verify it''s you"'
      label: Do
      caption: '"We''ll send a short code to verify it''s you"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Login example: "A code will be sent by us"'
      label: Don't
      caption: '"A code will be sent by us"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Login example: "Send a new code"'
      label: Do
      caption: '"Send a new code"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Login example: "Simply click to resend"'
      label: Don't
      caption: '"Simply click to resend"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    phone-last-digits is display-only — it does not validate or mask an actual phone
    number; the consuming app must supply the real value.
  - >-
    The resend cooldown timer is cleared on disconnectedCallback, but a consumer
    navigating away mid-countdown should not assume state persists if the component
    is re-mounted.
  - >-
    Replacing a field/action slot with a custom element only works if that element
    bubbles the expected native events (input/change/click) and exposes .value —
    a non-conforming custom element silently breaks the flow's data capture.
  - >-
    Setting step directly resumes into any step, but skips the component's own guard
    logic (e.g. it won't validate that an email was actually captured before jumping
    to password) — the consuming app is responsible for only resuming into a step
    the user has legitimately reached.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: email
      options: string
      defaultValue: ''''''
      description: >-
        The entered email address, shown in the password-step playback and used
        in code-destination copy.
    - name: phone-last-digits
      options: string
      defaultValue: '''495'''
      description: >-
        Last digits of the mobile number, shown in the destination choice and code-step
        description.
    - name: step
      options: email | password | destination | code
      defaultValue: '''email'''
      description: >-
        Which step of the flow is showing. Reflected as an attribute so a page can
        resume a returning user directly into e.g. code.
- type: accessibility
  focusOrder:
  - >-
    Each step renders its own back control, fieldset (field then action), and support
    prompts in that visual and DOM order, so tab order follows the same top-to-bottom
    sequence a sighted user sees. Moving between steps re-renders the DOM; focus
    is not automatically moved to the new step's first field.
  keyboard:
  - key: Enter
    action: Submits the focused field's associated action (native form/button behaviour).
  - key: Tab
    action: Moves through back control, field, action, and support prompts in order.
  seo:
  - >-
    Renders real form fields and buttons (via its slotted defaults), not custom,
    non-semantic controls.
  - >-
    Step descriptions clearly state the purpose of each action (e.g. "We'll send
    a short code to verify it's you"), giving assistive tech and AI agents enough
    context to understand what submitting will do.
- type: related-components
  items:
  - label: Fieldset
    href: /components/fieldset
    note: Wraps each step's field and action with a label/description.
  - label: Text field
    href: /components/text-field
    note: The default field rendered in email-field/password-field/code-field.
  - label: Radio
    href: /components/radio
    note: The default destination choice control.
  - label: Button
    href: /components/button
    note: The default action control in every action slot, and the support prompt
      links.
---
