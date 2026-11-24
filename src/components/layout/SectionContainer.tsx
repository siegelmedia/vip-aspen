import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** default = white, muted / gradient = light grey paper, ink = black with white text */
  background?: "default" | "muted" | "gradient" | "ink";
  /** Narrow text column (860 px) instead of the full page width. */
  narrow?: boolean;
}

const bgClasses = {
  default: "",
  muted: " sec--paper",
  gradient: " sec--paper",
  ink: " sec--ink",
};

const SectionContainer = ({
  children,
  id,
  className = "",
  background = "default",
  narrow = false,
}: SectionContainerProps) => {
  return (
    <section id={id} className={`sec${bgClasses[background]}${className ? ` ${className}` : ""}`}>
      <div className={`wrap${narrow ? " wrap--narrow" : ""}`}>{children}</div>
    </section>
  );
};

export default SectionContainer;
