export interface SiteConfig {
  name: string;
  url: string;
  author: string;
  email: string;
  tagline: Record<string, string>;
  location: {
    country: string;
    region: string;
    cities: string[];
  };
  socials: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    [key: string]: string | undefined;
  };
}

export const siteConfig: SiteConfig = {
  name: "JEAN DUPONT",
  url: "https://artisan-dev.example",
  author: "Jean Dupont",
  email: "contact@example.com",
  tagline: {
    fr: "Création de sites web pour professionnels",
    en: "Websites for growing businesses",
    ru: "Создание сайтов для бизнеса",
  },
  location: {
    country: "France",
    region: "Auvergne-Rhône-Alpes",
    cities: ["Lyon", "Villeurbanne", "Bron", "Vénissieux", "Caluire-et-Cuire", "Écully"],
  },
  socials: {
    github: "https://example.com/github/jean-dupont",
    linkedin: "https://example.com/linkedin/jean-dupont",
  },
};
