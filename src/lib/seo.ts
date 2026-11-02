import { siteConfig } from '../data/site';
import { LOCALES, getLocalizedPath, getPageKeyFromPathname, type Locale } from './i18n';

export interface HreflangLink {
  rel: string;
  hreflang: string;
  href: string;
}

export function getCanonicalUrl(pathname: string): string {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${siteConfig.url}${cleanPath}`;
}

export function getHreflangLinks(pathname: string): HreflangLink[] {
  const pageKey = getPageKeyFromPathname(pathname);
  const links: HreflangLink[] = [];

  for (const locale of LOCALES) {
    const localizedPath = getLocalizedPath(pageKey, locale);
    links.push({
      rel: 'alternate',
      hreflang: locale,
      href: `${siteConfig.url}${localizedPath}`,
    });
  }

  const defaultPath = getLocalizedPath(pageKey, 'fr');
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${siteConfig.url}${defaultPath}`,
  });

  return links;
}

/* JSON-LD Generators */

export function generatePersonSchema(locale: Locale = 'fr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    jobTitle: siteConfig.tagline[locale] || siteConfig.tagline.fr,
    url: siteConfig.url,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.cities[0],
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin].filter(Boolean),
    knowsAbout: [
      'Web Development',
      'Astro',
      'TypeScript',
      'Eco-design',
      'Accessibility (WCAG)',
      'Performance Optimization',
    ],
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqItems: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface BlogPostingOptions {
  title: string;
  description: string;
  url: string;
  datePublished: Date | string;
  dateModified?: Date | string;
  image?: string;
  authorName?: string;
}

export function generateBlogPostingSchema(options: BlogPostingOptions) {
  const pubDate = new Date(options.datePublished).toISOString();
  const modDate = options.dateModified ? new Date(options.dateModified).toISOString() : pubDate;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: options.title,
    description: options.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': options.url,
    },
    datePublished: pubDate,
    dateModified: modDate,
    author: {
      '@type': 'Person',
      name: options.authorName || siteConfig.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(options.image ? { image: options.image } : {}),
  };
}
