// ==============================
// Change this to your real Square booking URL
export const SQUARE_BOOKING_URL = "#";
// ==============================

export const BUSINESS = {
  name: "LexPro Auto Spa",
  owner: "Hamad Isaac",
  phone: "(859) 347-6363",
  phoneHref: "tel:+18593476363",
  location: "Lexington, KY",
  copyright: `© 2026 LexPro Auto Spa`,
} as const;

export const SERVICES = [
  { name: "Basic Wash & Vacuum", price: "$49", description: "Thorough hand wash and full interior vacuum to keep your vehicle looking fresh.", category: "wash" },
  { name: "Full Interior Detail", price: "$149", description: "Deep clean of all interior surfaces including shampooing, leather conditioning, and sanitization.", category: "interior" },
  { name: "Full Exterior Detail", price: "$149", description: "Clay bar treatment, machine polish, and premium sealant for a showroom-quality finish.", category: "exterior" },
  { name: "Complete Detail", price: "$269", description: "Our most popular package — full interior and exterior detail for a complete transformation.", category: "complete" },
  { name: "Paint Decontamination", price: "$99", description: "Iron removal, clay bar, and chemical decontamination to prepare your paint for correction or coating.", category: "paint" },
  { name: "Paint Correction (Single Stage)", price: "$299", description: "Remove light swirls, scratches, and oxidation with a single-stage machine polish.", category: "paint" },
  { name: "Paint Correction (Multi-Stage)", price: "$499+", description: "Multi-step correction process for heavily marred or neglected paint — restores factory clarity.", category: "paint" },
  { name: "Ceramic Coating (1yr)", price: "$399", description: "Entry-level ceramic protection with hydrophobic properties and UV resistance for 1 year.", category: "coating" },
  { name: "Ceramic Coating (3yr)", price: "$699", description: "Professional-grade ceramic coating with enhanced durability and gloss retention for 3 years.", category: "coating" },
  { name: "Ceramic Coating (5yr)", price: "$999", description: "Our premium ceramic coating — maximum hardness, self-cleaning properties, and 5 years of protection.", category: "coating" },
  { name: "Graphene Coating", price: "$1,199+", description: "Next-generation graphene-infused coating — superior heat dissipation, anti-water spotting, and extreme durability.", category: "coating" },
] as const;

export const REVIEWS = [
  { name: "Marcus T.", service: "Ceramic Coating (5yr)", rating: 5, text: "Hamad did an incredible job on my BMW. The ceramic coating looks absolutely flawless — the paint has never looked this good, even when it was brand new.", date: "March 2026" },
  { name: "Sarah K.", service: "Complete Detail", rating: 5, text: "I've tried several detailers in Lexington and LexPro is hands down the best. Attention to detail is unmatched. My car looks and smells like it just rolled off the lot.", date: "February 2026" },
  { name: "David R.", service: "Paint Correction (Multi-Stage)", rating: 5, text: "My truck had years of swirl marks and scratches. Hamad's multi-stage paint correction brought it back to life. The results are truly jaw-dropping.", date: "February 2026" },
  { name: "Jennifer L.", service: "Full Interior Detail", rating: 5, text: "With two kids and a dog, my SUV was a disaster. The interior detail was transformative — every surface is spotless. Worth every penny.", date: "January 2026" },
  { name: "Anthony W.", service: "Graphene Coating", rating: 5, text: "I had the graphene coating applied and the hydrophobic effect is insane. Water just beads right off. Professional operation all around.", date: "January 2026" },
  { name: "Rachel M.", service: "Basic Wash & Vacuum", rating: 5, text: "Even the basic wash exceeded my expectations. Hamad takes pride in his work and it shows. Already booked my next appointment.", date: "December 2025" },
];
