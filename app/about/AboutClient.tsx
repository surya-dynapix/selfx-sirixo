"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useSiteContent } from "@/context/SiteContentContext";

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroContent = useSiteContent("hero", {
    image: "/about hero.png",
    headline: "The pursuit of <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600\">perfection.</span>",
    subtitle: "At SelfX, we believe that extraordinary hospitality deserves extraordinary technology."
  });

  const missionContent = useSiteContent("mission", {
    text: "For the ambitious founders, the visionaries, and the operators who refuse to compromise. We exist to elevate the physical commerce experience, turning everyday transactions into <span class=\"text-white\">moments of magic.</span>"
  });

  const teamContent = useSiteContent("team", {
    title1: "We are pioneers.",
    desc1: "We began SelfX because the hospitality industry was stuck in the past. We are rewriting the rules of what POS hardware can be.",
    image1: "/about1.png",
    title2: "We are engineering.",
    desc2: "Military-grade reliability meets elegant consumer design. Every millimeter is obsessed over by our elite hardware and software teams.",
    image2: "/about 2.png",
    title3: "We are passionate.",
    desc3: "We thrive on seeing our partners succeed. From local cafes to global franchises, your growth is the metric that matters most to us.",
    image3: "/about3.jpeg"
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col" ref={containerRef}>
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* 1. Full-Bleed Hero Section */}
        <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src={heroContent.image} 
              alt="SelfX Hero" 
              fill 
              className="object-cover object-top scale-105" 
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 text-center px-6 mt-12 md:mt-24 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tighter text-white drop-shadow-xl mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: heroContent.headline }} />
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
              {heroContent.subtitle}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-32 z-10 animate-bounce"
          >
            <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>
        </section>

        {/* 2. Introduction / Mission Section */}
        <section className="bg-black py-24 md:py-32 relative z-10 -mt-1">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl text-zinc-400 font-medium leading-relaxed tracking-tight"
              dangerouslySetInnerHTML={{ __html: missionContent.text }}
            />
          </div>
        </section>

        {/* 3. Stacked Value Cards */}
        <section className="bg-black py-12 md:py-24 px-6 md:px-12 flex flex-col items-center gap-12 md:gap-16">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl aspect-[4/5] md:aspect-[21/9] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <Image 
              src={teamContent.image1} 
              alt="We are pioneers" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            
            <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full md:w-2/3">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">{teamContent.title1}</h2>
              <p className="text-lg md:text-xl text-zinc-300 font-medium mb-8 max-w-lg leading-relaxed">
                {teamContent.desc1}
              </p>
              <button className="px-8 py-3 md:py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold tracking-wide hover:bg-white hover:text-black transition-all flex items-center gap-2 group/btn w-fit">
                Read our manifesto
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl aspect-[4/5] md:aspect-[21/9] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <Image 
              src={teamContent.image2} 
              alt="We are engineering" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            
            <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full md:w-2/3">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">{teamContent.title2}</h2>
              <p className="text-lg md:text-xl text-zinc-300 font-medium mb-8 max-w-lg leading-relaxed">
                {teamContent.desc2}
              </p>
              <button className="px-8 py-3 md:py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold tracking-wide hover:bg-white hover:text-black transition-all flex items-center gap-2 group/btn w-fit">
                Explore the hardware
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl aspect-[4/5] md:aspect-[21/9] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <Image 
              src={teamContent.image3} 
              alt="We are passionate" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            
            <div className="absolute bottom-0 left-0 p-10 md:p-16 w-full md:w-2/3">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">{teamContent.title3}</h2>
              <p className="text-lg md:text-xl text-zinc-300 font-medium mb-8 max-w-lg leading-relaxed">
                {teamContent.desc3}
              </p>
              <button className="px-8 py-3 md:py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold tracking-wide hover:bg-white hover:text-black transition-all flex items-center gap-2 group/btn w-fit">
                Meet the team
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </section>

        {/* 4. Stats Section */}
        <section className="relative py-32 mt-12 bg-zinc-900 border-y border-zinc-800 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <Image 
              src="/about4.jpeg" 
              alt="Background texture" 
              fill 
              className="object-cover object-center grayscale" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/90 to-zinc-950 z-0" />
          
          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Some undeniable truths.</h2>
              <p className="text-zinc-400 mt-4 text-lg">The numbers that prove our unwavering commitment to excellence.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
              <div className="pt-8 md:pt-0">
                <h3 className="text-5xl md:text-7xl font-black text-red-500 mb-2">270<span className="text-white">+</span></h3>
                <p className="text-lg font-bold text-zinc-400 uppercase tracking-widest">Installations</p>
                <p className="text-zinc-500 mt-2 text-sm">Across top enterprise spaces</p>
              </div>
              <div className="pt-8 md:pt-0">
                <h3 className="text-5xl md:text-7xl font-black text-red-500 mb-2">₹19<span className="text-white">cr</span></h3>
                <p className="text-lg font-bold text-zinc-400 uppercase tracking-widest">GMV Processed</p>
                <p className="text-zinc-500 mt-2 text-sm">Flowing securely through our systems</p>
              </div>
              <div className="pt-8 md:pt-0">
                <h3 className="text-5xl md:text-7xl font-black text-red-500 mb-2">99.9<span className="text-white">%</span></h3>
                <p className="text-lg font-bold text-zinc-400 uppercase tracking-widest">Uptime SLA</p>
                <p className="text-zinc-500 mt-2 text-sm">Reliability you can bank on</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "Where it all began" Story Section */}
        <section className="bg-white text-zinc-900 py-32">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 sticky top-32">
                  Where it<br/>all began.
                </h2>
              </div>
              <div className="lg:w-2/3">
                <div className="prose prose-lg prose-zinc max-w-none text-zinc-500 font-medium leading-relaxed column-count-1 md:columns-2 gap-12">
                  <p className="mb-6 break-inside-avoid">
                    In 2023, we looked at the landscape of hospitality technology and saw a sea of mediocrity. Clunky, slow, and ugly point-of-sale systems were the norm. We realized that while consumer technology had leaped lightyears ahead, the tools empowering businesses were left in the dust.
                  </p>
                  <p className="mb-6 break-inside-avoid">
                    We set out to build a completely new kind of company. One that treats a POS terminal not just as a utilitarian cash register, but as a beautiful, high-performance centerpiece of the dining experience. We believe that stunning hardware inspires employees to perform better and signals to customers that they are in a premium environment.
                  </p>
                  <p className="mb-6 break-inside-avoid">
                    But beauty without brains is useless. So we paired our breathtaking hardware with a lightning-fast, cloud-native software architecture designed to shave seconds off every transaction, bust queues effortlessly, and eliminate order errors.
                  </p>
                  <p className="break-inside-avoid">
                    Today, SelfX powers hundreds of high-volume food courts, tech park cafeterias, and university dining halls. And we are just getting started. Our roadmap is packed with innovations that will continue to redefine physical commerce for decades to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
