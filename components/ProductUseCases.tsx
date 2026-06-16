"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface UseCase {
  title: string;
  imageSrc: string;
}

interface ProductUseCasesProps {
  title: string;
  subtitle: string;
  useCases: UseCase[];
}

export default function ProductUseCases({ title, subtitle, useCases }: ProductUseCasesProps) {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">{subtitle}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-[1.1]"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.15)] transition-shadow duration-500"
            >
              <Image 
                src={useCase.imageSrc}
                alt={useCase.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />
              
              {/* Complex gradient overlay for high contrast text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 pointer-events-none transition-opacity duration-500" />
              <div className="absolute inset-0 bg-red-900/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{useCase.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
