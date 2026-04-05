import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/StarRating";
import { BUSINESS, SQUARE_BOOKING_URL, SERVICES, REVIEWS } from "@/lib/constants";
import { Shield, Droplets, Paintbrush, SprayCan, Car, Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";

const serviceIcons: Record<string, React.ReactNode> = {
  wash: <Droplets size={28} />,
  interior: <SprayCan size={28} />,
  exterior: <Car size={28} />,
  complete: <Sparkles size={28} />,
  paint: <Paintbrush size={28} />,
  coating: <Shield size={28} />,
};

const HomePage = () => {
  const featuredServices = SERVICES.slice(0, 6);
  const featuredReviews = REVIEWS.slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background image */}
        <div className="absolute inset-0 scale-110" style={{ willChange: 'transform' }}>
          <img
            src={heroImg}
            alt="Premium auto detailing"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            style={{ animation: 'heroParallax 20s ease-in-out infinite alternate' }}
          />
        </div>
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />

        {/* Horizontal light streak */}
        <div
          className="absolute left-0 right-0 h-[1px] top-[45%] z-[5]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 10%, hsl(var(--accent) / 0.4) 30%, hsl(var(--primary-foreground) / 0.6) 50%, hsl(var(--accent) / 0.4) 70%, transparent 90%, transparent 100%)',
            animation: 'lightStreak 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute left-0 right-0 h-[3px] top-[45%] z-[4] blur-sm"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 15%, hsl(var(--primary) / 0.3) 35%, hsl(var(--accent) / 0.2) 50%, hsl(var(--primary) / 0.3) 65%, transparent 85%, transparent 100%)',
            animation: 'lightStreak 4s ease-in-out infinite',
          }}
        />

        {/* Content */}
        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
              Premium Auto Care
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="font-black tracking-tight">LexPro</span>
              <span className="font-light tracking-normal text-foreground/90"> — Lexington's Premier</span>
              <br />
              <span className="gradient-text font-black">Auto Detailing</span>{" "}
              <span className="font-light tracking-normal text-foreground/90">Studio</span>
            </h1>
            <p className="text-lg md:text-xl text-silver leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ceramic coatings, paint correction, and full detail packages — done right.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {/* CTA with pulsing gradient glow */}
              <div className="relative group">
                <div
                  className="absolute -inset-1 rounded-xl opacity-60 blur-lg group-hover:opacity-80 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                    animation: 'ctaGlow 3s ease-in-out infinite',
                  }}
                />
                <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="relative">
                  <Button size="xl" variant="hero">Book Appointment</Button>
                </a>
              </div>
              <Link to="/services">
                <Button size="xl" variant="ghost">View Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFIED BADGES */}
      <section className="py-16 md:py-24 border-y border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-10">
            <Shield className="mx-auto text-gold mb-4" size={36} />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Certified &amp; Accredited</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {BUSINESS.name} is operated by a Certified Auto Detailing Professional and Authorized Ceramic Coating Installer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { title: "Jade Ceramic Authorized Installer 2026", sub: "Certified Installer" },
              { title: "Certified Detailer – The Detail Czar", sub: "Professional License" },
            ].map((cert) => (
              <div key={cert.title} className="glass rounded-xl p-6 text-center card-hover">
                <Shield className="mx-auto text-gold mb-3" size={28} />
                <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">From basic washes to premium ceramic coatings, we deliver perfection at every level.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => (
              <div key={s.name} className="glass rounded-xl p-6 card-hover group">
                <div className="text-primary mb-4 group-hover:text-accent transition-colors">
                  {serviceIcons[s.category] || <Sparkles size={28} />}
                </div>
                <h3 className="font-bold text-lg mb-1 text-foreground">{s.name}</h3>
                <p className="text-accent font-semibold text-sm mb-2">{s.price}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                <Link to="/services" className="text-sm font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-24 border-t border-border bg-card/20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <StarRating rating={5} size={24} />
              <span className="text-2xl font-bold text-foreground">5.0</span>
              <span className="text-muted-foreground">— {REVIEWS.length} Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredReviews.map((r) => (
              <div key={r.name} className="glass rounded-xl p-6 card-hover">
                <StarRating rating={r.rating} />
                <p className="text-sm text-muted-foreground mt-4 mb-4 leading-relaxed italic">"{r.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.service} · {r.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews">
              <Button variant="outline" size="lg">Read All Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The LexPro Standard</h2>
          <p className="text-lg text-silver leading-relaxed mb-4">
            Founded by {BUSINESS.owner}, {BUSINESS.name} was built on a simple belief: every vehicle deserves the same level of care and precision that goes into the world's finest automobiles.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With professional certifications in ceramic coating installation and auto detailing, we bring expertise, premium products, and an obsessive attention to detail to every job.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">Learn More About Us</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
