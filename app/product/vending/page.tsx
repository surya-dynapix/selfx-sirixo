"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, Activity, ShieldCheck, Box, Zap } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function VendingPage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Technical Hero Section */}
        <section className="bg-zinc-900 text-white pt-32 pb-24 px-6 relative overflow-hidden">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            <Zap className="w-12 h-12 text-red-500 mb-6" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.05]">
              Unattended Retail. <br /> Unmatched Margins.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-3xl leading-relaxed mb-16">
              Smart vending machines and pickup lockers integrated directly with your POS. Operate 24/7 with zero staff, real-time telemetry, and secure contactless payments.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl border-t border-zinc-800 pt-12">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-white mb-2">24/7</span>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Uptime</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-white mb-2">0</span>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Labor Cost</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-white mb-2">RFID</span>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Tracking</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-black text-white mb-2">API</span>
                <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Native Sync</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Split Section */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight mb-6">Smart Lockers</h2>
              <p className="text-lg text-zinc-600 font-medium leading-relaxed mb-10">
                Customers order ahead on your app or at a kiosk. When the food is ready, the kitchen places it in a climate-controlled locker. The customer scans a QR code to securely retrieve their exact order.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-1">Secure Pickup</h4>
                    <p className="text-zinc-500 font-medium text-sm">Eliminates order theft and mix-ups.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-1">Climate Controlled</h4>
                    <p className="text-zinc-500 font-medium text-sm">Heated or refrigerated compartments keep food fresh.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/5] bg-zinc-100 rounded-[3rem] border-4 border-zinc-200 flex items-center justify-center p-12 overflow-hidden relative shadow-lg">
                <Image src="/selfx-kiosk.png" alt="Smart Vending Unit" fill className="object-contain p-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Telemetry Dashboard Feature */}
        <section className="py-24 px-6 bg-zinc-950 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <Activity className="w-16 h-16 text-red-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Live Telemetry Dashboard</h2>
            <p className="text-xl text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed mb-16">
              Monitor inventory levels, internal temperature sensors, and machine health across hundreds of unattended units from a single screen. Receive instant alerts if stock runs low or a door is left open.
            </p>
            
            <div className="aspect-video w-full max-w-5xl mx-auto bg-zinc-900 rounded-[2rem] border border-zinc-800 shadow-2xl relative overflow-hidden">
               <Image src="/pos-software.png" alt="Telemetry Software" fill className="object-cover opacity-80 mix-blend-screen" />
            </div>
          </div>
        </section>

        {/* Unique Section: Anatomy Hotspots */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-zinc-900">Anatomy of a Smart Locker</h2>
             <div className="relative max-w-4xl mx-auto">
               <div className="aspect-square md:aspect-[4/3] bg-zinc-200 rounded-[3rem] overflow-hidden relative shadow-inner border border-zinc-300">
                 <Image src="/selfx.kiosk.png" alt="Hardware diagram" fill className="object-contain p-12 mix-blend-multiply opacity-100" />
                 
                 {/* CSS Hotspots representation */}
                 <div className="absolute top-[20%] left-[30%] w-6 h-6 bg-red-600 rounded-full animate-pulse shadow-[0_0_0_8px_rgba(220,38,38,0.3)] cursor-pointer group">
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-zinc-950 text-white p-4 rounded-xl w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      <h4 className="font-bold text-sm mb-1">Interactive Touchscreen</h4>
                      <p className="text-xs text-zinc-400">High-contrast UI for QR code scanning and manual order entry.</p>
                    </div>
                 </div>
                 
                 <div className="absolute top-[50%] right-[30%] w-6 h-6 bg-red-600 rounded-full animate-pulse shadow-[0_0_0_8px_rgba(220,38,38,0.3)] cursor-pointer group">
                    <div className="absolute top-10 right-0 bg-zinc-950 text-white p-4 rounded-xl w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      <h4 className="font-bold text-sm mb-1">Thermal Insulation</h4>
                      <p className="text-xs text-zinc-400">Maintains target temperature for up to 4 hours post-prep.</p>
                    </div>
                 </div>

                 <div className="absolute bottom-[30%] left-[40%] w-6 h-6 bg-red-600 rounded-full animate-pulse shadow-[0_0_0_8px_rgba(220,38,38,0.3)] cursor-pointer group">
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-zinc-950 text-white p-4 rounded-xl w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      <h4 className="font-bold text-sm mb-1">Auto-Sanitization</h4>
                      <p className="text-xs text-zinc-400">UV-C light arrays activate between orders to kill 99.9% of bacteria.</p>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white">
          <UniversalFaq 
            title="Hardware FAQs"
            items={[
              { q: "How are the lockers powered?", a: "They require a standard 120V outlet and can connect via WiFi, hardwired Ethernet, or an optional cellular 5G module." },
              { q: "Can they be placed outdoors?", a: "Our standard models are indoor-only, but we offer a ruggedized IP65-rated model designed specifically for outdoor street-level deployments." },
              { q: "What happens if a door gets stuck?", a: "The telemetry system instantly alerts your management team and disables that specific cubby from receiving new orders until maintenance resets it." },
              { q: "How do couriers use it?", a: "DoorDash and UberEats drivers receive a unique PIN on their app which opens the specific locker containing their assigned delivery order." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
