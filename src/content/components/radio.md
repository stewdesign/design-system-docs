---
title: Radio
description: A radio lets users select a single item from a mutually exclusive list.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-radio--docs
figmaUrl: ""
---

## Usage

Use a radio group when a user must choose exactly one option from a visible list. All options should be shown at the same time.

### Use radio

- When only one option can be selected at any time
- If all options are visible at the same time
- When the choice is clear and mutually exclusive

### Don't use radio

- When more than one option can be selected — use checkboxes instead
- If the choice is optional or can be skipped
- When options change based on earlier answers
- If there are more than 6 options

### General guidance

- Always preselect a safe default where possible
- Keep labels short, specific, and scannable
- Stack options vertically for easier reading
- Make the whole row clickable, not just the circle

## Anatomy

![Radio anatomy diagram](/design-system-docs/images/radio-anatomy.png)

1. **Radio input** — the circular selector
2. **Label** — required, describes the option
3. **Description** — optional secondary text below the label

## States

![Radio states](/design-system-docs/images/radio-states.png)

**Default** — unselected, resting state.

**Hover** — shown when a user moves their cursor over the radio row.

**Selected** — indicates the user's active choice within the group.

**Focused** — shown when a user tabs to the input. Designed to conform to accessibility standards.

## Design tokens

- **Border default** — `border/inputs/default`
- **Border checked** — `border/inputs/checked`
- **Border focus** — `border/inputs/focus`
- **Border hover** — `border/inputs/hover`
- **Surface checked** — `surface/inputs/checked`
- **Label text** — `text/default/headings`
- **Description text** — `text/default/body`

## Accessibility

- Radio buttons must be grouped using a `fieldset` and `legend` to provide context for screen readers
- Each radio must have an associated `label` element
- The full row must be clickable — not just the radio circle
- Focus state must be clearly visible and meet WCAG 2.4.11
- Do not rely on colour alone to indicate selection state

## Related components

- [Checkbox](/design-system-docs/components/checkbox) — use instead when more than one option can be selected
- [Segmented Control](/design-system-docs/components/segmented-control) — use for switching between 2–4 closely related views when options are equal in importance
