# Aa-tag

## Overview
`aa-tag` is a small labelled pill used to surface a status, category or classification inline with other content. One component covers three distinct Figma component sets — semantic colour tags, member benefit tier badges and road/motorway signals — since they all share the same underlying pill shape.

## Anatomy
1. **Icon area** (`icon` slot, `leading-icon` property) — optional leading icon, falling back to a generic info icon, shown before the label. Semantic colour variants only.
2. **AA mark** — a small AA logo mark shown instead of an icon, fixed to the tier variants (`gold`/`silver`/`bronze`).
3. **Label** (default `slot`) — the tag's text content.

Figma verification: `Default` (node `17020:7297`, semantic colour tags), `Tiers` (node `17020:7334`, member benefits tiers only) and `Signals` (node `17020:7378`, road/motorway indicators) — three component sets in Figma, one component here since they're all the same "small labelled pill" shape underneath.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `brand` \| `neutral` \| `informational` \| `positive` \| `warning` \| `danger` \| `gold` \| `silver` \| `bronze` \| `motorway` \| `a-road` \| `road` | `brand` | Selects which of the three tag families renders and its colour. |
| `emphasis` | `subtle` \| `strong` | `subtle` | Contrast level for the semantic colour variants. Does not apply to tier or signal variants. |
| `size` | `large` \| `small` | `large` | Overall padding of the tag. |
| `leadingIcon` (`leading-icon`) | `boolean` | `true` | Shows the leading icon area. Only applies to the semantic colour variants. |

## Behaviour
- **Semantic colour tags** (`brand`, `neutral`, `informational`, `positive`, `warning`, `danger`) — render an icon slot (unless `leading-icon` is false) followed by the slotted label text, at `subtle` or `strong` emphasis.
- **Tier badges** (`gold`, `silver`, `bronze`) — render a fixed AA mark plus a fixed label ("Gold", "Silver" or "Bronze") rather than slotted content; a metallic gradient background and rim colour are literal values with no design token equivalent, and `emphasis` does not apply.
- **Signal tags** (`motorway`, `a-road`, `road`) — render only the slotted content, no icon and no emphasis. `motorway` is a fixed 32px square regardless of label length; `a-road` and `road` grow to fit their text.
- **Warning** keeps the same dark text colour at both emphases, since the strong orange background does not have sufficient contrast for white text — this differs from every other semantic colour, which switches to white text at `strong` emphasis.
- **Transitions/responsive behaviour**: _TODO: not specified in source — the tag has no interactive states (hover/focus/disabled) since it is not an interactive element._

## Usage

### When to use
- Indicating a status or category next to other content, e.g. a policy state or a classification label.
- Displaying a member's benefit tier (`gold`/`silver`/`bronze`).
- Displaying a road classification or motorway number in journey or breakdown-related content.

### When not to use
- As an interactive control — `aa-tag` is not clickable or focusable; use `aa-button` or `aa-tile` for actions.
- As a dismissible filter chip or removable input value — _TODO: check whether a dedicated chip/filter component exists._
- For a longer message with supporting detail — use `aa-message` instead.

## Content guidance

### What to write
- Keep labels to a single short word or phrase — tags are pills, not sentences.
- For tier tags, the label is fixed by the component (`Gold`/`Silver`/`Bronze`) and cannot be overridden.
- For signal tags, use the exact road or motorway identifier a user would recognise, e.g. "M1" or "A22".

### How to write
- Use sentence case.
- Use British English spelling throughout.
- Avoid adverbs like "simply", "just" or "easily".
- Use the Harvard comma, not the Oxford comma, in any surrounding copy that lists tags.

| Do ✅ | Don't ❌ |
|---|---|
| "Gold" | "GOLD MEMBER" |
| "M1" | "Motorway: M1" |
| "New" | "This is a brand new offer!" |

## Examples
- **Semantic colour tag** — default `brand` variant with leading icon, subtle emphasis.
- **Strong emphasis tag** — `emphasis="strong"` across each semantic colour.
- **Small tag** — `size="small"`.
- **Tag without icon** — `leading-icon="false"`.
- **Gold/silver/bronze tier tags** — fixed AA mark and label, at both sizes.
- **Motorway tag** — fixed 32px square, e.g. "M1".
- **A-road tag** — e.g. "A22".
- **Road tag** — e.g. "Standard road name".
- **Variant matrix** — all semantic colours at both emphases, all tiers, all signals, side by side.

## Things to consider
- Tier variants ignore any slotted content — the label is always the fixed tier name, and `leading-icon` has no effect since the AA mark is not the icon slot.
- Signal variants ignore `emphasis` and `leading-icon` entirely.
- `motorway` forces a fixed 32px width — long text in this variant will overflow or be clipped, so only use it for short motorway numbers.
- The tier gradient colours and rim colours are literal hex/rgb values, not design tokens — any future rebrand of the metallic tiers requires a source change, not a token update.

## Accessibility

### Focus order
`aa-tag` is not focusable and does not participate in the tab order — it is a status indicator, not an interactive control.

### Keyboard interactions
_TODO: not applicable — the component has no keyboard interactions._

### ARIA
- No `role` override is applied — the tag renders as a plain `<span>`.
- _TODO: confirm whether an `aria-label` or `role="status"` is needed when a tag communicates information not otherwise conveyed in surrounding text (e.g. colour-only meaning)._

### SEO and AI discovery
- Renders as a semantic `<span>` with visible text content, so the label is readable by search engines and AI agents without additional markup.
- Since the semantic colour variants rely on colour to reinforce (but not solely convey) meaning, ensure the label text itself states the status rather than relying on colour alone.

## Related components
- `aa-badge` — a similar small label treatment used for standalone counts/callouts rather than inline status pills.
- `aa-message` — for a status communicated with a longer line of supporting text rather than a compact label.
- `aa-icon` — supplies the icon slotted into the leading icon area of semantic colour tags.
