import { useEffect, useState } from "react";
import Badge from "./components/Badge";
import SkillChip from "./components/SkillChip";
import SocialButton from "./components/SocialButton";
import LanguageSelector from "./components/LanguageSelector";
import { translations } from "./i18n/translations";
import type { Locale } from "./i18n/translations";

const SKILLS: string[] = [
  "PHP 8", "Symfony 6", "TypeScript", "Node", "React",
  "MySQL", "Docker", "Kubernetes", "Apache Kafka", "Redis",
  "AWS", "CI/CD", "Microservices", "Clean Code", "SOLID",
];

export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  const [locale, setLocale] = useState<Locale>("en");

  const t = translations[locale];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const delay = (ms: number): React.CSSProperties => ({
    animationDelay: `${ms}ms`,
    animationFillMode: "forwards",
  });

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>

      {/* Language selector — fixed top-right */}
      <div
        style={{
          position: "fixed",
          top: "1.25rem",
          right: "1.5rem",
          zIndex: 200,
        }}
      >
        <LanguageSelector locale={locale} onChange={setLocale} />
      </div>

      {/* Main content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          gap: "1.2rem",
        }}
      >
        {/* Badge */}
        <div className={visible ? "fade-up" : ""} style={delay(0)}>
          <Badge>{t.badge}</Badge>
        </div>

        {/* Name */}
        <h1
          className={visible ? "fade-up" : ""}
          style={{
            ...delay(150),
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#bbf7d0",
            lineHeight: 1.1,
          }}
        >
          Liliana Lessa
        </h1>

        {/* Role */}
        <p
          className={visible ? "fade-up" : ""}
          style={{ ...delay(250), fontSize: "1.1rem", color: "#d9b8fc" }}
        >
          {t.role}
        </p>

        {/* Description */}
        <p
          className={visible ? "fade-up" : ""}
          style={{
            ...delay(350),
            maxWidth: "580px",
            lineHeight: 1.75,
            color: "#e9d5ff",
            fontSize: "0.97rem",
          }}
        >
          {t.description}
        </p>

        {/* Skills */}
        <div
          className={visible ? "fade-up" : ""}
          style={{
            ...delay(450),
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            maxWidth: "680px",
          }}
        >
          {SKILLS.map((skill) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </div>

        {/* Social links */}
        <div
          className={visible ? "fade-up" : ""}
          style={{
            ...delay(550),
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
          }}
        >
          <SocialButton
            href="https://github.com/LilianaLessa"
            label={t.github}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.84c.97 0 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.15v3.19c0 .3.2.66.79.55C20.22 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            }
          />
          <SocialButton
            href="https://linkedin.com/in/liliana-lessa"
            label={t.linkedin}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            }
          />
          <SocialButton
            href="mailto:liliana.lessa1@gmail.com"
            label={t.email}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            }
          />
        </div>

        {/* Footer */}
        <p
          className={visible ? "fade-up" : ""}
          style={{
            ...delay(650),
            fontSize: "0.75rem",
            color: "#4b5563",
            marginTop: "1rem",
          }}
        >
          {t.footer}
        </p>
      </div>
    </div>
  );
}