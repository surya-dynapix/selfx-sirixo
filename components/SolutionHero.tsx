"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  imageSrc: string;
  buttonText?: string;
}

export default function SolutionHero({ title, subtitle, description, imageSrc, buttonText = "Book a Demo" }: SolutionHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover object-center" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-black text-red-500 uppercase tracking-[0.2em] mb-4">
            {subtitle}
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-neutral-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          <button className="px-10 py-4 rounded-full bg-red-600 text-white font-black tracking-wide hover:bg-red-700 hover:scale-105 transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)]">
            {buttonText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
