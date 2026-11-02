---
title: "Accessible Card Component with Visible Focus"
slug: "accessible-card-focus"
locale: "en"
translationKey: "accessible-card-component"
summary: "A prototype of a fully keyboard-accessible clickable card, with a polished visible focus ring and correct HTML semantics."
date: 2026-07-28
type: component
stack:
  - HTML
  - CSS
  - Accessibility
---

## Goal

Build a card component that is:

- Fully keyboard-navigable (correct tab order)
- With a visible and aesthetically pleasing focus ring
- Without artificial ARIA where native HTML semantics are sufficient

## Chosen Pattern

The classic approach: an `<a>` that stretches to fill the entire card surface via `position: absolute` and `inset: 0`, on a `position: relative` parent. This avoids stacking JS listeners on a `<div>`.

```html
<article class="card">
  <h2><a href="/..." class="card-link stretched-link">Title</a></h2>
  <p>Card description.</p>
</article>
```

```css
.card { position: relative; }

.stretched-link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.stretched-link:focus-visible::after {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-md);
}
```

## Key Points

- `:focus-visible` only shows the ring during keyboard navigation, not on mouse click
- `outline` is preferred over `box-shadow` for broader browser compatibility
- `inset: 0` is a modern shorthand for `top: 0; right: 0; bottom: 0; left: 0`
