---
# Gaps, for review:
#   - Figma annotation text was not readable, so no Figma-specific usage guidance for Filter or Assist is included
title: Chip
description: >-
  Chip is a compact button for selectable options and removable items. Use
  Choice chips inside Chip Group when you want the group to manage selection;
  Input chips emit a removal event for the parent to handle.
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=13000-6412
storybookUrl: https://aa-design-system-dev.theaa.digital/?path=/docs/components-chip--docs
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-10-23'
platforms: [Web, Mobile app]
sections:
  - type: anatomy
    heading: Anatomy
    items:
      - 'Icon start: optional leading icon; Assist adds a calendar icon and selected Filter adds a check-circle icon'
      - 'Text: the visible chip label provided through the default slot'
      - 'X circle: trailing removal icon shown on Input chips'
      - 'Focus: dashed ring shown when the chip receives keyboard-visible focus'
    image: https://placehold.co/1280x720
    imageAlt: Labelled Chip anatomy diagram

  - type: two-col
    heading: Examples
    items:
      - title: Choice
        description: >-
          Chip Group manages Choice chips as one-at-a-time selections by
          default. Set multiple on the group to let people select several.
        image: https://placehold.co/1280x720
        imageAlt: Choice chips inside Chip Group
      - title: Input
        description: >-
          Use Input for removable items. When activated, it emits chip-remove
          for the parent component to handle.
        image: https://placehold.co/1280x720
        imageAlt: Input chip with a remove icon
      - title: Filter
        description: >-
          A selected Filter shows a check-circle icon. The component emits
          chip-select; the parent component manages the selected state.
        image: https://placehold.co/1280x720
        imageAlt: Selected Filter chip with a check-circle icon
      - title: Assist
        description: >-
          Assist shows a calendar icon by default. The component emits
          chip-select; the parent component manages the selected state.
        image: https://placehold.co/1280x720
        imageAlt: Assist chip with a calendar icon

  - type: two-col
    heading: Behaviour and states
    items:
      - title: Selection
        description: >-
          Choice, Filter and Assist emit chip-select when activated. They do
          not change their own selected state; Chip Group manages Choice
          selection, while the parent handles other variants.
        image: https://placehold.co/1280x720
        imageAlt: Choice chips showing selected and unselected states
      - title: Removal
        description: >-
          Input always shows its X circle icon. Activating it emits
          chip-remove; the parent component handles removal.
        image: https://placehold.co/1280x720
        imageAlt: Input chip with its X circle icon
      - title: Hover and focus
        description: >-
          Hover changes the background and border colours. Keyboard-visible
          focus adds a dashed ring around the button.
        image: https://placehold.co/1280x720
        imageAlt: Chip in its hover and focus states
      - title: Selected appearance
        description: >-
          Setting selected changes the chip to a dark background with light
          text. A selected Filter also shows a check-circle icon.
        image: https://placehold.co/1280x720
        imageAlt: Selected Chip with a dark background

  - type: side-by-side
    heading: When to use
    items:
      - title: Use Chip Group for managed selection
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Choice chips in a labelled group
            label: Do
            caption: Place Choice chips inside Chip Group for single or multiple selection
          - image: https://placehold.co/1280x720
            imageAlt: Standalone Choice chip
            label: Don't
            caption: Don't expect a standalone Choice chip to update selected; use Chip Group or handle chip-select in the parent component
      - title: Use Input for removable items
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Input chip representing a removable item
            label: Do
            caption: Use Input for removable items and handle chip-remove in the parent component
          - image: https://placehold.co/1280x720
            imageAlt: Choice chip used for a removable item
            label: Don't
            caption: Don't use Choice for a removable item; choose Input

  - type: side-by-side
    heading: Content guidance
    list:
      - Use a short, direct label that identifies the option when read on its own
      - Preserve AA product names such as "Onward Travel"; use sentence case for other labels
      - Give Chip Group a concise label and add description or helper text when people need more context
      - Provide meaningful visible text; an empty default slot displays "Value"
    items:
      - figures:
          - image: https://placehold.co/1280x720
            imageAlt: Chip with a clear cover label
            label: Do
            caption: '"Roadside"'
          - image: https://placehold.co/1280x720
            imageAlt: Chip with a generic label
            label: Don't
            caption: '"Option 1"'

  - type: side-by-side
    heading: Things to consider
    list:
      - Chip labels stay on one line; long text can make the chip wider
      - The component has no disabled property, and its internal button remains enabled

  - type: properties
    heading: Properties
    tables:
      - rows:
          - name: variant
            options: choice | input | filter | assist
            defaultValue: choice
            description: Selects the chip variant and its interaction behaviour
          - name: selected
            options: false | true
            defaultValue: 'false'
            description: Sets the selected appearance and aria-pressed state for Choice, Filter and Assist
          - name: 'default: <slot> slot'
            options: —
            description: Provides the visible label; the component displays "Value" when the slot is empty
          - name: 'icon: <slot> slot'
            options: —
            description: Adds an optional leading icon

  - type: accessibility
    focusOrder:
      - Each Chip exposes one native <button> in its position in the DOM order
      - Chip Group's role=group wrapper is not focusable; its child chips follow their DOM order
    keyboard:
      - key: Enter
        action: Activates the native button and emits chip-select or chip-remove, depending on the variant
      - key: Space
        action: Activates the native button and emits chip-select or chip-remove, depending on the variant
    aria:
      - Choice, Filter and Assist expose aria-pressed based on selected; Input omits aria-pressed
      - Chip Group uses role=group and aria-labelledby when its label is supplied; provide a label to give the group an accessible name
      - Input includes visually hidden ", remove" text after the visible label; avoid repeating "remove" in the visible label

  - type: related-components
    items:
      - label: Chip group
        href: /components/aa-chip-group
        note: Use to label and manage selection for Choice chips
---
