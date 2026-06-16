"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProductFinder() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [answers, setAnswers] = useState({
    businessType: "",
    volume: "",
    goal: "",
  });

  const handleSelect = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setTimeout(() => {
      setQuizStep((prev) => prev + 1);
    }, 300);
  };

  const resetQuiz = () => {
    setAnswers({ businessType: "", volume: "", goal: "" });
    setQuizStep(1);
  };

  const getRecommendation = () => {
    if (answers.businessType === "cafes" || answers.volume === "low") {
      return {
        title: "SelfX Counter Kiosk + QR Tableside Menu",
        desc: "Ideal for fast checkouts and espresso lines. Customers scan to order at tables, reducing cashier load.",
      };
    }
    if (answers.businessType === "retail" || answers.goal === "speed") {
      return {
        title: "SelfX Dual-Screen POS System & Self-Checkout",
        desc: "Optimized for extreme transaction throughput, rapid scanning, and card payments.",
      };
    }
    return {
      title: "SelfX Premium Floor Kiosk + Kitchen Display KDS",
      desc: "Our complete restaurant package. Links kiosk orders directly to the kitchen display system.",
    };
  };

  return (
    <section className="bg-white pt-0 pb-1 px-6 md:px-12 w-full relative z-10">
      
      {/* Polar-Style Rounded Dark Banner - Touching bottom of hero section (pt-0) */}
      <div className="relative w-full min-h-[75vh] md:h-[calc(100vh-120px)] bg-zinc-950 rounded-[2.5rem] overflow-hidden border border-zinc-900 shadow-2xl p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-900/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-zinc-900/40 rounded-full filter blur-3xl pointer-events-none" />

        {/* Left: Product Finder Copy */}
        <div className="flex flex-col items-start text-left max-w-xl relative z-10">
          <span className="text-red-500 font-bold text-xs uppercase tracking-widest block mb-4">
            Find your perfect partner
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            SelfX Product Finder
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
            Answer a few simple questions and we'll find the right kiosk and tabletop configuration for your restaurant.
          </p>

          <button
            onClick={() => {
              resetQuiz();
              setIsQuizOpen(true);
            }}
            className="px-8 py-3.5 rounded-full text-base font-bold bg-red-600 hover:bg-red-700 text-white transition-all hover:scale-102 active:scale-98 shadow-lg shadow-red-600/15"
          >
            Take The Quiz
          </button>
        </div>

        {/* Right: QR Menu Mockup - Clean replica styled watches without text overlay and animation */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center h-[280px] md:h-[380px] lg:h-full z-10">
          <div className="relative w-[280px] sm:w-[350px] lg:w-[420px] aspect-square rounded-[2rem] p-2 shadow-2xl overflow-hidden">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              <Image
                src="/selfx.png"
                alt="SelfX Contactless QR Menu"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          {/* Subtle glowing ring behind image */}
          <div className="absolute -z-10 w-[300px] sm:w-[380px] aspect-square rounded-full border border-red-600/5 blur-xs" />
        </div>

      </div>

      {/* Interactive Quiz Modal */}
      <AnimatePresence>
        {isQuizOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-[2rem] p-8 md:p-10 shadow-2xl text-white overflow-hidden"
            >
              <button
                onClick={() => setIsQuizOpen(false)}
                className="absolute top-6 right-6 text-zinc-550 hover:text-white"
                aria-label="Close Quiz"
              >
                <X className="w-6 h-6" />
              </button>

              {quizStep <= 3 ? (
                <div>
                  <div className="flex justify-between items-center mb-8 border-b border-zinc-900 pb-4">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                      Step {quizStep} of 3
                    </span>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`w-4 h-1 rounded-full ${
                            step <= quizStep ? "bg-red-600" : "bg-zinc-800"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Step 1: Business Type */}
                  {quizStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-lg font-black tracking-tight">What type of business do you run?</h3>
                      <div className="grid grid-cols-1 gap-3">
                        <button
                          onClick={() => handleSelect("businessType", "restaurants")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          Restaurant / Casual Dining
                        </button>
                        <button
                          onClick={() => handleSelect("businessType", "cafes")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          Café / Boba Tea / Bakery
                        </button>
                        <button
                          onClick={() => handleSelect("businessType", "retail")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          Retail / Outlet Store
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Volume */}
                  {quizStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-lg font-black tracking-tight">What is your estimated monthly order volume?</h3>
                      <div className="grid grid-cols-1 gap-3">
                        <button
                          onClick={() => handleSelect("volume", "low")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          Under 1,500 orders
                        </button>
                        <button
                          onClick={() => handleSelect("volume", "medium")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          1,500 – 5,000 orders
                        </button>
                        <button
                          onClick={() => handleSelect("volume", "high")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          5,000+ orders
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Goal */}
                  {quizStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className="text-lg font-black tracking-tight">What is your primary optimization goal?</h3>
                      <div className="grid grid-cols-1 gap-3">
                        <button
                          onClick={() => handleSelect("goal", "workload")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          Reduce cashier workload
                        </button>
                        <button
                          onClick={() => handleSelect("goal", "speed")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          Speed up transaction checkout
                        </button>
                        <button
                          onClick={() => handleSelect("goal", "revenue")}
                          className="w-full text-left px-5 py-4 rounded-xl border border-zinc-850 bg-zinc-900 hover:border-red-600 transition-colors"
                        >
                          Boost average order billing value
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-red-950 border border-red-500/30 flex items-center justify-center text-red-500 mb-6">
                    <CheckCircle className="w-7 h-7 stroke-[2.5]" />
                  </div>

                  <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Your Configuration Recommendation</h3>
                  <h4 className="text-2xl font-black tracking-tight leading-snug mb-4">{getRecommendation().title}</h4>
                  <p className="text-sm text-zinc-450 leading-relaxed max-w-sm mb-8">{getRecommendation().desc}</p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Link
                      href="/book-demo"
                      onClick={() => setIsQuizOpen(false)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-full text-sm font-bold bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-102"
                    >
                      Book Free Setup Demo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={resetQuiz}
                      className="flex-1 py-3.5 rounded-full text-sm font-bold border border-zinc-850 text-zinc-400 hover:text-white transition-colors"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
