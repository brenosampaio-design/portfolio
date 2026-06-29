/*
 * Confidence — the signal at the heart of TriageAI: the AI never pretends to be
 * certain. Three calm levels, built only from the existing palette so it stays
 * on-brand: High reads settled (neutral + slate dot), Needs review asks for a
 * human (slate accent), Low is the one genuine caution (alert vermilion) — the
 * state the whole tool exists to catch.
 */
const LABEL = { high: "High", review: "Needs review", low: "Low" };

export function Confidence({ level = "high", className = "" }) {
  return (
    <span className={`conf conf--${level}${className ? ` ${className}` : ""}`}>
      <span className="conf__dot" aria-hidden="true" />
      {LABEL[level] || LABEL.high}
    </span>
  );
}
