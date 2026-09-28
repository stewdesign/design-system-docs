---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Tabs
description: >-
  Tabs is the wrapper that turns a set of slotted Tab children into an accessible
  tablist — exclusive selection, arrow-key roving focus, and a shared size. It stays
  intentionally small: it provides tablist semantics and spacing, while each Tab
  owns its own default/hover/active/focus states and optional icon anatomy.
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
    Tablist container (part="tablist", role="tablist"): the flex row holding all
    tabs.
  - >-
    Slotted Tab children: one per tab, each rendering its own label, optional icon
    and active indicator.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Tabs anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Large
    description: Default size, no icons.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: Large'
  - title: Large with icons
    description: Default size, each tab with a leading icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: Large with icons'
  - title: Small
    description: Compact size, no icons.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: Small'
  - title: Small with icons
    description: Compact size, each tab with a leading icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: Small with icons'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Selection
    description: >-
      Tabs listens for the tab-select event bubbling up from a child Tab and activates
      that tab, deactivating all others — only one tab is ever active at a time.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: selection'
  - title: Initial state
    description: >-
      On slot change (i.e. when tabs are first added or changed), if no child tab
      is already marked active, the first tab is activated automatically.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: initial state'
  - title: Size fan-out
    description: >-
      When size changes, or when tabs are (re)slotted, every child tab without its
      own explicit size attribute is updated to match the parent's size. A tab with
      its own size attribute keeps it, overriding the parent.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: size fan-out'
  - title: Keyboard roving focus
    description: >-
      Arrow keys move both selection and focus between tabs, implementing the WAI-ARIA
      Tabs pattern (only the active tab sits in the tab order; see Keyboard interactions
      below).
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: keyboard roving focus'
  - title: Responsive behaviour
    description: >-
      The tablist has no responsive breakpoints of its own; it's a display: flex
      row that fills its container's width (width: 100%) and wraps only if forced
      to by tab content — content guidance requires short enough labels not to wrap
      on mobile.
    image: https://placehold.co/1280x720
    imageAlt: 'Tabs: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Switching between related views or panels of content within the same context,
    where only one is visible at a time.
  - >-
    Grouping sub-navigation within a page or section, e.g. switching between "Cover",
    "Claims" and "Documents" for the same policy.
  dont:
  - A single standalone action — use Button.
  - >-
    Primary, page-level navigation between distinct areas of the product — use a
    dedicated navigation component.
  - >-
    A small, fixed set of mutually exclusive options that aren't panels of content
    — use a radio group instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the tab set focused — each tab should represent one distinct view or panel,
    not an overlapping or ambiguous subset of another tab's content.
  - >-
    Order tabs by expected frequency of use or logical sequence, with the most relevant
    view first (it's activated by default if no tab is set active).
  - See Tab.md for label-level content guidance.
  - Use sentence case, not title case.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - Avoid adverbs like "simply", "just" or "easily".
  - >-
    Use the Harvard comma, not the Oxford comma, when writing a list of three or
    more items in sentence form.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tabs example: "Cover", "Claims", "Documents"'
      label: Do
      caption: '"Cover", "Claims", "Documents"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tabs example: "Cover", "More info", "Other stuff"'
      label: Don't
      caption: '"Cover", "More info", "Other stuff"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tabs example: "Your vehicle"'
      label: Do
      caption: '"Your vehicle"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tabs example: "Your Vehicle:"'
      label: Don't
      caption: '"Your Vehicle:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tabs example: "Payment history"'
      label: Do
      caption: '"Payment history"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tabs example: "Simply view your payment history"'
      label: Don't
      caption: '"Simply view your payment history"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Tabs only renders the tablist — the corresponding tab panels (the content each
    tab reveals) are the consumer's responsibility to build and associate.
  - >-
    If no child tab is marked active, the first tab is activated automatically —
    don't rely on all tabs starting inactive.
  - >-
    A child tab's own explicit size attribute always wins over the parent's size
    — remove it from individual tabs if they should follow the parent instead.
  - >-
    Tab labels aren't truncated by the component — long labels will wrap or force
    the tablist to overflow, so keep labels concise per the content guidance above.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: size
      options: large | small
      defaultValue: large
      description: >-
        Sets the gap between tabs and fans out to every slotted Tab that doesn't
        already carry an explicit size attribute of its own.
- type: accessibility
  focusOrder:
  - >-
    The tablist itself is not a single tab stop. Tab moves focus into the currently
    active tab (the only one with tabindex="0"); moving between tabs within the
    set is then done with arrow keys, not Tab, matching the WAI-ARIA Tabs pattern.
  keyboard:
  - key: Right arrow / Down arrow
    action: Moves selection and focus to the next tab, wrapping to the first after
      the last.
  - key: Left arrow / Up arrow
    action: >-
      Moves selection and focus to the previous tab, wrapping to the last after
      the first.
  - key: Home
    action: Moves selection and focus to the first tab.
  - key: End
    action: Moves selection and focus to the last tab.
  - key: Enter / Space
    action: Activates the focused tab (handled by Tab).
  aria:
  - role="tablist" — applied to the container element holding the slotted tabs.
  - >-
    role="tab", aria-selected and tabindex — applied per tab by Tab itself; see
    Tab.md.
  seo:
  - >-
    Renders a real role="tablist" container around native, focusable Tab buttons,
    so tablist semantics are explicit rather than simulated with plain <div>s.
  - >-
    Tab labels should describe their panel's content on their own (per the content
    guidance above) — avoid vague labels that carry no meaning out of context for
    assistive tech or AI agents parsing the page.
- type: related-components
  items:
  - label: Tab
    href: /components/tab
    note: >-
      The individual selectable item rendered inside Tabs; not meant to be used
      standalone.
  - label: Icon
    href: /components/icon
    note: Supplies the optional icon slotted into each tab.
  - label: Button
    href: /components/button
    note: For a single standalone action rather than a set of mutually exclusive
      views.
---
