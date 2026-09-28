# Aa-pagination-counter

## Overview
`aa-pagination-counter` is a "page X of Y" control: a previous/next button pair (via `aa-pagination-control-button`) either side of an optional numeric label. Figma verification: `Paginatiion Counter` (node `12403:398`) [sic, as named in the source Figma file]. It's shown in the Pagination story alongside `aa-pagination-simple` as one of two pagination patterns, but has no dedicated story of its own beyond that combined view.

## Anatomy
1. **Previous control** (`aa-pagination-control-button`, `direction="previous"`) — steps back one page; disabled at the first page.
2. **Label** (`.label`) — optional "`page` of `total`" text, hidden when `show-label` is `false`.
3. **Next control** (`aa-pagination-control-button`, `direction="next"`) — steps forward one page; disabled at the last page.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `page` | number | `1` | Current page (1-indexed). |
| `total` | number | `999` | Total number of pages. |
| `show-label` (`showLabel`) | `boolean` | `true` | Shows/hides the "page of total" text between the controls. |

## Behaviour
- Clicking the previous control decrements `page` by 1 (no-op if `page <= 1`); clicking next increments it (no-op if `page >= total`).
- Each successful step fires a `page-change` custom event (`bubbles`, `composed`) with `detail: { page }`, so the consumer owns the actual data/content change.
- The previous button is disabled whenever `page <= 1`; the next button is disabled whenever `page >= total`.
- The label reads simply `${page} of ${total}` with no other formatting or truncation logic.
- No responsive breakpoints or transitions of its own beyond the buttons' shared interactive transition tokens.

## Usage

### When to use
- Paginating a single ordered set of content (e.g. table rows, a list, or a carousel) where "page X of Y" is the clearest way to communicate position, and stepping one page at a time is sufficient (no jump-to-page or numbered page links).
- When you want compact, icon-driven pagination controls rather than a row of numbered page buttons.

### When not to use
- When users need to jump to specific page numbers, not just step forward/back — build a numbered pagination pattern instead. _TODO: name the component once one exists._
- When there is no meaningful "page of total" framing (e.g. a small, fixed number of items like onboarding steps or a carousel) — use `aa-pagination-simple`'s dot indicator instead.

## Content guidance

### What to write
- The label text is generated automatically as "`page` of `total`" — there is no free-text content to author.
- Ensure `total` reflects the real number of pages so the label and disabled states stay accurate.

### How to write
- No copy decisions are needed beyond supplying accurate `page`/`total` values; the label format is fixed by the component and not configurable per the source read.
- _TODO: confirm whether "page X of Y" should ever be localised/pluralised differently — not covered in the source._

## Examples
- **Default counter** — `page="1"`, `total="999"`.
- **Middle page** — a non-boundary `page` value, both controls enabled.
- **First/last page** — respective control disabled.
- **Label hidden** — `show-label="false"`, controls only, no text between them.

## Things to consider
- The component manages its own `page` state internally as well as dispatching `page-change` — a consumer that also drives `page` via a reactive property should treat the dispatched event as the source of truth to avoid double-updating.
- `total` defaults to `999`, which is a placeholder value, not a real page count — always set a real `total` in production usage.
- Neither control carries its own accessible label (see `aa-pagination-control-button` docs) — _TODO: confirm whether this needs addressing at this composition level, since the counter doesn't add `aria-label` either._

## Accessibility

### Focus order
The previous and next buttons sit in the natural tab order as native `<button>` elements (via `aa-pagination-control-button`); a disabled control is removed from the tab order. The label, being plain text, is not focusable.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the focused previous/next button. |
| Space | Activates the focused previous/next button (native `<button>` behaviour). |

### ARIA
- No ARIA roles or attributes are applied by this component beyond what `aa-pagination-control-button` provides (none).
- _TODO: confirm whether a wrapping landmark (e.g. `role="navigation"`/`aria-label`) is expected — `aa-pagination-simple` sets `aria-label` on a `<nav>`, but `aa-pagination-counter` does not do the equivalent per the source read._

### SEO and AI discovery
- Renders real, focusable `<button>` elements rather than simulated click targets.
- The lack of an accessible name on the previous/next buttons and of a `nav`/label wrapper limits how well assistive tech, search engines, or AI agents can describe this control's purpose out of visual context — _TODO: flag for future improvement._

## Related components
- `aa-pagination-control-button` — the previous/next button used inside this component.
- `aa-pagination-simple` — an alternative dot-based pagination pattern for smaller, non-numbered sets.
