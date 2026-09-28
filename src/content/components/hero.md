---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Focus order: not determinable from source — no explicit tabindex or focus management is set beyond the natural order of slotted interactive content (list items, actions).
#   - Keyboard interactions: none defined in source — keyboard behaviour is inherited from whatever is slotted into list/actions.
title: Hero
description: >-
  Hero is the large, top-of-page banner used to introduce a landing page or campaign.
  It has three variants — seo (text and image side by side), background-image (a
  full-bleed photo behind a white content card) and slim (centred copy only, no
  image, list or actions) — sharing one heading/eyebrow/description structure and
  an optional decorative brand stripe along the bottom edge.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=348-15896
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Eyebrow: short label above the heading.'
  - 'Heading: the primary <h1> for the page.'
  - 'Description: supporting paragraph beneath the heading.'
  - >-
    List slot (list): optional supporting list (e.g. a checklist), hidden when empty.
    Not available on slim.
  - >-
    Actions slot (actions): optional call-to-action(s), hidden when empty. Not available
    on slim.
  - >-
    Media: a side-by-side image (seo), a full-bleed background image (background-image),
    or absent (slim).
  - >-
    Brand stripe: decorative 32px image band along the bottom edge, shown by default.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Hero anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Seo
    description: >-
      Eyebrow, heading, description, checklist and button group alongside a side-by-side
      image.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: Seo'
  - title: Background image
    description: Full-bleed photo behind a white content card with actions.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: Background image'
  - title: Slim
    description: Centred eyebrow, heading and description only, no image, list or
      actions.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: Slim'
  - title: Without brand stripe
    description: brand-stripe="false".
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: Without brand stripe'
  - title: Without list
    description: Actions only, no list slot content.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: Without list'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Theming
    description: >-
      The seo and slim variants sit on the brand-yellow surface and scope their
      descendants to the yellow colour theme (the same mechanism Panel uses for
      background="yellow"); background-image sits on plain white and inherits the
      ambient theme instead.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: theming'
  - title: List/actions visibility
    description: >-
      The list and actions slots are hidden (not just visually, but via [hidden])
      until content is slotted in, detected via slotchange.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: list/actions visibility'
  - title: Slim variant
    description: >-
      Has no list or actions region at all — structurally absent, not merely hidden-when-empty,
      matching Figma's Slim variant which has no room for them.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: slim variant'
  - title: Layout
    description: >-
      The seo variant uses Columns (mobile="1" tablet="2") to place the copy and
      image side by side above tablet width, stacking on mobile.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: layout'
  - title: Background-image card width
    description: >-
      The white content card is full-width until the hero reaches 80rem, at which
      point it narrows to 40% width so the ratio only applies once there's room
      for it to breathe.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: background-image card width'
  - title: Entrance animation
    description: >-
      The copy block participates in the shared motion-stagger entrance animation,
      observed via observeEntrance/unobserveEntrance.
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: entrance animation'
  - title: Brand stripe asset
    description: >-
      Reuses the existing journey-pattern-b2c-car brand asset, cropped to the 32px
      band Figma shows; it is purely decorative (alt="", aria-hidden="true").
    image: https://placehold.co/1280x720
    imageAlt: 'Hero: brand stripe asset'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Hero example: The top of a landing or campaign page, to introduce the page's
        purpose with a heading, description and primary call(s) to action.
      label: Do
      caption: >-
        The top of a landing or campaign page, to introduce the page's purpose with
        a heading, description and primary call(s) to action.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Hero example: Mid-page section headers — use a standard heading/section
        component instead.
      label: Don't
      caption: Mid-page section headers — use a standard heading/section component
        instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Hero example: seo when there''s a relevant image to show alongside
        the copy.'
      label: Do
      caption: seo when there's a relevant image to show alongside the copy.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Hero example: When the list or actions need to be present on the slim variant
        — switch to seo or background-image instead, since slim has no such regions.
      label: Don't
      caption: >-
        When the list or actions need to be present on the slim variant — switch
        to seo or background-image instead, since slim has no such regions.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Hero example: background-image when a full-bleed photograph should set the
        scene behind the message.
      label: Do
      caption: >-
        background-image when a full-bleed photograph should set the scene behind
        the message.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Hero example: slim for a simpler, image-free introduction with no list or
        actions, e.g. a single-purpose booking page.
      label: Do
      caption: >-
        slim for a simpler, image-free introduction with no list or actions, e.g.
        a single-purpose booking page.
- type: side-by-side
  heading: Content guidance
  list:
  - 'Eyebrow: a short label that sets context for the heading, not a repeat of it.'
  - 'Heading: the page''s primary message, concise enough to read at a glance.'
  - 'Description: one supporting sentence or two that expands on the heading.'
  - 'List items (when used): frontload with what the user gets or can do.'
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - Avoid exclamation marks.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    imageSrc/imageAlt only apply to the seo variant; backgroundSrc/backgroundAlt
    only apply to background-image — setting the wrong pair for the active variant
    has no effect.
  - >-
    The list and actions slots are unavailable on slim — content passed to them
    there won't render.
  - The brand stripe is decorative only; don't rely on it to convey information.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: seo | background-image | slim
      defaultValue: seo
      description: >-
        Selects the layout: side-by-side image, full-bleed background photo, or
        centred copy only.
    - name: heading
      options: string
      defaultValue: '''Heading'''
      description: The <h1> heading text.
    - name: eyebrow
      options: string
      defaultValue: '''Eyebrow'''
      description: Short label shown above the heading.
    - name: description
      options: string
      defaultValue: '''Description'''
      description: Supporting paragraph beneath the heading.
    - name: imageSrc (image-src)
      options: string
      description: Side-by-side image source. Only used by the seo variant.
    - name: imageAlt (image-alt)
      options: string
      description: Alt text for the seo variant's image.
    - name: backgroundSrc (background-src)
      options: string
      description: Full-bleed background image source. Only used by the background-image
        variant.
    - name: backgroundAlt (background-alt)
      options: string
      description: Alt text for the background-image variant's background photo.
    - name: brandStripe (brand-stripe)
      options: boolean
      defaultValue: 'true'
      description: Shows the decorative brand stripe along the bottom edge.
- type: accessibility
  aria:
  - >-
    No component-level ARIA is set by Hero itself; the heading renders as a native
    <h1>.
  - >-
    The brand stripe image is marked alt="" and aria-hidden="true" as it is purely
    decorative.
  - >-
    imageAlt/backgroundAlt are only applied to the <img> when a non-empty value
    is supplied (via ifDefined).
  seo:
  - Renders a real <h1>, giving the page a clear, crawlable primary heading.
  - >-
    Supplying imageAlt/backgroundAlt ensures the hero's image content is described
    to assistive technology and indexable by search engines rather than left blank.
- type: related-components
  items:
  - label: Columns
    href: /components/columns
    note: Provides the side-by-side layout used by the seo variant.
  - label: Button
    href: /components/button
    note: Typically slotted into actions.
  - label: Button group
    href: /components/button-group
    note: Typically slotted into actions.
  - label: Icon
    href: /components/icon
    note: Commonly used alongside list items slotted into list.
---
