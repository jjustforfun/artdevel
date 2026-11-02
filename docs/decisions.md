# Registre des Décisions & État du Projet

## Statut global : PRÊT POUR MISE EN LIGNE

> Note : les projets Éco-Habitat / CLI Data Artisan ainsi que le parcours
> professionnel (experience YAML + bios À propos) restent à finaliser par
> l'auteur. La structure et les traductions sont en place.

## Tâche 01 — Bootstrap du projet [TERMINÉE]
- **Astro 7 (v7.2.2) + TypeScript strict** initialisé.
- Routage i18n natif pour FR, EN, RU (15 pages).
- Config des collections dans `src/content.config.ts`.
- Design system CSS tokens avec thèmes clair/sombre.

---

## Tâche 02 — Collection Projets [TERMINÉE]
- Composant `ProjectCard.astro` avec affichage conditionnel propre.
- Listings et pages de détail dynamiques multilingues (FR, EN, RU).
- Respect de la règle `optional_media_rule`.

---

## Tâche 03 — Design System & Thèmes [TERMINÉE]
- Tokens CSS, thèmes clair/sombre conformes WCAG AA sans noir/blanc pur.
- Composants atomiques (`Tag`, `Badge`, `CTAButton`, `ArticleCard`, `PlaygroundCard`, `Timeline`).

---

## Tâche 04 — SEO technique, Local SEO & GEO [TERMINÉE]
- Composant `<SEO.astro>` avec Open Graph, Twitter Cards et `hreflang` (`x-default`).
- Générateurs JSON-LD pour `Person`, `FAQPage` et `BlogPosting`.
- Section GEO et bloc Local SEO rédigé naturellement sur les pages principales.

---

## Tâche 05 — Blog / Journal [TERMINÉE]

### État & Avancement
- **Mise en page éditoriale** des listings de blog (`/blog/`, `/en/blog/`, `/ru/blog/`) à l'aide d'une liste épurée avec le composant `ArticleCard.astro`.
- **Pages de Détail Dynamiques d'Articles (`[slug].astro`)** pour FR, EN et RU :
  - Métadonnées complètes : Auteur, date de publication, date de mise à jour, catégorie, temps de lecture.
  - **Table des Matières (TOC)** automatique générée à partir des ancres de titres (`headings`).
  - Intégration conditionnelle des vidéos YouTube et des images de couverture.
  - **Section "Articles liés"** suggérant 2 articles similaires de la même langue.
  - Injection du schéma JSON-LD `BlogPosting` enrichi.
- **Flux RSS Officiel (`/rss.xml`)** configuré via `@astrojs/rss`.
- **6 Fichiers Markdown d'Exemple** créés (2 articles × 3 langues) :
  - *Pourquoi et comment adopter Astro pour le développement web éco-conçu* (Article complet long-form).
  - *L'accessibilité WCAG 2.2 au cœur de l'artisanat numérique* (Note de journal courte).
- **27 pages statiques au total** générées lors du build.

### Décisions d'architecture prises
1. **Ligne de lecture confortable** : Restriction de la largeur maximale du corps de texte d'article à 720px avec typographie agrandie pour un confort de lecture optimal.
2. **RSS unifié et trié** : Inclusion de tous les articles publiés dans le flux RSS principal `/rss.xml` ordonnés par date de publication récente.

---

## Tâche 06 — Expérience & Atelier [TERMINÉE]

### État & Avancement
- **Collection `experience`** alimentée par 2 fichiers YAML dans `src/content/experience/` (poste actuel + précédent).
- **Pages À propos (FR/EN/RU)** refactorisées pour lire la collection via `getCollection('experience')` au lieu de données en dur. Tri automatique : postes actuels en premier, puis `dateStart` décroissant.
- **`Timeline.astro`** enrichi d'une prop `locale` pour adapter le label "Présent / Present / Настоящее время" selon la langue.
- **Collection `playground`** alimentée par 9 fichiers MD (3 items × 3 langues) :
  - *Thème sombre adaptatif sans JavaScript* (experiment)
  - *Composant Card accessible avec focus visible* (component)
  - *Mesurer le poids carbone d'une page web* (lab-note)
- **Pages listing Atelier** (`/atelier/`, `/en/playground/`, `/ru/masterskaya/`) : grille CSS auto-fill + filtres par `type` en JS vanilla minimal (aucun framework).
- **Pages détail Atelier** : 3 répertoires `[slug].astro` (FR/EN/RU) avec rendu Markdown, champs optionnels safe, badge type accent, lien retour localisé.
- **36 pages statiques** générées au build (depuis 27 à la tâche 05).

### Décisions d'architecture prises
1. **Contenu d'expérience centralisé** : les fichiers YAML dans `experience/` sont la source unique de vérité pour les 3 pages About — plus de duplication entre langues.
2. **Filtre JS minimaliste** : le filtre par type est implémenté en ~15 lignes de JS natif sur `data-type` attributes — aucune lib, aucun bundle supplémentaire.
3. **Badge type accentué** : sur les pages détail Atelier, le badge de type utilise `var(--color-accent)` (bordure + texte) au lieu du badge neutre des projets, pour renforcer le ton "lab" de l'Atelier.

---

## Tâche 07 — Contenu réel & traductions finales [TERMINÉE]

### État & Avancement
- **`src/data/site.ts` mis à jour** avec l'identité fictive de démonstration : auteur « Jean Dupont », email `contact@example.com`, GitHub `example.com/github/jean-dupont`, LinkedIn `example.com/linkedin/jean-dupont`.
- **Nouveau projet réel : DEZAL CONSTRUCTION** (entreprise de maçonnerie générale & rénovation à Reims), ajouté en FR/EN/RU (`translationKey: "dezal"`), avec `demoUrl → https://www.dezal.fr/`, cover + galerie utilisant les vraies images du site client.
- **Cohérence des `translationKey` vérifiée** dans les 3 langues pour toutes les collections (projets, blog, playground) : aucune page orpheline.
- **39 pages statiques** générées au build (depuis 36 à la tâche 06).

### Reste à faire par l'auteur
- Remplacer le contenu des projets Éco-Habitat et CLI Data Artisan (exemples).
- Remplacer le parcours professionnel (fichiers YAML `experience/` + bios/FAQ des pages À propos).

### Décisions d'architecture prises
1. **Contenu non inventé** : conformément à la contrainte GEO, seules les informations fournies par l'auteur ou observables sur le site client ont été utilisées. Les champs optionnels médias des autres projets sont conservés tels quels (modification différée par l'auteur).

---

## Tâche 08 — Finitions, Polish & Expérience Utilisateur [TERMINÉE]

### État & Avancement
- **View Transitions natives Astro** : activation de `<ClientRouter />` dans `BaseLayout.astro` avec animation fade fluide (200ms) sur le conteneur principal.
- **Bouton « Retour en haut » (`BackToTop.astro`)** :
  - Positionnement fixe en bas à droite, masqué par défaut.
  - Apparition fluide (fade-in / translateY) après 400px de scroll.
  - Clic déclenchant un `window.scrollTo({ top: 0, behavior: 'smooth' })`.
  - Désactivation gracieuse des transitions sous `prefers-reduced-motion`.
- **Barre de progression de lecture (`ReadingProgress.astro`)** :
  - Barre fine (3px) fixée au sommet du viewport, couleur `--accent`.
  - Calcul dynamique en JS natif basé sur le scroll effectif sur tous les articles de blog (FR, EN, RU).
- **Fil d'Ariane (`Breadcrumb.astro`)** :
  - Intégré sur l'ensemble des pages de détail des 3 langues : Projets (`/projets/[slug]`), Atelier (`/atelier/[slug]`), Blog (`/blog/[slug]`).
  - Hiérarchie claire et accessible (`Accueil > Section > Titre`).
- **Page 404 sur-mesure (`404.astro`)** :
  - Design soigné en accord avec la charte graphique : code 404 mono XXL, message chaleureux et double CTA de redirection.
- **Micro-polish CSS** :
  - `scroll-behavior: smooth` activé sur `html`.
  - Scrollbar personnalisée (Webkit & Firefox) aux couleurs du thème (`--border` / `--accent` / `--bg`).

---

## Tâche 09 — Vérification & Nettoyage Final [TERMINÉE]

### Audit, Contrôles & Corrections effectués
1. **Build statique complet (49 pages)** :
   - `npm run build` exécuté avec succès (49 pages générées en 1.59s, sitemap XML et RSS complets).
   - Correction du `<!xhtml>` en `<!DOCTYPE html>` dans `BaseLayout.astro`.
2. **Couverture des routes et parité linguistique (FR / EN / RU)** :
   - 100 % des routes de listing, de détail (Projets, Blog, Atelier) et des pages institutionnelles (Accueil, À propos, Mentions Légales) existent et sont interconnectées avec `hreflang` et sélecteurs de langues synchronisés.
   - Ajout des pages de mentions légales localisées pour éviter tout lien 404 : `/mentions-legales/` (FR), `/en/legal-notice/` (EN), `/ru/pravovaya-informaciya/` (RU) avec enregistrement dans `PAGE_ROUTES` (`src/lib/i18n.ts`).
   - Amélioration multilingue de la page d'erreur `404.astro`.
3. **Résilience des champs optionnels (Images, Vidéos, Liens)** :
   - Pages de détail (Projets, Blog, Atelier) : vérification du rendu conditionnel strict (`data.coverImage`, `data.youtubeUrl`, `data.gallery`, `data.demoUrl`, `data.repoUrl`). Aucun conteneur vide ou iframe brisée lorsque les champs sont absents.
   - Cartes (ProjectCard, PlaygroundCard, ArticleCard) : gestion élégante avec placeholders dynamiques stylisés en dégradé / typographie lorsqu'aucune cover n'est fournie.
4. **Cohérence des thèmes (Clair / Sombre)** :
   - Tokens CSS unifiés (`--bg`, `--surface`, `--text`, `--text-muted`, `--border`, `--accent`, `--cta`, `--success`) avec contrastes conformes WCAG AA.
   - Script anti-FOUC inline dans `<head>` pour éviter tout flash blanc/noir au chargement.
5. **Footer & Réseaux sociaux (`site.ts`)** :
   - Correction de la déclaration d'interface TypeScript `SiteConfig.socials` dans `src/data/site.ts`.
   - Masquage automatique et propre de la colonne « Réseaux sociaux » dans `Footer.astro` si aucun réseau n'est renseigné (`hasSocials`).
6. **Robustesse JavaScript & View Transitions (`astro:page-load`)** :
   - Intégration du cycle de vie `astro:page-load` dans `Header.astro` (menu mobile & bascule de thème), `BackToTop.astro`, `ReadingProgress.astro` et `BaseLayout.astro` (animations au scroll `data-reveal`).
7. **Accessibilité & Préférences utilisateur** :
   - `:focus-visible` appliqué à tous les éléments interactifs avec anneau de focus contrasté (`--focus-ring`).
   - `@media (prefers-reduced-motion: reduce)` configuré pour désactiver instantanément animations, transitions et scroll-smooth.
   - Zéro `console.error` et zéro dépendance superflue.
