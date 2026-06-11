"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="relative w-full min-h-[450px] md:min-h-[550px] py-20 md:py-28 bg-gradient-to-br from-red-500 via-red-600 to-red-900 flex flex-col items-center justify-center text-center text-white overflow-hidden z-10">
      
      {/* Centered Brand Logo */}
      <div className="mb-8 md:mb-12 relative z-10">
        <span className="text-2xl font-black tracking-tight text-white select-none">
    
        </span>
      </div>

      {/* Huge centered all-caps typography */}
      <div className="max-w-4xl px-6 mb-12 relative z-10 flex flex-col items-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white flex flex-col select-none items-center">
          <span>ORDER.</span>
          <span>SERVE.</span>
          <span>DELIGHT.</span>
          <span className="text-zinc-950">REPEAT.</span>
        </h2>
      </div>

      {/* Centered Pill Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 px-6 relative z-10 justify-center w-full max-w-md sm:max-w-none">
        <a
          href="/book-demo"
          className="inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-full text-base font-bold bg-white text-zinc-950 hover:bg-zinc-100 hover:scale-102 active:scale-98 transition-all shadow-md"
        >
          Book a Demo
          <ArrowRight className="w-4 h-4" />
        </a>
        
        <a
          href="#solutions"
          className="inline-flex items-center justify-center gap-1.5 px-8 py-4 rounded-full text-base font-bold bg-transparent border border-white text-white hover:bg-white/10 hover:scale-102 active:scale-98 transition-all"
        >
          Explore Solutions
        </a>
      </div>

      {/* Ambient background blur circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-3xl pointer-events-none -z-0" />
      
    </section>
  );
}
