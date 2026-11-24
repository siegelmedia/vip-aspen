import { useState } from "react";
import type { CSSProperties } from "react";
import CorsaFrame from "./CorsaFrame";
import { CORSA, TEL_HREF } from "@/data/site";
import { COMPANY } from "@/data/constants";

interface BookCardProps {
  title?: string;
  sub?: string;
}

/** The full Corsa booking form on a white card, as tall as the form itself. */
const BookCard = ({
  title = "Instant quote",
  sub = "See your price and reserve in about a minute.",
}: BookCardProps) => {
  const [height, setHeight] = useState<number>(CORSA.height);
  return (
    <div className="book">
      <div className="book__head">
        <p className="book__title">{title}</p>
        <p className="book__sub">{sub}</p>
      </div>
      <div className="book__frame" style={{ "--h": `${height}px` } as CSSProperties}>
        <CorsaFrame onHeight={setHeight} />
      </div>
      <p className="book__alt">
        Prefer to talk? Call or text <a href={TEL_HREF}>{COMPANY.phoneDisplay}</a>, 24/7. Or{" "}
        <a href={CORSA.bookUrl}>open the booking form on its own page</a>.
      </p>
    </div>
  );
};

export default BookCard;
