import { useBuildStatus } from "../hooks/useBuildStatus";
import type { Locale } from "../i18n/translations";

type FooterProps = {
  text: string;
  locale: Locale;
};

const STATUS_CONFIG = {
  success:     { color: "#86efac", bg: "rgba(134,239,172,0.1)",  border: "rgba(134,239,172,0.3)",  icon: "✓", label: { en: "Build passing", pt: "Build ok" } },
  failure:     { color: "#fca5a5", bg: "rgba(252,165,165,0.1)",  border: "rgba(252,165,165,0.3)",  icon: "✕", label: { en: "Build failed",  pt: "Build falhou" } },
  in_progress: { color: "#fde68a", bg: "rgba(253,230,138,0.1)",  border: "rgba(253,230,138,0.3)",  icon: "⟳", label: { en: "Building...",    pt: "A compilar..." } },
  unknown:     { color: "#94a3b8", bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.2)",  icon: "·", label: { en: "Build unknown",  pt: "Build desconhecido" } },
};

export default function Footer({ text, locale }: FooterProps) {
  const {
    status,
    buildId,    
  } = useBuildStatus();
  const cfg = STATUS_CONFIG[status];
  const buildTime = new Date(__BUILD_TIME__).toLocaleString(
    locale === "pt" ? "pt-PT" : "en-GB",
    {
      day: "2-digit", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit",
      timeZone: "Europe/Lisbon",
    }
  );

  const buildLink = `https://github.com/LilianaLessa/lilianalessa.github.io/actions/runs/${buildId}`

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        marginTop: "1rem",
      }}
    >
      {/* Copyright */}
      <p style={{ fontSize: "0.75rem", color: "#4b5563" }}>{text}</p>

      {/* Build info row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>

        {/* Deploy time */}
        <span style={{ fontSize: "0.72rem", color: "#4b5563" }}>
          🕐 {locale === "pt" ? "Última build" : "Last build"} (#{buildId}): {buildTime} 
        </span>

        {/* Status badge */}
        <a
          href={buildLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            padding: "0.2rem 0.6rem",
            borderRadius: "9999px",
            background: cfg.bg,
            border: `1px solid ${cfg.border}`,
            color: cfg.color,
            fontSize: "0.72rem",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <span>{cfg.icon}</span>
          <span>{cfg.label[locale]}</span>
        </a>
      </div>
    </footer>
  );
}
