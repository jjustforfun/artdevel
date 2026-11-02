# Tâche 03 — Design System & Thèmes

## Contexte
Lis `docs/brief.yaml` (section `theme` et `design`) avant de commencer.

## Objectif
Mettre en place le système de design complet : tokens, thème clair/sombre,
composants UI de base.

## Étapes
1. Créer `src/styles/tokens.css` avec variables CSS :
   - thème clair : ivoire chaud / lait / safari, texte brun-gris foncé
   - thème sombre : charbon doux (jamais noir pur), texte beige sablé
   - variables : background, surface, text, text-muted, border, accent
2. Implémenter le switch de thème :
   - respect de `prefers-color-scheme` au premier chargement
   - toggle manuel dans le header
   - persistance du choix (localStorage)
   - pas de flash de mauvais thème au chargement (script inline ou solution native Astro)
3. Créer/finaliser les composants :
   - `Header.astro` (nav + switch langue + switch thème)
   - `Footer.astro`
   - `ProjectCard.astro`, `ArticleCard.astro`, `PlaygroundCard.astro`
   - `Tag.astro` / `Badge.astro`
   - `CTAButton.astro`
   - `Timeline.astro` (pour la page À propos)
4. Typographie : échelle de titres cohérente, bonne lisibilité, espacement généreux
5. Micro-interactions sobres uniquement (hover doux, fade, pas d'animation excessive)

## Contraintes
- Respecter la palette exacte définie dans `brief.yaml`
- Contraste suffisant dans les deux thèmes (WCAG 2.2 AA)
- Aucun noir pur, aucun blanc pur
- Mobile-first

## Livrable
Système de thème fonctionnel et testé sur au moins 3 pages différentes,
composants réutilisables prêts à l'emploi.

## Fin de tâche
Mettre à jour `docs/decisions.md`.