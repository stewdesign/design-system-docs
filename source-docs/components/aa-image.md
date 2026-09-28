# Aa-image

## Overview
`aa-image` is a semantic image frame that enforces one of a set of documented aspect ratios, showing a placeholder pattern when no `src` is supplied. It keeps the documented ratio and direction variants from Figma while rendering a real `<img>` so it can carry actual content rather than being a placeholder-only frame.

Figma verification: `Image` (node `10919:11470`).

## Anatomy
1. **Frame** — the sized, rounded container that clips the image to the chosen aspect ratio.
2. **Image** — the `<img>` itself, rendered when `src` is set.
3. **Placeholder** — a diagonal checkerboard pattern shown in place of the image when `src` is empty.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `src` | string | `''` | Image source. When empty, the placeholder pattern is shown instead. |
| `alt` | string | `''` | Alt text for the image. |
| `ratio` | `1x1` \| `16x9` \| `4x3` | `1x1` | Aspect ratio of the frame. |
| `direction` | `horizontal` \| `vertical` | `horizontal` | Combines with `ratio` to set the frame's base inline size (e.g. `16x9` horizontal is wider than `16x9` vertical). |

## Behaviour
- **Placeholder**: when `src` is empty, a decorative diagonal checkerboard pattern fills the frame instead of an image, sized to the same aspect ratio.
- **Sizing**: the frame's inline size and aspect ratio are set together via a CSS custom property, keyed off the `ratio`/`direction` combination (six fixed combinations).
- **Fit**: the image uses `object-fit: cover`, so it fills the frame and crops rather than letterboxing.
- **Loading**: images load with `loading="lazy"` and `decoding="async"` by default.
- **Corners**: the frame has rounded corners (`--corner-radius-lg`), clipping the image to match.

## Usage

### When to use
- Any content image that needs to be constrained to one of the documented aspect ratios (square, widescreen, or 4:3), e.g. in cards, galleries or content blocks.
- Where a placeholder should be shown before a real image source is available.

### When not to use
- Full-bleed or background images with bespoke sizing outside the documented ratios — e.g. `aa-hero`'s `background-image` variant manages its own background image directly rather than using `aa-image`.
- Purely decorative graphics or icons — use `aa-icon` or `aa-brand-icon` instead.

## Content guidance

### What to write
- Alt text: a concise, accurate description of what the image shows or conveys, not a generic label.
- Leave `alt` empty only when the image is genuinely decorative and adds no information beyond what's already conveyed in surrounding text.

### How to write
- Alt text is written for spoken word — concise and accurate, not vague ("image of a car") and not overly detailed (describing every visual element).
- Avoid patronising or overly descriptive phrasing; describe what the image communicates in context.
- Use sentence case, no closing full stop unless multiple sentences.
- Use British English spelling throughout.

## Examples
- **Square** — `ratio="1x1"`, the default.
- **Wide** — `ratio="16x9"`.
- **Vertical** — `direction="vertical"` with `ratio="4x3"`.
- **Ratio gallery** — all ratio/direction combinations shown together.

## Things to consider
- Only three ratios and two directions are supported (six fixed size combinations) — there's no arbitrary custom aspect ratio.
- `object-fit: cover` means the image will crop to fill the frame; make sure the subject is centred or the crop is acceptable at the chosen ratio.
- The placeholder pattern is purely visual — it does not communicate a loading or error state to assistive technology beyond being empty of content.

## Accessibility

### Focus order
Not a focusable element — `aa-image` has no interactive semantics and does not participate in the tab order.

### Keyboard interactions

| Key | Action |
|---|---|
| _TODO: not applicable — the component is not interactive._ | |

### ARIA
- The placeholder (shown when `src` is empty) is marked `aria-hidden="true"`, as it carries no content.
- `alt` is passed through to the `<img>` via `ifDefined`; an empty string still renders `alt=""`, matching correct semantics for a genuinely decorative image.

### SEO and AI discovery
- Renders a real `<img>` with `loading="lazy"` and `decoding="async"`, so it is crawlable and doesn't block initial page render.
- Supplying accurate `alt` text ensures the image's content is discoverable to search engines and AI agents parsing the page, not just sighted users.

## Related components
- `aa-hero` — uses its own `<img>` handling for side-by-side and background images rather than `aa-image`.
- `aa-icon` / `aa-brand-icon` — for iconography and brand marks rather than content photography.
