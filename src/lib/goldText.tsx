import React from "react";

/**
 * Parses a string with {{gold}} markers and returns JSX with gold-accented spans.
 * E.g. "Your Estate, {{Protected}}" → ["Your Estate, ", <span className="text-gradient-gold">Protected</span>]
 */
export function renderGoldText(text: string): React.ReactNode {
  const parts = text.split(/\{\{(.+?)\}\}/g);
  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-gradient-gold">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}
