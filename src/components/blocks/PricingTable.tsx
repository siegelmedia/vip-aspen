import type { PricingTier } from "@/types";

interface PricingTableProps {
  tiers: PricingTier[];
}

/**
 * Pricing information as a ruled list: one group per category, name and detail
 * on the left, an optional short label on the right. No dollar figures are
 * posted; the booking form gives the price for a specific trip.
 */
const PricingTable = ({ tiers }: PricingTableProps) => {
  return (
    <>
      {tiers.map((tier) => (
        <div key={tier.category} className="price">
          <div className="price__cat">
            <div>
              <p className="eyebrow">Pricing</p>
              <h2 className="h2">{tier.category}</h2>
            </div>
            {tier.note && <span>{tier.note}</span>}
          </div>
          {tier.items.map((item) => (
            <div key={item.name} className={`price__row${item.featured ? " is-featured" : ""}`}>
              <h3 className="price__name">
                {item.name}
                <small>
                  {item.detail}
                  {item.featured ? " · Popular" : ""}
                </small>
              </h3>
              {item.price && <span className="price__amt">{item.price}</span>}
              {item.description && <p>{item.description}</p>}
              {item.features && item.features.length > 0 && (
                <ul className="svc__list">
                  {item.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default PricingTable;
