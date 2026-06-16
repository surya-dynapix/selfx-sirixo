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
  GraduationCap, Clock, Wallet, ShieldCheck, Zap, Headphones, Cpu, Globe, 
  BookOpen, Users
} from "lucide-react";

export default function UniversitiesPageClient() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <SolutionHero 
        title="University Cafe & Mess Services"
        subtitle="Universities"
        description="Transform your campus dining experience. A digital-first approach for Gen Z students that eliminates long mess lines and modernizes university food courts."
        imageSrc="/Ultra-realistic_cinematic_hero_banner_photography_202606041052.jpeg" 
        buttonText="Book a Demo"
        secondaryButtonText="Explore Features"
      />

      {/* 2. Industry Challenges Section */}
      <IndustryChallenges 
        subtitle="The Problem"
        title="Why campus dining needs an upgrade"
        challenges={[
          {
            icon: Clock,
            title: "Long Mess Lines",
            description: "Students spend too much time waiting for meals between classes, leading to frustration and tardiness."
          },
          {
            icon: Wallet,
            title: "Clunky Meal Plans",
            description: "Traditional ID card systems are outdated, hard to track, and lack modern digital integration."
          },
          {
            icon: BookOpen,
            title: "Outdated Experience",
            description: "Gen Z expects a seamless, app-based ordering experience that traditional cafeterias fail to provide."
          }
        ]}
      />

      {/* 3. How SELFX Solves These Problems */}
      <AlternatingShowcase 
        title="The Digital Campus Experience"
        subtitle="End-to-End Solutions"
        items={[
          {
            subtitle: "Cashless Campus & Mess",
            title: "Seamless ID Integration",
            description: "Integrate with student ID cards for a completely cashless dining experience across all campus outlets. Track balances and manage meal plans effortlessly.",
            bullets: [
              "Link directly to student accounts",
              "Manage subsidies and daily limits",
              "Real-time balance tracking"
            ],
            mainImage: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606041222.jpeg",
            subImages: []
          },
          {
            subtitle: "Mobile Pre-ordering",
            title: "Pre-order via Student App",
            description: "Students can pre-order their meals between classes and pick them up instantly, avoiding rush hour lines and getting to their next lecture on time.",
            bullets: [
              "Schedule pickups in advance",
              "Browse full menus and nutritional info",
              "Push notifications for order readiness"
            ],
            mainImage: "/Ultra-realistic_cinematic_commercial_photography_of_202606041228.jpeg",
            subImages: []
          },
          {
            subtitle: "Automated Backend",
            title: "Smart Inventory & Delivery",
            description: "Automated backend systems ensure food is always stocked and delivered fresh to various campus locations, minimizing food waste.",
            bullets: [
              "AI-driven demand forecasting",
              "Multi-location inventory tracking",
              "Reduce food waste significantly"
            ],
            mainImage: "/Ultra-realistic_commercial_technology_photography_of_202606041235.jpeg",
            subImages: []
          }
        ]}
      />

      {/* 4. Benefits Section (using Video) */}
      <SolutionBenefits 
        subtitle="Student Outcomes"
        title="Brewing best memories for students"
        videoSrc="/Student_dining_transformation_un…_202606041113 (1).mp4"
        benefits={[
          {
            title: "Elevate Campus Life",
            description: "Provide a modern, tech-forward dining experience that attracts and retains top students."
          },
          {
            title: "Increase Dining Revenue",
            description: "Make it easier for students to order from various campus outlets, boosting overall sales."
          },
          {
            title: "Streamline Operations",
            description: "Reduce the administrative burden of managing complex meal plans and subsidies."
          }
        ]}
      />

      {/* 5. Key Features Section */}
      <IconGrid 
        title="Built for the modern university"
        subtitle="Platform Features"
        items={[
          { icon: GraduationCap, title: "Student App", description: "Native iOS and Android apps for seamless ordering." },
          { icon: Wallet, title: "Meal Plan Sync", description: "Natively supports declining balances and subsidies." },
          { icon: Users, title: "Parent Portal", description: "Allow parents to top-up balances and view transaction history." },
          { icon: ShieldCheck, title: "FERPA Compliant", description: "Strict adherence to student data privacy regulations." },
          { icon: Zap, title: "Rapid Deployment", description: "Go live across campus in weeks, not months." },
          { icon: Headphones, title: "24/7 Support", description: "Dedicated account managers for your university." },
          { icon: Cpu, title: "API Integrations", description: "Connect with existing university management systems." },
          { icon: Globe, title: "Multi-Campus", description: "Unify dining across sprawling or multi-city campuses." }
        ]}
      />

      {/* 6. Ideal Locations / Use Cases */}
      <VerticalCardCarousel 
        title="Where SELFX shines on campus"
        subtitle="Ideal Environments"
        cards={[
          { title: "Main Food Courts", imageSrc: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606041222.jpeg" },
          { title: "Library Cafes", imageSrc: "/Ultra-realistic_cinematic_commercial_photography_of_202606041228.jpeg" },
          { title: "Stadium Concessions", imageSrc: "/Ultra-realistic_commercial_technology_photography_of_202606041235.jpeg" },
          { title: "Dormitory Mess Halls", imageSrc: "/Ultra-realistic_cinematic_hero_banner_photography_202606041052.jpeg" }
        ]}
      />

      {/* 7. Success Metrics / Results */}
      <SolutionStats 
        subtitle="Trusted By Top Universities"
        stats={[
          { value: "50", suffix: "+", label: "Campuses" },
          { value: "500", suffix: "k+", label: "Active Students" },
          { value: "10", suffix: "M+", label: "Orders Processed" }
        ]}
      />

      {/* 8. Why Choose SELFX */}
      <WhyChooseSelfX 
        subtitle="The SELFX Advantage"
        title="A partner in higher education"
        description="We understand the unique complexities of university dining operations and have built a platform specifically tailored to solve them."
        reasons={[
          { title: "Deep Integrations", description: "We seamlessly connect with leading campus card providers like Blackboard and CBORD." },
          { title: "Hardware Flexibility", description: "Use our kiosks for fixed locations, and our handhelds for pop-up events and stadiums." },
          { title: "Dedicated Onboarding", description: "Our team handles the heavy lifting of menu digitization and system setup." },
          { title: "Continuous Innovation", description: "We regularly update our platform with features requested by our university partners." }
        ]}
      />

      {/* 9. FAQ Section */}
      <FAQAccordion 
        faqs={[
          { question: "How do you handle meal plans and subsidies?", answer: "Our system natively supports complex meal plan structures, daily limits, subsidies, and declining balances directly linked to the student ID card." },
          { question: "Can we use this for sporting events or pop-up stalls?", answer: "Yes! Our Handheld Mobile POS devices are perfect for taking payments at stadium concessions or temporary campus events without needing hardwired internet." },
          { question: "Does this work with our existing university portal?", answer: "We offer API integrations that can link our ordering system with most modern university management portals and single sign-on (SSO) systems." },
          { question: "Is the student data kept secure?", answer: "Data security is our top priority. We employ enterprise-grade encryption and comply with relevant educational data privacy standards to ensure student information is protected." }
        ]}
      />

      {/* 10. Final CTA Section */}
      <FinalCTA 
        title="Ready to modernize your campus dining?"
        subtitle="Join forward-thinking universities delivering premium, digital-first food services."
        buttonText="Book a Custom Demo"
        secondaryButtonText="Talk to Sales"
      />
    </main>
  );
}
