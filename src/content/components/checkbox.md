---
title: Checkbox
description: A checkbox lets users select one or more options from a list, or confirm a single independent choice.
storybookUrl: https://69d7daf643a471aaf6a045a0-iwneeosjym.chromatic.com/?path=/docs/components-checkbox--docs
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/The-AA-Design-System-POC?node-id=16667-14318
---

## Usage

Use a checkbox when a user needs to select multiple items from a list, or to confirm a single independent choice.

### Use checkbox

- When more than one option can be selected from a list
- For a single yes/no setting that can be toggled independently

### Don't use checkbox

- When only one option can be selected — use radio instead
- When the action should apply immediately — use a switch instead

### General guidance

- Keep labels short, specific, and scannable
- Make the whole row clickable, not just the box

## Anatomy

| Element | Required | Notes |
|---|---|---|
| Checkbox box | Yes | 24×24px, rounded corners |
| Check icon | Conditional | Shown only when checked |
| Label | Default variant only | Bold, heading-style text |
| Description | No | Optional secondary text |

## Variants

| Variant | Description |
|---|---|
| Default | Full checkbox with label and optional description |
| Atom | Icon-only, no label — provide aria-label |

## States

| State | Description |
|---|---|
| Default | Unchecked, resting state |
| Hover | Light grey fill, black border |
| Focused | Dashed blue focus ring |
| Checked | Dark fill with check icon |

## Accessibility

- Each checkbox must have an associated label element
- Focus state must meet WCAG 2.4.11
- Checked state must not rely on colour alone