"use client";

import SolutionHero from "@/components/SolutionHero";
import IndustryChallenges from "@/components/IndustryChallenges";
import AlternatingShowcase from "@/components/AlternatingShowcase";
import SolutionBenefits from "@/components/SolutionBenefits";
import IconGrid from "@/components/IconGrid";
import VerticalCardCarousel from "@/components/VerticalCardCarousel";
import SolutionStats from "@/components/SolutionStats";
import WhyChooseSelfX from "@/components/WhyChooseSelfX";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import { 
  MonitorSmartphone, BarChart3, Clock, ShieldCheck, 
  Store, CreditCard, LayoutDashboard, Utensils
} from "lucide-react";

export default function FoodCourtsPageClient() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <SolutionHero 
        title="Foodcourts Reimagined"
        subtitle="Commercial Spaces"
        description="Transforming multi-vendor dining spaces into seamless, digital-first hubs. Reduce wait times and consolidate ordering into one smooth experience."
        imageSrc="/Ultra-realistic_cinematic_photography_of_a_202606041239.jpeg" 
        buttonText="Book a Demo"
        secondaryButtonText="Explore Features"
      />

      {/* 2. Industry Challenges Section */}
      <IndustryChallenges 
        subtitle="The Problem"
        title="The chaos of traditional food courts"
        challenges={[
          {
            icon: Clock,
            title: "Disjointed Ordering",
            description: "Customers have to queue separately for each vendor, frustrating families and groups who want different cuisines."
          },
          {
            icon: CreditCard,
            title: "Payment Friction",
            description: "Handling multiple payments across different counters slows down service during peak dining hours."
          },
          {
            icon: Store,
            title: "Vendor Management",
            description: "Operators struggle to unify sales data, track performance, and manage settlements across multiple independent brands."
          }
        ]}
      />

      {/* 3. How SELFX Solves These Problems */}
      <AlternatingShowcase 
        title="Our Services"
        subtitle="End-to-end food court management"
        items={[
          {
            subtitle: "Unified Systems",
            title: "Consolidated Technology",
            description: "A centralized POS and Kiosk ecosystem allows customers to order from multiple brands in a single transaction, reducing queue times drastically.",
            bullets: [
              "Unified Self-Ordering Kiosks",
              "Centralized Kitchen Display Systems",
              "Consolidated payment processing"
            ],
            mainImage: "/foodcourt.png",
            subImages: ["/delivery-app.png", "/kitchen-display.png"]
          },
          {
            subtitle: "Culinary Curation",
            title: "Curated Brand Experiences",
            description: "We help curate a perfect mix of national and local brands to offer a diverse culinary experience that drives footfall and satisfaction.",
            bullets: [
              "Brand mix optimization",
              "Quality and hygiene audits",
              "Unified menu management"
            ],
            mainImage: "/foodcourt1.png",
            subImages: []
          }
        ]}
      />

      {/* 4. Benefits Section */}
      <SolutionBenefits 
        subtitle="Business Outcomes"
        title="Elevating the standard for dining experiences"
        imageSrc="/Ultra-realistic_cinematic_photography_of_a_202606041239.jpeg"
        benefits={[
          {
            title: "Increase Overall Footfall",
            description: "A seamless ordering experience attracts more customers who would otherwise avoid crowded traditional food courts."
          },
          {
            title: "Boost Vendor Sales",
            description: "Unified ordering encourages cross-selling, as customers are more likely to order a drink from one vendor and a meal from another."
          },
          {
            title: "Simplify Operations",
            description: "Centralized management drastically reduces the administrative overhead of running a multi-vendor space."
          }
        ]}
      />

      {/* 5. Key Features Section */}
      <IconGrid 
        title="Why choose SelfX?"
        subtitle="The Advantage"
        items={[
          { icon: MonitorSmartphone, title: "Unified Ordering", description: "Order from multiple vendors in one cart." },
          { icon: BarChart3, title: "Central Analytics", description: "View sales data for all vendors in one dashboard." },
          { icon: Clock, title: "Reduced Wait Times", description: "Streamlined pickup with digital signage." },
          { icon: ShieldCheck, title: "Secure Splits", description: "Automated routing of funds to respective vendors." },
          { icon: Utensils, title: "Menu Management", description: "Centralized control over all vendor menus." },
          { icon: LayoutDashboard, title: "Vendor Portals", description: "Individual access for brands to manage their own operations." },
          { icon: Store, title: "Hardware Agnostic", description: "Integrates with existing kitchen display systems." },
          { icon: CreditCard, title: "Cashless Hubs", description: "Fully digital payments across the entire food court." }
        ]}
      />

      {/* 6. Ideal Locations / Use Cases */}
      <VerticalCardCarousel 
        title="Vibrant hubs for experiences"
        subtitle="Foodcourts are more than dining spaces"
        cards={[
          { title: "Shopping Malls", imageSrc: "/Ultra-realistic_architectural_photography_of_a_202606041244.jpeg" },
          { title: "Highway Rest Stops", imageSrc: "/Ultra-realistic_cinematic_night_photography_of_202606041247.jpeg" },
          { title: "Tech Parks", imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041250.jpeg" },
          { title: "Hospitals", imageSrc: "/Ultra-realistic_cinematic_photography_of_healthcare_202606041252.jpeg" },
          { title: "Airports", imageSrc: "/Ultra-realistic_cinematic_photography_of_a_202606041256.jpeg" }
        ]}
      />

      {/* 7. Success Metrics / Results */}
      <SolutionStats 
        subtitle="Trusted By Top Commercial Spaces"
        stats={[
          { value: "100", suffix: "+", label: "Locations" },
          { value: "500", suffix: "+", label: "Brands" },
          { value: "30", suffix: "%", label: "Increase in Sales" }
        ]}
      />

      {/* 8. Why Choose SELFX */}
      <WhyChooseSelfX 
        subtitle="The SELFX Advantage"
        title="Built for complex environments"
        description="We master the complexity of multi-vendor operations so you can focus on delivering exceptional culinary experiences to your guests."
        reasons={[
          { title: "Automated Settlements", description: "Say goodbye to manual reconciliation. Our system automatically routes funds to the correct vendors." },
          { title: "Unified Customer Journey", description: "From ordering at a kiosk to tracking status on digital screens, the entire journey is cohesive." },
          { title: "Scalable Architecture", description: "Easily add new vendors or expand your food court footprint without overhauling your systems." },
          { title: "Dedicated Support", description: "We provide comprehensive training and 24/7 support for both operators and individual vendors." }
        ]}
      />

      {/* 9. FAQ Section */}
      <FAQAccordion 
        faqs={[
          { question: "How does the payment split work for multi-vendor orders?", answer: "Our backend system automatically splits the transaction and routes the correct funds to each respective vendor's account in real-time, simplifying reconciliation." },
          { question: "Can vendors manage their own menus?", answer: "Yes, each vendor gets access to a sub-portal where they can update their menu, pricing, and availability, which instantly syncs to the central kiosks." },
          { question: "Do you provide digital signage for order pickups?", answer: "Yes, we provide high-visibility digital screens that display live order statuses for all vendors, reducing congestion around the pickup counters." },
          { question: "Is the system easy to scale if we add new vendors?", answer: "Absolutely. Adding a new vendor is as simple as creating an account in the portal. Their menu will immediately populate on the unified kiosks." }
        ]}
      />

      {/* 10. Final CTA Section */}
      <FinalCTA 
        title="Ready to transform your food court?"
        subtitle="Join leading operators delivering seamless, multi-vendor dining experiences."
        buttonText="Book a Custom Demo"
        secondaryButtonText="Talk to Sales"
      />
    </main>
  );
}
