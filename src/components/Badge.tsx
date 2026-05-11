type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        background: "rgba(192,132,252,0.1)",
        border: "1px solid rgba(192,132,252,0.35)",
        borderRadius: "9999px",
        padding: "0.35rem 1rem",
        fontSize: "0.8rem",
        color: "#c084fc",
        letterSpacing: "0.05em",
      }}
    >
      <span style={{ animation: "pulse 2s infinite" }}>🚧</span>
      {children}
    </span>
  );
}
