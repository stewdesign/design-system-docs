---
title: Menu
description: >-
  Menu is an expandable navigation disclosure — a parent label that opens to reveal
  slotted Menu item children, or, with no children, renders as a plain leaf link.
  It typically appears in primary or mobile navigation, grouping related destinations
  under a single expandable heading.
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
    Icon (optional, icon slot): shown before the label when variant is icon or hero;
    hidden entirely for default.
  - 'Label: the parent''s heading text (label property).'
  - >-
    Chevron: rotates 180° when open, indicating expand/collapse state (only present
    on the expandable/disclosure form).
  - >-
    Body: the disclosure's content area, holding slotted Menu item children; padding
    varies by variant to align with the icon column.
  - >-
    Leaf link form: when href is set, the whole component renders as a single <a>
    with no chevron or expandable body. Figma verification: Menu (node 17264:5450,
    Default/Icon/Hero variants) and .Menu-item-child (node 17264:5350, Default/Hover/Active/Focus
    states).
  image: https://placehold.co/1280x720
  imageAlt: Labelled Menu anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Plain parent label, no icon, collapsed.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: Default'
  - title: Open
    description: Same as Default, expanded to show children.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: Open'
  - title: Icon
    description: variant="icon", plain leading icon, expanded.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: Icon'
  - title: Hero
    description: variant="hero", boxed leading icon, expanded.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: Hero'
  - title: Leaf link
    description: href set, no children, renders as a plain link.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: Leaf link'
  - title: List
    description: Several Menu instances stacked, mixing expandable groups and leaf
      links.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: List'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Leaf vs disclosure
    description: >-
      Setting href renders a plain link with no chevron or expand/collapse behaviour
      — the disclosure markup only appears when there are children to expand.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: leaf vs disclosure'
  - title: Expand/collapse
    description: >-
      Built on a native <details>/<summary> pair, reusing Accordion item's exact
      ::details-content technique so it animates open/closed consistently with the
      rest of the system.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: expand/collapse'
  - title: Toggle event
    description: >-
      Clicking the parent toggles open and dispatches a toggle event (bubbling,
      composed) whenever the open state actually changes.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: toggle event'
  - title: Divider assignment on slot change
    description: >-
      On every slot change, the component filters its assigned Menu item children
      and sets show-divider on every item except the last, so dividers stay correct
      as items are added or removed.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: divider assignment on slot change'
  - title: Icon and body indentation
    description: >-
      variant="hero" gives the icon its own boxed background (40×40px) and indents
      the body further to align with it; variant="icon" shows a plain icon with
      a smaller indent; variant="default" shows no icon and the smallest indent.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: icon and body indentation'
  - title: Scoped theme
    description: >-
      Establishes its own light-theme palette (setAaScopedTheme(this, 'light'))
      on connect, so it renders consistently even when slotted inside a component
      that scopes itself to a different theme (e.g. Header's yellow band).
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: scoped theme'
  - title: Collapse sizing
    description: >-
      The open body is capped at a generous max-block-size: 24rem and clipped beyond
      that, rather than scaled — sized larger than Accordion item's equivalent since
      a menu typically holds more links.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: collapse sizing'
  - title: Reduced motion
    description: >-
      Chevron rotation and collapse/expand transitions are removed entirely under
      prefers-reduced-motion: reduce, rather than slowed.
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: reduced motion'
  - title: Responsive behaviour
    description: 'Capped at max-inline-size: 22.5rem; no other breakpoints of its
      own.'
    image: https://placehold.co/1280x720
    imageAlt: 'Menu: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A group of related navigation destinations under a single expandable heading,
    e.g. in primary or mobile navigation.
  - >-
    A single, leaf-level navigation link with no children — set href directly rather
    than slotting a lone Menu item.
  - >-
    Navigation groups that need an icon for quick visual scanning (variant="icon"
    or "hero").
  dont:
  - >-
    A settings or account list with no navigational hierarchy — use List item/List
    item group instead.
  - >-
    An accordion for FAQ-style content rather than navigation — use Accordion item,
    even though it shares the same expand/collapse technique.
  - A flat set of top-level tabs — use Tabs/Tab.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep label short and specific — it should describe the group of destinations
    it expands to reveal, e.g. "Breakdown cover".
  - Match child Menu item labels to their destination page titles where possible.
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Use active, specific wording — avoid vague labels like "More" or "Explore".
  - Use British English spelling throughout.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu example: "Breakdown cover"'
      label: Do
      caption: '"Breakdown cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu example: "All About Breakdown Cover"'
      label: Don't
      caption: '"All About Breakdown Cover"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu example: "Help and support"'
      label: Do
      caption: '"Help and support"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu example: "Need Some Help?"'
      label: Don't
      caption: '"Need Some Help?"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu example: "Insurance"'
      label: Do
      caption: '"Insurance"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Menu example: "Our Insurance Products"'
      label: Don't
      caption: '"Our Insurance Products"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    href and slotted Menu item children are mutually exclusive in intent — setting
    href on a menu that also has slotted children will still render the leaf-link
    form, so the children won't be shown; don't mix the two.
  - >-
    The open body clips content beyond 24rem block size rather than scrolling or
    scaling — very long child lists may be visually cut off.
  - >-
    show-divider on child items is managed automatically; don't set it manually
    on Menu item children of an Menu.
  - >-
    Icon indentation (padding-inline-start) is tied to variant — swapping variants
    after content is authored may require re-checking alignment between the icon
    and body.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: href
      options: string
      defaultValue: ''''''
      description: >-
        Real navigable link for a leaf item with no children. Mutually exclusive
        with slotted aa-menu-items — setting it turns the component into a plain
        leaf link instead of an expandable disclosure. Matches Figma's hasDropdown
        toggle.
    - name: label
      options: string
      defaultValue: '''Parent'''
      description: The parent item's heading text.
    - name: open
      options: boolean
      defaultValue: 'false'
      description: Reflected attribute controlling whether the disclosure is expanded.
    - name: variant
      options: default | icon | hero
      defaultValue: default
      description: >-
        Controls whether a leading icon is shown and how the body/icon area is styled
        and indented.
- type: accessibility
  focusOrder:
  - >-
    The parent (<summary> or leaf <a>) is one focusable stop in the natural tab
    order. When expanded, its slotted Menu item children follow immediately after
    in DOM order, each a focusable stop of their own.
  keyboard:
  - key: Enter / Space
    action: >-
      Toggles the disclosure open/closed (native <summary> behaviour), or activates
      the link (leaf form).
  - key: Tab
    action: Moves focus to the parent, then into its children once expanded.
  aria:
  - >-
    No explicit ARIA roles or attributes are set by Menu itself — it relies on the
    native semantics of <details>/<summary> (disclosure) or <a> (leaf link) for
    expand/collapse and navigation state.
  - >-
    The chevron icon is marked aria-hidden="true", since the native <summary> element
    already communicates expanded/collapsed state to assistive tech.
  seo:
  - >-
    Uses native <details>/<summary> for the disclosure form, giving search engines
    and AI agents a standard, well-understood expand/collapse landmark rather than
    a custom widget.
  - >-
    The leaf form renders a real, crawlable <a> rather than a JavaScript-only click
    handler.
  - >-
    Label text should describe the group or destination on its own, per the content
    guidance above.
- type: related-components
  items:
  - label: Menu item
    href: /components/menu-item
    note: The slotted child rows this component composes and manages dividers for.
  - label: Accordion item
    href: /components/accordion-item
    note: >-
      Shares the same <details>/::details-content expand/collapse technique, for
      non-navigational content.
  - label: List item
    href: /components/list-item
    note: The equivalent row for general-purpose, non-navigational lists.
  - label: Icon
    href: /components/icon
    note: Supplies the leading icon slotted into the icon slot.
---
