"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Send, Bot, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";

export default function WhatsAppOrderingPage() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow">
        
        {/* WhatsApp Theme Hero */}
        <section className="pt-24 pb-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <span className="px-5 py-2 rounded-full bg-[#25D366]/10 text-[#075E54] font-bold text-xs uppercase tracking-widest mb-6 inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> Native Integration
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-zinc-900 mb-6">
                Order directly <br /> via WhatsApp.
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 font-medium mb-10 max-w-lg leading-relaxed">
                Turn chat into revenue. Let your customers browse your menu, place orders, and make payments without ever leaving their favorite messaging app.
              </p>
              <button className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold text-lg transition-colors shadow-lg shadow-[#25D366]/30 flex items-center gap-2">
                Get WhatsApp API Access <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Chat UI Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#25D366]/10 rounded-full blur-[100px] z-0" />
              
              <div className="relative z-10 w-full max-w-sm bg-[#efeae2] rounded-[3rem] border-[12px] border-zinc-900 shadow-2xl overflow-hidden flex flex-col h-[700px]">
                
                {/* Chat Header */}
                <div className="bg-[#075E54] text-white p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Burger Joint Official</h3>
                    <p className="text-[10px] text-white/70">Verified Business Account</p>
                  </div>
                </div>

                {/* Chat Body */}
                <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-repeat bg-[length:400px_auto] opacity-90">
                  
                  {/* Customer Msg */}
                  <div className="self-end bg-[#dcf8c6] text-zinc-800 p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm text-sm font-medium">
                    Hi! I'd like to place an order for delivery.
                  </div>

                  {/* Bot Msg */}
                  <div className="self-start bg-white text-zinc-800 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm text-sm font-medium">
                    Welcome back to Burger Joint! 🍔
                    <br/><br/>
                    Here is our interactive menu. Click below to view items and build your cart.
                    <div className="mt-3 bg-zinc-100 rounded-xl p-3 border border-zinc-200">
                      <Image src="/Ultra-realistic_cinematic_hero-banner_photography_of_202606081358.jpeg" width={200} height={100} alt="Menu" className="w-full h-24 object-cover rounded-lg mb-2" />
                      <button className="w-full py-2 bg-white border border-zinc-300 rounded-lg text-[#075E54] font-bold text-center">
                        View Menu
                      </button>
                    </div>
                  </div>

                  {/* Customer Msg */}
                  <div className="self-end bg-[#dcf8c6] text-zinc-800 p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm text-sm font-medium">
                    Order submitted!
                  </div>

                  {/* Bot Msg */}
                  <div className="self-start bg-white text-zinc-800 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm text-sm font-medium flex flex-col gap-2">
                    <span className="font-bold">Total: $24.50</span>
                    You can pay securely using the link below:
                    <button className="w-full py-2 bg-[#25D366] rounded-lg text-white font-bold text-center mt-1">
                      Pay Now
                    </button>
                  </div>

                </div>

                {/* Chat Input */}
                <div className="bg-[#f0f0f0] p-3 flex items-center gap-3">
                  <div className="flex-grow bg-white rounded-full px-4 py-2 text-zinc-400 text-sm">
                    Type a message...
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#00a884] text-white flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 ml-1" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Feature Bento */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-center text-zinc-900 mb-20">Conversational Commerce</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-50 p-10 rounded-[2rem] border border-zinc-200">
                <Bot className="w-10 h-10 text-[#25D366] mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">AI Ordering Bot</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  Our Natural Language Processing (NLP) engine understands text and voice notes, converting casual chat into structured POS tickets.
                </p>
              </div>

              <div className="bg-zinc-50 p-10 rounded-[2rem] border border-zinc-200">
                <MessageCircle className="w-10 h-10 text-[#25D366] mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Automated Updates</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  Send automated order confirmations, live delivery tracking links, and digital receipts directly to their WhatsApp inbox.
                </p>
              </div>

              <div className="bg-zinc-50 p-10 rounded-[2rem] border border-zinc-200">
                <FileText className="w-10 h-10 text-[#25D366] mb-6" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">Direct POS Sync</h3>
                <p className="text-zinc-600 font-medium leading-relaxed">
                  WhatsApp orders inject directly into your POS and Kitchen Display Systems just like an in-store order. No separate tablets required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Section: Universal FAQ */}
        <section className="py-24 px-6 bg-white">
          <UniversalFaq 
            title="Integration FAQs"
            items={[
              { q: "Is this officially supported by Meta?", a: "Yes, we use the official WhatsApp Business API. Your account will be fully verified and secure." },
              { q: "Can we still reply to customers manually?", a: "Absolutely. The AI handles the ordering flow, but your staff can jump into the chat at any time via the shared team inbox." },
              { q: "How are payments handled?", a: "We send a secure checkout link directly in the chat. Customers pay via Apple Pay, Google Pay, or Card, and the order is instantly pushed to your POS." },
              { q: "Does the AI understand multiple languages?", a: "Yes, our NLP engine automatically detects the customer's language and replies in the same language." }
            ]} 
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
