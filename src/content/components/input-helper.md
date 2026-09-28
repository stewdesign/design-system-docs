---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Examples: no dedicated story exists for this component — it is only exercised indirectly via Input label/Input legend stories that set helper.
#   - SEO and AI discovery: not determinable from source — no SEO/AI-specific behaviour documented; not a standalone public component so not typically an independent target for discovery.
title: Input helper
description: >-
  Input helper is an internal expand/collapse disclosure — "Helper ⌄" reveals a
  description with a left accent border, and the chevron flips to point up when
  open. It is not a static hint line (that's description set directly on Input label/Input
  legend) and is not part of the public component API — it is composed inside other
  inputs, so it has no story of its own. It is built on native <details>/<summary>
  rather than a hand-rolled button plus aria-expanded, so keyboard and screen-reader
  open/closed semantics come from the platform for free. Figma's own markup only
  ever makes the "Helper" row itself clickable, so <summary> alone matches it exactly.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=19562-18753
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
    Summary row: clickable "Helper" text plus a chevron icon, rendered as a native
    <summary>.
  - 'Chevron (Icon, chevron-down): flips 180 degrees when open.'
  - >-
    Collapse panel: contains the description text, animates open/closed with a left
    accent border.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Input helper anatomy diagram
- type: two-col
  heading: Behaviour and states
  items:
  - title: General behaviour
    description: >-
      Uses native <details>/<summary> — clicking the summary toggles open, which
      also dispatches a toggle event.
    list:
    - >-
      The chevron rotates 180 degrees when open; the border colour of the collapse
      panel animates in alongside the reveal rather than being always visible.
    - >-
      The collapse panel animates to a fixed maximum height (6rem) rather than auto,
      to avoid the height-transition stutter some browsers have with auto — taller
      content clips rather than reproducing that stutter.
    - >-
      Under prefers-reduced-motion: reduce, the chevron rotation and collapse transitions
      are removed entirely.
    - >-
      In Chromium, content-visibility/block-size are explicitly overridden on ::details-content
      so the browser's own open/close handling never fights the component's own
      transition.
    image: https://placehold.co/1280x720
    imageAlt: 'Input helper: general behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Composed inside Input label or Input legend when helper is set, to turn a static
    description into a collapsed disclosure.
  dont:
  - As a standalone, general-purpose accordion — use Accordion item for that.
  - >-
    As a static hint line with no need to collapse — set description directly instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the helper summary text short — it's a label for the disclosure, not the
    content itself.
  - >-
    Write description as the actual hint or explanation the user needs once expanded.
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - >-
    Write helper/description text for spoken word — concise and accurate, not patronising,
    since it may be read by a screen reader.
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Not part of the public component API — it has no story of its own and isn't
    intended to be used directly by consumers outside of Input label/Input legend.
  - >-
    Only one of description or helper is shown by the parent component at a time
    — they don't stack.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: helper
      options: string
      defaultValue: '''Helper'''
      description: The clickable summary text.
    - name: description
      options: string
      defaultValue: '''Description'''
      description: The text revealed when the disclosure is open.
    - name: open
      options: boolean
      defaultValue: 'false'
      description: Reflects and controls the open/closed state of the <details>.
- type: accessibility
  focusOrder:
  - >-
    The <summary> element is a native focusable element and sits in the natural
    tab order at the point the component is composed.
  keyboard:
  - key: Enter
    action: Toggles the disclosure open/closed (native <summary> behaviour).
  - key: Space
    action: Toggles the disclosure open/closed (native <summary> behaviour).
  aria:
  - >-
    No custom ARIA is applied — open/closed semantics come from the native <details>/<summary>
    elements rather than a hand-rolled aria-expanded pattern.
  - >-
    The chevron icon is marked aria-hidden="true" since it's purely decorative alongside
    the text.
- type: related-components
  items:
  - label: Input label
    href: /components/input-label
    note: Composes Input helper when helper is set.
  - label: Input legend
    href: /components/input-legend
    note: Composes Input helper when helper is set.
  - label: Accordion item
    href: /components/accordion-item
    note: The general-purpose, standalone equivalent for expand/collapse content.
---
