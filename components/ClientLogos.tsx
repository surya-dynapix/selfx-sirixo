"use client";

import Image from "next/image";
import { useSiteContent } from "@/context/SiteContentContext";

export default function ClientLogos() {
  const content = useSiteContent("clientlogos", {
    title: "Our Customers",
    logo1Text: "Bite&Co.",
    logo2Text: "Caffeine",
    logo3Text: "SQUARE",
    logo4Text: "KababKing",
    logo5Text: "boba.",
    logo6Text: "MUNCH"
  });

  return (
    <section className="py-10 bg-white border-b border-zinc-100 overflow-hidden flex flex-col items-center">
      <span className="text-sm font-bold text-red-600 mb-6 tracking-widest uppercase">{content.title}</span>
      <div className="w-full flex justify-center items-center gap-8 md:gap-16 flex-wrap px-6 max-w-6xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="text-xl font-black text-zinc-800 tracking-tighter">{content.logo1Text}</div>
        <div className="text-2xl font-serif font-bold text-zinc-800 italic">{content.logo2Text}</div>
        <div className="text-xl font-black text-zinc-800 uppercase tracking-widest flex items-center gap-1">
          <span className="w-4 h-4 bg-zinc-800 rounded-sm"></span> {content.logo3Text}
        </div>
        <div className="text-2xl font-bold text-zinc-800 tracking-tight">{content.logo4Text}</div>
        <div className="text-xl font-black text-zinc-800 lowercase">{content.logo5Text}</div>
        <div className="text-xl font-medium text-zinc-800 tracking-widest uppercase border-2 border-zinc-800 px-2 py-0.5">{content.logo6Text}</div>
      </div>
    </section>
  );
}
