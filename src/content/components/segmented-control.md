---
title: Segmented Control
description: A segmented control lets you switch between a small set of related options, with one clear choice active at a time.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-segmented-control--docs
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-06-15
platforms: ["Web", "Mobile app"]
anatomy:
  image: https://placehold.co/1280x720
  parts:
    - name: Segment
      description: The individual pill, contains a label and optional icon
      image: https://placehold.co/1280x720
    - name: Track
      description: The container that wraps all segments horizontally
      image: https://placehold.co/1280x720
    - name: Label
      description: Short text identifying the option, keep to 1–2 words
      image: https://placehold.co/1280x720
variants:
  - name: Mobile
    description: Full-width within page margins at 768px and below. Pills fill to evenly occupy the container width.
    image: https://placehold.co/1280x720
  - name: Desktop
    description: Container sizes to content, wrapping tightly around the pills at above 768px.
    image: https://placehold.co/1280x720
behavior:
  - name: Default
    description: Unselected, lighter colour to indicate it is not the active state.
    image: https://placehold.co/1280x720
  - name: Active
    description: Dark background and strong font weight to indicate the selected option.
    image: https://placehold.co/1280x720
  - name: Hover
    description: Increases contrast of the label and icon to provide feedback and affordance.
    image: https://placehold.co/1280x720
  - name: Focus
    description: Dotted border applied for keyboard users. Content is read aloud for screen reader users.
    image: https://placehold.co/1280x720
bestPractices:
  do:
    - Switching between 2–4 closely related options
    - Changing views, filters, or modes on the same content
    - When the result updates instantly
    - When options are equal in importance
  dont:
    - More than 5 options — use another pattern
    - Options that navigate to new pages
    - Choices that stack or combine
    - When users need descriptions or help text
designTokens:
  - name: Track background
    value: surface/neutral/secondary/default
  - name: Segment active background
    value: surface/action/primary/default
  - name: Segment active label
    value: text/action/default
  - name: Segment default label
    value: text/neutral/primary
  - name: Focus ring
    value: border/action/focus
accessibility:
  - 'The track should use role="group" with an aria-label describing the control'
  - 'Each segment should be a button element with aria-pressed="true" on the active option'
  - Focus state must be visible and meet WCAG 2.4.11
  - Labels must make sense out of context — avoid "Option 1", "Option 2"
  - Do not rely on colour alone to indicate the active state
relatedComponents:
  - label: Radio
    href: /design-system-docs/components/radio
    note: use instead when options are not equal in importance or when more than 4 choices are needed
  - label: Button
    href: /design-system-docs/components/button
    note: use instead when the action triggers a process rather than switching a view
---

## Usage

Use a segmented control to let users quickly switch between a small set of closely related options that update the same content instantly. Segmented control is restricted to 2–4 options — for more than that, use another pattern.

### General guidance

- Keep labels short, clear, and consistent
- Always show one option selected
- Place it near the content it controls
- Don't overload it — clarity beats flexibility
