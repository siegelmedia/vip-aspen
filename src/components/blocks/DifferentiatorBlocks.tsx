import SectionHeader from "@/components/layout/SectionHeader";
import type { Differentiator } from "@/types";

interface DifferentiatorBlocksProps {
  items: Differentiator[];
  heading?: string;
}

/** Numbered reasons, two across. */
const DifferentiatorBlocks = ({ items, heading = "Why {{VIP Aspen}}" }: DifferentiatorBlocksProps) => {
  return (
    <>
      <SectionHeader eyebrow="The Difference" heading={heading} />

      <div className="svc svc--2">
        {items.map((item, index) => (
          <div key={item.title} className="svc__card">
            <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DifferentiatorBlocks;
