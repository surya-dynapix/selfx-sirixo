"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { useSiteContent } from "@/context/SiteContentContext";

export default function FeatureHighlight() {
  const content = useSiteContent("featurehighlight", {
    title: "Built for Real Hospitality Workflows",
    subtitle: "Streamlining operations from front of house to back of house with seamless integrations and real-time syncing.",
    buttonText: "Explore Software Capabilities",
    feat1Title: "Self-ordering & Kiosk Sync",
    feat1Desc: "Instantly sync menu items, stock levels, and price changes across your entire network of POS terminals and self-service kiosks.",
    feat1Image: "/pos cloud.png",
    feat2Title: "Payment Integration: Stripe, Square, etc.",
    feat2Desc: "Accept all major credit cards, Apple Pay, and Google Pay with zero friction. Our seamless integrations ensure secure, lightning-fast transactions.",
    feat2Image: "/A_cinematic_futuristic_fintech_ecosystem_202606111305.jpeg",
    feat3Title: "Kitchen Display (KDS) & Routing",
    feat3Desc: "Automatically route orders to the correct prep stations. Keep your back-of-house perfectly synchronized with front-of-house operations.",
    feat3Image: "/selfx kitchen.png",
    feat4Title: "Inventory Management",
    feat4Desc: "Track ingredient levels in real-time. Automatically generate purchase orders when stock runs low and minimize food waste.",
    feat4Image: "/software.png",
    feat5Title: "In-depth Analytics & Reports",
    feat5Desc: "Make data-driven decisions with real-time dashboards. Track top-selling items, peak hours, and staff performance metrics instantly.",
    feat5Image: "/Ultra-realistic_premium_product_photography_of_202606091839.jpeg"
  });

  const workflows = [
    { title: content.feat1Title, desc: content.feat1Desc, image: content.feat1Image },
    { title: content.feat2Title, desc: content.feat2Desc, image: content.feat2Image },
    { title: content.feat3Title, desc: content.feat3Desc, image: content.feat3Image },
    { title: content.feat4Title, desc: content.feat4Desc, image: content.feat4Image },
    { title: content.feat5Title, desc: content.feat5Desc, image: content.feat5Image },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-zinc-500 font-medium">
            {content.subtitle}
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
                  {content.buttonText} <ChevronRight className="w-4 h-4" />
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
