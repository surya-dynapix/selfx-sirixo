"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ProductHeroProps {
  productName: string;
  headline: string;
  description: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  imageSrc: string;
  highlights: string[];
}

export default function ProductHero({
  productName,
  headline,
  description,
  primaryCtaText = "Book a Demo",
  secondaryCtaText = "Explore Features",
  imageSrc,
  highlights
}: ProductHeroProps) {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center pt-24 pb-20 overflow-hidden border-b border-zinc-800">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt={productName} 
          fill 
          className="object-cover object-center" 
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center mt-12 md:mt-24">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-red-500 font-bold text-sm md:text-base uppercase tracking-[0.2em] block mb-6 drop-shadow-md"
        >
          {productName}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-5xl lg:text-[4.5rem] font-black tracking-tighter text-white leading-[1.05] mb-8 drop-shadow-2xl"
        >
          {headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-xl text-zinc-200 leading-relaxed mb-12 max-w-3xl drop-shadow-md font-medium"
        >
          {description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16"
        >
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span className="text-white font-semibold text-sm drop-shadow-md">{highlight}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="px-7 py-3 bg-white text-zinc-950 rounded-full font-semibold text-md hover:bg-zinc-100 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            {primaryCtaText}
          </button>
          <button className="px-8 py-4 bg-black/40 text-white backdrop-blur-md rounded-full font-bold text-lg hover:bg-black/60 transition-colors border border-white/20">
            {secondaryCtaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
