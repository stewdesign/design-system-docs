---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: name the toast component once one exists.
#   - Things to consider: confirm whether a per-instance dismiss label is needed.
title: Alert
description: >-
  Alert is a self-contained message panel used to surface status information, warnings,
  or confirmations to the user — in-page, not as a transient toast. It renders as
  a semantic live region so assistive technology announces it appropriately, and
  supports an optional dismiss control and action button.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=124-8256
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
    Leading icon: a status icon in a coloured badge, one per variant, hidden if
    has-leading-icon is set to false.
  - >-
    Heading slot (heading): plain-text heading prop by default, or a slotted heading
    element for a specific semantic level.
  - >-
    Body slot (body): plain-text body prop by default, or slotted rich content (links,
    lists, multiple paragraphs).
  - 'Dismiss button: optional close control, shown when dismissible is true.'
  - >-
    Action slot (action): optional area for a real button (e.g. Button), shown only
    when populated.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Alert anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Neutral alert
    description: Default, informational tone.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: Neutral alert'
  - title: Critical alert
    description: Solid, high-emphasis surface for serious situations.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: Critical alert'
  - title: Without action
    description: Heading and body only, no button.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: Without action'
  - title: Without heading
    description: Body copy sits directly beside the icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: Without heading'
  - title: Custom heading level
    description: A slotted <h2> instead of the default <h3>.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: Custom heading level'
  - title: Rich body
    description: Slotted body content with an inline link and a list.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: Rich body'
  - title: Variant stack
    description: All six variants shown together for comparison.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: Variant stack'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Live region semantics
    description: >-
      Each variant maps to a specific role (status or alert) and aria-live value
      (polite or assertive) — error, warning and critical are assertive/alert; neutral,
      positive and info are polite/status.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: live region semantics'
  - title: Dismiss
    description: >-
      Clicking the dismiss button fires a cancelable dismiss event first. If nothing
      calls preventDefault(), the alert measures its own rendered height, pins it
      inline, then animates to zero height and opacity before removing itself from
      the DOM — no manual cleanup required from the consumer.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: dismiss'
  - title: No fixed height cap
    description: >-
      Because heading/body accept arbitrary slotted content, there's no fixed collapse
      height guessed in advance — the real height is measured right before the dismiss
      animation starts, so real content is never clipped.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: no fixed height cap'
  - title: Sizing
    description: >-
      Full-width below the tablet breakpoint (48rem); above it, the alert shrinks
      to fit its content with a minimum width of 20rem and a maximum of 60ch, so
      a short alert stays compact and a long one grows to a comfortable reading
      measure.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: sizing'
  - title: Custom heading level
    description: >-
      Slotting a heading (slot="heading") fully overrides the default <h3> — the
      visual size stays the alert's own compact scale regardless of which semantic
      level (h1–h6) the consumer chooses.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: custom heading level'
  - title: Rich body content
    description: >-
      Slotting slot="body" content (instead of using the body string) allows inline
      links, lists, or other rich markup; links inside slotted body copy automatically
      pick up the same colour as Button's link variant.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: rich body content'
  - title: Reduced motion
    description: >-
      The dismiss collapse transition is disabled under prefers-reduced-motion:
      reduce.
    image: https://placehold.co/1280x720
    imageAlt: 'Alert: reduced motion'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Communicating the result of an action (success, error) directly in the page
    flow.
  - >-
    Flagging a warning or blocking issue that needs the user's attention before
    proceeding.
  - Providing informational context tied to a specific section of a page.
  - >-
    Critical, hard-to-miss messaging (variant="critical") for serious, high-consequence
    situations.
  dont:
  - >-
    Transient, auto-dismissing confirmation toasts — use a dedicated toast/notification
    component instead.
  - Inline field-level validation messages — use Message instead.
  - >-
    A persistent page banner unrelated to a specific event or state — consider Hero
    or a plain content section.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the heading short and specific to what happened or what's needed — avoid
    a generic label like "Notice".
  - >-
    Use the body copy to explain what happened and, where relevant, what the user
    should do next.
  - >-
    When an action is relevant (e.g. retrying, undoing, editing), slot a real button
    rather than describing the action only in prose.
  - >-
    Only mark an alert dismissible when the user genuinely doesn't need to act on
    it before moving on.
  - Use sentence case for both heading and body.
  - >-
    Use the active voice and specific action verbs — say what happened and what
    to do, not vague instructions.
  - >-
    Avoid exclamation marks in alert copy; reserve them for cases that specifically
    require it.
  - Use British English spelling throughout.
  - >-
    For product exclusions or hard limits, use "not" rather than contractions like
    "isn't"/"aren't" for clarity, e.g. "Vehicles over 3,500 kg are not covered."
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Alert example: "Payment declined"'
      label: Do
      caption: '"Payment declined"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Alert example: "Uh oh, something went wrong!"'
      label: Don't
      caption: '"Uh oh, something went wrong!"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Alert example: "Update your payment details or try a different
        card"'
      label: Do
      caption: '"Update your payment details or try a different card"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Alert example: "Please try again"'
      label: Don't
      caption: '"Please try again"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Setting both heading/body props and slotting slot="heading"/slot="body" content
    is redundant — the slotted content takes priority and the plain-text prop's
    fallback is not rendered.
  - >-
    The dismiss button always has a fixed aria-label="Dismiss alert" — it does not
    currently accept a custom label.
  - >-
    critical uses a solid, high-contrast surface — its link colour, heading colour
    and dismiss colour all swap to white automatically since the brand link blue
    fails contrast against it.
  - >-
    Because the component removes itself from the DOM on dismiss (unless preventDefault()
    is called on the dismiss event), any consumer state tracking whether the alert
    is shown should listen for that event rather than assuming the element persists.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: neutral | error | warning | positive | info | critical
      defaultValue: neutral
      description: >-
        Visual style and semantic tone; also sets the underlying ARIA role/live-region
        behaviour and icon.
    - name: heading
      options: string
      defaultValue: ''''''
      description: Plain-text heading; ignored if a heading is slotted instead.
    - name: body
      options: string
      defaultValue: '''Body text.'''
      description: Plain-text body copy; ignored if body content is slotted instead.
    - name: dismissible
      options: boolean
      defaultValue: 'false'
      description: Shows a dismiss (close) button.
    - name: has-leading-icon
      options: boolean
      defaultValue: 'true'
      description: Whether the leading status icon is shown.
- type: accessibility
  focusOrder:
  - >-
    Alert itself is not a focusable element; it participates in tab order only through
    its dismiss button (when dismissible) and any slotted action button, in that
    visual order.
  keyboard:
  - key: Enter / Space
    action: Activates the focused dismiss button or slotted action button.
  aria:
  - >-
    role="status" or role="alert" — set per variant; alert variants (error, warning,
    critical) interrupt more assertively than status variants (neutral, positive,
    info).
  - >-
    aria-live="polite" or aria-live="assertive" — paired with the role above, per
    variant.
  - >-
    The dismiss button carries a fixed aria-label="Dismiss alert" since it has no
    visible text label.
  - >-
    No custom aria-label is applied to the alert container itself; its accessible
    name comes from its heading and body content in normal reading order.
  seo:
  - >-
    Renders as a semantic <aside> with a live-region role, so assistive technology
    and any automated agent parsing the page can distinguish it from ordinary content.
  - >-
    Slotting a real heading element keeps the page's heading outline intact and
    machine-readable, rather than relying on a generic, unstructured label.
  - >-
    Because alerts are typically injected dynamically in response to user actions,
    ensure any surrounding page state (e.g. a submitted form) is also reflected
    in the DOM so an AI agent or crawler revisiting the page later doesn't see a
    stale alert with no matching context.
- type: related-components
  items:
  - label: Message
    href: /components/message
    note: For inline, field-level validation messages rather than a standalone panel.
  - label: Button
    href: /components/button
    note: Supplies the optional action slot content.
  - label: Icon
    href: /components/icon
    note: Supplies the leading status icon.
---
