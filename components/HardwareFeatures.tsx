"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  imageSrc?: string;
  benefits: string[];
}

interface HardwareFeaturesProps {
  features: Feature[];
}

export default function HardwareFeatures({ features }: HardwareFeaturesProps) {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-indigo-900/5 group hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 ${index === 0 && features.length % 2 !== 0 ? 'lg:col-span-2 lg:flex-row' : ''}`}
            >
              {/* Content Area */}
              <div className={`p-8 md:p-12 flex flex-col justify-center ${index === 0 && features.length % 2 !== 0 ? 'lg:w-1/2' : 'w-full'}`}>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">{feature.description}</p>
                <ul className="space-y-4 mt-auto">
                  {feature.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center text-slate-700 bg-slate-50 rounded-xl p-3 border border-slate-100 group-hover:bg-white transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-md font-semibold tracking-wide">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Area */}
              <div className={`relative bg-gradient-to-br from-indigo-50 to-slate-100 p-8 flex items-center justify-center overflow-hidden ${index === 0 && features.length % 2 !== 0 ? 'lg:w-1/2 min-h-[400px]' : 'w-full h-[300px] md:h-[400px]'}`}>
                <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors" />
                
                {feature.imageSrc ? (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={feature.imageSrc} 
                      alt={feature.title} 
                      fill
                      className="relative z-10 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                    />
                  </motion.div>
                ) : (
                  <div className="w-full h-full bg-white/50 backdrop-blur-sm rounded-2xl border border-white/50 flex items-center justify-center relative z-10 shadow-sm">
                     <span className="text-indigo-300 font-bold tracking-widest uppercase text-sm">Image Pending</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
