"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Spec {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface HardwareAdvancedSpecsProps {
  title: string;
  specs: Spec[];
}

export default function HardwareAdvancedSpecs({ title, specs }: HardwareAdvancedSpecsProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="w-16 h-1.5 bg-indigo-500 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                {title}
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                Engineered for performance, built for reliability. Discover the technical details that power your business.
              </p>
            </motion.div>
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative group rounded-3xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                  <div className="relative bg-white border border-slate-200 p-8 rounded-3xl h-full transition-transform duration-500 group-hover:-translate-y-1 group-hover:border-transparent flex items-start gap-5">
                    <div className="mt-1 p-3 bg-indigo-50 rounded-2xl text-indigo-500 group-hover:text-indigo-600 group-hover:bg-indigo-100 transition-colors shadow-sm">
                      {spec.icon || <CheckCircle2 className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-2">{spec.label}</h4>
                      <p className="text-slate-900 font-bold text-lg leading-tight">{spec.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
