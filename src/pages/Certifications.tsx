import { Shield, Award, Calendar, User, Building2 } from "lucide-react";

const certs = [
  {
    title: "Authorized Installer – Jade Ceramic Coatings & Graphene",
    type: "Installer's Certificate of Accomplishment",
    individual: "Hamad Isaac",
    company: "LexPro Auto Spa",
    date: "02/15/2026",
    badge: "Authorized Installer – Certified 2026",
  },
  {
    title: "Certified Detailer Licensee",
    type: "Certified Auto Detailing Professional",
    individual: "Hamad Isaac",
    company: "The Detail Czar",
    date: "February 2026",
    badge: "Trainer: Nicholas Vacco – Detail Czar Certified Trainer",
  },
];

const CertificationsPage = () => (
  <main className="pt-24 pb-16 md:pb-24">
    <div className="container max-w-4xl">
      <div className="text-center mb-14">
        <Shield className="mx-auto text-gold mb-4" size={40} />
        <h1 className="text-4xl md:text-5xl font-black mb-4">Professional Certifications</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Verified credentials that demonstrate our commitment to excellence and continuous education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certs.map((c) => (
          <div key={c.title} className="glass rounded-2xl overflow-hidden card-hover">
            {/* Gold accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-gold/80 to-gold/30" />
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-gold" size={22} />
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">{c.type}</span>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-6">{c.title}</h2>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User size={14} className="text-silver" />
                  <span>{c.individual}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 size={14} className="text-silver" />
                  <span>{c.company}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={14} className="text-silver" />
                  <span>{c.date}</span>
                </div>
              </div>

              <div className="mt-6 p-3 rounded-lg bg-gold/10 border border-gold/20 text-center">
                <p className="text-xs font-semibold text-gold">{c.badge}</p>
              </div>

              {/* Cert image placeholder */}
              <div className="mt-6 aspect-[4/3] rounded-lg border border-border/50 bg-background/50 flex items-center justify-center">
                <p className="text-xs text-muted-foreground">Certificate image placeholder</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default CertificationsPage;
