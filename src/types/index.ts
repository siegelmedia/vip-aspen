import type { LucideIcon } from "lucide-react";

// ─── SEO ────────────────────────────────────────────────────────────────────

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
}

// ─── Hero ───────────────────────────────────────────────────────────────────

export interface HeroData {
  tagline: string;
  /** Wrap text in {{gold}} to apply gold gradient. E.g. "Your Estate, {{Protected}}" */
  headline: string;
  description: string;
  image?: string;
  ctaLabel?: string;
  ctaLink?: string;
  secondaryCta?: { label: string; link: string };
}

// ─── Features / Services Grid ───────────────────────────────────────────────

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

// ─── Pricing ────────────────────────────────────────────────────────────────

export interface PricingItem {
  name: string;
  detail: string;
  price: string;
  description?: string;
  features?: string[];
  featured?: boolean;
}

export interface PricingTier {
  category: string;
  note?: string;
  items: PricingItem[];
}

// ─── FAQ ────────────────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

// ─── How It Works ───────────────────────────────────────────────────────────

export interface Step {
  step: number;
  title: string;
  description: string;
}

// ─── Prose / Content Block ──────────────────────────────────────────────────

export interface ProseBlock {
  heading?: string;
  body: string;
}

// ─── Trust Badges ───────────────────────────────────────────────────────────

export interface TrustBadge {
  label: string;
  icon?: LucideIcon;
}

// ─── Differentiator / Why Choose ────────────────────────────────────────────

export interface Differentiator {
  title: string;
  description: string;
  icon?: LucideIcon;
}

// ─── Related Services ───────────────────────────────────────────────────────

export interface RelatedService {
  label: string;
  href: string;
}

// ─── Linked Pages (clickable grid cards) ────────────────────────────────────

export interface LinkedPage {
  label: string;
  href: string;
  detail?: string;
  description?: string;
  icon?: LucideIcon;
}

export interface LinkedPagesGroup {
  heading: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  items: LinkedPage[];
}

// ─── Service Page Data ──────────────────────────────────────────────────────

export interface ServicePageData {
  slug: string;
  seo: SEOData;
  hero: HeroData;
  trustBadges?: TrustBadge[];
  intro?: ProseBlock;
  features?: Feature[];
  differentiators?: Differentiator[];
  pricing?: PricingTier[];
  howItWorks?: Step[];
  faqs?: FAQ[];
  cancellationPolicy?: string[];
  relatedServices?: RelatedService[];
  /** Grouped clickable cards linking to related pages (e.g. airports, hotels) */
  linkedPageGroups?: LinkedPagesGroup[];
  /** Additional custom sections rendered by the template */
  customSections?: {
    id: string;
    position: "after-hero" | "after-features" | "after-pricing" | "before-faq" | "before-cta";
    component: string;
  }[];
}

// ─── Vehicle Page Data ──────────────────────────────────────────────────────

export interface VehicleSpec {
  label: string;
  value: string;
}

export interface VehiclePageData {
  slug: string;
  seo: SEOData;
  hero: HeroData;
  intro?: ProseBlock;
  specs?: VehicleSpec[];
  features?: Feature[];
  occasions?: { title: string; description: string }[];
  gallery?: string[];
  faqs?: FAQ[];
  relatedServices?: RelatedService[];
}

// ─── Airport Page Data ──────────────────────────────────────────────────────

export interface AirportInfo {
  code: string;
  name: string;
  distanceToAspen: string;
  driveTime: string;
}

export interface Destination {
  name: string;
  detail: string;
}

export interface AirportPageData {
  slug: string;
  seo: SEOData;
  hero: HeroData;
  airport: AirportInfo;
  intro?: ProseBlock;
  features?: Feature[];
  destinations?: Destination[];
  fleetOptions?: { name: string; image: string; description: string; link: string }[];
  faqs?: FAQ[];
  relatedServices?: RelatedService[];
}
