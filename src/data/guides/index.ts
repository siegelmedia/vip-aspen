import type { GuidePageData } from "@/types";

/** Guide articles load on demand — see the note in ../services/index.ts. */
export const guideLoaders: Record<
  string,
  () => Promise<{ default: GuidePageData }>
> = {
  "denver-to-aspen": () => import("./denver-to-aspen"),
  "ase-vs-ege-airport": () => import("./ase-vs-ege-airport"),
  "getting-around-aspen": () => import("./getting-around-aspen"),
  "aspen-food-and-wine-classic": () => import("./aspen-food-and-wine-classic"),
};

export const guideSlugs = Object.keys(guideLoaders);

/**
 * Card metadata for the /guides index, ordered most-timely first.
 *
 * Deliberately duplicated from each article's data file rather than imported:
 * the index page needs four short strings, and importing the articles to get
 * them would pull every full guide body into the index page's chunk.
 */
export interface GuideSummary {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
}

export const guideSummaries: GuideSummary[] = [
  {
    slug: "aspen-food-and-wine-classic",
    title: "The FOOD & WINE Classic in {{Aspen}}",
    category: "Aspen Events Guide",
    excerpt:
      "Aspen's marquee culinary weekend takes over town every June. Here's what the Classic is, what to expect, and how to move between the Grand Tasting, seminars, and after-parties without fighting for a ride.",
    readTime: "6 min read",
  },
  {
    slug: "denver-to-aspen",
    title: "How to Get From {{Denver to Aspen}}",
    category: "Aspen Travel Guide",
    excerpt:
      "There are five real ways to travel from Denver to Aspen, and the right one depends on your budget, your group, and the season. Here's an honest comparison from a team that drives this route year-round.",
    readTime: "8 min read",
  },
  {
    slug: "ase-vs-ege-airport",
    title: "Flying to Aspen: {{ASE vs. Eagle (EGE)}}",
    category: "Aspen Travel Guide",
    excerpt:
      "Aspen has its own airport five minutes from town — but it isn't always the smartest place to fly. Here's how ASE, Eagle, Rifle, and Denver really compare, and how to pick the right one.",
    readTime: "7 min read",
  },
  {
    slug: "getting-around-aspen",
    title: "Getting Around Aspen: Do You Need a {{Car}}?",
    category: "Aspen Travel Guide",
    excerpt:
      "Aspen is compact and walkable, the buses are free, and Uber is… complicated. Here's how to move around town like a local — and when it's worth booking a private car instead.",
    readTime: "6 min read",
  },
];
