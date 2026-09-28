---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Behaviour (Responsive behaviour): no explicit breakpoints found in source — confirm intended small-screen behaviour.
#   - Keyboard interactions: no arrow-key navigation between dropdown items found in source — confirm whether this is intended or a gap.
#   - ARIA: no aria-current or equivalent found on the current Progress stepper item — confirm whether assistive tech is informed which step is current beyond visual styling.
title: Progress stepper
description: >-
  Progress stepper is a compact, right-aligned dropdown that shows a user's position
  in a multi-step journey (e.g. a quote flow) and lets them jump back to a completed
  step. It renders as a trigger button showing "Step X of Y" and the current step's
  name, which opens a dropdown listing every step declared as a light-DOM Progress
  stepper item child.
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
    Trigger button: shows the step count (Step X of Y) and the current step's subheading
    text, plus a chevron icon that rotates 180° when open.
  - >-
    Dropdown panel: a floating, right-aligned panel containing the list of steps;
    stays in the DOM and is toggled with the inert attribute (not hidden) so it
    can transition in/out.
  - 'Progress stepper item (child component): one row per step:'
  - >-
    Progress stepper item (child component) › Number badge: the step's 1-based position,
    styled solid when current.
  - 'Progress stepper item (child component) › Title: the step''s label.'
  - >-
    Progress stepper item (child component) › Divider (Divider): shown between items
    except after the last.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Progress stepper anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default (closed)
    description: Trigger only, showing step count and current step name.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: Default (closed)'
  - title: Open
    description: Dropdown expanded, listing all steps with the current one highlighted.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: Open'
  - title: Step two active
    description: Dropdown open with the second of three steps marked current.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: Step two active'
  - title: Custom subheading
    description: >-
      The current item slots custom subheading content that differs from its own
      row title.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: Custom subheading'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Opening/closing
    description: >-
      Clicking the trigger toggles open. Pressing Escape while open closes it. Clicking
      anywhere outside the component (checked via event.composedPath()) also closes
      it.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: opening/closing'
  - title: Selecting a step
    description: >-
      Clicking an Progress stepper item dispatches a step-select event that bubbles
      up; the parent marks that item current and closes the dropdown.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: selecting a step'
  - title: Syncing items
    description: >-
      On every slot change, the parent recomputes each item's current, number and
      showDivider state from the light-DOM children's order — if none is marked
      current, the first item becomes current by default.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: syncing items'
  - title: Transitions
    description: >-
      The dropdown fades and translates in from 4px above its resting position over
      260ms with a cubic-bezier(0.16, 1, 0.3, 1) easing — the same entrance feel
      as aa-reset's focus-ring scale — and reverses for free on close since it's
      a CSS transition, not a one-shot animation.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: transitions'
  - title: Chevron
    description: Rotates 180° when open is true, with a 200ms ease-in-out transition.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: chevron'
  - title: Item states
    description: >-
      Hovering an item shows a tertiary hover background; the current item shows
      a persistent secondary-surface background and bolder number/title styling.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper: item states'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A multi-step flow (e.g. quote journeys) where the user needs to see their current
    step and jump back to a previous one.
  - >-
    Contexts where space is constrained and a full horizontal stepper won't fit
    — this is a dropdown, not an inline stepper.
  dont:
  - >-
    A flow where every step should be visible at once inline — use a different,
    non-collapsing stepper pattern.
  - >-
    A simple linear progress indication with no navigation to previous steps — a
    plain progress bar or label may be more appropriate.
  - >-
    Grouping unrelated actions — this component is specifically for sequential journey
    steps.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep each step's label short — it appears both in the trigger's subheading and
    in the dropdown row, so it must read clearly at small sizes.
  - >-
    Use a subheading slot only when the trigger needs to show something more specific
    than the step's own title (e.g. a sub-stage within a step).
  - >-
    Only link to steps that are genuinely navigable (href set); steps that can't
    yet be revisited should render as inert buttons rather than links.
  - Use sentence case for step labels.
  - Use British English spelling throughout.
  - Avoid adverbs such as "simply", "just" or "easily".
  - Keep labels short enough not to wrap in the fixed-width (199px) dropdown.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper example: "Cover"'
      label: Do
      caption: '"Cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper example: "Choose your cover options"'
      label: Don't
      caption: '"Choose your cover options"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper example: "Details"'
      label: Do
      caption: '"Details"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper example: "Enter your personal details here"'
      label: Don't
      caption: '"Enter your personal details here"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper example: "Quote"'
      label: Do
      caption: '"Quote"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper example: "Get a quote"'
      label: Don't
      caption: '"Get a quote"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The parent stepper derives step order entirely from DOM order of Progress stepper
    item children — reordering the light DOM changes numbering.
  - >-
    number and showDivider on Progress stepper item are managed by the parent; setting
    them manually will be overwritten on the next slot change.
  - >-
    Since the dropdown is right-aligned and positioned absolutely, ensure there's
    enough space to its left/below in the layout — the story file wraps it in a
    flex container with justify-content: flex-end and padding specifically for this
    reason.
  - >-
    variant="minimal" is currently the only implemented variant — treat other values
    as unsupported.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: open
      options: boolean
      defaultValue: 'false'
      description: Whether the dropdown is expanded. Reflects to an attribute.
    - name: variant
      options: minimal
      defaultValue: minimal
      description: Visual style. minimal is the only variant implemented so far.
    title: Progress stepper
  - rows:
    - name: label
      options: string
      defaultValue: '''Step'''
      description: The step's title, and the default text shown in the trigger's
        subheading.
    - name: href
      options: string
      description: Renders the item as a real navigable <a>; omit to render a plain
        <button>.
    - name: current
      options: boolean
      defaultValue: 'false'
      description: >-
        Marks this as the active step. Managed by the parent, but can be set initially
        in markup.
    - name: number
      options: number
      defaultValue: '1'
      description: 1-based position among siblings. Managed by the parent — do not
        set manually.
    - name: showDivider
      options: boolean (attribute show-divider)
      defaultValue: 'false'
      description: >-
        Whether a divider renders after this item. Managed by the parent — set on
        every item except the last.
    - name: subheading slot
      options: —
      description: >-
        Optional slotted content that overrides what the trigger shows for this
        step, without changing the row's own displayed title.
    title: Progress stepper item
- type: accessibility
  focusOrder:
  - >-
    The trigger button sits in the natural tab order. The dropdown panel is toggled
    with the inert attribute rather than hidden, which both allows it to animate
    and (when inert) removes its contents from the tab order and accessibility tree
    while closed.
  keyboard:
  - key: Enter / Space
    action: >-
      Activates the trigger button (opens/closes the dropdown) or activates a focused
      step item.
  - key: Escape
    action: Closes the dropdown if open.
  aria:
  - aria-expanded — set on the trigger button, reflecting open.
  - >-
    aria-controls="dropdown" — set on the trigger button, pointing at the dropdown
    panel's id.
  - inert — applied to the dropdown panel while closed.
  seo:
  - >-
    Steps render as real <a> or <button> elements, so navigable steps are genuine,
    crawlable links rather than JavaScript-only click handlers.
  - >-
    Step label text should describe the step itself (e.g. "Cover", "Details") so
    its meaning is clear out of context to assistive tech, search engines or AI
    agents parsing the page.
- type: related-components
  items:
  - label: Tabs
    href: /components/tabs
    note: >-
      Uses the same light-DOM child composition pattern for a different (non-sequential)
      navigation use case.
  - label: Tab
    href: /components/tab
    note: >-
      Uses the same light-DOM child composition pattern for a different (non-sequential)
      navigation use case.
  - label: Divider
    href: /components/divider
    note: Used internally to separate step rows.
  - label: Icon
    href: /components/icon
    note: Supplies the chevron icon in the trigger.
---
