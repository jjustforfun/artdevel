export interface NavItem {
  label: string;
  href: string;
  key: 'home' | 'about' | 'projects' | 'playground' | 'blog';
}

export const navConfig: Record<string, NavItem[]> = {
  fr: [
    { label: "Accueil", href: "/", key: "home" },
    { label: "À propos", href: "/a-propos/", key: "about" },
    { label: "Projets", href: "/projets/", key: "projects" },
    { label: "Atelier", href: "/atelier/", key: "playground" },
    { label: "Blog / Journal", href: "/blog/", key: "blog" },
  ],
  en: [
    { label: "Home", href: "/en/", key: "home" },
    { label: "About", href: "/en/about/", key: "about" },
    { label: "Projects", href: "/en/projects/", key: "projects" },
    { label: "Playground", href: "/en/playground/", key: "playground" },
    { label: "Blog / Journal", href: "/en/blog/", key: "blog" },
  ],
  ru: [
    { label: "Главная", href: "/ru/", key: "home" },
    { label: "Обо мне", href: "/ru/obo-mne/", key: "about" },
    { label: "Проекты", href: "/ru/proekty/", key: "projects" },
    { label: "Мастерская", href: "/ru/masterskaya/", key: "playground" },
    { label: "Блог / Журнал", href: "/ru/blog/", key: "blog" },
  ],
};
