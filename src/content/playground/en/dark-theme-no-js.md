---
title: "Dark theme adaptive without JavaScript"
slug: "dark-theme-no-js"
locale: "en"
translationKey: "dark-theme-experiment"
summary: "Exploring light/dark mode switching with pure CSS, using `prefers-color-scheme` and Custom Properties — zero JavaScript."
date: 2026-07-10
type: experiment
stack:
  - CSS
  - Custom Properties
  - HTML
---

## Context

Most dark mode tutorials rely on JavaScript to store user preferences in `localStorage`. This experiment explores how far you can get with CSS alone.

## Approach

Two native mechanisms make this work:

- `prefers-color-scheme` to detect the system preference
- Custom Properties redefined in `:root` based on the media query

```css
:root {
  --color-bg: #faf9f6;
  --color-text: #2c2825;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1e1d1b;
    --color-text: #e8e2d9;
  }
}
```

## Results

- ✅ Zero JS, zero flash on load
- ✅ Respects system preference without any scripting
- ⚠️ Limitation: no persistent manual toggle (requires JS + `localStorage`)

## Conclusion

For a static, eco-designed portfolio, this pattern is ideal. Manual toggling can always be added as a progressive enhancement with minimal JS.
