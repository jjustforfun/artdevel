# Portfolio JEAN DUPONT

Site portfolio personnel multilingue (FR / EN / RU), ultra-rapide, sobre et éditorial construit avec **Astro 5** et **TypeScript**.

## 🚀 Guide de démarrage

### Installation des dépendances

```bash
npm install
```

### Développement local

```bash
npm run dev
```

Accédez au site sur `http://localhost:4321`.

### Build de production

```bash
npm run build
```

---

## 📖 Guide de gestion du contenu

### 1. Comment ajouter un Projet
Les projets sont stockés dans des fichiers Markdown sous `src/content/projects/`.
Créer un fichier Markdown (ex: `src/content/projects/nouveau-projet-fr.md`) avec le frontmatter suivant :

```markdown
---
title: "Nom du projet"
slug: "nom-du-projet"
locale: "fr"
translationKey: "mon-projet-unique-key"
summary: "Un résumé court du projet."
date: 2026-08-16
tags: ["Astro", "TypeScript"]
stack: ["Astro", "CSS"]
status: "Terminé"
coverImage: "/images/projets/cover.jpg" # Optionnel
demoUrl: "https://demo.com"             # Optionnel
repoUrl: "https://github.com/..."       # Optionnel
youtubeUrl: "https://youtube.com/..."   # Optionnel
---

Contenu détaillé du projet en Markdown...
```

### 2. Comment ajouter un Article de Blog
Les articles sont stockés sous `src/content/blog/`.
Créer un fichier Markdown (ex: `src/content/blog/mon-premier-article-fr.md`) :

```markdown
---
title: "Titre de l'article"
slug: "titre-article"
locale: "fr"
translationKey: "cle-traduction-article"
excerpt: "Extrait de l'article affiché sur la liste."
datePublished: 2026-08-16
category: "Développement"
tags: ["Astro", "Web"]
draft: false
---

Contenu de l'article en Markdown...
```

### 3. Comment modifier les informations globales
Les informations globales du site (nom, auteur, tagline, réseaux sociaux, villes) sont définies dans `src/data/site.ts` :

```typescript
export const siteConfig = {
   name: "JEAN DUPONT",
  author: "Jean Dupont",
  email: "contact@example.com",
  // ...
};
```

### 4. Comment ajouter une nouvelle langue
1. Ajouter la nouvelle locale dans `astro.config.mjs` sous `i18n.locales`.
2. Mettre à jour `LOCALES` dans `src/lib/i18n.ts`.
3. Ajouter un dictionnaire de traduction sous `src/data/i18n/{lang}.json`.
4. Configurer les routes de navigation dans `src/data/nav.ts` et `PAGE_ROUTES` dans `src/lib/i18n.ts`.
5. Créer les 5 pages correspondantes dans `src/pages/{lang}/`.
