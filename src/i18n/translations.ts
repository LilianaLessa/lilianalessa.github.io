export type Locale = "en" | "pt";

export type Translations = {
  badge: string;
  role: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  footer: string;


  contactButton: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formSend: string;
  formSending: string;
  formSuccess: string;
  formError: string;
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
    footer: "© 2026 Liliana Lessa",

contactButton: "Contact Me",
    formName: "Your name",
    formEmail: "Your email",
    formMessage: "Your message",
    formSend: "Send Message",
    formSending: "Sending...",
    formSuccess: "Message sent! I'll get back to you soon.",
    formError: "Something went wrong. Please try again.",
  },
  pt: {
    badge: "Em Construção",
    role: "Engenheira de Software · Sistemas Distribuídos · E-commerce",
    description:
      "O meu portfólio está a ser construído. Enquanto isso, fique à vontade para explorar o meu trabalho no GitHub ou conectar-se comigo no LinkedIn.",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "E-mail",
    footer: "© 2026 Liliana Lessa",

 contactButton: "Contactar",
    formName: "O seu nome",
    formEmail: "O seu e-mail",
    formMessage: "A sua mensagem",
    formSend: "Enviar Mensagem",
    formSending: "A enviar...",
    formSuccess: "Mensagem enviada! Responderei em breve.",
    formError: "Algo correu mal. Por favor tente novamente.",
  },
};

export const LOCALE_STORAGE_KEY = "portfolio-locale";

export function getSavedLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === "en" || saved === "pt") return saved;
  return "en"; // default to English
}