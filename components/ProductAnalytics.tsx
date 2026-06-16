"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, TrendingUp, PieChart } from "lucide-react";

interface ProductAnalyticsProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export default function ProductAnalytics({ title, subtitle, description, imageSrc }: ProductAnalyticsProps) {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white border-b border-zinc-900 overflow-hidden relative">
      {/* Dynamic ambient background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-800/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] z-0" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-8 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase">{subtitle}</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                {title}
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-12 font-medium">
                {description}
              </p>

              <div className="space-y-6">
                {[
                  { icon: BarChart3, text: "Real-time performance tracking" },
                  { icon: TrendingUp, text: "Automated daily & weekly reports" },
                  { icon: PieChart, text: "Granular operational insights" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-5 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-4 rounded-2xl hover:bg-zinc-800/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-red-500 shadow-inner">
                      <item.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-zinc-200 font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12 perspective-1000">
             <motion.div
                initial={{ opacity: 0, rotateY: -15, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(220,38,38,0.2)] bg-zinc-900 border border-zinc-700/50 group"
              >
                {/* Metallic Window Frame */}
                <div className="w-full h-14 bg-gradient-to-b from-zinc-800 to-zinc-900 border-b border-zinc-800/50 flex items-center px-6 gap-2">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-700 group-hover:bg-red-500 transition-colors" />
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-700 group-hover:bg-yellow-500 transition-colors delay-75" />
                    <div className="w-3.5 h-3.5 rounded-full bg-zinc-700 group-hover:bg-green-500 transition-colors delay-150" />
                  </div>
                  <div className="mx-auto px-4 py-1.5 rounded-md bg-zinc-950/50 border border-zinc-800/50 text-xs font-medium text-zinc-500 tracking-wider">
                    analytics.selfx.com
                  </div>
                </div>
                
                {/* Dashboard Image */}
                <div className="relative aspect-[4/3] w-full bg-zinc-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
                  <Image 
                    src={imageSrc} 
                    alt="Analytics Dashboard" 
                    fill
                    className="object-cover object-top opacity-90 mix-blend-screen scale-100 group-hover:scale-[1.02] transition-transform duration-1000 ease-out" 
                  />
                </div>
              </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
