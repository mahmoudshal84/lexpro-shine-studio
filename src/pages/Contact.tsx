import { useState } from "react";
import { Button } from "@/components/ui/button";
import EditorialHeadline from "@/components/EditorialHeadline";
import { BUSINESS, SQUARE_BOOKING_URL, SERVICES } from "@/lib/constants";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <EditorialHeadline
            as="h1"
            segments={[
              { text: "Contact ", weight: "light" },
              { text: "& Book", weight: "bold", accent: true },
            ]}
            className="mb-4"
          />
          <p className="text-muted-foreground">Ready for a transformation? Book online or send us a message.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info + Square Embed */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-foreground text-lg">Contact Info</h3>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone size={18} className="text-primary" /> {BUSINESS.phone}
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" /> {BUSINESS.location}
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2">
                <Clock size={18} className="text-primary" /> Hours
              </h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Square Booking Widget Placeholder */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-bold text-foreground text-lg mb-4">Book Online</h3>
              <div className="border-2 border-dashed border-border rounded-lg p-10 text-center">
                <p className="text-muted-foreground text-sm mb-4">Square Booking Widget</p>
                <p className="text-xs text-muted-foreground mb-4">Paste your Square Appointments embed code here</p>
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button>Book on Square</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass rounded-xl p-8">
            <h3 className="font-bold text-foreground text-lg mb-6">Send a Message</h3>
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-xl font-bold text-foreground mb-2">Thank you!</p>
                <p className="text-muted-foreground">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {(["name", "phone", "email"] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-foreground mb-1.5 capitalize">{field}</label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      required
                      value={form[field]}
                      onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder={`Your ${field}`}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Interest</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.name} value={s.name}>{s.name} — {s.price}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your vehicle and what you need..."
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
