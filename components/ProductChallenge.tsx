"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

interface Challenge {
  title: string;
  description: string;
}

interface ProductChallengeProps {
  title: string;
  subtitle: string;
  challenges: Challenge[];
  imageSrc: string;
}

export default function ProductChallenge({ title, subtitle, challenges, imageSrc }: ProductChallengeProps) {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-b border-zinc-200 overflow-hidden relative">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">{subtitle}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-12 leading-[1.1]">
                {title}
              </h2>

              <div className="space-y-8">
                {challenges.map((challenge, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300">
                        <AlertTriangle className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-red-600 transition-colors">{challenge.title}</h3>
                      <p className="text-zinc-500 leading-relaxed font-medium">{challenge.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 perspective-1000">
             <motion.div
                initial={{ opacity: 0, rotateY: 10, x: 20 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-[4/5] md:aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200/50 bg-white group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Image 
                  src={imageSrc} 
                  alt={title} 
                  fill
                  className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
