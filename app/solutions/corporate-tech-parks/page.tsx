"use client";

import SolutionHero from "@/components/SolutionHero";
import AlternatingShowcase from "@/components/AlternatingShowcase";
import IconGrid from "@/components/IconGrid";
import FAQAccordion from "@/components/FAQAccordion";
import { Building, TrendingUp, Users, ShieldCheck, Zap, Headphones, Cpu, Globe } from "lucide-react";

export default function CorporateTechParksPage() {
  return (
    <main className="bg-black min-h-screen">
      <SolutionHero 
        title="Corporate Cafeteria Services"
        subtitle="Corporate Tech Parks"
        description="A game-changing self-ordering experience designed to serve thousands of employees with zero queues, seamless tech, and unparalleled convenience."
        imageSrc="/corporate.jpeg" 
      />

      {/* Stats Section */}
      <section className="py-20 bg-white text-zinc-900 border-b border-zinc-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-center text-sm font-bold tracking-[0.2em] text-red-600 uppercase mb-12">Trusted By The Biggest Tech Parks</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-zinc-900 mb-2">400<span className="text-red-500">+</span></h2>
              <p className="text-lg font-bold text-zinc-500 uppercase tracking-wider">Clients</p>
            </div>
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-zinc-900 mb-2">1,500<span className="text-red-500">+</span></h2>
              <p className="text-lg font-bold text-zinc-500 uppercase tracking-wider">Food Outlets</p>
            </div>
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-zinc-900 mb-2">4000<span className="text-red-500">+</span></h2>
              <p className="text-lg font-bold text-zinc-500 uppercase tracking-wider">Users</p>
            </div>
          </div>
        </div>
      </section>
      
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
              "Local and international flavors",
          
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

      <IconGrid 
        title="We are game changers for your cafeteria."
        subtitle="Why Choose Us"
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

      <FAQAccordion 
        faqs={[
          { question: "How does the mobile ordering app work for employees?", answer: "Employees can download the app, browse the daily cafeteria menu from their desk, place an order, and receive a notification when their food is ready for pick-up, bypassing the line entirely." },
          { question: "Can the system integrate with employee ID cards?", answer: "Yes, our kiosks and POS terminals fully support RFID and NFC integrations, allowing employees to pay using their corporate ID badges or meal allowances." },
          { question: "Do you provide the food vendors?", answer: "We provide the comprehensive technology platform. We can either integrate with your existing food service providers (caterers) or introduce you to our network of trusted culinary partners." },
          { question: "Is the hardware durable enough for a busy tech park?", answer: "Absolutely. Our hardware is commercial-grade, built with spill-proof enclosures and scratch-resistant screens to handle the high volume of a bustling corporate cafeteria." }
        ]}
      />
    </main>
  );
}
