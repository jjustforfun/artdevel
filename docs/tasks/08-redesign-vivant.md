# Tâche 08 — Redesign : professionnel, moderne et vivant

## Contexte
Lis d'abord docs/brief.yaml, docs/content-model.yaml et docs/decisions.md.
Le site est fonctionnel (i18n FR/EN/RU, SEO, collections, thèmes) mais le
design actuel ressemble à un site de documentation ou un blog littéraire.
C'est PLAT et SANS ÉNERGIE. Objectif : lui donner une identité de
développeur indépendant moderne, confiant, orienté business.

## Direction artistique cible
Personnalité du site : "jeune développeur produit, précis, énergique,
prêt à relever des défis" — PAS "poète", PAS "documentation technique".

Références d'esprit (ne pas cloner) : portfolios dev modernes type
Linear/Vercel/Stripe pour la netteté, avec une touche chaleureuse.

## Ce qui doit changer

### 1. Hero — l'énergie se joue ici
- Titre très grand, sans-serif bold, accroche directe orientée valeur
  (ex : "Je construis des sites rapides qui servent vos objectifs")
- Sous-titre court : qui je suis + disponibilité (alternance sept. 2026,
  missions freelance)
- 2 CTA contrastés : primaire plein (accent), secondaire outline
- Un élément visuel VIVANT au choix :
  - dégradé animé subtil derrière le titre (CSS only), OU
  - texte avec effet de surlignage/accent coloré sur mots-clés, OU
  - motif de points/grille animé discret en arrière-plan
- Badge "Disponible" avec point vert pulsant (CSS animation)

### 2. Typographie
- Sans-serif moderne : Inter, Manrope ou Geist (variable font)
- Échelle typographique marquée : h1 très gros (clamp 2.5rem→4.5rem),
  contraste fort entre titres et corps
- Mono (JetBrains Mono) pour les tags techniques, petites étiquettes,
  chiffres — ça donne le côté "dev" sans faire documentation
- letter-spacing serré sur les gros titres (-0.02em)

### 3. Couleurs — garder chaud mais ajouter du punch
- Thème clair : fond ivoire chaud conservé, MAIS accent franc et saturé
  (bleu électrique #2563EB ou teal #0D9488) utilisé avec intention :
  CTA, liens, surlignages, icônes, bordures actives
- Thème sombre : charbon doux conservé, texte sable, accent lumineux
  (#60A5FA ou #2DD4BF)
- Ajouter UNE couleur secondaire d'énergie (ambre #F59E0B ou corail)
  pour les badges, highlights, hover — max 10% de la surface
- Règle 60/30/10 : 60% neutre, 30% surface/contraste, 10% accent

### 4. Cartes et surfaces — sortir du plat
- Cartes avec : bordure subtile + ombre douce au repos, élévation
  au hover (translateY(-4px) + ombre plus marquée + bordure accent)
- Coins arrondis modérés (12-16px), pas de cartes carrées sèches
- Sur les cartes projets : image/placeholder coloré en haut, tags mono,
  flèche "→" qui se déplace au hover
- Placeholders sans image : dégradé généré à partir des tags ou
  initiales du projet — jamais de bloc gris vide

### 5. Micro-interactions (CSS/minimal JS, pas de lib lourde)
- Transitions 150-250ms ease-out partout (hover, focus, thème)
- Liens avec soulignement animé (scale-x au hover)
- Boutons : léger scale ou glow au hover, état active visible
- Apparition au scroll : fade-up subtil des sections
  (IntersectionObserver léger ou animation-timeline CSS si supporté)
- Nombres/stats qui comptent à l'apparition si section stats (optionnel)

### 6. Rythme et structure des pages
- Alterner les fonds de section (fond / surface / fond) pour créer
  du rythme vertical — fini le long fleuve uniforme
- Sections avec en-têtes marqués : petit label mono coloré au-dessus
  ("PROJETS", "SERVICES") + gros titre
- Espacement généreux mais pas vide : max-width contenu ~1100-1200px
- Homepage restructurée :
  1. Hero énergique
  2. Bandeau preuves/stack (badges tech en mono)
  3. Services (3-4 cartes)
  4. Projets sélectionnés (3 max, cartes riches)
  5. Méthode de travail (4 étapes numérotées)
  6. CTA final contrasté (section à fond accent ou sombre inversé)

### 7. Détails qui font "pro et vif"
- Footer soigné : pas 2 lignes tristes — colonnes, nav, contact,
  localisation, réseaux
- Favicon et touches de branding cohérentes
- Scrollbar stylée discrète (optionnel)
- Focus states visibles et élégants (outline accent, pas le bleu défaut)

## Contraintes STRICTES
- NE PAS toucher : routes, i18n, collections, schémas, SEO, hreflang,
  JSON-LD, sitemap
- NE PAS ajouter de framework JS ni de lib d'animation lourde
  (pas de GSAP, pas de Framer Motion) — CSS moderne + JS vanilla minimal
- Respecter prefers-reduced-motion : désactiver les animations si activé
- Contraste WCAG AA maintenu dans les deux thèmes
- Tout centraliser dans tokens.css : couleurs, ombres, radius, transitions
- Mobile-first : le hero et les cartes doivent être superbes sur mobile

## Livrable
Site visuellement transformé, énergique et professionnel, sans aucune
régression fonctionnelle (build OK, 3 langues OK, SEO intact).

## Fin de tâche
Mettre à jour docs/decisions.md (choix design faits, tokens ajoutés).