---
title: "Dialog"
description: >-
  A dialog presents focused information or actions in a contained surface
  without taking users away from their current context. It supports a
  concise text-only layout, a media-led layout, and a two-column media
  hero layout. Use it to bring a decision, confirmation or short task into
  focus while preserving the user's current place in the experience —
  choosing Default for concise copy, Media when an image adds helpful
  context, and Media hero when a larger two-column composition is needed.
  Avoid it for extended content, complex forms, multi-step journeys, or
  information users may need to revisit; use a dedicated page, drawer or
  inline section instead when more space or context is needed. Keep the
  content brief, make the available actions unambiguous, use a dismiss
  control only when closing without an explicit action is appropriate,
  and ensure any image supports rather than distracts from the decision.
figmaUrl: "https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?m=auto&node-id=17390-4658&t=4wwlHOLxgh3UMtji-1"
previewImage: "https://placehold.co/1280x720"
lastUpdated: 2026-09-01
platforms:
  - "Web"
sections:
  - type: anatomy
    heading: Anatomy
    image: "https://placehold.co/1280x720"
    caption: Anatomy of the component.
    items:
      - "Dialog container"
      - "Media"
      - "Content"
      - "Title"
      - "Content slot"
      - "Button group"
      - "Dismiss control"
  - type: two-col
    heading: Variants
    items:
      - title: "Default"
        description: "A 400px-wide text-focused dialog with a title, content slot, optional dismiss control and button group."
        image: "https://placehold.co/1280x720"
        caption: Image of the default variant.
      - title: "Media"
        description: "A 400px-wide dialog with a media region above the standard content area."
        image: "https://placehold.co/1280x720"
        caption: Image of the media variant.
      - title: "Media hero"
        description: "A 720px-wide, two-column dialog with media on the left and content on the right."
        image: "https://placehold.co/1280x720"
        caption: Image of the media hero variant.
  - type: two-col
    heading: Behavior
    items:
      - title: "Open"
        description: "The dialog places its message and available actions in a focused surface above the surrounding interface."
        image: "https://placehold.co/1280x720"
        caption: Image of the open behavior.
      - title: "Dismiss"
        description: "When the dismiss control is included, users can close the dialog without selecting a primary or secondary action."
        image: "https://placehold.co/1280x720"
        caption: Image of the dismiss behavior.
      - title: "Action selection"
        description: "The button group provides the available next steps, including a prominent primary action where required."
        image: "https://placehold.co/1280x720"
        caption: Image of the action selection behavior.
  - type: side-by-side
    heading: Best practices
    items:
      - title: Scope of content
        figures:
          - image: "https://placehold.co/1280x720"
            caption: "Do: use a dialog for a focused decision, confirmation or short task that needs an immediate response."
          - image: "https://placehold.co/1280x720"
            caption: "Don't: use a dialog for long-form reading or complex multi-step workflows."
      - title: Required actions
        figures:
          - image: "https://placehold.co/1280x720"
            caption: "Do: make the title specific and make the primary action describe its outcome."
          - image: "https://placehold.co/1280x720"
            caption: "Don't: add a dismiss control when the user must explicitly choose an action to proceed."
      - title: Use of media
        figures:
          - image: "https://placehold.co/1280x720"
            caption: "Do: use the Media or Media hero variant only when the image materially helps users understand the decision."
          - image: "https://placehold.co/1280x720"
            caption: "Don't: use decorative media that competes with the dialog's message or actions."
  - type: design-tokens
    tokens:
      - name: "Default dialog size"
        value: "400px wide × 189px high"
      - name: "Media dialog size"
        value: "400px wide × 436.5px high; media region 400px × 247.5px"
      - name: "Media hero size"
        value: "720px wide × 420px high; 360px media column and 360px content column"
      - name: "Container radius"
        value: "24px"
      - name: "Content padding"
        value: "24px on all sides (Padding/xl; var--(aa-space-800))"
      - name: "Content stack gap"
        value: "20px (var--(aa-vertical-type-heading-to-content))"
      - name: "Title-to-content gap"
        value: "16px (var--(aa-vertical-type-label-gap))"
      - name: "Button group gap"
        value: "12px (Padding/md)"
      - name: "Heading typography"
        value: "Headings/Heading 4: New Transport AA Bold, 22.78px, 120% line height, -1% letter spacing"
      - name: "Body typography"
        value: "Body/Body Base: New Transport AA Regular, 16px, 150% line height"
      - name: "Content surface"
        value: "var--(aa-surface-default-secondary): #f7f7f6"
      - name: "Heading colour"
        value: "var--(aa-text-default-headings): #00081c"
      - name: "Body colour"
        value: "var--(aa-text-default-body): #4d5260"
      - name: "Primary button surface"
        value: "var--(aa-surface-buttons-primary-default): #ffd300"
  - type: accessibility
    items:
      - "Use role=\"dialog\" and set aria-modal=\"true\" when the dialog blocks interaction with the page."
      - "Provide an accessible name through the visible title with aria-labelledby, or an equivalent aria-label when no visible title is available."
      - "Move focus into the dialog when it opens, keep keyboard focus within it while open, and return focus to the invoking control when it closes."
      - "Ensure the dismiss icon button has an accessible name such as \"Close dialog\"; do not rely on the icon alone."
      - "Make every action reachable by keyboard and provide a visible focus indicator."
      - "Use a logical action order and make the primary action's outcome clear from its label."
      - "Do not make the dialog's meaning depend on its image, colour or position alone."
---
