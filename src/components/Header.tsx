import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BUSINESS, SQUARE_BOOKING_URL } from "@/lib/constants";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Certifications", to: "/certifications" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src="/mainlogo.jpeg" alt={BUSINESS.name} className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="https://instagram.com/lexproautospa" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-blue-400 transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://facebook.com/lexproautospa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <Link to="/booking" className="ml-3">
            <Button size="sm">Book Now</Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border px-6 pb-6 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block py-3 text-base font-medium border-b border-border/50 ${
                location.pathname === l.to ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/booking" className="block mt-4">
            <Button className="w-full">Book Now</Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
