---
# Gaps from the source doc (TODOs), for review:
#   - ARIA: confirm whether the corner badge or icon needs to be hidden from assistive tech (e.g. aria-hidden) so only the heading/description are announced, since the source doesn't set this explicitly.
title: Tile
description: >-
  Tile is a single interactive tile combining an icon, a heading and optional supporting
  text — used for grid-based navigation or selection, such as a set of product or
  service options. The whole tile is one clickable control: a real <a> when href
  is set, otherwise a real <button>.
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
    Badge: a corner Badge shown when standout is true and intent is info or positive;
    positioned absolutely at the top-left corner.
  - >-
    Icon (icon slot): a plain Icon ("Icon" variant) or an Brand icon ("Illustration"
    variant) slotted in, each already sized correctly on its own — variant is not
    a component prop, it's just which atom the consumer slots in.
  - 'Heading: the tile''s main text, truncated with an ellipsis if it overflows.'
  - >-
    Description: optional supporting text beneath the heading, shown only when description
    is set.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Tile anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default tile
    description: Outline surface, icon variant, no description.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Default tile'
  - title: Filled tile
    description: surface="filled".
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Filled tile'
  - title: Tile with description
    description: Supporting text beneath the heading.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Tile with description'
  - title: Illustration tile
    description: An Brand icon slotted in place of Icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Illustration tile'
  - title: Standout tile
    description: Coloured border and badge, intent="info".
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Standout tile'
  - title: Standout positive tile
    description: intent="positive", custom badgeText ("Saved").
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Standout positive tile'
  - title: Danger tile
    description: Fully tinted destructive treatment, e.g. "Cancel renewal".
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Danger tile'
  - title: Breakdown tile
    description: Solid brand-teal fill, e.g. "Report a breakdown".
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Breakdown tile'
  - title: Tile as link (href set)
    description: Renders an anchor styled identically to a tile.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Tile as link (href set)'
  - title: Grid of tiles
    description: Multiple tiles inside Columns, mixing surfaces, standout and default
      states.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: Grid of tiles'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Hover
    description: >-
      Background changes to --surface-neutral-secondary-default (or --surface-action-breakdown-hover
      for the breakdown surface).
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: hover'
  - title: Focus
    description: A dashed focus ring appears around the tile on :focus-visible.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: focus'
  - title: Standout
    description: >-
      Adds a coloured border (--border-info-default for info, --border-positive-secondary
      for positive) and shows a corner Badge with badgeText, reusing the badge's
      existing "information"/"positive" intent tokens verified pixel-for-pixel against
      this component's own Info/Positive citations. Does not apply when intent="danger".
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: standout'
  - title: Danger intent
    description: >-
      Applies fully tinted background, border and text (no subtle/default look,
      no badge) whenever intent="danger" is set, regardless of standout.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: danger intent'
  - title: Breakdown surface
    description: >-
      Solid brand-teal background and matching hover state; heading, description
      and icon switch to tertiary/info-tertiary text tokens for contrast against
      the fill.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: breakdown surface'
  - title: Transitions
    description: >-
      Colour and border changes use the shared interactive transition token; the
      focus ring uses the shared focus-ring transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: transitions'
  - title: Responsive behaviour
    description: >-
      The host has a min-inline-size of 160px and grows to fill its container (inline-size:
      100%); intended for use inside a grid such as Columns.
    image: https://placehold.co/1280x720
    imageAlt: 'Tile: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A grid of navigational or selectable options, e.g. product categories, service
    types or account actions.
  - >-
    A destructive or high-consequence action presented as a tile, e.g. cancelling
    a policy (intent="danger").
  - Highlighting a new or noteworthy option with a badge (standout).
  - A Breakdown-branded action tile (surface="breakdown").
  dont:
  - A single, standalone call-to-action outside a grid layout — use Button instead.
  - An icon-only control with no heading — use Icon button instead.
  - >-
    A card-style container with more complex content than an icon, heading and short
    description — use Card instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the heading short enough not to wrap or truncate — it is clipped to a single
    line with an ellipsis.
  - >-
    Use description only when the heading alone doesn't convey enough context to
    distinguish the tile from others in the same grid.
  - >-
    Frontload the heading with the noun or action it represents, e.g. "Roadside"
    or "Report a breakdown", rather than a generic phrase.
  - Keep badgeText to one or two words, e.g. "New" or "Saved".
  - Use sentence case for the heading and description.
  - Use British English spelling throughout.
  - Avoid adverbs like "simply", "just" or "easily".
  - >-
    Avoid generic wording such as "Find out more" — say what the tile actually represents
    or does.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tile example: "Report a breakdown"'
      label: Do
      caption: '"Report a breakdown"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tile example: "Click here for breakdown help"'
      label: Don't
      caption: '"Click here for breakdown help"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tile example: "Cancel renewal"'
      label: Do
      caption: '"Cancel renewal"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tile example: "Cancel Renewal:"'
      label: Don't
      caption: '"Cancel Renewal:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Tile example: "Saved"'
      label: Do
      caption: '"Saved"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Tile example: "You''ve saved money!"'
      label: Don't
      caption: '"You''ve saved money!"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    standout has no visible effect when intent="danger" — danger always renders
    fully tinted with no badge, regardless of standout.
  - >-
    The heading truncates with white-space: nowrap and an ellipsis — a heading longer
    than the tile's width will be clipped, so keep it concise.
  - >-
    Don't nest another interactive element (e.g. a link or button) inside the icon
    slot — the whole tile is already a single <a> or <button>.
  - >-
    The host has a 160px minimum width but no maximum — place tiles inside a constrained
    grid (e.g. Columns) to avoid them growing too wide.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: heading
      options: string
      defaultValue: '''Heading'''
      description: The tile's main text.
    - name: description
      options: string
      defaultValue: ''''''
      description: Optional supporting text beneath the heading.
    - name: surface
      options: outline | filled | breakdown
      defaultValue: outline
      description: >-
        Background/border treatment. breakdown is a solid brand-teal fill for the
        Breakdown product line.
    - name: standout
      options: boolean
      defaultValue: 'false'
      description: >-
        Adds a coloured border and a corner Badge. Only applies when intent is info
        or positive.
    - name: intent
      options: info | positive | danger
      defaultValue: info
      description: >-
        Semantic tone. danger is a separate Figma component with no subtle look
        — background, border and text are fully tinted whenever set, with no standout
        toggle needed and no badge.
    - name: badgeText (badge-text)
      options: string
      defaultValue: '''New'''
      description: Text shown in the corner badge when standout is active.
    - name: href
      options: string
      defaultValue: ''''''
      description: Renders the tile as an <a> instead of a <button> when set.
- type: accessibility
  focusOrder:
  - >-
    Tile participates in the natural tab order as either a <button type="button">
    or an <a href>, depending on whether href is set.
  keyboard:
  - key: Enter
    action: Activates the tile or follows the link.
  - key: Space
    action: Activates the tile (native <button> behaviour; does not apply to anchors).
  aria:
  - >-
    No role override is needed — the semantic <button> or <a> element is used directly.
  seo:
  - >-
    Renders as a real <button> or <a>, not a generic <div>, so semantics, focusability
    and link crawlability are native rather than simulated.
  - >-
    When used for navigation, always set href so the destination is a real, crawlable
    link rather than a JavaScript-only click handler.
  - >-
    The heading should describe the destination or action on its own (per the content
    guidance above), since it is the primary text assistive tech, search engines
    and AI agents will read for this control.
- type: related-components
  items:
  - label: Card
    href: /components/card
    note: For richer content than an icon, heading and short description.
  - label: Button
    href: /components/button
    note: A standalone call-to-action outside a grid layout.
  - label: Badge
    href: /components/badge
    note: Supplies the corner badge shown in the standout state.
  - label: Icon
    href: /components/icon
    note: Supply the icon or illustration slotted into the tile.
  - label: Brand icon
    href: /components/brand-icon
    note: Supply the icon or illustration slotted into the tile.
  - label: Columns
    href: /components/columns
    note: The grid layout typically used to arrange multiple tiles.
---
