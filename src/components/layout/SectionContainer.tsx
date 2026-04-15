import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "muted" | "gradient";
}

const bgClasses = {
  default: "",
  muted: "bg-muted/20",
  gradient: "bg-gradient-to-b from-primary/5 to-transparent",
};

const SectionContainer = ({
  children,
  id,
  className = "",
  background = "default",
}: SectionContainerProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
};

export default SectionContainer;
