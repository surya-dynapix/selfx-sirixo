"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSiteContent } from "@/context/SiteContentContext";

export default function HardwareShowcase() {
  const content = useSiteContent("hardwareshowcase", {
    title: "Hardware",
    subtitle: "The business tools that are built to scale. Reliable, fast, and beautifully designed for efficiency.",
    buttonText: "See all",
    item1Name: "15\" Tablet POS",
    item1Image: "/pos terminal.png",
    item2Name: "D53 Dual Screen POS",
    item2Image: "/selfx-kiosk.png",
    item3Name: "L2s Pro Mobile POS",
    item3Image: "/pos terminal.png"
  });

  const hardwareItems = [
    {
      id: "tablet-pos",
      name: content.item1Name,
      image: content.item1Image,
    },
    {
      id: "dual-screen",
      name: content.item2Name,
      image: content.item2Image,
    },
    {
      id: "mobile-pos",
      name: content.item3Name,
      image: content.item3Image,
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-zinc-400 font-medium max-w-2xl">
            {content.subtitle}
          </p>
          <Link href="/hardware" className="inline-flex items-center gap-2 mt-6 text-red-500 font-bold hover:text-red-400 transition-colors">
            {content.buttonText} <ArrowRight className="w-4 h-4" />
          </Link>
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
