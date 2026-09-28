---
# Gaps from the source doc (TODOs), for review:
#   - Examples: no dedicated story file found for this component — confirm these examples against an actual Storybook story once one exists.
#   - Behaviour (Responsive behaviour): no explicit breakpoint behaviour found in source — confirm intended behaviour below the card's max width.
#   - ARIA: no alt fallback behaviour specified beyond the image-alt property — confirm expected behaviour when an image is present but image-alt is left empty.
title: Quick quote card
description: >-
  Quick quote card is a promotional card that surfaces a quick-quote entry point
  for a specific AA product line (breakdown, car, home, finance) or a general decorative
  promo. It was built for Header dropdown's slot="quick-quote", but is usable standalone
  anywhere a single, image-led promo card is needed.
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
  - 'Image area: an optional image (image-src/image-alt), centred and scaled to
    fit.'
  - 'Heading: the card''s title text.'
  - 'Description: supporting body copy beneath the heading.'
  - >-
    Arrow icon: a decorative circular arrow (arrow-right) at the end of the footer
    row; it borrows Icon button's tertiary token pairing but is not a separate focus
    stop.
  - >-
    Card surface: the whole card is a single interactive <a> or <button>, tinted
    per surface. Figma verification: Quick quote (node 3011:3497, Breakdown variant)
    and the Insurance dropdown's own home-insurance instance (node 3011:3549 inside
    3011:3547).
  image: https://placehold.co/1280x720
  imageAlt: Labelled Quick quote card anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Breakdown surface
    description: Default variant, yellow-themed to match Figma's breakdown card
      exactly.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: Breakdown surface'
  - title: Car / Finance surface
    description: Product-line tints on the light theme.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: Car / Finance surface'
  - title: Home surface
    description: Purple background using the raw palette token.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: Home surface'
  - title: Decorative surface (blue/green/orange/purple/red/yellow)
    description: General-purpose promo tint not tied to a product line.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: Decorative surface (blue/green/orange/purple/red/yellow)'
  - title: Card without image
    description: Heading/description/arrow only, image area empty.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: Card without image'
  - title: Card as link (href set)
    description: Renders an anchor styled identically to the button form.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: Card as link (href set)'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Theming
    description: >-
      surface="breakdown" scopes the card to the yellow theme so its heading/body
      text render in the dark brown Figma specifies, regardless of the page's ambient
      theme. Every other surface value scopes to the light theme. The theme is re-applied
      whenever surface changes.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: theming'
  - title: Interaction
    description: >-
      The whole card is one real <a> (when href is set) or <button> — there is no
      separate interactive target for the arrow, since Figma shows no distinct state
      for it.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: interaction'
  - title: Hover
    description: >-
      The arrow's background shifts from --surface-action-tertiary-default to --surface-action-tertiary-hover
      when the card is hovered.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: hover'
  - title: Focus
    description: >-
      A dashed focus ring (--aa-transition-focus-ring-scale) appears around the
      whole card on :focus-visible, expanding slightly outward from the card's edge.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: focus'
  - title: Layout
    description: >-
      The card has a fixed max-inline-size of 318px and a min-block-size of 366px;
      the image area flexes to fill available space above the heading/description/arrow
      footer.
    image: https://placehold.co/1280x720
    imageAlt: 'Quick quote card: layout'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Quick quote card example: A single, prominent promo entry point into a quick-quote
        flow for one product line (breakdown, car, home, finance).
      label: Do
      caption: >-
        A single, prominent promo entry point into a quick-quote flow for one product
        line (breakdown, car, home, finance).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Quick quote card example: A set of several equally-weighted CTAs — use Button/Button
        group instead.
      label: Don't
      caption: A set of several equally-weighted CTAs — use Button/Button group
        instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Quick quote card example: Inside Header dropdown's slot="quick-quote", its
        primary intended placement.
      label: Do
      caption: Inside Header dropdown's slot="quick-quote", its primary intended
        placement.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Quick quote card example: A generic content tile with no promotional imagery
        or product-line association — use Tile instead, which shares this component's
        href-or-button pattern but without the surface theming.
      label: Don't
      caption: >-
        A generic content tile with no promotional imagery or product-line association
        — use Tile instead, which shares this component's href-or-button pattern
        but without the surface theming.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Quick quote card example: A general decorative promo card using one of the
        non-product-line surface tints.
      label: Do
      caption: A general decorative promo card using one of the non-product-line
        surface tints.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Quick quote card example: A card that needs multiple independent interactive
        elements (e.g. a separate dismiss control) — this component is designed
        as a single interactive target.
      label: Don't
      caption: >-
        A card that needs multiple independent interactive elements (e.g. a separate
        dismiss control) — this component is designed as a single interactive target.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep heading short and product-focused, e.g. "Breakdown cover" — it uses a display
    font at heading scale, so long text will affect the card's layout.
  - >-
    Write description as a single, concise supporting sentence that reinforces the
    value of the offer.
  - >-
    Always provide image-alt when image-src is set, describing the image's content
    for assistive tech.
  - Use sentence case for the heading, not title case.
  - Use British English spelling throughout.
  - Avoid adverbs such as "simply", "just" or "easily".
  - >-
    Avoid generic wording — be specific about the product and benefit rather than
    a vague call to action.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Quick quote card example: "Breakdown cover"'
      label: Do
      caption: '"Breakdown cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Quick quote card example: "Find out more"'
      label: Don't
      caption: '"Find out more"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Quick quote card example: "24/7, 365 days a year, you''re covered"'
      label: Do
      caption: '"24/7, 365 days a year, you''re covered"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Quick quote card example: "Simply get covered today"'
      label: Don't
      caption: '"Simply get covered today"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Quick quote card example: "Home insurance"'
      label: Do
      caption: '"Home insurance"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Quick quote card example: "Insurance"'
      label: Don't
      caption: '"Insurance"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The arrow icon is purely decorative (aria-hidden="true") — don't rely on it
    as an independent affordance or focus target.
  - >-
    surface="home" uses a raw palette token (--purple-200) rather than a semantic
    alias, since none exists yet for that product line — flag this if a semantic
    home-insurance token is introduced later.
  - >-
    The card enforces a max-inline-size of 318px, so it won't stretch to fill an
    arbitrarily wide container — check layout in narrow and wide contexts.
  - >-
    Long heading or description text isn't visually truncated by the component —
    content guidance on conciseness must be followed to avoid overflow.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: heading
      options: string
      defaultValue: '''Breakdown cover'''
      description: The card's title.
    - name: description
      options: string
      defaultValue: '"24/7, 365 days a year, you''re covered"'
      description: Supporting body copy.
    - name: imageSrc (attribute image-src)
      options: string
      defaultValue: ''''''
      description: Source for the card's image. Omit to render no image.
    - name: imageAlt (attribute image-alt)
      options: string
      defaultValue: ''''''
      description: Alt text for the image.
    - name: surface
      options: breakdown | car | finance | home | blue | green | orange | purple
        | red | yellow
      defaultValue: breakdown
      description: >-
        Sets the card's background tint. breakdown/car/finance map to their product-line
        surface tokens; home uses the raw --purple-200 palette token (no semantic
        alias yet exists); blue/green/orange/purple/red/yellow are the system's
        general-purpose decorative palette for promos not tied to one product line.
    - name: href
      options: string
      defaultValue: ''''''
      description: Renders an anchor instead of a button.
- type: accessibility
  focusOrder:
  - >-
    The card participates in the natural tab order as a single <a> or <button> —
    there is no secondary focus stop for the arrow icon, which is marked aria-hidden="true".
  keyboard:
  - key: Enter
    action: Activates the button or follows the link.
  - key: Space
    action: Activates the button (native <button> behaviour; does not apply to anchors).
  aria:
  - >-
    aria-hidden="true" — applied to the decorative arrow icon wrapper, since it
    carries no independent meaning or interaction.
  - >-
    No role override is needed — the semantic <button> or <a> element is used directly.
  seo:
  - >-
    Renders as a real <button> or <a>, not a generic <div>, so semantics, focusability
    and link crawlability are native.
  - >-
    When used for navigation, always set href so the destination is a real, crawlable
    link.
  - >-
    heading and description should together describe the offer clearly out of context,
    since assistive tech, search engines and AI agents may parse them independently
    of surrounding page content.
- type: related-components
  items:
  - label: Tile
    href: /components/tile
    note: >-
      Shares the same href-or-button rendering split, for general content tiles
      without the product-line surface theming.
  - label: Icon button
    href: /components/icon-button
    note: Supplies the tertiary token pairing the arrow borrows.
  - label: Header
    href: /components/header
    note: The primary host context, via slot="quick-quote".
  - label: Header dropdown
    href: /components/header-dropdown
    note: The primary host context, via slot="quick-quote".
---
