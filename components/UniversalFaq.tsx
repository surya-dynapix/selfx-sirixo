"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface UniversalFaqProps {
  items: FaqItem[];
  title?: string;
}

export default function UniversalFaq({ items, title }: UniversalFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {title && (
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-zinc-900 tracking-tight">
          {title}
        </h2>
      )}
      
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "bg-zinc-50 shadow-sm" : "bg-white hover:border-zinc-300"
            }`}
          >
            <button
              className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg font-bold text-zinc-900 pr-8">{item.q}</h3>
              <div className="shrink-0 flex items-center justify-center">
                {isOpen ? (
                  <Minus className="w-6 h-6 text-red-600 transition-transform duration-300" />
                ) : (
                  <Plus className="w-6 h-6 text-zinc-400 transition-transform duration-300" />
                )}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 md:px-8 pb-6 text-zinc-600 font-medium leading-relaxed">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
