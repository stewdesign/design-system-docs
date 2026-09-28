---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma (node 19324:1834, .Trailing-Action).
#   - Examples: List item trailing has no story of its own — see src/stories/components/list-item.stories.ts for usage in context: a chevron Icon button (Default/Group stories), an Switch (WithSwitch), and an Checkbox (WithCheckbox).
#   - Content guidance (what to write): not applicable — List item trailing has no text content of its own; any labelling belongs to the slotted control (e.g. an Icon button's label, or an Switch's label).
#   - Content guidance (how to write): not applicable — see content guidance for the slotted control and for List item.
#   - Properties: List item trailing exposes no configurable properties. It adds no chrome of its own — every one of Figma's trailing-action types (Button Icon/Radio/Checkbox/Switch/Button/Button Link) is already a complete, independently styled and focusable component in this system, so the wrapper's only job is positioning.
#   - Keyboard interactions: not applicable at this component's level — keyboard behaviour (Enter/Space, arrow keys, etc.) belongs entirely to whichever control is slotted in. See that control's own documentation (Icon button, Switch, Checkbox, Radio, Button).
title: List item trailing
description: >-
  List item trailing is an internal primitive that positions the trailing action
  inside an List item — a chevron button, switch, checkbox, radio or link. It is
  not meant to be reached for directly outside that context, and has no story of
  its own in Storybook — this doc covers its structure for engineers building or
  extending List item, not as a component designers pick independently.
storybookUrl: ''
figmaUrl: ''
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - >-
    Trailing wrapper (.trailing, part="trailing"): an inline-flex box that simply
    positions whatever real control is slotted in.
  - >-
    Default slot: holds a complete, independently focusable component: Icon button,
    Radio, Checkbox, Switch or Button.
  image: https://placehold.co/1280x720
  imageAlt: Labelled List item trailing anatomy diagram
- type: two-col
  heading: Behaviour and states
  items:
  - title: No chrome or state of its own
    description: >-
      The wrapper never fights the slotted control's own interaction states (hover,
      focus, checked, disabled) — those all belong to whatever real component (Switch,
      Checkbox, etc.) is placed inside it.
    image: https://placehold.co/1280x720
    imageAlt: 'List item trailing: no chrome or state of its own'
  - title: Independent focusability
    description: >-
      Because List item places its own href link behind the visible content (pointer-events:
      none on the label), a genuinely interactive control slotted into List item
      trailing stays on top and independently focusable, rather than being nested
      inside the row's own link.
    image: https://placehold.co/1280x720
    imageAlt: 'List item trailing: independent focusability'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Exclusively inside List item's slot="trailing", to present an action or control
    at the end of the row — e.g. a chevron icon button for navigation, or a switch/checkbox/radio
    for an inline setting.
  dont:
  - >-
    Standalone, outside of List item — it has no independent story or usage pattern
    and exists purely to support that parent component.
  - >-
    As a general-purpose wrapper for interactive controls elsewhere in the system
    — use the control (Switch, Checkbox, etc.) directly instead.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Because List item can also be a link (via its own href), never slot another
    link or nested interactive-in-interactive control here that would conflict with
    the row's own link semantics — stick to a single, real, independently focusable
    control per row.
  - >-
    The wrapper does not resize or otherwise constrain its slotted content beyond
    basic inline-flex alignment — sizing (e.g. size="small" on an Icon button) is
    the consumer's responsibility.
- type: accessibility
  focusOrder:
  - >-
    List item trailing is not itself focusable. It sits after the row's label/description
    in DOM order, so its slotted control (an Icon button, Switch, Checkbox, Radio
    or Button) receives focus in that position within the tab order, independently
    of the row's own href link when one is set.
  aria:
  - >-
    No roles, states or properties are applied by List item trailing itself — all
    ARIA semantics come from the slotted control.
  seo:
  - >-
    Renders a plain <span> — no semantic meaning is added or implied; the slotted
    control (a real <button>, native form control, etc.) carries its own semantics
    directly.
- type: related-components
  items:
  - label: List item
    href: /components/list-item
    note: >-
      The parent component this primitive is designed exclusively to support, via
      slot="trailing".
  - label: List item leading
    href: /components/list-item-leading
    note: The equivalent primitive for the leading side of an List item.
  - label: Icon button
    href: /components/icon-button
    note: The real controls commonly slotted in.
  - label: Switch
    href: /components/switch
    note: The real controls commonly slotted in.
  - label: Checkbox
    href: /components/checkbox
    note: The real controls commonly slotted in.
  - label: Radio
    href: /components/radio
    note: The real controls commonly slotted in.
  - label: Button
    href: /components/button
    note: The real controls commonly slotted in.
---
