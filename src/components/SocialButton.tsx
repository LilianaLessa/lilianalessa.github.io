import { useState } from "react";

type SocialButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function SocialButton({ href, label, icon }: SocialButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.6rem 1.3rem",
        borderRadius: "9999px",
        background: hovered ? "rgba(192,132,252,0.18)" : "rgba(192,132,252,0.08)",
        border: `1px solid ${hovered ? "rgba(192,132,252,0.6)" : "rgba(192,132,252,0.35)"}`,
        color: hovered ? "#e9d5ff" : "#d9b8fc",
        textDecoration: "none",
        fontSize: "0.9rem",
        transition: "background 0.2s, border-color 0.2s, color 0.2s",
        cursor: "pointer",
      }}
    >
      {icon}
      {label}
    </a>
  );
}