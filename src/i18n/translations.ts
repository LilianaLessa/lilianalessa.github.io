export type Locale = "en" | "pt";

export type Translations = {
  badge: string;
  role: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  footer: string;
};

export const translations: Record<Locale, Translations> = {
  en: {
    badge: "Under Construction",
    role: "Software Engineer · Distributed Systems · E-commerce",
    description:
      "My portfolio is currently being built. In the meantime, feel free to explore my work on GitHub or connect with me on LinkedIn.",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    footer: "© 2026 Liliana Lessa · Maia, Porto, Portugal",
  },
  pt: {
    badge: "Em Construção",
    role: "Engenheira de Software · Sistemas Distribuídos · E-commerce",
    description:
      "O meu portfólio está a ser construído. Enquanto isso, fique à vontade para explorar o meu trabalho no GitHub ou conectar-se comigo no LinkedIn.",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-mail",
    footer: "© 2026 Liliana Lessa · Maia, Porto, Portugal",
  },
};