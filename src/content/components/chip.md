---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Chip
description: >-
  Chip is a compact, pill-shaped control used for choices, filters, assists, and
  removable input tags. Its behaviour varies by variant: three variants (choice,
  filter, assist) are controlled toggles reporting intent to an ancestor; input
  is a removable tag with no toggle state.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=13000-6412
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
    Icon slot (icon): optional leading icon. assist chips show a default calendar
    icon automatically if none is slotted.
  - >-
    State icon: a check-circle shown on selected filter chips, or an x-circle "remove"
    icon shown unconditionally on input chips.
  - >-
    Label: the chip's value text, via the default slot (falls back to "Value" if
    empty).
  image: https://placehold.co/1280x720
  imageAlt: Labelled Chip anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Choice
    description: Default selectable chip.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: Choice'
  - title: Selected
    description: The selected visual state.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: Selected'
  - title: Input
    description: A removable tag with a trailing remove icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: Input'
  - title: Assist
    description: An icon-led suggestion chip.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: Assist'
  - title: Removable
    description: A row of input chips that remove themselves on chip-remove.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: Removable'
  - title: With label
    description: choice chips inside a labelled Chip group.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: With label'
  - title: Multiple selection
    description: Independently toggled choice chips inside a multiple group.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: Multiple selection'
  - title: Group layouts
    description: Inline and grid layouts, mixing variants.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: Group layouts'
- type: two-col
  heading: Behaviour and states
  items:
  - title: input has no selected state
    description: >-
      Its trailing x-circle icon shows unconditionally (not gated on selected),
      and a click fires chip-remove rather than participating in toggle semantics.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: input has no selected state'
  - title: choice/filter/assist stay controlled
    description: >-
      A click never mutates selected itself — it only dispatches a bubbling, composed
      chip-select event. An ancestor (typically Chip group) decides what "selected"
      should mean (exclusive vs. multiple) and sets the attribute accordingly.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: choice/filter/assist stay controlled'
  - title: Standalone chip is inert on click
    description: >-
      With no managing group, clicking a choice/filter/assist chip dispatches the
      event but nothing visibly changes — same behaviour as a standalone Pill/Segmented
      control leaf.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: standalone chip is inert on click'
  - title: assist default icon
    description: Shows a calendar icon automatically if no icon is slotted.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: assist default icon'
  - title: filter selected icon
    description: Shows a check-circle state icon when selected.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: filter selected icon'
  - title: Hover/focus
    description: >-
      Background and border colour shift on hover; a dashed focus ring appears on
      :focus-visible.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: hover/focus'
  - title: Selected styling
    description: >-
      Selected chips (choice/filter/assist) switch to a solid dark background and
      light text.
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: selected styling'
  - title: Responsive behaviour
    description: >-
      Sizes to its content; no dedicated breakpoints of its own (wrapping/layout
      is handled by a parent like Chip group).
    image: https://placehold.co/1280x720
    imageAlt: 'Chip: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - A single selectable option among several, especially inside Chip group (choice).
  - A filter toggle in a filter bar (filter).
  - >-
    A quick, icon-led action suggestion (assist), e.g. offering to open a date picker.
  - >-
    A removable value representing an already-applied input, like a selected tag
    (input).
  dont:
  - A binary on/off setting in a traditional form — use Checkbox instead.
  - >-
    Mutually exclusive choices needing full radio-button semantics and native form
    submission — use Radio.
  - >-
    A standalone chip expecting click feedback with no managing group — pair choice/filter/assist
    chips with Chip group, since a standalone chip is inert on click.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep chip values short — a word or short phrase, since the pill shape doesn't
    wrap gracefully (text is set to white-space: nowrap).
  - >-
    For input chips, use the exact value being represented (e.g. a selected filter
    term) so removal is unambiguous.
  - >-
    For assist chips, phrase the value as a suggested action or shortcut, not a
    full sentence.
  - Use sentence case.
  - Use British English spelling.
  - Keep wording specific and scannable — avoid vague values like "Option 1".
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip example: "Roadside & Home"'
      label: Do
      caption: '"Roadside & Home"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip example: "Option A"'
      label: Don't
      caption: '"Option A"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip example: "European cover"'
      label: Do
      caption: '"European cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Chip example: "Additional Coverage For Europe"'
      label: Don't
      caption: '"Additional Coverage For Europe"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Because text is set to white-space: nowrap, very long chip values will overflow
    rather than wrap — keep values short by design, not just by convention.
  - >-
    selected is not mutated internally for toggle variants — setting it directly
    on a standalone chip works for initial/demo state, but any interactive toggling
    logic must live in a managing ancestor like Chip group.
  - >-
    input's remove icon includes visually-hidden text (", remove") appended to the
    accessible name — don't duplicate "remove" in the visible chip value itself,
    or the announced name will be redundant.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: choice | input | filter | assist
      defaultValue: choice
      description: >-
        Determines interaction model: choice/filter/assist are controlled toggles;
        input is a removable tag.
    - name: selected
      options: boolean
      defaultValue: 'false'
      description: >-
        Visual selected state. For toggle variants, a click never mutates this directly
        — only a managing ancestor (Chip group) should set it.
- type: accessibility
  focusOrder:
  - >-
    Chip renders a real <button> and participates in normal tab order at its position
    on the page.
  keyboard:
  - key: Enter
    action: >-
      Activates the chip — dispatches chip-select (toggle variants) or chip-remove
      (input).
  - key: Space
    action: Activates the chip (native <button> behaviour).
  aria:
  - >-
    aria-pressed — set to "true"/"false" on choice/filter/assist chips to reflect
    toggle state; omitted entirely on input chips, since they aren't a toggle.
  - >-
    The input variant's remove icon is paired with visually-hidden text (", remove")
    appended after the visible label, so the accessible name communicates the remove
    action.
  - No role override is needed — a real <button> element is used directly.
  seo:
  - >-
    Renders as a real <button>, so it's natively focusable and interactive to assistive
    technology, without relying on simulated ARIA widget roles.
  - >-
    Because choice/filter/assist chips don't manage their own selected state, an
    automated agent inspecting the page should rely on the live aria-pressed value
    (reflecting what the managing group has set) rather than assuming click always
    toggles state directly.
- type: related-components
  items:
  - label: Chip group
    href: /components/chip-group
    note: >-
      Manages selection for choice chips; groups chips visually and provides an
      optional label header.
  - label: Checkbox
    href: /components/checkbox
    note: Alternative selection patterns for traditional form contexts.
  - label: Radio
    href: /components/radio
    note: Alternative selection patterns for traditional form contexts.
  - label: Icon
    href: /components/icon
    note: Supplies the leading icon and state icons.
---
