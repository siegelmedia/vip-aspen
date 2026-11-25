import type { FAQ } from "@/types";

/** Homepage FAQ — the six questions dispatch hears most. Exported so Index can
 *  emit matching FAQPage schema. Keep answers short; the deep dives live on
 *  the service pages and guides this section links to. */
export const homeFaqs: FAQ[] = [
  {
    question: "How do I book a car service in Aspen?",
    answer:
      "Reserve online in about a minute using the booking form on this page, or call or text (970) 452-6636 any time. Dispatch is staffed 24/7. You will receive a flat, all-inclusive quote and your chauffeur's details before the ride.",
  },
  {
    question: "Which airports do you serve?",
    answer:
      "All four airports serving Aspen: Aspen/Pitkin County (ASE), Rifle Garfield County (RIL), Eagle County Regional (EGE), and Denver International (DEN). We track every flight, meet you curbside or on the FBO tarmac, and reposition the car if your flight diverts.",
  },
  {
    question: "How much does an Aspen car service cost?",
    answer:
      "The price depends on the vehicle, the route, the date, and how long you need the car. Enter your trip in the online booking form to see your price instantly, or call (970) 452-6636. Every quote includes the chauffeur and fuel. Our rates page explains how pricing works.",
  },
  {
    question: "Do you offer ski transfers to Snowmass, Highlands, and Buttermilk?",
    answer:
      "Yes. Our private ski transfers run door to slope between your hotel or residence and all four Aspen Snowmass mountains, with gear handled and a return pickup at the time you choose.",
  },
  {
    question: "What makes VIP Aspen different from other car services?",
    answer:
      "VIP Aspen is a law enforcement-owned company with its own Rolls-Royce Cullinan, Cadillac Escalades, and Executive Sprinter. Chauffeurs are background-checked and trained, discretion is standard, and every ride is coordinated by one local team that answers 24/7.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For most rides, 24 hours is plenty. For the holidays, X Games, Presidents' Day, the Food & Wine Classic, and Labor Day weekend, book as soon as your dates are confirmed, because vehicles for those weekends are committed weeks ahead.",
  },
];
