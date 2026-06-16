"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface Step {
  title: string;
  description: string;
}

interface ProductWorkflowProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export default function ProductWorkflow({ title, subtitle, steps }: ProductWorkflowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create an animated path that fills up as the user scrolls
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white border-b border-zinc-200 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 mb-6"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">{subtitle}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight"
          >
            {title}
          </motion.h2>
        </div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-zinc-100 -translate-y-1/2 rounded-full z-0" />
          
          {/* Animated Foreground Line (No Glow) */}
          <motion.div 
            style={{ scaleX, transformOrigin: "left" }}
            className="hidden lg:block absolute top-10 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-red-600 to-red-500 -translate-y-1/2 rounded-full z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step Number Badge - Rounded and No Hover Glow */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-zinc-100 flex items-center justify-center text-3xl font-black text-zinc-300 shadow-md mb-8 relative z-10 group-hover:border-red-500 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300">
                  {index + 1}
                </div>
                
                {/* Content Card - No Hover BG or Border */}
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-red-600 transition-colors">{step.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
