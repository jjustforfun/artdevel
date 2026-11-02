---
title: "Mesurer le poids carbone d'une page web"
slug: "poids-carbone-page-web"
locale: "fr"
translationKey: "carbon-weight-lab-note"
summary: "Note de laboratoire : méthode pratique pour estimer et réduire l'empreinte carbone d'une page web, avec des outils concrets."
date: 2026-08-05
type: lab-note
stack:
  - Performance
  - Éco-conception
  - DevTools
---

## Pourquoi mesurer ?

Le numérique représente environ 4% des émissions mondiales de CO₂. Une page web typique pèse aujourd'hui plus de 2 Mo — soit 10× plus qu'en 2010.

## Outils utilisés

- **[Website Carbon Calculator](https://www.websitecarbon.com/)** : estime les émissions CO₂ par visite
- **Chrome DevTools → Network** : analyse le poids total transféré
- **Lighthouse** : score Performance + opportunités d'optimisation

## Résultats sur ce site

| Métrique | Valeur |
|---|---|
| Poids total (home) | ~28 Ko |
| CO₂ par visite | ~0.002 g |
| Score Lighthouse | 98+ |

## Actions les plus efficaces

1. **Supprimer les fonts inutilisées** — chaque `font-face` peut coûter 50–200 Ko
2. **Passer à des formats modernes** — WebP, AVIF au lieu de PNG/JPG
3. **Pas de librairie JS côté client** — un framework React/Vue peut peser 100–300 Ko seul
4. **Activer la compression Brotli** côté serveur

## Conclusion

L'éco-conception n'est pas un sacrifice — c'est une contrainte créative. Un site léger est toujours un site rapide et un site rapide convertit mieux.
