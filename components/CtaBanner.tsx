"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSiteContent } from "@/context/SiteContentContext";

export default function CtaBanner() {
  const content = useSiteContent("ctabanner", {
    title: "Ready to upgrade your restaurant's digital ecosystem?",
    subtitle: "Join over 2,500+ successful operators scaling their businesses with our end-to-end POS and Kiosk solutions.",
    primaryButtonText: "Book a Free Demo",
    secondaryButtonText: "Call +1 (800) 555-0199",
    backgroundImage: "/Modern_premium_takeaway_café_and_202606111244.jpeg"
  });

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      
      <Image 
        src={content.backgroundImage} 
        alt="Background" 
        fill 
        className="object-cover opacity-30 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
          {content.title}
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 font-medium mb-10 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/book-demo" className="w-full sm:w-auto bg-red-600 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]">
            {content.primaryButtonText} <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:+18005550199" className="w-full sm:w-auto bg-white/10 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-colors backdrop-blur-md">
            <Phone className="w-5 h-5" /> {content.secondaryButtonText}
          </a>
        </div>
      </div>

    </section>
  );
}
