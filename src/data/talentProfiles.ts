export interface TalentProfile {
  id: string;
  firstName: string;
  originCity: string;
  categories: string[];
  bio: string;
  height?: string;
  languages?: string[];
  portraitPlaceholder: string;
  galleryImages: string[];
}

export const TALENT_CATEGORIES = [
  "All",
  "Private Entertainment",
  "Brand Ambassadors",
  "Event Hostesses",
  "Atmosphere Models",
  "Cocktail Service",
] as const;

export type TalentCategory = (typeof TALENT_CATEGORIES)[number];

export const talentProfiles: TalentProfile[] = [
  {
    id: "1",
    firstName: "Valentina",
    originCity: "Miami, FL",
    categories: ["Private Entertainment", "Atmosphere Models"],
    bio: "Former professional dancer with over eight years of performance experience. Valentina brings elegance and energy to every private engagement, specializing in luxury events and intimate performances.",
    height: "5'8\"",
    languages: ["English", "Spanish"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "2",
    firstName: "Natasha",
    originCity: "Los Angeles, CA",
    categories: ["Private Entertainment", "Cocktail Service"],
    bio: "Professional entertainer and trained mixologist. Natasha combines captivating performance with polished hospitality, making her the ideal choice for upscale private parties.",
    height: "5'7\"",
    languages: ["English", "Russian"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "3",
    firstName: "Sierra",
    originCity: "Scottsdale, AZ",
    categories: ["Brand Ambassadors", "Event Hostesses", "Atmosphere Models"],
    bio: "Experienced brand ambassador with a background in luxury retail and hospitality. Sierra has represented brands at major trade shows and product launches across the Southwest.",
    height: "5'9\"",
    languages: ["English"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "4",
    firstName: "Jade",
    originCity: "Las Vegas, NV",
    categories: ["Private Entertainment", "Atmosphere Models", "Cocktail Service"],
    bio: "Award-winning performer with a decade of experience in high-end entertainment. Jade specializes in choreographed private shows and VIP event hosting.",
    height: "5'6\"",
    languages: ["English", "French"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "5",
    firstName: "Anastasia",
    originCity: "New York, NY",
    categories: ["Brand Ambassadors", "Event Hostesses"],
    bio: "Former fashion model turned brand ambassador. Anastasia brings runway-level poise to product launches, galas, and corporate events with seamless guest engagement.",
    height: "5'10\"",
    languages: ["English", "Ukrainian"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "6",
    firstName: "Mia",
    originCity: "Denver, CO",
    categories: ["Event Hostesses", "Cocktail Service", "Atmosphere Models"],
    bio: "Colorado native with extensive event staffing experience. Mia excels in guest registration, VIP hosting, and bottle service for private parties and corporate functions.",
    height: "5'7\"",
    languages: ["English"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "7",
    firstName: "Catalina",
    originCity: "Miami, FL",
    categories: ["Private Entertainment", "Atmosphere Models"],
    bio: "Professional dancer and choreographer with a specialty in intimate private performances. Catalina brings creativity and sophistication to every engagement.",
    height: "5'5\"",
    languages: ["English", "Spanish", "Portuguese"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "8",
    firstName: "Alexandra",
    originCity: "Chicago, IL",
    categories: ["Brand Ambassadors", "Event Hostesses", "Atmosphere Models"],
    bio: "Seasoned promotional model with experience across automotive, spirits, and tech brand activations. Alexandra delivers polished professionalism at every touchpoint.",
    height: "5'8\"",
    languages: ["English", "Greek"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "9",
    firstName: "Dominique",
    originCity: "Atlanta, GA",
    categories: ["Private Entertainment", "Cocktail Service"],
    bio: "Dynamic performer with a background in contemporary dance and hospitality. Dominique creates unforgettable experiences with grace, energy, and discretion.",
    height: "5'9\"",
    languages: ["English"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "10",
    firstName: "Bianca",
    originCity: "Dallas, TX",
    categories: ["Brand Ambassadors", "Cocktail Service", "Atmosphere Models"],
    bio: "Former pageant competitor and brand representative. Bianca brings charisma and elegance to corporate events, grand openings, and luxury hospitality activations.",
    height: "5'7\"",
    languages: ["English", "Italian"],
    portraitPlaceholder: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
];
