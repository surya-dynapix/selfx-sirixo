"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Flame, Timer, Printer, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function KitchenSystemPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* Industrial Hero Section */}
        <section className="bg-zinc-100 py-24 md:py-32 px-6 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-widest mb-8">
              <Flame className="w-4 h-4 text-red-600" /> Back of House
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-[1.05] mb-8">
              The Engine Room.
            </h1>
            <p className="text-xl text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
              Hardened thermal printers, rugged kitchen displays, and smart ticket routing designed to survive the heat, grease, and chaos of peak service.
            </p>
            <div className="flex justify-center">
              <Image 
                src="/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606081657.jpeg" 
                alt="Kitchen System Setup" 
                width={1000} 
                height={600} 
                className="w-full max-w-5xl rounded-3xl shadow-2xl border-4 border-zinc-900 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-24 px-6 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Large Feature Card */}
              <div className="lg:col-span-2 bg-white p-10 md:p-12 rounded-[2rem] border border-zinc-200 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10 w-full md:w-2/3">
                  <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <Timer className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">Zero-Latency Routing</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed">
                    Drinks go to the bar printer. Hot food goes to the grill KDS. Desserts wait in a staged queue. Fully customizable routing ensures the right station gets the right ticket instantly.
                  </p>
                </div>
              </div>

              {/* Small Feature Card */}
              <div className="bg-zinc-900 text-white p-10 rounded-[2rem] flex flex-col">
                <div className="w-14 h-14 bg-zinc-800 text-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-3 tracking-tight">Built Tough</h3>
                <p className="text-zinc-400 font-medium leading-relaxed flex-grow">
                  Commercial-grade thermal printers and spill-resistant bumping bars built for hostile environments.
                </p>
              </div>

              {/* Small Feature Card */}
              <div className="bg-white p-10 rounded-[2rem] border border-zinc-200 flex flex-col">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Printer className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-3 tracking-tight">Offline Printing</h3>
                <p className="text-zinc-600 font-medium leading-relaxed flex-grow">
                  Local area network fallbacks guarantee tickets print even if your main internet line goes down.
                </p>
              </div>

              {/* Large Feature Card with Image */}
              <div className="lg:col-span-2 bg-white rounded-[2rem] border border-zinc-200 flex flex-col md:flex-row overflow-hidden">
                <div className="p-10 md:p-12 flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">Color-Coded Chaos Control</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed">
                    Visual alerts flash yellow as tickets approach their time limit, and red when they are overdue. Keep your line cooks on pace without shouting.
                  </p>
                </div>
                <div className="w-full md:w-1/2 bg-zinc-100 relative min-h-[300px]">
                  <Image src="/Ultra-realistic_Hollywood-level_cinematic_hero-banner_photography_202606091131.jpeg" alt="KDS Interface" fill className="object-cover object-left" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Block */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-4xl font-black text-zinc-900 mb-8">Build your kitchen matrix.</h2>
          <button className="px-8 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg flex items-center gap-2 mx-auto">
            Talk to a Hardware Expert <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        {/* Unique Section: Workflow Nodes */}
        <section className="py-24 px-6 bg-zinc-950 text-white border-t border-zinc-800">
          <div className="max-w-4xl mx-auto flex flex-col">
            
            <h2 className="text-4xl font-black mb-12 tracking-tight text-center">How tickets flow.</h2>
            <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
              {[
                { step: "01", title: "Order Entry", desc: "Ticket is generated at POS or Kiosk." },
                { step: "02", title: "Smart Routing", desc: "System splits ticket by prep station (e.g. Grill, Fryer, Salad)." },
                { step: "03", title: "Prep & Bump", desc: "Cooks clear items on local KDS screens when finished." },
                { step: "04", title: "Assembly", desc: "Expediter screen aggregates all bumped items for final packaging." }
              ].map((node, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-zinc-950 bg-zinc-800 text-zinc-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(24,24,27,1)] z-10">
                    {node.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-colors">
                    <h3 className="font-bold text-lg mb-2">{node.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white border-t border-zinc-200">
          <UniversalFaq 
            title="Setup FAQs"
            items={[
              { q: "Wired or Wireless?", a: "We strongly recommend hardwiring all kitchen printers and KDS screens via Ethernet for maximum reliability during busy hours." },
              { q: "Can it handle dark kitchens?", a: "Yes, our system is perfect for ghost kitchens, allowing you to route orders from multiple virtual brands to specific prep stations seamlessly." },
              { q: "What if the printer jams?", a: "If an error is detected, the ticket will automatically reroute to a designated backup printer or appear on the master KDS screen." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
