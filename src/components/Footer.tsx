import { Link } from "react-router-dom";
import { BUSINESS, SQUARE_BOOKING_URL } from "@/lib/constants";
import { Phone, MapPin, Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-black text-foreground mb-4">{BUSINESS.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Lexington's premier auto detailing studio. Certified professionals delivering showroom-quality results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Services", to: "/services" },
              { label: "Certifications", to: "/certifications" },
              { label: "Reviews", to: "/reviews" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} /> {BUSINESS.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> {BUSINESS.location}
            </span>
            <a href={SQUARE_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors font-medium">
              Book an Appointment →
            </a>
          </div>
        </div>

        {/* Credentials */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Credentials</h4>
          <div className="flex flex-col gap-3">
            {[
              "Jade Ceramic Authorized Installer 2026",
              "Certified Detailer – The Detail Czar",
            ].map((badge) => (
              <div key={badge} className="flex items-start gap-2 text-sm">
                <Shield size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        {BUSINESS.copyright}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
