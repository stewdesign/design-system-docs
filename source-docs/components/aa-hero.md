# Aa-hero

## Overview
`aa-hero` is the large, top-of-page banner used to introduce a landing page or campaign. It has three variants — `seo` (text and image side by side), `background-image` (a full-bleed photo behind a white content card) and `slim` (centred copy only, no image, list or actions) — sharing one heading/eyebrow/description structure and an optional decorative brand stripe along the bottom edge.

Figma verification: `Hero` (node `348:15896`) — `seo` (node `2142:10483`), `background-image` (node `20189:5554`), `slim` (node `13906:10789`).

## Anatomy
1. **Eyebrow** — short label above the heading.
2. **Heading** — the primary `<h1>` for the page.
3. **Description** — supporting paragraph beneath the heading.
4. **List slot** (`list`) — optional supporting list (e.g. a checklist), hidden when empty. Not available on `slim`.
5. **Actions slot** (`actions`) — optional call-to-action(s), hidden when empty. Not available on `slim`.
6. **Media** — a side-by-side image (`seo`), a full-bleed background image (`background-image`), or absent (`slim`).
7. **Brand stripe** — decorative 32px image band along the bottom edge, shown by default.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `seo` \| `background-image` \| `slim` | `seo` | Selects the layout: side-by-side image, full-bleed background photo, or centred copy only. |
| `heading` | string | `'Heading'` | The `<h1>` heading text. |
| `eyebrow` | string | `'Eyebrow'` | Short label shown above the heading. |
| `description` | string | `'Description'` | Supporting paragraph beneath the heading. |
| `imageSrc` (`image-src`) | string | _undefined_ | Side-by-side image source. Only used by the `seo` variant. |
| `imageAlt` (`image-alt`) | string | _undefined_ | Alt text for the `seo` variant's image. |
| `backgroundSrc` (`background-src`) | string | _undefined_ | Full-bleed background image source. Only used by the `background-image` variant. |
| `backgroundAlt` (`background-alt`) | string | _undefined_ | Alt text for the `background-image` variant's background photo. |
| `brandStripe` (`brand-stripe`) | `boolean` | `true` | Shows the decorative brand stripe along the bottom edge. |

## Behaviour
- **Theming**: the `seo` and `slim` variants sit on the brand-yellow surface and scope their descendants to the `yellow` colour theme (the same mechanism `aa-panel` uses for `background="yellow"`); `background-image` sits on plain white and inherits the ambient theme instead.
- **List/actions visibility**: the `list` and `actions` slots are hidden (not just visually, but via `[hidden]`) until content is slotted in, detected via `slotchange`.
- **Slim variant**: has no `list` or `actions` region at all — structurally absent, not merely hidden-when-empty, matching Figma's Slim variant which has no room for them.
- **Layout**: the `seo` variant uses `aa-columns` (`mobile="1" tablet="2"`) to place the copy and image side by side above tablet width, stacking on mobile.
- **Background-image card width**: the white content card is full-width until the hero reaches 80rem, at which point it narrows to 40% width so the ratio only applies once there's room for it to breathe.
- **Entrance animation**: the copy block participates in the shared motion-stagger entrance animation, observed via `observeEntrance`/`unobserveEntrance`.
- **Brand stripe asset**: reuses the existing `journey-pattern-b2c-car` brand asset, cropped to the 32px band Figma shows; it is purely decorative (`alt=""`, `aria-hidden="true"`).

## Usage

### When to use
- The top of a landing or campaign page, to introduce the page's purpose with a heading, description and primary call(s) to action.
- `seo` when there's a relevant image to show alongside the copy.
- `background-image` when a full-bleed photograph should set the scene behind the message.
- `slim` for a simpler, image-free introduction with no list or actions, e.g. a single-purpose booking page.

### When not to use
- Mid-page section headers — use a standard heading/section component instead.
- When the list or actions need to be present on the `slim` variant — switch to `seo` or `background-image` instead, since `slim` has no such regions.

## Content guidance

### What to write
- Eyebrow: a short label that sets context for the heading, not a repeat of it.
- Heading: the page's primary message, concise enough to read at a glance.
- Description: one supporting sentence or two that expands on the heading.
- List items (when used): frontload with what the user gets or can do.

### How to write
- Use sentence case, not title case.
- Avoid colons at the end of labels.
- Avoid adverbs like "simply", "just" or "easily".
- Use British English spelling throughout (e.g. "Customise", not "Customize").
- Avoid exclamation marks.

## Examples
- **Seo** — eyebrow, heading, description, checklist and button group alongside a side-by-side image.
- **Background image** — full-bleed photo behind a white content card with actions.
- **Slim** — centred eyebrow, heading and description only, no image, list or actions.
- **Without brand stripe** — `brand-stripe="false"`.
- **Without list** — actions only, no `list` slot content.

## Things to consider
- `imageSrc`/`imageAlt` only apply to the `seo` variant; `backgroundSrc`/`backgroundAlt` only apply to `background-image` — setting the wrong pair for the active variant has no effect.
- The `list` and `actions` slots are unavailable on `slim` — content passed to them there won't render.
- The brand stripe is decorative only; don't rely on it to convey information.

## Accessibility

### Focus order
_TODO: not determinable from source — no explicit tabindex or focus management is set beyond the natural order of slotted interactive content (list items, actions)._

### Keyboard interactions

| Key | Action |
|---|---|
| _TODO: none defined in source — keyboard behaviour is inherited from whatever is slotted into `list`/`actions`._ | |

### ARIA
- No component-level ARIA is set by `aa-hero` itself; the heading renders as a native `<h1>`.
- The brand stripe image is marked `alt=""` and `aria-hidden="true"` as it is purely decorative.
- `imageAlt`/`backgroundAlt` are only applied to the `<img>` when a non-empty value is supplied (via `ifDefined`).

### SEO and AI discovery
- Renders a real `<h1>`, giving the page a clear, crawlable primary heading.
- Supplying `imageAlt`/`backgroundAlt` ensures the hero's image content is described to assistive technology and indexable by search engines rather than left blank.

## Related components
- `aa-columns` — provides the side-by-side layout used by the `seo` variant.
- `aa-button` / `aa-button-group` — typically slotted into `actions`.
- `aa-icon` — commonly used alongside list items slotted into `list`.
