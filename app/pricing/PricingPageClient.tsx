"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, CheckCircle2, ChevronRight, Zap, Info, ShieldCheck, Sparkles, SlidersHorizontal, Calculator } from "lucide-react";
import UniversalFaq from "@/components/UniversalFaq";
import { useSiteContent } from "@/context/SiteContentContext";

export default function PricingPageClient() {
  const [employeeCount, setEmployeeCount] = useState(100);
  
  // Fake calculation based on employee count
  const estimatedSavings = (employeeCount * 1250).toLocaleString();

  const content = useSiteContent("content", {
    heroTitle: "The best work solution, <br class='hidden md:block'/><span class='text-zinc-400'>for the best price.</span>",
    heroSubtitle: "Choose the perfect plan for your business. Upgrade anytime.",

    plan1Name: "Starter",
    plan1Desc: "Core tools for single locations.",
    plan1Price: "$49",
    plan1Features: "Cloud POS Software,Unlimited Transactions,Basic Reporting,Email Support,1 Location Limit,Standard Menu Setup",

    plan2Name: "Professional",
    plan2Desc: "Advanced operations for growing brands.",
    plan2Price: "$99",
    plan2Features: "Up to 5 Locations,KDS & Kitchen Routing,Inventory Management,Advanced Analytics,Loyalty Program API,24/7 Priority Support,Custom Role Permissions",

    plan3Name: "Enterprise",
    plan3Desc: "Custom deployment for global scale.",
    plan3Price: "Custom",
    plan3Features: "Unlimited Locations,White-label Mobile App,Dedicated Success Manager,Custom API Integrations,On-premise Deployment Options,99.99% SLA Guarantee",

    aiTitle: "The world's most advanced AI for restaurants.",
    aiCoreFeatures: "Standard dashboard,Daily sales summaries,Basic labor tracking",
    aiProPrice: "$19",
    aiProFeatures: "Predictive inventory AI,Dynamic menu pricing,Automated staff scheduling,AI Upsell engine",
    aiEntPrice: "$49",
    aiEntFeatures: "Everything in Pro AI,Custom LLM training on your data,API access for AI models,Advanced loss prevention AI",

    roiTitle: "Save time. Save money. <br/> Kill busy work."
  });

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col selection:bg-red-500/30">
      <Navbar />

      <main className="flex-grow">
        
        {/* SECTION 1: Main Light Pricing Table */}
        <section className="pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center">
          <div className="max-w-[1000px] mx-auto text-center mb-16">
            <h1 
              className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-zinc-900 mb-6"
              dangerouslySetInnerHTML={{ __html: content.heroTitle }}
            />
            <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto">
              {content.heroSubtitle}
            </p>
          </div>

          <div className="max-w-[1200px] w-full mx-auto relative z-10">
            {/* The Pricing Grid (3 Tiers) */}
            <div className="flex flex-col lg:flex-row shadow-[0_0_50px_rgba(0,0,0,0.05)] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-zinc-200">
              
              {/* Starter (Light) */}
              <div className="w-full lg:w-1/3 bg-white p-10 flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-200">
                <h3 className="text-2xl font-black text-zinc-900 mb-2">{content.plan1Name}</h3>
                <p className="text-zinc-500 font-medium mb-8 min-h-[48px]">{content.plan1Desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-black text-zinc-900">{content.plan1Price}</span>
                  <span className="text-zinc-500 font-medium text-lg"> / user / month</span>
                </div>
                <button className="w-full py-4 bg-zinc-950 hover:bg-black text-white font-bold rounded-xl transition-colors mb-10">
                  Try for free
                </button>
                <div className="flex flex-col gap-5 mt-auto">
                  <h4 className="font-bold text-zinc-900 text-xs tracking-widest uppercase">Everything you need to start:</h4>
                  {content.plan1Features.split(',').map((feat: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 font-medium leading-relaxed">{feat.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional (Dark / Red Theme) */}
              <div className="w-full lg:w-1/3 bg-[#0a0a0a] p-10 flex flex-col relative scale-[1.02] shadow-2xl z-10 rounded-2xl lg:rounded-[3rem] border border-zinc-800 my-[-8px] lg:my-0 lg:mx-[-8px]">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-red-600 text-white font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest border border-red-500">
                  Most Popular
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{content.plan2Name}</h3>
                <p className="text-zinc-400 font-medium mb-8 min-h-[48px]">{content.plan2Desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-black text-white">{content.plan2Price}</span>
                  <span className="text-zinc-500 font-medium text-lg"> / user / month</span>
                </div>
                <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors mb-10 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                  Start free trial
                </button>
                <div className="flex flex-col gap-5 mt-auto">
                  <h4 className="font-bold text-white text-xs tracking-widest uppercase">Everything in Starter, plus:</h4>
                  {content.plan2Features.split(',').map((feat: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 font-medium leading-relaxed">{feat.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise (Light) */}
              <div className="w-full lg:w-1/3 bg-zinc-50 p-10 flex flex-col border-t lg:border-t-0 lg:border-l border-zinc-200">
                <h3 className="text-2xl font-black text-zinc-900 mb-2">{content.plan3Name}</h3>
                <p className="text-zinc-500 font-medium mb-8 min-h-[48px]">{content.plan3Desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-black text-zinc-900">{content.plan3Price}</span>
                </div>
                <button className="w-full py-4 bg-white border-2 border-zinc-200 hover:border-zinc-900 text-zinc-900 font-bold rounded-xl transition-colors mb-10">
                  Contact Sales
                </button>
                <div className="flex flex-col gap-5 mt-auto">
                  <h4 className="font-bold text-zinc-900 text-xs tracking-widest uppercase">Everything in Pro, plus:</h4>
                  {content.plan3Features.split(',').map((feat: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                      <span className="text-zinc-600 font-medium leading-relaxed">{feat.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          <p className="text-zinc-400 font-medium text-sm mt-12 text-center">
            *Prices exclude applicable hardware costs and local taxes.
          </p>
        </section>


        {/* SECTION 2: Dark Advanced AI Pricing */}
        <section className="py-32 px-6 bg-[#000000] text-white relative overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="mb-20">
              <span className="text-red-500 font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4"/> AI Add-ons
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-2xl leading-tight">
                {content.aiTitle}
              </h2>
            </div>

            {/* AI Pricing Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800 rounded-3xl overflow-hidden mb-24">
              
              {/* Core */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800 bg-[#0a0a0a]">
                <h3 className="text-xl font-bold mb-6">Core Analytics</h3>
                <div className="mb-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">Included</span>
                </div>
                <button className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-bold rounded-lg transition-colors mb-10 border border-zinc-700">
                  Current Plan
                </button>
                <div className="flex flex-col gap-4">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Features</span>
                  {content.aiCoreFeatures.split(',').map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-zinc-600" />
                      <span className="text-zinc-400 text-sm font-medium">{f.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro AI */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800 bg-[#0a0a0a] relative overflow-hidden">
                {/* Red subtle glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
                
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">SelfX AI <span className="bg-red-600/20 text-red-500 text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-widest">Add-on</span></h3>
                <div className="mb-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{content.aiProPrice}</span>
                  <span className="text-zinc-500 text-sm mb-1">/ location / mo</span>
                </div>
                <button className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-bold rounded-lg transition-colors mb-10 border border-zinc-700">
                  Try free for 14 days
                </button>
                <div className="flex flex-col gap-4">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Features</span>
                  {content.aiProFeatures.split(',').map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-red-500" />
                      <span className="text-zinc-200 text-sm font-medium">{f.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise AI */}
              <div className="p-10 bg-[#0a0a0a] relative">
                <h3 className="text-xl font-bold mb-6">Enterprise AI</h3>
                <div className="mb-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{content.aiEntPrice}</span>
                  <span className="text-zinc-500 text-sm mb-1">/ location / mo</span>
                </div>
                <button className="w-full py-3 bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-bold rounded-lg transition-colors mb-10">
                  Upgrade Plan
                </button>
                <div className="flex flex-col gap-4">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Features</span>
                  {content.aiEntFeatures.split(',').map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-white" />
                      <span className="text-zinc-200 text-sm font-medium">{f.trim()}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* When we optimize, you save $ */}
            <div className="flex flex-col lg:flex-row items-center gap-16 mt-32">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                  When we optimize, <br/> you save $
                </h2>
                <p className="text-lg text-zinc-400 font-medium leading-relaxed max-w-lg">
                  SelfX AI doesn't just give you dashboards. It actively reduces food waste, lowers labor costs through precision scheduling, and drives up average order values. Our systems pay for themselves on day one.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Zap className="w-24 h-24 text-red-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-zinc-500 font-mono text-sm mb-2">Cost per automated transaction</p>
                  <div className="text-7xl font-black text-white tracking-tighter mb-4">$0.001</div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-1/3"></div>
                  </div>
                  <div className="flex justify-between mt-4 text-xs font-mono text-zinc-500">
                    <span>Processing efficiency</span>
                    <span className="text-green-400">+42%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: ROI / Savings Calculator */}
        <section className="py-32 px-6 bg-zinc-50 border-t border-zinc-200 relative">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-6" dangerouslySetInnerHTML={{ __html: content.roiTitle }} />
            </div>

            <div className="w-full bg-white border border-zinc-200 rounded-[2.5rem] shadow-xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
              
              {/* Left Side: Slider & Inputs */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-zinc-900 mb-8">Your capacity</h3>
                
                {/* Fake App Logos Grid */}
                <div className="flex flex-wrap gap-4 mb-12">
                  {["bg-blue-100", "bg-red-100", "bg-green-100", "bg-purple-100", "bg-amber-100", "bg-pink-100", "bg-indigo-100", "bg-teal-100", "bg-rose-100", "bg-cyan-100", "bg-lime-100", "bg-sky-100"].map((color, i) => (
                    <div key={i} className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center`}>
                      <div className="w-6 h-6 bg-white/50 rounded-full" />
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-zinc-700 text-sm">Number of Employees</span>
                    <span className="font-black text-red-600 text-xl">{employeeCount}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between mt-2 text-xs font-bold text-zinc-400">
                    <span>10</span>
                    <span>1000+</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Calculation Form */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-2xl font-bold text-zinc-900 mb-8">Estimated ROI</h3>
                
                <div className="flex flex-col gap-6 mb-12">
                  <div className="flex justify-between items-end border-b border-zinc-200 pb-3">
                    <span className="text-zinc-500 font-medium text-sm">Average Wage / Hour</span>
                    <span className="font-bold text-zinc-900">$15.00</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-zinc-200 pb-3">
                    <span className="text-zinc-500 font-medium text-sm">Hours Saved per Employee / Year</span>
                    <span className="font-bold text-zinc-900">120 hrs</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-zinc-200 pb-3">
                    <span className="text-zinc-500 font-medium text-sm">Software Consolidation Savings</span>
                    <span className="font-bold text-zinc-900">${(employeeCount * 50).toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 mb-8 flex justify-between items-center">
                  <span className="text-sm font-bold text-zinc-500 tracking-wider uppercase">Total Yearly Savings</span>
                  <span className="text-4xl md:text-5xl font-black text-green-600">${estimatedSavings}</span>
                </div>

                <button className="w-full py-4 bg-zinc-950 hover:bg-black text-white font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
                  Get a Custom Quote <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: FAQ */}
        <section className="py-32 px-6 bg-white border-t border-zinc-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-4">Frequently asked questions</h2>
              <p className="text-lg text-zinc-500 font-medium">Everything you need to know about billing and pricing.</p>
            </div>
            
            <UniversalFaq 
              title=""
              items={[
                { q: "Is there a setup fee?", a: "No, there are no hidden setup fees for our software. Hardware purchases and installation services are billed separately." },
                { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
                { q: "Do I have to sign a long-term contract?", a: "No, all our standard plans are month-to-month. We do offer discounts for annual commitments." },
                { q: "What counts as a 'location'?", a: "A location refers to a single physical store or ghost kitchen facility. You can have unlimited POS terminals within a single location." }
              ]} 
            />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
