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
    <section className="py-32 bg-[#FAF9F6] text-zinc-900 border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="flex flex-col border-t-2 border-zinc-200">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className="border-b-2 border-zinc-200 py-6 md:py-8">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className={`font-black text-xl md:text-2xl transition-colors pr-8 ${isOpen ? "text-red-600" : "text-zinc-800 group-hover:text-red-500"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 transition-colors ${isOpen ? "text-red-600" : "text-zinc-400 group-hover:text-red-500"}`}>
                    {isOpen ? <Minus className="w-6 h-6 md:w-8 md:h-8" /> : <Plus className="w-6 h-6 md:w-8 md:h-8" />}
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
                      <p className="text-zinc-600 text-lg mt-6 leading-relaxed font-medium max-w-3xl">
                        {faq.answer}
                      </p>
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
