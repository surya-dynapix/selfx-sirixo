"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const hardwareItems = [
  {
    id: "tablet-pos",
    name: "15\" Tablet POS",
    image: "/pos terminal.png",
  },
  {
    id: "dual-screen",
    name: "D53 Dual Screen POS",
    image: "/selfx-kiosk.png",
  },
  {
    id: "mobile-pos",
    name: "L2s Pro Mobile POS",
    image: "/pos terminal.png",
  },
];

export default function HardwareShowcase() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Hardware
          </h2>
          <p className="text-lg text-zinc-400 font-medium max-w-2xl">
            The business tools that are built to scale. Reliable, fast, and beautifully designed for efficiency.
          </p>
          <a href="/hardware" className="inline-flex items-center gap-2 mt-6 text-red-500 font-bold hover:text-red-400 transition-colors">
            See all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hardwareItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[2rem] p-8 flex flex-col items-center justify-between group cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              <div className="relative w-full h-64 mb-8">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-zinc-900 font-bold text-xl tracking-tight text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
