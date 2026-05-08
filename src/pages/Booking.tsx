import { useEffect } from "react";
import EditorialHeadline from "@/components/EditorialHeadline";
import Eyebrow from "@/components/Eyebrow";

const Booking = () => {
  useEffect(() => {
    const scriptId = "square-appointments-widget";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://square.site/appointments/buyer/widget/5pmjc7rmuniesf/LA10EDHAYA95N.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="pt-32 pb-24">
      <section className="container text-center mb-12">
        <Eyebrow>Book Your Appointment</Eyebrow>
        <EditorialHeadline
          segments={[
            { text: "Pick a time ", weight: "light" },
            { text: "and we'll take care ", weight: "bold" },
            { text: "of the rest", weight: "light" },
          ]}
          className="mt-4"
        />
      </section>
    </main>
  );
};

export default Booking;
