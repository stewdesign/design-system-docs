---
# Gaps from the source doc (TODOs), for review:
#   - Behaviour (Transitions/responsive behaviour): not specified in source — the tag has no interactive states (hover/focus/disabled) since it is not an interactive element.
#   - When not to use: check whether a dedicated chip/filter component exists.
#   - Keyboard interactions: not applicable — the component has no keyboard interactions.
#   - ARIA: confirm whether an aria-label or role="status" is needed when a tag communicates information not otherwise conveyed in surrounding text (e.g. colour-only meaning).
title: Tag
description: >-
  Tag is a small labelled pill used to surface a status, category or classification
  inline with other content. One component covers three distinct Figma component
  sets — semantic colour tags, member benefit tier badges and road/motorway signals
  — since they all share the same underlying pill shape.
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
    Icon area (icon slot, leading-icon property): optional leading icon, falling
    back to a generic info icon, shown before the label. Semantic colour variants
    only.
  - >-
    AA mark: a small AA logo mark shown instead of an icon, fixed to the tier variants
    (gold/silver/bronze).
  - >-
    Label (default slot): the tag's text content. Figma verification: Default (node
    17020:7297, semantic colour tags), Tiers (node 17020:7334, member benefits tiers
    only) and Signals (node 17020:7378, road/motorway indicators) — three component
    sets in Figma, one component here since they're all the same "small labelled
    pill" shape underneath.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Tag anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Semantic colour tag
    description: Default brand variant with leading icon, subtle emphasis.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Semantic colour tag'
  - title: Strong emphasis tag
    description: emphasis="strong" across each semantic colour.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Strong emphasis tag'
  - title: Small tag
    description: size="small".
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Small tag'
  - title: Tag without icon
    description: leading-icon="false".
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Tag without icon'
  - title: Gold/silver/bronze tier tags
    description: Fixed AA mark and label, at both sizes.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Gold/silver/bronze tier tags'
  - title: Motorway tag
    description: Fixed 32px square, e.g. "M1".
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Motorway tag'
  - title: A-road tag
    description: E.g. "A22".
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: A-road tag'
  - title: Road tag
    description: E.g. "Standard road name".
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Road tag'
  - title: Variant matrix
    description: All semantic colours at both emphases, all tiers, all signals,
      side by side.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: Variant matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Semantic colour tags
    description: >-
      (brand, neutral, informational, positive, warning, danger) — render an icon
      slot (unless leading-icon is false) followed by the slotted label text, at
      subtle or strong emphasis.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: semantic colour tags'
  - title: Tier badges
    description: >-
      (gold, silver, bronze) — render a fixed AA mark plus a fixed label ("Gold",
      "Silver" or "Bronze") rather than slotted content; a metallic gradient background
      and rim colour are literal values with no design token equivalent, and emphasis
      does not apply.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: tier badges'
  - title: Signal tags
    description: >-
      (motorway, a-road, road) — render only the slotted content, no icon and no
      emphasis. motorway is a fixed 32px square regardless of label length; a-road
      and road grow to fit their text.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: signal tags'
  - title: Warning
    description: >-
      Keeps the same dark text colour at both emphases, since the strong orange
      background does not have sufficient contrast for white text — this differs
      from every other semantic colour, which switches to white text at strong emphasis.
    image: https://placehold.co/1280x720
    imageAlt: 'Tag: warning'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Tag example: Indicating a status or category next to other content, e.g.
        a policy state or a classification label.
      label: Do
      caption: >-
        Indicating a status or category next to other content, e.g. a policy state
        or a classification label.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Tag example: As an interactive control — Tag is not clickable or focusable;
        use Button or Tile for actions.
      label: Don't
      caption: >-
        As an interactive control — Tag is not clickable or focusable; use Button
        or Tile for actions.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: Displaying a member''s benefit tier (gold/silver/bronze).'
      label: Do
      caption: Displaying a member's benefit tier (gold/silver/bronze).
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: As a dismissible filter chip or removable input value'
      label: Don't
      caption: As a dismissible filter chip or removable input value
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Tag example: Displaying a road classification or motorway number in journey
        or breakdown-related content.
      label: Do
      caption: >-
        Displaying a road classification or motorway number in journey or breakdown-related
        content.
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: For a longer message with supporting detail — use
        Message instead.'
      label: Don't
      caption: For a longer message with supporting detail — use Message instead.
- type: side-by-side
  heading: Content guidance
  list:
  - Keep labels to a single short word or phrase — tags are pills, not sentences.
  - >-
    For tier tags, the label is fixed by the component (Gold/Silver/Bronze) and
    cannot be overridden.
  - >-
    For signal tags, use the exact road or motorway identifier a user would recognise,
    e.g. "M1" or "A22".
  - Use sentence case.
  - Use British English spelling throughout.
  - Avoid adverbs like "simply", "just" or "easily".
  - >-
    Use the Harvard comma, not the Oxford comma, in any surrounding copy that lists
    tags.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: "Gold"'
      label: Do
      caption: '"Gold"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: "GOLD MEMBER"'
      label: Don't
      caption: '"GOLD MEMBER"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: "M1"'
      label: Do
      caption: '"M1"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: "Motorway: M1"'
      label: Don't
      caption: '"Motorway: M1"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: "New"'
      label: Do
      caption: '"New"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tag example: "This is a brand new offer!"'
      label: Don't
      caption: '"This is a brand new offer!"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Tier variants ignore any slotted content — the label is always the fixed tier
    name, and leading-icon has no effect since the AA mark is not the icon slot.
  - Signal variants ignore emphasis and leading-icon entirely.
  - >-
    motorway forces a fixed 32px width — long text in this variant will overflow
    or be clipped, so only use it for short motorway numbers.
  - >-
    The tier gradient colours and rim colours are literal hex/rgb values, not design
    tokens — any future rebrand of the metallic tiers requires a source change,
    not a token update.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: >-
        brand | neutral | informational | positive | warning | danger | gold | silver
        | bronze | motorway | a-road | road
      defaultValue: brand
      description: Selects which of the three tag families renders and its colour.
    - name: emphasis
      options: subtle | strong
      defaultValue: subtle
      description: >-
        Contrast level for the semantic colour variants. Does not apply to tier
        or signal variants.
    - name: size
      options: large | small
      defaultValue: large
      description: Overall padding of the tag.
    - name: leadingIcon (leading-icon)
      options: boolean
      defaultValue: 'true'
      description: Shows the leading icon area. Only applies to the semantic colour
        variants.
- type: accessibility
  focusOrder:
  - >-
    Tag is not focusable and does not participate in the tab order — it is a status
    indicator, not an interactive control.
  aria:
  - No role override is applied — the tag renders as a plain <span>.
  seo:
  - >-
    Renders as a semantic <span> with visible text content, so the label is readable
    by search engines and AI agents without additional markup.
  - >-
    Since the semantic colour variants rely on colour to reinforce (but not solely
    convey) meaning, ensure the label text itself states the status rather than
    relying on colour alone.
- type: related-components
  items:
  - label: Badge
    href: /components/badge
    note: >-
      A similar small label treatment used for standalone counts/callouts rather
      than inline status pills.
  - label: Message
    href: /components/message
    note: >-
      For a status communicated with a longer line of supporting text rather than
      a compact label.
  - label: Icon
    href: /components/icon
    note: Supplies the icon slotted into the leading icon area of semantic colour
      tags.
---
