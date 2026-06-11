"use client";

import { motion } from "framer-motion";
import { Smartphone, CreditCard, UserCheck, ScanLine, Printer, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function HardwareWorkflow() {
  const steps = [
    { icon: <Smartphone className="w-8 h-8" />, text: "Customer places order via QR/Kiosk" },
    { icon: <CreditCard className="w-8 h-8" />, text: "Payment done via UPI or Card" },
    { icon: <UserCheck className="w-8 h-8" />, text: "Customer shows QR to cashier" },
    { icon: <ScanLine className="w-8 h-8" />, text: "QR scanned & order validated" },
    { icon: <Printer className="w-8 h-8" />, text: "Receipt printed instantly" },
    { icon: <UtensilsCrossed className="w-8 h-8" />, text: "Order sent to kitchen & served" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full max-w-2xl bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter"
          >
            ORDER WORKFLOW
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:gap-2 relative">
          {/* Animated Background Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[5%] right-[5%] h-0.5 bg-slate-100 -z-10">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-1/3 h-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
            />
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center w-36 md:w-44 group relative"
              >
                <div className="w-20 h-20 rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] group-hover:border-indigo-100 transition-all duration-300 mb-5 relative z-10">
                  {step.icon}
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-slate-50">
                  <p className="text-xs md:text-sm text-slate-600 font-bold leading-tight group-hover:text-indigo-900 transition-colors">
                    {step.text}
                  </p>
                </div>
              </motion.div>
              
              {/* Arrow separator (Mobile / Tablet) */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                  className="lg:hidden text-indigo-300 mx-2 flex justify-center w-full"
                >
                  <ArrowRight className="w-6 h-6 rotate-90 sm:rotate-0 my-4 sm:my-0" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
