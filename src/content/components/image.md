---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - Keyboard interactions: not applicable — the component is not interactive.
title: Image
description: >-
  Image is a semantic image frame that enforces one of a set of documented aspect
  ratios, showing a placeholder pattern when no src is supplied. It keeps the documented
  ratio and direction variants from Figma while rendering a real <img> so it can
  carry actual content rather than being a placeholder-only frame.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=10919-11470
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
    Frame: the sized, rounded container that clips the image to the chosen aspect
    ratio.
  - 'Image: the <img> itself, rendered when src is set.'
  - >-
    Placeholder: a diagonal checkerboard pattern shown in place of the image when
    src is empty.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Image anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Square
    description: ratio="1x1", the default.
    image: https://placehold.co/1280x720
    imageAlt: 'Image: Square'
  - title: Wide
    description: ratio="16x9".
    image: https://placehold.co/1280x720
    imageAlt: 'Image: Wide'
  - title: Vertical
    description: direction="vertical" with ratio="4x3".
    image: https://placehold.co/1280x720
    imageAlt: 'Image: Vertical'
  - title: Ratio gallery
    description: All ratio/direction combinations shown together.
    image: https://placehold.co/1280x720
    imageAlt: 'Image: Ratio gallery'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Placeholder
    description: >-
      When src is empty, a decorative diagonal checkerboard pattern fills the frame
      instead of an image, sized to the same aspect ratio.
    image: https://placehold.co/1280x720
    imageAlt: 'Image: placeholder'
  - title: Sizing
    description: >-
      The frame's inline size and aspect ratio are set together via a CSS custom
      property, keyed off the ratio/direction combination (six fixed combinations).
    image: https://placehold.co/1280x720
    imageAlt: 'Image: sizing'
  - title: Fit
    description: >-
      The image uses object-fit: cover, so it fills the frame and crops rather than
      letterboxing.
    image: https://placehold.co/1280x720
    imageAlt: 'Image: fit'
  - title: Loading
    description: Images load with loading="lazy" and decoding="async" by default.
    image: https://placehold.co/1280x720
    imageAlt: 'Image: loading'
  - title: Corners
    description: The frame has rounded corners (--corner-radius-lg), clipping the
      image to match.
    image: https://placehold.co/1280x720
    imageAlt: 'Image: corners'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Image example: Any content image that needs to be constrained to one of
        the documented aspect ratios (square, widescreen, or 4:3), e.g. in cards,
        galleries or content blocks.
      label: Do
      caption: >-
        Any content image that needs to be constrained to one of the documented
        aspect ratios (square, widescreen, or 4:3), e.g. in cards, galleries or
        content blocks.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Image example: Full-bleed or background images with bespoke sizing outside
        the documented ratios — e.g. Hero's background-image variant manages its
        own background image directly rather than using Image.
      label: Don't
      caption: >-
        Full-bleed or background images with bespoke sizing outside the documented
        ratios — e.g. Hero's background-image variant manages its own background
        image directly rather than using Image.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Image example: Where a placeholder should be shown before a real image source
        is available.
      label: Do
      caption: Where a placeholder should be shown before a real image source is
        available.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Image example: Purely decorative graphics or icons — use Icon or Brand icon
        instead.
      label: Don't
      caption: Purely decorative graphics or icons — use Icon or Brand icon instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Alt text: a concise, accurate description of what the image shows or conveys,
    not a generic label.
  - >-
    Leave alt empty only when the image is genuinely decorative and adds no information
    beyond what's already conveyed in surrounding text.
  - >-
    Alt text is written for spoken word — concise and accurate, not vague ("image
    of a car") and not overly detailed (describing every visual element).
  - >-
    Avoid patronising or overly descriptive phrasing; describe what the image communicates
    in context.
  - Use sentence case, no closing full stop unless multiple sentences.
  - Use British English spelling throughout.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Only three ratios and two directions are supported (six fixed size combinations)
    — there's no arbitrary custom aspect ratio.
  - >-
    object-fit: cover means the image will crop to fill the frame; make sure the
    subject is centred or the crop is acceptable at the chosen ratio.
  - >-
    The placeholder pattern is purely visual — it does not communicate a loading
    or error state to assistive technology beyond being empty of content.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: src
      options: string
      defaultValue: ''''''
      description: Image source. When empty, the placeholder pattern is shown instead.
    - name: alt
      options: string
      defaultValue: ''''''
      description: Alt text for the image.
    - name: ratio
      options: 1x1 | 16x9 | 4x3
      defaultValue: 1x1
      description: Aspect ratio of the frame.
    - name: direction
      options: horizontal | vertical
      defaultValue: horizontal
      description: >-
        Combines with ratio to set the frame's base inline size (e.g. 16x9 horizontal
        is wider than 16x9 vertical).
- type: accessibility
  focusOrder:
  - >-
    Not a focusable element — Image has no interactive semantics and does not participate
    in the tab order.
  aria:
  - >-
    The placeholder (shown when src is empty) is marked aria-hidden="true", as it
    carries no content.
  - >-
    alt is passed through to the <img> via ifDefined; an empty string still renders
    alt="", matching correct semantics for a genuinely decorative image.
  seo:
  - >-
    Renders a real <img> with loading="lazy" and decoding="async", so it is crawlable
    and doesn't block initial page render.
  - >-
    Supplying accurate alt text ensures the image's content is discoverable to search
    engines and AI agents parsing the page, not just sighted users.
- type: related-components
  items:
  - label: Hero
    href: /components/hero
    note: >-
      Uses its own <img> handling for side-by-side and background images rather
      than Image.
  - label: Icon
    href: /components/icon
    note: For iconography and brand marks rather than content photography.
  - label: Brand icon
    href: /components/brand-icon
    note: For iconography and brand marks rather than content photography.
---
