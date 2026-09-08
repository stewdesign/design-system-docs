---
title: Radio
description: >-
  A radio lets users select a single item from a mutually exclusive list.
  Use a radio group when a user must choose exactly one option from a
  visible list, with all options shown at the same time — avoid it when
  the set of options changes based on earlier answers. Always preselect a
  safe default where possible, keep labels short, specific, and scannable,
  stack options vertically for easier reading, and make the whole row
  clickable, not just the circle.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-radio--docs
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-06-15
platforms: ["Web", "Mobile app"]
sections:
  - type: anatomy
    heading: Anatomy
    image: https://placehold.co/1280x720
    caption: Anatomy of the component.
    items:
      - Radio input
      - Label
      - Description
  - type: two-col
    heading: Behavior
    items:
      - title: Default
        description: Unselected, resting state.
        image: https://placehold.co/1280x720
        caption: Image of the default state.
      - title: Hover
        description: Shown when a user moves their cursor over the radio row.
        image: https://placehold.co/1280x720
        caption: Image of the hover state.
      - title: Selected
        description: Indicates the user's active choice within the group.
        image: https://placehold.co/1280x720
        caption: Image of the selected state.
      - title: Focused
        description: Shown when a user tabs to the input. Designed to conform to accessibility standards.
        image: https://placehold.co/1280x720
        caption: Image of the focused state.
  - type: side-by-side
    heading: Best practices
    items:
      - title: Selection limit
        figures:
          - image: https://placehold.co/1280x720
            label: Do
            caption: "Use radio when only one option can be selected at any time."
          - image: https://placehold.co/1280x720
            label: Don't
            caption: "Use radio when more than one option can be selected — use checkboxes instead."
      - title: Number of options
        figures:
          - image: https://placehold.co/1280x720
            label: Do
            caption: "Use radio when all options are visible at the same time."
          - image: https://placehold.co/1280x720
            label: Don't
            caption: "Use radio if there are more than 6 options — use a select instead."
      - title: Whether a choice is required
        figures:
          - image: https://placehold.co/1280x720
            label: Do
            caption: "Use radio when the choice is clear and mutually exclusive."
          - image: https://placehold.co/1280x720
            label: Don't
            caption: "Use radio if the choice is optional or can be skipped."
  - type: design-tokens
    tokens:
      - name: Border default
        value: border/inputs/default
      - name: Border checked
        value: border/inputs/checked
      - name: Border focus
        value: border/inputs/focus
      - name: Border hover
        value: border/inputs/hover
      - name: Surface checked
        value: surface/inputs/checked
      - name: Label text
        value: text/default/headings
      - name: Description text
        value: text/default/body
  - type: accessibility
    items:
      - Radio buttons must be grouped using a fieldset and legend to provide context for screen readers
      - Each radio must have an associated label element
      - The full row must be clickable — not just the radio circle
      - Focus state must be clearly visible and meet WCAG 2.4.11
      - Do not rely on colour alone to indicate selection state
  - type: related-components
    items:
      - label: Checkbox
        href: /design-system-docs/components/checkbox
        note: use instead when more than one option can be selected
      - label: Segmented Control
        href: /design-system-docs/components/segmented-control
        note: use for switching between 2–4 closely related views when options are equal in importance
---
