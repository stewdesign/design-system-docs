# Aa-card-group

## Overview
`aa-card-group` presents a heading and subheading above a responsive row of `aa-card` elements, laid out with equal-height rows so every card in a row matches the tallest one. It's used for feature grids, product/cover comparisons, and similar card-based sections.

Figma verification: `Card-Group` (node `17131:11397`) — Card Orientation Vertical/Horizontal × Icon position Default/Right.

## Anatomy
1. **Heading** — rendered through `aa-heading` at a consumer-chosen semantic level (`heading-level`, default 2), with an optional subheading.
2. **Cards row** — a real `aa-columns auto` layout containing `aa-card` elements nested in the default slot.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `heading` | string | `''` | Group heading text. Hidden entirely if empty. |
| `subheading` | string | `''` | Optional supporting text under the heading. |
| `heading-align` | `center` \| `start` | `center` | Alignment of the heading/subheading block. `start` is not a Figma variant but is useful once the group sits in a narrower column (e.g. a sidebar). |
| `heading-level` | number (1–6, `AaHeadingLevel`) | `2` | Semantic heading level, passed through to `aa-heading`. Since this system ties heading size to semantic level, picking a size means picking the level. |

## Behaviour
- **Heading only touches the heading**: `headingAlign`/`headingLevel` affect only the heading block, never the cards row itself.
- **Equal-height rows**: cards are laid out via a real `aa-columns auto` with `align-items: stretch`, so every card in a row matches the tallest card's height — same as Figma's aligned button baselines.
- **Entrance animation**: cards animate in with a staggered entrance effect when the group scrolls into view (`aaMotionStaggerStyles`/`observeEntrance`).
- **Responsive behaviour**: the cards row wraps responsively via `aa-columns`, with each card capped at a maximum width (500px) so cards don't stretch excessively wide in a single-column layout.

## Usage

### When to use
- A grid or row of related `aa-card` elements under a shared heading — feature highlights, cover options, service categories.
- When cards should align to equal height across a row regardless of content length.

### When not to use
- A single card with no group heading — use `aa-card` directly.
- Free-form or custom layouts needing more control than a heading-plus-cards-row pattern — nest `aa-columns` directly instead.
- Splitting arbitrary content left/right — use `aa-columns` or `aa-container` for general layout needs.

## Content guidance

### What to write
- Keep the group heading short and descriptive of the whole set, not a repeat of any individual card's content.
- Use the subheading, when present, to add brief supporting context — not a duplicate of the heading.
- Ensure each nested card follows its own content guidance (see `aa-card`).

### How to write
- Use sentence case for heading and subheading.
- Use British English spelling and specific, active wording — avoid generic headings like "More options".
- Keep the heading concise enough not to wrap awkwardly at the group's own content width.

| Do ✅ | Don't ❌ |
|---|---|
| "Choose your cover level" | "Options" |
| "Compare our breakdown plans" | "Click to compare" |

## Examples
- **Default** — centred heading above a card row.
- **Start-aligned heading** — heading aligned to the start, e.g. inside a narrower sidebar layout.
- **Without heading** — cards row only, no heading block rendered.
- **Custom heading level** — a different semantic level (e.g. `heading-level="3"`) used to fit the page's outline.

## Things to consider
- The heading is hidden entirely (not just visually collapsed) when `heading` is empty — don't rely on an empty string to reserve visual space.
- `heading-align="start"` is a deliberate addition beyond the Figma spec for narrower-column use — confirm with design before using it in a full-width page context where the centred default is expected.
- Cards are capped at 500px max-width via `::slotted(aa-card)` — a very wide container with few cards may leave more empty space than expected around each card.

## Accessibility

### Focus order
The group itself introduces no focus stops. Focus order follows the natural order of the heading (non-interactive) followed by each card's own interactive elements (e.g. action buttons), in DOM/visual order.

### Keyboard interactions
_TODO: no keyboard interactions specific to the group — interactive behaviour comes entirely from nested `aa-card` action content._

### ARIA
- No custom ARIA roles are applied by the group itself.
- The heading renders through `aa-heading`, which uses a real semantic heading element at the level the consumer specifies — this keeps the page's heading outline correct.

### SEO and AI discovery
- Uses a real semantic heading (via `aa-heading`) at a level the consumer controls, helping search engines and AI agents correctly place this section within the page's outline.
- Cards nested inside remain real content elements (headings, paragraphs, links/buttons), so their text and actions stay independently discoverable regardless of the group's own layout wrapper.

## Related components
- `aa-card` — the individual card component nested inside the group.
- `aa-columns` — the underlying layout primitive used for the equal-height cards row; also usable directly for other layouts.
- `aa-heading` — renders the group's heading/subheading at a chosen semantic level.
