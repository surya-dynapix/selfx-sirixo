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
  Building, TrendingUp, Users, ShieldCheck, Zap, Headphones, Cpu, Globe, 
  Clock, Coffee, UtensilsCrossed 
} from "lucide-react";

export default function CorporateTechParksPageClient() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <SolutionHero 
        title="Corporate Cafeteria Services"
        subtitle="Corporate Tech Parks"
        description="A game-changing self-ordering experience designed to serve thousands of employees with zero queues, seamless tech, and unparalleled convenience."
        imageSrc="/corporate.jpeg" 
        buttonText="Book a Demo"
        secondaryButtonText="Explore Features"
      />

      {/* 2. Industry Challenges Section */}
      <IndustryChallenges 
        subtitle="The Problem"
        title="Why traditional corporate cafeterias are failing"
        challenges={[
          {
            icon: Clock,
            title: "Long Queues During Peak Hours",
            description: "Employees waste their valuable break time standing in line instead of relaxing and recharging."
          },
          {
            icon: UtensilsCrossed,
            title: "Fragmented Ordering",
            description: "Multiple vendors mean multiple transactions, creating a frustrating and slow user experience."
          },
          {
            icon: Coffee,
            title: "Inefficient Operations",
            description: "Lack of centralized data makes it hard to predict demand, leading to food waste and lost revenue."
          }
        ]}
      />

      {/* 3. How SELFX Solves These Problems */}
      <AlternatingShowcase 
        title="Our diverse offerings & services"
        subtitle="End-to-End Solutions"
        items={[
          {
            subtitle: "Flavourful Food",
            title: "Great Food at Work",
            description: "We provide diverse food options catering to every employee's preference, ensuring a delightful dining experience right at their workplace.",
            bullets: [
              "Wide variety of cuisines available",
              "Healthy and nutritious meal plans",
              "Local and international flavors"
            ],
            mainImage: "/Ultra-realistic_commercial_advertising_photography_of_202606031859.jpeg",
            subImages: []
          },
          {
            subtitle: "Seamless Technology",
            title: "Tech-Driven Convenience",
            description: "Say goodbye to long lunch lines. Our technology ecosystem streamlines ordering, payment, and pick-up, giving employees more time to relax.",
            bullets: [
              "Self-ordering kiosks to bust queues",
              "Mobile app for desk ordering",
              "Cashless, secure transactions"
            ],
            mainImage: "/Ultra-realistic_architectural_and_lifestyle_photography_202606041046.jpeg",
            subImages: []
          },
          {
            subtitle: "Smart Vending Solutions",
            title: "24/7 Access to Essentials",
            description: "Keep your workforce fueled around the clock with our smart vending solutions, perfect for late-night shifts and quick cravings.",
            bullets: [
              "Automated smart fridges",
              "IoT enabled inventory tracking",
              "Cashless tap-to-pay interface"
            ],
            mainImage: "/Ultra-realistic_architectural_photography_of_a_202606041043.jpeg",
            subImages: []
          }
        ]}
      />

      {/* 4. Benefits Section */}
      <SolutionBenefits 
        subtitle="Business Outcomes"
        title="Elevate your workplace experience"
        imageSrc="/corporate.jpeg"
        benefits={[
          {
            title: "Boost Employee Satisfaction",
            description: "Provide a seamless, stress-free dining experience that serves as a major perk for top talent."
          },
          {
            title: "Increase Productivity",
            description: "Reduce time spent waiting in line, returning valuable time to your employees' workday."
          },
          {
            title: "Optimize Space Utilization",
            description: "Replace bulky traditional counters with sleek, space-saving self-service kiosks."
          }
        ]}
      />

      {/* 5. Key Features Section */}
      <IconGrid 
        title="We are game changers for your cafeteria."
        subtitle="Platform Features"
        items={[
          { icon: Building, title: "Scalable Infrastructure", description: "Built to handle thousands of concurrent orders seamlessly." },
          { icon: TrendingUp, title: "Data-Driven Insights", description: "Track consumption patterns and optimize operations." },
          { icon: Users, title: "Employee Satisfaction", description: "Enhance workplace perks with a premium dining experience." },
          { icon: ShieldCheck, title: "Enterprise Security", description: "Bank-level encryption for all corporate transactions." },
          { icon: Zap, title: "Lightning Fast", description: "Zero lag processing during peak lunch hour rushes." },
          { icon: Headphones, title: "24/7 Support", description: "Dedicated account managers and rapid technical support." },
          { icon: Cpu, title: "AI Powered", description: "Smart upselling and inventory predictions." },
          { icon: Globe, title: "Multi-Location", description: "Manage cafeterias across different cities from one dashboard." }
        ]}
      />

      {/* 6. Ideal Locations / Use Cases */}
      <VerticalCardCarousel 
        title="Designed for enterprise scale"
        subtitle="Ideal Environments"
        cards={[
          { title: "Global HQs", imageSrc: "/Ultra-realistic_architectural_and_lifestyle_photography_202606041046.jpeg" },
          { title: "Multi-tenant Tech Parks", imageSrc: "/Ultra-realistic_architectural_photography_of_a_202606041043.jpeg" },
          { title: "R&D Facilities", imageSrc: "/Ultra-realistic_commercial_advertising_photography_of_202606031859.jpeg" },
          { title: "Manufacturing Campuses", imageSrc: "/corporate.jpeg" }
        ]}
      />

      {/* 7. Success Metrics / Results */}
      <SolutionStats 
        subtitle="Trusted By The Biggest Tech Parks"
        stats={[
          { value: "400", suffix: "+", label: "Clients" },
          { value: "1,500", suffix: "+", label: "Food Outlets" },
          { value: "4000", suffix: "+", label: "Users" }
        ]}
      />

      {/* 8. Why Choose SELFX */}
      <WhyChooseSelfX 
        subtitle="The SELFX Advantage"
        title="Enterprise-grade reliability"
        description="We don't just provide software; we provide a complete ecosystem engineered specifically for the demands of high-volume corporate environments."
        reasons={[
          { title: "99.9% Uptime", description: "Our cloud infrastructure guarantees your cafeteria stays operational during the most critical hours." },
          { title: "White-label Ready", description: "Customize the interface to match your corporate brand guidelines seamlessly." },
          { title: "Hardware Agnostic", description: "Deploy on our premium kiosks or integrate with your existing hardware investments." },
          { title: "Dedicated Support", description: "A dedicated account manager and 24/7 technical support team at your service." }
        ]}
      />

      {/* 9. FAQ Section */}
      <FAQAccordion 
        faqs={[
          { question: "How does the mobile ordering app work for employees?", answer: "Employees can download the app, browse the daily cafeteria menu from their desk, place an order, and receive a notification when their food is ready for pick-up, bypassing the line entirely." },
          { question: "Can the system integrate with employee ID cards?", answer: "Yes, our kiosks and POS terminals fully support RFID and NFC integrations, allowing employees to pay using their corporate ID badges or meal allowances." },
          { question: "Do you provide the food vendors?", answer: "We provide the comprehensive technology platform. We can either integrate with your existing food service providers (caterers) or introduce you to our network of trusted culinary partners." },
          { question: "Is the hardware durable enough for a busy tech park?", answer: "Absolutely. Our hardware is commercial-grade, built with spill-proof enclosures and scratch-resistant screens to handle the high volume of a bustling corporate cafeteria." }
        ]}
      />

      {/* 10. Final CTA Section */}
      <FinalCTA 
        title="Ready to transform your workplace dining?"
        subtitle="Join hundreds of forward-thinking companies delivering premium cafeteria experiences."
        buttonText="Book a Custom Demo"
        secondaryButtonText="Talk to Sales"
      />
    </main>
  );
}
