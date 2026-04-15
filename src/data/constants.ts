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

export const SERVICE_AREAS = [
  "Aspen",
  "Snowmass Village",
  "Basalt",
  "Carbondale",
  "Woody Creek",
] as const;
