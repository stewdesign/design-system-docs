---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: confirm if icon-button grouping has separate guidance.
title: Button group
description: >-
  Button group arranges a set of related Button elements with consistent spacing
  and alignment. It owns layout only — each button's own variant, size and intent
  stay with the button itself.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=2072-9432
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
    Group container: a flex wrapper applying gap and alignment to its slotted children.
  - 'Buttons: real Button (or similar) elements nested in the default slot.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Button group anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Start
    description: Buttons aligned to the start (default).
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: Start'
  - title: Center
    description: Buttons centred as a group.
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: Center'
  - title: End
    description: Buttons aligned to the end, common for form actions.
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: End'
  - title: Stack
    description: Buttons stacked vertically, each full width.
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: Stack'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Wrapping
    description: >-
      Buttons wrap onto a new line if they don't fit the available width, keeping
      consistent gap and alignment on each line.
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: wrapping'
  - title: Stack
    description: >-
      align="stack" switches to a vertical column layout with each button stretched
      to full width, rather than a horizontal row.
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: stack'
  - title: No shared button state
    description: >-
      The group does not coordinate selection, disabled state, or any other cross-button
      behaviour — it is purely a layout wrapper.
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: no shared button state'
  - title: Responsive behaviour
    description: >-
      No explicit breakpoints; layout responds naturally via flex wrapping and the
      stack alignment option for narrow contexts.
    image: https://placehold.co/1280x720
    imageAlt: 'Button group: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Button group example: A primary and secondary (or tertiary) action presented
        together, e.g. "Save" and "Cancel".
      label: Do
      caption: >-
        A primary and secondary (or tertiary) action presented together, e.g. "Save"
        and "Cancel".
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Button group example: A single standalone button — use Button directly with
        no wrapping group.
      label: Don't
      caption: A single standalone button — use Button directly with no wrapping
        group.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Button group example: Any set of related buttons that should visually group
        together with consistent spacing.
      label: Do
      caption: >-
        Any set of related buttons that should visually group together with consistent
        spacing.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Button group example: Mutually exclusive or multi-select choices — use the
        relevant selection component (radio/checkbox group, or Chip group), not
        a set of buttons.
      label: Don't
      caption: >-
        Mutually exclusive or multi-select choices — use the relevant selection
        component (radio/checkbox group, or Chip group), not a set of buttons.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Button group example: Stacking buttons full-width on narrow layouts (align="stack").
      label: Do
      caption: Stacking buttons full-width on narrow layouts (align="stack").
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Button group example: Icon-only controls needing a compact row — consider
        whether Icon button instances need their own grouping treatment.
      label: Don't
      caption: >-
        Icon-only controls needing a compact row — consider whether Icon button
        instances need their own grouping treatment.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Each button inside the group should follow Button's own content guidance (frontloaded
    active verbs, specific labels).
  - >-
    Order buttons by priority — typically primary action first (or, per platform
    convention, positioned per the group's alignment), with lower-emphasis actions
    alongside it.
  - Use sentence case for every button's label.
  - Avoid generic wording like "Find out more" — say what each button actually does.
  - Use British English spelling throughout.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Button group example: "Save changes" / "Cancel"'
      label: Do
      caption: '"Save changes" / "Cancel"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Button group example: "OK" / "Cancel"'
      label: Don't
      caption: '"OK" / "Cancel"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Button group example: "Choose cover" / "Compare plans"'
      label: Do
      caption: '"Choose cover" / "Compare plans"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Button group example: "Submit" / "Go back"'
      label: Don't
      caption: '"Submit" / "Go back"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The group does not enforce a maximum number of buttons — very long rows will
    wrap, which may look uneven; keep groups to a small number of related actions.
  - >-
    align="stack" stretches every slotted child to full width via ::slotted(*) {
    width: 100% } — this could conflict with a child that has its own fixed-width
    styling.
  - >-
    Button variant hierarchy (primary/secondary/tertiary) is not managed by the
    group — it's the consumer's responsibility to choose an appropriate combination
    of variants for the buttons placed inside it.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: align
      options: start | center | end | stack
      defaultValue: start
      description: Horizontal alignment of the button row, or vertical full-width
        stacking.
- type: accessibility
  focusOrder:
  - >-
    Buttons inside the group receive focus in normal tab order, following the DOM
    order of the slotted children (which visually matches the chosen align layout
    in left-to-right reading order, except in stack, which is a vertical column).
  keyboard:
  - key: Tab / Shift+Tab
    action: Moves focus between buttons in the group, and to/from surrounding page
      content.
  - key: Enter / Space
    action: Activates the focused button (native Button behaviour).
  aria:
  - >-
    No ARIA role is applied to the group container itself — it's a plain layout
    wrapper, not a semantic group like a toolbar or radiogroup.
  - >-
    Each slotted button carries its own accessibility semantics independently (see
    Button).
  seo:
  - >-
    The group itself has no semantic markup beyond a <div> wrapper — accessibility
    and crawlability come entirely from the real <button>/<a> elements slotted inside
    it.
  - >-
    Ensure each slotted button's label is specific and self-describing, since the
    group provides no additional context of its own.
- type: related-components
  items:
  - label: Button
    href: /components/button
    note: The component this group is designed to arrange; also usable standalone.
  - label: Icon button
    href: /components/icon-button
    note: A compact, icon-only alternative that can also be grouped.
---
