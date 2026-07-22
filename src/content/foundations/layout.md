---
title: Layout
description: A CSS grid system built on five named layout patterns. Designers choose a pattern, not a column count.
---

## Overview

The layout system is built on CSS custom properties and a 12-column grid. It is intentionally constrained — rather than exposing raw column spans to designers, it provides five named layout patterns that cover the vast majority of content arrangements on the site.

This constraint is deliberate. Giving designers unlimited column control leads to inconsistent layouts that drift from the grid. Giving them five named options keeps designs consistent and makes design-to-code handoff unambiguous.

## Grid specification

The grid changes once — at 37.5em (600px). No desktop breakpoint is needed because the container max-width of 80rem handles the upper boundary automatically.

### Mobile — up to 600px

- Columns — 4
- Grid margin — 16px
- Column gap — 32px
- Between sections — 64px

### Tablet and above — 600px+

- Columns — 12
- Grid margin — 24–32px
- Column gap — 48px
- Between sections — 96px
- Container max width — 1280px (80rem)

## The five patterns

Every layout on the site uses one of these five patterns. Use the pattern name — not a column count — when specifying layouts in Figma or describing them in handoff.

### Full width

**Class:** `.grid-item-100`

Use for hero sections, page-level headings, banners, full-width images, and notification bars. Do not use for body copy — full-width text lines exceed a comfortable reading length.

- Mobile: span 4
- Tablet+: span 12

### Two-thirds / one-third

**Classes:** `.grid-item-66` and `.grid-item-33`

The most common two-column arrangement. Use for editorial layouts, content with a supporting sidebar, image with caption, or primary content with a secondary action. On mobile both items stack full width — the 66 item first, the 33 item below.

- Mobile: both span 4, stacked
- Tablet+: 8 columns + 4 columns

### Equal halves

**Class:** `.grid-item-50` (applied to both)

Use for side-by-side comparisons, two equal-weight cards, image pairs. Unlike other patterns, 50/50 remains side by side at mobile (span 2 of 4). For content-heavy items that need full width at mobile, use 66/33 instead.

- Mobile: span 2, side by side
- Tablet+: span 6 each

### Three equal columns

**Class:** `.grid-item-33` (applied to all three)

Use for three-up card grids, feature lists, icon and heading groups. On mobile all three items stack full width.

- Mobile: span 4 each, stacked
- Tablet+: span 4 each

### Four equal columns

**Class:** `.grid-item-25` (applied to all four)

Use for four-up product or feature grids, icon rows. On mobile all four items stack full width.

- Mobile: span 4 each, stacked
- Tablet+: span 3 each

## Rows

A row groups grid items that share a horizontal relationship. It sits inside the container and wraps grid items that belong together as a unit — they tell the same story, support the same section, or form a single visual group.

### When to use a row

- When two or more grid items belong together as a horizontal unit
- When the items tell the same story or support the same section
- When you need inner gap control between related items

### When not to use a row

- A single full-width item does not need a row wrapper
- Do not use rows as general-purpose section containers — that is the panel's job
- Never nest rows inside rows — the grid is flat, one level only

## Single column

For editorial content — articles, guidance pages, legal text — a centred single column keeps line lengths readable. It uses `grid-column: 2 / span 10` at tablet and above, insetting the content from the grid edges.

Use for documentation pages, article bodies, legal content, and any long-form text where line length and reading comfort matter more than layout variety.

## Accessibility

- Column order in the DOM must match reading order
- Do not use CSS `order` to resequence content that has a logical reading flow
- On mobile, primary content should appear first in the stack
- Avoid layouts where visual order and tab order diverge