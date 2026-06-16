"use client";

import { motion } from "framer-motion";

interface Metric {
  value: string;
  suffix?: string;
  label: string;
}

interface ProductImpactProps {
  title: string;
  subtitle: string;
  metrics: Metric[];
}

export default function ProductImpact({ title, subtitle, metrics }: ProductImpactProps) {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
      {/* Background Animated Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-red-600/15 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">{subtitle}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]"
            >
              {title}
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block text-zinc-500 font-medium max-w-xs text-right"
          >
            Verified results aggregated across our global enterprise network.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-8 md:p-10 text-center rounded-[2rem] bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-red-500/30 hover:bg-zinc-900 transition-all duration-500 overflow-hidden"
            >
              {/* Internal subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter relative z-10 flex items-baseline justify-center">
                <span className="bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="text-4xl md:text-5xl text-red-500 ml-1 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                    {metric.suffix}
                  </span>
                )}
              </h3>
              <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest relative z-10 group-hover:text-zinc-300 transition-colors">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
