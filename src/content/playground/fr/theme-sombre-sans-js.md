---
title: "Thème sombre adaptatif sans JavaScript"
slug: "theme-sombre-sans-js"
locale: "fr"
translationKey: "dark-theme-experiment"
summary: "Exploration de la bascule light/dark mode en CSS pur, avec `prefers-color-scheme` et Custom Properties — zéro ligne de JS."
date: 2026-07-10
type: experiment
stack:
  - CSS
  - Custom Properties
  - HTML
---

## Contexte

La plupart des tutoriels de thème sombre utilisent JavaScript pour stocker la préférence dans `localStorage`. Cette expérimentation explore jusqu'où on peut aller avec CSS seul.

## Approche

L'idée repose sur deux mécanismes natifs :

- `prefers-color-scheme` pour détecter la préférence système
- Des Custom Properties redéfinies dans `:root` selon la media query

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

## Résultats

- ✅ Zéro JS, zéro flash au chargement
- ✅ Respecte la préférence système sans intervention
- ⚠️ Limite : pas de bascule manuelle persistante côté utilisateur (nécessite JS + `localStorage`)

## Conclusion

Pour un portfolio statique éco-conçu, ce pattern est idéal. La bascule manuelle peut être ajoutée avec un minimum de JS en enhancement progressif.
