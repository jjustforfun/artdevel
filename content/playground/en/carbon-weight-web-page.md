---
title: "Measuring the Carbon Weight of a Web Page"
slug: "carbon-weight-web-page"
locale: "en"
translationKey: "carbon-weight-lab-note"
summary: "Lab note: a practical method to estimate and reduce the carbon footprint of a web page, with concrete tools and benchmarks."
date: 2026-08-05
type: lab-note
stack:
  - Performance
  - Eco-design
  - DevTools
---

## Why Measure?

The digital sector accounts for approximately 4% of global CO₂ emissions. A typical web page today weighs over 2 MB — 10× more than in 2010.

## Tools Used

- **[Website Carbon Calculator](https://www.websitecarbon.com/)**: estimates CO₂ emissions per visit
- **Chrome DevTools → Network**: analyzes total transferred weight
- **Lighthouse**: Performance score + optimization opportunities

## Results on This Site

| Metric | Value |
|---|---|
| Total weight (home) | ~28 KB |
| CO₂ per visit | ~0.002 g |
| Lighthouse score | 98+ |

## Most Impactful Actions

1. **Remove unused fonts** — each `font-face` can cost 50–200 KB
2. **Switch to modern formats** — WebP, AVIF instead of PNG/JPG
3. **No client-side JS framework** — React/Vue alone can weigh 100–300 KB
4. **Enable Brotli compression** server-side

## Conclusion

Eco-design is not a sacrifice — it's a creative constraint. A lightweight site is always a fast site, and a fast site converts better.
