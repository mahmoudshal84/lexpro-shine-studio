import { useEffect } from "react";
import EditorialHeadline from "@/components/EditorialHeadline";
import Eyebrow from "@/components/Eyebrow";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://square.site/appointments/buyer/widget/5pmjc7rmuniesf/LA10EDHAYA95N";

const Booking = () => {
  useEffect(() => {
    // Remove any lingering Square widget script and injected elements
    const script = document.getElementById("square-appointments-widget");
    if (script) script.remove();
    document.querySelectorAll('[id^="square"], [class*="sq-"], iframe[src*="square"]').forEach(el => el.remove());
  }, []);

  return (
    <main className="pt-32 pb-24">
      <section className="container text-center mb-16">
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

      <section className="container max-w-4xl">
        <div className="bg-background rounded-2xl p-16 flex flex-col items-center gap-10 text-center">
          <Button
            size="lg"
            className="glow-blue text-xl px-20 py-8"
            onClick={() => window.open(BOOKING_URL, "_blank")}
          >
            Book Your Appointment
          </Button>
          <p className="text-sm text-muted-foreground">
            Open Daily 8 AM – 8 PM &nbsp;·&nbsp; Friday: 8 AM – 12:30 PM &amp; 3:30 – 8 PM
          </p>
        </div>
      </section>
    </main>
  );
};

export default Booking;
