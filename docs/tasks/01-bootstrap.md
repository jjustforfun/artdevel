# Tâche 01 — Bootstrap du projet

## Contexte
Lis d'abord `docs/brief.yaml` et `docs/content-model.yaml`.
Applique ces specs sans les réexpliquer.

## Objectif
Initialiser le projet Astro complet, structure vide mais fonctionnelle.

## Étapes
1. Init Astro + TypeScript (mode strict)
2. Configurer i18n natif :
   - FR par défaut (sans préfixe)
   - EN et RU avec préfixe
3. Créer la structure de dossiers selon `content-model.yaml`
4. Créer les collections de contenu (schémas Zod) vides
5. Créer le layout de base : header (nav + switch langue + switch thème), footer, `<slot />`
6. Créer les 5 pages pour chaque langue (vides mais routées)
7. Ajouter sitemap + robots.txt
8. Ajouter helper hreflang + canonical
9. Créer `src/styles/tokens.css` avec les 2 thèmes (ivoire chaud / charbon doux)
10. Compléter le `README.md` (déjà présent) si besoin

## Contraintes
- Code simple et lisible
- Commenter les choix non évidents
- Pas de sur-ingénierie
- Respecter les critères d'acceptation de `brief.yaml`

## Livrable
Projet buildable, déployable, pages vides mais valides en FR/EN/RU.

## Fin de tâche
Mettre à jour `docs/decisions.md` : état, avancement, décisions prises.