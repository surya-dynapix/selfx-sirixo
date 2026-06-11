"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";

const workflows = [
  { 
    title: "Self-ordering & Kiosk Sync", 
    desc: "Instantly sync menu items, stock levels, and price changes across your entire network of POS terminals and self-service kiosks.",
    image: "/pos cloud.png"
  },
  { 
    title: "Payment Integration: Stripe, Square, etc.", 
    desc: "Accept all major credit cards, Apple Pay, and Google Pay with zero friction. Our seamless integrations ensure secure, lightning-fast transactions.",
    image: "/A_cinematic_futuristic_fintech_ecosystem_202606111305.jpeg"
  },
  { 
    title: "Kitchen Display (KDS) & Routing", 
    desc: "Automatically route orders to the correct prep stations. Keep your back-of-house perfectly synchronized with front-of-house operations.",
    image: "/selfx kitchen.png"
  },
  { 
    title: "Inventory Management", 
    desc: "Track ingredient levels in real-time. Automatically generate purchase orders when stock runs low and minimize food waste.",
    image: "/software.png"
  },
  { 
    title: "In-depth Analytics & Reports", 
    desc: "Make data-driven decisions with real-time dashboards. Track top-selling items, peak hours, and staff performance metrics instantly.",
    image: "/Ultra-realistic_premium_product_photography_of_202606091839.jpeg"
  },
];

export default function FeatureHighlight() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">
            Built for Real Hospitality Workflows
          </h2>
          <p className="text-lg text-zinc-500 font-medium">
            Streamlining operations from front of house to back of house with seamless integrations and real-time syncing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Feature List Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <ul className="flex flex-col gap-2">
                {workflows.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <li 
                      key={i} 
                      onClick={() => setActiveIndex(i)}
                      className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
                        isActive 
                          ? "bg-red-50/50 border border-red-100 shadow-sm" 
                          : "hover:bg-zinc-50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 transition-colors ${isActive ? "text-red-600" : "text-zinc-300"}`} />
                        <span className={`font-bold transition-colors ${isActive ? "text-red-600" : "text-zinc-600"}`}>
                          {item.title}
                        </span>
                      </div>
                      {isActive && <ChevronRight className="w-5 h-5 text-red-600" />}
                    </li>
                  );
                })}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-zinc-100 min-h-[140px] flex flex-col justify-between">
                <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-6 transition-opacity duration-300 ease-in-out" key={activeIndex}>
                  {workflows[activeIndex].desc}
                </p>
                <button className="text-red-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all self-start">
                  Explore Software Capabilities <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Software Dashboard Mockup */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-zinc-900 border-[8px] border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center">
              <Image 
                key={activeIndex}
                src={workflows[activeIndex].image} 
                alt={workflows[activeIndex].title} 
                fill 
                className="object-cover opacity-90 transition-opacity duration-500 ease-in-out"
              />
            </div>
            
        
            
          </div>

        </div>
      </div>
    </section>
  );
}
