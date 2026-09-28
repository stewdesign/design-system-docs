---
# Gaps from the source doc (TODOs), for review:
#   - Content guidance (what to write): not applicable — Logo has no configurable text content; its accessible name ("The AA") is fixed by the component.
#   - Content guidance (how to write): not applicable — no copy is authored per instance of this component.
#   - Properties: this component takes no configurable properties — it renders a single, fixed logo mark with no variants or slots.
#   - Keyboard interactions: not applicable — the component has no interactive behaviour of its own.
#   - Related components: no other components in this set directly relate to Logo — it is a standalone brand asset, typically composed inside Header or similar layout components.
title: Logo
description: >-
  Logo renders The AA's logo mark as an inline SVG, kept crisp at any size rather
  than as a raster image. It typically appears in the header, and anywhere else
  the brand mark needs to be shown at a fixed or fluid width.
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
    Mark: a single <span> wrapping the inline SVG logo, exposed via the mark part.
    Figma: Logo/AA (used throughout Header, node 2287:22651).
  image: https://placehold.co/1280x720
  imageAlt: Labelled Logo anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Logo
    description: >-
      The mark at its default size, coloured via currentColor from its surrounding
      context.
    image: https://placehold.co/1280x720
    imageAlt: 'Logo: Logo'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Colour
    description: >-
      The mark uses currentColor, so it inherits text colour from its context —
      set color on an ancestor (or the host) to recolour it, e.g. for light-on-dark
      placement in a themed header.
    image: https://placehold.co/1280x720
    imageAlt: 'Logo: colour'
  - title: Sizing
    description: >-
      The host defaults to inline-size: 4rem with automatic block size, preserving
      the mark's aspect ratio; consumers can override inline-size to resize it.
    image: https://placehold.co/1280x720
    imageAlt: 'Logo: sizing'
  - title: Responsive behaviour
    description: >-
      Has no breakpoints of its own — it scales fluidly with whatever inline-size
      is set on the host.
    image: https://placehold.co/1280x720
    imageAlt: 'Logo: responsive behaviour'
  - title: No interactive states
    description: >-
      The component has no hover, focus, disabled or loading states — it is a static
      graphic.
    image: https://placehold.co/1280x720
    imageAlt: 'Logo: no interactive states'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - The header/navigation brand mark.
  - >-
    Anywhere The AA's logo needs to be shown as a crisp, recolourable inline graphic
    (e.g. a footer, a print-style summary, a loading/splash screen).
  dont:
  - >-
    As a clickable home-page link — wrap Logo in a real <a> (or a link-capable component)
    rather than adding click behaviour to the logo itself, since it has no href
    or interactive semantics.
  - >-
    As a decorative background image — use a raster/background-image approach instead;
    this component is designed for the standalone brand mark at content scale.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The mark's accessible name is fixed as "The AA" — it cannot be overridden per
    instance, so don't rely on this component for a differently-worded accessible
    label.
  - >-
    Because colour comes from currentColor, placing Logo in a container with no
    explicit text colour set may render it in an unexpected inherited colour — verify
    contrast in each context it's used, particularly on coloured header bands.
  - >-
    The SVG is inlined directly into the DOM (not referenced as an external image),
    so it participates in the page's own styling and colour inheritance rather than
    being isolated.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: _None_
      options: —
      description: >-
        Logo has no properties. Size is controlled via CSS (inline-size) on the
        host, and colour via currentColor.
- type: accessibility
  focusOrder:
  - >-
    Logo is not focusable on its own — it renders no interactive element. If it
    needs to act as a link, wrap it in a real <a>, which then participates in tab
    order in the usual way.
  aria:
  - >-
    role="img" and aria-label="The AA" are set on the mark's wrapping <span>, giving
    assistive tech a single, meaningful accessible name for the inline SVG rather
    than exposing its internal paths.
  seo:
  - >-
    The role="img"/aria-label="The AA" pairing ensures screen readers and AI agents
    parsing the page identify this element as the brand logo, not as decorative
    or unlabelled graphics.
  - >-
    Because the SVG is inlined rather than referenced by URL, it carries no separate
    alt text or file name for search engines to index — the aria-label is the only
    accessible description available.
---
