"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface SolutionStatsProps {
  subtitle: string;
  stats: Stat[];
}

export default function SolutionStats({ subtitle, stats }: SolutionStatsProps) {
  return (
    <section className="py-24 bg-black text-white border-b border-zinc-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <p className="text-center text-sm font-bold tracking-[0.2em] text-red-500 uppercase mb-16">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h2 className="text-6xl md:text-7xl font-black text-white mb-4">
                {stat.value}
                {stat.suffix && <span className="text-red-500">{stat.suffix}</span>}
              </h2>
              <p className="text-lg font-bold text-zinc-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
