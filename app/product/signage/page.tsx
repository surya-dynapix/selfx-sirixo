"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MonitorPlay, LayoutTemplate, Palette, ArrowRight, Image as ImageIcon, Video, Clock, LayoutGrid } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function DigitalSignagePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Immersive Wide Hero Section */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <span className="px-5 py-2 rounded-full border border-red-200 bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
              Digital Signage Engine
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-zinc-900 mb-8 leading-[1.05]">
              Make your menu <br/> impossible to ignore.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-3xl leading-relaxed mb-16">
              Vibrant, 4K digital menu boards that update in real-time. Schedule dayparts, run promotional videos, and change prices across all your screens from a single dashboard.
            </p>

            {/* Immersive Screen Mockup - Wide Format */}
            <div className="w-full aspect-[21/9] bg-zinc-950 rounded-[2rem] shadow-2xl border-8 border-zinc-900 overflow-hidden relative">
              <Image 
                src="/Ultra-realistic_Hollywood-level_cinematic_architectural_photography_202606091300.jpeg" 
                alt="Digital Menu Board" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-zinc-950/20 to-transparent p-12 flex flex-col justify-center">
                <div className="max-w-xl text-left">
                   <h2 className="text-5xl font-black text-white mb-4 drop-shadow-lg">Premium Angus Burger</h2>
                   <p className="text-2xl text-red-400 font-bold mb-6 drop-shadow-md">Combo starting at $12.99</p>
                   <div className="inline-block px-4 py-2 bg-white text-zinc-900 font-bold text-sm uppercase tracking-wider rounded">Limited Time Offer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              
              {/* Dayparting (Large) */}
              <div className="md:col-span-2 lg:col-span-2 bg-zinc-50 p-10 rounded-[2rem] border border-zinc-200 flex flex-col justify-between">
                <div>
                  <Clock className="w-12 h-12 text-red-600 mb-6" />
                  <h3 className="text-3xl font-black text-zinc-900 mb-4">Smart Dayparting</h3>
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                    Automatically switch your screens from the morning breakfast menu to the lunch combo menu at exactly 11:00 AM. Set it once and never think about it again.
                  </p>
                </div>
              </div>

              {/* Layout Editor (Medium) */}
              <div className="md:col-span-1 lg:col-span-2 bg-zinc-950 text-white p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <LayoutGrid className="w-12 h-12 text-red-500 mb-6" />
                  <h3 className="text-3xl font-black mb-4">Drag & Drop Editor</h3>
                  <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                    No graphic designer required. Use our intuitive canvas to arrange item grids, videos, and promotional banners in seconds.
                  </p>
                </div>
              </div>

              {/* Multi-Media (Small) */}
              <div className="md:col-span-1 lg:col-span-2 bg-zinc-50 p-10 rounded-[2rem] border border-zinc-200">
                <div className="flex gap-4 mb-6">
                  <Video className="w-8 h-8 text-indigo-600" />
                  <ImageIcon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-4">Video & Images</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  Support for stunning 4K 60fps video loops and high-res imagery to make your food look irresistible.
                </p>
              </div>

              {/* Centralized Sync (Small) */}
              <div className="md:col-span-2 lg:col-span-2 bg-red-600 text-white p-10 rounded-[2rem] shadow-xl shadow-red-600/20">
                <h3 className="text-2xl font-black mb-4">One Click. Every Screen.</h3>
                <p className="text-white/90 font-medium leading-relaxed text-lg">
                  Price changes in the POS automatically push to your digital signage. Update 100 screens across 10 locations with a single click.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <button className="px-10 py-5 bg-zinc-900 text-white rounded-full font-black text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 mx-auto shadow-xl">
            Upgrade Your Menu Boards <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white border-t border-zinc-200">
          <UniversalFaq 
            title="Any Questions?"
            items={[
              { q: "What screens do you support?", a: "We support any commercial display or smart TV that can run our Android app, Amazon Fire stick, or a dedicated Windows/Linux media player." },
              { q: "Do I need an internet connection?", a: "Yes, to receive updates from the cloud dashboard. However, if the internet goes down, the screens will continue to loop the last downloaded content seamlessly." },
              { q: "Can I show live order statuses?", a: "Absolutely. Our signage engine integrates with the KDS to show a 'Now Serving' board next to your menu content, eliminating the need to shout out names or order numbers." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
