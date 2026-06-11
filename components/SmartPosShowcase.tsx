"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CreditCard, Monitor, Printer, QrCode, Smartphone, Wifi, ArrowRight } from "lucide-react";

export default function SmartPosShowcase() {
  const features = [
    {
      id: "display",
      title: "10 INCH TOUCH DISPLAY",
      description: "10.1\" Capacitive touch screen for smooth operation",
      position: { top: "55%", left: "5%" },
      lineClass: "w-16 md:w-32 border-t border-indigo-400 absolute top-1/2 -right-16 md:-right-32 hidden md:block",
      align: "left",
    },
    {
      id: "scanner",
      title: "QR CODE SCANNER",
      description: "Built-in 2D QR scanner for fast order validation",
      position: { top: "20%", left: "15%" },
      lineClass: "w-12 md:w-24 border-t border-indigo-400 absolute top-1/2 -right-12 md:-right-24 hidden md:block",
      align: "left",
    },
    {
      id: "printer",
      title: "BUILT-IN PRINTER",
      description: "2\" Thermal Receipt Printer for fast and reliable printing",
      position: { top: "30%", right: "10%" },
      lineClass: "w-16 md:w-32 border-t border-indigo-400 absolute top-1/2 -left-16 md:-left-32 hidden md:block",
      align: "right",
    },
  ];

  const sideBenefits = [
    { icon: <Smartphone className="w-5 h-5 text-indigo-500" />, title: "ALL IN ONE DESIGN", desc: "Compact, sleek and space saving" },
    { icon: <QrCode className="w-5 h-5 text-indigo-500" />, title: "FAST VALIDATION", desc: "Scan QR codes and validate orders instantly" },
    { icon: <Printer className="w-5 h-5 text-indigo-500" />, title: "INSTANT RECEIPTS", desc: "Quick receipt printing for every transaction" },
    { icon: <Wifi className="w-5 h-5 text-indigo-500" />, title: "CONNECTIVITY", desc: "WIFI + LAN connectivity for uninterrupted operations" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white pointer-events-none" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter"
          >
            SMART COUNTER TERMINAL
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Compact all-in-one Android based terminal for quick order validation, QR scanning and receipt printing at cashier counters.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          
          {/* Main Showcase Area */}
          <div className="w-full lg:w-2/3 relative min-h-[500px] flex items-center justify-center">
            
            {/* Center Glowing Backdrop */}
            <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full" />

            {/* Center Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
              className="relative z-10 w-full max-w-2xl"
            >
              <Image 
                src="/hardware/smart_pos_terminal.png" 
                alt="Smart POS Terminal" 
                width={1000} 
                height={1000} 
                className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
              />
            </motion.div>

            {/* Pointers / Annotations */}
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: feature.align === "left" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.2 }}
                className={`absolute z-20 ${feature.align === "left" ? "text-right" : "text-left"}`}
                style={{ top: feature.position.top, left: feature.position.left, right: feature.position.right }}
              >
                <div className="relative group cursor-default">
                  {/* Glassmorphic Box */}
                  <div className="bg-white/70 backdrop-blur-md border border-white/50 shadow-xl shadow-indigo-900/5 p-4 rounded-2xl relative z-10 hover:bg-white/90 transition-all">
                    <h3 className="text-indigo-600 font-extrabold tracking-wider text-xs mb-1 uppercase">{feature.title}</h3>
                    <p className="text-slate-600 text-xs max-w-[140px] leading-relaxed font-medium">{feature.description}</p>
                  </div>
                  
                  {/* Decorative Line & Pulsing Dot */}
                  <div className={feature.lineClass}>
                    <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] ${feature.align === 'left' ? '-right-1.5' : '-left-1.5'}`}>
                      <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side Benefits List */}
          <div className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {sideBenefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="group flex flex-col items-start p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-indigo-100 hover:bg-white transition-all duration-300"
              >
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 group-hover:scale-110 group-hover:shadow-md transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-slate-900 font-bold mb-2 text-sm tracking-wide uppercase">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
