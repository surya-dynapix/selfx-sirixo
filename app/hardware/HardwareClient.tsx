"use client";

import { motion } from "framer-motion";
import { 
  ScanLine, Wifi, Battery, CreditCard, ChevronRight,
  MonitorPlay, ShieldAlert, ThermometerSun, Maximize, PlaySquare,
  Check,
  ShoppingCart, Star, ShieldCheck, Truck,
  Monitor, Printer, Smartphone, Cpu, 
  Coffee, Store, GraduationCap, UtensilsCrossed, 
  Cloud, Server,
  QrCode, Receipt, Bell, LayoutDashboard, Settings,
  ArrowRight, Users, Database, Headset, TrendingUp, CheckCircle2
} from "lucide-react";
import Image from "next/image";
import UniversalFaq from "@/components/UniversalFaq";
import { useCart } from "@/context/CartContext";

// Local helpers
function LocalCheckCircle2(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function LocalCheckCircle() {
  return (
    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function HardwareClient({ products }: { products: any[] }) {
  const { addItem } = useCart();
  
  // Extract specific products to keep layout intact
  const b1 = products.find(p => p.id === "bundle-1") || { name: '15" Tablet POS Starter Bundle', price: 799, image: "/selfx-kiosk.png", category: "Starter Bundle" };
  const b2 = products.find(p => p.id === "bundle-2") || { name: "Dual Data Screen POS Bundle", price: 1299, image: "/Ultra-realistic_premium_product_photography_of_202606091839.jpeg", category: "Pro Bundle" };
  const pos1 = products.find(p => p.id === "pos-15-tablet") || { name: '15" Tablet POS', price: 699, image: "/Ultra-realistic_premium_product_photography_of_202606091844.jpeg", category: "Top Rated" };
  const pos2 = products.find(p => p.id === "pos-15-dual") || { name: '15.6" Dual Screen POS', price: 1199, image: "/Ultra-realistic_premium_product_photography_of_202606091847.jpeg", category: "Top Pick" };
  const k32 = products.find(p => p.id === "kiosk-k32") || { name: "K32 Premium Kiosk", price: 2799, image: "/selfx-kiosk.png", category: "Premium" };

  const gridProducts = products.filter(p => !["bundle-1", "bundle-2", "pos-15-tablet", "pos-15-dual", "kiosk-k32"].includes(p.id) && p.category !== "Accessories");
  const accessoriesList = products.filter(p => p.category === "Accessories");

  return (
    <div className="flex flex-col w-full">
      {/* Product JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                "name": "15\" Tablet POS Starter Bundle",
                "image": "https://selfx.com/selfx-kiosk.png",
                "description": "Built-in Printer & QR Scanner | Plug & Play setup",
                "brand": { "@type": "Brand", "name": "SelfX" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://selfx.com/hardware",
                  "priceCurrency": "USD",
                  "price": "799.00",
                  "availability": "https://schema.org/InStock"
                }
              },
              {
                "@type": "Product",
                "name": "Dual Data Screen POS Bundle",
                "image": "https://selfx.com/Ultra-realistic_premium_product_photography_of_202606091839.jpeg",
                "description": "Customer facing display | Heavy duty operations",
                "brand": { "@type": "Brand", "name": "SelfX" },
                "offers": {
                  "@type": "Offer",
                  "url": "https://selfx.com/hardware",
                  "priceCurrency": "USD",
                  "price": "1299.00",
                  "availability": "https://schema.org/InStock"
                }
              }
            ]
          })
        }}
      />
      
      {/* 1. Self-Service Kiosks */}
      <div className="bg-[#F8F9FA] text-zinc-950 font-sans w-full overflow-hidden">
        
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/Ultra-premium_futuristic_hero_banner_for_202606102124.jpeg" 
            alt="Hardware Banner" 
            fill 
            className="object-cover object-center"
            priority 
          />
          {/* Dark overlay for perfect text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
              From startup POS Hardware to full multi-store systems.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-medium mb-10 max-w-xl drop-shadow-md">
              Enterprise-grade kiosks and self-ordering terminals designed to eliminate queues and increase average ticket sizes.
            </p>
            <button className="px-10 py-4 bg-white hover:bg-zinc-200 text-black rounded-full font-bold text-lg tracking-wide shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
              Shop All Kiosks
            </button>
          </div>
        </div>
      </section>

      {/* 2. Best Offers Bundles (UI updated to match Image 2) */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          
          {/* Bundle 1 */}
          <div className="bg-white rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-16 ml-3 md:ml-0">
            
            {/* BEST OFFER Ribbon */}
            <div className="absolute top-10 -left-3 md:-left-4 z-20">
              <div className="bg-[#b91c1c] text-white font-bold text-xl lg:text-2xl tracking-wider px-8 py-4 shadow-lg rounded-r-lg relative z-10">
                BEST OFFER!
              </div>
              <div className="absolute top-full left-0 w-0 h-0 border-t-[12px] border-t-[#7f1d1d] border-l-[12px] md:border-l-[16px] border-l-transparent z-0"></div>
            </div>
            
            <div className="w-full md:w-5/12 flex items-center justify-center relative pt-16 lg:pt-8 min-h-[350px]">
              <div className="w-full h-full absolute inset-0">
                 <Image src="/selfx-kiosk.png" alt="POS" fill className="object-contain drop-shadow-xl" />
              </div>
            </div>
            
            <div className="w-full md:w-7/12 flex flex-col items-start text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-4">{b1.name}</h3>
              <p className="text-lg font-medium text-zinc-600 mb-6">Built-in Printer & QR Scanner | Plug & Play setup</p>
              
              <hr className="w-full border-t-2 border-zinc-200 mb-6" />
              
              <h4 className="text-lg font-bold text-zinc-900 mb-4">Complete POS Starter Package Includes:</h4>
              <ul className="flex flex-col gap-4 mb-8">
                 <li className="flex items-start gap-3 text-base text-zinc-800 font-medium">
                   <svg className="w-4 h-4 text-zinc-800 shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                   15" Android POS Terminal
                 </li>
                 <li className="flex items-start gap-3 text-base text-zinc-800 font-medium">
                   <svg className="w-4 h-4 text-zinc-800 shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                   58mm Built-in Thermal Receipt Printer
                 </li>
                 <li className="flex items-start gap-3 text-base text-zinc-800 font-medium">
                   <svg className="w-4 h-4 text-zinc-800 shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                   Free 1-Year Cloud Software License
                 </li>
              </ul>
              
              <hr className="w-full border-t-2 border-zinc-200 mb-6" />
              
              <div className="flex items-end gap-4 mb-8">
                <span className="text-3xl font-bold text-zinc-400 line-through decoration-zinc-400 decoration-2">₹999</span>
                <span className="text-6xl font-black text-zinc-900 leading-none tracking-tighter">₹{b1.price.toLocaleString()} <span className="text-xl font-bold text-zinc-900 tracking-wide">/ unit</span></span>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-3.5 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-xl font-bold text-lg transition flex items-center gap-2">
                  Contact Sales
                </button>
                <button 
                  onClick={() => addItem({ id: 'bundle-1', name: b1.name, price: b1.price, quantity: 1, image: b1.image, category: b1.category })}
                  className="px-10 py-3.5 bg-[#b91c1c] hover:bg-red-800 text-white rounded-xl font-bold text-lg shadow-md transition flex items-center gap-2"
                >
                  Add to Cart
                </button>
              </div>
              
              <p className="text-[10px] text-zinc-500 mt-6 max-w-md">
                *All prices are exclusive of applicable Government Fees and Taxes. Terms and conditions apply.
              </p>
            </div>
          </div>

          {/* Bundle 2 */}
          <div className="bg-white rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 lg:gap-16 ml-3 md:ml-0">
            
            {/* POPULAR BUNDLE Ribbon */}
            <div className="absolute top-10 -left-3 md:-left-4 z-20">
              <div className="bg-[#b91c1c] text-white font-bold text-xl lg:text-2xl tracking-wider px-8 py-4 shadow-lg rounded-r-lg relative z-10">
                POPULAR BUNDLE!
              </div>
              <div className="absolute top-full left-0 w-0 h-0 border-t-[12px] border-t-[#7f1d1d] border-l-[12px] md:border-l-[16px] border-l-transparent z-0"></div>
            </div>
            
            <div className="w-full md:w-5/12 flex items-center justify-center relative pt-16 lg:pt-8 min-h-[350px]">
              <div className="w-full h-full absolute inset-0">
                 <Image src="/Ultra-realistic_premium_product_photography_of_202606091839.jpeg" alt="POS" fill className="object-contain drop-shadow-xl" />
              </div>
            </div>
            
            <div className="w-full md:w-7/12 flex flex-col items-start text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight mb-4">{b2.name}</h3>
              <p className="text-lg font-medium text-zinc-600 mb-6">Customer facing display | Heavy duty operations</p>
              
              <hr className="w-full border-t-2 border-zinc-200 mb-6" />
              
              <h4 className="text-lg font-bold text-zinc-900 mb-4">Complete POS Starter Package Includes:</h4>
              <ul className="flex flex-col gap-4 mb-8">
                 <li className="flex items-start gap-3 text-base text-zinc-800 font-medium">
                   <svg className="w-4 h-4 text-zinc-800 shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                   15.6" Main + 10.1" Customer Display
                 </li>
                 <li className="flex items-start gap-3 text-base text-zinc-800 font-medium">
                   <svg className="w-4 h-4 text-zinc-800 shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                   80mm High-Speed Auto-Cutter Printer
                 </li>
                 <li className="flex items-start gap-3 text-base text-zinc-800 font-medium">
                   <svg className="w-4 h-4 text-zinc-800 shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                   Heavy Duty Cash Drawer Included
                 </li>
              </ul>
              
              <hr className="w-full border-t-2 border-zinc-200 mb-6" />
              
              <div className="flex items-end gap-4 mb-8">
                <span className="text-3xl font-bold text-zinc-400 line-through decoration-zinc-400 decoration-2">₹1,599</span>
                <span className="text-6xl font-black text-zinc-900 leading-none tracking-tighter">₹{b2.price.toLocaleString()} <span className="text-xl font-bold text-zinc-900 tracking-wide">/ unit</span></span>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-3.5 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-xl font-bold text-lg transition flex items-center gap-2">
                  Contact Sales
                </button>
                <button 
                  onClick={() => addItem({ id: 'bundle-2', name: b2.name, price: b2.price, quantity: 1, image: b2.image, category: b2.category })}
                  className="px-10 py-3.5 bg-[#b91c1c] hover:bg-red-800 text-white rounded-xl font-bold text-lg shadow-md transition flex items-center gap-2"
                >
                  Add to Cart
                </button>
              </div>
              
              <p className="text-[10px] text-zinc-500 mt-6 max-w-md">
                *All prices are exclusive of applicable Government Fees and Taxes. Terms and conditions apply.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Product Range Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center text-zinc-900 tracking-tight mb-16">Explore Our Core Product Range</h2>

        <div className="flex flex-col gap-16 mb-12 max-w-5xl mx-auto">
           
           {/* Grid Row 1 (Wide Item) */}
           <div className="bg-[#f3f4f6] border border-zinc-200 rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-sm group pt-12 md:pt-0">
              
              <div className="absolute top-0 left-0 flex z-10">
                <div className="bg-[#0017a8] text-white font-bold text-[13px] tracking-wide px-6 py-2.5 rounded-br-xl md:rounded-br-none md:rounded-tl-2xl">
                  Top Rated
                </div>
                <div className="bg-black text-white font-bold text-[13px] tracking-wide px-6 py-2.5 rounded-bl-xl md:rounded-bl-none md:rounded-br-2xl">
                  15" Tablet POS
                </div>
              </div>
              
              <div className="w-full md:w-5/12 flex items-center justify-center p-8 pt-16 md:pt-16">
                <div className="w-full h-64 relative drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                   <Image src="/Ultra-realistic_premium_product_photography_of_202606091844.jpeg" fill alt="POS" className="object-contain" />
                </div>
              </div>
              
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-4 tracking-tight">{pos1.name}</h3>
                
                <hr className="w-full border-t border-zinc-300 mb-6" />
                
                <p className="text-sm text-zinc-800 font-medium mb-6">All in one device with built in printer and scanner. Perfect for quick service and retail environments.</p>
                
                <ul className="flex flex-col gap-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     Quad-Core RK3568
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     10.1" IPS Display
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     Built-in 58mm Printer
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     Wi-Fi & Bluetooth
                   </li>
                </ul>
                
                <hr className="w-full border-t border-zinc-300 mb-6" />
                
                <div className="flex flex-col mb-6">
                  <span className="text-base font-bold text-zinc-500 line-through decoration-zinc-500 decoration-2 mb-1">₹899</span>
                  <span className="text-4xl lg:text-5xl font-black text-[#0017a8] tracking-tight">₹{pos1.price.toLocaleString()}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <button className="px-8 py-3 border-2 border-[#0017a8] text-[#0017a8] hover:bg-blue-50 rounded-xl font-bold text-sm transition">Learn More</button>
                  <button onClick={() => addItem({ id: 'pos-15-tablet', name: pos1.name, price: pos1.price, quantity: 1, image: pos1.image, category: pos1.category })} className="px-8 py-3 bg-[#0017a8] hover:bg-[#000f73] text-white rounded-xl font-bold text-sm transition shadow-lg">Buy Now</button>
                </div>
              </div>
           </div>

           {/* Grid Row 2 (Wide Item) */}
           <div className="bg-[#f3f4f6] border border-zinc-200 rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-sm group pt-12 md:pt-0">
              
              <div className="absolute top-0 left-0 flex z-10">
                <div className="bg-[#0017a8] text-white font-bold text-[13px] tracking-wide px-6 py-2.5 rounded-br-xl md:rounded-br-none md:rounded-tl-2xl">
                  Top Pick
                </div>
                <div className="bg-black text-white font-bold text-[13px] tracking-wide px-6 py-2.5 rounded-bl-xl md:rounded-bl-none md:rounded-br-2xl">
                  15.6" Dual Screen POS
                </div>
              </div>
              
              <div className="w-full md:w-5/12 flex items-center justify-center p-8 pt-16 md:pt-16">
                <div className="w-full h-64 relative drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                   <Image src="/Ultra-realistic_premium_product_photography_of_202606091847.jpeg" fill alt="POS" className="object-contain" />
                </div>
              </div>
              
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-4 tracking-tight">{pos2.name}</h3>
                
                <hr className="w-full border-t border-zinc-300 mb-6" />
                
                <p className="text-sm text-zinc-800 font-medium mb-6">Customer facing display ensures accuracy and allows for dynamic advertising at checkout.</p>
                
                <ul className="flex flex-col gap-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     15.6" + 10.1" Displays
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     8GB RAM / 128GB ROM
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     Aluminum Alloy Stand
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     Multiple I/O Ports
                   </li>
                </ul>
                
                <hr className="w-full border-t border-zinc-300 mb-6" />
                
                <div className="flex flex-col mb-6">
                  <span className="text-base font-bold text-zinc-500 line-through decoration-zinc-500 decoration-2 mb-1">₹1,399</span>
                  <span className="text-4xl lg:text-5xl font-black text-[#0017a8] tracking-tight">₹{pos2.price.toLocaleString()}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <button className="px-8 py-3 border-2 border-[#0017a8] text-[#0017a8] hover:bg-blue-50 rounded-xl font-bold text-sm transition">Learn More</button>
                  <button onClick={() => addItem({ id: 'pos-15-dual', name: pos2.name, price: pos2.price, quantity: 1, image: pos2.image, category: pos2.category })} className="px-8 py-3 bg-[#0017a8] hover:bg-[#000f73] text-white rounded-xl font-bold text-sm transition shadow-lg">Buy Now</button>
                </div>
              </div>
           </div>

           {/* Grid Row 3 (Wide Item) */}
           <div className="bg-[#f3f4f6] border border-zinc-200 rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-sm group pt-12 md:pt-0">
              
              <div className="absolute top-0 left-0 flex z-10">
                <div className="bg-[#0017a8] text-white font-bold text-[13px] tracking-wide px-6 py-2.5 rounded-br-xl md:rounded-br-none md:rounded-tl-2xl">
                  Premium
                </div>
                <div className="bg-black text-white font-bold text-[13px] tracking-wide px-6 py-2.5 rounded-bl-xl md:rounded-bl-none md:rounded-br-2xl">
                  K32 Premium Kiosk
                </div>
              </div>
              
              <div className="w-full md:w-5/12 flex items-center justify-center p-8 pt-16 md:pt-16">
                <div className="w-full h-64 relative drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                   <Image src="/selfx-kiosk.png" fill  alt="Kiosk" className="object-contain" />
                </div>
              </div>
              
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-4 tracking-tight">{k32.name}</h3>
                
                <hr className="w-full border-t border-zinc-300 mb-6" />
                
                <p className="text-sm text-zinc-800 font-medium mb-6">Sleek, floor-standing self-service kiosk with massive 32-inch interactive touch screen.</p>
                
                <ul className="flex flex-col gap-3 mb-6">
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     32" Full HD Touch Screen
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     Built-in Card Reader Slot
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     80mm Receipt Printer
                   </li>
                   <li className="flex items-start gap-3 text-sm text-zinc-800 font-semibold">
                     <svg className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                     Commercial Grade Steel
                   </li>
                </ul>
                
                <hr className="w-full border-t border-zinc-300 mb-6" />
                
                <div className="flex flex-col mb-6">
                  <span className="text-base font-bold text-zinc-500 line-through decoration-zinc-500 decoration-2 mb-1">₹3,199</span>
                  <span className="text-4xl lg:text-5xl font-black text-[#0017a8] tracking-tight">₹{k32.price.toLocaleString()}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <button className="px-8 py-3 border-2 border-[#0017a8] text-[#0017a8] hover:bg-blue-50 rounded-xl font-bold text-sm transition">Learn More</button>
                  <button onClick={() => addItem({ id: 'kiosk-k32', name: k32.name, price: k32.price, quantity: 1, image: k32.image, category: k32.category })} className="px-8 py-3 bg-[#0017a8] hover:bg-[#000f73] text-white rounded-xl font-bold text-sm transition shadow-lg">Buy Now</button>
                </div>
              </div>
           </div>
        </div>

        {/* Multi-grid (Bottom smaller items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {gridProducts.map((item, i) => (
             <div key={item.id} className="bg-[#f3f4f6] border border-zinc-200 rounded-2xl overflow-hidden flex flex-col relative shadow-sm group pt-12 hover:shadow-md transition-shadow">
               
               <div className="absolute top-0 left-0 flex w-full z-10">
                 <div className="bg-[#0017a8] text-white font-bold text-[11px] tracking-wide px-3 py-2 rounded-br-lg md:rounded-br-none md:rounded-tl-2xl">
                   {item.category}
                 </div>
                 <div className="bg-black text-white font-bold text-[11px] tracking-wide px-3 py-2 flex-1 truncate rounded-bl-lg md:rounded-bl-none md:rounded-tr-2xl">
                   {item.name}
                 </div>
               </div>
               
               <div className="w-full h-32 relative mb-6 p-4 mt-2">
                 <Image src={item.image} fill alt={item.name} className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300" />
               </div>
               
               <div className="px-5 pb-5 flex flex-col flex-1">
                 <hr className="w-full border-t border-zinc-300 mb-4" />
                 
                 <div className="flex flex-col mb-4 mt-auto">
                   <span className="text-2xl font-black text-[#0017a8] tracking-tight">₹{item.price.toLocaleString()}</span>
                 </div>
                 
                 <button 
                   onClick={() => addItem({ id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image, category: item.category })}
                   className="w-full py-2.5 bg-[#0017a8] hover:bg-[#000f73] text-white rounded-xl font-bold text-sm transition shadow-md"
                 >
                   Add
                 </button>
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-zinc-900 text-zinc-400 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-zinc-500" />
            <h4 className="font-bold text-white text-sm">1-Year Warranty</h4>
            <p className="text-xs">All hardware comes with a standard 12-month manufacturer warranty.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Truck className="w-8 h-8 text-zinc-500" />
            <h4 className="font-bold text-white text-sm">Free Express Shipping</h4>
            <p className="text-xs">On all hardware orders over ₹500 within the continental US.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Star className="w-8 h-8 text-zinc-500" />
            <h4 className="font-bold text-white text-sm">Plug & Play Setup</h4>
            <p className="text-xs">Pre-configured with SelfX software before leaving our warehouse.</p>
          </div>
        </div>
      </section>

    
      </div>

      {/* 2. Smart POS Terminals */}
      <div className="bg-white text-zinc-950 font-sans w-full overflow-hidden">
        
      
      {/* 1. Terminal Showcase Hero (Image 3 Inspiration) */}
      <section className="pt-24 pb-16 px-6 relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3 block">SelfX</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight uppercase leading-[1.1]">
            Smart Counter Terminal
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 font-bold tracking-tight mt-4 max-w-2xl mx-auto">
            QR Validation + Receipt Printing Terminal
          </p>
          <p className="text-zinc-500 font-medium mt-4 max-w-xl mx-auto">
            Compact all-in-one Android based terminal for quick order validation, QR scanning and receipt printing at cashier counters.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Features */}
          <div className="w-full lg:w-1/4 flex flex-col gap-12">
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-full w-24 border-t-2 border-zinc-300 border-dashed -translate-y-1/2" />
              <div className="hidden lg:block absolute top-1/2 left-full translate-x-24 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full z-10" />
              <h3 className="text-red-600 font-black text-lg uppercase tracking-tight mb-2 flex items-center gap-2"><ScanLine className="w-5 h-5"/> QR CODE SCANNER</h3>
              <p className="text-zinc-600 font-medium text-sm">Built-in 2D QR scanner for fast order validation</p>
            </div>
            
            <div className="relative mt-8 lg:mt-32">
              <div className="hidden lg:block absolute top-1/2 left-full w-32 border-t-2 border-zinc-300 border-dashed -translate-y-1/2" />
              <div className="hidden lg:block absolute top-1/2 left-full translate-x-32 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full z-10" />
              <h3 className="text-red-600 font-black text-lg uppercase tracking-tight mb-2 flex items-center gap-2"><Monitor className="w-5 h-5"/> 10 INCH TOUCH DISPLAY</h3>
              <p className="text-zinc-600 font-medium text-sm">10.1" Capacitive touch screen for smooth operation</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-2/4 relative flex justify-center py-4">
            <div className="w-full max-w-[600px] aspect-[4/3] relative flex items-center justify-center">
               <Image src="/pos terminal.png" alt="Smart Counter Terminal" fill className="object-contain" priority />
            </div>
          </div>

          {/* Right Features */}
          <div className="w-full lg:w-1/4 flex flex-col gap-12 text-left lg:text-right">
             <div className="relative">
              <div className="hidden lg:block absolute top-1/2 right-full w-24 border-t-2 border-zinc-300 border-dashed -translate-y-1/2" />
              <div className="hidden lg:block absolute top-1/2 right-full -translate-x-3 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full z-10" />
              <h3 className="text-red-600 font-black text-lg uppercase tracking-tight mb-2 flex items-center lg:justify-end gap-2"><Printer className="w-5 h-5"/> BUILT-IN PRINTER</h3>
              <p className="text-zinc-600 font-medium text-sm">2" Thermal Receipt Printer for fast and reliable printing</p>
            </div>
          </div>

        </div>

        {/* Vertical Feature List (Right Side of Image 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-20 border-t border-zinc-200 pt-12">
           {[
             { icon: Store, title: "ALL IN ONE DESIGN", desc: "Compact, sleek and space saving" },
             { icon: QrCode, title: "FAST VALIDATION", desc: "Scan QR codes and validate orders instantly" },
             { icon: Receipt, title: "INSTANT RECEIPTS", desc: "Quick receipt printing for every transaction" },
             { icon: Wifi, title: "CONNECTIVITY", desc: "WIFI + LAN connectivity for uninterrupted operations" },
             { icon: Smartphone, title: "ANDROID POWERED", desc: "Android 11/13 for stable and secure performance" },
           ].map((feat, i) => (
             <div key={i} className="flex flex-col gap-3">
               <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                 <feat.icon className="w-6 h-6" />
               </div>
               <h4 className="font-black text-zinc-900 uppercase text-xs tracking-widest">{feat.title}</h4>
               <p className="text-zinc-500 font-medium text-xs leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </div>
      </section>






      {/* Required Keyframes for SVG animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}} />
    
      </div>

      {/* 3. Handheld Mobile POS */}
      <div className="bg-zinc-950 text-zinc-100 font-sans w-full overflow-hidden">
        
      
      {/* Dark Hero Section */}
     

      {/* Feature Bento Grid */}
      <section className="py-24 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Battery Feature */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-3xl flex flex-col items-start gap-4 hover:bg-zinc-800 transition-colors">
               <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center">
                 <Battery className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white">48hr Standby</h3>
               <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                 High-capacity 5000mAh battery easily lasts through back-to-back double shifts without needing a charge.
               </p>
            </div>

            {/* Tap to Pay Feature */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-3xl flex flex-col items-start gap-4 hover:bg-zinc-800 transition-colors">
               <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center">
                 <CreditCard className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white">Omni-Channel Pay</h3>
               <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                 Accepts magstripe, EMV chip, NFC (Apple Pay/Google Pay), and dynamic QR code payments.
               </p>
            </div>

            {/* Scanner Feature */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-3xl flex flex-col items-start gap-4 hover:bg-zinc-800 transition-colors">
               <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center">
                 <ScanLine className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white">Laser Barcode</h3>
               <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                 Professional 1D/2D barcode scanning engine for fast inventory lookup and loyalty card scanning.
               </p>
            </div>

            {/* Wifi Feature */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 p-8 rounded-3xl flex flex-col items-start gap-4 hover:bg-zinc-800 transition-colors">
               <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center">
                 <Wifi className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-white">4G / Dual Wi-Fi</h3>
               <p className="text-sm text-zinc-400 font-medium leading-relaxed">
                 Seamless roaming between indoor Wi-Fi networks, with 4G LTE fallback for outdoor patios or food trucks.
               </p>
            </div>

          </div>
        </div>
      </section>

  


    
      </div>

      {/* 4. Kitchen Signage Displays */}
      <div className="bg-zinc-50 text-zinc-950 font-sans w-full overflow-hidden">
        
      
     
     
      {/* Tech Specs Table Section */}
      {/* <section className="py-24 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-black text-center text-zinc-900 tracking-tight mb-16">Designed for continuous operation.</h3>
        
        <div className="bg-white border border-zinc-200 rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
           <div className="w-full lg:w-1/3 bg-zinc-900 p-10 flex flex-col justify-between text-white relative">
             <div className="absolute inset-0 bg-red-600/10 blur-[50px] pointer-events-none" />
             <div className="relative z-10">
               <h4 className="text-2xl font-black mb-4">Hardware Reliability</h4>
               <p className="text-zinc-400 font-medium text-sm leading-relaxed mb-8">
                 Consumer tablets and TVs fail in commercial environments. Our purpose-built displays guarantee uptime and eliminate costly replacements.
               </p>
             </div>
             <div className="w-full aspect-square bg-zinc-800 rounded-2xl border border-zinc-700 relative overflow-hidden flex items-center justify-center p-8 z-10">
               <Image src="/selfx left.png" fill alt="Hardware display" className="object-contain p-8 mix-blend-screen" />
             </div>
           </div>
           
           <div className="w-full lg:w-2/3 p-10 bg-white">
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b-2 border-zinc-900">
                     <th className="py-4 text-xs uppercase tracking-widest text-zinc-500 font-bold w-1/3">Feature</th>
                     <th className="py-4 text-xs uppercase tracking-widest text-zinc-900 font-black">Consumer Grade</th>
                     <th className="py-4 text-xs uppercase tracking-widest text-red-600 font-black">SelfX Commercial Grade</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-zinc-100 text-sm font-medium">
                   <tr>
                     <td className="py-5 text-zinc-500">Operating Hours</td>
                     <td className="py-5 text-zinc-700">8 - 12 hours/day</td>
                     <td className="py-5 text-zinc-900 font-bold flex items-center gap-2"><LocalCheckCircle2 className="w-4 h-4 text-green-500"/> 24/7 Continuous</td>
                   </tr>
                   <tr>
                     <td className="py-5 text-zinc-500">Enclosure</td>
                     <td className="py-5 text-zinc-700">Plastic</td>
                     <td className="py-5 text-zinc-900 font-bold flex items-center gap-2"><LocalCheckCircle2 className="w-4 h-4 text-green-500"/> Aluminum / Steel</td>
                   </tr>
                   <tr>
                     <td className="py-5 text-zinc-500">Heat Tolerance</td>
                     <td className="py-5 text-zinc-700">Standard Room Temp</td>
                     <td className="py-5 text-zinc-900 font-bold flex items-center gap-2"><LocalCheckCircle2 className="w-4 h-4 text-green-500"/> High Thermal Resistance</td>
                   </tr>
                   <tr>
                     <td className="py-5 text-zinc-500">I/O Ports</td>
                     <td className="py-5 text-zinc-700">Exposed</td>
                     <td className="py-5 text-zinc-900 font-bold flex items-center gap-2"><LocalCheckCircle2 className="w-4 h-4 text-green-500"/> Concealed / Waterproof</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
        </div>
      </section> */}

    
      </div>

      {/* 5. Peripherals Accessories */}
      <div className="bg-white text-zinc-950 font-sans w-full">
        
      
      {/* Header */}
      <section className="bg-zinc-50 border-b border-zinc-200 pt-24 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-4 block">Hardware</span>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-6">
            Peripherals & Accessories
          </h1>
          <p className="text-lg text-zinc-500 font-medium">
            Complete your point-of-sale ecosystem with our range of high-quality, fully compatible peripherals. 
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessoriesList.map((item) => (
             <div key={item.id} className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col group hover:border-zinc-400 transition-colors shadow-sm hover:shadow-md">
               <div className="w-full aspect-[4/3] bg-zinc-50 rounded-xl mb-6 relative p-6 flex items-center justify-center">
                 <Image src={item.image} alt={item.name} fill className="object-contain p-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
               </div>
               
               <h3 className="text-xl font-black text-zinc-900 mb-2">{item.name}</h3>
               <p className="text-sm text-zinc-500 font-medium leading-relaxed mb-6 flex-grow">{item.description}</p>
               
               <ul className="flex flex-col gap-2 mb-8">
                 {["1-Year Warranty", "Free Standard Shipping"].map((spec, i) => (
                   <li key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-700">
                     <Check className="w-3.5 h-3.5 text-green-500" /> {spec}
                   </li>
                 ))}
               </ul>
               
               <div className="flex items-center justify-between border-t border-zinc-100 pt-6 mt-auto">
                 <span className="text-2xl font-black text-zinc-900">₹{item.price.toLocaleString()}</span>
                 <button 
                   onClick={() => addItem({ id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image, category: 'Accessory' })}
                   className="px-5 py-2 bg-zinc-900 hover:bg-black text-white rounded-lg font-bold text-xs transition"
                 >
                   Add to Cart
                 </button>
               </div>
             </div>
          ))}
        </div>
      </section>
  

      {/* 6. Seamless Ecosystem Section (New Fantastic UI) */}
     

      {/* 7. Hardware FAQs */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200">
        <UniversalFaq 
          title="Hardware FAQs"
          items={[
            { q: "Does the hardware come with a warranty?", a: "Yes, all SelfX hardware comes with a standard 1-year comprehensive warranty. Extended warranty and premium on-site support plans are also available during checkout." },
            { q: "Is the hardware compatible with my existing POS software?", a: "Our hardware is optimized for the SelfX Cloud OS, but most of our devices operate on standard Android architectures and can run approved third-party applications." },
            { q: "How easy is it to set up the self-service kiosks?", a: "Our kiosks feature a plug-and-play design. Simply connect the power, connect to Wi-Fi or LAN, and the device will automatically provision itself from your cloud account." },
            { q: "Can I lease the hardware instead of purchasing it outright?", a: "Absolutely. We offer flexible hardware-as-a-service (HaaS) leasing options for enterprise customers with 10+ locations. Contact our sales team for custom pricing." }
          ]} 
        />
      </section>

      </div>
    
    </div>
  )
}
