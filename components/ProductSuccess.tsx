"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface ProductSuccessProps {
  title: string;
  subtitle: string;
  quote: string;
  author: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
}

export default function ProductSuccess({ title, subtitle, quote, author, role, challenge, solution, results }: ProductSuccessProps) {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-b border-zinc-200 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6"
          >
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

        <div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 overflow-hidden relative">
          {/* Decorative graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-bl-[100%] pointer-events-none opacity-50" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
            {/* Quote Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-100 relative"
            >
              <Quote className="text-red-100 w-24 h-24 absolute top-10 left-10 -z-10" />
              
              <div className="relative pl-8 border-l-4 border-red-600 mb-10 mt-6">
                <p className="text-3xl md:text-4xl font-black text-zinc-900 leading-[1.2] tracking-tight">
                  "{quote}"
                </p>
              </div>
              <div className="pl-8">
                <p className="font-bold text-xl text-zinc-950 mb-1">{author}</p>
                <p className="text-zinc-500 font-medium">{role}</p>
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-center bg-zinc-50/50"
            >
              <div className="mb-10">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-zinc-300" /> The Challenge
                </h4>
                <p className="text-zinc-700 leading-relaxed font-medium text-lg">{challenge}</p>
              </div>
              <div className="mb-10">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-zinc-300" /> The Solution
                </h4>
                <p className="text-zinc-700 leading-relaxed font-medium text-lg">{solution}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-4 h-px bg-zinc-300" /> Key Results
                </h4>
                <div className="flex flex-wrap gap-3">
                  {results.map((result, idx) => {
                    // Extracting numbers for emphasis if possible, otherwise just display the chip
                    const hasNumber = /\d/.test(result);
                    return (
                      <div key={idx} className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-red-200 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className={`text-zinc-900 ${hasNumber ? 'font-bold' : 'font-medium'}`}>{result}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
