import { Accent } from "@/components/site/Shared";

interface SectionHeaderProps {
  /** Use {{ }} markers for accent text. E.g. "Our {{Services}}" */
  heading: string;
  subtitle?: string;
  /** Short label rendered above the heading */
  eyebrow?: string;
  align?: "center" | "left";
  className?: string;
}

const SectionHeader = ({ heading, subtitle, eyebrow, align = "center", className = "" }: SectionHeaderProps) => {
  return (
    <div className={`sec__head${align === "center" ? " center" : ""}${className ? ` ${className}` : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2">
        <Accent text={heading} />
      </h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
