---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Selector
description: >-
  Selector is a card-style selection control that wraps a checkbox, radio or switch
  input in a richer, clickable card with a label, description, optional media, price
  and tags. It matches Figma's Single/Selector component (node 17348:7569), covering
  the Checkbox, Radio and Switch variants in one component.
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
    Card: the clickable <label> wrapping the whole control, with a border that thickens/recolours
    when checked and a dashed focus ring.
  - >-
    Control: the visible checkbox square, radio dot or switch track/thumb, depending
    on input-type.
  - >-
    Content: the label, description and optional helper disclosure (via Input label),
    plus optional tags and price rows.
  - >-
    Tags row (tags slot, shown when has-tags): arbitrary slotted content, typically
    Tag.
  - >-
    Price row (shown when has-price): a price value and a period (e.g. "From £16.19"
    / "month").
  - >-
    Media (media slot, shown when has-media): trailing visual area; falls back to
    a fixed 32px icon (icon property) when nothing is slotted.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Selector anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Checkbox
    description: Default input-type="checkbox".
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: Checkbox'
  - title: Selected checkbox
    description: checked true.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: Selected checkbox'
  - title: Radio
    description: input-type="radio".
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: Radio'
  - title: Switch
    description: input-type="switch".
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: Switch'
  - title: With helper
    description: Description collapsed behind a helper disclosure button.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: With helper'
  - title: With price
    description: Price row shown.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: With price'
  - title: With tags
    description: Tags row with slotted Tag content.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: With tags'
  - title: No media
    description: Trailing media area hidden.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: No media'
  - title: Radio group
    description: Two radio cards sharing a name, only one selectable at a time.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: Radio group'
  - title: State matrix
    description: Checkbox, radio, switch, helper, price, tags and no-media variants
      side by side.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: State matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Selecting
    description: >-
      Clicking anywhere on the card (it's a <label>) toggles the underlying native
      input and updates checked, dispatching a bubbling change event.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: selecting'
  - title: Radio grouping
    description: >-
      When inputType="radio" and a name is set, checking one card automatically
      unchecks every other Selector radio card sharing that name, scoped to the
      nearest ancestor <form> (or the document if there isn't one).
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: radio grouping'
  - title: Hover
    description: >-
      The control (checkbox/radio/switch) gets a hover background and border colour;
      the card border itself doesn't change on hover.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: hover'
  - title: Checked styling
    description: >-
      The card border switches to the primary border colour; the checkbox fills
      and shows a check icon, the radio dot scales in, or the switch thumb slides
      across and turns white, depending on input-type.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: checked styling'
  - title: Focus
    description: >-
      A dashed focus ring appears around the whole card (not just the control) on
      :focus-visible of the hidden native input, sitting behind the card so it doesn't
      affect its layout.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: focus'
  - title: Media fallback
    description: >-
      When nothing is slotted into media, a fixed 32px Icon (from the icon property)
      is shown instead; when something is slotted, it fully replaces the fallback
      icon.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: media fallback'
  - title: Border width stability
    description: >-
      The card's border is always rendered at the "selected" thickness, even when
      unchecked — only its colour changes on toggle, so nothing inside the card
      shifts by a pixel when the state changes.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: border width stability'
  - title: Responsive behaviour
    description: >-
      The card has a min-width of 180px and a max-width of 320px; content wraps
      within that range, and tags/price rows wrap onto multiple lines if needed.
    image: https://placehold.co/1280x720
    imageAlt: 'Selector: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Selector example: A single option that needs more visual weight or content
        than a plain checkbox/radio — e.g. product tiles with a price, an icon,
        or tags.
      label: Do
      caption: >-
        A single option that needs more visual weight or content than a plain checkbox/radio
        — e.g. product tiles with a price, an icon, or tags.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Selector example: A plain, low-context checkbox or radio with no supporting
        content — use Checkbox or Radio directly instead.
      label: Don't
      caption: >-
        A plain, low-context checkbox or radio with no supporting content — use
        Checkbox or Radio directly instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Selector example: Grouped, mutually exclusive choices with input-type="radio"
        and a shared name, where richer context (price, tags, media) helps the user
        compare options.
      label: Do
      caption: >-
        Grouped, mutually exclusive choices with input-type="radio" and a shared
        name, where richer context (price, tags, media) helps the user compare options.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Selector example: A single, isolated on/off setting with no surrounding
        card content — use Switch directly instead.
      label: Don't
      caption: >-
        A single, isolated on/off setting with no surrounding card content — use
        Switch directly instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Selector example: On/off toggles that benefit from a card layout, using
        input-type="switch".
      label: Do
      caption: On/off toggles that benefit from a card layout, using input-type="switch".
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Selector example: A long list of simple, text-only options — use Select
        for a more compact, scrollable list.
      label: Don't
      caption: >-
        A long list of simple, text-only options — use Select for a more compact,
        scrollable list.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep the label short and specific to the option being described (e.g. a product
    name or plan tier).
  - >-
    Use description for the one or two lines of supporting detail a user needs to
    decide, and helper only when that description is long enough to be worth collapsing.
  - >-
    Only enable has-tags/has-price when the option genuinely has that information
    — don't show an empty or placeholder price.
  - >-
    Keep tag content (via the tags slot) to short, scannable labels, consistent
    with Tag content guidance.
  - Use sentence case, not title case.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - Avoid adverbs like "simply", "just" or "easily".
  - >-
    Write prices exactly as agreed with the numbers style (e.g. "From £16.19 / month")
    rather than abbreviating or rounding without a reason.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Selector example: "Comprehensive cover"'
      label: Do
      caption: '"Comprehensive cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Selector example: "COMPREHENSIVE COVER"'
      label: Don't
      caption: '"COMPREHENSIVE COVER"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Selector example: "From £16.19 / month"'
      label: Do
      caption: '"From £16.19 / month"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Selector example: "16.19 quid a month"'
      label: Don't
      caption: '"16.19 quid a month"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Selector example: "Includes breakdown cover"'
      label: Do
      caption: '"Includes breakdown cover"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Selector example: "Simply includes breakdown cover"'
      label: Don't
      caption: '"Simply includes breakdown cover"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Radio grouping is scoped by shared name and nearest <form> ancestor (or the
    document) — cards outside that scope with the same name won't be kept in sync.
  - >-
    The icon fallback is fixed at 32px and not configurable — if a different size
    is needed, slot custom content into media instead.
  - >-
    Don't nest another interactive control (e.g. a button) inside the tags or media
    slot content in a way that would conflict with the card's own click target.
  - >-
    The card's minimum width (180px) can compress content on narrow layouts — check
    tag/price wrapping at small viewport widths.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: inputType (input-type)
      options: checkbox | radio | switch
      defaultValue: checkbox
      description: Which native input semantics and control visual the card uses.
    - name: checked
      options: boolean
      defaultValue: 'false'
      description: Whether the card is selected.
    - name: label
      options: string
      defaultValue: '''Label'''
      description: The card's visible label.
    - name: description
      options: string
      defaultValue: '''Description'''
      description: Supporting text shown under the label.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Button text that turns description into a collapsed disclosure instead of
        a plain line.
    - name: hasMedia (has-media)
      options: boolean
      defaultValue: 'true'
      description: 'Shows the trailing media area. Figma default: true.'
    - name: icon
      options: string
      defaultValue: '''car'''
      description: >-
        Icon name for the default media content, used only when nothing is slotted
        into media. Fixed at 32px — not configurable, matching Figma's Car fallback,
        which never varies.
    - name: hasPrice (has-price)
      options: boolean
      defaultValue: 'false'
      description: 'Shows the price row. Figma default: false.'
    - name: price
      options: string
      defaultValue: '''From £16.19'''
      description: The price value text.
    - name: pricePeriod (price-period)
      options: string
      defaultValue: '''/ month'''
      description: The price period text.
    - name: hasTags (has-tags)
      options: boolean
      defaultValue: 'false'
      description: 'Shows the tags row (content comes from the tags slot). Figma
        default: false.'
    - name: name
      options: string
      defaultValue: ''''''
      description: Form field name; also used to group radio cards together.
    - name: value
      options: string
      defaultValue: '''on'''
      description: The native input's value.
- type: accessibility
  focusOrder:
  - >-
    Selector participates in the natural tab order via its visually-hidden native
    <input>, which the <label> wraps. It occupies a single tab stop per card, consistent
    with Checkbox/Radio/Switch.
  keyboard:
  - key: Space
    action: >-
      Toggles the checkbox or switch; selects the radio if not already selected
      (native input behaviour).
  - key: Arrow keys
    action: >-
      Move selection between radio cards sharing the same name, within the browser's
      native radio-group behaviour.
  aria:
  - >-
    Native input type (checkbox or radio, with switch also rendering as a checkbox)
    provides the base semantics; no role override is used.
  - aria-label on the native input mirrors the visible label.
  - >-
    aria-describedby on the native input references the label's description/helper,
    plus the tags and price rows' ids when present, so assistive tech reads the
    full card context, not just the label.
  seo:
  - >-
    Renders a real native <input> wrapped in a <label>, not a simulated clickable
    <div>, so form semantics, focusability and state are native rather than recreated
    in script.
  - >-
    All card content relevant to the decision (label, description, tags, price)
    is wired into aria-describedby, so assistive technology and AI agents parsing
    the page get the same context a sighted user sees, not just the visible label
    text.
- type: related-components
  items:
  - label: Checkbox
    href: /components/checkbox
    note: The plain, low-context checkbox control this card wraps.
  - label: Radio
    href: /components/radio
    note: The plain, low-context radio control this card wraps.
  - label: Switch
    href: /components/switch
    note: The plain, low-context switch control this card wraps.
  - label: Select
    href: /components/select
    note: A more compact alternative for a longer list of simple, text-only options.
  - label: Tag
    href: /components/tag
    note: Typically slotted into the tags row.
  - label: Input label
    href: /components/input-label
    note: Supplies the label/description/helper row shared across form fields.
---
