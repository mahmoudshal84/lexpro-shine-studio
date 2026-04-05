// ==============================
// Change this to your real Square booking URL
export const SQUARE_BOOKING_URL = "#";
// ==============================

export const BUSINESS = {
  name: "LexPro Auto Spa",
  owner: "Hamad Isaac",
  phone: "(859) 347-6363",
  phoneHref: "tel:+18593476363",
  address: "305 E High St, Lexington, KY, 40507, United States",
  location: "Lexington, KY",
  copyright: `© 2026 LexPro Auto Spa`,
} as const;

export type ServiceTier = {
  name: string;
  pricing: string;
  description: string;
};

export type ServiceCategory = {
  title: string;
  category: string;
  services: ServiceTier[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Packages",
    category: "package",
    services: [
      { name: "Maintenance Detail", pricing: "Sedan $149 | SUV $179 | XL $209", description: "A thorough refresh to maintain your vehicle's clean appearance between full details." },
      { name: "Interior Deep Detail", pricing: "Sedan $249 | SUV $299 | XL $349", description: "Deep clean of all interior surfaces including shampooing, leather conditioning, and sanitization." },
      { name: "Exterior Detail", pricing: "Sedan $199 | SUV $239 | XL $279", description: "Clay bar treatment, machine polish, and premium sealant for a showroom-quality finish." },
      { name: "Full Detail (Most Popular)", pricing: "Sedan $349 | SUV $429 | XL $499", description: "Our most popular package — full interior and exterior detail for a complete transformation." },
    ],
  },
  {
    title: "Paint Correction",
    category: "paint",
    services: [
      { name: "One-Step Paint Correction", pricing: "Sedan $499 | SUV $599 | XL $699", description: "Remove light swirls, scratches, and oxidation with a single-stage machine polish." },
      { name: "Two-Step Paint Correction", pricing: "Sedan $899 | SUV $1099 | XL $1299", description: "Two-stage correction for moderate swirls and defects — restores factory clarity." },
      { name: "Three-Step Paint Correction", pricing: "Sedan $1299 | SUV $1499 | XL $1699", description: "Multi-step correction process for heavily marred or neglected paint — maximum clarity." },
    ],
  },
  {
    title: "Ceramic Coating",
    category: "coating",
    services: [
      { name: "1-Year Ceramic Coating", pricing: "Sedan $699 | SUV $799 | XL $899", description: "Entry-level ceramic protection with hydrophobic properties and UV resistance for 1 year." },
      { name: "3-Year Ceramic Coating", pricing: "Sedan $1099 | SUV $1249 | XL $1399", description: "Professional-grade ceramic coating with enhanced durability and gloss retention for 3 years." },
      { name: "7-Year Ceramic Coating (Premium)", pricing: "Sedan $1599 | SUV $1799 | XL $1999", description: "Our premium ceramic coating — maximum hardness, self-cleaning properties, and 7 years of protection." },
      { name: "Wheel Coating", pricing: "$149–$249", description: "Ceramic protection for wheels — repels brake dust and makes cleaning effortless." },
      { name: "Glass Coating", pricing: "$99–$149", description: "Hydrophobic glass coating for improved visibility and easier cleaning in rain." },
    ],
  },
  {
    title: "Add-Ons",
    category: "addon",
    services: [
      { name: "Engine Bay Detail", pricing: "$59–$89", description: "Thorough cleaning and dressing of the engine bay for a factory-fresh look." },
      { name: "Headlight Restoration", pricing: "$99–$149", description: "Remove oxidation and yellowing to restore clarity and improve nighttime visibility." },
      { name: "Pet Hair Removal", pricing: "$50–$150", description: "Specialized removal of embedded pet hair from all interior surfaces." },
      { name: "Odor Treatment", pricing: "$79–$149", description: "Professional odor elimination using ozone or enzyme-based treatments." },
      { name: "Fabric Protection", pricing: "$69–$119", description: "Protective coating applied to fabric surfaces to resist stains and spills." },
      { name: "Leather Protection", pricing: "$79–$129", description: "Conditioning and protective coating to preserve leather surfaces." },
      { name: "Clay Bar Treatment", pricing: "$79–$149", description: "Decontamination treatment to remove embedded contaminants from paint." },
      { name: "Window Tint", pricing: "Coming Soon", description: "Professional window tinting service — launching soon." },
    ],
  },
];

export const PRICING_DISCLAIMER = "Prices shown are starting prices. Final pricing may vary based on vehicle size, condition, excessive pet hair, staining, sand, or odor.";

// Keep legacy SERVICES for homepage featured cards (first 4 packages)
export const SERVICES = SERVICE_CATEGORIES[0].services.map((s) => ({
  name: s.name,
  price: s.pricing.split(" | ")[0].replace("Sedan ", "From "),
  description: s.description,
  category: "package" as const,
}));

export const REVIEWS = [
  { name: "Marcus T.", service: "Ceramic Coating", rating: 5, text: "Hamad did an incredible job on my BMW. The ceramic coating looks absolutely flawless — the paint has never looked this good, even when it was brand new.", date: "March 2026" },
  { name: "Sarah K.", service: "Full Detail", rating: 5, text: "I've tried several detailers in Lexington and LexPro is hands down the best. Attention to detail is unmatched. My car looks and smells like it just rolled off the lot.", date: "February 2026" },
  { name: "David R.", service: "Paint Correction", rating: 5, text: "My truck had years of swirl marks and scratches. Hamad's multi-stage paint correction brought it back to life. The results are truly jaw-dropping.", date: "February 2026" },
  { name: "Jennifer L.", service: "Interior Deep Detail", rating: 5, text: "With two kids and a dog, my SUV was a disaster. The interior detail was transformative — every surface is spotless. Worth every penny.", date: "January 2026" },
  { name: "Anthony W.", service: "Ceramic Coating", rating: 5, text: "I had the ceramic coating applied and the hydrophobic effect is insane. Water just beads right off. Professional operation all around.", date: "January 2026" },
  { name: "Rachel M.", service: "Maintenance Detail", rating: 5, text: "Even the basic wash exceeded my expectations. Hamad takes pride in his work and it shows. Already booked my next appointment.", date: "December 2025" },
];
