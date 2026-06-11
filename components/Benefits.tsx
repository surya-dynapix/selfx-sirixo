"use client";

import { Check, ChevronRight, UtensilsCrossed, Store, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const segments = [
  {
    title: "Restaurants",
    icon: UtensilsCrossed,
    headerBg: "bg-emerald-50/50",
    blob1: "bg-emerald-300 w-32 h-32",
    blob2: "bg-teal-300 w-40 h-40",
    description: "SelfX empowers service businesses with cutting-edge technology to enhance efficiency, reduce wait times, and improve customer satisfaction.",
    options: ["Self-Order Kiosk", "Billing Machine", "POS System"],
  },
  {
    title: "Retail Spaces",
    icon: Store,
    headerBg: "bg-amber-50/50",
    blob1: "bg-amber-300 w-36 h-36",
    blob2: "bg-orange-300 w-28 h-28",
    description: "SelfX solutions streamline operations and enhance customer engagement for retail and eCommerce businesses.",
    options: ["POS System", "Online Ordering", "Digital Signage"],
  },
  {
    title: "Outlets",
    icon: ShoppingBag,
    headerBg: "bg-red-50/50",
    blob1: "bg-red-300 w-32 h-32",
    blob2: "bg-cyan-300 w-36 h-36",
    description: "SelfX solutions streamline food and beverage operations, enhancing efficiency and customer satisfaction.",
    options: ["POS System", "Billing Machine", "Online Ordering"],
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      
      {/* Background ambient glow */}
     

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6"
          >
            Supercharge Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">SelfX</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-xl text-zinc-600 font-medium"
          >
            Faster Service, Smoother Operations with SelfX!
          </motion.p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="relative group h-full"
              >
                {/* Animated Glowing Border behind the card */}
              
                
                {/* Card Main Body */}
                <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-200/60 shadow-lg h-full transition-transform duration-500 group-hover:-translate-y-2">
                  
                  {/* Card Top Section (Live Animated Glassmorphism) */}
                  <div className={`relative p-8 pb-6 ${segment.headerBg} overflow-hidden min-h-[190px] flex flex-col justify-end isolate`}>
                    
                    {/* Floating Animated Blobs */}
                    <motion.div
                      animate={{
                        x: [0, 40, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.2, 0.8, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className={`absolute -top-10 -right-10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 ${segment.blob1}`}
                    />
                    <motion.div
                      animate={{
                        x: [0, -30, 20, 0],
                        y: [0, 40, -20, 0],
                        scale: [1, 0.9, 1.3, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className={`absolute -bottom-10 -left-10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 ${segment.blob2}`}
                    />

                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
                    
                    {/* Icon */}
                    <div className="relative z-10 mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md shadow-md border border-white flex items-center justify-center text-zinc-800">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="relative z-10 text-2xl font-bold text-zinc-900 tracking-tight drop-shadow-sm">
                      {segment.title}
                    </h3>
                  </div>

                  {/* Card Bottom Section */}
                  <div className="p-8 pt-6 flex flex-col flex-grow bg-white relative z-20">
                    <p className="text-zinc-600 text-sm leading-relaxed mb-8 min-h-[60px]">
                      {segment.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {segment.options.map((option, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-full bg-red-50 p-1">
                            <Check className="w-3.5 h-3.5 text-red-600 stroke-[3]" />
                          </div>
                          <span className="text-sm font-semibold text-zinc-700">{option}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-4 border-t border-zinc-100">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors group/link"
                      >
                        Get started 
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
