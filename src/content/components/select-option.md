---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Examples: no standalone story exists for this component; examples are documented under Select only.
#   - Keyboard interactions: keyboard interactions (arrow keys, Enter, Escape) are implemented and documented on the parent Select, not on this component directly — see Select.md.
title: Select option
description: >-
  Select option is an internal primitive that represents a single choice inside
  an Select dropdown. It has no story of its own and is not designed to be used
  standalone — document and use it only as a light-DOM child of Select, the same
  composition pattern as Tabs/Tab.
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
    Option row: the clickable area (role="option") holding the slotted content,
    with padding and rounded corners matching the listbox.
  - >-
    Content slot (default slot): the option's label content, provided by the consumer
    as plain text or markup.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Select option anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Option list
    description: >-
      See Select documentation; every Select example composes a set of Select option
      children.
    image: https://placehold.co/1280x720
    imageAlt: 'Select option: Option list'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Click
    description: >-
      Dispatches an option-select event that bubbles and composes across shadow
      boundaries, which the parent Select listens for to commit the selection.
    image: https://placehold.co/1280x720
    imageAlt: 'Select option: click'
  - title: Hover
    description: >-
      Dispatches an option-hover event, which the parent uses to move keyboard highlighting
      to the hovered option (mouse and keyboard highlighting stay in sync).
    image: https://placehold.co/1280x720
    imageAlt: 'Select option: hover'
  - title: Selected styling
    description: >-
      When selected is true, the label switches to a heading colour and medium weight
      to distinguish the current value from the rest of the list.
    image: https://placehold.co/1280x720
    imageAlt: 'Select option: selected styling'
  - title: Active styling
    description: >-
      When active is true (keyboard-highlighted), the row gets a hover-style background
      so the highlighted option is visually distinct while the listbox is open.
    image: https://placehold.co/1280x720
    imageAlt: 'Select option: active styling'
  - title: Responsive behaviour
    description: >-
      The option fills the width of its parent listbox; it has no independent responsive
      behaviour.
    image: https://placehold.co/1280x720
    imageAlt: 'Select option: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - As a direct child of Select, one per selectable value.
  dont:
  - >-
    Anywhere outside Select — it has no standalone story or supported usage and
    depends entirely on its parent for state (active, selected) and behaviour (keyboard
    navigation, commit-on-select).
  - >-
    As a rich multi-line or heavily interactive item — keep option content to the
    label text Select needs for its display value; if a selection needs richer content,
    review with the design system team.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the label content short enough to fit on one line so it doesn't wrap inside
    the listbox or get truncated in the closed trigger.
  - >-
    Make sure the label text alone is meaningful — Select uses each option's own
    text content as its accessible display value.
  - >-
    Order options in a sensible, predictable sequence (e.g. alphabetical or by likelihood
    of use) since the component doesn't group or sort them itself.
  - Use sentence case, not title case.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - Avoid adverbs like "simply", "just" or "easily".
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Select option example: "Comprehensive"'
      label: Do
      caption: '"Comprehensive"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Select option example: "COMPREHENSIVE"'
      label: Don't
      caption: '"COMPREHENSIVE"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Select option example: "Third party, fire and theft"'
      label: Do
      caption: '"Third party, fire and theft"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Select option example: "3rd Party Fire & Theft (TPFT)"'
      label: Don't
      caption: '"3rd Party Fire & Theft (TPFT)"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Never set active or selected yourself — both are owned and synced by the parent
    Select on every render; manual changes will be overwritten.
  - >-
    The component assigns its own id (via the parent's slot-change handler) if one
    isn't already present — don't rely on a specific id format.
  - >-
    Label content should be plain enough that textContent (used by Select for its
    display value) reads correctly; avoid burying the meaningful text inside deeply
    nested markup or icons only.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: value
      options: string
      defaultValue: ''''''
      description: >-
        The option's value, matched against the parent Select's value to determine
        selection.
    - name: active
      options: boolean
      defaultValue: 'false'
      description: >-
        Keyboard-highlighted but not yet committed. Managed entirely by the parent
        Select; not intended to be set directly by a consumer.
    - name: selected
      options: boolean
      defaultValue: 'false'
      description: >-
        Reflects whether this option matches the parent's current value. Managed
        entirely by the parent Select; not intended to be set directly by a consumer.
- type: accessibility
  focusOrder:
  - >-
    Select option is never itself a focus stop. Real focus stays on the parent Select
    trigger at all times; the option is only ever keyboard-highlighted via aria-activedescendant
    pointing at its id from the parent, matching how a native <select> keeps focus
    on itself while its popup is open.
  aria:
  - >-
    role="option" — identifies the element as a selectable item within the parent's
    role="listbox".
  - >-
    aria-selected — reflects the selected property ("true"/"false"), telling assistive
    technology which option matches the current value.
  seo:
  - >-
    Renders as a real role="option" element inside the parent's listbox rather than
    a generic clickable <div>, so assistive technology can correctly enumerate the
    available choices.
  - >-
    Because this primitive has no page or route of its own, SEO considerations apply
    only at the Select level.
- type: related-components
  items:
  - label: Select
    href: /components/select
    note: >-
      The required parent; owns all selection, keyboard and open/close behaviour
      for its Select option children.
---
