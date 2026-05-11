type SkillChipProps = {
  label: string;
};

export default function SkillChip({ label }: SkillChipProps) {
  return (
    <span
      style={{
        background: "rgba(134,239,172,0.08)",
        border: "1px solid rgba(134,239,172,0.3)",
        borderRadius: "9999px",
        padding: "0.25rem 0.8rem",
        fontSize: "0.78rem",
        color: "#86efac",
      }}
    >
      {label}
    </span>
  );
}
