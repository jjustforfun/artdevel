# Tâche 02 — Collection Projets

## Contexte
Lis `docs/brief.yaml`, `docs/content-model.yaml` et `docs/decisions.md`
avant de commencer. La tâche 01 (bootstrap) doit être terminée.

## Objectif
Implémenter la collection "projects" complète : listing + pages détail,
dans les 3 langues.

## Étapes
1. Créer le schéma Zod complet pour `projects` selon `content-model.yaml`
2. Créer la page listing :
   - `/projets/`, `/en/projects/`, `/ru/proekty/`
   - grille de cartes responsive
   - tri par date, mise en avant des projets `featured`
3. Créer la page détail dynamique (`[slug].astro`) :
   - cover image
   - résumé, contexte, problème, solution
   - stack technique (tags)
   - galerie (si présente)
   - bloc vidéo YouTube (si présent)
   - boutons démo / repo (si présents)
4. Composant `ProjectCard.astro` réutilisable
5. Créer 2 projets d'exemple, traduits en FR/EN/RU (via `translationKey`)
6. Vérifier qu'un projet SANS image, SANS vidéo, SANS lien
   s'affiche proprement sans erreur ni bloc cassé

## Contraintes
- Respecter strictement les règles "optional_media_rule" de `content-model.yaml`
- Aucune donnée ne doit être en dur dans le composant : tout vient du frontmatter
- Code simple, commenté si logique non triviale

## Livrable
Listing + détail projets fonctionnels dans les 3 langues, avec cas
"champs optionnels absents" testé et propre.

## Fin de tâche
Mettre à jour `docs/decisions.md`.