---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Things to consider: confirm this is intended.
title: Pagination simple
description: >-
  Pagination simple is a compact, dot-based pagination indicator: one dot per page,
  with the current page shown as an elongated "pill" shape. Figma verification:
  Pagination Dot (node 12406:479) and Pagination Simple (node 12837:4205). It's
  used for small, fixed sets of pages (e.g. a short carousel) rather than numeric
  "page of total" navigation.
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
    Nav container (<nav class="pagination">, part="pagination"): wraps the dots
    and carries the accessible label.
  - >-
    Dot button (one per page, part="dot"): a clickable <button> per page, aria-label="Page
    N" and aria-current set on the active page.
  - >-
    Shape (part="shape"): the visible circular/pill indicator inside each dot button;
    widens and fills when its dot is the current page.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Pagination simple anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default (5 dots)
    description: total="5", first page current.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination simple: Default (5 dots)'
  - title: Custom total (4 dots)
    description: total="4".
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination simple: Custom total (4 dots)'
  - title: Middle page selected
    description: page set to a non-boundary value, showing the pill on that dot.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination simple: Middle page selected'
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      Renders exactly total dot buttons; clicking a dot sets page to that dot's
      number and fires a page-change custom event (bubbles, composed) with detail:
      { page }.
    list:
    - >-
      The current page's dot shape widens from a circle to a pill (inline-size transition,
      160ms ease) and switches to the selected fill/border colour; this transition
      is disabled under prefers-reduced-motion: reduce.
    - >-
      page and total inputs are defensively clamped in render() — a page outside
      [1, total] is corrected, and total is floored at 1 — so out-of-range values
      degrade gracefully rather than rendering incorrectly.
    - No loading, disabled or error state exists for this component.
    image: https://placehold.co/1280x720
    imageAlt: 'Pagination simple: general behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A small, fixed number of pages where a compact visual indicator is preferred
    over a numeric label — e.g. a short image carousel or a brief onboarding flow.
  - >-
    When direct navigation to any page (not just stepping) is desired, since every
    dot is independently clickable.
  dont:
  - >-
    Large page counts, where a row of dots would become unreadable or unusably small
    — use Pagination counter's "page of total" pattern instead.
  - >-
    When users need to know the exact page number/total count at a glance — dots
    convey position, not a numeric count; use Pagination counter if that information
    matters.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    label should describe what is being paginated in context, e.g. "Featured offers
    pagination", not left as the generic default "Pagination" in a specific product
    context.
  - >-
    No other visible text is rendered by this component — each dot's label ("Page
    N") is generated automatically.
  - >-
    Keep the label short and in sentence case, consistent with AA label guidance
    (short, direct, sentence case).
  - >-
    Avoid vague or generic wording for label where the paginated content has a clearer
    name available.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Every dot is always rendered and clickable — there's no virtualisation, so very
    large total values will render an equally large number of buttons; keep this
    component to small page counts per the usage guidance above.
  - >-
    The pill-widening transition is purely visual; assistive tech relies on aria-current
    and each dot's aria-label, not the animation, to convey the current page.
  - >-
    page/total clamping happens at render time, so passing invalid values won't
    throw, but the corrected value isn't written back to the page/total properties
    themselves — consumers reading those properties back may see the original, unclamped
    value.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: page
      options: number
      defaultValue: '1'
      description: Current page (1-indexed); clamped between 1 and total.
    - name: total
      options: number
      defaultValue: '5'
      description: Total number of pages/dots rendered; clamped to a minimum of
        1.
    - name: label
      options: string
      defaultValue: '''Pagination'''
      description: Accessible name applied to the <nav> via aria-label.
- type: accessibility
  focusOrder:
  - >-
    Each dot is a native <button> and participates in the natural tab order, in
    left-to-right dot order; none are disabled, so all remain focusable and reachable
    via Tab.
  keyboard:
  - key: Enter
    action: Activates the focused dot, navigating to its page.
  - key: Space
    action: Activates the focused dot (native <button> behaviour).
  aria:
  - >-
    The container is a <nav> with aria-label set to the label property, giving the
    whole control a landmark and accessible name.
  - Each dot button has aria-label="Page N" for its position.
  - >-
    Each dot button sets aria-current="page" when it is the current page, and aria-current="false"
    otherwise.
  seo:
  - >-
    Uses a real <nav> landmark and native <button> elements, so the control's purpose
    and current state are exposed semantically rather than through visual styling
    alone.
  - >-
    The aria-label on the <nav> and per-dot aria-label/aria-current give assistive
    tech, search engines and AI agents enough structure to identify both the control's
    purpose and its current position without relying on the visual pill shape.
- type: related-components
  items:
  - label: Pagination counter
    href: /components/pagination-counter
    note: >-
      An alternative "page of total" pattern with previous/next stepping, for larger
      or numerically meaningful page counts.
  - label: Pagination control button
    href: /components/pagination-control-button
    note: Used by Pagination counter, not by this component.
---
