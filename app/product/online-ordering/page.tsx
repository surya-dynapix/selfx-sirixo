"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ShoppingBag, Globe, Percent } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function OnlineOrderingPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        
        {/* E-Commerce Style Hero */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-1/2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-[1.05] mb-6">
                Take back your margins.
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-10 max-w-md">
                Stop paying 30% commission to third-party delivery apps. Launch your own white-labeled online ordering website in minutes.
              </p>
              
              <ul className="flex flex-col gap-5 mb-10">
                {[
                  "Zero commission on orders",
                  "Direct integration with your POS and KDS",
                  "Own your customer data and emails",
                  "Optimized for mobile web checkout"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-zinc-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg">
                Create Your Website
              </button>
            </div>

            <div className="w-full lg:w-1/2 relative aspect-[3/4] lg:aspect-[4/5] flex items-center justify-center">
              <Image src="/ordering.png" alt="Online Ordering" fill className="object-contain" priority />
            </div>

          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="bg-zinc-50 py-32 px-6 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center text-zinc-900 mb-20">Everything you need to sell online.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <Globe className="w-12 h-12 text-zinc-900 mb-6" />
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Custom Domain</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  Host your ordering page on your own website domain (e.g., order.yourrestaurant.com). Keep your brand professional and cohesive.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <ShoppingBag className="w-12 h-12 text-zinc-900 mb-6" />
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Pickup & Delivery</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  Offer curbside pickup, scheduled in-store collection, or utilize our integration with white-label delivery fleets like DoorDash Drive.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Percent className="w-12 h-12 text-zinc-900 mb-6" />
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Promo Codes</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  Easily create and manage discount codes, BOGO offers, and percentage-based discounts to drive traffic during off-peak hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Glassmorphism UI */}
        <section className="py-32 px-6 relative overflow-hidden bg-zinc-950">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-red-600/30 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl">
                 <h3 className="text-3xl font-black text-white mb-4">Unified Menu Management</h3>
                 <p className="text-zinc-300 leading-relaxed mb-8">
                   Update your prices, upload new food photography, or 86 an item from your central POS dashboard, and watch it instantly reflect on your online ordering website.
                 </p>
                 <div className="space-y-4">
                    {[
                      "No double-entry required",
                      "Automatic tax calculation",
                      "Real-time inventory sync"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                        <Check className="w-5 h-5 text-red-400" />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Designed to convert.</h2>
              <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-8">
                Our templates are rigorously tested to minimize cart abandonment. With guest checkout, saved payment methods, and intuitive modifiers, your customers can order their favorites in under 30 seconds.
              </p>
              <button className="px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors rounded-full font-bold">
                View Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white">
          <UniversalFaq 
            title="Frequently Asked Questions"
            items={[
              { q: "Is there a setup fee for the website?", a: "No, the online ordering module is included in our Pro and Enterprise tiers at no additional setup cost." },
              { q: "Can customers schedule orders for later?", a: "Yes, you can configure your site to allow orders up to 7 days in advance." },
              { q: "Do I have to handle delivery logistics?", a: "You can use your own drivers, or toggle on our white-label delivery integration to have third-party couriers deliver your food while you keep the customer data." },
              { q: "How are payments processed?", a: "Payments are processed securely via our integrated gateway and deposited into your bank account the next business day." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
