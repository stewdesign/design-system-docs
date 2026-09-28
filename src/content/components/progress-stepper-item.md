---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Examples: no example currently shows a disabled or not-yet-reached step distinct from the default state — confirm whether that state exists in Figma.
#   - When not to use: confirm with the team whether any standalone use case is planned; none exists in the current stories.
#   - ARIA: no aria-current is set on the current item in the source read — confirm whether this should be added so assistive tech can identify the active step.
title: Progress stepper item
description: >-
  Progress stepper item is a single step row inside the Progress stepper dropdown.
  It is an internal sub-part designed to be composed as a light-DOM child of Progress
  stepper — the same composition pattern as Tabs/Tab — and has little standalone
  usage of its own outside that parent; this doc describes it primarily in that
  context rather than as an independent component.
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
    Item control (part="item"): an <a> when href is set, otherwise a <button type="button">.
  - 'Row (part="row"): inner flex container holding the number and title.'
  - >-
    Number (part="number"): a circular badge showing the item's 1-based position,
    set by the parent.
  - 'Title (part="title"): the step''s visible label text.'
  - >-
    Subheading slot (slot="subheading", hidden): optional custom content that overrides
    what the parent's trigger displays for this step, without changing the row's
    own visible title.
  - >-
    Divider: an Divider rendered after the item when showDivider is true (set by
    the parent on every item except the last).
  image: https://placehold.co/1280x720
  imageAlt: Labelled Progress stepper item anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default step
    description: Plain item, not current, with a divider (mid-list position).
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: Default step'
  - title: Current step
    description: current set, emphasised styling applied.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: Current step'
  - title: Last step
    description: showDivider false, no trailing divider rendered.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: Last step'
  - title: Step with custom subheading
    description: A slot="subheading" child overriding the trigger's display text.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: Step with custom subheading'
  - title: Button-only step
    description: No href set, rendering a <button> instead of a link.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: Button-only step'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Selection
    description: >-
      Clicking the item dispatches a bubbling, composed step-select custom event;
      the parent Progress stepper listens for this, marks the clicked item current,
      and closes its dropdown.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: selection'
  - title: Current state
    description: >-
      When current is true, the item's background, number badge and title all switch
      to their emphasised styling (filled background, primary-coloured number badge,
      medium-weight headings-coloured title).
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: current state'
  - title: Hover
    description: >-
      The item's background shifts to a tertiary hover surface on hover, independent
      of current.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: hover'
  - title: Subheading override
    description: >-
      If a consumer slots content into slot="subheading", the parent's trigger displays
      that slotted text instead of label for this step, while the row's own visible
      title still shows label.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: subheading override'
  - title: Transitions
    description: Background changes use the shared interactive transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: transitions'
  - title: Responsive behaviour
    description: >-
      The item is a full-width block (inline-size: 100%) and has no responsive breakpoints
      of its own — it fills whatever width the parent dropdown provides (199px per
      the current implementation).
    image: https://placehold.co/1280x720
    imageAlt: 'Progress stepper item: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    As a direct light-DOM child of Progress stepper, one per step in a multi-step
    journey (e.g. Quote, Cover, Details).
  dont:
  - >-
    Standalone, outside Progress stepper — its number, current and showDivider state
    are managed by the parent, and it has no independent story or usage pattern
    of its own.
  - >-
    A general-purpose list item or navigation link — use a plain link/list pattern
    instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep label short — it is displayed both in the dropdown row and (by default)
    as the parent trigger's subheading, so it must read well at both scales.
  - >-
    Only use the subheading slot when the trigger needs to show something more specific
    or different from the step's row title (e.g. "Your details" instead of "Quote").
  - Use sentence case for step labels, not title case.
  - >-
    Use short, concrete nouns for step names (e.g. "Quote", "Cover", "Details")
    rather than full sentences or instructions.
  - Use British English spelling throughout.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper item example: "Cover"'
      label: Do
      caption: '"Cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper item example: "Choose Your Cover Options"'
      label: Don't
      caption: '"Choose Your Cover Options"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper item example: "Details"'
      label: Do
      caption: '"Details"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Progress stepper item example: "details:"'
      label: Don't
      caption: '"details:"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    number, current and showDivider are recalculated and overwritten by the parent's
    syncItems() on every slot change — setting them directly on an item inside a
    live Progress stepper will be overridden.
  - >-
    Only set href when the step is a real, navigable destination; omitting it renders
    a <button>, which triggers step-select without navigating.
  - >-
    Don't nest additional interactive elements inside the item — the whole row is
    a single link/button.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: current
      options: boolean
      defaultValue: 'false'
      description: >-
        Marks this as the current step. Managed by the parent Progress stepper,
        not typically set directly by a consumer once inside a live stepper.
    - name: href
      options: string
      defaultValue: ''''''
      description: Renders a real navigable <a> when set; omit to render a plain
        <button> instead.
    - name: label
      options: string
      defaultValue: '''Step'''
      description: >-
        The step's visible title text, and the default subheading text shown in
        the parent's trigger.
    - name: number
      options: number
      defaultValue: '1'
      description: Position among sibling items, 1-based. Managed by the parent
        Progress stepper.
    - name: showDivider (show-divider)
      options: boolean
      defaultValue: 'false'
      description: Set by the parent on every item except the last, to render a
        trailing divider.
- type: accessibility
  focusOrder:
  - >-
    The item participates in the natural tab order as either an <a> or a <button>,
    in document order among its sibling items, following the parent stepper's own
    trigger button.
  keyboard:
  - key: Enter
    action: >-
      Activates the item (follows the link if href is set, or fires step-select
      for a button).
  - key: Space
    action: >-
      Activates the item when rendered as a <button> (native behaviour; does not
      apply when rendered as an <a>).
  aria:
  - >-
    No explicit role override — the semantic <a> or <button> element is used directly.
  seo:
  - >-
    Renders a real <a> (with href) or <button>, not a generic <div>, so semantics
    and focusability are native rather than simulated.
  - >-
    When the step is a real destination, always set href so it is a crawlable link
    rather than a JavaScript-only click handler.
  - >-
    Label text should name the step plainly (per the content guidance above) so
    its purpose is clear out of context to assistive tech, search engines or AI
    agents.
- type: related-components
  items:
  - label: Progress stepper
    href: /components/progress-stepper
    note: >-
      The parent dropdown that composes, sequences and manages state for one or
      more Progress stepper item children.
  - label: Divider
    href: /components/divider
    note: Rendered between items when showDivider is true.
  - label: Tabs
    href: /components/tabs
    note: Uses the same light-DOM composition pattern for a parent/child relationship.
  - label: Tab
    href: /components/tab
    note: Uses the same light-DOM composition pattern for a parent/child relationship.
---
