---
title: "Animated CSS Button"
slug: "animated-css-button"
locale: "en"
translationKey: "animated-css-button"
summary: "Exploration of an interactive button with modern CSS micro-interactions"
date: 2026-08-10
type: component
stack:
  - CSS
  - HTML
demoUrl: "https://exemple.com/demo"
---

## Overview

This component explores creating an interactive button leveraging modern CSS properties: smooth transitions, hover effects, and tactile micro-interactions with zero JavaScript.

## Component Code

```html
<button class="btn-glow">
  <span>Explore</span>
</button>
```

```css
.btn-glow {
  position: relative;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-sans);
  font-weight: 600;
  color: #ffffff;
  background: var(--cta);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease),
    box-shadow var(--duration-fast) var(--ease);
}

.btn-glow:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: var(--shadow-md);
}

.btn-glow:active {
  transform: scale(0.98);
}
```
