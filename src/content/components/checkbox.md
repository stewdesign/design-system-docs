---
title: Checkbox
description: A checkbox lets users select one or more options from a list, or confirm a single independent choice.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-checkbox--docs
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/The-AA-Design-System-POC?node-id=16667-14318
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-06-15
platforms: ["Web", "Mobile app"]
anatomy:
  image: https://placehold.co/1280x720
  parts:
    - name: Checkbox box
      description: 24×24px, rounded corners. Required.
      image: https://placehold.co/1280x720
    - name: Check icon
      description: Shown only when checked. Conditional.
      image: https://placehold.co/1280x720
    - name: Label
      description: Bold, heading-style text. Default variant only.
      image: https://placehold.co/1280x720
    - name: Description
      description: Optional secondary text.
      image: https://placehold.co/1280x720
variants:
  - name: Default
    description: Full checkbox with label and optional description
    image: https://placehold.co/1280x720
  - name: Atom
    description: Icon-only, no label — provide aria-label
    image: https://placehold.co/1280x720
behavior:
  - name: Default
    description: Unchecked, resting state
    image: https://placehold.co/1280x720
  - name: Hover
    description: Light grey fill, black border
    image: https://placehold.co/1280x720
  - name: Focused
    description: Dashed blue focus ring
    image: https://placehold.co/1280x720
  - name: Checked
    description: Dark fill with check icon
    image: https://placehold.co/1280x720
bestPractices:
  do:
    - When more than one option can be selected from a list
    - For a single yes/no setting that can be toggled independently
  dont:
    - When only one option can be selected — use radio instead
    - When the action should apply immediately — use a switch instead
accessibility:
  - Each checkbox must have an associated label element
  - Focus state must meet WCAG 2.4.11
  - Checked state must not rely on colour alone
---

## Usage

Use a checkbox when a user needs to select multiple items from a list, or to confirm a single independent choice.

### General guidance

- Keep labels short, specific, and scannable
- Make the whole row clickable, not just the box
