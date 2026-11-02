import fr from '../data/i18n/fr.json';
import en from '../data/i18n/en.json';
import ru from '../data/i18n/ru.json';

export type Locale = 'fr' | 'en' | 'ru';
export const LOCALES: Locale[] = ['fr', 'en', 'ru'];
export const DEFAULT_LOCALE: Locale = 'fr';

const translations = { fr, en, ru };

export const PAGE_ROUTES: Record<Locale, Record<string, string>> = {
  fr: {
    home: '/',
    about: '/a-propos/',
    projects: '/projets/',
    playground: '/atelier/',
    blog: '/blog/',
    legal: '/mentions-legales/',
  },
  en: {
    home: '/en/',
    about: '/en/about/',
    projects: '/en/projects/',
    playground: '/en/playground/',
    blog: '/en/blog/',
    legal: '/en/legal-notice/',
  },
  ru: {
    home: '/ru/',
    about: '/ru/obo-mne/',
    projects: '/ru/proekty/',
    playground: '/ru/masterskaya/',
    blog: '/ru/blog/',
    legal: '/ru/pravovaya-informaciya/',
  },
};

export function getLocaleFromUrl(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0];
    if (firstSegment === 'en' || firstSegment === 'ru') {
      return firstSegment;
    }
  }
  return DEFAULT_LOCALE;
}

export function getPageKeyFromPathname(pathname: string): string {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const lang of LOCALES) {
    for (const [key, route] of Object.entries(PAGE_ROUTES[lang])) {
      if (route === normalized) {
        return key;
      }
    }
  }
  return 'home';
}

export function getLocalizedPath(pageKey: string, targetLocale: Locale): string {
  return PAGE_ROUTES[targetLocale][pageKey] || PAGE_ROUTES[targetLocale]['home'];
}

export function useTranslations(locale: Locale) {
  const dict = translations[locale] || translations[DEFAULT_LOCALE];
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = dict;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}
