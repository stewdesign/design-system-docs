---
# Gaps from the source doc (TODOs), for review:
#   - Keyboard interactions: keyboard interactions for slotted trailing controls (switch/checkbox/radio) are owned by those components, not List item — confirm whether this doc should cross-reference them explicitly.
title: List item
description: >-
  List item is a single row in a list — a label, optional description, and optional
  leading/trailing content, with an optional real link across the whole row. It
  appears wherever content is presented as a scannable vertical list, such as a
  settings screen, an account menu, or a group of cover options.
storybookUrl: ''
figmaUrl: ''
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
    Leading slot (slot="leading"): optional List item leading primitive holding
    an icon, avatar, or status bullet.
  - >-
    Label and description: rendered via an internal Input label (size small), supporting
    a label, an optional description line, and an optional collapsible helper disclosure.
  - >-
    Badge: an 8px dot (badge) shown between the label area and the trailing slot,
    e.g. to flag unread or new content.
  - >-
    Trailing slot (slot="trailing"): optional List item trailing primitive holding
    an interactive control (icon button, switch, checkbox, radio, button) or a chevron.
  - >-
    Full-row link: when href is set, an absolutely-positioned <a> sits behind the
    visible content so the whole row is clickable/focusable, while any interactive
    control in the trailing slot stays independently focusable on top.
  - >-
    Divider: an Divider rendered below the row when divider is true, for separating
    items in a group.
  image: https://placehold.co/1280x720
  imageAlt: Labelled List item anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Label, leading icon, trailing icon-button, href set.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: Default'
  - title: With description
    description: Adds a supporting second line.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: With description'
  - title: With badge
    description: Status dot shown before the trailing slot.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: With badge'
  - title: No trailing link
    description: Leading icon only, no trailing content.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: No trailing link'
  - title: Avatar
    description: List item leading type="avatar" holding an Avatar.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: Avatar'
  - title: Status
    description: List item leading type="status" intent="positive" holding a small
      icon.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: Status'
  - title: With switch
    description: A slotted Switch as the only interactive element, no href.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: With switch'
  - title: With checkbox
    description: A slotted Checkbox, no href.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: With checkbox'
  - title: Group
    description: >-
      Several items composed inside List item group, each with its own divider/badge/href.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: Group'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Hover/focus
    description: >-
      Only applies when href is set — the row's background changes on hover (--surface-neutral-secondary-default),
      and a dashed focus ring appears around the whole row on keyboard focus.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: hover/focus'
  - title: Non-link rows
    description: >-
      With no href, the row itself never shows a hover or focus treatment — only
      a genuinely interactive trailing control (e.g. a slotted Switch) responds
      to its own interaction states.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: non-link rows'
  - title: Click pass-through
    description: >-
      The label/leading area has pointer-events: none so clicks land on the full-row
      link underneath rather than being swallowed by a plain <span>.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: click pass-through'
  - title: Leading visuals
    description: >-
      type="icon" renders a 36px rounded box around a slotted icon; type="avatar"
      renders the slot bare (an Avatar already has its own circular treatment);
      type="status" renders a small coloured circle, tinted by intent.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: leading visuals'
  - title: Badge
    description: >-
      A static 8px dot — it does not animate or update on its own; the consumer
      toggles the badge property.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: badge'
  - title: Transitions
    description: >-
      Background/hover changes use the shared interactive transition token; the
      focus ring uses the shared focus-ring transition token.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: transitions'
  - title: Responsive behaviour
    description: >-
      The item fills its container's inline size (inline-size: 100%); content wrapping/truncation
      is not handled by the component itself.
    image: https://placehold.co/1280x720
    imageAlt: 'List item: responsive behaviour'
- type: best-practices
  heading: When to use
  doHeading: Use it for
  dontHeading: Don't use it for
  do:
  - >-
    A row of content in a scannable vertical list — settings, account options, cover
    choices, search results.
  - >-
    Rows that navigate elsewhere on click — set href so the whole row is a real
    link.
  - >-
    Rows that host a single, genuinely interactive control (switch, checkbox, radio,
    icon button) without an outer link.
  - Grouped, related rows sharing a single surface — wrap items in List item group.
  dont:
  - A single, standalone call-to-action — use Button instead.
  - Primary in-page navigation between top-level sections — use Menu/Menu item.
  - >-
    A row that needs both a full-row link and multiple independent interactive controls
    in the trailing area — only one trailing control is supported per item; consider
    a custom layout instead.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the label short, direct and in sentence case — it's the noun the user is
    scanning for.
  - Use description for supporting detail only, not a repeat of the label.
  - >-
    Reserve helper for genuinely optional detail that can stay collapsed until the
    user asks for it.
  - Use sentence case for label and description, not title case.
  - Avoid colons at the end of labels.
  - Use active, specific wording rather than generic terms.
  - Use British English spelling (e.g. "Customise", not "Customize").
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'List item example: "Roadside"'
      label: Do
      caption: '"Roadside"'
    - image: https://placehold.co/1280x720
      imageAlt: 'List item example: "Roadside Assistance:"'
      label: Don't
      caption: '"Roadside Assistance:"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'List item example: "Email notifications"'
      label: Do
      caption: '"Email notifications"'
    - image: https://placehold.co/1280x720
      imageAlt: 'List item example: "Notification Settings For Email"'
      label: Don't
      caption: '"Notification Settings For Email"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'List item example: "24/7 help if you break down"'
      label: Do
      caption: '"24/7 help if you break down"'
    - image: https://placehold.co/1280x720
      imageAlt: 'List item example: "Learn more about this cover"'
      label: Don't
      caption: '"Learn more about this cover"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Don't nest a second interactive element inside the leading slot — it isn't designed
    to be focusable.
  - >-
    When href is set, avoid also slotting a link-like trailing control that duplicates
    the same destination.
  - >-
    List item leading and List item trailing are internal primitives, hidden from
    Storybook's sidebar — always reach for List item and slot them in, not the other
    way round.
  - >-
    List item group only supplies the shared surface and spacing; each item still
    owns its own divider, badge and href.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: label
      options: string
      defaultValue: '''Label'''
      description: The item's primary text.
    - name: description
      options: string
      defaultValue: ''''''
      description: Optional secondary line under the label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
    - name: href
      options: string
      defaultValue: ''''''
      description: >-
        Makes the whole row a real, focusable link. Without it, the row itself is
        non-interactive and only a slotted trailing control (if any) is interactive.
    - name: badge
      options: boolean
      defaultValue: 'false'
      description: Shows a small status dot before the trailing slot.
    - name: divider
      options: boolean
      defaultValue: 'false'
      description: Renders an Divider below the item, e.g. between items in an List
        item group.
- type: accessibility
  focusOrder:
  - >-
    When href is set, the row is one focusable stop (the underlying <a>) in the
    natural tab order; any interactive trailing control (e.g. a slotted Switch)
    is a separate, independent stop immediately after, since it sits visually on
    top of — not nested inside — the row's link. Without href, the row itself is
    not focusable and only a slotted trailing control participates in tab order.
  keyboard:
  - key: Enter
    action: Activates the row's link (when href is set).
  - key: Tab
    action: >-
      Moves focus to the row's link, then to any independently focusable trailing
      control.
  aria:
  - >-
    The row's link uses aria-labelledby pointing at the internal label element,
    so its accessible name matches the visible label rather than any surrounding
    text.
  - >-
    No role override is applied — the component renders a real <a> when href is
    set, and a plain, non-semantic container otherwise.
  seo:
  - >-
    When href is set, the row renders a real, crawlable <a>, not a <div> with a
    click handler.
  - >-
    Label text should describe the destination or setting on its own — avoid vague
    labels like "More", which carry no meaning out of context for assistive tech,
    search engines or AI agents parsing the page.
- type: related-components
  items:
  - label: List item group
    href: /components/list-item-group
    note: Wraps a set of items in a shared surface.
  - label: List item leading
    href: /components/list-item-leading
    note: Internal primitive for the leading icon/avatar/status slot.
  - label: List item trailing
    href: /components/list-item-trailing
    note: Internal primitive for the trailing control slot.
  - label: Menu item
    href: /components/menu-item
    note: The equivalent row for primary/navigation menus, rather than general lists.
  - label: Divider
    href: /components/divider
    note: Used internally when divider is set, and directly between ungrouped items.
---
