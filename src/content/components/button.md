---
title: Button
description: Buttons trigger actions — submitting forms, confirming choices, and navigating flows.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-button--docs
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-06-15
platforms: ["Web", "Mobile app"]
anatomy:
  image: https://placehold.co/1280x720
  parts:
    - name: Container
      description: The clickable surface of the button
      image: https://placehold.co/1280x720
    - name: Label
      description: Describes the action, required
      image: https://placehold.co/1280x720
    - name: Icon
      description: Optional, left or right of label
      image: https://placehold.co/1280x720
variants:
  - name: Primary
    description: The single most important action on a page. Use only one primary button per view.
    image: https://placehold.co/1280x720
  - name: Secondary
    description: Supporting actions alongside a primary button. Do not use as the only button if the action is important.
    image: https://placehold.co/1280x720
  - name: Ghost
    description: Low-emphasis actions and tertiary choices. Do not use for destructive actions.
    image: https://placehold.co/1280x720
behavior:
  - name: Default
    description: Resting state, ready for interaction.
    image: https://placehold.co/1280x720
  - name: Hover
    description: Increased contrast to signal interactivity.
    image: https://placehold.co/1280x720
  - name: Focused
    description: Visible focus ring for keyboard navigation.
    image: https://placehold.co/1280x720
  - name: Disabled
    description: Reduced contrast, not interactive.
    image: https://placehold.co/1280x720
bestPractices:
  do:
    - For actions — submitting a form, confirming a choice, triggering a process
    - When the action changes state or data
    - When you need a clear, tappable call to action
  dont:
    - For navigation to another page — use a link instead
    - More than one primary button per view
    - As a decorative element with no action
designTokens:
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
accessibility:
  - All buttons must have a visible label or an aria-label if icon-only
  - Disabled state must still meet 3:1 contrast ratio against background
  - Focus indicator must be visible and meet WCAG 2.4.11
  - 'Use type="button" explicitly to prevent unintended form submission'
relatedComponents:
  - label: Segmented Control
    href: /design-system-docs/components/segmented-control
    note: use for switching between 2–4 closely related views rather than triggering a single action
---

## Usage

Use a button for any interactive element that triggers an action. Every surface that causes something to happen should use a button, not a link.

### General guidance

- Label should describe the action, not the component
- Keep labels short — ideally two words or fewer
- Use sentence case, not title case
- Always pair a primary button with a secondary or ghost where needed
