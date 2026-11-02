# Tâche 07 — Contenu réel et traductions finales

## Contexte
Toutes les pages et collections sont fonctionnelles avec du contenu
d'exemple. Cette tâche remplace le contenu d'exemple par le vrai contenu.

## Objectif
Remplacer tous les contenus placeholder par du contenu réel et vérifier
la cohérence des traductions FR/EN/RU.

## Étapes
1. Remplir `src/data/site.ts` avec les vraies infos (nom, email, réseaux,
   localisation réelle)
2. Rédiger le vrai contenu de la page À propos (bio, parcours, compétences)
   dans les 3 langues
3. Remplacer les projets d'exemple par les vrais projets
4. Ajouter les vraies expériences professionnelles
5. Vérifier la cohérence des `translationKey` entre les 3 langues
   (même clé = même contenu traduit, pas de page orpheline)
6. Relire chaque page dans les 3 langues pour vérifier :
   - pas de texte non traduit oublié
   - pas de lien cassé
   - cohérence des dates et formats (dates françaises, anglaises, russes)

## Contraintes
- Ne jamais inventer d'informations factuelles (villes, chiffres, clients)
- Respecter les principes GEO : contenu factuel et vérifiable partout

## Livrable
Site avec contenu 100% réel, cohérent dans les 3 langues, prêt à être
montré en entretien ou à un client.

## Fin de tâche
Mettre à jour `docs/decisions.md` : passer le statut global à
"prêt pour mise en ligne".


