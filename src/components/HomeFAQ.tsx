import FAQAccordion from "@/components/blocks/FAQAccordion";
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
      "Hourly chauffeur service starts at $200 per hour for the Cadillac Escalade, $300 for the Executive Sprinter, and $400 for the Rolls-Royce Cullinan. Airport and route transfers are quoted as flat rates with no surge pricing. See our rates page for details.",
  },
  {
    question: "Do you offer ski transfers to Snowmass, Highlands, and Buttermilk?",
    answer:
      "Yes. Our private ski transfers run door to slope between your hotel or residence and all four Aspen Snowmass mountains, with gear handled and a return pickup at the time you choose.",
  },
  {
    question: "What makes VIP Aspen different from other car services?",
    answer:
      "We are operated by Aspen Security LLC, a Colorado-licensed, veteran and law-enforcement owned security company. Chauffeurs are background-checked and trained, discretion is standard, and transportation, VIP access, and executive protection are coordinated by one local team.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For most rides, 24 hours is plenty. For the holidays, X Games, Presidents' Day, the Food & Wine Classic, and Labor Day weekend, book as soon as your dates are confirmed, because vehicles for those weekends are committed weeks ahead.",
  },
];

const HomeFAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-light">
      <div className="container mx-auto px-6">
        <FAQAccordion faqs={homeFaqs} heading="Questions We Hear {{Every Day}}" />
      </div>
    </section>
  );
};

export default HomeFAQ;
