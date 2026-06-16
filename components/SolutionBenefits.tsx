"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface SolutionBenefitsProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
  imageSrc?: string;
  videoSrc?: string;
}

export default function SolutionBenefits({ title, subtitle, benefits, imageSrc, videoSrc }: SolutionBenefitsProps) {
  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase mb-4">{subtitle}</p>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-8">{title}</h2>
              
              <div className="space-y-8 mt-12">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 bg-red-50 text-red-600 rounded-full p-1">
                      <CheckCircle2 size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                      <p className="text-zinc-500 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {(imageSrc || videoSrc) && (
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-zinc-50"
              >
                {videoSrc ? (
                  <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover object-center" 
                  />
                )}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
