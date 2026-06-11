"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ShowcaseItem {
  subtitle: string;
  title: string;
  description: string;
  bullets: string[];
  mainImage: string;
  subImages: string[];
}

interface AlternatingShowcaseProps {
  title: string;
  subtitle: string;
  items: ShowcaseItem[];
}

export default function AlternatingShowcase({ title, subtitle, items }: AlternatingShowcaseProps) {
  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">{title}</h2>
          <p className="text-neutral-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">{subtitle}</p>
        </div>

        <div className="space-y-40">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                  
                  {/* Text Content */}
                  <motion.div 
                    className="w-full lg:w-1/2 bg-[#111] border border-neutral-800/80 p-10 md:p-14 rounded-[2.5rem] relative z-20 shadow-2xl"
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h4 className="text-red-500 font-black tracking-widest uppercase text-sm mb-3">{item.subtitle}</h4>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{item.title}</h3>
                    <p className="text-neutral-400 mb-8 leading-relaxed font-medium text-lg">{item.description}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {item.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start text-neutral-300 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-4 flex-shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Images */}
                  <motion.div 
                    className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute inset-0 bg-red-600/10 blur-[120px] rounded-full" />
                    <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-neutral-800 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                      <Image 
                        src={item.mainImage} 
                        alt={item.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                </div>

           
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
