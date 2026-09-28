---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: not applicable — the component is not interactive.
title: Icon
description: >-
  Icon renders the exported AA system icon set (UI iconography such as arrows, checks
  and alerts) from src/assets/system_icons. Icons are monochrome and colour-inheriting
  (currentColor) by default, with an optional color prop to apply one of the alias
  intent colours or brand yellow.
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
  - 'Icon graphic: the inlined SVG for the requested name and size.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Icon anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: A single icon at 24px, inheriting colour.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: Default'
  - title: Colors
    description: The same icon shown in each intent colour alongside the default.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: Colors'
  - title: Gallery
    description: Every available system icon rendered together at a chosen size.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: Gallery'
  - title: Available names
    description: A reference list of valid name values.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: Available names'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Loading
    description: >-
      Icons are loaded asynchronously per name/size combination and cached after
      first load; nothing renders until the SVG has loaded.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: loading'
  - title: Empty/unresolved states
    description: >-
      Renders nothing if name is empty, size isn't one of the supported values,
      or the requested name has no matching asset.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: empty/unresolved states'
  - title: Size fallback
    description: >-
      If a requested icon has no variant at the exact requested size, it falls back
      to the 24px variant, then to whatever size variant is available.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: size fallback'
  - title: Colour
    description: >-
      By default, icon fill/stroke are rewritten to currentColor so the icon inherits
      the surrounding text colour; setting color overrides this with a fixed token
      colour instead.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: colour'
  - title: Decorative by default
    description: >-
      Without a label, the icon is marked aria-hidden="true" with role="presentation";
      setting label switches it to role="img" with aria-hidden="false".
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: decorative by default'
  - title: Consumed by Button
    description: >-
      When slotted into Button's icon slots, the button forces the icon to 1em regardless
      of its own size property, so sizing set here is ignored in that context.
    image: https://placehold.co/1280x720
    imageAlt: 'Icon: consumed by button'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    General-purpose UI iconography — arrows, checks, alerts, chevrons, etc. — anywhere
    in the interface.
  - >-
    Alongside text to reinforce meaning (e.g. a check icon next to a list item),
    typically with label left empty since the adjacent text already conveys the
    meaning.
  - >-
    As a semantic icon on its own with no adjacent text (e.g. a standalone status
    icon), with label set so its meaning is available to assistive technology.
  dont:
  - Displaying an AA product/brand mark (e.g. "AA Cars") — use Brand icon instead.
  - >-
    An icon-only interactive control — use Icon button, which wraps an icon in a
    proper button semantics and accessible name.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    label: only set it when the icon conveys meaning on its own and isn't already
    described by adjacent visible text.
  - >-
    Keep the label a concise, accurate description of what the icon represents,
    not the icon's visual appearance (e.g. "Success" rather than "Green tick").
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
    color is limited to the alias intent set (danger/warning/info/positive) plus
    brand — it is not a general-purpose colour override.
  - >-
    Inside Button, icon sizing is owned by the button and any size set here is overridden.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: name
      options: one of the exported system icon names (e.g. arrow-right, check)
      defaultValue: ''''''
      description: >-
        The icon to render. Names are normalised (lowercased, spaces/underscores
        to hyphens) before lookup.
    - name: size
      options: 16 | 20 | 24 | 32 | 40 | 48
      defaultValue: '24'
      description: Rendered size in pixels (both width and height).
    - name: color
      options: danger | warning | info | positive | brand | (empty, inherits currentColor)
      defaultValue: ''''''
      description: >-
        Applies one of the alias intent colours or brand yellow. Deliberately not
        the full --icon-* token surface (action/neutral/decorative/etc.) — not needed
        yet.
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
    Not a focusable element — Icon has no interactive semantics and does not participate
    in the tab order.
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
    tree or page text when its meaning is already conveyed by adjacent text.
  - >-
    Set label when the icon is the sole conveyance of meaning, so it's discoverable
    to assistive technology and any AI agent parsing the page.
- type: related-components
  items:
  - label: Brand icon
    href: /components/brand-icon
    note: >-
      The equivalent component for AA product/brand marks rather than system iconography.
  - label: Icon button
    href: /components/icon-button
    note: Wraps an icon in an interactive, accessible button control.
  - label: Button
    href: /components/button
    note: Accepts Icon in its leading/trailing icon slots.
---
