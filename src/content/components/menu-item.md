---
title: Menu item
description: >-
  Menu item is a single navigable row inside an Menu disclosure — a label with an
  optional trailing icon, rendered as a real link or a plain button. It appears
  exclusively as a child of Menu, representing one destination within an expandable
  navigation group.
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
    Item container: a real <a> when href is set, otherwise a plain <button type="button">,
    so the row is genuinely navigable or genuinely actionable rather than a styled
    non-semantic element.
  - >-
    Label: the slotted default content, wrapped in a .label span; bold when current
    is set.
  - >-
    Trailing icon: shown when trailing-icon is true, via a named icon slot defaulting
    to a link glyph (Icon name="link").
  - >-
    Divider: an Divider rendered after the item when show-divider is true, set automatically
    by the parent Menu on every item except the last.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Menu item anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default item
    description: Plain label, href set, no trailing icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: Default item'
  - title: Current item
    description: current set, bold label.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: Current item'
  - title: Trailing icon item
    description: trailing-icon set, default link glyph shown.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: Trailing icon item'
  - title: Button item
    description: No href, renders as a plain button for an in-page action rather
      than navigation.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: Button item'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Hover
    description: >-
      The item's background changes to --surface-inputs-hover on hover, whether
      rendered as a link or a button.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: hover'
  - title: Current state
    description: >-
      current only changes font weight (bold label) — it does not add a background
      fill; Figma verifies hover and current as two independent, non-stacked states.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: current state'
  - title: Link vs button
    description: >-
      Setting href swaps the rendered element from <button> to <a> — the visual
      treatment is otherwise identical.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: link vs button'
  - title: Divider placement
    description: >-
      show-divider is managed by the parent Menu, which listens for slot changes
      and sets it on every item except the last — consumers don't need to set it
      themselves.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: divider placement'
  - title: Transitions
    description: Background changes use the shared interactive transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: transitions'
  - title: Responsive behaviour
    description: The item fills its container's inline size; it has no breakpoints
      of its own.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu item: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Menu item example: A single destination inside an Menu disclosure, as a
        slotted child.
      label: Do
      caption: A single destination inside an Menu disclosure, as a slotted child.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Menu item example: Outside an Menu — this component relies on its parent
        for divider placement and shares its visual language with the menu disclosure;
        use List item for a general-purpose list row instead.
      label: Don't
      caption: >-
        Outside an Menu — this component relies on its parent for divider placement
        and shares its visual language with the menu disclosure; use List item for
        a general-purpose list row instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: Marking the current page within a navigation
        group (current).'
      label: Do
      caption: Marking the current page within a navigation group (current).
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: A primary, stand-alone call-to-action — use
        Button.'
      label: Don't
      caption: A primary, stand-alone call-to-action — use Button.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Menu item example: A leaf item that should show a trailing icon to signal
        it opens/links elsewhere (trailing-icon).
      label: Do
      caption: >-
        A leaf item that should show a trailing icon to signal it opens/links elsewhere
        (trailing-icon).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Menu item example: A leaf-only navigation item with no parent group — set
        href directly on Menu instead of slotting a single Menu item.
      label: Don't
      caption: >-
        A leaf-only navigation item with no parent group — set href directly on
        Menu instead of slotting a single Menu item.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the label short, direct and specific to the destination — it should read
    clearly at a glance inside a list of related items.
  - >-
    Match the label to the destination page's title where possible, for consistency
    between the menu and where it leads.
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - >-
    Use active, specific wording — avoid vague labels like "Click here" or "Learn
    more".
  - Use British English spelling throughout.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: "Roadside assistance"'
      label: Do
      caption: '"Roadside assistance"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: "Roadside Assistance:"'
      label: Don't
      caption: '"Roadside Assistance:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: "Family breakdown cover"'
      label: Do
      caption: '"Family breakdown cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: "Learn more about family cover"'
      label: Don't
      caption: '"Learn more about family cover"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: "Compare cover"'
      label: Do
      caption: '"Compare cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu item example: "Click here to compare"'
      label: Don't
      caption: '"Click here to compare"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    show-divider is managed automatically by the parent Menu — setting it manually
    on a standalone item outside that context has no guaranteed effect on spacing
    consistency.
  - >-
    Don't slot another interactive element into the default slot alongside the label
    — the whole item is already the single interactive target (link or button).
  - >-
    The trailing icon slot's default (a link glyph) is only shown when trailing-icon
    is explicitly set — leaving trailing-icon false hides the slot entirely, even
    if content is slotted into it.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: current
      options: boolean
      defaultValue: 'false'
      description: >-
        Marks this as the current page — renders the label in bold, matching Figma's
        "Active" state.
    - name: href
      options: string
      defaultValue: ''''''
      description: Renders a real navigable <a>. Omit it to render a plain <button>
        instead.
    - name: show-divider
      options: boolean
      defaultValue: 'false'
      description: >-
        Set by the parent Menu on every item except the last — not intended to be
        set manually.
    - name: trailing-icon
      options: boolean
      defaultValue: 'false'
      description: >-
        Shows the trailing icon area (icon slot), defaulting to a link glyph if
        the slot is left empty.
- type: accessibility
  focusOrder:
  - >-
    As either a real <a> or a <button>, Menu item participates in the natural tab
    order at its position among sibling items inside the parent Menu's disclosure
    body.
  keyboard:
  - key: Enter
    action: Activates the link or button.
  - key: Space
    action: >-
      Activates the button form (native <button> behaviour; does not apply to the
      anchor form).
  aria:
  - >-
    aria-current="page" is applied when current is true; aria-current="false" otherwise,
    on both the link and button forms.
  - >-
    No role override is used — the semantic <a> or <button> element is rendered
    directly.
  seo:
  - >-
    Renders a real <a> or <button>, not a generic <div>, so semantics and crawlability
    are native.
  - >-
    aria-current="page" gives assistive tech and AI agents parsing the page a clear,
    standard signal of which item represents the current page.
  - >-
    Label text should describe the destination on its own, per the content guidance
    above, so it carries meaning out of context.
- type: related-components
  items:
  - label: Menu
    href: /components/menu
    note: >-
      The parent disclosure that composes Menu item children and manages their dividers.
  - label: List item
    href: /components/list-item
    note: The equivalent row for general-purpose lists, rather than navigation menus.
  - label: Divider
    href: /components/divider
    note: Rendered automatically between items via show-divider.
  - label: Icon
    href: /components/icon
    note: Supplies the trailing icon glyph.
---
