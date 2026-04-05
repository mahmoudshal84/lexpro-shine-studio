import { Button } from "@/components/ui/button";
import EditorialHeadline from "@/components/EditorialHeadline";
import { SERVICES, SQUARE_BOOKING_URL } from "@/lib/constants";
import { Droplets, Paintbrush, SprayCan, Car, Sparkles, Shield } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  wash: <Droplets size={24} />,
  interior: <SprayCan size={24} />,
  exterior: <Car size={24} />,
  complete: <Sparkles size={24} />,
  paint: <Paintbrush size={24} />,
  coating: <Shield size={24} />,
};

const ServicesPage = () => (
  <main className="pt-24 pb-16 md:pb-24">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
        <EditorialHeadline
          as="h1"
          segments={[
            { text: "Our ", weight: "light" },
            { text: "Services", weight: "bold", accent: true },
          ]}
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-lg mx-auto">Premium packages tailored to every level of care your vehicle needs.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div key={s.name} className="glass rounded-xl p-6 card-hover group flex flex-col">
            <div className="text-primary mb-3 group-hover:text-accent transition-colors">
              {iconMap[s.category] || <Sparkles size={24} />}
            </div>
            <h3 className="font-bold text-lg text-foreground">{s.name}</h3>
            <p className="text-2xl font-black gradient-text mt-1 mb-3">{s.price}</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.description}</p>
            <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-5">
              <Button className="w-full" size="sm">Book This Service</Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default ServicesPage;
