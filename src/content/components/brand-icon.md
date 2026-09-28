---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: not applicable — the component is not interactive.
title: Brand icon
description: >-
  Brand icon renders the exported AA brand asset set (product/brand marks such as
  "AA Cars") from src/assets/brand_icons, backed directly by the verified size and
  treatment combinations present in the file naming convention.
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
    Icon graphic: the inlined SVG mark for the requested brand name, size and treatment.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Brand icon anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: A single brand icon at medium size, black treatment.
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: Default'
  - title: Gallery
    description: Every available brand icon rendered together at a chosen size/treatment.
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: Gallery'
  - title: Available names
    description: A reference list of every valid name value.
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: Available names'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Loading
    description: >-
      Icons are loaded asynchronously per name/size/treatment combination and cached
      after first load; nothing renders until the SVG has loaded.
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: loading'
  - title: Empty/unresolved states
    description: >-
      Renders nothing if name is empty or the requested name/size/treatment combination
      has no matching asset.
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: empty/unresolved states'
  - title: Treatment fallback
    description: >-
      If a requested treatment has no exported variant for the given name/size,
      the component falls back to the black treatment for that name/size.
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: treatment fallback'
  - title: Decorative by default
    description: >-
      Without a label, the icon is marked aria-hidden="true" with role="presentation";
      setting label switches it to role="img" with aria-hidden="false".
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: decorative by default'
  - title: Sizing
    description: >-
      Sized via CSS custom property per the size value; width is fixed and height
      is auto, so the SVG's own aspect ratio is preserved rather than being forced
      square.
    image: https://placehold.co/1280x720
    imageAlt: 'Brand icon: sizing'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Brand icon example: Displaying a recognisable AA product or brand mark (e.g.
        "AA Cars", "AA Insurance") in navigation, cards or promotional content.
      label: Do
      caption: >-
        Displaying a recognisable AA product or brand mark (e.g. "AA Cars", "AA
        Insurance") in navigation, cards or promotional content.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Brand icon example: General-purpose UI iconography (arrows, checks, alerts,
        etc.) — use Icon instead.
      label: Don't
      caption: >-
        General-purpose UI iconography (arrows, checks, alerts, etc.) — use Icon
        instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Brand icon example: Where a specific colour treatment is needed to sit correctly
        on a given background (e.g. white or layer-white on a dark or photographic
        background).
      label: Do
      caption: >-
        Where a specific colour treatment is needed to sit correctly on a given
        background (e.g. white or layer-white on a dark or photographic background).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Brand icon example: Where no matching brand asset exists for the required
        name — check AvailableNames in the Brand Icon story before using a name.
      label: Don't
      caption: >-
        Where no matching brand asset exists for the required name — check AvailableNames
        in the Brand Icon story before using a name.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    label: only set it when the icon conveys meaning on its own (e.g. not accompanied
    by adjacent text naming the same brand); otherwise leave it empty so the icon
    stays decorative.
  - >-
    Keep the label a concise, accurate name of the brand/product the icon represents.
  - Use sentence case.
  - Avoid adverbs and avoid jargon.
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    name values must match the normalised (lowercase, hyphenated) form of the exported
    asset filenames — check the AvailableNames story for the current list.
  - >-
    Not every name/size/treatment combination is guaranteed to exist; the component
    silently falls back to black or renders nothing rather than erroring.
  - >-
    size only accepts medium/large — there's no arbitrary numeric sizing, unlike
    Icon.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: name
      options: one of the exported brand icon names (e.g. aa-cars)
      defaultValue: ''''''
      description: >-
        The brand icon to render. Names are normalised (lowercased, spaces/underscores
        to hyphens) before lookup.
    - name: size
      options: medium | large
      defaultValue: medium
      description: Rendered size — medium is 32px, large is 48px.
    - name: treatment
      options: black | white | layer-white | layer-yellow
      defaultValue: black
      description: >-
        Colour treatment of the mark, matched against the exported asset variants
        for that name/size; falls back to black if the requested treatment isn't
        available.
    - name: label
      options: string
      defaultValue: ''''''
      description: >-
        Accessible label for the icon. When set, the icon is exposed to assistive
        technology as role="img" with that label; when empty, the icon is treated
        as decorative.
- type: accessibility
  focusOrder:
  - >-
    Not a focusable element — Brand icon has no interactive semantics and does not
    participate in the tab order.
  aria:
  - role="img" and aria-hidden="false" when label is set.
  - >-
    role="presentation" and aria-hidden="true" when label is empty (decorative default).
  - aria-label is set to label when provided.
  - >-
    The underlying SVG itself is marked focusable="false" and aria-hidden="true"
    so it never introduces a second, redundant accessible node.
  seo:
  - >-
    Decorative by default (aria-hidden="true"), so it doesn't add noise to the accessibility
    tree or page text when the brand name is already conveyed elsewhere.
  - >-
    Set label when the icon is the only conveyance of the brand name, so it's discoverable
    to assistive technology and any AI agent parsing the page.
- type: related-components
  items:
  - label: Icon
    href: /components/icon
    note: The general-purpose system icon component for UI iconography.
---
