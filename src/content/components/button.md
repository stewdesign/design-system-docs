---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Button
description: >-
  Button is the single control for every button and link call-to-action in the design
  system. It renders as a native <button> by default, or as an <a> when an href
  is supplied, so the same variants, sizes and states apply whether the action is
  in-page or a navigation.
storybookUrl: ''
figmaUrl: https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id=4185-3778
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - 'Leading icon slot (icon-start): optional icon shown before the label.'
  - 'Label: the button text, wrapped in a .label span.'
  - 'Trailing icon slot (icon-end): optional icon shown after the label.'
  - >-
    Loading spinner: replaces the trailing position while loading is true; the label
    stays visible so the control does not change width.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Button anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Primary button
    description: Default call-to-action styling.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Primary button'
  - title: Secondary / tertiary button
    description: Lower-emphasis actions alongside a primary action.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Secondary / tertiary button'
  - title: Link-style button
    description: >-
      variant="link", typically at size="small", for the lowest-emphasis action
      in a group.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Link-style button'
  - title: Button with leading/trailing icon
    description: Icon slotted alongside the label, sized automatically to match
      text.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Button with leading/trailing icon'
  - title: Disabled button
    description: Inactive state, opacity reduced.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Disabled button'
  - title: Loading button
    description: Spinner shown, label retained, aria-busy set.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Loading button'
  - title: Button as link (href set)
    description: Renders an anchor styled identically to a button.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Button as link (href set)'
  - title: Danger button (intent="danger")
    description: For destructive actions, available across all variants.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: Danger button (intent="danger")'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Hover
    description: >-
      primary, secondary and tertiary variants darken/shift their background on
      hover; link has no background so only its underline and colour are affected
      by state.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: hover'
  - title: Disabled
    description: >-
      Opacity reduces to 0.6 and the cursor becomes not-allowed. On an anchor, href
      is removed so the control is neither focusable nor activatable, and aria-disabled="true"
      communicates the state to assistive tech.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: disabled'
  - title: Loading
    description: >-
      A spinner replaces the icon-end position (or sits after the label if none
      is set), aria-busy="true" is applied, and the control is inert in the same
      way as disabled. The label stays visible so width doesn't shift when loading
      starts or ends.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: loading'
  - title: Icons
    description: >-
      Icon size is owned by the button, not the consumer — a size set on a slotted
      Icon is ignored, so icons are always sized to 1em and match the label. When
      an icon is present, the button tightens the padding on that side by one step
      for optical balance (excluded on link, which has no horizontal padding).
    image: https://placehold.co/1280x720
    imageAlt: 'Button: icons'
  - title: Transitions
    description: >-
      Colour and border changes use the shared interactive transition token; focus
      rings use the shared focus-ring transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: transitions'
  - title: Reduced motion
    description: >-
      The loading spinner's animation slows from 640ms to 2400ms per rotation under
      prefers-reduced-motion: reduce, rather than stopping outright.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: reduced motion'
  - title: Responsive behaviour
    description: >-
      The control has no responsive breakpoints of its own; it sizes to its content
      (min-width: max-content) and wraps only if the container forces it — content
      guidance requires labels short enough not to wrap on mobile.
    image: https://placehold.co/1280x720
    imageAlt: 'Button: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    Any primary, secondary or tertiary call-to-action, in-page or navigating elsewhere.
  - >-
    Form submission, resets, or in-page actions (type="submit", type="reset", type="button").
  - >-
    Navigational CTAs that should look and behave like part of the action hierarchy
    (set href).
  - >-
    Destructive or high-consequence actions (intent="danger"), e.g. deleting cover
    or cancelling a policy.
  dont:
  - An icon-only control with no visible label — use Icon button instead.
  - >-
    Grouped, mutually exclusive or multi-select choices — use the relevant selection
    component (e.g. radio/checkbox group), not a set of buttons.
  - >-
    Plain inline navigation within body copy — use a standard inline text link,
    not variant="link" at button scale, unless the action needs button-level prominence.
  - A set of related actions that should visually group together — use Button group.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Frontload with active verbs that accurately describe the action, e.g. "Edit"
    or "Choose".
  - >-
    Avoid generic wording such as "Find out more" or "Read more" — say what the
    button actually does.
  - >-
    Consider what the user will do next and where the button takes them; where practical,
    match the label to the destination page title.
  - >-
    Keep labels concise enough that they don't wrap on mobile, and ensure the button
    is wide enough to fit the label text.
  - Use sentence case, not title case.
  - Avoid colons at the end of labels.
  - >-
    Avoid adverbs like "simply", "just" or "easily" — what feels easy to one person
    may not be to another.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Button example: "Choose cover"'
      label: Do
      caption: '"Choose cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Button example: "Find out more"'
      label: Don't
      caption: '"Find out more"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Button example: "Add your details"'
      label: Do
      caption: '"Add your details"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Button example: "Simply add your details"'
      label: Don't
      caption: '"Simply add your details"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Button example: "Delete cover"'
      label: Do
      caption: '"Delete cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Button example: "Delete Cover:"'
      label: Don't
      caption: '"Delete Cover:"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    small size falls below the 44px touch-target minimum by design — consider this
    for primary mobile actions.
  - >-
    Don't nest interactive elements (e.g. another link or button) inside the icon
    slots.
  - >-
    Setting both disabled and loading is unnecessary — loading already disables
    interaction.
  - >-
    On anchors, a custom rel is only needed to override the automatic noreferrer
    noopener applied when target="_blank".
  - >-
    Label length isn't visually truncated by the component — long labels will wrap
    or overflow, so content guidance on conciseness must be followed.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: variant
      options: primary | secondary | tertiary | link
      defaultValue: primary
      description: Visual style/hierarchy of the button.
    - name: size
      options: medium | small
      defaultValue: medium
      description: >-
        Control height and padding. small is below the 44px touch-target minimum
        by design.
    - name: intent
      options: default | danger
      defaultValue: default
      description: Semantic tone. danger replaces the former aa-button-danger component.
    - name: disabled
      options: boolean
      defaultValue: 'false'
      description: >-
        Disables the control. On an anchor, this drops href and adds aria-disabled="true"
        since links have no native disabled state.
    - name: loading
      options: boolean
      defaultValue: 'false'
      description: >-
        Shows a spinner and sets aria-busy="true"; the control remains disabled
        to interaction.
    - name: href
      options: string
      description: Renders an anchor instead of a button. Replaces the former aa-cta
        component.
    - name: target
      options: string
      description: >-
        Anchor target. Setting target="_blank" without an explicit rel auto-applies
        rel="noreferrer noopener".
    - name: rel
      options: string
      description: Anchor rel. Overrides the automatic noreferrer noopener behaviour.
    - name: type
      options: button | submit | reset
      defaultValue: button
      description: Native button type, ignored when href is set.
- type: accessibility
  focusOrder:
  - >-
    Button participates in the natural tab order as either a <button> or an <a>.
    When disabled or loading, an anchor's href is removed so it is skipped entirely
    (matching native disabled-button behaviour); a <button> uses the native disabled
    attribute, which removes it from the tab order in the same way.
  keyboard:
  - key: Enter
    action: Activates the button or follows the link.
  - key: Space
    action: Activates the button (native <button> behaviour; does not apply to anchors).
  aria:
  - >-
    aria-disabled="true" — applied to the anchor form when disabled or loading is
    true, since anchors have no native disabled state.
  - >-
    aria-busy="true" — applied while loading is true, on both the button and anchor
    forms.
  - Native disabled attribute is used on the <button> form instead of aria-disabled.
  - >-
    No role override is needed — the semantic <button> or <a> element is used directly.
  seo:
  - >-
    Renders as a real <button> or <a>, not a generic <div>, so semantics, focusability
    and link crawlability are native rather than simulated.
  - >-
    When used for navigation, always set href so the destination is a real, crawlable
    link rather than a JavaScript-only click handler.
  - >-
    Label text should describe the destination or action on its own (per the content
    guidance above) — avoid vague labels like "Click here", which carry no meaning
    out of context for assistive tech, search engines or AI agents parsing the page.
- type: related-components
  items:
  - label: Icon button
    href: /components/icon-button
    note: A compact, icon-only variant with no visible label.
  - label: Button group
    href: /components/button-group
    note: Groups related buttons together with consistent spacing/alignment.
  - label: Icon
    href: /components/icon
    note: Supplies the leading/trailing icons slotted into a button.
---
