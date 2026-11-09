import { COMPANY } from "@/data/constants";

interface FormErrorFallbackProps {
  /** Subject line for the pre-filled email fallback */
  subject: string;
  /** Body text for the pre-filled email fallback — the visitor's message, so nothing is lost */
  body: string;
}

/**
 * Shown inline when a form submission fails. A toast disappears in seconds; a
 * lead who just typed a paragraph needs a way to still reach us. The email link
 * carries everything they entered so one tap re-sends it.
 */
const FormErrorFallback = ({ subject, body }: FormErrorFallbackProps) => {
  const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <div
      role="alert"
      className="rounded-sm border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm text-foreground/85 space-y-1"
    >
      <p className="font-medium text-foreground">We couldn't send your message just now.</p>
      <p>
        Call or text{" "}
        <a href={`tel:${COMPANY.phoneRaw}`} className="text-primary underline underline-offset-2">
          {COMPANY.phoneDisplay}
        </a>{" "}
        (24/7), or{" "}
        <a href={mailto} className="text-primary underline underline-offset-2">
          email it to us instead
        </a>{" "}
        — your details are already filled in.
      </p>
    </div>
  );
};

export default FormErrorFallback;
