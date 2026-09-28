---
# Gaps from the source doc (TODOs), for review:
#   - Anatomy: reference a labeled anatomy diagram once one exists in Figma.
#   - When not to use: confirm whether a lighter-weight footer variant exists.
title: Footer
description: >-
  Footer is the site-wide footer pattern: a brand mark and breadcrumb, a set of
  data-driven link sections, and a bottom bar with a copyright notice and legal
  links. The section and legal link content is passed in as data rather than fixed
  markup, so the real content can be edited without introducing new component variants.
storybookUrl: ''
figmaUrl: ''
previewImage: https://placehold.co/1280x720
lastUpdated: '2026-09-28'
platforms:
- Web
- Mobile app
sections:
- type: anatomy
  heading: Anatomy
  items:
  - >-
    Breadcrumb: brand mark (Logo), a separator, and the current section label (e.g.
    "Breakdown cover").
  - >-
    Section groups: one or more headed columns of links (sections), laid out in
    a responsive grid.
  - >-
    Bottom bar: a copyright mark and copyright text, alongside a list of legal links
    (legalLinks).
  image: https://placehold.co/1280x720
  imageAlt: Labelled Footer anatomy diagram
- type: two-col
  heading: Examples
  items:
  - title: Default
    description: Desktop-width footer with the standard AA sections, breadcrumb
      and legal links.
    image: https://placehold.co/1280x720
    imageAlt: 'Footer: Default'
  - title: Mobile
    description: >-
      The same footer rendered at mobile preview width, showing the stacked bottom
      bar.
    image: https://placehold.co/1280x720
    imageAlt: 'Footer: Mobile'
- type: two-col
  heading: Behaviour and states
  items:
  - title: Link vs. static text
    description: >-
      Any AaFooterLink without an href renders as plain text (a <span>), not a link
      — used for section links that don't yet have a destination.
    image: https://placehold.co/1280x720
    imageAlt: 'Footer: link vs. static text'
  - title: Brand mark
    description: >-
      Logo supplies its own accessible name (role="img" with aria-label="The AA"),
      so no additional label is needed on the wrapping link.
    image: https://placehold.co/1280x720
    imageAlt: 'Footer: brand mark'
  - title: Responsive layout
    description: >-
      Section columns wrap via repeat(auto-fit, minmax(min(100%, 20rem), 1fr)),
      so the number of visible columns depends on available width rather than a
      fixed breakpoint. At 48rem and above, the bottom bar switches from a stacked
      layout to a two-column row (copyright left, legal links right, wrapping and
      right-aligned).
    image: https://placehold.co/1280x720
    imageAlt: 'Footer: responsive layout'
  - title: Theme
    description: >-
      Sets its own scoped theme to light on connect, regardless of the surrounding
      page theme.
    image: https://placehold.co/1280x720
    imageAlt: 'Footer: theme'
- type: side-by-side
  heading: When to use
  items:
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Footer example: The footer of any AA site page, where a consistent set of
        navigation, legal and brand elements is required.
      label: Do
      caption: >-
        The footer of any AA site page, where a consistent set of navigation, legal
        and brand elements is required.
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Footer example: Mid-page navigation or link groups — use standard navigation
        or link list components instead.
      label: Don't
      caption: >-
        Mid-page navigation or link groups — use standard navigation or link list
        components instead.
  - figures:
    - image: https://placehold.co/1280x720
      imageAlt: >-
        Footer example: A minimal or single-purpose page that doesn't need the full
        section/legal link structure
      label: Don't
      caption: >-
        A minimal or single-purpose page that doesn't need the full section/legal
        link structure
- type: side-by-side
  heading: Content guidance
  list:
  - >-
    Keep section headings short and scannable (e.g. "Products and services", "Existing
    customers").
  - >-
    Link labels should describe the destination on their own, without relying on
    the surrounding section heading for context.
  - >-
    Use the current page or journey name for breadcrumb so users can see where they
    are relative to the brand.
  - Use sentence case for section headings and link labels, not title case.
  - >-
    Use British English spelling throughout (e.g. "Organisation", not "Organization").
  - Avoid adverbs and filler words in link labels.
- type: side-by-side
  heading: Things to consider
  list:
  - >-
    sections and legalLinks are passed as properties (not attributes), so they must
    be set via JavaScript/Lit bindings (.sections=, .legalLinks=), not as HTML attribute
    strings.
  - >-
    A link without an href deliberately renders as non-interactive text — don't
    rely on it being clickable.
  - >-
    The brand mark is sized at a fixed 2.25rem to match the adjacent body text's
    line height, not Logo's own larger default size.
- type: properties
  heading: Properties
  tables:
  - rows:
    - name: sections
      options: 'AaFooterSection[] ({ heading, links: { label, href? }[] }[])'
      defaultValue: Default AA sections ("Products and services", "Existing customers",
        "Company")
      description: The headed link columns rendered in the main footer grid.
    - name: legalLinks
      options: AaFooterLink[] ({ label, href? }[])
      defaultValue: >-
        Default legal links (terms, cookies, modern slavery statement, privacy hub,
        privacy notice)
      description: The links rendered in the bottom legal bar.
    - name: breadcrumb
      options: string
      defaultValue: '''Breakdown cover'''
      description: The current section label shown next to the brand mark.
    - name: copyrightText (attribute copyright-text)
      options: string
      defaultValue: '''© Automobile Association Developments Ltd. 2025'''
      description: The copyright notice shown in the bottom bar.
    - name: brandHref (attribute brand-href)
      options: string
      description: >-
        When set, wraps both brand marks (breadcrumb and copyright) in a link to
        this URL.
- type: accessibility
  focusOrder:
  - >-
    Focusable elements follow document order: brand mark link (if brandHref is set)
    and breadcrumb, then each section's links in turn, then the bottom bar's brand
    mark link and legal links.
  keyboard:
  - key: Tab
    action: Moves focus to the next link in the footer.
  - key: Shift+Tab
    action: Moves focus to the previous link in the footer.
  - key: Enter
    action: Activates the focused link.
  aria:
  - >-
    The section links list and legal links list both use role="list" to preserve
    list semantics against browsers/assistive tech that strip implicit list role
    from list-styled <ul> elements.
  - >-
    The breadcrumb separator (/) is marked aria-hidden="true" since it is purely
    visual.
  - >-
    Logo provides its own accessible name (role="img" with aria-label="The AA");
    no extra labelling is added when it's wrapped in a link.
  seo:
  - >-
    Section and legal links render as real <a href> elements (when a link has an
    href), so they are crawlable rather than JavaScript-only click handlers.
  - >-
    Section headings render as real <h2> elements, giving crawlers and assistive
    tech a genuine heading structure for the footer's link groups.
- type: related-components
  items:
  - label: Logo
    href: /components/logo
    note: Supplies the brand mark used in both the breadcrumb and the copyright
      row.
  - label: Header
    href: /components/header
    note: The corresponding top-of-page pattern.
---
