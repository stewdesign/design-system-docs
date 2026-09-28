# Aa-quick-quote-card

## Overview
`aa-quick-quote-card` is a promotional card that surfaces a quick-quote entry point for a specific AA product line (breakdown, car, home, finance) or a general decorative promo. It was built for `aa-header-dropdown`'s `slot="quick-quote"`, but is usable standalone anywhere a single, image-led promo card is needed.

## Anatomy
1. **Image area** — an optional image (`image-src`/`image-alt`), centred and scaled to fit.
2. **Heading** — the card's title text.
3. **Description** — supporting body copy beneath the heading.
4. **Arrow icon** — a decorative circular arrow (`arrow-right`) at the end of the footer row; it borrows `aa-icon-button`'s tertiary token pairing but is not a separate focus stop.
5. **Card surface** — the whole card is a single interactive `<a>` or `<button>`, tinted per `surface`.

Figma verification: `Quick quote` (node `3011:3497`, Breakdown variant) and the Insurance dropdown's own home-insurance instance (node `3011:3549` inside `3011:3547`).

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `heading` | string | `'Breakdown cover'` | The card's title. |
| `description` | string | `"24/7, 365 days a year, you're covered"` | Supporting body copy. |
| `imageSrc` (attribute `image-src`) | string | `''` | Source for the card's image. Omit to render no image. |
| `imageAlt` (attribute `image-alt`) | string | `''` | Alt text for the image. |
| `surface` | `breakdown` \| `car` \| `finance` \| `home` \| `blue` \| `green` \| `orange` \| `purple` \| `red` \| `yellow` | `breakdown` | Sets the card's background tint. `breakdown`/`car`/`finance` map to their product-line surface tokens; `home` uses the raw `--purple-200` palette token (no semantic alias yet exists); `blue`/`green`/`orange`/`purple`/`red`/`yellow` are the system's general-purpose decorative palette for promos not tied to one product line. |
| `href` | string | `''` | Renders an anchor instead of a button. |

## Behaviour
- **Theming**: `surface="breakdown"` scopes the card to the `yellow` theme so its heading/body text render in the dark brown Figma specifies, regardless of the page's ambient theme. Every other `surface` value scopes to the `light` theme. The theme is re-applied whenever `surface` changes.
- **Interaction**: the whole card is one real `<a>` (when `href` is set) or `<button>` — there is no separate interactive target for the arrow, since Figma shows no distinct state for it.
- **Hover**: the arrow's background shifts from `--surface-action-tertiary-default` to `--surface-action-tertiary-hover` when the card is hovered.
- **Focus**: a dashed focus ring (`--aa-transition-focus-ring-scale`) appears around the whole card on `:focus-visible`, expanding slightly outward from the card's edge.
- **Layout**: the card has a fixed `max-inline-size` of 318px and a `min-block-size` of 366px; the image area flexes to fill available space above the heading/description/arrow footer.
- **Responsive behaviour**: _TODO: no explicit breakpoint behaviour found in source — confirm intended behaviour below the card's max width._

## Usage

### When to use
- A single, prominent promo entry point into a quick-quote flow for one product line (breakdown, car, home, finance).
- Inside `aa-header-dropdown`'s `slot="quick-quote"`, its primary intended placement.
- A general decorative promo card using one of the non-product-line surface tints.

### When not to use
- A set of several equally-weighted CTAs — use `aa-button`/`aa-button-group` instead.
- A generic content tile with no promotional imagery or product-line association — use `aa-tile` instead, which shares this component's href-or-button pattern but without the surface theming.
- A card that needs multiple independent interactive elements (e.g. a separate dismiss control) — this component is designed as a single interactive target.

## Content guidance

### What to write
- Keep `heading` short and product-focused, e.g. "Breakdown cover" — it uses a display font at heading scale, so long text will affect the card's layout.
- Write `description` as a single, concise supporting sentence that reinforces the value of the offer.
- Always provide `image-alt` when `image-src` is set, describing the image's content for assistive tech.

### How to write
- Use sentence case for the heading, not title case.
- Use British English spelling throughout.
- Avoid adverbs such as "simply", "just" or "easily".
- Avoid generic wording — be specific about the product and benefit rather than a vague call to action.

| Do ✅ | Don't ❌ |
|---|---|
| "Breakdown cover" | "Find out more" |
| "24/7, 365 days a year, you're covered" | "Simply get covered today" |
| "Home insurance" | "Insurance" |

## Examples
- **Breakdown surface** — default variant, yellow-themed to match Figma's breakdown card exactly.
- **Car / Finance surface** — product-line tints on the light theme.
- **Home surface** — purple background using the raw palette token.
- **Decorative surface** (`blue`/`green`/`orange`/`purple`/`red`/`yellow`) — general-purpose promo tint not tied to a product line.
- **Card without image** — heading/description/arrow only, image area empty.
- **Card as link** (`href` set) — renders an anchor styled identically to the button form.

_TODO: no dedicated story file found for this component — confirm these examples against an actual Storybook story once one exists._

## Things to consider
- The arrow icon is purely decorative (`aria-hidden="true"`) — don't rely on it as an independent affordance or focus target.
- `surface="home"` uses a raw palette token (`--purple-200`) rather than a semantic alias, since none exists yet for that product line — flag this if a semantic home-insurance token is introduced later.
- The card enforces a `max-inline-size` of 318px, so it won't stretch to fill an arbitrarily wide container — check layout in narrow and wide contexts.
- Long `heading` or `description` text isn't visually truncated by the component — content guidance on conciseness must be followed to avoid overflow.

## Accessibility

### Focus order
The card participates in the natural tab order as a single `<a>` or `<button>` — there is no secondary focus stop for the arrow icon, which is marked `aria-hidden="true"`.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter | Activates the button or follows the link. |
| Space | Activates the button (native `<button>` behaviour; does not apply to anchors). |

### ARIA
- `aria-hidden="true"` — applied to the decorative arrow icon wrapper, since it carries no independent meaning or interaction.
- No `role` override is needed — the semantic `<button>` or `<a>` element is used directly.
- _TODO: no `alt` fallback behaviour specified beyond the `image-alt` property — confirm expected behaviour when an image is present but `image-alt` is left empty._

### SEO and AI discovery
- Renders as a real `<button>` or `<a>`, not a generic `<div>`, so semantics, focusability and link crawlability are native.
- When used for navigation, always set `href` so the destination is a real, crawlable link.
- `heading` and `description` should together describe the offer clearly out of context, since assistive tech, search engines and AI agents may parse them independently of surrounding page content.

## Related components
- `aa-tile` — shares the same href-or-button rendering split, for general content tiles without the product-line surface theming.
- `aa-icon-button` — supplies the tertiary token pairing the arrow borrows.
- `aa-header` / `aa-header-dropdown` — the primary host context, via `slot="quick-quote"`.
