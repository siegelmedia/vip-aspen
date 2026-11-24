import { Link } from "react-router-dom";
import SectionHeader from "@/components/layout/SectionHeader";
import type { LinkedPagesGroup } from "@/types";

interface LinkedPagesGridProps {
  group: LinkedPagesGroup;
}

const colClass = { 2: " svc--2", 3: "", 4: " svc--4" };

/** A heading and a grid of cards, each linking to another page of the site. */
const LinkedPagesGrid = ({ group }: LinkedPagesGridProps) => {
  const columns = group.columns || 4;

  return (
    <>
      <SectionHeader heading={group.heading} subtitle={group.subtitle} />

      <div className={`svc${colClass[columns]}`}>
        {group.items.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} to={item.href} className="svc__card">
              {Icon && (
                <span className="svc__icon">
                  <Icon aria-hidden="true" strokeWidth={1.5} />
                </span>
              )}
              {item.detail && <p className="eyebrow">{item.detail}</p>}
              <h3>{item.label}</h3>
              {item.description && <p>{item.description}</p>}
              <span className="go" style={{ marginTop: "auto" }}>
                Learn more <i aria-hidden="true">&rarr;</i>
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default LinkedPagesGrid;
