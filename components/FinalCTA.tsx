"use client";

import { motion } from "framer-motion";

interface FinalCTAProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  secondaryButtonText?: string;
  showProductButtons?: boolean;
}

export default function FinalCTA({ 
  title, 
  subtitle, 
  buttonText = "Book a Demo", 
  secondaryButtonText,
  showProductButtons = false
}: FinalCTAProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-red-600">
      {/* Vibrant Red Background Gradient matching Image 1 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] to-[#B30000] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8 drop-shadow-sm">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {showProductButtons ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 rounded-full bg-white text-zinc-900 font-bold text-lg tracking-wide hover:bg-zinc-100 hover:scale-105 transition-all shadow-xl w-full sm:w-auto">
                Book Demo <span className="ml-2">→</span>
              </button>
              <button className="px-10 py-5 rounded-full bg-transparent text-white border-2 border-white/40 font-bold text-lg tracking-wide hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all w-full sm:w-auto">
                Request Pricing
              </button>
              <button className="px-10 py-5 rounded-full bg-transparent text-white border-2 border-white/40 font-bold text-lg tracking-wide hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all w-full sm:w-auto">
                Contact Sales
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-12 py-5 rounded-full bg-white text-zinc-900 font-bold text-lg tracking-wide hover:bg-zinc-100 hover:scale-105 transition-all shadow-xl w-full sm:w-auto">
                <span className="text-red-600 mr-1">{buttonText.split(' ')[0]}</span>
                {buttonText.split(' ').slice(1).join(' ')} <span className="ml-2">→</span>
              </button>
              {secondaryButtonText && (
                <button className="px-12 py-5 rounded-full bg-transparent text-white border-2 border-white/40 font-bold text-lg tracking-wide hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all w-full sm:w-auto">
                  {secondaryButtonText}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
