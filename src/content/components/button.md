---
title: Button
description: >-
  Buttons trigger actions — submitting forms, confirming choices, and
  navigating flows. Use a button for any interactive element that triggers
  an action; every surface that causes something to happen should use a
  button, not a link. The label should describe the action, not the
  component — keep it short, ideally two words or fewer, in sentence case
  rather than title case — and always pair a primary button with a
  secondary or ghost button where needed.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-button--docs
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
      - Container
      - Label
      - Icon
  - type: two-col
    heading: Variants
    items:
      - title: Primary
        description: The single most important action on a page. Use only one primary button per view.
        image: https://placehold.co/1280x720
        caption: Image of the primary variant.
      - title: Secondary
        description: Supporting actions alongside a primary button. Do not use as the only button if the action is important.
        image: https://placehold.co/1280x720
        caption: Image of the secondary variant.
      - title: Ghost
        description: Low-emphasis actions and tertiary choices. Do not use for destructive actions.
        image: https://placehold.co/1280x720
        caption: Image of the ghost variant.
  - type: two-col
    heading: Behavior
    items:
      - title: Default
        description: Resting state, ready for interaction.
        image: https://placehold.co/1280x720
        caption: Image of the default state.
      - title: Hover
        description: Increased contrast to signal interactivity.
        image: https://placehold.co/1280x720
        caption: Image of the hover state.
      - title: Focused
        description: Visible focus ring for keyboard navigation.
        image: https://placehold.co/1280x720
        caption: Image of the focused state.
      - title: Disabled
        description: Reduced contrast, not interactive.
        image: https://placehold.co/1280x720
        caption: Image of the disabled state.
  - type: side-by-side
    heading: Best practices
    items:
      - title: Actions vs. navigation
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use a button for actions — submitting a form, confirming a choice, triggering a process."
          - image: https://placehold.co/1280x720
            caption: "Don't: use a button for navigation to another page — use a link instead."
      - title: One clear primary action
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use one clear, tappable call to action when you need it to stand out."
          - image: https://placehold.co/1280x720
            caption: "Don't: use more than one primary button per view."
      - title: Every button does something
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: use a button when the action changes state or data."
          - image: https://placehold.co/1280x720
            caption: "Don't: use a button as a decorative element with no action."
  - type: design-tokens
    tokens:
      - name: Background primary
        value: surface/action/primary/default
      - name: Background primary hover
        value: surface/action/primary/hover
      - name: Background secondary
        value: surface/action/secondary/default
      - name: Background secondary hover
        value: surface/action/secondary/hover
      - name: Label primary
        value: text/action/default
      - name: Label secondary
        value: text/action/secondary
      - name: Focus ring
        value: border/action/focus
  - type: accessibility
    items:
      - All buttons must have a visible label or an aria-label if icon-only
      - Disabled state must still meet 3:1 contrast ratio against background
      - Focus indicator must be visible and meet WCAG 2.4.11
      - 'Use type="button" explicitly to prevent unintended form submission'
  - type: related-components
    items:
      - label: Segmented Control
        href: /design-system-docs/components/segmented-control
        note: use for switching between 2–4 closely related views rather than triggering a single action
---
