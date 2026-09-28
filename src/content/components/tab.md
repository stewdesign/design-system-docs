---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: arrow key, Home and End handling live on the parent Tabs, not on Tab itself — see Tabs.md for those mappings.
title: Tab
description: >-
  Tab is a single selectable item within an Tabs tablist, showing a label and an
  optional leading icon with a distinct active/inactive appearance. It's an internal
  primitive: it isn't meant to be reached for directly, and has no story of its
  own — Tabs's own stories cover every state it renders.
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
  - 'Icon slot (icon): optional leading icon shown above the label.'
  - 'Label (part="label"): the tab''s text content, via the default slot.'
  - >-
    Active indicator: a bottom border that scales in from zero width when the tab
    is active.
  - 'Focus ring: a dashed outline shown on keyboard focus.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Tab anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Active / inactive
    description: Selected and unselected states at default (large) size.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: Active / inactive'
  - title: With icon
    description: A leading icon slotted above the label.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: With icon'
  - title: Small
    description: The compact size variant.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: Small'
  - title: Comparison
    description: Active/inactive, with/without icon and both sizes shown side by
      side.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: Comparison'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Selection
    description: >-
      Clicking a tab dispatches a bubbling, composed tab-select custom event; the
      parent Tabs listens for this to manage exclusive selection across its tabs.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: selection'
  - title: Hover
    description: Label colour shifts to the heading text colour; unaffected by active
      state.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: hover'
  - title: Active
    description: >-
      Label and icon recolour to their "primary"/"headings" tokens (icon and label
      use separate colour tokens, not one shared currentColor, matching Figma's
      two distinct tokens per state), and the bottom indicator scales in from scaleX(0)
      to scaleX(1).
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: active'
  - title: Focus
    description: >-
      A dashed focus ring appears on :focus-visible, layered above the tab via z-index.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: focus'
  - title: Tab order
    description: >-
      Only the active tab has tabindex="0"; all others have tabindex="-1" — arrow-key
      roving focus (owned by the parent Tabs) is what moves focus between tabs,
      per the WAI-ARIA Tabs pattern.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: tab order'
  - title: Transitions
    description: >-
      Colour changes use the shared interactive transition token; the active indicator
      additionally animates its scale over 160ms; the focus ring uses the shared
      focus-ring transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: transitions'
  - title: Size variants
    description: >-
      large uses a taller, larger-type layout with a 4px active indicator; small
      uses a more compact layout with a 2px indicator. Both bump label font weight
      when active.
    image: https://placehold.co/1280x720
    imageAlt: 'Tab: size variants'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - As a child of Tabs, one per tab in the set — not standalone.
  - When you need each tab to optionally carry a leading icon alongside its label.
  dont:
  - >-
    Directly, outside an Tabs wrapper — it has no tablist semantics or keyboard
    handling of its own; those are owned by the parent.
  - >-
    For actions that aren't part of a mutually-exclusive set of panels/views — use
    Button instead.
- type: side-by-side
  heading: Content guidance
  list:
  - Keep labels short and specific to the content or view the tab reveals.
  - >-
    Avoid generic wording such as "More" or "Other" — name what the tab actually
    contains.
  - Keep labels short enough that they don't wrap onto a second line at either size.
  - Use sentence case, not title case.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - Avoid adverbs like "simply", "just" or "easily".
  - >-
    Use the Harvard comma, not the Oxford comma, when writing a list of three or
    more items in sentence form.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tab example: "Cover options"'
      label: Do
      caption: '"Cover options"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tab example: "More"'
      label: Don't
      caption: '"More"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tab example: "Claims"'
      label: Do
      caption: '"Claims"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tab example: "Everything about claims"'
      label: Don't
      caption: '"Everything about claims"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tab example: "Your vehicle"'
      label: Do
      caption: '"Your vehicle"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tab example: "Your Vehicle:"'
      label: Don't
      caption: '"Your Vehicle:"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    active is managed by the parent Tabs, which resolves conflicts if more than
    one child tab is marked active — don't rely on setting active on multiple tabs
    directly.
  - >-
    size set explicitly on an individual tab overrides the size the parent Tabs
    would otherwise apply — only omit it if you want the tab to follow its parent's
    size.
  - >-
    Icon colour is owned by the component's state (default vs active), not by whatever
    is slotted in — the slot only supplies the icon graphic itself.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: active
      options: boolean
      defaultValue: 'false'
      description: >-
        Whether this tab is the currently selected one. Reflected as an attribute;
        managed by the parent Tabs, not set directly by consumers in normal use.
    - name: size
      options: large | small
      defaultValue: large
      description: >-
        Controls padding, font size/weight, content gap and indicator thickness.
        Set by the parent Tabs on each tab unless a tab already carries an explicit
        size attribute of its own.
- type: accessibility
  focusOrder:
  - >-
    Only the active tab is in the tab order (tabindex="0"); inactive tabs are removed
    from it (tabindex="-1"). Moving between tabs within the set is done with arrow
    keys, not Tab, per the WAI-ARIA Tabs pattern — Tab moves focus into and out
    of the tablist as a whole.
  keyboard:
  - key: Enter / Space
    action: Activates the focused tab (native <button> behaviour).
  aria:
  - >-
    role="tab" — applied to the rendered <button>, identifying it as a tab within
    the parent's role="tablist".
  - aria-selected — reflects active as the string "true" or "false".
  - >-
    tabindex — 0 when active, -1 when inactive, implementing the roving-tabindex
    pattern.
  seo:
  - >-
    Renders a real <button> with role="tab", not a generic <div>, so semantics and
    focusability are native rather than simulated.
  - >-
    Label text should describe the destination content on its own (per the content
    guidance above) — avoid vague labels that carry no meaning out of context for
    assistive tech or AI agents parsing the page.
- type: related-components
  items:
  - label: Tabs
    href: /components/tabs
    note: >-
      The required parent wrapper that provides tablist semantics, arrow-key roving
      focus and size fan-out.
  - label: Icon
    href: /components/icon
    note: Supplies the optional icon slotted into a tab.
  - label: Button
    href: /components/button
    note: For standalone actions that aren't part of a mutually-exclusive tab set.
---
