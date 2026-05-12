import { useState } from "react";
import type { Translations } from "../i18n/translations";

type Status = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  t: Translations;
};

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem 1rem",
  borderRadius: "0.6rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(192,132,252,0.25)",
  color: "#e9d5ff",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "Segoe UI, system-ui, sans-serif",
};

export default function ContactForm({ t }: ContactFormProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "57f65d7b-c45c-41d0-9215-27fa83a7bbb5", // all safe here.
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "480px" }}>
      {/* Toggle button */}
      <button
        onClick={() => { setOpen((v) => !v); setStatus("idle"); }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          padding: "0.6rem 1.3rem",
          borderRadius: "9999px",
          background: open ? "rgba(192,132,252,0.18)" : "rgba(192,132,252,0.08)",
          border: `1px solid ${open ? "rgba(192,132,252,0.6)" : "rgba(192,132,252,0.35)"}`,
          color: "#d9b8fc",
          fontSize: "0.9rem",
          cursor: "pointer",
          transition: "background 0.2s, border-color 0.2s",
          fontFamily: "Segoe UI, system-ui, sans-serif",
          margin: "0 auto",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth={2} width={18} height={18}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 7 10-7" />
        </svg>
        {t.contactButton}
        <span style={{
          fontSize: "0.65rem",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
          opacity: 0.7,
        }}>▼</span>
      </button>

      {/* Collapsible form */}
      <div style={{
        maxHeight: open ? "500px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease",
      }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "1rem",
            padding: "1.25rem",
            background: "rgba(192,132,252,0.05)",
            border: "1px solid rgba(192,132,252,0.2)",
            borderRadius: "1rem",
          }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t.formName}
            required
            style={INPUT_STYLE}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t.formEmail}
            required
            style={INPUT_STYLE}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t.formMessage}
            required
            rows={4}
            style={{ ...INPUT_STYLE, resize: "vertical" }}
          />

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "0.65rem",
              borderRadius: "0.6rem",
              background: status === "sending"
                ? "rgba(192,132,252,0.2)"
                : "rgba(192,132,252,0.25)",
              border: "1px solid rgba(192,132,252,0.5)",
              color: "#e9d5ff",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: status === "sending" ? "not-allowed" : "pointer",
              transition: "background 0.2s",
              fontFamily: "Segoe UI, system-ui, sans-serif",
            }}
          >
            {status === "sending" ? t.formSending : t.formSend}
          </button>

          {/* Feedback messages */}
          {status === "success" && (
            <p style={{ color: "#86efac", fontSize: "0.875rem", textAlign: "center" }}>
              ✓ {t.formSuccess}
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#fca5a5", fontSize: "0.875rem", textAlign: "center" }}>
              ✕ {t.formError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}