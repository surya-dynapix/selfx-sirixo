"use client";

import SolutionHero from "@/components/SolutionHero";
import VerticalCardCarousel from "@/components/VerticalCardCarousel";
import AlternatingShowcase from "@/components/AlternatingShowcase";
import LogoTicker from "@/components/LogoTicker";
import IconGrid from "@/components/IconGrid";
import FAQAccordion from "@/components/FAQAccordion";
import { MonitorSmartphone, BarChart3, Clock, ShieldCheck } from "lucide-react";

export default function FoodCourtsPage() {
  return (
    <main className="bg-black min-h-screen">
      <SolutionHero 
        title="Foodcourts Reimagined"
        subtitle="Commercial Spaces"
        description="Transforming multi-vendor dining spaces into seamless, digital-first hubs. Reduce wait times and consolidate ordering into one smooth experience."
        imageSrc="/Ultra-realistic_cinematic_photography_of_a_202606041239.jpeg" 
      />

      <section className="bg-white py-24 text-center px-6 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-medium text-zinc-600 leading-relaxed">
             Authentic experiences and innovative technology bring together diverse culinary brands to create popular destinations for food lovers, elevating the standard for dining experiences.
           </h2>
        </div>
      </section>

      <VerticalCardCarousel 
        title="Foodcourts are more than dining spaces"
        subtitle="Vibrant hubs for experiences"
        cards={[
          { title: "Malls", imageSrc: "/Ultra-realistic_architectural_photography_of_a_202606041244.jpeg" },
          { title: "Highway Foodcourts", imageSrc: "/Ultra-realistic_cinematic_night_photography_of_202606041247.jpeg" },
          { title: "Tech Parks", imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041250.jpeg" },
          { title: "Hospitals", imageSrc: "/Ultra-realistic_cinematic_photography_of_healthcare_202606041252.jpeg" },
          { title: "Universities", imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041256.jpeg" }
        ]}
      />
      
      <AlternatingShowcase 
        title="Our Services"
        subtitle="End-to-end food court management"
        items={[
          {
            subtitle: "Culinary Curation",
            title: "Food",
            description: "We curate a perfect mix of national and local brands to offer a diverse culinary experience that drives footfall and satisfaction.",
            bullets: [
              "Brand mix optimization",
              "Quality and hygiene audits",
              "Unified menu management"
            ],
            mainImage: "/foodcourt1.png",
            subImages: []
          },
          {
            subtitle: "Unified Systems",
            title: "Technology",
            description: "A centralized POS and Kiosk ecosystem allows customers to order from multiple brands in a single transaction, reducing queue times drastically.",
            bullets: [
              "Unified Self-Ordering Kiosks",
              "Centralized Kitchen Display Systems",
              "Consolidated payment processing"
            ],
            mainImage: "/foodcourt.png",
            subImages: ["/delivery-app.png", "/kitchen-display.png"]
          }
        ]}
      />

      <LogoTicker 
        title="Trusted By 500+ Brands"
        logos={[
          "/logo.png",
          "/logo.png",
          "/logo.png",
          "/logo.png"
        ]}
      />

      <IconGrid 
        title="Why choose SelfX?"
        subtitle="The Advantage"
        items={[
          { icon: MonitorSmartphone, title: "Unified Ordering", description: "Order from multiple vendors in one cart." },
          { icon: BarChart3, title: "Central Analytics", description: "View sales data for all vendors in one dashboard." },
          { icon: Clock, title: "Reduced Wait Times", description: "Streamlined pickup with digital signage." },
          { icon: ShieldCheck, title: "Secure Splits", description: "Automated routing of funds to respective vendors." }
        ]}
      />

      <FAQAccordion 
        faqs={[
          { question: "How does the payment split work for multi-vendor orders?", answer: "Our backend system automatically splits the transaction and routes the correct funds to each respective vendor's account in real-time, simplifying reconciliation." },
          { question: "Can vendors manage their own menus?", answer: "Yes, each vendor gets access to a sub-portal where they can update their menu, pricing, and availability, which instantly syncs to the central kiosks." },
          { question: "Do you provide digital signage for order pickups?", answer: "Yes, we provide high-visibility digital screens that display live order statuses for all vendors, reducing congestion around the pickup counters." },
          { question: "Is the system easy to scale if we add new vendors?", answer: "Absolutely. Adding a new vendor is as simple as creating an account in the portal. Their menu will immediately populate on the unified kiosks." }
        ]}
      />
    </main>
  );
}
