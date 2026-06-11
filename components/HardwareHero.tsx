"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HardwareHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export default function HardwareHero({ title, subtitle, description, imageSrc }: HardwareHeroProps) {
  return (
    <section className="relative pt-32 pb-10 md:pt-48 md:pb-0 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-100/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Centered Text Content */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 mb-8 rounded-full bg-white shadow-sm border border-slate-200 text-indigo-600 font-bold tracking-widest text-xs uppercase"
          >
            {subtitle}
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-slate-900 tracking-tighter">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Full-width Image Banner */}
        <motion.div 
          className="relative w-full max-w-6xl mx-auto mt-auto flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] rounded-full max-w-4xl mx-auto top-1/4" />
          
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image 
              src={imageSrc} 
              alt={title} 
              fill
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
