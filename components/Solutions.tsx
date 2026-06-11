"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    id: 1,
    title: "SelfX POS Cloud Software & Hardware",
    description: "The ultimate cloud POS system for rapid checkout, real-time analytics, and fluid inventory tracking. Hand-in-hand integration with sleek hardware devices.",
    image: "/selfox-pos (1).jpg",
    accent: "Hardware & Cloud POS",
    quote: "Our front counters have never run smoother. Staff training time went from days to minutes, and the offline transactions buffer ensures we never lose a sale even if internet feeds drop.",
    author: "Elena Chen, Yume Boba Tea",
    details: [
      "Real-time split billing and table mapping",
      "Robust offline operations buffering",
      "Instant inventory sync and stock alerts",
      "Live integration with kitchen thermal printers"
    ]
  },
  {
    id: 2,
    title: "Your Own Restaurant Delivery App / Website",
    description: "Reclaim your profits from third-party aggregators. Sell directly to your customers with your branded, ultra-fast ordering app and responsive web portal.",
    image: "/selfox-mobile-delivry-app.jpg",
    accent: "Branded Digital Ordering",
    quote: "Reclaiming our digital ordering channel with a custom branded app saved us over ₹45,000 in monthly aggregator commissions. Customers love the direct checkout flow.",
    author: "Marcus Lindqvist, Nordic Kitchen",
    details: [
      "Zero commission fees per digital order",
      "Complete ownership of client email & phone data",
      "Interactive coupon and push notification engine",
      "Mobile-first responsive ordering interface"
    ]
  },
  {
    id: 3,
    title: "Kitchen Display System / Digital Signage",
    description: "Eliminate paper ticket errors completely. Sync front-of-house orders directly with kitchen monitors for zero delays and seamless coordination.",
    image: "/selfox-mobile-kitchen-display.jpg",
    accent: "Kitchen Operations KDS",
    quote: "No more lost paper tickets or handwritten order confusions. The color-coded wait timers keep our line cooks perfectly synchronized during busy weekend dinner rushes.",
    author: "Chef David Miller, Gastro Pub",
    details: [
      "Dynamic color-coded order wait timers",
      "Acoustic line alerts for fresh incoming items",
      "Synchronized chef station item grouping",
      "Zero delays between counter kiosk and line assembly"
    ]
  },
  {
    id: 4,
    title: "Digital Contactless QR Tabletop Menu",
    description: "Empower tableside ordering. Customers scan, browse, customize orders, and pay instantly without waiting for a server, increasing table turn speed.",
    image: "/selfox-pos-qrocde.-jpg.jpg",
    accent: "Tableside Smart Menu",
    quote: "By placing smart QR tabletop cards, our table turnover speeds increased by 25%. Customers select modifiers, place orders, and checkout instantly without server delay.",
    author: "Sara Varma, The Daily Brew",
    details: [
      "Instant cloud-based digital menu price updates",
      "Full customization options (add-ons & allergies)",
      "Instant checkout via digital wallets or UPI",
      "Automatic physical table number routing to KDS"
    ]
  }
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[96rem] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest block mb-3">
            System Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-950 mb-6">
            Explore More Restaurant <span className="text-red-600">Solutions</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-650 leading-relaxed font-normal">
            Streamline your food business operations, lower overhead costs, and elevate the order journey with our interconnected smart systems.
          </p>
        </div>

        {/* 4 Cards Grid - One Row Only */}
        <div className="w-full overflow-x-auto pb-8">
          <div className="grid grid-cols-4 gap-4 lg:gap-8 min-w-[1200px] lg:min-w-0">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="relative rounded-[2rem] overflow-hidden border border-zinc-200/80 shadow-lg bg-zinc-50 group hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col"
              >
                {/* Title positioned at top left */}
                <div className="relative p-6 lg:p-8 pb-2 lg:pb-4 bg-zinc-50 flex-grow">
                  <h3 className="text-lg lg:text-xl font-semibold text-zinc-950 tracking-tight leading-snug pr-4">
                    {sol.title}
                  </h3>
                </div>

                {/* Image below text - Full Width */}
                <div className="relative w-full aspect-[5/4] sm:aspect-[3/3] overflow-hidden bg-white border-t border-zinc-200/50">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    sizes="(max-width: 1024px) 300px, 25vw"
                    className="object-cover object-center transition-transform duration-750 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Circular white plus button positioned at bottom right */}
                <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-10 flex justify-end">
                  <button
                    onClick={() => setActiveSolution(sol)}
                    className="w-12 h-12 rounded-full bg-white border border-zinc-200 text-zinc-900 flex items-center justify-center shadow-lg hover:bg-zinc-50 hover:scale-105 hover:border-zinc-300 transition-all active:scale-95 cursor-pointer"
                    aria-label={`View details for ${sol.title}`}
                  >
                    <Plus className="w-6 h-6 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Details Interactive Modal Popup */}
      <AnimatePresence>
        {activeSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-y-visible"
            >
              {/* Black circular close button at top right */}
              <button
                onClick={() => setActiveSolution(null)}
                className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Left Column: Premium Mockup Image Container */}
              <div className="w-full md:w-1/2 relative bg-zinc-50 aspect-video md:aspect-auto min-h-[250px] md:min-h-[480px]">
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  priority
                  className="object-contain p-4 md:p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Premium Text Details */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-red-50 border border-red-200/50 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                    {activeSolution.accent}
                  </span>
                  
                  {/* Title - semibold */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 mb-4 tracking-tight leading-snug">
                    {activeSolution.title}
                  </h3>

                  {/* Highlights Checklist */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {activeSolution.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-700 leading-normal">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Quote block */}
                  <div className="border-t border-zinc-100 pt-6 mt-6">
                    <p className="text-sm italic text-zinc-500 leading-relaxed font-normal mb-3">
                      "{activeSolution.quote}"
                    </p>
                    <p className="text-xs font-bold text-zinc-900">
                      — {activeSolution.author}
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex">
                  <a
                    href="/book-demo"
                    onClick={() => setActiveSolution(null)}
                    className="group flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-sm font-bold bg-red-600 text-white hover:bg-red-700 transition-all hover:scale-102 active:scale-98"
                  >
                    Request Free Setup Demo
                    <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
