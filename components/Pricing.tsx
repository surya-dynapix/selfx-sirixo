"use client";

import { CheckCircle2 } from "lucide-react";
import { useSiteContent } from "@/context/SiteContentContext";

export default function Pricing() {
  const content = useSiteContent("pricing", {
    badgeText: "Software Package",
    subtitle: "Transparent pricing designed to scale alongside your restaurant's order volume. No hidden fees.",
    plan1Name: "Starter",
    plan1Price: "₹0",
    plan1Period: "/ month",
    plan1Desc: "Essential POS software features for new businesses just getting started.",
    plan1Features: "Core Point of Sale,Basic inventory management,Standard reporting,Email support",
    plan1Button: "Start Free",
    plan2Name: "Professional",
    plan2Price: "₹4,999",
    plan2Period: "/ month",
    plan2Desc: "Advanced tools for growing restaurants needing multi-terminal sync.",
    plan2Features: "Everything in Starter,Kitchen Display System (KDS),Advanced inventory tracking,Staff management & permissions,24/7 Priority Support",
    plan2Button: "Get Started",
    plan3Name: "Enterprise",
    plan3Price: "₹12,999",
    plan3Period: "/ month",
    plan3Desc: "Full suite ecosystem for high-volume franchises and large venues.",
    plan3Features: "Everything in Professional,Self-service kiosk software,Custom API integrations,Dedicated account manager,White-labeled mobile app",
    plan3Button: "Contact Sales"
  });

  const plans = [
    {
      name: content.plan1Name,
      price: content.plan1Price,
      period: content.plan1Period,
      description: content.plan1Desc,
      features: content.plan1Features.split(",").map((s: string) => s.trim()).filter(Boolean),
      buttonText: content.plan1Button,
      popular: false,
    },
    {
      name: content.plan2Name,
      price: content.plan2Price,
      period: content.plan2Period,
      description: content.plan2Desc,
      features: content.plan2Features.split(",").map((s: string) => s.trim()).filter(Boolean),
      buttonText: content.plan2Button,
      popular: true,
    },
    {
      name: content.plan3Name,
      price: content.plan3Price,
      period: content.plan3Period,
      description: content.plan3Desc,
      features: content.plan3Features.split(",").map((s: string) => s.trim()).filter(Boolean),
      buttonText: content.plan3Button,
      popular: false,
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block bg-zinc-950 text-white font-bold text-sm tracking-widest uppercase px-6 py-2 rounded-full mb-6">
            {content.badgeText}
          </div>
          <p className="text-lg text-zinc-500 font-medium">
            {content.subtitle}
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[2rem] p-8 flex flex-col justify-between border ${
                plan.popular ? "border-red-200 shadow-xl relative" : "border-zinc-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-zinc-500 mb-6 min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-zinc-100">
                  <span className="text-5xl font-black text-zinc-900 tracking-tight">{plan.price}</span>
                  <span className="text-zinc-400 font-bold">{plan.period}</span>
                </div>
                
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-zinc-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                plan.popular 
                  ? "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20" 
                  : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
