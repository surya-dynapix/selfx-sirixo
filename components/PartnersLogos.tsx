"use client";

import { useSiteContent } from "@/context/SiteContentContext";

export default function PartnersLogos() {
  const content = useSiteContent("partnerslogos", {
    title: "Our Hardware <span class=\"text-red-600\">Partners</span>",
    logo1Text: "stripe",
    logo2Text: "SQUARE",
    logo3Text: "gojek",
    logo4Text: "Zomato",
    logo5Text: "Swiggy",
    logo6Text: "UberEats"
  });

  return (
    <section className="py-16 bg-white flex flex-col items-center">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-zinc-900 tracking-tight" dangerouslySetInnerHTML={{ __html: content.title }} />
      </div>
      
      <div className="w-full flex justify-center items-center gap-6 md:gap-12 flex-wrap px-6 max-w-5xl mx-auto opacity-80">
        <div className="text-xl font-black text-red-600 tracking-tighter">{content.logo1Text}</div>
        <div className="text-xl font-black text-zinc-900 flex items-center gap-1">
          <span className="w-4 h-4 bg-zinc-900 rounded-sm"></span> {content.logo2Text}
        </div>
        <div className="text-xl font-bold text-green-500 italic tracking-tight">{content.logo3Text}</div>
        <div className="text-2xl font-bold text-red-600 italic tracking-tighter">{content.logo4Text}</div>
        <div className="text-2xl font-black text-orange-500 tracking-tighter">{content.logo5Text}</div>
        <div className="text-xl font-bold text-green-600 tracking-widest uppercase">{content.logo6Text}</div>
      </div>
    </section>
  );
}
