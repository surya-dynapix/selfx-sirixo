"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "" });
    }, 1200);
  };

  return (
    <section className="py-24 bg-zinc-50 relative border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Details */}
          {/* <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">
              Ready to Grow With Your Business?
            </h2>
            <p className="text-lg text-zinc-500 font-medium mb-10 leading-relaxed">
              A robust Point-of-Sale ecosystem built to scale with your ambitions. Fill out the form, and our sales team will get back to you shortly.
            </p>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-zinc-900">24/7 Dedicated Support</p>
                <p className="text-sm text-zinc-500">We're here when you need us.</p>
              </div>
            </div>
          </div> */}

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7">
            <div className="w-full bg-white border border-zinc-200 p-8 sm:p-10 rounded-[2rem] shadow-xl">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h3 className="text-2xl font-black text-zinc-900 mb-2">Get in Touch</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">First Name *</label>
                        <input
                          type="text" required value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Last Name *</label>
                        <input
                          type="text" required value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Work Email *</label>
                        <input
                          type="email" required value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Phone Number</label>
                        <input
                          type="tel" value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Company Name *</label>
                        <input
                          type="text" required value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Job Title</label>
                        <input
                          type="text" value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group mt-4 w-full md:w-auto md:self-start py-4 px-8 rounded-full text-sm font-bold bg-red-600 text-white hover:bg-red-700 transition-all shadow-md disabled:opacity-70 flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-zinc-950 mb-2">Message Sent!</h3>
                    <p className="text-zinc-500 text-sm mb-6">We will reach out to you within 24 hours.</p>
                    <button onClick={() => setIsSubmitted(false)} className="text-sm font-bold text-red-600">Submit another</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
