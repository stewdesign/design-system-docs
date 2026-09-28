---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: confirm whether an AvatarButton component exists or needs building.
#   - Things to consider: confirm intended fallback behaviour for a broken image URL.
#   - Keyboard interactions: no keyboard interactions — the component has no interactive states of its own.
title: Avatar
description: >-
  Avatar displays a user's photo or initials in a fixed-size circle, optionally
  with a status badge overlay. It's used wherever a person needs a compact visual
  identifier — profile menus, comment authors, team member listings.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=9762-1103
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
    Photo or initials: either an <img> (type="image") or a single-character initial
    (type="initials"), centred in a circular frame.
  - >-
    Badge overlay (optional): a small Badge (variant="dot") positioned at the top-right
    corner, shown when has-badge is set, with a cutout ring separating it from the
    photo/initials behind it.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Avatar anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Image avatar
    description: A photo, default state.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: Image avatar'
  - title: Initials avatar
    description: A single-letter fallback when no photo is available.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: Initials avatar'
  - title: With badge
    description: Either type, with the status-dot overlay.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: With badge'
  - title: Gallery
    description: Image and initials avatars, with and without badges, shown side
      by side.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: Gallery'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Fixed size
    description: >-
      A single fixed 40px size — there are no small/large variants in the source
      Figma file.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: fixed size'
  - title: Image fit
    description: >-
      The photo fills the circular frame using object-fit: cover, cropping rather
      than distorting non-square source images.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: image fit'
  - title: Badge
    description: >-
      Uses Badge internally with variant="dot" and intent="alert", marked aria-hidden="true"
      since it's a purely visual indicator layered on top of the avatar.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: badge'
  - title: No interactive states of its own
    description: >-
      Hover/focus states shown in Figma belong to a separate AvatarButton composition,
      not this presentational primitive — Avatar itself has no built-in hover or
      focus styling.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: no interactive states of its own'
  - title: Responsive behaviour
    description: None; the component is a fixed-size inline-block element regardless
      of viewport.
    image: https://placehold.co/1280x720
    imageAlt: 'Avatar: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Avatar example: Representing a specific person (a user, team member, or
        named contact) with a photo or initials.
      label: Do
      caption: >-
        Representing a specific person (a user, team member, or named contact) with
        a photo or initials.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Avatar example: As a clickable control (e.g. opening a profile menu) — wrap
        it in a real interactive element or use the separate AvatarButton pattern;
        Avatar itself has no built-in interactive states.
      label: Don't
      caption: >-
        As a clickable control (e.g. opening a profile menu) — wrap it in a real
        interactive element or use the separate AvatarButton pattern; Avatar itself
        has no built-in interactive states.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Avatar example: Pairing with a name in a list, comment, or profile
        summary.'
      label: Do
      caption: Pairing with a name in a list, comment, or profile summary.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Avatar example: Displaying a generic icon unrelated to a specific person
        — use Icon instead.
      label: Don't
      caption: Displaying a generic icon unrelated to a specific person — use Icon
        instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Avatar example: Showing an online/notification status via the optional
        badge.'
      label: Do
      caption: Showing an online/notification status via the optional badge.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Avatar example: Showing more than one initial — the fixed-width circle only
        accommodates a single character.
      label: Don't
      caption: >-
        Showing more than one initial — the fixed-width circle only accommodates
        a single character.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    alt text should identify the person by name (e.g. "Jordan Blake"), not describe
    the image generically (e.g. "profile photo").
  - >-
    initials should be exactly one character — use the person's first initial, or
    whichever single character best represents them if no name is available.
  - >-
    Leave alt empty only when the avatar is genuinely decorative and a name is already
    presented alongside it in text.
  - Keep alt text concise — a name is sufficient, no extra description needed.
  - Use British English spelling in any surrounding copy referencing the avatar.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Avatar example: alt="Jordan Blake"'
      label: Do
      caption: alt="Jordan Blake"
    - image: https://placehold.co/1280x720
      imageAlt: 'Avatar example: alt="User profile picture"'
      label: Don't
      caption: alt="User profile picture"
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Avatar example: initials="J"'
      label: Do
      caption: initials="J"
    - image: https://placehold.co/1280x720
      imageAlt: 'Avatar example: initials="JB"'
      label: Don't
      caption: initials="JB"
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Supplying two or more characters to initials will visually overflow the fixed-width
    circle — validate or truncate to one character before passing it in.
  - >-
    The badge is purely decorative (aria-hidden="true") — it does not independently
    announce status to assistive technology, so any meaningful status change should
    also be communicated elsewhere (e.g. accompanying text).
  - >-
    There is no built-in fallback if src fails to load — the browser's own broken-image
    behaviour will show unless the consumer handles the error separately.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: type
      options: image | initials
      defaultValue: image
      description: Whether to render a photo or a single-character initial.
    - name: src
      options: string
      defaultValue: ''''''
      description: Image URL, used when type="image".
    - name: alt
      options: string
      defaultValue: ''''''
      description: Alt text for the image.
    - name: initials
      options: string
      defaultValue: '''A'''
      description: >-
        The initial to display when type="initials". Single character only — two
        or more overflow the fixed-width circle.
    - name: has-badge
      options: boolean
      defaultValue: 'false'
      description: Shows a small status-dot badge overlay in the top-right corner.
- type: accessibility
  focusOrder:
  - >-
    Avatar is not focusable and does not participate in tab order — it's a presentational
    element. If used inside an interactive control (e.g. a button), that wrapping
    element receives focus instead.
  aria:
  - >-
    The image, when present, uses a standard alt attribute — omit it (leave alt="")
    only when the name is already presented as visible text nearby.
  - >-
    The badge overlay is marked aria-hidden="true" since it duplicates status information
    that should be conveyed through accessible text elsewhere.
  seo:
  - >-
    Uses a real <img> element with alt text when type="image", so search engines
    and AI agents can associate the image with the named person rather than an opaque
    background image.
  - >-
    Because the avatar carries no semantic role beyond a decorative image, ensure
    the person's name appears as real text content nearby (e.g. in a list item or
    card) so it's discoverable independent of the avatar itself.
- type: related-components
  items:
  - label: Badge
    href: /components/badge
    note: >-
      Used internally for the status-dot overlay; also usable standalone for labels
      and counts.
  - label: Icon
    href: /components/icon
    note: For generic, non-person iconography instead of a photo/initials avatar.
---
