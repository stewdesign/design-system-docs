---
title: Segmented Control
description: >-
  A segmented control lets you switch between a small set of related
  options, with one clear choice active at a time. Use it to let users
  quickly switch between 2–4 closely related options that update the same
  content instantly — for more than that, use another pattern. Keep
  labels short, clear, and consistent, always show one option selected,
  place it near the content it controls, and don't overload it: clarity
  beats flexibility.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-segmented-control--docs
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
      - Segment
      - Track
      - Label
  - type: two-col
    heading: Variants
    items:
      - title: Mobile
        description: Full-width within page margins at 768px and below. Pills fill to evenly occupy the container width.
        image: https://placehold.co/1280x720
        caption: Image of the mobile variant.
      - title: Desktop
        description: Container sizes to content, wrapping tightly around the pills at above 768px.
        image: https://placehold.co/1280x720
        caption: Image of the desktop variant.
  - type: two-col
    heading: Behavior
    items:
      - title: Default
        description: Unselected, lighter colour to indicate it is not the active state.
        image: https://placehold.co/1280x720
        caption: Image of the default state.
      - title: Active
        description: Dark background and strong font weight to indicate the selected option.
        image: https://placehold.co/1280x720
        caption: Image of the active state.
      - title: Hover
        description: Increases contrast of the label and icon to provide feedback and affordance.
        image: https://placehold.co/1280x720
        caption: Image of the hover state.
      - title: Focus
        description: Dotted border applied for keyboard users. Content is read aloud for screen reader users.
        image: https://placehold.co/1280x720
        caption: Image of the focus state.
  - type: side-by-side
    heading: Best practices
    items:
      - title: Number of options
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use it for switching between 2–4 closely related options."
          - image: https://placehold.co/1280x720
            caption: "Don't: use it for more than 5 options — use another pattern."
      - title: What it controls
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use it for changing views, filters, or modes on the same content."
          - image: https://placehold.co/1280x720
            caption: "Don't: use it for options that navigate to new pages."
      - title: Selection behaviour
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use it when the result updates instantly and one option is active at a time."
          - image: https://placehold.co/1280x720
            caption: "Don't: use it for choices that stack or combine."
      - title: Option complexity
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use it when options are equal in importance and self-explanatory."
          - image: https://placehold.co/1280x720
            caption: "Don't: use it when users need descriptions or help text to understand the options."
  - type: design-tokens
    tokens:
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
  - type: accessibility
    items:
      - 'The track should use role="group" with an aria-label describing the control'
      - 'Each segment should be a button element with aria-pressed="true" on the active option'
      - Focus state must be visible and meet WCAG 2.4.11
      - Labels must make sense out of context — avoid "Option 1", "Option 2"
      - Do not rely on colour alone to indicate the active state
  - type: related-components
    items:
      - label: Radio
        href: /design-system-docs/components/radio
        note: use instead when options are not equal in importance or when more than 4 choices are needed
      - label: Button
        href: /design-system-docs/components/button
        note: use instead when the action triggers a process rather than switching a view
---
