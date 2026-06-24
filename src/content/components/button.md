---
title: Button
description: Buttons trigger actions — submitting forms, confirming choices, and navigating flows.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-button--docs
figmaUrl: ""
---

## Usage

Use a button for any interactive element that triggers an action. Every surface that causes something to happen should use a button, not a link.

### Use button

- For actions — submitting a form, confirming a choice, triggering a process
- When the action changes state or data
- When you need a clear, tappable call to action

### Don't use button

- For navigation to another page — use a link instead
- More than one primary button per view
- As a decorative element with no action

### General guidance

- Label should describe the action, not the component
- Keep labels short — ideally two words or fewer
- Use sentence case, not title case
- Always pair a primary button with a secondary or ghost where needed

## Anatomy

![Button anatomy diagram](/design-system-docs/images/button-anatomy.png)

1. **Container** — the clickable surface of the button
2. **Label** — describes the action, required
3. **Icon** — optional, left or right of label

## Variants

![Button variants](/design-system-docs/images/button-variants.png)

**Primary** — the single most important action on a page. Use only one primary button per view.

**Secondary** — supporting actions alongside a primary button. Do not use as the only button if the action is important.

**Ghost** — low-emphasis actions and tertiary choices. Do not use for destructive actions.

## States

![Button states](/design-system-docs/images/button-states.png)

**Default** — resting state, ready for interaction.

**Hover** — increased contrast to signal interactivity.

**Focused** — visible focus ring for keyboard navigation.

**Disabled** — reduced contrast, not interactive.

## Design tokens

- **Background primary** — `surface/action/primary/default`
- **Background primary hover** — `surface/action/primary/hover`
- **Background secondary** — `surface/action/secondary/default`
- **Background secondary hover** — `surface/action/secondary/hover`
- **Label primary** — `text/action/default`
- **Label secondary** — `text/action/secondary`
- **Focus ring** — `border/action/focus`

## Accessibility

- All buttons must have a visible label or an `aria-label` if icon-only
- Disabled state must still meet 3:1 contrast ratio against background
- Focus indicator must be visible and meet WCAG 2.4.11
- Use `type="button"` explicitly to prevent unintended form submission

## Related components

- [Segmented Control](/design-system-docs/components/segmented-control) — use for switching between 2–4 closely related views rather than triggering a single action
