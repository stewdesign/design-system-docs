---
title: Choice chip
description: >-
  Choice chips let people select one option from a short, mutually exclusive set. Use them for compact choices such as fuel type or month, where the available options are clear at a glance. A selected choice chip uses a solid container fill and no checkmark, behaving like a radio button or segmented control. Do not use choice chips when people can select more than one option; use a filter chip for multi-select instead. Use open radio controls when options need supporting text, prices, or a full-width vertical layout.
figmaUrl: "https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=14003-23522"
previewImage: "https://placehold.co/1280x720"
lastUpdated: 2026-09-07
platforms:
  - Web
  - Mobile app
sections:
  - type: anatomy
    heading: Anatomy
    items:
      - "Label"
      - "Optional description"
      - "Choice chip container"
      - "Text label"
      - "Optional leading icon"
    image: "https://placehold.co/1280x548"
    imageAlt: "Anatomy of a choice chip field with label, description, and chips"
    caption: "A choice chip field combines a clear prompt with a short set of mutually exclusive options."

  - type: two-col
    heading: Behaviour and states
    items:
      - title: Default
        description: "All unselected options use the default chip treatment. Selecting one option clears the previous selection in the same group."
        image: "https://placehold.co/1280x720"
        imageAlt: "Unselected choice chips"
        caption: "Default choice chips"
      - title: Selected
        description: "The selected option uses a solid container fill to establish the active choice. Do not show a checkmark."
        image: "https://placehold.co/1280x720"
        imageAlt: "Selected choice chip with solid fill"
        caption: "Selected choice chip"
      - title: Hover
        description: "On pointer devices, hover provides temporary feedback without changing the selected value."
        image: "https://placehold.co/1280x720"
        imageAlt: "Hovered choice chip"
        caption: "Hover state"

  - type: side-by-side
    heading: Best practices
    items:
      - title: Keep choices mutually exclusive
        figures:
          - image: "https://placehold.co/1280x720"
            imageAlt: "One fuel type selected in a choice chip group"
            caption: "Do: use one selected option for a single-choice question."
          - image: "https://placehold.co/1280x720"
            imageAlt: "Multiple choice chips selected"
            caption: "Don't: use choice chips for independent selections."
      - title: Use concise labels
        figures:
          - image: "https://placehold.co/1280x720"
            imageAlt: "Choice chips with short labels"
            caption: "Do: use brief, recognisable sentence-case labels."
          - image: "https://placehold.co/1280x720"
            imageAlt: "Choice chips with long labels"
            caption: "Don't: use long labels that make the chip group difficult to scan. Use radio buttons instead."

  - type: design-tokens
    tokens:
      - name: "Label typography"
        value: "14px, Medium (500), sentence case"
      - name: "Chip padding"
        value: "8px vertical, 12px horizontal"
      - name: "Selected indicator"
        value: "Solid container fill; no checkmark"
      - name: "Selection model"
        value: "One selected option per group"

  - type: accessibility
    items:
      - "Present each related set of choice chips as a single-choice group with a programmatic label."
      - "Expose the selected option with the appropriate radio-style selected state."
      - "Support keyboard navigation between options and selection with the platform-standard interaction."
      - "Keep visible focus distinct from default, hover, and selected states."
      - "Use text labels that communicate the option without relying on colour or the selected fill alone."
      - "Maintain sufficient contrast for labels, focus indicators, and selected containers."

  - type: related-components
    items:
      - label: "Filter chip"
        href: "/components/filter-chip"
        note: "Use when people can select multiple independent options."
      - label: "Radio"
        href: "/components/radio"
        note: "Use when Labels need to be longer than two words."
---
