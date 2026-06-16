"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white text-zinc-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Frequently asked questions</h2>
          {/* Subtitle dynamically inferred or kept simple to preserve layout */}
        </div>
        
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="border border-zinc-200 rounded-xl bg-white overflow-hidden hover:border-zinc-300 transition-colors shadow-sm">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none p-6 cursor-pointer"
                >
                  <span className="font-bold text-base md:text-lg text-zinc-900 pr-8">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-zinc-400">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
