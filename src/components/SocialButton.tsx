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
        background: hovered ? "rgba(187,247,208,0.14)" : "rgba(187,247,208,0.07)",
        border: `1px solid ${hovered ? "rgba(187,247,208,0.45)" : "rgba(187,247,208,0.25)"}`,
        color: "#bbf7d0",
        textDecoration: "none",
        fontSize: "0.9rem",
        transition: "background 0.2s, border-color 0.2s",
        cursor: "pointer",
      }}
    >
      {icon}
      {label}
    </a>
  );
}
