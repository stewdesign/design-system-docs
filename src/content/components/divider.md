---
# Gaps from the source doc (TODOs), for review:
#   - When not to use: not covered in source or stories — no guidance found for alternative components.
#   - Content guidance (what to write): not applicable — this component has no text content.
#   - Content guidance (how to write): not applicable — this component has no text content.
#   - Keyboard interactions: none — not applicable
#   - SEO and AI discovery: not covered in source or stories.
#   - Related components: not covered in source or stories.
title: Divider
description: >-
  Divider is a one-pixel horizontal rule used to separate content, mapping three
  semantic contrast levels to token-based border colours.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=11890-1908
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
    Rule (part="divider"): a full-width <hr> styled with a token-based top border,
    coloured by variant.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Divider anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: The default contrast level.
    image: https://placehold.co/1280x720
    imageAlt: 'Divider: Default'
  - title: Variants
    description: default, secondary and tertiary shown together.
    image: https://placehold.co/1280x720
    imageAlt: 'Divider: Variants'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: Renders as a native <hr> spanning the full width of its container.
    list:
    - >-
      The rule colour is set via a CSS custom property (--aa-divider-color), resolved
      from variant.
    image: https://placehold.co/1280x720
    imageAlt: 'Divider: general behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Divider example: Separating sections of content with a plain horizontal
        rule.'
      label: Do
      caption: Separating sections of content with a plain horizontal rule.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Divider example: Choosing a contrast level (variant) appropriate to how
        strongly the separation should read against surrounding content.
      label: Do
      caption: >-
        Choosing a contrast level (variant) appropriate to how strongly the separation
        should read against surrounding content.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The component has no text content or interactive behaviour — it is a purely
    visual separator.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: default | secondary | tertiary
      defaultValue: default
      description: >-
        Contrast level of the rule. default uses --border-default-tertiary, secondary
        uses --border-default-secondary, tertiary uses --border-default-primary.
- type: accessibility
  focusOrder:
  - Not applicable — Divider is not focusable and has no interactive elements.
  aria:
  - >-
    Renders a native <hr>, which carries an implicit separator role — no explicit
    ARIA attributes are set in source.
---
