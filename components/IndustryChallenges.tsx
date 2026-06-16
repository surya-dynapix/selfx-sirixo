"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Challenge {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IndustryChallengesProps {
  title: string;
  subtitle: string;
  challenges: Challenge[];
}

export default function IndustryChallenges({ title, subtitle, challenges }: IndustryChallengesProps) {
  return (
    <section className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase mb-4">{subtitle}</p>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:text-red-600 transition-colors text-zinc-600">
                <challenge.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{challenge.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
