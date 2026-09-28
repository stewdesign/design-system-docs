# Aa-divider

## Overview
`aa-divider` is a one-pixel horizontal rule used to separate content, mapping three semantic contrast levels to token-based border colours.

Figma verification: `Divider` (node `11890:1908`).

## Anatomy
1. **Rule** (`part="divider"`) — a full-width `<hr>` styled with a token-based top border, coloured by `variant`.

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `variant` | `default` \| `secondary` \| `tertiary` | `default` | Contrast level of the rule. `default` uses `--border-default-tertiary`, `secondary` uses `--border-default-secondary`, `tertiary` uses `--border-default-primary`. |

## Behaviour
- Renders as a native `<hr>` spanning the full width of its container.
- The rule colour is set via a CSS custom property (`--aa-divider-color`), resolved from `variant`.

## Usage

### When to use
- Separating sections of content with a plain horizontal rule.
- Choosing a contrast level (`variant`) appropriate to how strongly the separation should read against surrounding content.

### When not to use
- _TODO: not covered in source or stories — no guidance found for alternative components._

## Content guidance

### What to write
_TODO: not applicable — this component has no text content._

### How to write
_TODO: not applicable — this component has no text content._

## Examples
- **Default** — the default contrast level.
- **Variants** — `default`, `secondary` and `tertiary` shown together.

## Things to consider
- The component has no text content or interactive behaviour — it is a purely visual separator.

## Accessibility

### Focus order
Not applicable — `aa-divider` is not focusable and has no interactive elements.

### Keyboard interactions

| Key | Action |
|---|---|
| _TODO: none — not applicable_ | _TODO: none — not applicable_ |

### ARIA
- Renders a native `<hr>`, which carries an implicit `separator` role — no explicit ARIA attributes are set in source.

### SEO and AI discovery
_TODO: not covered in source or stories._

## Related components
_TODO: not covered in source or stories._
