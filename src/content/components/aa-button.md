---
title: Aa-button
description: >-
  Aa-button is the shared control for button and link call-to-actions, providing
  a consistent hierarchy, size and state whether it performs an in-page action
  or navigates to another destination. Use it for primary, secondary and
  tertiary actions; form submission, reset and in-page actions; and prominent
  navigational calls to action with an href. Use intent="danger" for
  destructive or high-consequence actions. Do not use it for icon-only controls,
  grouped selection choices, ordinary inline text links, or related actions that
  need grouping. Keep labels concise enough not to wrap on mobile, and use the
  small size with care because it is below the 44px touch-target minimum.
storybookUrl: ""
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?m=auto&node-id=4185-3778&t=pgwKI3hjtswSmm2x-1
previewImage: https://placehold.co/1280x720
lastUpdated: 2026-09-22
platforms:
  - Web
  - Mobile app
sections:
  - type: anatomy
    heading: Anatomy
    items:
      - Leading icon slot (icon-start) [optional]
      - Label
      - Trailing icon slot (icon-end) [optional]
      - Loading spinner [optional; shown when loading]
    image: https://placehold.co/1280x720
    imageAlt: Labelled Aa-button anatomy diagram
    caption: The loading spinner replaces the trailing icon position while the label remains visible.

  - type: two-col
    heading: Variants and configuration
    items:
      - title: Visual hierarchy
        description: Choose primary for the main call to action, secondary or tertiary for lower-emphasis actions, and link for the lowest-emphasis action in a group. Link buttons have no background and are usually small.
        list:
          - "variant: primary | secondary | tertiary | link"
          - "size: medium | small; medium is the default"
        image: https://placehold.co/1280x720
        imageAlt: Aa-button visual variants
        caption: Primary, secondary, tertiary and link variants.
      - title: Semantic intent
        description: Use the default intent for standard actions. Use danger for destructive or high-consequence actions, such as deleting cover or cancelling a policy; it replaces the former aa-button-danger component.
        list:
          - "intent: default | danger"
        image: https://placehold.co/1280x720
        imageAlt: Default and danger Aa-button intents
        caption: Default and danger button intent.
      - title: Button or link
        description: Aa-button renders as a native button by default. Supply href to render a native anchor with the same visual variants and states, replacing the former aa-cta component. Button type is ignored when href is set.
        list:
          - "type: button | submit | reset; default: button"
          - href renders an anchor
          - target="_blank" applies rel="noreferrer noopener" unless rel is explicitly supplied
        image: https://placehold.co/1280x720
        imageAlt: Aa-button rendered as a button and as a link
        caption: The component preserves its styling while using native button or anchor semantics.

  - type: two-col
    heading: Behaviour and states
    items:
      - title: Hover and focus
        description: Primary, secondary and tertiary variants darken or shift their background on hover. Link changes its underline and colour. Colour and border changes use the shared interactive transition token, while focus rings use the shared focus-ring transition token.
        image: https://placehold.co/1280x720
        imageAlt: Aa-button hover and focus states
        caption: Interactive states retain the selected variant's hierarchy.
      - title: Disabled
        description: Disabled buttons have 0.6 opacity and a not-allowed cursor. A native button uses disabled; an anchor drops href and receives aria-disabled="true", so it cannot be focused or activated.
        image: https://placehold.co/1280x720
        imageAlt: Disabled Aa-button
        caption: Disabled controls are inactive and unavailable to keyboard interaction.
      - title: Loading
        description: Loading disables interaction and applies aria-busy="true". A spinner replaces the trailing icon, or follows the label when there is no trailing icon; the label remains visible to avoid a width change. Under reduced motion, the spinner slows from 640ms to 2400ms per rotation.
        image: https://placehold.co/1280x720
        imageAlt: Loading Aa-button with visible label and spinner
        caption: The label stays in place while the action is loading.
      - title: Icons and responsive behaviour
        description: Leading and trailing aa-icon slots are sized to 1em by the button, regardless of a size set on the icon. Padding tightens by one step beside an icon for optical balance, except on link buttons. The control has no breakpoints, sizes to its content and should not wrap; write short labels that fit on mobile.
        image: https://placehold.co/1280x720
        imageAlt: Aa-button with leading and trailing icons
        caption: Icons follow the label size and sit within optically balanced spacing.

  - type: side-by-side
    heading: When to use
    items:
      - title: Use for clear, standalone actions
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Aa-button used for a form action
            caption: "Do: use Aa-button for primary, secondary or tertiary actions, including submit, reset and in-page actions."
          - image: https://placehold.co/1280x720
            imageAlt: Icon-only control beside Aa-button
            caption: "Don't: use Aa-button for an icon-only control; use Aa-icon-button instead."
      - title: Use for prominent navigation
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Aa-button rendered as a navigational link
            caption: "Do: set href for a navigational call to action that belongs in the action hierarchy."
          - image: https://placehold.co/1280x720
            imageAlt: Inline text link in a paragraph
            caption: "Don't: use a link-style button for ordinary inline navigation in body copy; use a standard text link."
      - title: Match the interaction pattern
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Danger Aa-button for deleting cover
            caption: "Do: use intent=\"danger\" for destructive or high-consequence actions, such as deleting cover."
          - image: https://placehold.co/1280x720
            imageAlt: Selection controls and grouped actions
            caption: "Don't: use a set of buttons for choices or grouped actions; use selection controls or Aa-button-group."

  - type: side-by-side
    heading: Content guidance
    items:
      - title: Make the action specific
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Button labelled Choose cover
            caption: "Do: use an active verb that describes the action, such as ‘Choose cover’."
          - image: https://placehold.co/1280x720
            imageAlt: Button labelled Find out more
            caption: "Don't: use vague labels such as ‘Find out more’."
      - title: Keep the wording direct
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Button labelled Add your details
            caption: "Do: write concise sentence-case labels, such as ‘Add your details’."
          - image: https://placehold.co/1280x720
            imageAlt: Button labelled Simply add your details
            caption: "Don't: add unnecessary adverbs such as ‘simply’, ‘just’ or ‘easily’."
      - title: Use clean, consistent labels
        figures:
          - image: https://placehold.co/1280x720
            imageAlt: Button labelled Delete cover
            caption: "Do: use British English and omit terminal punctuation, such as ‘Delete cover’."
          - image: https://placehold.co/1280x720
            imageAlt: Button labelled Delete Cover with a colon
            caption: "Don't: use title case or end a label with a colon, such as ‘Delete Cover:’."

  - type: design-tokens
    tokens:
      - name: Default variant
        value: primary
      - name: Default size
        value: medium
      - name: Small touch target
        value: Below 44px by design; assess carefully for primary mobile actions.
      - name: Icon size
        value: 1em; controlled by Aa-button.
      - name: Interactive transition
        value: Shared interactive transition token for colour and border changes.
      - name: Focus-ring transition
        value: Shared focus-ring transition token.
      - name: Reduced-motion spinner duration
        value: 2400ms per rotation; standard duration is 640ms.

  - type: accessibility
    items:
    ### Focus order
      - Use the native button element for in-page actions and a native anchor with href for navigation; do not simulate either with a generic element.
      - Buttons and anchors participate in the natural tab order; disabled native buttons and disabled or loading anchors are removed from it.
    ### Keyboard interactions
      - Enter activates a button or follows a link; Space activates a native button but not an anchor.
    ### ARIA
      - Use the native disabled attribute on buttons. Disabled or loading anchors remove href and receive aria-disabled="true".
      - Apply aria-busy="true" while loading on both button and anchor forms.
      - Do not add a role override; the native semantic element supplies the correct role.
    ### SEO and AI discovery
      - For navigational actions, always supply href so the destination is a real, crawlable link.
      - Write labels that describe the action or destination without surrounding context; avoid labels such as “Click here”.
      - Do not nest other interactive elements, including links or buttons, inside icon slots.

  - type: related-components
    items:
      - label: Aa-icon-button
        href: /components/aa-icon-button
        note: Use for a compact control with no visible label.
      - label: Aa-button-group
        href: /components/aa-button-group
        note: Use to group related actions with consistent spacing and alignment.
      - label: Aa-icon
        href: /components/aa-icon
        note: Use in the leading and trailing icon slots.
---
