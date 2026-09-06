---
title: Accordion
description: >-
  This component saves space by letting users expand or collapse content
  sections. Use it when you need to present multiple sections of related
  content without overwhelming the user — ideal for FAQs, detailed
  specifications, or secondary information that supports the main content.
  Keep titles short and descriptive, ensure expanded content is easy to
  scan, avoid nesting accordions inside other components, and maintain
  consistent spacing and alignment for clarity.
storybookUrl: ""
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-06-15
platforms: ["Web", "Mobile app"]
sections:
  - type: anatomy
    heading: Anatomy
    image: https://placehold.co/1280x720
    caption: Anatomy of the accordion.
    items:
      - Container
      - Arrow
      - Title content
      - Body content
  - type: two-col
    heading: Properties
    items:
      - title: Container
        description: The full-width wrapper for each accordion item.
        image: https://placehold.co/1280x720
        caption: Image of the container.
      - title: Arrow
        description: Indicates expanded or collapsed state, rotates on toggle.
        image: https://placehold.co/1280x720
        caption: Image of the arrow.
      - title: Title content
        description: The heading, always visible, triggers expand/collapse on click.
        image: https://placehold.co/1280x720
        caption: Image of the title content.
      - title: Body content
        description: The revealed content, hidden when collapsed.
        image: https://placehold.co/1280x720
        caption: Image of the body content.
  - type: two-col
    heading: Variants
    items:
      - title: Default closed
        description: The accordion is closed to keep the interface uncluttered. This is the default state on page load.
        image: https://placehold.co/1280x720
        caption: Image of the default closed variant.
      - title: Default open
        description: An open accordion allows users to easily view and interact with expanded content.
        image: https://placehold.co/1280x720
        caption: Image of the default open variant.
      - title: Slim
        description: A slimmer variant suited for nesting within components such as cards. Reduced padding and title size.
        image: https://placehold.co/1280x720
        caption: Image of the slim variant.
  - type: two-col
    heading: Behavior
    items:
      - title: Closed
        description: Default state. Body content is hidden, arrow points downward.
        image: https://placehold.co/1280x720
        caption: Image of the closed state.
      - title: Open
        description: Body content is revealed, arrow rotates to point upward.
        image: https://placehold.co/1280x720
        caption: Image of the open state.
      - title: Hover
        description: Increased contrast on the title row to signal interactivity.
        image: https://placehold.co/1280x720
        caption: Image of the hover state.
      - title: Focused
        description: Visible focus ring on the title row for keyboard navigation.
        image: https://placehold.co/1280x720
        caption: Image of the focused state.
  - type: side-by-side
    heading: Best practices
    items:
      - title: What content to hide
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: organise and group related, optional content into collapsible sections."
          - image: https://placehold.co/1280x720
            caption: "Don't: hide critical information that must always be visible."
      - title: When to use it
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: reduce visual clutter on pages with lots of information."
          - image: https://placehold.co/1280x720
            caption: "Don't: use an accordion for navigation or primary actions."
      - title: How much content
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: reveal details only when needed."
          - image: https://placehold.co/1280x720
            caption: "Don't: collapse content that's very short — for example, a single sentence."
      - title: Nesting
        figures:
          - image: https://placehold.co/1280x720
            caption: "Do: keep accordions flat, to help users scan and digest content easily."
          - image: https://placehold.co/1280x720
            caption: "Don't: nest an accordion inside another accordion."
  - type: design-tokens
    tokens:
      - name: Container background
        value: surface/default/primary
      - name: Title text
        value: text/default/headings
      - name: Body text
        value: text/default/body
      - name: Border
        value: border/default/secondary
      - name: Focus ring
        value: border/default/focus
      - name: Arrow icon
        value: icon/default/primary
  - type: accessibility
    items:
      - The title must be a button element so it is keyboard accessible and announced correctly by screen readers
      - 'Use aria-expanded="true"/"false" on the button to communicate state'
      - 'The body panel should use aria-hidden="true" when collapsed'
      - Do not auto-collapse other sections when one opens unless the user expects this behaviour
      - Focus must remain on the trigger button after expand/collapse
  - type: related-components
    items:
      - label: Checkbox
        href: /design-system-docs/components/checkbox
        note: use instead for revealing options in a form context rather than collapsing content sections
---
