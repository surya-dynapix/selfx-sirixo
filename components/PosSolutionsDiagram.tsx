"use client";

import { motion } from "framer-motion";
import { Cloud, Smartphone, Monitor, Tablet, TerminalSquare, Laptop } from "lucide-react";

export default function PosSolutionsDiagram() {
  const options = [
    { id: "01", name: "Android POS", icon: <TerminalSquare className="w-6 h-6" />, color: "bg-red-50 text-red-600 border-red-200" },
    { id: "02", name: "Mobile App", icon: <Smartphone className="w-6 h-6" />, color: "bg-orange-50 text-orange-600 border-orange-200" },
    { id: "03", name: "POS System", icon: <Monitor className="w-6 h-6" />, color: "bg-green-50 text-green-600 border-green-200" },
    { id: "04", name: "Handheld Terminal", icon: <Tablet className="w-6 h-6" />, color: "bg-purple-50 text-purple-600 border-purple-200" },
    { id: "05", name: "Self Order Terminal", icon: <TerminalSquare className="w-6 h-6" />, color: "bg-pink-50 text-pink-600 border-pink-200" },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter"
          >
            All in One POS Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 font-medium"
          >
            Power Every Order. Grow Every Day.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
          
          {/* Left Options */}
          <div className="w-full lg:w-1/3 space-y-4 relative z-10">
            {options.map((opt, idx) => (
              <motion.div 
                key={opt.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg border shadow-inner ${opt.color}`}>
                  {opt.id}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 tracking-tight">{opt.name}</h4>
                </div>
                {/* Connecting Animated Line (Desktop only) */}
                <div className="hidden lg:block absolute right-0 top-1/2 w-12 h-0.5 translate-x-full overflow-hidden">
                  <div className="w-full h-full bg-slate-200 absolute inset-0" />
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: idx * 0.2 }}
                    className="w-full h-full bg-indigo-500 absolute inset-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Cloud */}
          <div className="w-full lg:w-1/3 flex justify-center relative z-20 my-12 lg:my-0">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-indigo-500/30 blur-[60px] rounded-full transition-colors duration-500" />
              <div className="w-56 h-56 bg-white/90 backdrop-blur-md rounded-full shadow-[0_20px_50px_rgba(99,102,241,0.15)] border border-white flex flex-col items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                <Cloud className="w-20 h-20 text-indigo-600 mb-3 drop-shadow-md" />
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter">SELFX</h3>
                <p className="text-sm font-bold text-indigo-500 tracking-widest uppercase mt-1">Cloud Platform</p>
              </div>
            </motion.div>
          </div>

          {/* Right Platforms */}
          <div className="w-full lg:w-1/3 space-y-8 relative z-10">
            {[
              { title: "Command Center", subtitle: "Mobile App", icon: <Smartphone className="w-6 h-6" />, color: "bg-green-50 text-green-600 border-green-200", items: ["Real-time Sales Dashboard", "Track Orders Live", "Alerts & Notifications"] },
              { title: "Management Console", subtitle: "Web Portal", icon: <Laptop className="w-6 h-6" />, color: "bg-red-50 text-red-600 border-red-200", items: ["Advanced Reports", "Inventory Management", "Multi-Branch Config"] }
            ].map((platform, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_15px_40px_rgba(99,102,241,0.1)] hover:-translate-y-1 transition-all duration-300 relative group"
              >
                {/* Connecting Animated Line (Desktop only) */}
                <div className="hidden lg:block absolute left-0 top-1/2 w-12 h-0.5 -translate-x-full overflow-hidden">
                  <div className="w-full h-full bg-slate-200 absolute inset-0" />
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: idx * 0.3 }}
                    className="w-full h-full bg-indigo-500 absolute inset-0 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                  />
                </div>
                
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner ${platform.color}`}>
                    {platform.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 tracking-tight text-lg">{platform.title}</h4>
                    <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mt-0.5">{platform.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  {platform.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full shadow-sm ${idx === 0 ? 'bg-green-500' : 'bg-red-500'}`}></span> 
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
