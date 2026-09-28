---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: name the component once one exists.
#   - Content guidance (how to write): confirm whether "page X of Y" should ever be localised/pluralised differently — not covered in the source.
#   - Things to consider: confirm whether this needs addressing at this composition level, since the counter doesn't add aria-label either.
#   - ARIA: confirm whether a wrapping landmark (e.g. role="navigation"/aria-label) is expected — Pagination simple sets aria-label on a <nav>, but Pagination counter does not do the equivalent per the source read.
#   - SEO and AI discovery: flag for future improvement.
title: Pagination counter
description: >-
  Pagination counter is a "page X of Y" control: a previous/next button pair (via
  Pagination control button) either side of an optional numeric label. Figma verification:
  Paginatiion Counter (node 12403:398) [sic, as named in the source Figma file].
  It's shown in the Pagination story alongside Pagination simple as one of two pagination
  patterns, but has no dedicated story of its own beyond that combined view.
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
    Previous control (Pagination control button, direction="previous"): steps back
    one page; disabled at the first page.
  - 'Label (.label): optional "page of total" text, hidden when show-label is false.'
  - >-
    Next control (Pagination control button, direction="next"): steps forward one
    page; disabled at the last page.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Pagination counter anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default counter
    description: page="1", total="999".
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination counter: Default counter'
  - title: Middle page
    description: A non-boundary page value, both controls enabled.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination counter: Middle page'
  - title: First/last page
    description: Respective control disabled.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination counter: First/last page'
  - title: Label hidden
    description: show-label="false", controls only, no text between them.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination counter: Label hidden'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      Clicking the previous control decrements page by 1 (no-op if page <= 1); clicking
      next increments it (no-op if page >= total).
    list:
    - >-
      Each successful step fires a page-change custom event (bubbles, composed)
      with detail: { page }, so the consumer owns the actual data/content change.
    - >-
      The previous button is disabled whenever page <= 1; the next button is disabled
      whenever page >= total.
    - >-
      The label reads simply ${page} of ${total} with no other formatting or truncation
      logic.
    - >-
      No responsive breakpoints or transitions of its own beyond the buttons' shared
      interactive transition tokens.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination counter: general behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pagination counter example: Paginating a single ordered set of content (e.g.
        table rows, a list, or a carousel) where "page X of Y" is the clearest way
        to communicate position, and stepping one page at a time is sufficient (no
        jump-to-page or numbered page links).
      label: Do
      caption: >-
        Paginating a single ordered set of content (e.g. table rows, a list, or
        a carousel) where "page X of Y" is the clearest way to communicate position,
        and stepping one page at a time is sufficient (no jump-to-page or numbered
        page links).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pagination counter example: When users need to jump to specific page numbers,
        not just step forward/back — build a numbered pagination pattern instead.
      label: Don't
      caption: >-
        When users need to jump to specific page numbers, not just step forward/back
        — build a numbered pagination pattern instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pagination counter example: When you want compact, icon-driven pagination
        controls rather than a row of numbered page buttons.
      label: Do
      caption: >-
        When you want compact, icon-driven pagination controls rather than a row
        of numbered page buttons.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Pagination counter example: When there is no meaningful "page of total"
        framing (e.g. a small, fixed number of items like onboarding steps or a
        carousel) — use Pagination simple's dot indicator instead.
      label: Don't
      caption: >-
        When there is no meaningful "page of total" framing (e.g. a small, fixed
        number of items like onboarding steps or a carousel) — use Pagination simple's
        dot indicator instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    The label text is generated automatically as "page of total" — there is no free-text
    content to author.
  - >-
    Ensure total reflects the real number of pages so the label and disabled states
    stay accurate.
  - >-
    No copy decisions are needed beyond supplying accurate page/total values; the
    label format is fixed by the component and not configurable per the source read.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    The component manages its own page state internally as well as dispatching page-change
    — a consumer that also drives page via a reactive property should treat the
    dispatched event as the source of truth to avoid double-updating.
  - >-
    total defaults to 999, which is a placeholder value, not a real page count —
    always set a real total in production usage.
  - >-
    Neither control carries its own accessible label (see Pagination control button
    docs)
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: page
      options: number
      defaultValue: '1'
      description: Current page (1-indexed).
    - name: total
      options: number
      defaultValue: '999'
      description: Total number of pages.
    - name: show-label (showLabel)
      options: boolean
      defaultValue: 'true'
      description: Shows/hides the "page of total" text between the controls.
- type: accessibility
  focusOrder:
  - >-
    The previous and next buttons sit in the natural tab order as native <button>
    elements (via Pagination control button); a disabled control is removed from
    the tab order. The label, being plain text, is not focusable.
  keyboard:
  - key: Enter
    action: Activates the focused previous/next button.
  - key: Space
    action: Activates the focused previous/next button (native <button> behaviour).
  aria:
  - >-
    No ARIA roles or attributes are applied by this component beyond what Pagination
    control button provides (none).
  seo:
  - Renders real, focusable <button> elements rather than simulated click targets.
  - >-
    The lack of an accessible name on the previous/next buttons and of a nav/label
    wrapper limits how well assistive tech, search engines, or AI agents can describe
    this control's purpose out of visual context
- type: related-components
  items:
  - label: Pagination control button
    href: /components/pagination-control-button
    note: The previous/next button used inside this component.
  - label: Pagination simple
    href: /components/pagination-simple
    note: An alternative dot-based pagination pattern for smaller, non-numbered
      sets.
---
