---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: no keyboard interactions specific to the group — interactive behaviour comes entirely from nested Card action content.
title: Card group
description: >-
  Card group presents a heading and subheading above a responsive row of Card elements,
  laid out with equal-height rows so every card in a row matches the tallest one.
  It's used for feature grids, product/cover comparisons, and similar card-based
  sections.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17131-11397
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
    Heading: rendered through Heading at a consumer-chosen semantic level (heading-level,
    default 2), with an optional subheading.
  - >-
    Cards row: a real Columns auto layout containing Card elements nested in the
    default slot.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Card group anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Centred heading above a card row.
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: Default'
  - title: Start-aligned heading
    description: Heading aligned to the start, e.g. inside a narrower sidebar layout.
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: Start-aligned heading'
  - title: Without heading
    description: Cards row only, no heading block rendered.
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: Without heading'
  - title: Custom heading level
    description: >-
      A different semantic level (e.g. heading-level="3") used to fit the page's
      outline.
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: Custom heading level'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Heading only touches the heading
    description: >-
      headingAlign/headingLevel affect only the heading block, never the cards row
      itself.
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: heading only touches the heading'
  - title: Equal-height rows
    description: >-
      Cards are laid out via a real Columns auto with align-items: stretch, so every
      card in a row matches the tallest card's height — same as Figma's aligned
      button baselines.
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: equal-height rows'
  - title: Entrance animation
    description: >-
      Cards animate in with a staggered entrance effect when the group scrolls into
      view (aaMotionStaggerStyles/observeEntrance).
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: entrance animation'
  - title: Responsive behaviour
    description: >-
      The cards row wraps responsively via Columns, with each card capped at a maximum
      width (500px) so cards don't stretch excessively wide in a single-column layout.
    image: https://placehold.co/1280x720
    imageAlt: 'Card group: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Card group example: A grid or row of related Card elements under a shared
        heading — feature highlights, cover options, service categories.
      label: Do
      caption: >-
        A grid or row of related Card elements under a shared heading — feature
        highlights, cover options, service categories.
    - image: https://placehold.co/1280x720
      imageAlt: 'Card group example: A single card with no group heading — use Card
        directly.'
      label: Don't
      caption: A single card with no group heading — use Card directly.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Card group example: When cards should align to equal height across a row
        regardless of content length.
      label: Do
      caption: >-
        When cards should align to equal height across a row regardless of content
        length.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Card group example: Free-form or custom layouts needing more control than
        a heading-plus-cards-row pattern — nest Columns directly instead.
      label: Don't
      caption: >-
        Free-form or custom layouts needing more control than a heading-plus-cards-row
        pattern — nest Columns directly instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Card group example: Splitting arbitrary content left/right — use Columns
        or Container for general layout needs.
      label: Don't
      caption: >-
        Splitting arbitrary content left/right — use Columns or Container for general
        layout needs.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the group heading short and descriptive of the whole set, not a repeat
    of any individual card's content.
  - >-
    Use the subheading, when present, to add brief supporting context — not a duplicate
    of the heading.
  - Ensure each nested card follows its own content guidance (see Card).
  - Use sentence case for heading and subheading.
  - >-
    Use British English spelling and specific, active wording — avoid generic headings
    like "More options".
  - >-
    Keep the heading concise enough not to wrap awkwardly at the group's own content
    width.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Card group example: "Choose your cover level"'
      label: Do
      caption: '"Choose your cover level"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Card group example: "Options"'
      label: Don't
      caption: '"Options"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Card group example: "Compare our breakdown plans"'
      label: Do
      caption: '"Compare our breakdown plans"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Card group example: "Click to compare"'
      label: Don't
      caption: '"Click to compare"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The heading is hidden entirely (not just visually collapsed) when heading is
    empty — don't rely on an empty string to reserve visual space.
  - >-
    heading-align="start" is a deliberate addition beyond the Figma spec for narrower-column
    use — confirm with design before using it in a full-width page context where
    the centred default is expected.
  - >-
    Cards are capped at 500px max-width via ::slotted(Card) — a very wide container
    with few cards may leave more empty space than expected around each card.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: heading
      options: string
      defaultValue: ''''''
      description: Group heading text. Hidden entirely if empty.
    - name: subheading
      options: string
      defaultValue: ''''''
      description: Optional supporting text under the heading.
    - name: heading-align
      options: center | start
      defaultValue: center
      description: >-
        Alignment of the heading/subheading block. start is not a Figma variant
        but is useful once the group sits in a narrower column (e.g. a sidebar).
    - name: heading-level
      options: number (1–6, AaHeadingLevel)
      defaultValue: '2'
      description: >-
        Semantic heading level, passed through to Heading. Since this system ties
        heading size to semantic level, picking a size means picking the level.
- type: accessibility
  focusOrder:
  - >-
    The group itself introduces no focus stops. Focus order follows the natural
    order of the heading (non-interactive) followed by each card's own interactive
    elements (e.g. action buttons), in DOM/visual order.
  aria:
  - No custom ARIA roles are applied by the group itself.
  - >-
    The heading renders through Heading, which uses a real semantic heading element
    at the level the consumer specifies — this keeps the page's heading outline
    correct.
  seo:
  - >-
    Uses a real semantic heading (via Heading) at a level the consumer controls,
    helping search engines and AI agents correctly place this section within the
    page's outline.
  - >-
    Cards nested inside remain real content elements (headings, paragraphs, links/buttons),
    so their text and actions stay independently discoverable regardless of the
    group's own layout wrapper.
- type: related-components
  items:
  - label: Card
    href: /components/card
    note: The individual card component nested inside the group.
  - label: Columns
    href: /components/columns
    note: >-
      The underlying layout primitive used for the equal-height cards row; also
      usable directly for other layouts.
  - label: Heading
    href: /components/heading
    note: Renders the group's heading/subheading at a chosen semantic level.
---
