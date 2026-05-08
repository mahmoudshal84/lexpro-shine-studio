import EditorialHeadline from "@/components/EditorialHeadline";
import Eyebrow from "@/components/Eyebrow";

const Booking = () => {
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
        <div className="rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://square.site/appointments/buyer/widget/5pmjc7rmuniesf/LA10EDHAYA95N"
            width="100%"
            height="800"
            frameBorder="0"
            title="Book an Appointment"
          />
        </div>
      </section>
    </main>
  );
};

export default Booking;
