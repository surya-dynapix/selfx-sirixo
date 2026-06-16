"use client";

import { motion } from "framer-motion";
import { 
  Eye, ShoppingCart, Cpu, ChefHat, 
  Package, LineChart, TrendingUp 
} from "lucide-react";

interface ProductEcosystemProps {
  currentProduct: string;
}

const steps = [
  { id: 'discover', label: 'Discovery', subtitle: 'Customer Discovers', icon: Eye },
  { id: 'order', label: 'Ordering', subtitle: 'Places Order', icon: ShoppingCart },
  { id: 'process', label: 'Processing', subtitle: 'Order Processing', icon: Cpu },
  { id: 'execute', label: 'Execution', subtitle: 'Kitchen Execution', icon: ChefHat },
  { id: 'fulfill', label: 'Fulfillment', subtitle: 'Fulfillment', icon: Package },
  { id: 'analyze', label: 'Analytics', subtitle: 'Reporting', icon: LineChart },
  { id: 'grow', label: 'Growth', subtitle: 'Business Growth', icon: TrendingUp },
];

export default function ProductEcosystem({ currentProduct }: ProductEcosystemProps) {
  
  const getActiveStepId = (product: string) => {
    const p = product.toLowerCase();
    if (p.includes('signage')) return 'discover';
    if (p.includes('pos')) return 'process';
    if (p.includes('kitchen') || p.includes('kds') || p.includes('display')) return 'execute';
    if (p.includes('kiosk') || p.includes('whatsapp') || p.includes('online') || p.includes('dining') || p.includes('mobile') || p.includes('vending')) return 'order';
    return 'order'; // fallback
  };

  const activeStepId = getActiveStepId(currentProduct);

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] border-y border-zinc-200 overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4"
          >
            The SELFX Digital Commerce Operating System
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-zinc-950 tracking-tight leading-[1.1]"
          >
            One Customer Journey. One Unified Platform. <span className="text-zinc-400">Infinite Possibilities.</span>
          </motion.h2>
        </div>

        {/* Ecosystem Pipeline */}
        <div className="relative w-full max-w-7xl mx-auto py-8">
          
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-zinc-200 -translate-y-1/2 z-0" />
          
          {/* Vertical Connecting Line (Mobile) */}
          <div className="block lg:hidden absolute top-0 left-1/2 w-[2px] h-full bg-zinc-200 -translate-x-1/2 z-0" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 relative z-10">
            {steps.map((step, index) => {
              const isActive = step.id === activeStepId;
              
              return (
                <motion.div 
                  key={step.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center group w-full lg:w-auto"
                >
                  {isActive ? (
                    /* Active Node */
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-[2rem] bg-zinc-950 text-white flex flex-col items-center justify-center p-6 shadow-2xl relative z-20">
                      {/* Optional subtle glow to imply 'intelligence point' without being overly flashy */}
                      <div className="absolute inset-0 bg-black rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.15)] -z-10" />
                      
                      <span className="text-zinc-500 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 text-center">
                        {step.subtitle}
                      </span>
                      
                      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
                        <step.icon size={24} strokeWidth={2} />
                      </div>
                      
                      <span className="text-base md:text-lg font-black text-center leading-tight tracking-tight">
                        {currentProduct}
                      </span>
                    </div>
                  ) : (
                    /* Inactive Node */
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-[1.5rem] bg-white border-2 border-zinc-200 text-zinc-400 flex flex-col items-center justify-center p-4 shadow-sm z-10 transition-colors duration-300">
                      <step.icon size={20} className="mb-2" strokeWidth={1.5} />
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-center">
                        {step.label}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
