---
title: Radio
description: A radio lets users select a single item from a mutually exclusive list.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-radio--docs
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-06-15
platforms: ["Web", "Mobile app"]
anatomy:
  image: https://placehold.co/1280x720
  parts:
    - name: Radio input
      description: The circular selector
      image: https://placehold.co/1280x720
    - name: Label
      description: Required, describes the option
      image: https://placehold.co/1280x720
    - name: Description
      description: Optional secondary text below the label
      image: https://placehold.co/1280x720
behavior:
  - name: Default
    description: Unselected, resting state.
    image: https://placehold.co/1280x720
  - name: Hover
    description: Shown when a user moves their cursor over the radio row.
    image: https://placehold.co/1280x720
  - name: Selected
    description: Indicates the user's active choice within the group.
    image: https://placehold.co/1280x720
  - name: Focused
    description: Shown when a user tabs to the input. Designed to conform to accessibility standards.
    image: https://placehold.co/1280x720
bestPractices:
  do:
    - When only one option can be selected at any time
    - If all options are visible at the same time
    - When the choice is clear and mutually exclusive
  dont:
    - When more than one option can be selected — use checkboxes instead
    - If the choice is optional or can be skipped
    - When options change based on earlier answers
    - If there are more than 6 options
designTokens:
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
accessibility:
  - Radio buttons must be grouped using a fieldset and legend to provide context for screen readers
  - Each radio must have an associated label element
  - The full row must be clickable — not just the radio circle
  - Focus state must be clearly visible and meet WCAG 2.4.11
  - Do not rely on colour alone to indicate selection state
relatedComponents:
  - label: Checkbox
    href: /design-system-docs/components/checkbox
    note: use instead when more than one option can be selected
  - label: Segmented Control
    href: /design-system-docs/components/segmented-control
    note: use for switching between 2–4 closely related views when options are equal in importance
---

## Usage

Use a radio group when a user must choose exactly one option from a visible list. All options should be shown at the same time.

### General guidance

- Always preselect a safe default where possible
- Keep labels short, specific, and scannable
- Stack options vertically for easier reading
- Make the whole row clickable, not just the circle
