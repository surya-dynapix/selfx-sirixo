"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState("black");
  const [wordIndex, setWordIndex] = useState(0);

  const words = ["ENJOY", "SHARE", "SMILE", "RELAX", "LOVE"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      question: "How difficult is it to install the SelfX kiosk?",
      answer: "Installation is incredibly simple. Just plug it into a standard power outlet, connect it to your Wi-Fi network, and log in to your account. You can be up and running in under 10 minutes."
    },
    {
      question: "Does it integrate with my existing POS?",
      answer: "Yes, SelfX seamlessly integrates with major POS systems including Toast, Square, Clover, and Revel, ensuring your kitchen gets tickets instantly without any double entry."
    },
    {
      question: "Is there a monthly subscription fee?",
      answer: "No! Once you purchase the SelfX Kiosk Pro hardware, our core self-ordering software is completely subscription-free. We only charge a standard payment processing rate on transactions."
    },
    {
      question: "Can I customize the menu interface?",
      answer: "Absolutely. Our mobile dashboard allows you to fully brand the kiosk interface with your logo, brand colors, and custom high-resolution food photography."
    },
    {
      question: "What happens if the hardware breaks?",
      answer: "All SelfX kiosks come with a 2-year commercial warranty. If anything goes wrong, we'll overnight a replacement unit to ensure your business doesn't miss a beat."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col w-full overflow-x-hidden">
      <Navbar />

      {/* Sticky Subnav */}
      <div className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 hidden md:flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-6 text-sm font-bold text-zinc-600">
          <span className="text-zinc-900 border-b-2 border-red-600 pb-1">Overview</span>
          <a href="#design" className="hover:text-zinc-900 transition-colors">Design</a>
          <a href="#tech-specs" className="hover:text-zinc-900 transition-colors">Tech Specs</a>
          <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
        </div>
        <div>
          <span className="text-lg font-black mr-4">$1,499</span>
          <button className="px-5 py-2 rounded-full bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      <main className="flex-grow w-full">
        
        {/* SECTION 1: HERO & GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Image Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-[#F6F6F6] rounded-xl flex items-center justify-center p-12 aspect-[4/3] relative">
                <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black px-2 py-1 rounded">3D View</span>
                <video autoPlay loop muted src="/SELFX_kiosk_machine_showcase_202606031121.mp4" className="w-10/5 object-contain mix-blend-multiply" />
              </div>
              {/* <div className="rounded-xl flex items-center justify-center p-8 aspect-[9/11]">
                <img src="/selfx right.png" alt="SelfX Kiosk Side" className="w-3/4 object-contain mix-blend-multiply" />
              </div>
              <div className="bg-[#F6F6F6] rounded-xl flex items-center justify-center p-8 aspect-square">
                <img src="/pos-software.png" alt="SelfX Software" className="w-full object-contain" />
              </div>
              <div className="bg-[#F6F6F6] rounded-xl flex items-center justify-center p-8 aspect-square">
                <img src="/kitchen-display.png" alt="SelfX Details" className="w-full object-contain" />
              </div>
              <div className="bg-zinc-200 rounded-xl overflow-hidden aspect-square">
                <img src="/gallery-dining.png" alt="SelfX in use" className="w-full h-full object-cover" />
              </div> */}
            </div>

            {/* Right Column: Product Info */}
            <div className="lg:col-span-5 flex flex-col pt-4">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-2">SelfX Kiosk</h1>
              <div className="flex items-center gap-1 text-red-500 mb-4">
                {"★★★★★".split("").map((star, i) => <span key={i} className="text-lg">{star}</span>)}
                <span className="text-sm font-semibold text-zinc-500 ml-2">(124 reviews)</span>
              </div>
              
              <p className="text-zinc-600 text-base leading-relaxed font-medium mb-8">
                Automate ordering, eliminate queues, and increase average ticket sizes with our flagship smart kiosk. Built for high-volume restaurants.
              </p>

              <div className="border-t border-b border-zinc-200 py-6 mb-8">
                <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-4">Choose Color</h3>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedColor("black")}
                    className={`w-10 h-10 rounded-full bg-zinc-950 border-2 ${selectedColor === "black" ? "border-red-600 ring-2 ring-red-600/20" : "border-transparent"}`}
                  />
                  <button 
                    onClick={() => setSelectedColor("white")}
                    className={`w-10 h-10 rounded-full bg-zinc-100 border-2 ${selectedColor === "white" ? "border-red-600 ring-2 ring-red-600/20" : "border-zinc-300"}`}
                  />
                </div>
              </div>

              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Total Price</p>
                  <p className="text-4xl font-black text-zinc-900">$1,499</p>
                </div>
              </div>

              <button className="w-full py-4 rounded-full bg-red-600 text-white text-lg font-black hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 mb-4">
                Add to Cart
              </button>
              <p className="text-center text-xs font-medium text-zinc-500">
                Free shipping. 30-day money-back guarantee.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 2: RED GRADIENT BANNER */}
        <section className="w-full bg-gradient-to-br from-red-500 via-red-600 to-red-900 py-32 md:py-48 flex items-center justify-center text-center px-6">
           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-white tracking-tighter leading-[0.85] uppercase flex flex-col items-center select-none">
             <span>ORDER.</span>
             <span>EAT.</span>
             <span className="relative h-[1.15em] w-full flex items-center justify-center overflow-hidden">
               <AnimatePresence mode="wait">
                 <motion.span
                   key={wordIndex}
                   initial={{ y: 60, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: -60, opacity: 0 }}
                   transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                   className="absolute text-white"
                 >
                   {words[wordIndex]}.
                 </motion.span>
               </AnimatePresence>
             </span>
             <span>REPEAT.</span>
           </h2>
        </section>

        {/* SECTION 3: DEEP RED FEATURE */}
        <section className="w-full bg-[#B30000] text-white py-24 md:py-40 px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h3 className="text-sm font-black tracking-widest uppercase text-white/70 mb-4">SelfX Kiosk Pro</h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-6">
              Takes up no space.<br />Does everything.
            </h2>
            <p className="text-lg md:text-xl font-medium text-white/80 max-w-2xl mb-16">
              Sleek, slim profile. Powerful performance.
            </p>

            {/* Video/Image Placeholder representing the product focus */}
            <div className="w-full max-w-3xl aspect-[9/9] rounded-2xl mb-20 overflow-hidden flex items-center justify-center relative">
               <img src="/selfx-kiosk.png" alt="Hero Kiosk" className="w-full h-full object-cover opacity-100" />
           
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl text-center">
              <div className="bg-[#990000] p-10 rounded-3xl">
                <h4 className="text-2xl font-black mb-3">Subscription-Free</h4>
                <p className="text-white/70 font-medium">Buy the hardware once, use the core ordering software forever.</p>
              </div>
              <div className="bg-[#990000] p-10 rounded-3xl">
                <h4 className="text-2xl font-black mb-3">Instant Setup</h4>
                <p className="text-white/70 font-medium">Plug it in, connect to Wi-Fi, and start taking orders immediately.</p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 5: MASONRY LIFESTYLE */}
        <section className="w-full bg-white py-24 md:py-40 px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 mb-16 max-w-4xl mx-auto leading-[1.1]">
              Restaurant tech doesn't have to look like restaurant tech.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden">
                <img src="/gallery-dining.png" alt="Lifestyle 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden md:translate-y-12">
                <img src="/gallery-boba.png" alt="Lifestyle 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] bg-zinc-100 rounded-2xl overflow-hidden">
                <img src="/qr-menu.png" alt="Lifestyle 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: MAKE IT PERSONAL */}
        <section id="design" className="w-full bg-[#F5F5F7] py-24 md:py-40 px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-6">Make It Personal</h2>
            <p className="text-lg font-medium text-zinc-600 mb-16 max-w-2xl mx-auto">
              Choose from wall-mounted or freestanding floor configurations to perfectly match your restaurant's spatial flow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-12 rounded-[3rem] shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/wallmount.png" alt="Wall Mount" className="w-2/3 object-contain mix-blend-multiply" />
                <p className="mt-8 font-black text-xl">Wall Mount</p>
              </div>
              <div className="bg-white p-12 rounded-[3rem] shadow-sm aspect-square flex flex-col items-center justify-center">
                <img src="/selfx-kiosk.png" alt="Floor Stand" className="w-2/3 object-contain mix-blend-multiply" />
                <p className="mt-8 font-black text-xl">Floor Stand</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: BEIGE HARDWARE DETAIL */}
        <section className="w-full bg-[#E8E6E1] py-32 md:py-48 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-black tracking-widest uppercase text-red-600 mb-6">Hardware Built For Chaos</h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-[1.05] mb-8">
              Tough. Sleek. Reliable.<br />Forget about it.
            </h2>
            <p className="text-lg md:text-xl font-medium text-zinc-700 leading-relaxed max-w-2xl mx-auto">
              Commercial-grade 27" touchscreen that effortlessly withstands spills, high-volume tapping, and endless double shifts without breaking a sweat.
            </p>
          </div>
        </section>

        {/* SECTION 8: RED ALWAYS ON BANNER */}
        <section className="w-full bg-gradient-to-b from-[#D41400] to-[#FF4D00] py-32 md:py-48 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-black tracking-widest uppercase text-white/70 mb-6">Stay Online</h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-8">
              It's always on.<br />And always ready.
            </h2>
            <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
              SelfX kiosks never take a break. They are primed and ready for the 8 AM coffee rush and the 2 AM late-night crowd.
            </p>
          </div>
        </section>

        {/* SECTION 9: SOFTWARE APP SHOWCASE */}
        <section className="w-full bg-white py-32 md:py-48 px-6 text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <h3 className="text-sm font-black tracking-widest uppercase text-red-600 mb-6">SelfX Portal</h3>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-[1.05] mb-8">
              Where it all makes sense.
            </h2>
            <p className="text-lg md:text-xl font-medium text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-20">
              Manage all your menus, track real-time sales, and update prices across all your locations simultaneously from one powerful dashboard.
            </p>
            
            <div className="w-full max-w-sm mx-auto relative rounded-[3rem] shadow-2xl overflow-hidden border-8 border-zinc-900">
               <img src="/delivery-app.png" alt="Mobile Dashboard" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* SECTION 10: RED CTA GRADIENT */}
        <section className="w-full bg-gradient-to-br from-red-500 via-red-600 to-red-900 py-40 md:py-56 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-black tracking-widest uppercase text-white/80 mb-6">Fluent in Hospitality</h3>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-12">
              Fluent in customer service<br />since day one.
            </h2>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mt-24 shadow-sm">
              Now it's your turn.
            </h1>
          </div>
        </section>

        {/* SECTION 11: DARK SPECS & FAQ */}
        <section id="tech-specs" className="w-full bg-[#111111] text-white py-24 md:py-40 px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Tech Specs Grid */}
            <div className="border-t-4 border-white pt-12 mb-32">
              <h2 className="text-3xl font-black mb-12">Tech Specs</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Display</h4>
                  <p className="text-xl font-black">27" 4K UHD Touch</p>
                  <p className="text-sm font-medium text-zinc-400 mt-1">Anti-glare, 10-point capacitive</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Connectivity</h4>
                  <p className="text-xl font-black">Wi-Fi 6 & Ethernet</p>
                  <p className="text-sm font-medium text-zinc-400 mt-1">Bluetooth 5.0 fallback</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Payments</h4>
                  <p className="text-xl font-black">NFC / EMV</p>
                  <p className="text-sm font-medium text-zinc-400 mt-1">Apple Pay, Google Pay</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Dimensions</h4>
                  <p className="text-xl font-black">38" x 14" x 8"</p>
                  <p className="text-sm font-medium text-zinc-400 mt-1">Wall mount configuration</p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div id="faq" className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-black text-center mb-16">FAQ</h2>
              <div className="flex flex-col border-t border-zinc-800">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div key={index} className="border-b border-zinc-800 py-6">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                      >
                        <span className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? "text-red-500" : "text-white group-hover:text-red-400"}`}>
                          {faq.question}
                        </span>
                        <div className="ml-4 text-zinc-500 group-hover:text-white transition-colors">
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
                            <p className="text-zinc-400 text-base mt-4 leading-relaxed font-medium">
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

          </div>
        </section>

      </main>

      {/* Dark Footer override just for this page so it flows nicely from the black section, but our standard Footer component might be okay. Let's keep standard footer. */}
      <Footer />
    </div>
  );
}
