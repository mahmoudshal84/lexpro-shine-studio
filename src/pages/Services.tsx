import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EditorialHeadline from "@/components/EditorialHeadline";
import DepthCard from "@/components/DepthCard";
import Eyebrow from "@/components/Eyebrow";
import { SERVICE_CATEGORIES, PRICING_DISCLAIMER } from "@/lib/constants";
import { Sparkles, Sofa, Car, Star, Shield, Droplets, Paintbrush, Wrench, AlertCircle } from "lucide-react";

const serviceIconByName: Record<string, React.ReactNode> = {
  "Maintenance Detail": <Sparkles size={20} />,
  "Interior Deep Detail": <Sofa size={20} />,
  "Exterior Detail": <Car size={20} />,
  "Full Detail (Most Popular)": <Star size={20} />,
};

const categoryIcon: Record<string, React.ReactNode> = {
  package: <Sparkles size={24} />,
  paint: <Paintbrush size={24} />,
  coating: <Shield size={24} />,
  addon: <Wrench size={24} />,
};

const categoryServiceIcon: Record<string, React.ReactNode> = {
  package: <Sparkles size={20} />,
  paint: <Shield size={20} />,
  coating: <Droplets size={20} />,
  addon: <Wrench size={20} />,
};

const getServiceIcon = (name: string, category: string): React.ReactNode =>
  serviceIconByName[name] ?? categoryServiceIcon[category] ?? <Sparkles size={20} />;

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
            <span className="text-primary">{categoryIcon[cat.category] ?? <Sparkles size={24} />}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{cat.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.services.map((s) => (
              <DepthCard key={s.name} className="flex flex-col">
                <div
                  className="aspect-video rounded-lg mb-4 flex flex-col items-center justify-center gap-1"
                  style={{ background: "#1a1f2e" }}
                >
                  <span className="text-lg">📷</span>
                  <span className="text-xs text-muted-foreground text-center px-3">
                    {s.name} — Photo coming soon
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  {getServiceIcon(s.name, cat.category)}
                  <h3 className="font-bold text-lg text-foreground">{s.name}</h3>
                </div>
                <p className="text-sm font-semibold gradient-text mb-3 leading-relaxed">{s.pricing}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.description}</p>
                {s.pricing !== "Coming Soon" ? (
                  <Link to="/booking" className="mt-5">
                    <Button className="w-full" size="sm">Book This Service</Button>
                  </Link>
                ) : (
                  <div className="mt-5">
                    <Button className="w-full" size="sm" variant="outline" disabled>Coming Soon</Button>
                  </div>
                )}
              </DepthCard>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 glass rounded-xl p-6 flex items-start gap-3 max-w-3xl mx-auto">
        <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">{PRICING_DISCLAIMER}</p>
      </div>
    </div>
  </main>
);

export default ServicesPage;
