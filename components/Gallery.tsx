"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Our morning rush at the Boba station used to build long queues. Since installing the kiosks, order processing speed is up by 40%. Average order values grew by 22% in the first two months.",
    author: "Elena Chen",
    role: "Founder, Yume Boba Tea",
    image: "/gallery-boba.png",
    logo: "/boba-logo.png",
  },
  {
    quote: "SelfX's vertical kiosk hardware integrated perfectly into our dining space. Families can seat themselves, select items, and pay securely at their own pace. It reduced ticket errors to practically zero.",
    author: "Marcus Lindqvist",
    role: "Operations, Nordic Kitchen",
    image: "/gallery-dining.png",
    logo: "/nordic-logo.png",
  },
  {
    quote: "Switching to this POS system was the best decision for our franchise. The real-time cloud sync means I can update prices across all 15 locations from my laptop in seconds.",
    author: "Sarah Jenkins",
    role: "CEO, Burger Bistro",
    image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081403.jpeg",
    logo: "/bistro-logo.png",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">
              Insights from Others on their <span className="text-red-600">Growth Journey</span>
            </h2>
          </div>
          <button className="shrink-0 flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors">
            See All Success Stories <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-zinc-200 rounded-[2rem] overflow-hidden hover:shadow-xl transition-shadow flex flex-col group cursor-pointer">
              {/* Top Image */}
              <div className="relative w-full h-48 bg-zinc-100 overflow-hidden">
                <Image 
                  src={t.image} 
                  alt={t.author} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 shrink-0 overflow-hidden flex items-center justify-center font-bold text-zinc-400">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{t.author}</h4>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">{t.role}</p>
                    <div className="flex items-center gap-0.5 mt-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-zinc-600 font-medium leading-relaxed italic text-sm">
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
