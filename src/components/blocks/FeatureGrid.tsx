import type { Feature } from "@/types";

interface FeatureGridProps {
  items: Feature[];
  columns?: 2 | 3 | 4;
}

const colClass = { 2: " svc--2", 3: "", 4: " svc--4" };

/** Cards with a line icon, a title, a sentence and an optional short list. */
const FeatureGrid = ({ items, columns = 3 }: FeatureGridProps) => {
  return (
    <div className={`svc${colClass[columns]}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="svc__card">
            <span className="svc__icon">
              <Icon aria-hidden="true" strokeWidth={1.5} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.features && item.features.length > 0 && (
              <ul className="svc__list">
                {item.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
