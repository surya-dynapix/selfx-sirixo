"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useSiteContent } from "@/context/SiteContentContext";

export default function Hero() {
  const content = useSiteContent("hero", {
    videoUrl: "/Futuristic_kiosk_product_reveal_…_202606041416 (1).mp4",
    headline: "The Ultimate Hardware + <span class=\"text-red-500\">AI Software Ecosystem</span> for Restaurants & Retail.",
    subtitle: "Empower your customers, slash ordering queues, reduce front-of-house staff workload, and skyrocket your average order value with the SelfX smart kiosk.",
    buttonText: "Book a Demo",
    buttonLink: "/book-demo"
  });

  return (
    <section className="relative w-full h-[80vh] min-h-[550px] md:h-[calc(100vh-112px)] overflow-hidden bg-zinc-950 flex items-center justify-center">
      
      {/* Background Full-Bleed Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src={content.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark/Gradated Overlay to ensure perfect legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75 pointer-events-none" />
      </div>

      {/* Overlaid Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center text-white">


        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl"
          dangerouslySetInnerHTML={{ __html: content.headline }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-200/90 font-normal leading-relaxed max-w-2xl mb-10"
        >
          {content.subtitle}
        </motion.p>

        {/* Centered CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <a
            href={content.buttonLink}
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-102 shadow-lg shadow-red-600/30 active:scale-98"
          >
            {content.buttonText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
