"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ChevronRight, BarChart, CloudLightning, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function POSSoftwarePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Dark Hero Section */}
        <section className="bg-zinc-950 text-white pt-24 pb-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <span className="text-red-500 font-black tracking-widest uppercase text-xs mb-4">Core Operating System</span>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-6">
                POS Cloud Software
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 font-medium mb-10 max-w-lg leading-relaxed">
                The centralized brain of your entire operation. Manage menus, analyze real-time sales, and sync all locations from one lightning-fast dashboard.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold transition-all shadow-lg shadow-red-600/20">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-all backdrop-blur-sm">
                  View Pricing
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] w-full rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden relative">
                {/* Simulated Dashboard UI */}
                <Image src="/pos cloud.png" alt="POS Dashboard" fill className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid - Light Mode */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">Enterprise-grade reliability.</h2>
              <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto">Designed for high-volume quick service and full-service dining.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: CloudLightning, title: "100% Cloud Synced", desc: "Change a price on your laptop, and it updates across all POS terminals, kiosks, and online menus instantly." },
                { icon: ShieldCheck, title: "Offline Mode Ready", desc: "Keep taking orders and payments even if the internet goes down. Syncs automatically when reconnected." },
                { icon: BarChart, title: "Real-Time Analytics", desc: "Track labor costs, voided items, and peak hour sales data minute-by-minute from anywhere in the world." }
              ].map((feat, i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-zinc-50 border border-zinc-200 hover:border-red-200 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:border-red-200 group-hover:text-red-600 text-zinc-800 transition-colors">
                    <feat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{feat.title}</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Feature - Split Layout */}
        <section className="py-24 px-6 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 relative aspect-square md:aspect-[4/5] rounded-[2.5rem] bg-black overflow-hidden border border-zinc-800">
               <Image src="/selfx.kiosk.png" alt="Hardware sync" fill className="object-contain p-8 mix-blend-lighten opacity-80" />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">Frictionless hardware integration.</h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                The software doesn't just run on screens; it talks directly to your kitchen printers, KDS, barcode scanners, and payment terminals with zero latency.
              </p>
              <ul className="flex flex-col gap-4">
                {["Auto-routing tickets to specific prep stations", "Direct EMV payment terminal sync", "Scale and barcode scanner plug-and-play", "Automatic cash drawer management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-32 px-6 text-center bg-white">
          <h2 className="text-5xl font-black text-zinc-900 tracking-tight mb-8">Ready to upgrade your operations?</h2>
          <button className="px-10 py-5 bg-zinc-950 text-white rounded-full font-black text-lg hover:bg-zinc-800 transition-all flex items-center gap-2 mx-auto">
            Get a Custom Quote <ChevronRight className="w-5 h-5" />
          </button>
        </section>

      
        {/* Unique Section: Bento Grid */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">Complete System Control</h2>
              <p className="text-lg text-zinc-500 font-medium">Everything you need to run your venue, neatly organized.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-zinc-900 text-white p-10 flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full group-hover:bg-blue-500/40 transition-colors" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4">Real-time Sync</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed max-w-sm">Every order, payment, and inventory change is instantly synced across all devices globally via our high-speed cloud infrastructure.</p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                  <CloudLightning className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              
              <div className="md:col-span-2 rounded-[2rem] bg-blue-600 text-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Automated Reports</h3>
                  <p className="text-blue-100 text-sm">Generate end-of-day summaries automatically without manual tallying.</p>
                </div>
                <BarChart className="w-8 h-8 text-white opacity-80" />
              </div>
              
              <div className="rounded-[2rem] bg-white border border-zinc-200 p-8 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Role Permissions</h3>
                  <p className="text-zinc-500 text-sm">Granular access control.</p>
                </div>
                <ShieldCheck className="w-8 h-8 text-red-500" />
              </div>
              
              <div className="rounded-[2rem] bg-zinc-100 border border-zinc-200 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Speed Focus</h3>
                  <p className="text-zinc-500 text-sm">Sub-second response time.</p>
                </div>
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Grid FAQ */}
        <section className="py-24 px-6 bg-white">
          <UniversalFaq 
            title="Software FAQs"
            items={[
              { q: "Is it cloud-based?", a: "Yes, everything runs in the cloud, giving you access to real-time data anywhere. However, it also features a robust offline mode if internet goes down." },
              { q: "Can I manage multiple locations?", a: "Absolutely. Our dashboard allows you to toggle between hundreds of locations instantly, compare metrics, and push menu updates globally." },
              { q: "How secure is the data?", a: "We use AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Payments are fully tokenized and never touch your servers." },
              { q: "Does it integrate with my accounting software?", a: "Yes, we offer one-click sync integrations with QuickBooks, Xero, and other major accounting platforms." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
