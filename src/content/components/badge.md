---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: no keyboard interactions — the component is non-interactive.
title: Badge
description: >-
  Badge is a small, semantic-intent status indicator, shown as a label, count, or
  dot. It communicates status or quantity at a glance — for example on Avatar, in
  navigation, or beside a list item.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=16778-4611
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Badge shape: a pill, circle, or dot, depending on variant.'
  - 'Label text (variant label only): short text inside the pill.'
  - 'Count text (variant count only): a number inside a fixed-height pill.'
  image: https://placehold.co/1280x720
  imageAlt: Labelled Badge anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Label
    description: Default text pill.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: Label'
  - title: Count
    description: Numeric pill.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: Count'
  - title: Dot
    description: Unlabelled status dot.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: Dot'
  - title: Matrix
    description: All variant/intent combinations shown together for comparison.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: Matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Shape by variant
    description: >-
      label is a rounded-rectangle pill sized to its text; count is a fully rounded
      pill with a fixed block-size so single- and double-digit numbers read as the
      same badge height; dot is a small fixed-size circle with no text.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: shape by variant'
  - title: Colour by intent
    description: >-
      information, positive and alert each map to a distinct background/text colour
      pairing, chosen for semantic meaning rather than arbitrary colour choice.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: colour by intent'
  - title: No interactive states
    description: >-
      The badge is a purely presentational, non-interactive element with no hover,
      focus or click behaviour.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: no interactive states'
  - title: Responsive behaviour
    description: None; it's an inline-flex element sized to its content.
    image: https://placehold.co/1280x720
    imageAlt: 'Badge: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - Showing a notification count (e.g. unread messages) — variant="count".
  - Flagging status with a short label (e.g. "New", "Overdue") — variant="label".
  - >-
    A minimal presence/status indicator with no text, such as the notification dot
    on Avatar — variant="dot".
  dont:
  - A removable or selectable tag — use Chip or Tag instead.
  - >-
    Longer descriptive text — a badge's fixed, compact shape is only meant for very
    short labels or numbers.
  - >-
    An interactive control — Badge has no click behaviour; use Button or Chip if
    the element needs to respond to interaction.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep label text to one or two words — the pill is not designed to wrap or grow
    for long text.
  - >-
    Use count only for genuine numeric counts (e.g. unread items) — cap or format
    large numbers appropriately before passing them in (the component does not truncate
    or abbreviate).
  - >-
    Choose intent to match the real semantic meaning of the status (e.g. alert for
    something requiring attention), not just a colour preference.
  - Use sentence case for label text.
  - >-
    Keep wording short, direct and specific rather than generic ("New" rather than
    "Update available" crammed into a badge).
  - Use British English spelling.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Badge example: "New"'
      label: Do
      caption: '"New"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Badge example: "Recently Added Item"'
      label: Don't
      caption: '"Recently Added Item"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Badge example: count: "8"'
      label: Do
      caption: 'count: "8"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Badge example: count: "You have 8 new items"'
      label: Don't
      caption: 'count: "You have 8 new items"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    text and count props are both always present on the element, but only the one
    matching the active variant is rendered — setting both has no conflicting effect,
    only the relevant one shows.
  - >-
    The dot variant carries no accessible text of its own — pair it with accessible
    labelling elsewhere (as Avatar does, marking the badge aria-hidden="true" and
    relying on surrounding context) rather than expecting it to announce meaning
    on its own.
  - >-
    There's no size variant — the badge is always rendered at its single fixed scale
    regardless of surrounding content size.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: label | count | dot
      defaultValue: label
      description: 'Shape and content: a text pill, a numeric pill, or an unlabelled
        dot.'
    - name: intent
      options: information | positive | alert
      defaultValue: information
      description: Semantic colour tone.
    - name: text
      options: string
      defaultValue: '''Text'''
      description: Text shown when variant="label".
    - name: count
      options: string
      defaultValue: '''8'''
      description: Number shown when variant="count".
- type: accessibility
  focusOrder:
  - >-
    Badge is not focusable and does not participate in tab order — it's a purely
    presentational element.
  aria:
  - No ARIA roles or attributes are applied by the component itself.
  - >-
    Because a dot badge carries no visible text, any consumer using it to convey
    real status information should provide an accessible label via surrounding context
    (as seen in Avatar, which marks its badge aria-hidden="true" and relies on external
    labelling) or add its own aria-label when used standalone.
  seo:
  - >-
    Renders as a plain <span> with no semantic role — search engines and AI agents
    will read label/count text as plain content, so don't rely on the badge alone
    to convey meaning that isn't also present in surrounding text.
  - >-
    For dot badges specifically, since there's no visible text, ensure the status
    they represent is described elsewhere in the page's real text content.
- type: related-components
  items:
  - label: Avatar
    href: /components/avatar
    note: Uses the dot variant internally for its notification indicator.
  - label: Tag
    href: /components/tag
    note: >-
      For an 8-colour tag/chip use case (formerly also called "badge" in Figma),
      distinct from this semantic status indicator.
  - label: Chip
    href: /components/chip
    note: >-
      For a selectable or removable pill-shaped control, rather than a static status
      indicator.
---
