---
title: Accordion
description: This component saves space by letting users expand or collapse content sections.
storybookUrl: ""
figmaUrl: ""
previewImage: https://placehold.co/1280x548
version: "1.0.0"
lastUpdated: 2026-06-15
platforms: ["Web", "Mobile app"]
bestPractices:
  do:
    - Organise and group related content into collapsible sections
    - Reduce visual clutter on pages with lots of information
    - Allow users to reveal details only when needed
    - Help users scan and digest content more easily
  dont:
    - For critical information that must always be visible
    - For navigation or primary actions
    - When the content is very short — for example, a single sentence
    - Inside another accordion
designTokens:
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
accessibility:
  - The title must be a button element so it is keyboard accessible and announced correctly by screen readers
  - 'Use aria-expanded="true"/"false" on the button to communicate state'
  - 'The body panel should use aria-hidden="true" when collapsed'
  - Do not auto-collapse other sections when one opens unless the user expects this behaviour
  - Focus must remain on the trigger button after expand/collapse
relatedComponents:
  - label: Checkbox
    href: /design-system-docs/components/checkbox
    note: use instead for revealing options in a form context rather than collapsing content sections
---

## Usage

Use accordions when you need to present multiple sections of related content without overwhelming the user. They are ideal for FAQs, detailed specifications, or secondary information that supports the main content.

### General guidance

- Keep titles short and descriptive
- Ensure expanded content is easy to scan
- Avoid nesting accordions inside other components
- Maintain consistent spacing and alignment for clarity

## Anatomy

<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Anatomy of the accordion.</figcaption>
</figure>
<ol>
<li>Container</li>
<li>Arrow</li>
<li>Title content</li>
<li>Body content</li>
</ol>

## Properties

<div class="properties-wrapper">
<section class="inner-section">
<div class="inner-section-content">
<h3>Container</h3>
<p>The full-width wrapper for each accordion item.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the container.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Arrow</h3>
<p>Indicates expanded or collapsed state, rotates on toggle.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the arrow.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Title content</h3>
<p>The heading, always visible, triggers expand/collapse on click.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the title content.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Body content</h3>
<p>The revealed content, hidden when collapsed.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the body content.</figcaption>
</figure>
</section>
</div>

## Variants

<div class="properties-wrapper">
<section class="inner-section">
<div class="inner-section-content">
<h3>Default closed</h3>
<p>The accordion is closed to keep the interface uncluttered. This is the default state on page load.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the default closed variant.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Default closed</h3>
<p>The accordion is closed to keep the interface uncluttered. This is the default state on page load.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the default closed variant.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Default open</h3>
<p>An open accordion allows users to easily view and interact with expanded content.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the default open variant.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Slim</h3>
<p>A slimmer variant suited for nesting within components such as cards. Reduced padding and title size.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the slim variant.</figcaption>
</figure>
</section>
</div>

## Behavior

<div class="properties-wrapper">
<section class="inner-section">
<div class="inner-section-content">
<h3>Closed</h3>
<p>Default state. Body content is hidden, arrow points downward.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the closed state.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Open</h3>
<p>Body content is revealed, arrow rotates to point upward.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the open state.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Hover</h3>
<p>Increased contrast on the title row to signal interactivity.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the hover state.</figcaption>
</figure>
</section>
<section class="inner-section">
<div class="inner-section-content">
<h3>Focused</h3>
<p>Visible focus ring on the title row for keyboard navigation.</p>
</div>
<figure>
<img src="https://placehold.co/1280x720" alt="" />
<figcaption>Image of the focused state.</figcaption>
</figure>
</section>
</div>
