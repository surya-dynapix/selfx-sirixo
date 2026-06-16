"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPromo() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-orange-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">


        {/* Text Content */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6"
        >
          Want to know about the pricing?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          SelfX gives you everything you need—and nothing you don't—to track better, manage better, and scale faster.
          No noise. No pressure. Just a solution that works for you.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold bg-[#E61E38] text-white hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/25 hover:scale-105 active:scale-95"
          >
            Know more
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
