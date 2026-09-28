---
# Gaps from the source doc (TODOs), for review:
#   - When not to use: not covered in source or stories — no guidance found for alternative components.
#   - SEO and AI discovery: not covered in source or stories.
title: Dialog
description: >-
  Dialog is a true modal dialog, built on the same scrim/panel shape as Header dropdown's
  mega-menu panel, but as a real role="dialog" modal rather than a hover-only panel.
  It supports a default text-only layout, and two media variants that add an image.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=17390-4658
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
    Scrim (part="scrim"): a full-viewport backdrop, rgb(0 0 0 / 60%) with a 4px
    blur, that closes the dialog when clicked.
  - >-
    Dialog panel (part="dialog"): the centred modal surface, role="dialog" with
    aria-modal="true".
  - >-
    Media (part="media", media/media-hero variants only): an image, with a close
    button floated over it.
  - Heading (part="heading", Heading level 4).
  - >-
    Close button (part="close"): inline next to the heading in default, or floated
    over the media in media/media-hero.
  - 'Body (part="body"): a default <slot> for the dialog''s content.'
  - >-
    Actions (part="actions"): a slot="actions" for action buttons, hidden automatically
    when empty.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Dialog anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Text-only dialog with heading, body and actions.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: Default'
  - title: Media
    description: Image above the content, with the close button floated over the
      image.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: Media'
  - title: Media hero
    description: >-
      Image and content side by side, with the close button floated over the whole
      card.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: Media hero'
  - title: Closed
    description: The dialog rendered in its closed state.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: Closed'
  - title: Z-index fault (internal test story, excluded from docs)
    description: >-
      Verifies the dialog's z-index: 1000 paints above a real Header regardless
      of DOM order.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: Z-index fault (internal test story, excluded from docs)'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Open/close
    description: >-
      Kept in the DOM at all times and toggled with the inert attribute rather than
      hidden, so the open/close transition (opacity + translateY + scale, 260ms
      cubic-bezier(0.16, 1, 0.3, 1)) can play. The scrim uses the identical treatment
      as Header dropdown's own scrim.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: open/close'
  - title: Stacking
    description: >-
      :host is position: fixed, full-viewport, and reflects open at z-index: 1000
      — deliberately above Header's own z-index: 10 — so the dialog wins the stacking
      order outright rather than relying on DOM order. :host stays pointer-events:
      none while closed so it never blocks clicks on the page underneath.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: stacking'
  - title: Focus management
    description: >-
      Opening the dialog stores the currently focused element, then moves focus
      to the dialog panel itself (deferred one animation frame after inert is removed).
      Closing the dialog returns focus to the element that had it before opening.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: focus management'
  - title: Escape
    description: Pressing Escape while open closes the dialog.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: escape'
  - title: Scrim click
    description: Clicking the scrim closes the dialog.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: scrim click'
  - title: Close button
    description: >-
      Two visual treatments depending on variant — default renders it inline next
      to the heading on tertiary-action tokens; media/media-hero float it over the
      image (or, for media-hero, over the whole card) on the secondary surface token
      instead.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: close button'
  - title: Actions slot
    description: >-
      The actions row is hidden automatically (via slotchange measurement) when
      no elements are slotted into slot="actions".
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: actions slot'
  - title: Events
    description: >-
      Fires dialog-close (bubbling, composed CustomEvent) when the dialog closes
      via Escape, scrim click or the close button.
    image: https://placehold.co/1280x720
    imageAlt: 'Dialog: events'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Dialog example: Presenting content or a focused task that requires the user's
        full attention before returning to the page, e.g. a confirmation with actions.
      label: Do
      caption: >-
        Presenting content or a focused task that requires the user's full attention
        before returning to the page, e.g. a confirmation with actions.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Dialog example: Displaying an image alongside supporting content and actions
        (media/media-hero variants).
      label: Do
      caption: >-
        Displaying an image alongside supporting content and actions (media/media-hero
        variants).
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Write the heading to describe the purpose of the dialog, since it also serves
    as the dialog's accessible name.
  - >-
    Write action button labels using active verbs describing the exact action, per
    Button content guidance.
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - Avoid adverbs like "simply", "just" or "easily".
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Render Dialog at the document root, not nested inside animated content — an
    ancestor with a transform (or filter/will-change/contain) outside this component's
    own shadow root creates a containing block that traps position: fixed, overriding
    the viewport-wide placement the dialog otherwise guarantees. This codebase's
    own aa-motion foundation applies exactly that kind of transform to Panel/Hero
    content while entering.
  - >-
    The scrim and dialog panel each have an explicit z-index (0/1) rather than relying
    on DOM order, since backdrop-filter promotes an element to its own compositing
    layer.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: open
      options: boolean (reflected)
      defaultValue: 'false'
      description: Whether the dialog is open.
    - name: variant
      options: default | media | media-hero
      defaultValue: default
      description: 'Layout: text-only, image above content, or side-by-side image
        and content.'
    - name: heading
      options: string
      defaultValue: '''Text Heading'''
      description: Dialog heading text, also used as the aria-label.
    - name: image-src
      options: string
      defaultValue: ''''''
      description: Image source for media/media-hero variants.
    - name: image-alt
      options: string
      defaultValue: ''''''
      description: Alt text for the image.
    - name: close-label
      options: string
      defaultValue: '''Close'''
      description: Accessible label for the close button.
- type: accessibility
  focusOrder:
  - >-
    Opening the dialog moves focus into the dialog panel itself. Closing it returns
    focus to whichever element had focus before the dialog opened.
  keyboard:
  - key: Escape
    action: Closes the dialog.
  aria:
  - role="dialog" and aria-modal="true" on the dialog panel.
  - aria-label on the dialog panel, set to the heading value.
  - aria-label on the close button, set to close-label.
  - inert applied to the dialog panel and scrim while closed.
- type: related-components
  items:
  - label: Header dropdown
    href: /components/header-dropdown
    note: >-
      Shares the same scrim/panel shape and transition, as a hover-only mega-menu
      rather than a modal.
  - label: Heading
    href: /components/heading
    note: Renders the dialog heading.
  - label: Button group
    href: /components/button-group
    note: Used to lay out the action buttons in the actions slot.
  - label: Icon
    href: /components/icon
    note: Supplies the close icon.
---
