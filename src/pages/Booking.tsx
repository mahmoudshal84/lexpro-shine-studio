import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import EditorialHeadline from "@/components/EditorialHeadline";
import Eyebrow from "@/components/Eyebrow";

const Booking = () => {
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        gtag("event", "conversion", {
          send_to: "AW-18072008734/AJh9CNu-2ZwcEJ7ws6lD",
          value: 1.0,
          currency: "USD",
        });
      }
    };
    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
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

    <section className="container max-w-5xl">
      <div className="rounded-2xl overflow-hidden border border-border bg-card">
        <InlineWidget
          url="https://calendly.com/lexproautospa"
          styles={{ minWidth: "320px", height: "700px" }}
          pageSettings={{
            backgroundColor: "0B0F14",
            textColor: "F1F5F9",
            primaryColor: "2563EB",
            hideLandingPageDetails: false,
            hideEventTypeDetails: false,
          }}
        />
      </div>
    </section>
  </main>
  );
};

export default Booking;
