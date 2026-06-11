"use client";

import { motion } from "framer-motion";

interface Spec {
  label: string;
  value: string;
}

interface HardwareSpecsProps {
  title?: string;
  specs: Spec[];
}

export default function HardwareSpecs({ title = "Technical Specifications", specs }: HardwareSpecsProps) {
  return (
    <section className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900/40 backdrop-blur-md border border-neutral-800/60 p-8 rounded-2xl hover:border-red-500/50 hover:bg-neutral-900/80 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4 className="text-neutral-500 text-sm font-semibold mb-2 uppercase tracking-widest">{spec.label}</h4>
              <p className="text-xl text-neutral-100 font-medium leading-snug">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
