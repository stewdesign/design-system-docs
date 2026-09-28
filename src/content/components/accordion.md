---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Accordion
description: >-
  Accordion groups a set of Accordion item elements, coordinating which are open
  and applying shared styling (type, size, dividers) across all of them. It's used
  for FAQ sections, collapsible content lists, and any page area where secondary
  content should stay out of the way until requested.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=18383-26604
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
    Heading slot (heading): optional group-level heading, authored as a real heading
    element (e.g. <h2>) so the consumer controls its semantic level.
  - >-
    Group: the container for all Accordion item children, styled according to type
    and size.
  - 'Items: real Accordion item elements nested in the default slot.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Accordion anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Card
    description: Default type, filled rounded surface per item.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: Card'
  - title: Flat
    description: No fill, optional dividers between items.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: Flat'
  - title: Group
    description: Items sit tightly inside one continuous filled panel.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: Group'
  - title: Slim
    description: Reduced padding and icon size, for denser layouts.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: Slim'
  - title: Without a header
    description: Group heading omitted entirely.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: Without a header'
  - title: Multiple open
    description: Several items expanded at once via multiple.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: Multiple open'
  - title: With leading icons
    description: An icon slotted before each item's heading.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: With leading icons'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Exclusive open by default
    description: >-
      Opening one item closes any other open item, coordinated by the group listening
      for each item's toggle event — not native <details name> grouping, since each
      item has its own shadow root and cannot share that mechanism.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: exclusive open by default'
  - title: multiple
    description: >-
      Switching this on lets several items stay open independently; switching it
      off collapses all but the first still-open item.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: multiple'
  - title: Shared props propagate down
    description: >-
      type and size are read from the group and pushed onto every child item's size/surface/show-divider
      — items never set these directly.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: shared props propagate down'
  - title: Heading visibility
    description: >-
      The group-level heading row is hidden entirely when no content is slotted
      into heading, rather than rendering an empty header row.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: heading visibility'
  - title: Responsive behaviour
    description: >-
      No breakpoints of its own; the group and its items size to their container's
      inline size.
    image: https://placehold.co/1280x720
    imageAlt: 'Accordion: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Accordion example: FAQ sections, help content, or any list of question/answer
        pairs.
      label: Do
      caption: FAQ sections, help content, or any list of question/answer pairs.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Accordion example: For primary or required content the user must see without
        extra interaction — don't hide critical information behind a collapsed accordion.
      label: Don't
      caption: >-
        For primary or required content the user must see without extra interaction
        — don't hide critical information behind a collapsed accordion.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Accordion example: Grouping several related, optional content sections a
        user may or may not want to open.
      label: Do
      caption: >-
        Grouping several related, optional content sections a user may or may not
        want to open.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Accordion example: For a single standalone collapsible section with no group
        semantics — a bare Accordion item still requires the group as its parent,
        so use it inside a single-item Accordion rather than reaching for something
        else.
      label: Don't
      caption: >-
        For a single standalone collapsible section with no group semantics — a
        bare Accordion item still requires the group as its parent, so use it inside
        a single-item Accordion rather than reaching for something else.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Accordion example: Where only one item's content is usually relevant at
        a time (leave multiple off).
      label: Do
      caption: >-
        Where only one item's content is usually relevant at a time (leave multiple
        off).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Accordion example: For navigation menus or mutually exclusive selection
        — use a purpose-built navigation or selection component instead.
      label: Don't
      caption: >-
        For navigation menus or mutually exclusive selection — use a purpose-built
        navigation or selection component instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Content guidance from Figma: accordion content should be supporting, optional
    or secondary information — scannable, self-contained and non-critical. Avoid
    urgent warnings, required instructions, primary calls to action, legal consent,
    or anything users must compare side by side.
  - >-
    Keep the group heading short and descriptive of the whole set (e.g. "Frequently
    asked questions"), not a repeat of any individual item's heading.
  - For FAQ-style content, phrase each item's heading as the question itself.
  - Use sentence case for the group heading and every item heading.
  - Use British English spelling and plain, familiar language.
  - Avoid jargon and technical terms; aim for a reading age of around 9.
  - >-
    For FAQ sections specifically, use first-person pronouns ("I"/"my") in the question
    when it represents the customer's own perspective, e.g. "Why can't my commercial
    vehicle be covered under standard breakdown cover?" — this matches how users
    search and phrase their own questions.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion example: "Why can''t my commercial vehicle be covered?"'
      label: Do
      caption: '"Why can''t my commercial vehicle be covered?"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion example: "Commercial vehicle cover: exclusions"'
      label: Don't
      caption: '"Commercial vehicle cover: exclusions"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion example: "What''s covered under Home cover"'
      label: Do
      caption: '"What''s covered under Home cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Accordion example: "Home cover details"'
      label: Don't
      caption: '"Home cover details"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    type and size set on the group apply to every child item — don't set these props
    on individual Accordion item elements expecting them to persist independently.
  - >-
    show-divider only has a visible effect on type="flat" — setting it alongside
    card or group has no effect, since those types already separate items with their
    own filled surface.
  - >-
    Native <details> name-based grouping cannot be used here because each item lives
    in its own shadow root — exclusive-open coordination is handled entirely by
    the group's own JavaScript instead.
  - >-
    Since closed content stays in the DOM (not display:none), a long accordion with
    many items adds real DOM weight even while collapsed.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: type
      options: card | flat | group
      defaultValue: card
      description: >-
        Visual treatment of the item set. card and group fill each item's surface;
        flat removes the fill and can show dividers instead.
    - name: size
      options: default | slim
      defaultValue: default
      description: Padding and leading-icon size, applied to every child item.
    - name: show-divider
      options: boolean
      defaultValue: 'false'
      description: >-
        Shows dividers between items. Only applies to type="flat", since card/group
        items have their own surface to separate them.
    - name: multiple
      options: boolean
      defaultValue: 'false'
      description: >-
        Allows more than one item open at once. Default behaviour is exclusive —
        opening one item closes the others.
- type: accessibility
  focusOrder:
  - >-
    Each item's summary row receives focus in normal tab order at its position on
    the page. Content inside a currently open item is reachable by Tab in document
    order after its summary; content inside closed items is skipped, consistent
    with native <details> behaviour.
  keyboard:
  - key: Enter / Space
    action: >-
      Toggles the focused item open or closed (native <summary> behaviour, inherited
      from each child item).
  aria:
  - >-
    No custom ARIA roles are applied at the group level — semantics come from the
    native <details>/<summary> elements inside each Accordion item.
  - >-
    The group heading, when present, should be a real heading element (<h2>–<h6>)
    chosen by the consumer to fit the page's outline.
  seo:
  - >-
    Built on native <details>/<summary>, so keyboard, screen reader and open/close
    semantics come from the platform rather than simulated ARIA.
  - >-
    Because closed content remains in the DOM rather than being removed, its text
    stays available to search engine crawlers and AI agents parsing the page, even
    though it isn't visually revealed until a user (or assistive technology) expands
    it.
  - >-
    Slotting a real heading element into heading keeps the page's heading outline
    correct and machine-readable, rather than relying on a generic, unstructured
    label.
- type: related-components
  items:
  - label: Accordion item
    href: /components/accordion-item
    note: The individual collapsible row; always used as a child of Accordion.
  - label: Divider
    href: /components/divider
    note: Used internally when show-divider is set on a flat accordion.
  - label: Icon
    href: /components/icon
    note: Supplies each item's leading icon and chevron indicator.
---
