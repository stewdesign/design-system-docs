---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Card
description: >-
  Card is a flexible content surface combining an optional image, icon, tag and
  action button around a slotted content area. It's used for feature highlights,
  cover/product summaries, and any card-based content block, individually or grouped
  via Card group.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=12882-11997
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
    Image (optional): a top (vertical) or leading-column (horizontal) image, with
    a configurable aspect ratio.
  - 'Tag slot (tag): an optional Tag, overlaid on the image''s top-left corner.'
  - >-
    Icon slot (icon): an optional icon (e.g. Brand icon/Icon), positioned by icon-position.
  - >-
    Content slot (default): the card's heading (styled as an h3) and body copy,
    entirely authored by the consumer.
  - >-
    Action slot (action): an optional button (e.g. Button) at the bottom of the
    card.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Card anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default (vertical, filled)
    description: Image, icon, content and action.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: Default (vertical, filled)'
  - title: Flat
    description: No card-level surface; the image carries the visual shape instead.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: Flat'
  - title: Horizontal
    description: Narrow leading image column beside the content.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: Horizontal'
  - title: Icon right
    description: Icon trailing the content instead of leading it.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: Icon right'
  - title: With image
    description: Image plus an overlaid tag.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: With image'
  - title: Without action
    description: Content-only card, no action slot populated.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: Without action'
  - title: State matrix
    description: Default, hover, and focus states shown together for comparison.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: State matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Hover/press
    description: >-
      Filled cards with real action content (has-action reflects automatically when
      the action slot has assigned elements) lift with a shadow on hover and show
      a focus ring outline within the card when a nested control is focused. A card
      with no action content shows no interactive hover treatment.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: hover/press'
  - title: Icon/tag/action visibility
    description: >-
      Each of these slots is hidden entirely (not just visually) unless real content
      is assigned to it, detected via slotchange.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: icon/tag/action visibility'
  - title: Layout by orientation
    description: >-
      Vertical: image on top (rounded on its top corners for filled, or fully rounded
      for flat, which has no card-level surface of its own), icon above the content
      by default or trailing beside it when icon-position="right".
    list:
    - >-
      horizontal: a narrow image column (40% width, capped at 160px) beside the
      content, with the heading and icon sharing a row and body copy spanning the
      full width beneath.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: layout by orientation'
  - title: Direct h3 styling
    description: >-
      Any <h3> slotted directly is styled to match Heading 5 visually while keeping
      its real semantic level — same pattern as Accordion's heading slot.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: direct h3 styling'
  - title: Responsive behaviour
    description: >-
      The card sizes to 100% of its container in both dimensions; no dedicated breakpoints
      of its own beyond what Card group's row layout provides.
    image: https://placehold.co/1280x720
    imageAlt: 'Card: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Presenting a self-contained piece of content (a feature, a cover option, a service)
    with an optional image, icon and call-to-action.
  - Inside Card group for an equal-height row of related cards.
  - >-
    Either with a real link/button action (interactive, hover-responsive) or as
    a purely informational block with no action.
  dont:
  - >-
    A simple text-only content block with no card framing — use plain content in
    Container instead.
  - >-
    A clickable card with no visible action content — set a real action (button/link)
    in the action slot rather than relying on the whole card surface being implicitly
    clickable; the hover/focus treatment only activates when real action content
    is present.
  - Displaying tabular or list-style data — use a table or list component instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    The heading (slotted <h3>) should be short and specific to the card's content
    — avoid generic labels.
  - >-
    Body copy should be concise enough to fit comfortably within the card without
    excessive scrolling or truncation (the component doesn't truncate long text).
  - >-
    Only add an action button if there's a real next step for the user to take from
    this card.
  - Use sentence case for the heading and any action button label.
  - >-
    Follow Button's content guidance for the action slot — frontloaded active verbs,
    specific labels, no generic wording like "Find out more".
  - Use British English spelling throughout.
  - >-
    image-alt should describe the image's real content concisely, not restate the
    heading.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Card example: "Unlimited call-outs"'
      label: Do
      caption: '"Unlimited call-outs"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Card example: "Great feature!"'
      label: Don't
      caption: '"Great feature!"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Card example: Action: "Choose cover"'
      label: Do
      caption: 'Action: "Choose cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Card example: Action: "Find out more"'
      label: Don't
      caption: 'Action: "Find out more"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    image-ratio has no visible effect in orientation="horizontal" — the image column's
    width and height are already both pinned, leaving aspect-ratio nothing to do.
  - >-
    The hover lift and focus ring are gated on has-action — a purely informational
    card (no action slot content) intentionally shows no interactive affordance,
    even if it's technically hoverable.
  - >-
    Don't nest more than one interactive element inside the action slot expecting
    independent behaviour — it's designed for a single button or link.
  - >-
    Long headings will wrap rather than truncate; keep them short enough to read
    cleanly at the card's expected width.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: filled | flat
      defaultValue: filled
      description: >-
        Whether the card has its own filled surface and radius, or is unstyled with
        the image carrying the visual shape instead.
    - name: orientation
      options: vertical | horizontal
      defaultValue: vertical
      description: >-
        Vertical stacks image above content; horizontal places a narrow image column
        beside the content.
    - name: icon-position
      options: default | right
      defaultValue: default
      description: Whether the icon sits above/before the content or trails it.
    - name: image-src
      options: string
      defaultValue: ''''''
      description: Image URL. Omitting it renders no image at all.
    - name: image-alt
      options: string
      defaultValue: ''''''
      description: Alt text for the image.
    - name: image-ratio
      options: 1x1 | 16x9 | 4x3
      defaultValue: 16x9
      description: >-
        Top image's aspect ratio. Only meaningful for orientation="vertical" — horizontal's
        image column already pins both dimensions.
- type: accessibility
  focusOrder:
  - >-
    The card itself is not focusable. Focus order follows the natural document order
    of any interactive content slotted inside it — most commonly the action button,
    reached in normal tab order at the card's position on the page.
  keyboard:
  - key: Enter / Space
    action: >-
      Activates the focused action button or link inside the card (native behaviour
      of the slotted control, e.g. Button).
  aria:
  - No custom ARIA roles are applied to the card container itself.
  - >-
    A slotted <h3> retains its real semantic heading level even though it's visually
    styled as a smaller heading — this keeps the page's heading outline correct
    for assistive technology.
  - >-
    Icon, tag and action regions are hidden via the [hidden] attribute/CSS override
    when empty, so assistive technology doesn't announce empty containers.
  seo:
  - >-
    Content (heading, body copy) is real, crawlable text — not rendered as an image
    or background, so search engines and AI agents can read it directly.
  - >-
    Because the heading retains its true semantic level regardless of visual size,
    ensure the level chosen fits correctly into the surrounding page's heading outline
    (e.g. via Card group's heading-level, or directly when using Card standalone).
  - >-
    image-alt should be set whenever the image conveys meaning beyond decoration,
    so it's discoverable to visually impaired users and to any AI agent parsing
    page content.
- type: related-components
  items:
  - label: Card group
    href: /components/card-group
    note: The surrounding equal-height row layout for multiple cards.
  - label: Container
    href: /components/container
    note: A simpler, unstyled surface without a card's image/icon/tag/action anatomy.
  - label: Tag
    href: /components/tag
    note: Supplies the optional tag overlaid on the card's image.
  - label: Button
    href: /components/button
    note: Typically supplies the action slot content.
---
