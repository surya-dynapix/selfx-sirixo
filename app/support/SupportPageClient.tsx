"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Book, MessageCircle, Phone, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How do I reset my admin password?", a: "Go to your dashboard login page, click 'Forgot Password', and we will email you a secure reset link valid for 15 minutes." },
  { q: "My KDS screen is not syncing with the POS.", a: "First, ensure both devices are on the same local network. Second, check if the KDS app is updated to the latest version. If the issue persists, reboot the KDS terminal." },
  { q: "How do I add a new menu item?", a: "Log into your Admin Dashboard. Navigate to the 'Inventory CMS' tab, click 'Add New Product', fill in the details, and hit Save. The change will reflect instantly." },
  { q: "What should I do if the receipt printer jams?", a: "Open the printer cover, gently remove the jammed paper, ensure the roll is seated correctly, and close the cover firmly. A test print will trigger automatically." },
  { q: "How do I connect my Stripe account?", a: "In your dashboard, go to Settings > Integrations. Click 'Connect Stripe' and follow the OAuth flow to link your account." },
];

export default function SupportPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-20">
        
        {/* Header Search */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mb-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
            How can we help?
          </h1>
          <div className="relative w-full max-w-2xl mx-auto mt-10">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search for articles, setup guides, or troubleshooting..." 
              className="w-full pl-16 pr-6 py-5 bg-zinc-50 border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-lg shadow-sm"
            />
          </div>
        </section>

        {/* Quick Links */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <a href="#" className="group bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-8 hover:border-zinc-300 hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <Book className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Knowledge Base</h3>
            <p className="text-zinc-500 font-medium mb-6">Detailed guides on hardware setup and software features.</p>
            <span className="text-blue-600 font-bold inline-flex items-center group-hover:underline">Browse Articles <ArrowRight className="w-4 h-4 ml-1" /></span>
          </a>
          
          <a href="#" className="group bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-8 hover:border-zinc-300 hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Live Chat</h3>
            <p className="text-zinc-500 font-medium mb-6">Talk to our technical support team in real-time.</p>
            <span className="text-emerald-600 font-bold inline-flex items-center group-hover:underline">Start Chat <ArrowRight className="w-4 h-4 ml-1" /></span>
          </a>

          <a href="#" className="group bg-zinc-50 border border-zinc-200/80 rounded-[2rem] p-8 hover:border-zinc-300 hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Phone Support</h3>
            <p className="text-zinc-500 font-medium mb-6">Available 24/7 for critical enterprise downtime issues.</p>
            <span className="text-orange-600 font-bold inline-flex items-center group-hover:underline">View Numbers <ArrowRight className="w-4 h-4 ml-1" /></span>
          </a>
        </section>

        {/* FAQs */}
        <section className="px-6 md:px-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-zinc-900 pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-zinc-600 font-medium leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
