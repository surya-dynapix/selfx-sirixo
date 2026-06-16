"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export default function ProductFeatures({ title, subtitle, features }: ProductFeaturesProps) {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-b border-zinc-200 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-[1400px]">
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
        
        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {features.map((feature, index) => {
            // Create a pseudo-random span effect for visual variety to mimic a bento box, 
            // but keep it safe so it doesn't break grid on smaller screens.
            // On very large screens, make some items span 2 columns if it's a specific index
            const isWide = (index === 0 || index === 3) && features.length > 4;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative group bg-white p-8 rounded-[2rem] border border-zinc-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isWide ? 'md:col-span-2 lg:col-span-2 xl:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 text-zinc-600 shadow-sm relative z-10 group-hover:scale-110">
                  <feature.icon size={26} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-zinc-950 mb-3 relative z-10 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed font-medium relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
