---
title: Accordion
description: This component saves space by letting users expand or collapse content sections.
storybookUrl: ""
figmaUrl: ""
---

## Usage

Use accordions when you need to present multiple sections of related content without overwhelming the user. They are ideal for FAQs, detailed specifications, or secondary information that supports the main content.

### Use accordion

- Organise and group related content into collapsible sections
- Reduce visual clutter on pages with lots of information
- Allow users to reveal details only when needed
- Help users scan and digest content more easily

### Don't use accordion

- For critical information that must always be visible
- For navigation or primary actions
- When the content is very short — for example, a single sentence
- Inside another accordion

### General guidance

- Keep titles short and descriptive
- Ensure expanded content is easy to scan
- Avoid nesting accordions inside other components
- Maintain consistent spacing and alignment for clarity

## Anatomy

![Accordion anatomy diagram](/design-system-docs/images/accordion-anatomy.png)

1. **Container** — the full-width wrapper for each accordion item
2. **Arrow** — indicates expanded or collapsed state, rotates on toggle
3. **Title content** — the heading, always visible, triggers expand/collapse on click
4. **Body content** — the revealed content, hidden when collapsed

## Variants

![Accordion variants](/design-system-docs/images/accordion-variants.png)

**Default closed** — the accordion is closed to keep the interface uncluttered. This is the default state on page load.

**Default open** — an open accordion allows users to easily view and interact with expanded content.

**Slim** — a slimmer variant suited for nesting within components such as cards. Reduced padding and title size.

## States

![Accordion states](/design-system-docs/images/accordion-states.png)

**Closed** — default state. Body content is hidden, arrow points downward.

**Open** — body content is revealed, arrow rotates to point upward.

**Hover** — increased contrast on the title row to signal interactivity.

**Focused** — visible focus ring on the title row for keyboard navigation.

## Design tokens

- **Container background** — `surface/default/primary`
- **Title text** — `text/default/headings`
- **Body text** — `text/default/body`
- **Border** — `border/default/secondary`
- **Focus ring** — `border/default/focus`
- **Arrow icon** — `icon/default/primary`

## Accessibility

- The title must be a `button` element so it is keyboard accessible and announced correctly by screen readers
- Use `aria-expanded="true"/"false"` on the button to communicate state
- The body panel should use `aria-hidden="true"` when collapsed
- Do not auto-collapse other sections when one opens unless the user expects this behaviour
- Focus must remain on the trigger button after expand/collapse

## Related components

- [Checkbox](/design-system-docs/components/checkbox) — use instead for revealing options in a form context rather than collapsing content sections
