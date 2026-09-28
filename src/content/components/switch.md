---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
title: Switch
description: >-
  Switch is a toggle control for a single on/off setting that takes effect immediately,
  without a separate save or submit action. It renders as a labelled toggle track
  by default, or as an icon-only "atom" track with no visible label, description
  or helper.
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
    Track (part="control"): the pill-shaped background that shows checked/unchecked
    state.
  - >-
    Thumb: the circular indicator inside the track that slides between unchecked
    (start) and checked (end) positions.
  - >-
    Label: the control's name, rendered via Input label. Hidden visually in the
    atom variant, but still exposed to assistive tech via aria-label.
  - 'Description: an optional plain line of supporting copy under the label.'
  - >-
    Helper: an optional expand/collapse disclosure that replaces the description
    line with a toggleable one. Figma never shows both description and helper at
    once, so helper wins if both are set.
  image: https://placehold.co/1280x720
  imageAlt: Labelled Switch anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Off / On
    description: Default unchecked and checked states.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: Off / On'
  - title: With description
    description: A static supporting line under the label.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: With description'
  - title: With helper
    description: The description collapsed behind an expand/collapse disclosure.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: With helper'
  - title: Label start
    description: Label positioned before the track instead of after.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: Label start'
  - title: Atom
    description: Icon-only track with no visible label, description or helper.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: Atom'
  - title: State matrix
    description: Off/on, start/end position and atom variants shown together for
      comparison.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: State matrix'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Toggling
    description: >-
      Clicking or activating the control flips checked and dispatches a bubbling,
      composed change event — the same pattern as a native checkbox.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: toggling'
  - title: Hover
    description: >-
      The track's border and background shift to hover tokens; the thumb is unaffected.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: hover'
  - title: Checked
    description: >-
      The track's border/background switch to "checked" tokens, and the thumb slides
      from the start to the end of the track (translateX) and recolours to white.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: checked'
  - title: Focus
    description: >-
      A dashed focus ring appears around the track on :focus-visible, expanding
      outward from the track's edge rather than sitting flush against it.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: focus'
  - title: Label/description/helper layout
    description: >-
      In position="end" (the default), the label and track are spread to the row's
      opposite edges; in position="start", they simply read left to right (track,
      gap, label) — matching Figma's two distinct position variants rather than
      one shared justification.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: label/description/helper layout'
  - title: Transitions
    description: >-
      Track colour and focus-ring changes use the shared interactive/focus-ring
      transition tokens; the thumb additionally animates its slide over 160ms.
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: transitions'
  - title: Responsive behaviour
    description: >-
      default fills the width of its container (width: 100%); atom sizes to its
      content only (display: inline-flex, width: auto).
    image: https://placehold.co/1280x720
    imageAlt: 'Switch: responsive behaviour'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Switch example: A single setting that applies immediately when changed,
        with no separate confirmation step (e.g. enabling notifications, turning
        a feature on or off).
      label: Do
      caption: >-
        A single setting that applies immediately when changed, with no separate
        confirmation step (e.g. enabling notifications, turning a feature on or
        off).
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Switch example: A choice that requires an explicit save/submit action before
        taking effect — use Checkbox instead.
      label: Don't
      caption: >-
        A choice that requires an explicit save/submit action before taking effect
        — use Checkbox instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Switch example: Icon-only, space-constrained contexts where a full label
        isn't needed visually — use variant="atom", but still supply label for assistive
        tech.
      label: Do
      caption: >-
        Icon-only, space-constrained contexts where a full label isn't needed visually
        — use variant="atom", but still supply label for assistive tech.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Switch example: Selecting one option from a list of two or more mutually
        exclusive choices that aren't simply "on/off" — use a radio group.
      label: Don't
      caption: >-
        Selecting one option from a list of two or more mutually exclusive choices
        that aren't simply "on/off" — use a radio group.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Switch example: Settings where the current state (on/off) is the primary
        thing the user needs to see at a glance.
      label: Do
      caption: >-
        Settings where the current state (on/off) is the primary thing the user
        needs to see at a glance.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Switch example: Multiple independent selections from a list — use Checkbox
        in a group, not a set of switches.
      label: Don't
      caption: >-
        Multiple independent selections from a list — use Checkbox in a group, not
        a set of switches.
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Label the setting being controlled, not the action of toggling it, e.g. "Marketing
    emails", not "Toggle marketing emails".
  - >-
    Use description for a short, static line of extra context that's always relevant.
  - >-
    Use helper only when the extra context is long enough to warrant hiding it behind
    a disclosure by default — don't set both description and helper, since helper
    always wins and description will be silently dropped from view.
  - >-
    Keep labels short enough that they don't wrap awkwardly next to the track on
    mobile.
  - Use sentence case, not title case.
  - Use British English spelling throughout (e.g. "Customise", not "Customize").
  - >-
    Avoid adverbs like "simply", "just" or "easily" — what feels easy to one person
    may not be to another.
  - >-
    Use the Harvard comma, not the Oxford comma, when writing a list of three or
    more items in sentence form.
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Switch example: "Marketing emails"'
      label: Do
      caption: '"Marketing emails"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Switch example: "Toggle marketing emails"'
      label: Don't
      caption: '"Toggle marketing emails"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Switch example: "Location sharing"'
      label: Do
      caption: '"Location sharing"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Switch example: "Simply turn on location sharing"'
      label: Don't
      caption: '"Simply turn on location sharing"'
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: 'Switch example: "Get breakdown updates by text"'
      label: Do
      caption: '"Get breakdown updates by text"'
    - image: https://placehold.co/1280x720
      imageAlt: 'Switch example: "Get breakdown updates by text:"'
      label: Don't
      caption: '"Get breakdown updates by text:"'
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    Setting both description and helper is redundant — helper always wins, so description
    is never shown.
  - >-
    atom still requires a meaningful label even though it isn't rendered visually
    — it's the only accessible name the control has.
  - >-
    The native checkbox input is visually hidden (clipped, not display: none) so
    it stays part of the accessibility tree and focus order.
  - >-
    Label length isn't truncated by the component — long labels will wrap, so keep
    copy concise per the content guidance above.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: checked
      options: boolean
      defaultValue: 'false'
      description: Whether the switch is on. Reflected as an attribute.
    - name: variant
      options: default | atom
      defaultValue: default
      description: >-
        default shows label/description/helper alongside the track; atom renders
        the track alone, icon-only, with no visible copy.
    - name: position
      options: start | end
      defaultValue: end
      description: >-
        Places the label before (start) or after (end) the track. Has no effect
        on atom, which has no label to position.
    - name: label
      options: string
      defaultValue: '''Label'''
      description: >-
        The switch's name. Used as visible label text on default, and as the aria-label
        fallback text on atom.
    - name: description
      options: string
      defaultValue: ''''''
      description: >-
        Optional plain line of supporting copy shown under the label. Ignored if
        helper is set.
    - name: helper
      options: string
      defaultValue: ''''''
      description: >-
        Optional disclosure button text that turns description into an expand/collapse
        disclosure instead of a plain line. Wins over description when both are
        set.
    - name: name
      options: string
      defaultValue: ''''''
      description: Native form field name, forwarded to the underlying checkbox
        input.
    - name: value
      options: string
      defaultValue: '''on'''
      description: Native form field value submitted when checked.
- type: accessibility
  focusOrder:
  - >-
    Switch renders a native <input type="checkbox">, visually hidden but present
    in the DOM, so it participates in the natural tab order at its position in the
    document.
  keyboard:
  - key: Tab
    action: Moves focus to/from the switch in document order.
  - key: Space
    action: Toggles the switch (native checkbox behaviour).
  aria:
  - >-
    aria-describedby — points at the Input label host's id when a description or
    helper is set on variant="default", since the description/helper text lives
    behind that component's own shadow boundary with no inner id to target directly.
  - >-
    aria-label — applied on variant="atom", using label (or "Switch" as a fallback)
    as the accessible name, since no visible label text is rendered.
  - >-
    No role override is needed — the native <input type="checkbox"> provides switch/checkbox
    semantics directly.
  seo:
  - >-
    Renders a real native checkbox input rather than a simulated toggle built from
    <div>s, so state, focusability and form participation are native.
  - >-
    label should describe the setting being controlled in plain terms, since it
    doubles as the accessible name on atom and as visible copy on default — avoid
    vague labels that carry no meaning out of context for assistive tech or AI agents
    parsing the page.
- type: related-components
  items:
  - label: Checkbox
    href: /components/checkbox
    note: >-
      For settings that require an explicit save/submit action, or for multi-select
      lists.
  - label: Input label
    href: /components/input-label
    note: Internal primitive that renders the switch's label, description and helper
      text.
  - label: Input helper
    href: /components/input-helper
    note: Internal primitive that renders the expand/collapse disclosure used by
      helper.
---
