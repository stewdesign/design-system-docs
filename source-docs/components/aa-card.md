# Aa-card

## Overview
`aa-card` is a flexible content surface combining an optional image, icon, tag and action button around a slotted content area. It's used for feature highlights, cover/product summaries, and any card-based content block, individually or grouped via `aa-card-group`.

Figma verification: `.Card Primitive` (node `12882:11997`) and its public face `Card` (node `17127:11019`) — Default/Flat/Filled × Vertical/Horizontal × Icon position Default/Right, plus Hover/Focus states.

## Anatomy
1. **Image** (optional) — a top (vertical) or leading-column (horizontal) image, with a configurable aspect ratio.
2. **Tag slot** (`tag`) — an optional `aa-tag`, overlaid on the image's top-left corner.
3. **Icon slot** (`icon`) — an optional icon (e.g. `aa-brand-icon`/`aa-icon`), positioned by `icon-position`.
4. **Content slot** (default) — the card's heading (styled as an `h3`) and body copy, entirely authored by the consumer.
5. **Action slot** (`action`) — an optional button (e.g. `aa-button`) at the bottom of the card.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `filled` \| `flat` | `filled` | Whether the card has its own filled surface and radius, or is unstyled with the image carrying the visual shape instead. |
| `orientation` | `vertical` \| `horizontal` | `vertical` | Vertical stacks image above content; horizontal places a narrow image column beside the content. |
| `icon-position` | `default` \| `right` | `default` | Whether the icon sits above/before the content or trails it. |
| `image-src` | string | `''` | Image URL. Omitting it renders no image at all. |
| `image-alt` | string | `''` | Alt text for the image. |
| `image-ratio` | `1x1` \| `16x9` \| `4x3` | `16x9` | Top image's aspect ratio. Only meaningful for `orientation="vertical"` — horizontal's image column already pins both dimensions. |

## Behaviour
- **Hover/press**: filled cards with real action content (`has-action` reflects automatically when the `action` slot has assigned elements) lift with a shadow on hover and show a focus ring outline within the card when a nested control is focused. A card with no action content shows no interactive hover treatment.
- **Icon/tag/action visibility**: each of these slots is hidden entirely (not just visually) unless real content is assigned to it, detected via `slotchange`.
- **Layout by orientation**:
  - `vertical`: image on top (rounded on its top corners for `filled`, or fully rounded for `flat`, which has no card-level surface of its own), icon above the content by default or trailing beside it when `icon-position="right"`.
  - `horizontal`: a narrow image column (40% width, capped at 160px) beside the content, with the heading and icon sharing a row and body copy spanning the full width beneath.
- **Direct `h3` styling**: any `<h3>` slotted directly is styled to match Heading 5 visually while keeping its real semantic level — same pattern as `aa-accordion`'s heading slot.
- **Responsive behaviour**: the card sizes to 100% of its container in both dimensions; no dedicated breakpoints of its own beyond what `aa-card-group`'s row layout provides.

## Usage

### When to use
- Presenting a self-contained piece of content (a feature, a cover option, a service) with an optional image, icon and call-to-action.
- Inside `aa-card-group` for an equal-height row of related cards.
- Either with a real link/button action (interactive, hover-responsive) or as a purely informational block with no action.

### When not to use
- A simple text-only content block with no card framing — use plain content in `aa-container` instead.
- A clickable card with no visible action content — set a real action (button/link) in the `action` slot rather than relying on the whole card surface being implicitly clickable; the hover/focus treatment only activates when real action content is present.
- Displaying tabular or list-style data — use a table or list component instead.

## Content guidance

### What to write
- The heading (slotted `<h3>`) should be short and specific to the card's content — avoid generic labels.
- Body copy should be concise enough to fit comfortably within the card without excessive scrolling or truncation (the component doesn't truncate long text).
- Only add an action button if there's a real next step for the user to take from this card.

### How to write
- Use sentence case for the heading and any action button label.
- Follow `aa-button`'s content guidance for the action slot — frontloaded active verbs, specific labels, no generic wording like "Find out more".
- Use British English spelling throughout.
- `image-alt` should describe the image's real content concisely, not restate the heading.

| Do ✅ | Don't ❌ |
|---|---|
| "Unlimited call-outs" | "Great feature!" |
| Action: "Choose cover" | Action: "Find out more" |

## Examples
- **Default (vertical, filled)** — image, icon, content and action.
- **Flat** — no card-level surface; the image carries the visual shape instead.
- **Horizontal** — narrow leading image column beside the content.
- **Icon right** — icon trailing the content instead of leading it.
- **With image** — image plus an overlaid tag.
- **Without action** — content-only card, no action slot populated.
- **State matrix** — default, hover, and focus states shown together for comparison.

## Things to consider
- `image-ratio` has no visible effect in `orientation="horizontal"` — the image column's width and height are already both pinned, leaving aspect-ratio nothing to do.
- The hover lift and focus ring are gated on `has-action` — a purely informational card (no action slot content) intentionally shows no interactive affordance, even if it's technically hoverable.
- Don't nest more than one interactive element inside the action slot expecting independent behaviour — it's designed for a single button or link.
- Long headings will wrap rather than truncate; keep them short enough to read cleanly at the card's expected width.

## Accessibility

### Focus order
The card itself is not focusable. Focus order follows the natural document order of any interactive content slotted inside it — most commonly the action button, reached in normal tab order at the card's position on the page.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Activates the focused action button or link inside the card (native behaviour of the slotted control, e.g. `aa-button`). |

### ARIA
- No custom ARIA roles are applied to the card container itself.
- A slotted `<h3>` retains its real semantic heading level even though it's visually styled as a smaller heading — this keeps the page's heading outline correct for assistive technology.
- Icon, tag and action regions are hidden via the `[hidden]` attribute/CSS override when empty, so assistive technology doesn't announce empty containers.

### SEO and AI discovery
- Content (heading, body copy) is real, crawlable text — not rendered as an image or background, so search engines and AI agents can read it directly.
- Because the heading retains its true semantic level regardless of visual size, ensure the level chosen fits correctly into the surrounding page's heading outline (e.g. via `aa-card-group`'s `heading-level`, or directly when using `aa-card` standalone).
- `image-alt` should be set whenever the image conveys meaning beyond decoration, so it's discoverable to visually impaired users and to any AI agent parsing page content.

## Related components
- `aa-card-group` — the surrounding equal-height row layout for multiple cards.
- `aa-container` — a simpler, unstyled surface without a card's image/icon/tag/action anatomy.
- `aa-tag` — supplies the optional tag overlaid on the card's image.
- `aa-button` — typically supplies the action slot content.
