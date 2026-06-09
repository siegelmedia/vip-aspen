export const COMPANY = {
  name: "VIP Aspen",
  legalName: "Aspen Security LLC",
  phone: "+1-970-452-6636",
  phoneDisplay: "(970) 452-6636",
  phoneRaw: "+19704526636",
  email: "info@vipaspen.com",
  address: {
    street: "411 E Main St, Suite 205H",
    city: "Aspen",
    state: "CO",
    zip: "81611",
    country: "US",
  },
  url: "https://www.vipaspen.com",
  social: {
    instagram: "https://www.instagram.com/vipaspen",
    facebook: "https://www.facebook.com/vipaspen",
  },
  geo: {
    latitude: 39.1911,
    longitude: -106.8175,
  },
} as const;

export const WHATSAPP_NUMBER = "19704526636";

/**
 * Trust signals — fill these with REAL values to activate review-star (AggregateRating)
 * schema and on-page trust badges. Leave null/empty until you have verifiable numbers;
 * Google penalizes fabricated review markup, so these are intentionally inactive by default.
 */
export const REVIEWS: {
  ratingValue: number | null;
  reviewCount: number | null;
  profileUrl: string;
} = {
  ratingValue: null, // e.g. 4.9 (your real Google rating)
  reviewCount: null, // e.g. 120 (your real Google review count)
  profileUrl: "", // e.g. "https://g.page/vip-aspen"
};

export const CREDENTIALS: {
  cpucNumber: string;
  yearFounded: number | null;
} = {
  cpucNumber: "", // e.g. CPUC/PUC permit number to display as a trust signal
  yearFounded: null, // e.g. 2014 — powers an "X years serving Aspen" badge
};

export const SERVICE_AREAS = [
  "Aspen",
  "Snowmass Village",
  "Basalt",
  "Carbondale",
  "Woody Creek",
] as const;
