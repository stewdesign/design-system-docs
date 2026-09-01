---
title: "Dialog"
description: "A dialog presents focused information or actions in a contained surface without taking users away from their current context. It supports a concise text-only layout, a media-led layout, and a two-column media hero layout."
figmaUrl: "https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?m=auto&node-id=17390-4658&t=4wwlHOLxgh3UMtji-1"
previewImage: "https://placehold.co/1280x720"
lastUpdated: 2026-09-01
platforms:
  - "Web"
anatomy:
  image: "https://placehold.co/1280x720"
  parts:
    - name: "Dialog container"
      description: "The rounded outer surface that contains the dialog's media and content regions."
      image: "https://placehold.co/1280x720"
    - name: "Media"
      description: "An optional image region displayed above the content or alongside it in the Media hero variant."
      image: "https://placehold.co/1280x720"
    - name: "Content"
      description: "The padded content area that groups the title, body content and actions."
      image: "https://placehold.co/1280x720"
    - name: "Title"
      description: "A prominent heading that identifies the dialog's purpose."
      image: "https://placehold.co/1280x720"
    - name: "Content slot"
      description: "A replaceable region for the supporting description or other relevant dialog content."
      image: "https://placehold.co/1280x720"
    - name: "Button group"
      description: "A horizontal group of actions for confirming, cancelling or progressing the dialog."
      image: "https://placehold.co/1280x720"
    - name: "Dismiss control"
      description: "An optional icon button for closing the dialog without choosing a primary action."
      image: "https://placehold.co/1280x720"
variants:
  - name: "Default"
    description: "A 400px-wide text-focused dialog with a title, content slot, optional dismiss control and button group."
  - name: "Media"
    description: "A 400px-wide dialog with a media region above the standard content area."
  - name: "Media hero"
    description: "A 720px-wide, two-column dialog with media on the left and content on the right."
behavior:
  - name: "Open"
    description: "The dialog places its message and available actions in a focused surface above the surrounding interface."
  - name: "Dismiss"
    description: "When the dismiss control is included, users can close the dialog without selecting a primary or secondary action."
  - name: "Action selection"
    description: "The button group provides the available next steps, including a prominent primary action where required."
bestPractices:
  do:
    - "Use a dialog for a focused decision, confirmation or short task that needs an immediate response."
    - "Make the title specific and make the primary action describe its outcome."
    - "Use the Media or Media hero variant only when the image materially helps users understand the decision."
  dont:
    - "Do not use a dialog for long-form reading or complex multi-step workflows."
    - "Do not add a dismiss control when the user must explicitly choose an action to proceed."
    - "Do not use decorative media that competes with the dialog's message or actions."
designTokens:
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
accessibility:
  - "Use role=\"dialog\" and set aria-modal=\"true\" when the dialog blocks interaction with the page."
  - "Provide an accessible name through the visible title with aria-labelledby, or an equivalent aria-label when no visible title is available."
  - "Move focus into the dialog when it opens, keep keyboard focus within it while open, and return focus to the invoking control when it closes."
  - "Ensure the dismiss icon button has an accessible name such as \"Close dialog\"; do not rely on the icon alone."
  - "Make every action reachable by keyboard and provide a visible focus indicator."
  - "Use a logical action order and make the primary action's outcome clear from its label."
  - "Do not make the dialog's meaning depend on its image, colour or position alone."
---

## Usage

### When to use it

Use a dialog to bring a decision, confirmation or short task into focus while preserving the user's current place in the experience. Choose Default for concise copy, Media when an image adds helpful context, and Media hero when a larger two-column composition is needed.

### When not to use it

Do not use a dialog for extended content, complex forms, multi-step journeys or information users may need to revisit. Use a dedicated page, drawer or inline section when users need more space or context.

### Key considerations

Keep the content brief and make the available actions unambiguous. Use a dismiss control only when closing without an explicit action is appropriate, and ensure any image supports rather than distracts from the decision.
