"use client";

import SolutionHero from "@/components/SolutionHero";
import LogoTicker from "@/components/LogoTicker";
import TimelineSteps from "@/components/TimelineSteps";
import FAQAccordion from "@/components/FAQAccordion";
import { Heading1 } from "lucide-react";

export default function UniversitiesPage() {
  return (
    <main className="bg-black min-h-screen">
      <SolutionHero 
        title="University Cafe & Mess Services"
        subtitle="Universities"
        description="Transform your campus dining experience. A digital-first approach for Gen Z students that eliminates long mess lines and modernizes university food courts."
        imageSrc="/Ultra-realistic_cinematic_hero_banner_photography_202606041052.jpeg" 
      />

      <LogoTicker 
        title="Trusted By Top Universities"
        logos={[
          "/logo.png",
          "/logo.png",
          "/logo.png",
          "/logo.png"
        ]}
      />
      
      {/* Memories Banner */}
      <section className="py-32 bg-white text-center border-b border-zinc-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 mb-20 max-w-4xl mx-auto leading-tight">
            Brewing <span className="text-red-600 font-sans">best memories</span> for Students at SelfX cafeterias.
          </h1>
          <div className="w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-zinc-100">
                 <video
          src="/Student_dining_transformation_un…_202606041113 (1).mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
           
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
              
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#FAF9F6] py-24 text-center border-b border-zinc-200">
         <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Memorable Experiences for <span className="text-red-600 italic font-serif">Universities</span></h2>
      </div>

      <TimelineSteps 
        title="Seamless Technology"
        subtitle="The Digital Campus"
        steps={[
          { title: "Cashless Campus & Mess", description: "Integrate with student ID cards for a completely cashless dining experience across all campus outlets. Track balances and manage meal plans effortlessly.", imageSrc: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606041222.jpeg" },
          { title: "Pre-order via Student App", description: "Students can pre-order their meals between classes and pick them up instantly, avoiding rush hour lines and getting to their next lecture on time.", imageSrc: "/Ultra-realistic_cinematic_commercial_photography_of_202606041228.jpeg" },
          { title: "Smart Inventory & Delivery", description: "Automated backend systems ensure food is always stocked and delivered fresh to various campus locations, minimizing food waste.", imageSrc: "/Ultra-realistic_commercial_technology_photography_of_202606041235.jpeg" }
        ]}
      />

      <FAQAccordion 
        faqs={[
          { question: "How do you handle meal plans and subsidies?", answer: "Our system natively supports complex meal plan structures, daily limits, subsidies, and declining balances directly linked to the student ID card." },
          { question: "Can we use this for sporting events or pop-up stalls?", answer: "Yes! Our Handheld Mobile POS devices are perfect for taking payments at stadium concessions or temporary campus events without needing hardwired internet." },
          { question: "Does this work with our existing university portal?", answer: "We offer API integrations that can link our ordering system with most modern university management portals and single sign-on (SSO) systems." },
          { question: "Is the student data kept secure?", answer: "Data security is our top priority. We employ enterprise-grade encryption and comply with relevant educational data privacy standards to ensure student information is protected." }
        ]}
      />
    </main>
  );
}
