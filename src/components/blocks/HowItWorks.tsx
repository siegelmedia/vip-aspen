import SectionHeader from "@/components/layout/SectionHeader";
import type { Step } from "@/types";

interface HowItWorksProps {
  steps: Step[];
  heading?: string;
}

/** Numbered steps in a row, as in the homepage "three steps" block. */
const HowItWorks = ({ steps, heading = "How It {{Works}}" }: HowItWorksProps) => {
  return (
    <>
      <SectionHeader eyebrow="The Process" heading={heading} />

      <ol className={`wte__steps wte__steps--flat${steps.length >= 4 ? " wte__steps--4" : ""}`}>
        {steps.map((step) => (
          <li key={step.step}>
            <span className="wte__n">{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default HowItWorks;
