---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Segmented control
description: >-
  Segmented control is a compact control for switching between a small set of mutually
  exclusive views or filters without leaving the page. It wraps a group of Pill
  children, owns their exclusive selection state, and provides arrow-key roving
  focus across them, matching Figma's Segmented Control component (node 16778:5067),
  built on .Segmented Pill (node 17285:15725).
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
    Track: the pill-shaped container (role="radiogroup") that holds the pills and
    applies the shared background, padding and spacing.
  - >-
    Pills (Pill, slotted): the individual options. Each pill renders its own default/hover/active/focus
    states and may include a leading icon slot or a notification badge.
  - >-
    Leading icon (within a pill, icon slot): optional icon shown before a pill's
    label.
  - >-
    Badge (within a pill, badge attribute): optional notification dot shown on a
    pill.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Segmented control anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Small segmented control
    description: Default size, 2-3 options.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: Small segmented control'
  - title: Large segmented control
    description: Larger touch target and type scale.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: Large segmented control'
  - title: Option counts
    description: 2, 3 and 4-option variants side by side.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: Option counts'
  - title: With icons
    description: Each pill preceded by a leading icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: With icons'
  - title: With badge
    description: A pill showing a notification dot.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: With badge'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Selection
    description: >-
      Clicking a pill activates it and deactivates every other pill in the group;
      exactly one pill is active at all times. If no pill is marked active on connect,
      the first pill becomes active.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: selection'
  - title: Roving focus
    description: >-
      Arrow keys move both selection and focus between pills. ArrowRight/ArrowDown
      move to the next pill, ArrowLeft/ArrowUp to the previous, wrapping around
      at either end; Home/End jump to the first/last pill.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: roving focus'
  - title: Size fan-out
    description: >-
      Setting size on the wrapper only affects pills that don't already declare
      their own size attribute — an explicit size on a pill always wins.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: size fan-out'
  - title: Active pill styling
    description: >-
      An active pill gets a filled background, a distinct text colour and a bold
      weight; at size="large", the active state also steps the type down to the
      medium scale rather than reusing large's own size, since bold at the larger
      size read as too heavy in Figma.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: active pill styling'
  - title: Hover
    description: >-
      Inactive pills get a secondary background on hover; the active pill has no
      separate hover treatment.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: hover'
  - title: Focus
    description: >-
      A dashed focus ring appears around the focused pill via :focus-visible, matching
      the shared focus-ring token used elsewhere in the design system.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: focus'
  - title: Responsive behaviour
    description: >-
      The control has no responsive breakpoints of its own; it sizes to its content
      and will overflow if its container is too narrow — long labels or many pills
      should be checked against the available width.
    image: https://placehold.co/1280x720
    imageAlt: 'Segmented control: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Segmented control example: Switching between 2-4 closely related views,
        filters or time ranges that are visible on the same screen (e.g. "Monthly"
        / "Annual").
      label: Do
      caption: >-
        Switching between 2-4 closely related views, filters or time ranges that
        are visible on the same screen (e.g. "Monthly" / "Annual").
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Segmented control example: More than a handful of options, or options with
        long labels — use Select or a tab pattern instead.
      label: Don't
      caption: >-
        More than a handful of options, or options with long labels — use Select
        or a tab pattern instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Segmented control example: Compact, single-selection choices where all options
        should be visible at once, unlike a dropdown.
      label: Do
      caption: >-
        Compact, single-selection choices where all options should be visible at
        once, unlike a dropdown.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Segmented control example: Navigating to a different page or route — segmented
        control is for in-page state, not navigation; use Button or standard links
        for navigation.
      label: Don't
      caption: >-
        Navigating to a different page or route — segmented control is for in-page
        state, not navigation; use Button or standard links for navigation.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Segmented control example: Content that benefits from an icon or a notification
        badge alongside a short label.
      label: Do
      caption: >-
        Content that benefits from an icon or a notification badge alongside a short
        label.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Segmented control example: Multi-select choices — this component enforces
        single selection only, matching native radio-group semantics.
      label: Don't
      caption: >-
        Multi-select choices — this component enforces single selection only, matching
        native radio-group semantics.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep pill labels to one or two words so the whole group stays legible at a glance
    and doesn't wrap.
  - >-
    Use parallel wording across all pills in a group (e.g. all nouns, or all time
    periods) so the set reads as one family of options.
  - >-
    Only add a badge when there's something genuinely new or requiring attention
    behind that option.
  - Use sentence case, not title case.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Segmented control example: "Monthly"'
      label: Do
      caption: '"Monthly"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Segmented control example: "View by Month"'
      label: Don't
      caption: '"View by Month"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Segmented control example: "Cars"'
      label: Do
      caption: '"Cars"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Segmented control example: "All of your Cars"'
      label: Don't
      caption: '"All of your Cars"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Segmented control example: "New" (badge)'
      label: Do
      caption: '"New" (badge)'
    - image: https://placehold.co/1280x720
      imageAlt: 'Segmented control example: "!!! NEW !!!"'
      label: Don't
      caption: '"!!! NEW !!!"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The wrapper doesn't limit how many pills you add — check readability and available
    width before using more than 3-4 options.
  - >-
    Don't set active on more than one pill; the component doesn't validate this
    and will simply follow whichever pill last dispatched a select event.
  - >-
    Pill is an internal primitive — it has no story of its own and isn't intended
    to be reached for directly outside Segmented control.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: size
      options: small | large
      defaultValue: small
      description: Fans out to every child pill that doesn't set its own size attribute.
    - name: Property
      options: Options
      defaultValue: Default
      description: Description
    - name: '---'
      options: '---'
      defaultValue: '---'
      description: '---'
    - name: active
      options: boolean
      defaultValue: 'false'
      description: >-
        Marks the currently selected pill. The parent enforces exactly one active
        pill at a time.
    - name: size
      options: small | large
      defaultValue: small
      description: Overrides the size inherited from the parent when set explicitly
        on the pill.
    - name: badge
      options: boolean
      defaultValue: 'false'
      description: Shows a small notification dot on the pill.
- type: accessibility
  focusOrder:
  - >-
    The control occupies a single stop in the surrounding tab order. Only the active
    pill is in the tab sequence (tabindex="0"); every other pill is tabindex="-1"
    and reached via arrow keys, matching the standard roving-tabindex radio-group
    pattern.
  keyboard:
  - key: Arrow right / Arrow down
    action: Moves selection and focus to the next pill, wrapping to the first.
  - key: Arrow left / Arrow up
    action: Moves selection and focus to the previous pill, wrapping to the last.
  - key: Home
    action: Moves selection and focus to the first pill.
  - key: End
    action: Moves selection and focus to the last pill.
  aria:
  - >-
    role="radiogroup" on the track — the group of pills behaves as a single-selection
    radio group.
  - >-
    role="radio" and aria-checked on each Pill — reflects whether that pill is currently
    active.
  - >-
    Roving tabindex (0 on the active pill, -1 on the rest) keeps the group as one
    tab stop while allowing arrow-key navigation between pills.
  seo:
  - >-
    Renders as real, focusable <button> elements inside a semantic radiogroup rather
    than generic clickable <div>s, so assistive technology and automated agents
    can identify and operate it reliably.
  - >-
    Pill label text should stand on its own without relying on surrounding page
    context, since it's the only accessible name exposed for each option.
- type: related-components
  items:
  - label: Select
    href: /components/select
    note: >-
      A dropdown alternative for a longer list of options that doesn't need to stay
      fully visible.
  - label: Button group
    href: /components/button-group
    note: For a set of independent actions rather than a single mutually exclusive
      choice.
  - label: Icon
    href: /components/icon
    note: Supplies the optional leading icon slotted into a pill.
---
