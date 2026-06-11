"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IconGridProps {
  title: string;
  subtitle?: string;
  items: GridItem[];
}

export default function IconGrid({ title, subtitle, items }: IconGridProps) {
  return (
    <section className="py-32 bg-white text-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4">{title}</h2>
        {subtitle && <p className="text-red-600 font-bold tracking-widest uppercase mb-20">{subtitle}</p>}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {items.map((item, index) => {
            const bgColors = [
              "bg-[#e91e63]", // Pink
              "bg-[#00a884]", // Teal
              "bg-[#ffb300]", // Amber/Yellow
              "bg-[#ff6f3f]", // Orange
              "bg-[#3b82f6]", // Blue
              "bg-[#a855f7]", // Purple
              "bg-[#10b981]", // Emerald
              "bg-[#6366f1]", // Indigo
            ];
            
            const shadowColors = [
              "group-hover:shadow-[0_0_20px_rgba(233,30,99,0.4)]",
              "group-hover:shadow-[0_0_20px_rgba(0,168,132,0.4)]",
              "group-hover:shadow-[0_0_20px_rgba(255,179,0,0.4)]",
              "group-hover:shadow-[0_0_20px_rgba(255,111,63,0.4)]",
              "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
              "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
              "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
              "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
            ];

            const colorClass = bgColors[index % bgColors.length];
            const shadowClass = shadowColors[index % shadowColors.length];

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={`w-20 h-20 ${colorClass} text-white rounded-[1.75rem] flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ${shadowClass}`}>
                  <item.icon className="w-10 h-10 stroke-[2]" />
                </div>
                <h4 className="font-black text-xl mb-3">{item.title}</h4>
                <p className="text-base font-medium text-zinc-500 leading-relaxed max-w-xs">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
