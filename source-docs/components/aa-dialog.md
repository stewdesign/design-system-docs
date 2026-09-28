# Aa-dialog

## Overview
`aa-dialog` is a true modal dialog, built on the same scrim/panel shape as `aa-header-dropdown`'s mega-menu panel, but as a real `role="dialog"` modal rather than a hover-only panel. It supports a default text-only layout, and two media variants that add an image.

Figma verification: `Dialog` (node `17390:4658`) — Default/Media/Media hero variants.

## Anatomy
1. **Scrim** (`part="scrim"`) — a full-viewport backdrop, `rgb(0 0 0 / 60%)` with a 4px blur, that closes the dialog when clicked.
2. **Dialog panel** (`part="dialog"`) — the centred modal surface, `role="dialog"` with `aria-modal="true"`.
3. **Media** (`part="media"`, `media`/`media-hero` variants only) — an image, with a close button floated over it.
4. **Heading** (`part="heading"`, `aa-heading` level 4).
5. **Close button** (`part="close"`) — inline next to the heading in `default`, or floated over the media in `media`/`media-hero`.
6. **Body** (`part="body"`) — a default `<slot>` for the dialog's content.
7. **Actions** (`part="actions"`) — a `slot="actions"` for action buttons, hidden automatically when empty.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `open` | boolean (reflected) | `false` | Whether the dialog is open. |
| `variant` | `default` \| `media` \| `media-hero` | `default` | Layout: text-only, image above content, or side-by-side image and content. |
| `heading` | string | `'Text Heading'` | Dialog heading text, also used as the `aria-label`. |
| `image-src` | string | `''` | Image source for `media`/`media-hero` variants. |
| `image-alt` | string | `''` | Alt text for the image. |
| `close-label` | string | `'Close'` | Accessible label for the close button. |

## Behaviour
- **Open/close**: kept in the DOM at all times and toggled with the `inert` attribute rather than `hidden`, so the open/close transition (opacity + translateY + scale, 260ms `cubic-bezier(0.16, 1, 0.3, 1)`) can play. The scrim uses the identical treatment as `aa-header-dropdown`'s own scrim.
- **Stacking**: `:host` is `position: fixed`, full-viewport, and reflects `open` at `z-index: 1000` — deliberately above `aa-header`'s own `z-index: 10` — so the dialog wins the stacking order outright rather than relying on DOM order. `:host` stays `pointer-events: none` while closed so it never blocks clicks on the page underneath.
- **Focus management**: opening the dialog stores the currently focused element, then moves focus to the dialog panel itself (deferred one animation frame after `inert` is removed). Closing the dialog returns focus to the element that had it before opening.
- **Escape**: pressing Escape while open closes the dialog.
- **Scrim click**: clicking the scrim closes the dialog.
- **Close button**: two visual treatments depending on variant — `default` renders it inline next to the heading on tertiary-action tokens; `media`/`media-hero` float it over the image (or, for `media-hero`, over the whole card) on the secondary surface token instead.
- **Actions slot**: the actions row is hidden automatically (via `slotchange` measurement) when no elements are slotted into `slot="actions"`.
- **Events**: fires `dialog-close` (bubbling, composed `CustomEvent`) when the dialog closes via Escape, scrim click or the close button.

## Usage

### When to use
- Presenting content or a focused task that requires the user's full attention before returning to the page, e.g. a confirmation with actions.
- Displaying an image alongside supporting content and actions (`media`/`media-hero` variants).

### When not to use
- _TODO: not covered in source or stories — no guidance found for alternative components._

## Content guidance

### What to write
- Write the heading to describe the purpose of the dialog, since it also serves as the dialog's accessible name.
- Write action button labels using active verbs describing the exact action, per `aa-button` content guidance.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout.

## Examples
- **Default** — text-only dialog with heading, body and actions.
- **Media** — image above the content, with the close button floated over the image.
- **Media hero** — image and content side by side, with the close button floated over the whole card.
- **Closed** — the dialog rendered in its closed state.
- **Z-index fault** (internal test story, excluded from docs) — verifies the dialog's `z-index: 1000` paints above a real `aa-header` regardless of DOM order.

## Things to consider
- Render `aa-dialog` at the document root, not nested inside animated content — an ancestor with a `transform` (or `filter`/`will-change`/`contain`) outside this component's own shadow root creates a containing block that traps `position: fixed`, overriding the viewport-wide placement the dialog otherwise guarantees. This codebase's own `aa-motion` foundation applies exactly that kind of transform to `aa-panel`/`aa-hero` content while entering.
- The scrim and dialog panel each have an explicit `z-index` (`0`/`1`) rather than relying on DOM order, since `backdrop-filter` promotes an element to its own compositing layer.

## Accessibility

### Focus order
Opening the dialog moves focus into the dialog panel itself. Closing it returns focus to whichever element had focus before the dialog opened.

### Keyboard interactions

| Key | Action |
|---|---|
| Escape | Closes the dialog. |

### ARIA
- `role="dialog"` and `aria-modal="true"` on the dialog panel.
- `aria-label` on the dialog panel, set to the `heading` value.
- `aria-label` on the close button, set to `close-label`.
- `inert` applied to the dialog panel and scrim while closed.

### SEO and AI discovery
_TODO: not covered in source or stories._

## Related components
- `aa-header-dropdown` — shares the same scrim/panel shape and transition, as a hover-only mega-menu rather than a modal.
- `aa-heading` — renders the dialog heading.
- `aa-button-group` — used to lay out the action buttons in the actions slot.
- `aa-icon` — supplies the close icon.
