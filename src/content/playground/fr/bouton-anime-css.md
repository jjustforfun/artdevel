---
title: "Bouton animé CSS"
slug: "bouton-anime-css"
locale: "fr"
translationKey: "animated-css-button"
summary: "Exploration d'un bouton avec micro-interactions CSS modernes"
date: 2026-08-10
type: component
stack:
  - CSS
  - HTML
demoUrl: "https://exemple.com/demo"
---

## Présentation

Ce composant explore la création d'un bouton interactif tirant parti des fonctionnalités CSS modernes : transitions fluides, effet de halo au focus et micro-interactions au clic sans aucun JavaScript.

## Code du composant

```html
<button class="btn-glow">
  <span>Découvrir</span>
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

## Points d'apprentissage

- Respect de `prefers-reduced-motion` pour désactiver les animations si demandé.
- Maintien d'un focus visible pour la navigation au clavier.
