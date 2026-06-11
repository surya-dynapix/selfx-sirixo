"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Smartphone, CheckCircle2, QrCode, Gift, Zap, ArrowRight, Star, Download } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Soft Split Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:pt-32 lg:pb-0 overflow-hidden relative border-b border-zinc-100">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 pb-16 lg:pb-32">
              <span className="px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest mb-6">Consumer App</span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-zinc-900 mb-6">
                Your restaurant in their pocket.
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 font-medium mb-10 max-w-lg">
                Launch a fully white-labeled mobile app. Drive direct orders, build a loyal customer base, and eliminate third-party commission fees.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" /> Request App Demo
                </button>
              </div>
            </div>

            {/* Mobile Phone Mockup */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end h-[500px] lg:h-[700px]">
              <div className="absolute bottom-0 w-[300px] lg:w-[400px] h-[80%] bg-gradient-to-t from-red-600/20 to-transparent blur-[80px] rounded-full" />
              <div className="relative w-[280px] lg:w-[350px] aspect-[1/2] rounded-[3rem] border-[12px] border-zinc-950 bg-white shadow-2xl overflow-hidden z-10 translate-y-12 lg:translate-y-24">
                <Image src="/Ultra-realistic_Hollywood-level_cinematic_mobile-commerce_hero-banner_202606091253.jpeg" alt="Mobile App Screen" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights - Centered Icon Blocks */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-4">Features they'll love.</h2>
              <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto">A seamless ordering experience designed to bring customers back again and again.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Native Loyalty</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">Customers earn points automatically on every order and can redeem rewards natively within the app.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-6">
                  <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Push Promotions</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">Send targeted push notifications with discount codes during slow hours to instantly boost sales.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Apple Pay & Google Pay</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">Frictionless 1-click checkout increases conversion rates and ensures a smooth payment process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Branding Section */}
        <section className="py-32 px-6 bg-zinc-950 text-white rounded-[3rem] mx-4 md:mx-12 mb-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">100% Your Brand.</h2>
            <p className="text-xl text-zinc-400 font-medium leading-relaxed mb-12">
              We publish the app directly to the App Store and Google Play under your restaurant's name. Your icon, your colors, your menu. Zero SelfX branding.
            </p>
            <button className="px-10 py-5 bg-white text-zinc-950 rounded-full font-black text-lg hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 mx-auto">
              Start Building <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Unique Section: Sticky Scroll Features */}
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
            <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">Built for maximum engagement.</h2>
              <p className="text-xl text-zinc-500 font-medium mb-8 leading-relaxed">
                Our white-labeled mobile app comes packed with advanced tools to drive retention, increase order frequency, and grow your revenue automatically.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-8">
              {[
                { title: "Push Notifications", desc: "Send targeted offers during slow hours to instantly boost your sales." },
                { title: "Native Loyalty", desc: "Customers earn and redeem points natively, creating a sticky experience." },
                { title: "Apple Pay & Google Pay", desc: "Frictionless 1-click checkout increases conversion rates." },
                { title: "Live Order Tracking", desc: "Customers get real-time updates from kitchen prep to delivery." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Section: Accordion FAQ */}
        <section className="py-24 px-6 bg-white">
          <UniversalFaq 
            title="App FAQs"
            items={[
              { q: "How long does it take to launch the app?", a: "Typically 2-3 weeks from the time we receive your menu and branding assets." },
              { q: "Who owns the customer data?", a: "You do. 100% of the customer data belongs to your restaurant." },
              { q: "Is the app available on both iOS and Android?", a: "Yes, we build and publish native applications for both the Apple App Store and Google Play Store." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
