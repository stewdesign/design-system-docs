# Aa-logo

## Overview
`aa-logo` renders The AA's logo mark as an inline SVG, kept crisp at any size rather than as a raster image. It typically appears in the header, and anywhere else the brand mark needs to be shown at a fixed or fluid width.

## Anatomy
1. **Mark** — a single `<span>` wrapping the inline SVG logo, exposed via the `mark` part.

Figma: `Logo/AA` (used throughout `Header`, node `2287:22651`).

## Properties

_TODO: this component takes no configurable properties — it renders a single, fixed logo mark with no variants or slots._

| Property | Options | Default | Description |
|---|---|---|---|
| _None_ | — | — | `aa-logo` has no properties. Size is controlled via CSS (`inline-size`) on the host, and colour via `currentColor`. |

## Behaviour
- **Colour**: the mark uses `currentColor`, so it inherits text colour from its context — set `color` on an ancestor (or the host) to recolour it, e.g. for light-on-dark placement in a themed header.
- **Sizing**: the host defaults to `inline-size: 4rem` with automatic block size, preserving the mark's aspect ratio; consumers can override `inline-size` to resize it.
- **Responsive behaviour**: has no breakpoints of its own — it scales fluidly with whatever `inline-size` is set on the host.
- **No interactive states**: the component has no hover, focus, disabled or loading states — it is a static graphic.

## Usage

### When to use
- The header/navigation brand mark.
- Anywhere The AA's logo needs to be shown as a crisp, recolourable inline graphic (e.g. a footer, a print-style summary, a loading/splash screen).

### When not to use
- As a clickable home-page link — wrap `aa-logo` in a real `<a>` (or a link-capable component) rather than adding click behaviour to the logo itself, since it has no `href` or interactive semantics.
- As a decorative background image — use a raster/background-image approach instead; this component is designed for the standalone brand mark at content scale.

## Content guidance

### What to write
_TODO: not applicable — `aa-logo` has no configurable text content; its accessible name ("The AA") is fixed by the component._

### How to write
_TODO: not applicable — no copy is authored per instance of this component._

## Examples
- **Logo** — the mark at its default size, coloured via `currentColor` from its surrounding context.

## Things to consider
- The mark's accessible name is fixed as "The AA" — it cannot be overridden per instance, so don't rely on this component for a differently-worded accessible label.
- Because colour comes from `currentColor`, placing `aa-logo` in a container with no explicit text colour set may render it in an unexpected inherited colour — verify contrast in each context it's used, particularly on coloured header bands.
- The SVG is inlined directly into the DOM (not referenced as an external image), so it participates in the page's own styling and colour inheritance rather than being isolated.

## Accessibility

### Focus order
`aa-logo` is not focusable on its own — it renders no interactive element. If it needs to act as a link, wrap it in a real `<a>`, which then participates in tab order in the usual way.

### Keyboard interactions

_TODO: not applicable — the component has no interactive behaviour of its own._

### ARIA
- `role="img"` and `aria-label="The AA"` are set on the mark's wrapping `<span>`, giving assistive tech a single, meaningful accessible name for the inline SVG rather than exposing its internal paths.

### SEO and AI discovery
- The `role="img"`/`aria-label="The AA"` pairing ensures screen readers and AI agents parsing the page identify this element as the brand logo, not as decorative or unlabelled graphics.
- Because the SVG is inlined rather than referenced by URL, it carries no separate `alt` text or file name for search engines to index — the `aria-label` is the only accessible description available.

## Related components
_TODO: no other components in this set directly relate to `aa-logo` — it is a standalone brand asset, typically composed inside `aa-header` or similar layout components._
