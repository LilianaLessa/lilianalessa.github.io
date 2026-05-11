import { useState } from "react";
import type { Locale } from "../i18n/translations";

type LanguageSelectorProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

type Option = {
  locale: Locale;
  flag: string;
  label: string;
};

const OPTIONS: Option[] = [
  { locale: "en", flag: "🇬🇧", label: "English" },
  { locale: "pt", flag: "🇧🇷", label: "Português" },
];

export default function LanguageSelector({ locale, onChange }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const current = OPTIONS.find((o) => o.locale === locale)!;

  return (
    <div style={{ position: "relative", userSelect: "none" }}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.4rem 0.8rem",
          borderRadius: "9999px",
          background: "rgba(187,247,208,0.07)",
          border: "1px solid rgba(187,247,208,0.25)",
          color: "#bbf7d0",
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(187,247,208,0.14)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(187,247,208,0.07)")
        }
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span style={{ fontSize: "1.2rem" }}>{current.flag}</span>
        <span>{current.label}</span>
        <span
          style={{
            fontSize: "0.65rem",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            opacity: 0.7,
          }}
        >
          ▼
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 0.4rem)",
            right: 0,
            margin: 0,
            padding: "0.3rem",
            listStyle: "none",
            background: "#1f2d3d",
            border: "1px solid rgba(187,247,208,0.2)",
            borderRadius: "0.75rem",
            minWidth: "140px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            zIndex: 100,
          }}
        >
          {OPTIONS.map((opt) => (
            <li
              key={opt.locale}
              role="option"
              aria-selected={opt.locale === locale}
              onClick={() => {
                onChange(opt.locale);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontSize: "0.9rem",
                color: opt.locale === locale ? "#4ade80" : "#bbf7d0",
                background:
                  opt.locale === locale
                    ? "rgba(74,222,128,0.1)"
                    : "transparent",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                if (opt.locale !== locale)
                  (e.currentTarget as HTMLLIElement).style.background =
                    "rgba(187,247,208,0.08)";
              }}
              onMouseLeave={(e) => {
                if (opt.locale !== locale)
                  (e.currentTarget as HTMLLIElement).style.background =
                    "transparent";
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{opt.flag}</span>
              <span>{opt.label}</span>
              {opt.locale === locale && (
                <span style={{ marginLeft: "auto", fontSize: "0.75rem" }}>✓</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}