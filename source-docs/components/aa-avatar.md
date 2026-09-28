# Aa-avatar

## Overview
`aa-avatar` displays a user's photo or initials in a fixed-size circle, optionally with a status badge overlay. It's used wherever a person needs a compact visual identifier — profile menus, comment authors, team member listings.

Figma verification: `Avatar` (node `9762:1103`).

## Anatomy
1. **Photo or initials** — either an `<img>` (`type="image"`) or a single-character initial (`type="initials"`), centred in a circular frame.
2. **Badge overlay** (optional) — a small `aa-badge` (`variant="dot"`) positioned at the top-right corner, shown when `has-badge` is set, with a cutout ring separating it from the photo/initials behind it.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `type` | `image` \| `initials` | `image` | Whether to render a photo or a single-character initial. |
| `src` | string | `''` | Image URL, used when `type="image"`. |
| `alt` | string | `''` | Alt text for the image. |
| `initials` | string | `'A'` | The initial to display when `type="initials"`. Single character only — two or more overflow the fixed-width circle. |
| `has-badge` | `boolean` | `false` | Shows a small status-dot badge overlay in the top-right corner. |

## Behaviour
- **Fixed size**: a single fixed 40px size — there are no small/large variants in the source Figma file.
- **Image fit**: the photo fills the circular frame using `object-fit: cover`, cropping rather than distorting non-square source images.
- **Badge**: uses `aa-badge` internally with `variant="dot"` and `intent="alert"`, marked `aria-hidden="true"` since it's a purely visual indicator layered on top of the avatar.
- **No interactive states of its own**: hover/focus states shown in Figma belong to a separate `AvatarButton` composition, not this presentational primitive — `aa-avatar` itself has no built-in hover or focus styling.
- **Responsive behaviour**: none; the component is a fixed-size inline-block element regardless of viewport.

## Usage

### When to use
- Representing a specific person (a user, team member, or named contact) with a photo or initials.
- Pairing with a name in a list, comment, or profile summary.
- Showing an online/notification status via the optional badge.

### When not to use
- As a clickable control (e.g. opening a profile menu) — wrap it in a real interactive element or use the separate `AvatarButton` pattern; `aa-avatar` itself has no built-in interactive states. _TODO: confirm whether an `AvatarButton` component exists or needs building._
- Displaying a generic icon unrelated to a specific person — use `aa-icon` instead.
- Showing more than one initial — the fixed-width circle only accommodates a single character.

## Content guidance

### What to write
- `alt` text should identify the person by name (e.g. "Jordan Blake"), not describe the image generically (e.g. "profile photo").
- `initials` should be exactly one character — use the person's first initial, or whichever single character best represents them if no name is available.
- Leave `alt` empty only when the avatar is genuinely decorative and a name is already presented alongside it in text.

### How to write
- Keep alt text concise — a name is sufficient, no extra description needed.
- Use British English spelling in any surrounding copy referencing the avatar.

| Do ✅ | Don't ❌ |
|---|---|
| `alt="Jordan Blake"` | `alt="User profile picture"` |
| `initials="J"` | `initials="JB"` |

## Examples
- **Image avatar** — a photo, default state.
- **Initials avatar** — a single-letter fallback when no photo is available.
- **With badge** — either type, with the status-dot overlay.
- **Gallery** — image and initials avatars, with and without badges, shown side by side.

## Things to consider
- Supplying two or more characters to `initials` will visually overflow the fixed-width circle — validate or truncate to one character before passing it in.
- The badge is purely decorative (`aria-hidden="true"`) — it does not independently announce status to assistive technology, so any meaningful status change should also be communicated elsewhere (e.g. accompanying text).
- There is no built-in fallback if `src` fails to load — the browser's own broken-image behaviour will show unless the consumer handles the error separately. _TODO: confirm intended fallback behaviour for a broken image URL._

## Accessibility

### Focus order
`aa-avatar` is not focusable and does not participate in tab order — it's a presentational element. If used inside an interactive control (e.g. a button), that wrapping element receives focus instead.

### Keyboard interactions
_TODO: no keyboard interactions — the component has no interactive states of its own._

### ARIA
- The image, when present, uses a standard `alt` attribute — omit it (leave `alt=""`) only when the name is already presented as visible text nearby.
- The badge overlay is marked `aria-hidden="true"` since it duplicates status information that should be conveyed through accessible text elsewhere.

### SEO and AI discovery
- Uses a real `<img>` element with `alt` text when `type="image"`, so search engines and AI agents can associate the image with the named person rather than an opaque background image.
- Because the avatar carries no semantic role beyond a decorative image, ensure the person's name appears as real text content nearby (e.g. in a list item or card) so it's discoverable independent of the avatar itself.

## Related components
- `aa-badge` — used internally for the status-dot overlay; also usable standalone for labels and counts.
- `aa-icon` — for generic, non-person iconography instead of a photo/initials avatar.
