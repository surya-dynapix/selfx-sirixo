"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate booking API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        companySize: "",
      });
    }, 1200);
  };

  const logos = [
    { name: "Invert", icon: (
      <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 4l7.5 13.5h-15L12 6z"/>
      </svg>
    )},
    { name: "Hitech", icon: (
      <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 4v16M19 4v16M5 12h14" strokeLinecap="round"/>
      </svg>
    )},
    { name: "Proline", icon: (
      <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { name: "DevWise", icon: (
      <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M8 16l-4-4 4-4M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )},
    { name: "Snowflake", icon: (
      <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20M12 2l3 3M12 22l-3-3M2 12l3 3M22 12l-3-3M5 5l14 14M19 5L5 19" strokeLinecap="round"/>
      </svg>
    )},
    { name: "Flash", icon: (
      <svg className="w-5 h-5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    )},
  ];

  return (
    <div className="min-h-screen text-zinc-950 font-sans flex flex-col relative overflow-hidden">
      
      {/* Soft Radial Glow Backgrounds (Red Theme) */}
      
      <Navbar />

      {/* Main Redesigned Content */}
      <main className="flex-grow pt-24 pb-16 flex flex-col justify-center relative z-10">
        
        <section className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Heading and benefits */}
            <div className="flex flex-col">
              
          

              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.05] mb-4">
                Automate and sell better
                with <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-500">SelfX</span>
              </p>
              
              <p className="text-zinc-700 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-lg">
                Smart self-ordering kiosks for your restaurants.<br />
                Leave your info and we'll be in touch shortly.
              </p>

              {/* Benefits lists */}
              <div className="space-y-7">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 bg-red-600 text-white rounded-full p-1 shadow-sm shadow-red-600/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 leading-tight">Customized for your restaurant</h3>
                    <p className="text-zinc-600 text-sm mt-1.5 leading-relaxed max-w-md font-medium">
                      Create experiences around your menu, upselling methodology, customer ICP, and more
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 bg-red-600 text-white rounded-full p-1 shadow-sm shadow-red-600/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 leading-tight">Seamless POS Integrations</h3>
                    <p className="text-zinc-600 text-sm mt-1.5 leading-relaxed max-w-md font-medium">
                      Fits into your existing POS, KDS, or management portal. Seamless for admins and staff.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 bg-red-600 text-white rounded-full p-1 shadow-sm shadow-red-600/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 leading-tight">Reliable and secure hardware</h3>
                    <p className="text-zinc-600 text-sm mt-1.5 leading-relaxed max-w-md font-medium">
                      Commercial-grade durability, PCI compliant payments, secure user provisioning, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium White Form Card */}
            <div className="w-full max-w-lg mx-auto lg:ml-auto bg-white rounded-[2rem] shadow-2xl shadow-zinc-900/5 p-8 sm:p-10 border border-zinc-100">
              <p className="text-3xl font-bold tracking-tight text-zinc-900 mb-8">
                See <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-500">SelfX AI</span> in Action
              </p>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-5"
                  >
                    
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-zinc-800">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-zinc-800">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-zinc-800">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="ABC Ltd."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-zinc-800">Phone Number *</label>
                      <div className="relative flex items-center">
                        <div className="absolute left-1 top-1 bottom-1 flex items-center justify-center pl-2 pr-1 border-r border-zinc-200 cursor-pointer">
                          <span className="text-lg leading-none">🇺🇸</span>
                          <ChevronDown className="w-3.5 h-3.5 ml-1 text-zinc-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (334) 343-4333"
                          className="w-full pl-16 pr-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="companySize" className="text-xs font-bold text-zinc-800">Company Size *</label>
                      <div className="relative">
                        <select
                          id="companySize"
                          required
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-zinc-400">Select Company Size</option>
                          <option value="1-10">1-10 Employees</option>
                          <option value="11-50">11-50 Employees</option>
                          <option value="51-200">51-200 Employees</option>
                          <option value="201-500">201-500 Employees</option>
                          <option value="500+">500+ Employees</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full px-6 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 to-rose-500 text-white hover:from-red-700 hover:to-rose-600 transition-all active:scale-[0.98] shadow-md shadow-red-600/20 disabled:opacity-70 disabled:active:scale-100 cursor-pointer"
                    >
                      {isSubmitting ? "Scheduling..." : "Schedule My Personalised Demo"}
                    </button>

                    <p className="text-center text-xs text-zinc-500 mt-2 font-medium">
                      SelfX's <a href="#" className="underline hover:text-zinc-800 transition-colors">Privacy Policy</a>
                    </p>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-6 shadow-md shadow-red-600/5 animate-bounce">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-950 mb-2">Request Submitted!</h3>
                    <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-8">
                      Thank you for requesting a demo. An expert from SelfX will contact you shortly to coordinate a live call.
                    </p>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full text-sm font-bold border border-zinc-200 text-zinc-700 hover:text-zinc-900 transition-colors cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* Section 2: Logo Cloud Bar */}
        <section className="w-full mt-24 mb-4">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
            
            <p className="text-sm font-medium text-zinc-700 mb-8 text-center flex items-center flex-wrap justify-center gap-y-2">
              Over 
              <span className="bg-white border border-zinc-200/80 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm mx-1.5">
                100+ companies
              </span> 
              prefer <span className="text-red-600 font-bold mx-1.5">SelfX AI</span> to automate their sales and customer support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {logos.map((logo, idx) => (
                <div key={idx} className="flex items-center text-zinc-800 font-semibold tracking-tight text-lg cursor-default">
                  {logo.icon}
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
