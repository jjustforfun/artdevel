# Tâche 04 — SEO technique, Local SEO et GEO (Generative Engine Optimization)

## Contexte
Lis `docs/brief.yaml` (section `seo`) avant de commencer.
Cette tâche couvre TROIS couches distinctes :
1. SEO technique classique (moteurs de recherche traditionnels)
2. SEO local/géographique (France, Auvergne-Rhône-Alpes, villes cibles)
3. GEO — optimisation pour les moteurs génératifs IA (ChatGPT, Perplexity,
   Gemini, Google AI Overviews)

## Partie A — SEO technique de base
1. Composant `<SEO>` réutilisable : title, meta description, canonical,
   Open Graph, hreflang (avec x-default -> accueil FR)
2. Sitemap automatique (intégration officielle Astro)
3. `robots.txt` correct
4. Structure de titres cohérente (un seul `<h1>` par page)
5. JSON-LD :
   - `Person` sur la page À propos
   - `BlogPosting` sur les articles de blog
   - `LocalBusiness` UNIQUEMENT si infos business réelles affichées sur la page

## Partie B — SEO local / géographique
1. Mentions naturelles des zones couvertes (France, Auvergne-Rhône-Alpes, Lyon,
   Villeurbanne, Bron, Vénissieux, Caluire-et-Cuire, Écully)
   dans : accueil, à propos, footer
2. NE PAS créer de pages quasi-identiques par ville
3. Bloc "zone d'intervention" sur l'accueil, rédigé naturellement, pas en
   liste de mots-clés

## Partie C — GEO (Generative Engine Optimization)
Objectif : rendre le contenu citable et exploitable par les moteurs IA
génératifs, en plus du SEO classique. Le GEO ne remplace pas le SEO, il
s'y ajoute.

1. **Structure "extraction-friendly"** : chaque section importante (bio,
   projet, service) doit pouvoir répondre à une question précise en
   quelques phrases autonomes et vérifiables, car les moteurs IA
   extraient des passages courts de chaque page plutôt que la page entière.
2. **Première phrase définitionnelle claire** sur les pages clés
   (À propos, Projets) : structure du type
   "[Nom] est un [rôle] qui [différenciateur]" — les moteurs IA
   accordent un poids important aux 150-200 premiers tokens d'une page
   lors de la synthèse.
3. **Contenu factuel et vérifiable** : privilégier chiffres concrets,
   dates précises, exemples réels plutôt que formulations vagues —
   les études montrent que statistiques sourcées et citations
   d'expert augmentent significativement les chances d'être cité
   par un moteur génératif.
4. **Format Q&A / FAQ** sur les pages pertinentes (À propos, services) :
   les moteurs IA reflètent la façon dont les gens posent leurs
   questions, donc structurer le contenu autour de vraies questions
   aide à être repris dans les réponses IA.
5. **Fraîcheur du contenu** : dater visiblement les articles de blog,
   mettre à jour `dateModified` en JSON-LD quand un contenu est révisé,
   maintenir un sitemap à jour — ces signaux de fraîcheur comptent
   pour la découverte par les moteurs génératifs.
6. **Ne pas bourrer de mots-clés** : le GEO récompense la densité
   factuelle et la lisibilité, pas le bourrage de mots-clés ni la
   sur-simplification artificielle du texte.
7. **JSON-LD structuré et honnête** : les données structurées doivent
   refléter fidèlement le contenu visible sur la page, sans exagération.

## Contraintes générales
- Ne jamais sacrifier la lisibilité humaine au profit du GEO
- Toute affirmation locale ou factuelle doit être réelle, pas inventée
- Un rich result ou une citation IA n'est jamais garanti même avec un
  balisage parfait — l'objectif est d'optimiser les chances, pas de
  promettre un résultat

## Livrable
- `<SEO>` component fonctionnel sur toutes les pages
- Sitemap + robots.txt valides
- JSON-LD validé (Person, BlogPosting)
- Page À propos et Projets avec structure définitionnelle claire en
  ouverture de section
- Section FAQ ajoutée sur au moins la page À propos

## Fin de tâche
Mettre à jour `docs/decisions.md`.