import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EditorialHeadline from "@/components/EditorialHeadline";
import Eyebrow from "@/components/Eyebrow";
import { BUSINESS, SERVICE_CATEGORIES } from "@/lib/constants";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_KEY = "fe9a3c95-63f2-4b24-b7a7-c32d8a2fc5af";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
          subject: `New Inquiry: ${form.service || "General"}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24 pb-16 md:pb-24">
      <div className="container max-w-5xl">
        <div className="text-center mb-14">
          <Eyebrow>Get In Touch</Eyebrow>
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
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-foreground text-lg">Contact Info</h3>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Phone size={18} className="text-primary" /> {BUSINESS.phone}
              </a>
              <a href="mailto:lexproautospa@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                <Mail size={18} className="text-primary" /> lexproautospa@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary" /> {BUSINESS.address}
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="font-bold text-foreground text-lg mb-3 flex items-center gap-2">
                <Clock size={18} className="text-primary" /> Hours
              </h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Sunday – Thursday: 8:00 AM – 8:00 PM</p>
                <p>Friday: 8:00 AM – 12:30 PM &amp; 3:30 – 8:00 PM</p>
                <p>Saturday: 8:00 AM – 8:00 PM</p>
              </div>
            </div>

            {/* Book Now */}
            <div className="glass rounded-xl p-6 text-center">
              <h3 className="font-bold text-foreground text-lg mb-4">Book Online</h3>
              <p className="text-sm text-muted-foreground mb-5">Schedule your appointment in just a few clicks.</p>
              <Link to="/booking">
                <Button size="lg" className="w-full">Book Now</Button>
              </Link>
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
                    {SERVICE_CATEGORIES.map((cat) => (
                      <optgroup key={cat.title} label={cat.title}>
                        {cat.services.map((s) => (
                          <option key={s.name} value={s.name}>{s.name} — {s.pricing}</option>
                        ))}
                      </optgroup>
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
                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Form submissions will be sent to lexproautospa@gmail.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
