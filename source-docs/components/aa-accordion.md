# Aa-accordion

## Overview
`aa-accordion` groups a set of `aa-accordion-item` elements, coordinating which are open and applying shared styling (type, size, dividers) across all of them. It's used for FAQ sections, collapsible content lists, and any page area where secondary content should stay out of the way until requested.

Figma: `Accordion Group` (node `18383:26604`) and `Accordion` (node `17694:16676`).

## Anatomy
1. **Heading slot** (`heading`) — optional group-level heading, authored as a real heading element (e.g. `<h2>`) so the consumer controls its semantic level.
2. **Group** — the container for all `aa-accordion-item` children, styled according to `type` and `size`.
3. **Items** — real `aa-accordion-item` elements nested in the default slot.

_TODO: reference a labeled anatomy diagram once one exists in Figma._

## Properties

| Property | Options | Default | Description |
|---|---|---|---|
| `type` | `card` \| `flat` \| `group` | `card` | Visual treatment of the item set. `card` and `group` fill each item's surface; `flat` removes the fill and can show dividers instead. |
| `size` | `default` \| `slim` | `default` | Padding and leading-icon size, applied to every child item. |
| `show-divider` | `boolean` | `false` | Shows dividers between items. Only applies to `type="flat"`, since `card`/`group` items have their own surface to separate them. |
| `multiple` | `boolean` | `false` | Allows more than one item open at once. Default behaviour is exclusive — opening one item closes the others. |

## Behaviour
- **Exclusive open by default**: opening one item closes any other open item, coordinated by the group listening for each item's `toggle` event — not native `<details name>` grouping, since each item has its own shadow root and cannot share that mechanism.
- **`multiple`**: switching this on lets several items stay open independently; switching it off collapses all but the first still-open item.
- **Shared props propagate down**: `type` and `size` are read from the group and pushed onto every child item's `size`/`surface`/`show-divider` — items never set these directly.
- **Heading visibility**: the group-level heading row is hidden entirely when no content is slotted into `heading`, rather than rendering an empty header row.
- **Responsive behaviour**: no breakpoints of its own; the group and its items size to their container's inline size.

## Usage

### When to use
- FAQ sections, help content, or any list of question/answer pairs.
- Grouping several related, optional content sections a user may or may not want to open.
- Where only one item's content is usually relevant at a time (leave `multiple` off).

### When not to use
- For primary or required content the user must see without extra interaction — don't hide critical information behind a collapsed accordion.
- For a single standalone collapsible section with no group semantics — a bare `aa-accordion-item` still requires the group as its parent, so use it inside a single-item `aa-accordion` rather than reaching for something else.
- For navigation menus or mutually exclusive selection — use a purpose-built navigation or selection component instead.

## Content guidance

### What to write
- Content guidance from Figma: accordion content should be supporting, optional or secondary information — scannable, self-contained and non-critical. Avoid urgent warnings, required instructions, primary calls to action, legal consent, or anything users must compare side by side.
- Keep the group heading short and descriptive of the whole set (e.g. "Frequently asked questions"), not a repeat of any individual item's heading.
- For FAQ-style content, phrase each item's heading as the question itself.

### How to write
- Use sentence case for the group heading and every item heading.
- Use British English spelling and plain, familiar language.
- Avoid jargon and technical terms; aim for a reading age of around 9.
- For FAQ sections specifically, use first-person pronouns ("I"/"my") in the question when it represents the customer's own perspective, e.g. "Why can't my commercial vehicle be covered under standard breakdown cover?" — this matches how users search and phrase their own questions.

| Do ✅ | Don't ❌ |
|---|---|
| "Why can't my commercial vehicle be covered?" | "Commercial vehicle cover: exclusions" |
| "What's covered under Home cover" | "Home cover details" |

## Examples
- **Card** — default type, filled rounded surface per item.
- **Flat** — no fill, optional dividers between items.
- **Group** — items sit tightly inside one continuous filled panel.
- **Slim** — reduced padding and icon size, for denser layouts.
- **Without a header** — group heading omitted entirely.
- **Multiple open** — several items expanded at once via `multiple`.
- **With leading icons** — an icon slotted before each item's heading.

## Things to consider
- `type` and `size` set on the group apply to every child item — don't set these props on individual `aa-accordion-item` elements expecting them to persist independently.
- `show-divider` only has a visible effect on `type="flat"` — setting it alongside `card` or `group` has no effect, since those types already separate items with their own filled surface.
- Native `<details>` name-based grouping cannot be used here because each item lives in its own shadow root — exclusive-open coordination is handled entirely by the group's own JavaScript instead.
- Since closed content stays in the DOM (not `display:none`), a long accordion with many items adds real DOM weight even while collapsed.

## Accessibility

### Focus order
Each item's summary row receives focus in normal tab order at its position on the page. Content inside a currently open item is reachable by Tab in document order after its summary; content inside closed items is skipped, consistent with native `<details>` behaviour.

### Keyboard interactions

| Key | Action |
|---|---|
| Enter / Space | Toggles the focused item open or closed (native `<summary>` behaviour, inherited from each child item). |

### ARIA
- No custom ARIA roles are applied at the group level — semantics come from the native `<details>`/`<summary>` elements inside each `aa-accordion-item`.
- The group heading, when present, should be a real heading element (`<h2>`–`<h6>`) chosen by the consumer to fit the page's outline.

### SEO and AI discovery
- Built on native `<details>`/`<summary>`, so keyboard, screen reader and open/close semantics come from the platform rather than simulated ARIA.
- Because closed content remains in the DOM rather than being removed, its text stays available to search engine crawlers and AI agents parsing the page, even though it isn't visually revealed until a user (or assistive technology) expands it.
- Slotting a real heading element into `heading` keeps the page's heading outline correct and machine-readable, rather than relying on a generic, unstructured label.

## Related components
- `aa-accordion-item` — the individual collapsible row; always used as a child of `aa-accordion`.
- `aa-divider` — used internally when `show-divider` is set on a `flat` accordion.
- `aa-icon` — supplies each item's leading icon and chevron indicator.
