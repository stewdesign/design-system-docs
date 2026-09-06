---
title: Checkbox
description: >-
  A checkbox lets users select one or more options from a list, or confirm
  a single independent choice. Use it when a user needs to select multiple
  items from a list, or to confirm a single independent choice. Keep
  labels short, specific, and scannable, and make the whole row clickable,
  not just the box.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-checkbox--docs
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/The-AA-Design-System-POC?node-id=16667-14318
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
      - Checkbox box
      - Check icon
      - Label
      - Description
  - type: two-col
    heading: Variants
    items:
      - title: Default
        description: Full checkbox with label and optional description
        image: https://placehold.co/1280x720
        caption: Image of the default variant.
      - title: Atom
        description: Icon-only, no label — provide aria-label
        image: https://placehold.co/1280x720
        caption: Image of the atom variant.
  - type: two-col
    heading: Behavior
    items:
      - title: Default
        description: Unchecked, resting state
        image: https://placehold.co/1280x720
        caption: Image of the default state.
      - title: Hover
        description: Light grey fill, black border
        image: https://placehold.co/1280x720
        caption: Image of the hover state.
      - title: Focused
        description: Dashed blue focus ring
        image: https://placehold.co/1280x720
        caption: Image of the focused state.
      - title: Checked
        description: Dark fill with check icon
        image: https://placehold.co/1280x720
        caption: Image of the checked state.
  - type: side-by-side
    heading: Best practices
    items:
      - title: Multiple selection
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use checkboxes when more than one option can be selected from a list."
          - image: https://placehold.co/1280x720
            caption: "Don't: use checkboxes when only one option can be selected — use radio instead."
      - title: Timing of the action
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use a checkbox for a single yes/no setting that can be toggled independently."
          - image: https://placehold.co/1280x720
            caption: "Don't: use a checkbox when the action should apply immediately — use a switch instead."
  - type: accessibility
    items:
      - Each checkbox must have an associated label element
      - Focus state must meet WCAG 2.4.11
      - Checked state must not rely on colour alone
---
