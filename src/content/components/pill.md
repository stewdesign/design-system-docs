---
# Gaps from the source doc (TODOs), for review:
#   - Examples: this component has no story of its own — Segmented control's stories (Small, Large, Option counts, With icons, With badge) cover every pill state; confirm these example names against that file if a dedicated pill story is ever added.
title: Pill
description: >-
  Pill is the individual selectable segment rendered inside Segmented control. It's
  an internal primitive — not intended to be reached for directly — that displays
  a label, an optional leading icon and an optional notification badge, and reflects
  its own default/hover/active/focus visual states.
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
    Icon slot (slot="icon"): optional leading icon, coloured to match the label
    via currentColor.
  - 'Label: the pill''s text, via the default (unnamed) slot.'
  - >-
    Badge: a small circular indicator shown when badge is true, e.g. to flag a notification
    against that option. Figma verification: .Segmented Pill (node 17285:15725)
    — Size Small/Large × State Default/Hover/Active/Focus.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Pill anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Small, default state
    description: Unselected pill at small size.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: Small, default state'
  - title: Small, active state
    description: Selected pill with bold tertiary styling.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: Small, active state'
  - title: Large, default/active
    description: Larger size, including the active state's stepped-down type scale.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: Large, default/active'
  - title: With icon
    description: Leading icon slotted before the label.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: With icon'
  - title: With badge
    description: Notification badge shown on an inactive pill.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: With badge'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Selection
    description: >-
      Clicking the pill dispatches a bubbling, composed pill-select event, which
      the parent Segmented control listens for to update which pill is active.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: selection'
  - title: Active state
    description: >-
      The active pill gets a solid background (--surface-neutral-primary-default),
      a tertiary text colour and bold weight. At size="large", the active state
      also steps down to the medium type scale rather than reusing Large's own larger
      size — bold text at that size read as too heavy.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: active state'
  - title: Hover
    description: >-
      Inactive pills show a secondary neutral background on hover; the active pill
      has no separate hover treatment.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: hover'
  - title: Focus
    description: >-
      A dashed focus ring appears around the pill on :focus-visible, expanding slightly
      outward from its edge.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: focus'
  - title: Roving tabindex
    description: >-
      tabindex is 0 only when active, and -1 otherwise — this supports the parent's
      roving-focus keyboard pattern rather than every pill being independently tabbable.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: roving tabindex'
  - title: Focus delegation
    description: Calling .focus() on the host element focuses its internal <button>
      directly.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: focus delegation'
  - title: Responsive behaviour
    description: >-
      The pill has no responsive breakpoints of its own; its label has a minimum
      inline size (2.5rem at small, 4rem at large) and the pill otherwise sizes
      to its content, wrapping only if forced by the container.
    image: https://placehold.co/1280x720
    imageAlt: 'Pill: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pill example: As a child of Segmented control — this is its only intended
        host; do not use Pill standalone.
      label: Do
      caption: >-
        As a child of Segmented control — this is its only intended host; do not
        use Pill standalone.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pill example: Anywhere outside Segmented control — it has no keyboard roving-focus
        or exclusive-selection logic of its own; that all lives in the parent. Use
        Segmented control with its child pills instead of assembling Pill independently.
      label: Don't
      caption: >-
        Anywhere outside Segmented control — it has no keyboard roving-focus or
        exclusive-selection logic of its own; that all lives in the parent. Use
        Segmented control with its child pills instead of assembling Pill independently.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pill example: Options that need an inline icon and/or notification badge
        alongside their label within a segmented control.
      label: Do
      caption: >-
        Options that need an inline icon and/or notification badge alongside their
        label within a segmented control.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pill example: A single standalone toggle — use a dedicated toggle/switch
        component instead.
      label: Don't
      caption: A single standalone toggle — use a dedicated toggle/switch component
        instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep labels short — pills sit side by side in a fixed-height row and don't truncate
    long text.
  - >-
    Use the badge property only for a genuine notification or update against that
    option, not decoratively.
  - >-
    Only add an icon via slot="icon" when it adds real clarity to the option, not
    purely for decoration.
  - Use sentence case for pill labels.
  - Use British English spelling throughout.
  - Avoid adverbs such as "simply", "just" or "easily".
  - Keep labels short enough not to wrap within the pill.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Pill example: "Monthly"'
      label: Do
      caption: '"Monthly"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Pill example: "Pay on a monthly basis"'
      label: Don't
      caption: '"Pay on a monthly basis"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Pill example: "Comprehensive"'
      label: Do
      caption: '"Comprehensive"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Pill example: "Comprehensive cover option"'
      label: Don't
      caption: '"Comprehensive cover option"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Pill example: "Option 1"'
      label: Do
      caption: '"Option 1"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Pill example: "Click here for option 1"'
      label: Don't
      caption: '"Click here for option 1"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Pill is an internal primitive with no story of its own — its states are exercised
    entirely through Segmented control's stories.
  - >-
    Setting size directly on an Pill overrides the size the parent Segmented control
    would otherwise apply — the parent only fans out its own size to pills that
    don't already have a size attribute set.
  - >-
    The badge is purely visual — it carries no accessible label of its own, so don't
    rely on it to convey information that isn't otherwise available to assistive
    tech.
  - Don't nest another interactive element inside the icon slot.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: active
      options: boolean
      defaultValue: 'false'
      description: Whether this pill is the currently selected segment. Reflects
        to an attribute.
    - name: size
      options: small | large
      defaultValue: small
      description: Control height, padding and type scale.
    - name: badge
      options: boolean
      defaultValue: 'false'
      description: Shows a small circular badge on the pill, e.g. to indicate a
        notification.
- type: accessibility
  focusOrder:
  - >-
    Only the active pill is in the natural tab order (tabindex="0"); all other pills
    in the group are tabindex="-1" and are reached via arrow-key roving focus managed
    by the parent Segmented control, not sequential tabbing.
  keyboard:
  - key: Enter / Space
    action: Activates the focused pill (native <button> behaviour).
  - key: Arrow keys / Home / End
    action: >-
      _Handled by the parent Segmented control, not Pill itself — see that component's
      documentation._
  aria:
  - >-
    role="radio" — set on the internal button, since the pill is one option within
    a mutually exclusive group (the parent sets role="radiogroup").
  - aria-checked — reflects active as "true"/"false".
  - >-
    tabindex — 0 when active, -1 otherwise, implementing the roving-tabindex pattern
    required for a native-equivalent radio-group experience.
  seo:
  - >-
    Renders as a real <button> with role="radio", so its selected state is exposed
    natively to assistive tech rather than simulated with styling alone.
  - >-
    Label text (from the default slot) should describe the option on its own, since
    it's the primary accessible name for the control.
- type: related-components
  items:
  - label: Segmented control
    href: /components/segmented-control
    note: >-
      The required parent; owns exclusive selection, arrow-key roving focus and
      size fan-out to its child pills.
  - label: Icon
    href: /components/icon
    note: Supplies the optional leading icon.
  - label: Radio
    href: /components/radio
    note: >-
      An alternative exclusive-choice control with room for label, description and
      error copy, for contexts where a segmented control's compact row isn't suitable.
---
