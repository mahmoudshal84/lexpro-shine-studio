import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/constants";
import EditorialHeadline from "@/components/EditorialHeadline";
import Eyebrow from "@/components/Eyebrow";
import { Shield, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => (
  <main className="pt-24 pb-16 md:pb-24">
    <div className="container max-w-4xl">
      <div className="text-center mb-14">
        <Eyebrow>Our Story</Eyebrow>
        <EditorialHeadline
          as="h1"
          segments={[
            { text: "About ", weight: "light" },
            { text: BUSINESS.name, weight: "bold", accent: true },
          ]}
          className="mb-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
        {/* Photo placeholder */}
        <div className="md:col-span-2">
          <div className="aspect-[3/4] rounded-2xl glass overflow-hidden flex items-center justify-center">
            <div className="text-center p-6">
              <User className="mx-auto text-muted-foreground mb-3" size={48} />
              <p className="text-sm text-muted-foreground">Photo of {BUSINESS.owner}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-4">Meet {BUSINESS.owner}</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {BUSINESS.name} was built on a passion for automotive perfection. What started as an obsession with keeping his own vehicles flawless grew into Lexington's most trusted detailing studio.
            </p>
            <p>
              {BUSINESS.owner} believes every vehicle — from daily drivers to exotic supercars — deserves the same meticulous attention. That's why he invested in professional training and certifications from the industry's leading organizations.
            </p>
            <p>
              With expertise in ceramic coating installation and multi-stage paint correction, {BUSINESS.owner} combines cutting-edge products with time-tested techniques to deliver results that speak for themselves.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Award className="text-gold" size={20} /> Professional Credentials
            </h3>
            <div className="space-y-3">
              {[
                "Authorized Installer – Jade Ceramic Coatings & Graphene (2026)",
                "Certified Auto Detailing Professional – The Detail Czar",
              ].map((cred) => (
                <div key={cred} className="flex items-start gap-2">
                  <Shield className="text-gold mt-0.5 shrink-0" size={14} />
                  <span className="text-sm text-muted-foreground">{cred}</span>
                </div>
              ))}
            </div>
            <Link to="/certifications" className="inline-block mt-4">
              <Button variant="outline" size="sm">View Certifications</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;
