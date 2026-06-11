"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
  imageSrc: string;
}

interface TimelineStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export default function TimelineSteps({ title, subtitle, steps }: TimelineStepsProps) {
  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">{title}</h2>
          <p className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base">{subtitle}</p>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-800 -translate-x-1/2 rounded-full" />
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                  {/* Number Badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-red-600 rounded-full border-8 border-black text-white text-lg font-black flex items-center justify-center z-10 hidden md:flex shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    {index + 1}
                  </div>

                  {/* Empty Spacer for alignment */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'order-2' : 'order-1'}`} />

                  {/* Content (Left or Right) */}
                  <motion.div 
                    className={`w-full md:w-[45%] flex flex-col ${isEven ? 'order-1 md:items-end md:text-right' : 'order-2 md:items-start md:text-left'} bg-[#111] p-8 md:p-10 rounded-[2rem] border border-neutral-800 shadow-xl`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="md:hidden w-10 h-10 bg-red-600 rounded-full text-white font-black flex items-center justify-center mb-4 shadow-lg">
                      {index + 1}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                    <p className="text-neutral-400 font-medium mb-8 leading-relaxed">{step.description}</p>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800/50">
                      <Image src={step.imageSrc} alt={step.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
