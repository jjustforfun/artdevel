import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.replace(/\.[^/.]+$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['fr', 'en', 'ru']),
    translationKey: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    status: z.string(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
    clientName: z.string().optional(),
    featured: z.boolean().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx,yaml,yml}',
    base: './src/content/experience',
    generateId: ({ entry }) => entry.replace(/\.[^/.]+$/, ''),
  }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    dateStart: z.string(),
    summary: z.string(),
    dateEnd: z.string().optional(),
    current: z.boolean().optional(),
    location: z.string().optional(),
    details: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    logo: z.string().optional(),
    link: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
  }),
});

const playgroundCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/playground',
    generateId: ({ entry }) => entry.replace(/\.[^/.]+$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['fr', 'en', 'ru']),
    translationKey: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    type: z.enum(['experiment', 'vibecoding', 'mini-app', 'component', 'prototype', 'challenge', 'lab-note']),
    description: z.string().optional(),
    stack: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.[^/.]+$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    locale: z.enum(['fr', 'en', 'ru']),
    translationKey: z.string(),
    excerpt: z.string(),
    datePublished: z.coerce.date(),
    category: z.string(),
    dateUpdated: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
    draft: z.boolean().optional().default(false),
    readingTime: z.number().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
  playground: playgroundCollection,
  blog: blogCollection,
};
