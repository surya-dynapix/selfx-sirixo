"use client";

import Image from "next/image";

export default function ClientLogos() {
  const logos = [
    "/logos/logo1.svg",
    "/logos/logo2.svg",
    "/logos/logo3.svg",
    "/logos/logo4.svg",
    "/logos/logo5.svg",
    "/logos/logo6.svg",
  ];

  return (
    <section className="py-10 bg-white border-b border-zinc-100 overflow-hidden flex flex-col items-center">
      <span className="text-sm font-bold text-red-600 mb-6 tracking-widest uppercase">Our Customers</span>
      <div className="w-full flex justify-center items-center gap-8 md:gap-16 flex-wrap px-6 max-w-6xl mx-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholder text logos since we don't have SVGs */}
        <div className="text-xl font-black text-zinc-800 tracking-tighter">Bite&Co.</div>
        <div className="text-2xl font-serif font-bold text-zinc-800 italic">Caffeine</div>
        <div className="text-xl font-black text-zinc-800 uppercase tracking-widest flex items-center gap-1">
          <span className="w-4 h-4 bg-zinc-800 rounded-sm"></span> SQUARE
        </div>
        <div className="text-2xl font-bold text-zinc-800 tracking-tight">Kabab<span className="text-red-500">King</span></div>
        <div className="text-xl font-black text-zinc-800 lowercase">boba.</div>
        <div className="text-xl font-medium text-zinc-800 tracking-widest uppercase border-2 border-zinc-800 px-2 py-0.5">MUNCH</div>
      </div>
    </section>
  );
}
