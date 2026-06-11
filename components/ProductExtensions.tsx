import { Check } from "lucide-react";
import Image from "next/image";

interface ProductExtensionsProps {
  title: string;
}

export default function ProductExtensions({ title }: ProductExtensionsProps) {
  return (
    <>
      {/* 1. Fantastic Modern UI Section */}
      <section className="py-24 px-6 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-zinc-950 to-zinc-950"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              Supercharge your <br/> <span className="text-red-500">{title}</span>
            </h2>
            <p className="text-lg text-zinc-400 font-medium mb-10 leading-relaxed max-w-xl">
              Integrate {title} seamlessly into your existing operations. Experience unprecedented control, real-time sync, and a scalable architecture designed for modern enterprises.
            </p>
            <ul className="flex flex-col gap-5 mb-12">
              <li className="flex items-center gap-4 font-semibold text-zinc-200">
                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                Enterprise-grade security protocols
              </li>
              <li className="flex items-center gap-4 font-semibold text-zinc-200">
                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                Real-time cross-platform sync
              </li>
              <li className="flex items-center gap-4 font-semibold text-zinc-200">
                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                24/7 dedicated priority support
              </li>
            </ul>
            <button className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Discover Features
            </button>
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-zinc-700/50 shadow-2xl flex items-center justify-center p-8 overflow-hidden group">
               <Image src="/pos-software.png" alt={title} fill className="object-contain p-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAQs Section */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-4">{title} FAQs</h2>
            <p className="text-lg text-zinc-500 font-medium">Common questions about implementing {title}.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              {
                q: `How long does it take to deploy the ${title}?`,
                a: `Implementation times vary based on the scale of your operation, but our standard deployment for ${title} typically takes less than 48 hours with our guided onboarding.`
              },
              {
                q: `Is the ${title} compatible with legacy systems?`,
                a: `Yes, we provide extensive API documentation and built-in integration modules allowing ${title} to seamlessly connect with over 50+ leading legacy platforms.`
              },
              {
                q: `What kind of support is included with the ${title}?`,
                a: `All Enterprise plans include 24/7 priority support, a dedicated account manager, and access to our comprehensive knowledge base for ${title}.`
              },
              {
                q: `Can I customize the ${title} for my specific business needs?`,
                a: `Absolutely. The ${title} features a modular architecture, meaning our team can enable, disable, or custom-build specific workflows tailored entirely to your operational requirements.`
              }
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8 hover:bg-zinc-100 transition-colors cursor-pointer group flex flex-col items-start text-left">
                <h3 className="w-full text-lg font-bold text-zinc-900 mb-3 flex justify-between items-start gap-4">
                  {faq.q}
                  <svg className="w-6 h-6 shrink-0 text-zinc-400 group-hover:text-red-600 transition-colors mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </h3>
                <p className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed pr-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
