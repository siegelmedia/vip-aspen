import { useEffect, useRef } from "react";

const BookingWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;

    // Create the reservation container
    const reservationDiv = document.createElement("div");
    reservationDiv.id = "bro_reservation";

    // Create hidden inputs
    const cidInput = document.createElement("input");
    cidInput.type = "hidden";
    cidInput.id = "cid";
    cidInput.value = "EFKSsto4uvyjl1lWS0y0Aw%3d%3d";

    const dbaidInput = document.createElement("input");
    dbaidInput.type = "hidden";
    dbaidInput.id = "dbaid";
    dbaidInput.value = "EZ%2fY%2fwL80Ghz5UqtMQIaqA%3d%3d";

    // Append elements to container
    if (containerRef.current) {
      containerRef.current.appendChild(reservationDiv);
      containerRef.current.appendChild(cidInput);
      containerRef.current.appendChild(dbaidInput);

      // Load the external script
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://bookridesonline.com/web/reservation.js";
      document.body.appendChild(script);

      scriptLoaded.current = true;
    }

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector(
        'script[src="https://bookridesonline.com/web/reservation.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-sm p-6 border border-border/50"
      style={{
        // CSS containment to limit any layout/paint side effects from the third-party widget
        contain: "content",
        // Establish a new stacking context so the widget can't escape
        isolation: "isolate",
        position: "relative",
        zIndex: 0,
      }}
    />
  );
};

export default BookingWidget;
