import { useEffect } from "react";
import EditorialHeadline from "@/components/EditorialHeadline";
import Eyebrow from "@/components/Eyebrow";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

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
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <CalendarDays className="w-10 h-10 text-primary" />
          </div>
          <Button
            size="lg"
            className="glow-blue text-2xl px-28 py-10 h-auto"
            onClick={() => window.open(BOOKING_URL, "_blank")}
          >
            <CalendarDays className="w-5 h-5 mr-2" />
            Book Your Appointment
          </Button>
          <p className="text-sm text-muted-foreground">
            Mon – Fri: 8 AM – 6 PM &nbsp;·&nbsp; Sat: 9 AM – 4 PM &nbsp;·&nbsp; Sun: Closed
          </p>
        </div>
      </section>
    </main>
  );
};

export default Booking;
