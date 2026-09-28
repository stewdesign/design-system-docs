# Aa-input-helper

## Overview
`aa-input-helper` is an internal expand/collapse disclosure — "Helper ⌄" reveals a description with a left accent border, and the chevron flips to point up when open. It is not a static hint line (that's `description` set directly on `aa-input-label`/`aa-input-legend`) and is not part of the public component API — it is composed inside other inputs, so it has no story of its own.

It is built on native `<details>`/`<summary>` rather than a hand-rolled button plus `aria-expanded`, so keyboard and screen-reader open/closed semantics come from the platform for free. Figma's own markup only ever makes the "Helper" row itself clickable, so `<summary>` alone matches it exactly.

Figma reference: `.Helper` (node `19562:18753`).

## Anatomy
1. **Summary row** — clickable "Helper" text plus a chevron icon, rendered as a native `<summary>`.
2. **Chevron** (`aa-icon`, `chevron-down`) — flips 180 degrees when open.
3. **Collapse panel** — contains the `description` text, animates open/closed with a left accent border.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `helper` | string | `'Helper'` | The clickable summary text. |
| `description` | string | `'Description'` | The text revealed when the disclosure is open. |
| `open` | `boolean` | `false` | Reflects and controls the open/closed state of the `<details>`. |

## Behaviour
- Uses native `<details>`/`<summary>` — clicking the summary toggles `open`, which also dispatches a `toggle` event.
- The chevron rotates 180 degrees when open; the border colour of the collapse panel animates in alongside the reveal rather than being always visible.
- The collapse panel animates to a fixed maximum height (`6rem`) rather than `auto`, to avoid the height-transition stutter some browsers have with `auto` — taller content clips rather than reproducing that stutter.
- Under `prefers-reduced-motion: reduce`, the chevron rotation and collapse transitions are removed entirely.
- In Chromium, `content-visibility`/`block-size` are explicitly overridden on `::details-content` so the browser's own open/close handling never fights the component's own transition.

## Usage

### When to use
- Composed inside `aa-input-label` or `aa-input-legend` when `helper` is set, to turn a static description into a collapsed disclosure.

### When not to use
- As a standalone, general-purpose accordion — use `aa-accordion-item` for that.
- As a static hint line with no need to collapse — set `description` directly instead.

## Content guidance

### What to write
- Keep the `helper` summary text short — it's a label for the disclosure, not the content itself.
- Write `description` as the actual hint or explanation the user needs once expanded.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Write helper/description text for spoken word — concise and accurate, not patronising, since it may be read by a screen reader.
- Use British English spelling throughout.

## Examples
_TODO: no dedicated story exists for this component — it is only exercised indirectly via `aa-input-label`/`aa-input-legend` stories that set `helper`._

## Things to consider
- Not part of the public component API — it has no story of its own and isn't intended to be used directly by consumers outside of `aa-input-label`/`aa-input-legend`.
- Only one of `description` or `helper` is shown by the parent component at a time — they don't stack.

## Accessibility

### Focus order
The `<summary>` element is a native focusable element and sits in the natural tab order at the point the component is composed.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Toggles the disclosure open/closed (native `<summary>` behaviour). |
| Space | Toggles the disclosure open/closed (native `<summary>` behaviour). |

### ARIA
- No custom ARIA is applied — open/closed semantics come from the native `<details>`/`<summary>` elements rather than a hand-rolled `aria-expanded` pattern.
- The chevron icon is marked `aria-hidden="true"` since it's purely decorative alongside the text.

### SEO and AI discovery
_TODO: not determinable from source — no SEO/AI-specific behaviour documented; not a standalone public component so not typically an independent target for discovery._

## Related components
- `aa-input-label` — composes `aa-input-helper` when `helper` is set.
- `aa-input-legend` — composes `aa-input-helper` when `helper` is set.
- `aa-accordion-item` — the general-purpose, standalone equivalent for expand/collapse content.
