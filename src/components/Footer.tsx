import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/constants";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Certifications", to: "/certifications" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="relative overflow-hidden" style={{ background: 'hsl(var(--background))' }}>
    {/* Top border gradient */}
    <div
      className="absolute top-0 left-0 right-0 h-[1px]"
      style={{ background: 'linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 50%, transparent 100%)' }}
    />

    {/* Watermark */}
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <span
        className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-black uppercase whitespace-nowrap leading-none"
        style={{
          color: 'hsl(var(--foreground) / 0.03)',
          letterSpacing: '-0.02em',
        }}
      >
        Lexington's Premier Auto Spa
      </span>
    </div>

    <div className="container relative z-10 py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Col 1: Brand + Tagline */}
        <div>
          <h3 className="text-2xl font-black text-foreground mb-2">{BUSINESS.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
            Certified professionals delivering showroom-quality results. Ceramic coatings, paint correction, and premium detailing in Lexington, KY.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Book an Appointment →
          </Link>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4
            className="uppercase font-semibold mb-5 flex items-center gap-2"
            style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'hsl(var(--accent))' }}
          >
            <span className="inline-block w-[2px] h-4 rounded-full" style={{ background: 'hsl(var(--primary))' }} />
            Navigation
          </h4>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact + Hours */}
        <div>
          <h4
            className="uppercase font-semibold mb-5 flex items-center gap-2"
            style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'hsl(var(--accent))' }}
          >
            <span className="inline-block w-[2px] h-4 rounded-full" style={{ background: 'hsl(var(--primary))' }} />
            Contact &amp; Hours
          </h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 hover:text-accent transition-colors">
              <Phone size={14} className="text-primary shrink-0" />
              {BUSINESS.phone}
            </a>
            <a href="mailto:lexproautospa@gmail.com" className="flex items-center gap-2.5 hover:text-accent transition-colors">
              <Mail size={14} className="text-primary shrink-0" />
              lexproautospa@gmail.com
            </a>
            <span className="flex items-start gap-2.5">
              <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
              {BUSINESS.address}
            </span>
            <div className="flex items-start gap-2.5 pt-1">
              <Clock size={14} className="text-primary shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <p>Mon – Thu & Sat – Sun: 8 AM – 8 PM</p>
                <p>Fri: 8 AM – 12:30 PM, 3:30 – 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
        style={{ borderTop: '1px solid hsl(var(--border))' }}
      >
        <span>{BUSINESS.copyright}. All rights reserved.</span>
        <span className="flex items-center gap-1.5 text-muted-foreground/70">
          Jade Ceramic Authorized · Detail Czar Certified
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
