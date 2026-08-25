---
title: Badge
description: A badge is a visual indicator that notifies users of numeric values. It stands out from the surrounding UI while remaining minimal and non-distracting.
storybookUrl: ""
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-08-25
platforms: ["Web", "Mobile app"]
anatomy:
  image: https://placehold.co/1280x720
  parts:
    - name: Label
      description: Displays a count, for example "9", "99", or "99+"
      image: https://placehold.co/1280x720
    - name: Container
      description: A circular or pill-shaped red container with a white outline
      image: https://placehold.co/1280x720
variants:
  - name: Single-digit
    description: Circular, 24px wide. Used for counts 1–9.
    image: https://placehold.co/1280x720
  - name: Double-digit
    description: Circular, 24px wide. Used for counts 10–99.
    image: https://placehold.co/1280x720
  - name: Maximum (99+)
    description: Pill-shaped, 40px wide. Shown once the count exceeds 99.
    image: https://placehold.co/1280x720
behavior:
  - name: Icon button placement
    description: Positioned in the top-right quadrant of an icon button so it doesn't obscure the icon.
    image: https://placehold.co/1280x720
  - name: Inline placement
    description: Positioned to the right of text, aligned to cap height.
    image: https://placehold.co/1280x720
  - name: Dot-only
    description: A smaller version without a label, used for minimal notification.
    image: https://placehold.co/1280x720
bestPractices:
  do:
    - Place badges in the top-right of icon buttons, or inline to the right of text labels
    - Adhere to the maximum value constraint of 99+
    - Keep sizing consistent across all screen sizes and platforms
  dont:
    - Customise the badge's placement position
    - Allow numbers exceeding 99 in the display
    - Add ending punctuation to the label
designTokens:
  - name: Standard height
    value: 24px
  - name: Single/double-digit width
    value: 24px
  - name: Maximum (99+) width
    value: 40px
  - name: Text-to-badge spacing
    value: 6px
relatedComponents:
  - label: Icon button
    href: /design-system-docs/components/icon-button
    note: the primary container badges are attached to (not yet documented)
  - label: Navigation bar
    href: /design-system-docs/components/navigation-bar
    note: not yet documented
---

## Usage

Use a badge to draw attention to a numeric value that needs tracking globally, such as unread notifications, without distracting from the surrounding interface.

### General guidance

- Use numerals, not spelled-out words, for the count
- Display "99+" once the count exceeds 99 rather than showing the exact number
- Keep strokes on desktop; remove them on iOS to match platform conventions
