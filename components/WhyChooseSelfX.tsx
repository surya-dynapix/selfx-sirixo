"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Reason {
  title: string;
  description: string;
}

interface WhyChooseSelfXProps {
  title: string;
  subtitle: string;
  description: string;
  reasons: Reason[];
}

export default function WhyChooseSelfX({ title, subtitle, description, reasons }: WhyChooseSelfXProps) {
  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <p className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase mb-4">{subtitle}</p>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6 leading-tight">{title}</h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-8">{description}</p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-red-600 shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-3">{reason.title}</h3>
                      <p className="text-zinc-500 leading-relaxed">{reason.description}</p>
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
