---
title: "Composant Card accessible avec focus visible"
slug: "card-accessible-focus"
locale: "fr"
translationKey: "accessible-card-component"
summary: "Prototype d'une carte cliquable entièrement accessible au clavier, avec un focus visible soigné et une sémantique HTML correcte."
date: 2026-07-28
type: component
stack:
  - HTML
  - CSS
  - Accessibilité
---

## Objectif

Créer une card component qui soit :

- Navigable au clavier (tab order correct)
- Avec un focus ring visible et esthétique
- Sans aria artificiel là où la sémantique HTML suffit

## Pattern retenu

L'astuce classique : un `<a>` couvrant toute la surface de la carte via `position: absolute` et `inset: 0`, sur un parent `position: relative`. Cela évite d'empiler des listeners JS sur un `<div>`.

```html
<article class="card">
  <h2><a href="/..." class="card-link stretched-link">Titre</a></h2>
  <p>Description de la carte.</p>
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

## Points clés

- Le `:focus-visible` n'affiche le ring qu'en navigation clavier, pas au clic souris
- L'`outline` est préféré au `box-shadow` pour une meilleure compatibilité navigateur
- `inset: 0` est un raccourci moderne pour `top: 0; right: 0; bottom: 0; left: 0`
