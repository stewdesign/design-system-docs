# Aa-badge

## Overview
`aa-badge` is a small, semantic-intent status indicator, shown as a label, count, or dot. It communicates status or quantity at a glance — for example on `aa-avatar`, in navigation, or beside a list item.

Figma verification: `Badge` (node `16778:4611`). This is a distinct component from `aa-tag` — the former `aa-badge` (an 8-colour tag/chip, node `10404:15055`) was renamed `aa-tag` since the two shared a Figma name despite being separate components.

## Anatomy
1. **Badge shape** — a pill, circle, or dot, depending on `variant`.
2. **Label text** (variant `label` only) — short text inside the pill.
3. **Count text** (variant `count` only) — a number inside a fixed-height pill.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `label` \| `count` \| `dot` | `label` | Shape and content: a text pill, a numeric pill, or an unlabelled dot. |
| `intent` | `information` \| `positive` \| `alert` | `information` | Semantic colour tone. |
| `text` | string | `'Text'` | Text shown when `variant="label"`. |
| `count` | string | `'8'` | Number shown when `variant="count"`. |

## Behaviour
- **Shape by variant**: `label` is a rounded-rectangle pill sized to its text; `count` is a fully rounded pill with a fixed block-size so single- and double-digit numbers read as the same badge height; `dot` is a small fixed-size circle with no text.
- **Colour by intent**: `information`, `positive` and `alert` each map to a distinct background/text colour pairing, chosen for semantic meaning rather than arbitrary colour choice.
- **No interactive states**: the badge is a purely presentational, non-interactive element with no hover, focus or click behaviour.
- **Responsive behaviour**: none; it's an inline-flex element sized to its content.

## Usage

### When to use
- Showing a notification count (e.g. unread messages) — `variant="count"`.
- Flagging status with a short label (e.g. "New", "Overdue") — `variant="label"`.
- A minimal presence/status indicator with no text, such as the notification dot on `aa-avatar` — `variant="dot"`.

### When not to use
- A removable or selectable tag — use `aa-chip` or `aa-tag` instead.
- Longer descriptive text — a badge's fixed, compact shape is only meant for very short labels or numbers.
- An interactive control — `aa-badge` has no click behaviour; use `aa-button` or `aa-chip` if the element needs to respond to interaction.

## Content guidance

### What to write
- Keep label text to one or two words — the pill is not designed to wrap or grow for long text.
- Use `count` only for genuine numeric counts (e.g. unread items) — cap or format large numbers appropriately before passing them in (the component does not truncate or abbreviate).
- Choose `intent` to match the real semantic meaning of the status (e.g. `alert` for something requiring attention), not just a colour preference.

### How to write
- Use sentence case for label text.
- Keep wording short, direct and specific rather than generic ("New" rather than "Update available" crammed into a badge).
- Use British English spelling.

| Do ✅ | Don't ❌ |
|---|---|
| "New" | "Recently Added Item" |
| count: "8" | count: "You have 8 new items" |

## Examples
- **Label** — default text pill.
- **Count** — numeric pill.
- **Dot** — unlabelled status dot.
- **Matrix** — all variant/intent combinations shown together for comparison.

## Things to consider
- `text` and `count` props are both always present on the element, but only the one matching the active `variant` is rendered — setting both has no conflicting effect, only the relevant one shows.
- The `dot` variant carries no accessible text of its own — pair it with accessible labelling elsewhere (as `aa-avatar` does, marking the badge `aria-hidden="true"` and relying on surrounding context) rather than expecting it to announce meaning on its own.
- There's no size variant — the badge is always rendered at its single fixed scale regardless of surrounding content size.

## Accessibility

### Focus order
`aa-badge` is not focusable and does not participate in tab order — it's a purely presentational element.

### Keyboard interactions
_TODO: no keyboard interactions — the component is non-interactive._

### ARIA
- No ARIA roles or attributes are applied by the component itself.
- Because a `dot` badge carries no visible text, any consumer using it to convey real status information should provide an accessible label via surrounding context (as seen in `aa-avatar`, which marks its badge `aria-hidden="true"` and relies on external labelling) or add its own `aria-label` when used standalone.

### SEO and AI discovery
- Renders as a plain `<span>` with no semantic role — search engines and AI agents will read label/count text as plain content, so don't rely on the badge alone to convey meaning that isn't also present in surrounding text.
- For `dot` badges specifically, since there's no visible text, ensure the status they represent is described elsewhere in the page's real text content.

## Related components
- `aa-avatar` — uses the `dot` variant internally for its notification indicator.
- `aa-tag` — for an 8-colour tag/chip use case (formerly also called "badge" in Figma), distinct from this semantic status indicator.
- `aa-chip` — for a selectable or removable pill-shaped control, rather than a static status indicator.
