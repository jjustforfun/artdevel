# Tâche 05 — Blog / Journal

## Contexte
Lis `docs/brief.yaml` et `docs/content-model.yaml` (collection `blog`).

## Objectif
Implémenter la page Blog / Journal : listing + détail, dans les 3 langues.

## Étapes
1. Finaliser le schéma Zod `blog` selon `content-model.yaml`
2. Page listing (`/blog/`, `/en/blog/`, `/ru/blog/`) :
   - liste éditoriale simple, pas de grille lourde
   - distinction visuelle légère entre type de contenu
     (article de fond / note courte / journal / tutoriel)
3. Page détail article :
   - largeur de contenu confortable pour la lecture
   - bloc auteur/date/meta
   - table des matières optionnelle pour articles longs
   - bloc vidéo YouTube (si présent, sinon rien)
   - bloc "articles liés" (basé sur tags/catégorie)
4. Flux RSS via le package officiel Astro
5. JSON-LD `BlogPosting` sur chaque article
6. Créer 1-2 articles d'exemple traduits FR/EN/RU

## Contraintes
- Respecter la règle des champs optionnels (rien ne casse si absent)
- Contenu long-form doit rester très lisible (ligne de lecture confortable)
- Appliquer les principes GEO de la tâche 04 sur les articles
  (première phrase claire, contenu factuel, dater visiblement)

## Livrable
Blog fonctionnel, flux RSS actif, au moins 1 article complet par langue.

## Fin de tâche
Mettre à jour `docs/decisions.md`.