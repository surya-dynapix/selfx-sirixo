"use client";

import { useState } from "react";
import { ArrowUp, Globe } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions";

// Custom SVG Icons to match visual reference perfectly
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Custom SVG Icons to match visual reference perfectly
const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.39v7.76c-.05 2.42-1.34 4.78-3.6 5.82-2.23 1.04-5.07.74-7.03-.74-1.99-1.48-2.86-4.22-2.12-6.66.72-2.44 3.01-4.2 5.56-4.21 1.02.01 2.03.29 2.92.81V0h-4.1z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Visa = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 15" width="34" height="20" className="bg-white px-1 py-0.5 rounded border border-zinc-700/50" {...props}>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#1A1F71" fontWeight="black" fontSize="9" fontStyle="italic">VISA</text>
  </svg>
);

const Mastercard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 15" width="34" height="20" className="bg-white px-1 py-0.5 rounded border border-zinc-700/50" {...props}>
    <circle cx="9" cy="7.5" r="4.5" fill="#EB001B" />
    <circle cx="15" cy="7.5" r="4.5" fill="#F79E1B" opacity="0.85" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("country", country);
      
      const result = await subscribeToNewsletter(formData);
      
      if (result.success) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 3000);
      }
    }
  };

  return (
    <footer className="bg-[#232323] text-[#9e9e9e] font-sans pt-16 pb-8 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Section: Logo & Back to top */}
        <div className="flex items-center justify-between border-b border-[#333333] pb-10 mb-12">
          <a href="/" className="shrink-0">
            <img src="/logo.png" alt="SelfX Logo" className="h-8 w-auto brightness-0 invert" />
          </a>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-white text-black font-bold px-5 py-2.5 rounded-full hover:bg-transparent hover:text-white border border-white transition-all text-xs tracking-wider uppercase"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Middle Section: Newsletter + Menu Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">Stay updated.</h3>
            <p className="text-sm text-[#9e9e9e] mb-6 leading-relaxed">
              Sign up for our bi-weekly newsletter to get updates straight to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="w-full max-w-sm flex flex-col gap-3">
              <div className="relative w-full">
                <select 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-[#333333] text-white border border-[#444444] rounded-md px-3 py-3 text-sm focus:outline-none focus:border-white appearance-none cursor-pointer pr-10 font-semibold"
                >
                  <option value="India">India</option>
                  <option value="Global">Global</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                </div>
              </div>

              <div className="flex gap-2 w-full">
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-[#333333] border border-[#444444] text-white placeholder-zinc-500 rounded-md px-3.5 py-3 text-sm focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-bold px-5 py-3 rounded-md hover:bg-zinc-200 transition-colors text-sm shrink-0"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {subscribed && (
              <p className="text-xs text-white font-semibold mt-2.5">
                Subscribed successfully!
              </p>
            )}

            <p className="text-[11px] text-[#707070] mt-4 leading-normal max-w-xs">
              By clicking Subscribe, you agree to receive emails from SelfX and confirm that you have read our Privacy Notice.
            </p>
          </div>

          {/* Site Menu Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-4">
            
            {/* Products Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-base font-bold tracking-tight">Products</h4>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <a href="/product/pos-software" className="hover:text-white transition-colors">POS Cloud Software</a>
                <a href="/product/mobile-app" className="hover:text-white transition-colors">Mobile User APP</a>
                <a href="/product/kitchen-system" className="hover:text-white transition-colors">Kitchen System</a>
                <a href="/product/kiosk-app" className="hover:text-white transition-colors">Self-Ordering Kiosk APP</a>
                <a href="/product/online-ordering" className="hover:text-white transition-colors">Online Ordering</a>
                <a href="/product/digital-dining" className="hover:text-white transition-colors">Digital Dining</a>
                <a href="/product/kds" className="hover:text-white transition-colors">Kitchen Display (KDS)</a>
                <a href="/product/signage" className="hover:text-white transition-colors">Digital Signage</a>
                <a href="/product/vending" className="hover:text-white transition-colors">Smart Vending</a>
                <a href="/product/whatsapp" className="hover:text-white transition-colors">WhatsApp Ordering</a>
              </nav>
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-base font-bold tracking-tight">Solutions</h4>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <a href="/solutions/corporate-tech-parks" className="hover:text-white transition-colors">Corporate Tech Parks</a>
                <a href="/solutions/universities" className="hover:text-white transition-colors">Universities</a>
                <a href="/solutions/food-courts" className="hover:text-white transition-colors">Food Courts</a>
              </nav>
            </div>

            {/* Hardware & Pricing Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-base font-bold tracking-tight">Hardware & Pricing</h4>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <a href="/hardware" className="hover:text-white transition-colors text-red-400 font-bold">View Hardware</a>
                <a href="/pricing" className="hover:text-white transition-colors text-red-400 font-bold">View Pricing</a>
              </nav>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-base font-bold tracking-tight">Company</h4>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
                <a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a>
                <a href="/integrations" className="hover:text-white transition-colors">Integrations</a>
                <a href="/support" className="hover:text-white transition-colors">Support & Help Centre</a>
                <a href="/blog" className="hover:text-white transition-colors">Blogs / Insights</a>
              </nav>
            </div>

          </div>

        </div>

        {/* Bottom Section: Payments & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#333333] pb-6 mb-6">
          {/* Card Payments */}
          <div className="flex items-center gap-2">
            <Visa />
            <Mastercard />
          </div>
          
          {/* Socials */}
          <div className="flex items-center gap-4 text-[#9e9e9e]">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><TikTok className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><XIcon className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Bottom-most Row: Global Site, Copyright, Legal Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-semibold">
          {/* Global site flag */}
          <div className="flex items-center gap-1.5 text-white hover:text-zinc-200 cursor-pointer">
            <Globe className="w-4 h-4" />
            <span>Global Site</span>
          </div>

          {/* Copyright */}
          <div className="text-[#707070]">
            © {new Date().getFullYear()} SelfX. All Rights Reserved.
          </div>

          {/* Privacy Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[#707070]">
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policies</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
