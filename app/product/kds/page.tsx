"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MonitorPlay, Clock, CheckSquare, Settings2, PlayCircle } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function KDSPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Dark Hero Section */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
            <span className="px-5 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 font-bold text-xs uppercase tracking-widest mb-8">
              Kitchen Display System
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[1.05]">
              Ditch the paper tickets.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-16 max-w-2xl leading-relaxed">
              Speed up service, eliminate lost orders, and perfectly synchronize your front and back of house with our color-coded, ruggedized KDS.
            </p>
            
            {/* The KDS Ticket UI Mockup */}
            <div className="w-full max-w-5xl rounded-[2rem] bg-[#18181b] border-2 border-[#27272a] shadow-2xl overflow-hidden flex flex-col mt-4">
               <div className="bg-[#1f1f22] border-b border-[#27272a] p-4 flex items-center justify-between">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <div className="text-zinc-500 font-bold text-sm tracking-wider">KITCHEN STATION 1</div>
               </div>
               <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Ticket 1: Normal (Green header) */}
                 <div className="bg-[#27272a] rounded-xl overflow-hidden flex flex-col">
                   <div className="bg-emerald-600 px-4 py-2 flex justify-between text-white font-bold text-sm">
                     <span>#4092 • TBL 12</span>
                     <span>04:12</span>
                   </div>
                   <div className="p-4 flex flex-col gap-3 font-semibold">
                     <div className="flex justify-between text-white"><span className="text-emerald-400 mr-2">1x</span> Classic Burger</div>
                     <div className="flex justify-between text-white"><span className="text-emerald-400 mr-2">2x</span> Sweet Potato Fries</div>
                     <div className="text-zinc-400 text-sm ml-6">- No onions</div>
                     <div className="text-zinc-400 text-sm ml-6">- Extra crispy</div>
                   </div>
                 </div>
                 {/* Ticket 2: Warning (Yellow header) */}
                 <div className="bg-[#27272a] rounded-xl overflow-hidden flex flex-col border border-yellow-500/50">
                   <div className="bg-yellow-600 px-4 py-2 flex justify-between text-white font-bold text-sm">
                     <span>#4088 • TBL 04</span>
                     <span>12:45</span>
                   </div>
                   <div className="p-4 flex flex-col gap-3 font-semibold">
                     <div className="flex justify-between text-white"><span className="text-yellow-400 mr-2">1x</span> Truffle Pasta</div>
                     <div className="text-zinc-400 text-sm ml-6">- Gluten free penne</div>
                     <div className="text-red-400 text-sm ml-6 font-bold">** ALLERGY: NUTS **</div>
                     <div className="flex justify-between text-white"><span className="text-yellow-400 mr-2">1x</span> Garlic Bread</div>
                   </div>
                 </div>
                 {/* Ticket 3: Overdue (Red header) */}
                 <div className="bg-[#27272a] rounded-xl overflow-hidden flex flex-col shadow-[0_0_20px_rgba(220,38,38,0.2)] border border-red-500/50">
                   <div className="bg-red-600 px-4 py-2 flex justify-between text-white font-bold text-sm animate-pulse">
                     <span>#4075 • DELIVERY</span>
                     <span>24:10</span>
                   </div>
                   <div className="p-4 flex flex-col gap-3 font-semibold">
                     <div className="flex justify-between text-white"><span className="text-red-400 mr-2">3x</span> Spicy Chicken Wings</div>
                     <div className="flex justify-between text-white"><span className="text-red-400 mr-2">1x</span> Large Diet Cola</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Feature List */}
        <section className="py-24 px-6 border-t border-[#27272a] bg-[#0c0c0e]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 gap-12">
              <div className="flex gap-6">
                <Clock className="w-10 h-10 text-red-500 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Color-coded Timers</h3>
                  <p className="text-zinc-400 leading-relaxed font-medium">Tickets automatically change from green, to yellow, to red based on your custom prep-time thresholds. Cooks know instantly what needs attention.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Settings2 className="w-10 h-10 text-red-500 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Advanced Routing</h3>
                  <p className="text-zinc-400 leading-relaxed font-medium">Send drinks straight to the bar screen and steaks to the grill. KDS ensures items only appear where they are actually prepped.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <CheckSquare className="w-10 h-10 text-red-500 shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bump & Fulfill</h3>
                  <p className="text-zinc-400 leading-relaxed font-medium">Double tap a screen or hit a physical bump bar to mark an item or entire ticket as complete. Automatically notifies the front of house or delivery driver.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square bg-[#18181b] rounded-[3rem] border border-[#27272a] flex items-center justify-center p-12">
               <Image src="/selfx.kiosk.png" alt="Hardware View" fill className="object-contain p-12 mix-blend-lighten opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent" />
               <div className="absolute bottom-12 text-center w-full z-10 px-6">
                 <h4 className="text-xl font-bold text-white mb-2">Rugged Hardware</h4>
                 <p className="text-zinc-500 text-sm">Built to withstand heat, steam, and grease.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Horizontal Scroller + Sticky Sidebar FAQ */}
        <section className="py-24 px-6 border-t border-[#27272a]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Left/Top: Horizontal Scroller for metrics */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-black mb-12 text-white">Precision Kitchen Metrics</h2>
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
                {[
                  { value: "-30%", label: "Ticket Times", desc: "Decrease average ticket completion time." },
                  { value: "0", label: "Lost Tickets", desc: "Digital tickets can never be lost, dropped, or stained." },
                  { value: "+40%", label: "Throughput", desc: "Handle more orders during peak rush hours." },
                  { value: "100%", label: "Visibility", desc: "FOH knows exactly when food is ready." }
                ].map((metric, i) => (
                  <div key={i} className="min-w-[280px] w-[280px] bg-[#18181b] border border-[#27272a] rounded-[2rem] p-8 snap-center flex flex-col justify-between">
                    <div className="text-5xl font-black text-red-500 mb-4">{metric.value}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{metric.label}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{metric.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white border-t border-zinc-200">
          <UniversalFaq 
            title="System FAQs"
            items={[
              { q: "Do I need specific hardware?", a: "While you can run it on standard tablets, we highly recommend our commercial-grade bump bars and high-nit displays for durability." },
              { q: "Can it route by category?", a: "Yes, the system automatically routes items based on their assigned category (e.g., drinks to the bar KDS, hot food to the grill)." },
              { q: "What if the internet drops?", a: "Our KDS operates on a local area network (LAN), meaning it will continue to communicate with the POS and print tickets even if external internet is lost." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
