---
title: Segmented Control
description: A segmented control lets you switch between a small set of related options, with one clear choice active at a time.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-segmented-control--docs
figmaUrl: ""
---

## Usage

Use a segmented control to let users quickly switch between a small set of closely related options that update the same content instantly.

### Use segmented control

- Switching between 2–4 closely related options
- Changing views, filters, or modes on the same content
- When the result updates instantly
- When options are equal in importance

### Don't use segmented control

- More than 5 options — use another pattern
- Options that navigate to new pages
- Choices that stack or combine
- When users need descriptions or help text

### General guidance

- Keep labels short, clear, and consistent
- Always show one option selected
- Place it near the content it controls
- Don't overload it — clarity beats flexibility

## Anatomy

![Segmented control anatomy diagram](/design-system-docs/images/segmented-control-anatomy.png)

1. **Segment** — the individual pill, contains a label and optional icon
2. **Track** — the container that wraps all segments horizontally
3. **Label** — short text identifying the option, keep to 1–2 words

## Variants

![Segmented control variants](/design-system-docs/images/segmented-control-variants.png)

**Mobile** — full-width within page margins at 768px and below. Pills fill to evenly occupy the container width.

**Desktop** — container sizes to content, wrapping tightly around the pills at above 768px.

## Options

Segmented control is restricted to 2–4 options.

![Segmented control options](/design-system-docs/images/segmented-control-options.png)

**2 options** — default state is active, indicates it will create an action upon interaction.

**3 options** — hover state increases contrast of the button to provide user feedback and affordance.

**4 options** — inactive state decreases contrast to clearly show the control is unavailable.

## States

![Segmented control states](/design-system-docs/images/segmented-control-states.png)

**Default** — unselected, lighter colour to indicate it is not the active state.

**Active** — dark background and strong font weight to indicate the selected option.

**Hover** — increases contrast of the label and icon to provide feedback and affordance.

**Focus** — dotted border applied for keyboard users. Content is read aloud for screen reader users.

## Design tokens

- **Track background** — `surface/neutral/secondary/default`
- **Segment active background** — `surface/action/primary/default`
- **Segment active label** — `text/action/default`
- **Segment default label** — `text/neutral/primary`
- **Focus ring** — `border/action/focus`

## Accessibility

- The track should use `role="group"` with an `aria-label` describing the control
- Each segment should be a `button` element with `aria-pressed="true"` on the active option
- Focus state must be visible and meet WCAG 2.4.11
- Labels must make sense out of context — avoid "Option 1", "Option 2"
- Do not rely on colour alone to indicate the active state

## Related components

- [Radio](/design-system-docs/components/radio) — use instead when options are not equal in importance or when more than 4 choices are needed
- [Button](/design-system-docs/components/button) — use instead when the action triggers a process rather than switching a view
