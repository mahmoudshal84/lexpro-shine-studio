import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EditorialHeadline from "@/components/EditorialHeadline";
import DepthCard from "@/components/DepthCard";
import Eyebrow from "@/components/Eyebrow";
import { SERVICE_CATEGORIES, SQUARE_BOOKING_URL, PRICING_DISCLAIMER } from "@/lib/constants";
import { Droplets, Paintbrush, Sparkles, Shield, Wrench, AlertCircle } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  package: <Sparkles size={24} />,
  paint: <Paintbrush size={24} />,
  coating: <Shield size={24} />,
  addon: <Wrench size={24} />,
};

const ServicesPage = () => (
  <main className="pt-24 pb-16 md:pb-24">
    <div className="container">
      <div className="text-center mb-14">
        <Eyebrow>What We Offer</Eyebrow>
        <EditorialHeadline
          as="h1"
          segments={[
            { text: "Services ", weight: "light" },
            { text: "& Pricing", weight: "bold", accent: true },
          ]}
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-lg mx-auto">
          Premium packages tailored to every level of care your vehicle needs.
        </p>
      </div>

      {SERVICE_CATEGORIES.map((cat) => (
        <section key={cat.title} className="mb-16 last:mb-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary">{categoryIcons[cat.category] || <Sparkles size={24} />}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{cat.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.services.map((s) => (
              <DepthCard key={s.name} className="flex flex-col">
                <h3 className="font-bold text-lg text-foreground">{s.name}</h3>
                <p className="text-sm font-semibold gradient-text mt-1 mb-3 leading-relaxed">{s.pricing}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.description}</p>
                {s.pricing !== "Coming Soon" && (
                  <Link to="/booking" className="mt-5">
                    <Button className="w-full" size="sm">Book This Service</Button>
                  </Link>
                )}
                {s.pricing === "Coming Soon" && (
                  <div className="mt-5">
                    <Button className="w-full" size="sm" variant="outline" disabled>Coming Soon</Button>
                  </div>
                )}
              </DepthCard>
            ))}
          </div>
        </section>
      ))}

      {/* Disclaimer */}
      <div className="mt-12 glass rounded-xl p-6 flex items-start gap-3 max-w-3xl mx-auto">
        <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">{PRICING_DISCLAIMER}</p>
      </div>
    </div>
  </main>
);

export default ServicesPage;
