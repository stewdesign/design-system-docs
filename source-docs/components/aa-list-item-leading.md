# Aa-list-item-leading

## Overview
`aa-list-item-leading` is an internal primitive that positions the leading element (icon, avatar or status indicator) inside an `aa-list-item`. It is not meant to be reached for directly outside that context, and has no story of its own in Storybook — this doc covers its structure for engineers building or extending `aa-list-item`, not as a component designers pick independently.

## Anatomy
1. **Leading wrapper** (`.leading`, `part="leading"`) — an inline-flex box, centring its slotted content, whose visual treatment depends on `type`.
2. **Default slot** — holds whatever is passed in: an `aa-icon`/`aa-brand-icon` for `type="icon"`, an `aa-avatar` for `type="avatar"`, or a small icon for `type="status"`.

_TODO: reference a labeled anatomy diagram once one exists in Figma (node `19324:6349`, `.Leading-Element`)._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `type` | `icon` \| `avatar` \| `status` | `icon` | Visual treatment of the leading element. `icon` renders a 36px light-grey rounded box; `avatar` renders its slot bare (since `aa-avatar` already has its own circular treatment); `status` renders a smaller coloured circle. |
| `intent` | `info` \| `positive` \| `warning` \| `danger` | `info` | Colour tone applied only when `type="status"` — sets the status circle's background and icon colour. |

## Behaviour
- **`icon`**: a fixed 36×36px rounded box with a light-grey (`--surface-default-secondary`) background — the same box used for both Figma's "Leading Icon" and "Illustration" treatments, since both are visually identical and only differ in what's slotted inside.
- **`avatar`**: no extra chrome is applied — the slotted `aa-avatar` renders exactly as it would standalone, since it already owns its own circular shape.
- **`status`**: a smaller, fully-rounded circle whose background and icon colour are set from `intent` via the `--aa-list-item-leading-color`/`--aa-list-item-leading-background` custom properties, computed inline per render.
- No other interaction states — this is a purely presentational wrapper with no hover, focus or disabled behaviour of its own.

## Usage

### When to use
- Exclusively inside `aa-list-item`'s `slot="leading"`, to present an icon, avatar or status indicator ahead of the item's label/description.

### When not to use
- Standalone, outside of `aa-list-item` — it has no independent story or usage pattern and exists purely to support that parent component.
- As a general-purpose icon container elsewhere in the system — use `aa-icon` (optionally with its own background styling) directly instead.

## Content guidance

### What to write
- _TODO: not applicable — `aa-list-item-leading` has no text content; any labelling belongs to the slotted icon/avatar or the parent `aa-list-item`._

### How to write
- _TODO: not applicable — see content guidance for `aa-list-item`._

## Examples
_TODO: `aa-list-item-leading` has no story of its own — see `src/stories/components/list-item.stories.ts` for usage in context: a car icon (`type="icon"`, default), an avatar (`Avatar` story, `type="avatar"`), and a positive status bullet with a check icon (`Status` story, `type="status" intent="positive"`)._

## Things to consider
- `type="icon"` and `type="avatar"` share the same generic slot — passing an `aa-avatar` into a `type="icon"` leading element (or vice versa) will render incorrectly, since the wrapper's chrome assumes a matching slot content.
- Sizing of the slotted icon (e.g. `size="20"`) is the consumer's responsibility — the wrapper does not enforce or override it, unlike `aa-button`'s icon slots.
- `intent` only has a visible effect when `type="status"` — setting it alongside `type="icon"` or `type="avatar"` has no effect.

## Accessibility

### Focus order
`aa-list-item-leading` is not focusable and introduces no tab stop — it is purely decorative positioning around content that, if interactive, would need its own focus handling (which is not the pattern used here; leading elements are presentational).

### Keyboard interactions
_TODO: not applicable — `aa-list-item-leading` has no interactive behaviour._

### ARIA
- No roles, states or properties are applied by `aa-list-item-leading` itself.
- _TODO: confirm whether the leading element (particularly `type="status"`) should be marked `aria-hidden="true"` when it's purely decorative alongside a text label, or whether its slotted icon already handles this._

### SEO and AI discovery
- Renders a plain `<span>` — no semantic meaning is added or implied; any meaning should come from the `aa-list-item`'s own label/description text, not this wrapper.

## Related components
- `aa-list-item` — the parent component this primitive is designed exclusively to support, via `slot="leading"`.
- `aa-list-item-trailing` — the equivalent primitive for the trailing side of an `aa-list-item`.
- `aa-icon` / `aa-brand-icon` — commonly slotted into `type="icon"`.
- `aa-avatar` — commonly slotted into `type="avatar"`.
