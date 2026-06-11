"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QrCode, CreditCard, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function DigitalDiningPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Lifestyle Hero Section */}
        <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-start overflow-hidden">
          <Image 
            src="/Ultra-realistic_cinematic_hero-banner_photography_of_202606081513.jpeg" 
            alt="Digital Dining Lifestyle" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/40 to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md mb-6 inline-block shadow-sm">
                Hospitality First
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05] mb-8 drop-shadow-md">
                The future of dining in.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-12 drop-shadow-md">
                Scan, order, and pay at the table. Turn tables faster while giving your guests total control over their dining experience.
              </p>
              <button className="px-10 py-5 bg-white text-zinc-950 rounded-full font-black text-lg hover:bg-zinc-100 transition-all shadow-xl flex items-center gap-2">
                Discover QR Ordering <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* The 3-Step Flow */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight">As easy as 1, 2, 3.</h2>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-zinc-200 z-0" />

              {[
                { icon: QrCode, title: "1. Scan & Browse", desc: "Guests scan the dynamic QR code on their table. No app download required. The menu opens instantly in their browser." },
                { icon: Users, title: "2. Order Together", desc: "Multiple guests at the same table can add items to a shared cart simultaneously from their own devices." },
                { icon: CreditCard, title: "3. Pay & Split", desc: "When they're ready to leave, guests can split the bill evenly or by item, and pay via Apple Pay, Google Pay, or Card." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 px-4">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-red-50 text-red-600 flex items-center justify-center mb-8 shadow-sm">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-zinc-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-200">
               <Image src="/Ultra-realistic_cinematic_hero-banner_photography_of_202606091256.jpeg" alt="Dining Experience" fill className="object-cover" />
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.05] mb-8">
                More tips.<br/>Less waiting.
              </h2>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed mb-10">
                Servers no longer need to run back and forth with menus, order pads, and card machines. They can focus purely on food delivery and hospitality.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12 border-t border-b border-zinc-200 py-10">
                <div>
                  <div className="text-5xl font-black text-red-600 mb-2">+15%</div>
                  <div className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Average Tip</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-red-600 mb-2">-20m</div>
                  <div className="text-sm font-bold text-zinc-900 uppercase tracking-widest">Wait Time</div>
                </div>
              </div>
              
              <a href="#" className="font-bold text-red-600 hover:text-red-700 text-lg flex items-center gap-2 transition-colors">
                Read the case study <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white border-t border-zinc-200">
          <UniversalFaq 
            title="Digital Dining FAQs"
            items={[
              { q: "Do guests need to download an app?", a: "No, the experience is entirely web-based. They scan the QR code and the menu opens instantly in Safari or Chrome." },
              { q: "How does table tracking work?", a: "Each QR code is uniquely tied to a specific table number or seat. When an order is placed, the POS knows exactly where to send the food." },
              { q: "Can guests keep a running tab?", a: "Yes, guests can optionally pre-authorize a card to open a tab, allowing them to order rounds of drinks without entering payment info each time." },
              { q: "Is it integrated with my loyalty program?", a: "Yes! Guests can enter their phone number to automatically pull up their points and redeem rewards directly from their phone." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
