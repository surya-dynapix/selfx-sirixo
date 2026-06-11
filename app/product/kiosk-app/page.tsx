"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pointer, Languages, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function KioskAppPage() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  const flowTabs = [
    {
      title: "Menu Browsing",
      headline: "Visual-first Navigation",
      desc: "High-resolution imagery leads the browsing experience. Categories are easily accessible via a sticky sidebar, minimizing scroll fatigue and accelerating the order process.",
      image: "/kiosk-hero.png"
    },
    {
      title: "Modifier Selection",
      headline: "Guided Customization",
      desc: "Clear, step-by-step modifier options ensure guests build their meal exactly how they want it without overwhelming them with choices.",
      image: "/ordering.png"
    },
    {
      title: "Upsell Prompt",
      headline: "Intelligent Recommendations",
      desc: "AI-driven upselling suggests perfect pairings and add-ons right before checkout, proven to increase average ticket sizes by up to 30%.",
      image: "/selfx-kiosk.png"
    },
    {
      title: "Checkout & Pay",
      headline: "Frictionless Checkout",
      desc: "Multiple payment methods including contactless tap, Apple Pay, and Google Pay ensure the guest finishes their transaction in seconds.",
      image: "/pos terminal.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Massive Image Hero */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden border-b-8 border-red-600">
          <Image 
            src="/Ultra-realistic_cinematic_hero-banner_photography_of_202606081358.jpeg" 
            alt="Delicious Food UI" 
            fill 
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-5xl px-6">
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
              Feast <br className="hidden md:block" /> Your Eyes.
            </h1>
            <p className="mt-8 text-xl md:text-2xl font-bold text-white/90 drop-shadow-lg max-w-2xl mx-auto">
              Self-Ordering Kiosk software driven by stunning high-resolution photography and smart AI upselling.
            </p>
          </div>
        </section>

        {/* Feature Grid - Dark Mode Typography Heavy */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            
            <div className="flex flex-col">
              <TrendingUp className="w-16 h-16 text-red-500 mb-8" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                "Would you like fries with that?" <br/>
                <span className="text-zinc-500">Automated.</span>
              </h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                Our smart upsell engine automatically recommends pairings, extra toppings, and combo upgrades at the exact moment of decision, increasing average ticket sizes by up to 30%.
              </p>
            </div>

            <div className="flex flex-col">
              <Languages className="w-16 h-16 text-red-500 mb-8" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                Speak their language.
              </h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                Serve a diverse customer base with native multi-language support. Customers can switch between English, Spanish, French, and more with a single tap.
              </p>
            </div>

            <div className="flex flex-col">
              <Pointer className="w-16 h-16 text-red-500 mb-8" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                Zero friction. <br/>
                <span className="text-zinc-500">Infinite speed.</span>
              </h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                A UI so intuitive, first-time users can navigate complex modifier groups and check out in under 45 seconds. Designed specifically for fast casual dining rushes.
              </p>
            </div>

            <div className="flex flex-col">
              <Sparkles className="w-16 h-16 text-red-500 mb-8" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                Your brand, <br/>
                <span className="text-zinc-500">front & center.</span>
              </h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                Completely white-labeled. Upload your custom fonts, precise hex colors, and looping video screensavers for idle mode.
              </p>
            </div>

          </div>
        </section>

        {/* Video / Visual Break */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden relative aspect-video border border-zinc-800 shadow-2xl">
            <video autoPlay loop muted src="/Futuristic_kiosk_product_reveal_…_202606041416 (1).mp4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-red-600 text-white font-black uppercase tracking-widest text-sm px-6 py-3 rounded-full">
                See it in action
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Interactive Tabs UI */}
        <section className="py-24 px-6 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">Focus on the flow.</h2>
            
            {/* Custom Interactive Tabs */}
            <div className="flex flex-col lg:flex-row gap-8 bg-zinc-900 p-4 md:p-8 rounded-[2.5rem] border border-zinc-800">
              <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible w-full lg:w-1/3 pb-4 lg:pb-0 hide-scrollbar">
                {flowTabs.map((tab, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveFlowIndex(i)}
                    className={`p-6 rounded-2xl whitespace-nowrap cursor-pointer transition-colors ${i === activeFlowIndex ? "bg-zinc-800 border border-zinc-700" : "hover:bg-zinc-800/50"}`}
                  >
                    <h4 className={`text-lg font-bold ${i === activeFlowIndex ? "text-white" : "text-zinc-400"}`}>{tab.title}</h4>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-2/3 bg-[#0a0a0a] rounded-3xl border border-zinc-800 min-h-[400px] flex items-center justify-center p-0 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 w-full h-full">
                   <Image 
                     key={activeFlowIndex}
                     src={flowTabs[activeFlowIndex].image} 
                     alt={flowTabs[activeFlowIndex].headline} 
                     fill 
                     className="object-cover opacity-30 transition-opacity duration-500 ease-in-out group-hover:opacity-40" 
                   />
                 </div>
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#0a0a0a]/80 to-[#0a0a0a] pointer-events-none" />
                 <div className="relative z-10 p-12">
                   <h3 className="text-3xl font-black mb-4 text-white">{flowTabs[activeFlowIndex].headline}</h3>
                   <p className="text-zinc-300 text-lg max-w-md mx-auto leading-relaxed">{flowTabs[activeFlowIndex].desc}</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white">
          <UniversalFaq 
            title="Kiosk Software FAQs"
            items={[
              { q: "Can I use my own hardware?", a: "SelfX software is optimized for our proprietary kiosks to ensure zero downtime, but we do support select certified Windows and Android hardware models." },
              { q: "How do menu updates work?", a: "Updates made in the central POS cloud dashboard are pushed to all kiosk terminals across all locations instantly. No manual syncing required." },
              { q: "Does the kiosk accept cash?", a: "Our standard models are cashless (card and mobile wallet only) to increase throughput, but we offer a cash-handling module as an add-on." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
