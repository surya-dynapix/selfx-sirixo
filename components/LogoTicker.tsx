"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoTickerProps {
  title?: string;
  logos: string[]; // paths to logo images
}

export default function LogoTicker({ title, logos }: LogoTickerProps) {
  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  if (!logos || logos.length === 0) return null;

  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden border-t border-b border-neutral-900">
      <div className="container mx-auto">
        {title && (
          <div className="text-center mb-12">
            <p className="text-neutral-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base">{title}</p>
          </div>
        )}
        
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-20 items-center px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="relative w-32 h-16 md:w-40 md:h-20 shrink-0 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
                <Image src={logo} alt={`Client Logo ${index}`} fill className="object-contain" />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Fades for edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
