# Tâche 06 — Expérience & Atelier (Playground)

## Contexte
Lis `docs/content-model.yaml` (collections `experience` et `playground`).

## Objectif
Implémenter la timeline d'expérience (page À propos) et la page Atelier.

## Étapes
1. Schéma Zod `experience` + `playground` selon `content-model.yaml`
2. Composant `Timeline.astro` pour afficher l'expérience sur la page À propos
3. Page Atelier (`/atelier/`, `/en/playground/`, `/ru/masterskaya/`) :
   - grille légèrement plus "expérimentale" que les projets
   - distinction par type (experiment, component, prototype, challenge, lab-note)
4. Page détail atelier (même logique que projets : champs optionnels safe)
5. Créer 1-2 expériences pro + 2-3 items d'atelier d'exemple, traduits

## Contraintes
- Réutiliser les composants déjà créés (cards, tags) plutôt que dupliquer
- Cohérence visuelle avec le reste du site, tout en gardant l'atelier
  un peu plus "libre" dans le ton

## Livrable
Page À propos avec timeline fonctionnelle, page Atelier complète dans
les 3 langues.

## Fin de tâche
Mettre à jour `docs/decisions.md`.