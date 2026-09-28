# Aa-segmented-control

## Overview
`aa-segmented-control` is a compact control for switching between a small set of mutually exclusive views or filters without leaving the page. It wraps a group of `aa-pill` children, owns their exclusive selection state, and provides arrow-key roving focus across them, matching Figma's `Segmented Control` component (node `16778:5067`), built on `.Segmented Pill` (node `17285:15725`).

## Anatomy
1. **Track** — the pill-shaped container (`role="radiogroup"`) that holds the pills and applies the shared background, padding and spacing.
2. **Pills** (`aa-pill`, slotted) — the individual options. Each pill renders its own default/hover/active/focus states and may include a leading icon slot or a notification badge.
3. **Leading icon** (within a pill, `icon` slot) — optional icon shown before a pill's label.
4. **Badge** (within a pill, `badge` attribute) — optional notification dot shown on a pill.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `size` | `small` \| `large` | `small` | Fans out to every child pill that doesn't set its own `size` attribute. |

`aa-pill` (child) properties relevant to composing a segmented control:

| Property | Options | Default | Description |
|---|---|---|---|
| `active` | `boolean` | `false` | Marks the currently selected pill. The parent enforces exactly one active pill at a time. |
| `size` | `small` \| `large` | `small` | Overrides the size inherited from the parent when set explicitly on the pill. |
| `badge` | `boolean` | `false` | Shows a small notification dot on the pill. |

## Behaviour
- **Selection**: clicking a pill activates it and deactivates every other pill in the group; exactly one pill is active at all times. If no pill is marked `active` on connect, the first pill becomes active.
- **Roving focus**: arrow keys move both selection and focus between pills. `ArrowRight`/`ArrowDown` move to the next pill, `ArrowLeft`/`ArrowUp` to the previous, wrapping around at either end; `Home`/`End` jump to the first/last pill.
- **Size fan-out**: setting `size` on the wrapper only affects pills that don't already declare their own `size` attribute — an explicit `size` on a pill always wins.
- **Active pill styling**: an active pill gets a filled background, a distinct text colour and a bold weight; at `size="large"`, the active state also steps the type down to the medium scale rather than reusing large's own size, since bold at the larger size read as too heavy in Figma.
- **Hover**: inactive pills get a secondary background on hover; the active pill has no separate hover treatment.
- **Focus**: a dashed focus ring appears around the focused pill via `:focus-visible`, matching the shared focus-ring token used elsewhere in the design system.
- **Responsive behaviour**: the control has no responsive breakpoints of its own; it sizes to its content and will overflow if its container is too narrow — long labels or many pills should be checked against the available width.

## Usage

### When to use
- Switching between 2-4 closely related views, filters or time ranges that are visible on the same screen (e.g. "Monthly" / "Annual").
- Compact, single-selection choices where all options should be visible at once, unlike a dropdown.
- Content that benefits from an icon or a notification badge alongside a short label.

### When not to use
- More than a handful of options, or options with long labels — use `aa-select` or a tab pattern instead.
- Navigating to a different page or route — segmented control is for in-page state, not navigation; use `aa-button` or standard links for navigation.
- Multi-select choices — this component enforces single selection only, matching native radio-group semantics.

## Content guidance

### What to write
- Keep pill labels to one or two words so the whole group stays legible at a glance and doesn't wrap.
- Use parallel wording across all pills in a group (e.g. all nouns, or all time periods) so the set reads as one family of options.
- Only add a badge when there's something genuinely new or requiring attention behind that option.

### How to write
- Use sentence case, not title case.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout (e.g. "Customise", not "Customize").

| Do ✅ | Don't ❌ |
|---|---|
| "Monthly" | "View by Month" |
| "Cars" | "All of your Cars" |
| "New" (badge) | "!!! NEW !!!" |

## Examples
- **Small segmented control** — default size, 2-3 options.
- **Large segmented control** — larger touch target and type scale.
- **Option counts** — 2, 3 and 4-option variants side by side.
- **With icons** — each pill preceded by a leading icon.
- **With badge** — a pill showing a notification dot.

## Things to consider
- The wrapper doesn't limit how many pills you add — check readability and available width before using more than 3-4 options.
- Don't set `active` on more than one pill; the component doesn't validate this and will simply follow whichever pill last dispatched a select event.
- `aa-pill` is an internal primitive — it has no story of its own and isn't intended to be reached for directly outside `aa-segmented-control`.

## Accessibility

### Focus order
The control occupies a single stop in the surrounding tab order. Only the active pill is in the tab sequence (`tabindex="0"`); every other pill is `tabindex="-1"` and reached via arrow keys, matching the standard roving-tabindex radio-group pattern.

### Keyboard interactions

| Key | Action |
|---|---|
| Arrow right / Arrow down | Moves selection and focus to the next pill, wrapping to the first. |
| Arrow left / Arrow up | Moves selection and focus to the previous pill, wrapping to the last. |
| Home | Moves selection and focus to the first pill. |
| End | Moves selection and focus to the last pill. |

### ARIA
- `role="radiogroup"` on the track — the group of pills behaves as a single-selection radio group.
- `role="radio"` and `aria-checked` on each `aa-pill` — reflects whether that pill is currently active.
- Roving `tabindex` (`0` on the active pill, `-1` on the rest) keeps the group as one tab stop while allowing arrow-key navigation between pills.

### SEO and AI discovery
- Renders as real, focusable `<button>` elements inside a semantic radiogroup rather than generic clickable `<div>`s, so assistive technology and automated agents can identify and operate it reliably.
- Pill label text should stand on its own without relying on surrounding page context, since it's the only accessible name exposed for each option.

## Related components
- `aa-select` — a dropdown alternative for a longer list of options that doesn't need to stay fully visible.
- `aa-button-group` — for a set of independent actions rather than a single mutually exclusive choice.
- `aa-icon` — supplies the optional leading icon slotted into a pill.
