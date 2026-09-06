---
title: Badge
description: >-
  A badge is a visual indicator that notifies users of numeric values. It
  stands out from the surrounding UI while remaining minimal and
  non-distracting. Use it to draw attention to a value that needs tracking
  globally, such as unread notifications, without pulling focus from the
  surrounding interface — attached to an icon button or placed inline next
  to a text label, and reserved for counts that genuinely need surfacing.
  Use numerals rather than spelled-out words for the count, show "99+" once
  it exceeds 99 rather than the exact number, and keep the stroke around
  the badge on desktop while removing it on iOS to match platform
  conventions.
storybookUrl: ""
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-08-25
platforms: ["Web", "Mobile app"]
sections:
  - type: anatomy
    heading: Anatomy
    image: https://placehold.co/1280x720
    caption: Anatomy of the component.
    items:
      - Label
      - Container
  - type: two-col
    heading: Variants
    items:
      - title: Single-digit
        description: Circular, 24px wide. Used for counts 1–9.
        image: https://placehold.co/1280x720
        caption: Image of the single-digit variant.
      - title: Double-digit
        description: Circular, 24px wide. Used for counts 10–99.
        image: https://placehold.co/1280x720
        caption: Image of the double-digit variant.
      - title: Maximum (99+)
        description: Pill-shaped, 40px wide. Shown once the count exceeds 99.
        image: https://placehold.co/1280x720
        caption: Image of the maximum (99+) variant.
  - type: two-col
    heading: Behavior
    items:
      - title: Icon button placement
        description: Positioned in the top-right quadrant of an icon button so it doesn't obscure the icon.
        image: https://placehold.co/1280x720
        caption: Image of the icon button placement.
      - title: Inline placement
        description: Positioned to the right of text, aligned to cap height.
        image: https://placehold.co/1280x720
        caption: Image of the inline placement.
      - title: Dot-only
        description: A smaller version without a label, used for minimal notification.
        image: https://placehold.co/1280x720
        caption: Image of the dot-only behavior.
  - type: side-by-side
    heading: Best practices
    items:
      - title: Placement
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: place badges in the top-right of icon buttons, or inline to the right of text labels."
          - image: https://placehold.co/1280x720
            caption: "Don't: customise the badge's placement position."
      - title: Count limit
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: adhere to the maximum value constraint of 99+."
          - image: https://placehold.co/1280x720
            caption: "Don't: allow numbers exceeding 99 in the display."
      - title: Sizing and formatting
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: keep sizing consistent across all screen sizes and platforms."
          - image: https://placehold.co/1280x720
            caption: "Don't: add ending punctuation to the label."
  - type: design-tokens
    tokens:
      - name: Standard height
        value: 24px
      - name: Single/double-digit width
        value: 24px
      - name: Maximum (99+) width
        value: 40px
      - name: Text-to-badge spacing
        value: 6px
  - type: related-components
    items:
      - label: Icon button
        href: /design-system-docs/components/icon-button
        note: the primary container badges are attached to (not yet documented)
      - label: Navigation bar
        href: /design-system-docs/components/navigation-bar
        note: not yet documented
---
