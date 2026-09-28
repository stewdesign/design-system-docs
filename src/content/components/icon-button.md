---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Things to consider: confirm destructive-intent guidance for icon buttons.
title: Icon button
description: >-
  Icon button is a compact, circular, icon-only control used where a visible text
  label isn't needed or doesn't fit — a close button, a "next" arrow, a toolbar
  action. Because it has no visible label, a label property is required and becomes
  the control's accessible name.
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
    Circular control: a native <button>, sized from the icon's own size token plus
    symmetric padding so the box stays square and in proportion at every size.
  - >-
    Icon slot: the default slot; defaults to an arrow-right Icon if nothing is slotted.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Icon button anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Primary
    description: Default, filled intent.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: Primary'
  - title: Secondary / tertiary
    description: Lower-emphasis intents.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: Secondary / tertiary'
  - title: Subtle
    description: No border, minimal visual weight until hovered.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: Subtle'
  - title: Disabled
    description: Inactive state, opacity reduced.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: Disabled'
  - title: Custom icon
    description: A slotted icon other than the default arrow.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: Custom icon'
  - title: Variant matrix
    description: All size/intent combinations shown together for comparison.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: Variant matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Icon sizing is owned by the button
    description: >-
      The control sets --aa-icon-size based on its own size, so a slotted icon is
      always sized to match regardless of what size prop is set on the icon itself.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: icon sizing is owned by the button'
  - title: Fallback icon
    description: >-
      If no icon is slotted, an arrow-right icon renders at the size matching the
      button's size.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: fallback icon'
  - title: Hover
    description: >-
      Each intent has its own distinct hover background/border treatment; subtle
      has no visible resting border and only shows a background fill on hover.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: hover'
  - title: Disabled
    description: >-
      Opacity reduces to 0.6 and the cursor becomes not-allowed; hover styling is
      suppressed via :not(:disabled) selectors.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: disabled'
  - title: Shape
    description: >-
      The control is always a perfect circle — aspect-ratio: 1 combined with a fully
      rounded border-radius, sized from the icon plus padding rather than a fixed
      height, so it stays proportional at every size.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: shape'
  - title: Transitions
    description: >-
      Colour and border changes use the shared interactive transition token; focus
      rings use the shared focus-ring transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: transitions'
  - title: Responsive behaviour
    description: No breakpoints of its own; sizes to its fixed size regardless of
      viewport.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon button: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Icon button example: An icon-only control with no visible label, where the
        icon alone is clear in context (e.g. a close "x", a chevron "next" button).
      label: Do
      caption: >-
        An icon-only control with no visible label, where the icon alone is clear
        in context (e.g. a close "x", a chevron "next" button).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Icon button example: Any action where a visible text label would aid clarity
        — use Button instead.
      label: Don't
      caption: Any action where a visible text label would aid clarity — use Button
        instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Icon button example: Compact toolbar or card actions where space doesn't
        allow a labelled button.
      label: Do
      caption: Compact toolbar or card actions where space doesn't allow a labelled
        button.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Icon button example: A set of mutually exclusive or multi-select icon toggles
        — use a purpose-built selection component.
      label: Don't
      caption: >-
        A set of mutually exclusive or multi-select icon toggles — use a purpose-built
        selection component.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Icon button example: Navigation controls like "previous"/"next" (e.g. inside
        Calendar's month navigation).
      label: Do
      caption: >-
        Navigation controls like "previous"/"next" (e.g. inside Calendar's month
        navigation).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Icon button example: When the icon's meaning isn't obvious without a label
        — pair with visible text or use a fully labelled Button.
      label: Don't
      caption: >-
        When the icon's meaning isn't obvious without a label — pair with visible
        text or use a fully labelled Button.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    label is required and must describe the actual action the button performs, not
    the icon itself (e.g. "Delete item", not "Trash icon").
  - >-
    Be specific: prefer "Next step" over a generic "Next" if more context helps
    the action read clearly out of context (e.g. to screen reader users navigating
    by control name).
  - >-
    Use sentence case for the label text (used only as aria-label, but should still
    read naturally).
  - >-
    Use active, specific verbs describing the exact action, consistent with Button's
    content guidance.
  - >-
    Avoid vague labels like "Click here" or "Icon button" (the default placeholder)
    in real usage — always set a real, specific label.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Icon button example: label="Delete item"'
      label: Do
      caption: label="Delete item"
    - image: https://placehold.co/1280x720
      imageAlt: 'Icon button example: label="Icon button"'
      label: Don't
      caption: label="Icon button"
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Icon button example: label="Previous month"'
      label: Do
      caption: label="Previous month"
    - image: https://placehold.co/1280x720
      imageAlt: 'Icon button example: label="Back"'
      label: Don't
      caption: label="Back"
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    label has no visible on-screen text — always set a real, specific value; the
    default "Icon button" placeholder is not acceptable in production use.
  - >-
    Setting a size on a slotted Icon has no effect — the button always overrides
    it via --aa-icon-size to keep the icon proportional to the control.
  - >-
    There is no href support (unlike Button) — this is always a native <button>,
    not an anchor.
  - >-
    No dedicated danger/destructive intent exists for this component (unlike Button's
    intent="danger") — confirm the right visual treatment for a destructive icon-only
    action.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: intent
      options: primary | secondary | tertiary | subtle
      defaultValue: primary
      description: Visual style/hierarchy of the control.
    - name: size
      options: large | medium | small
      defaultValue: medium
      description: Control size; also sets the slotted icon's size to match.
    - name: label
      options: string
      defaultValue: '''Icon button'''
      description: >-
        Required accessible name — becomes the aria-label, since the control has
        no visible text.
    - name: type
      options: button | submit | reset
      defaultValue: button
      description: Native button type.
    - name: disabled
      options: boolean
      defaultValue: 'false'
      description: Disables the control.
- type: accessibility
  focusOrder:
  - >-
    Icon button is a native <button> and participates in the natural tab order at
    its position on the page. When disabled, the native disabled attribute removes
    it from the tab order.
  keyboard:
  - key: Enter
    action: Activates the button.
  - key: Space
    action: Activates the button (native <button> behaviour).
  aria:
  - >-
    aria-label — always set from the label property, since the control has no visible
    text to name it.
  - Native disabled attribute is used, rather than aria-disabled.
  - No role override is needed — a real <button> element is used directly.
  seo:
  - >-
    Renders as a real <button>, so semantics and focusability are native rather
    than simulated.
  - >-
    Because there is no visible text, the label/aria-label is the only signal available
    to assistive technology, search engines, and AI agents about what the control
    does — treat it with the same care as visible button copy.
- type: related-components
  items:
  - label: Button
    href: /components/button
    note: The labelled counterpart; use it whenever a visible text label is appropriate.
  - label: Button group
    href: /components/button-group
    note: >-
      For arranging multiple icon buttons (or a mix of icon and text buttons) with
      consistent spacing.
  - label: Icon
    href: /components/icon
    note: Supplies the icon rendered inside the control.
---
