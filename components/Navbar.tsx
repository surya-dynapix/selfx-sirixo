"use client";

import { useState, useRef } from "react";
import { 
  ArrowRight, 
  X, 
  Menu, 
  ChevronDown,
  Cloud, 
  Smartphone, 
  ChefHat, 
  Monitor, 
  Globe, 
  QrCode, 
  Tv, 
  Play, 
  CupSoda, 
  MessageSquare,
  Building, 
  GraduationCap, 
  Store, 
  HardDrive, 
  CreditCard, 
  Usb, 
  Users, 
  TrendingUp, 
  Cpu, 
  LifeBuoy, 
  BookOpen,
  ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface DropdownItem {
  name: string;
  description?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string; // Tailwind bg, text, border classes
}

interface NavItem {
  label: string;
  hasDropdown: boolean;
  href?: string;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    hasDropdown: true,
    dropdownItems: [
      { name: "POS Cloud Software", href: "/product/pos-software", icon: Cloud, iconColor: "bg-red-50 text-red-600 border-red-100/80" },
      { name: "Mobile User APP", href: "/product/mobile-app", icon: Smartphone, iconColor: "bg-emerald-50 text-emerald-600 border-emerald-100/80" },
      { name: "Kitchen System", href: "/product/kitchen-system", icon: ChefHat, iconColor: "bg-orange-50 text-orange-600 border-orange-100/80" },
      { name: "Self-Ordering Kiosk APP", href: "/product/kiosk-app", icon: Monitor, iconColor: "bg-red-50 text-red-600 border-red-100/80" },
      { name: "Online Restaurant Ordering", href: "/product/online-ordering", icon: Globe, iconColor: "bg-purple-50 text-purple-600 border-purple-100/80" },
      { name: "Digital Dining", href: "/product/digital-dining", icon: QrCode, iconColor: "bg-pink-50 text-pink-600 border-pink-100/80" },
      { name: "Kitchen Display System (KDS)", href: "/product/kds", icon: Tv, iconColor: "bg-amber-50 text-amber-600 border-amber-100/80" },
      { name: "Digital Signage Engine", href: "/product/signage", icon: Play, iconColor: "bg-cyan-50 text-cyan-600 border-cyan-100/80" },
      { name: "Smart Vending Machines", href: "/product/vending", icon: CupSoda, iconColor: "bg-teal-50 text-teal-600 border-teal-100/80" },
      { name: "WhatsApp Ordering", href: "/product/whatsapp", icon: MessageSquare, iconColor: "bg-green-50 text-green-600 border-green-100/80" },
    ],
  },
  {
    label: "Solutions",
    hasDropdown: true,
    dropdownItems: [
      { name: "Corporate Tech Parks", href: "/solutions/corporate-tech-parks", icon: Building, iconColor: "bg-indigo-50 text-indigo-600 border-indigo-100/80" },
      { name: "Universities", href: "/solutions/universities", icon: GraduationCap, iconColor: "bg-violet-50 text-violet-600 border-violet-100/80" },
      { name: "Food Courts", href: "/solutions/food-courts", icon: Store, iconColor: "bg-rose-50 text-rose-600 border-rose-100/80" },
    ],
  },
  {
    label: "Hardware",
    hasDropdown: false,
    href: "/hardware",
  },
  {
    label: "Pricing",
    hasDropdown: false,
    href: "/pricing",
  },
  {
    label: "Company",
    hasDropdown: true,
    dropdownItems: [
      { name: "About Us", href: "/about", icon: Users, iconColor: "bg-red-50 text-red-600 border-red-100/80" },
      { 
        name: "Success Stories / Case Studies", 
        description: "Highlighting 270+ installations & ₹19+ cr GMV", 
        href: "/case-studies",
        icon: TrendingUp,
        iconColor: "bg-emerald-50 text-emerald-600 border-emerald-100/80"
      },
      { 
        name: "Integrations", 
        description: "Payment gateways, accounting tools, & third-party delivery", 
        href: "/integrations",
        icon: Cpu,
        iconColor: "bg-purple-50 text-purple-600 border-purple-100/80"
      },
      { name: "Support & Help Centre", href: "/support", icon: LifeBuoy, iconColor: "bg-amber-50 text-amber-600 border-amber-100/80" },
      { name: "Blogs / Insights", href: "/blog", icon: BookOpen, iconColor: "bg-pink-50 text-pink-600 border-pink-100/80" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { openCart, cartCount } = useCart();

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index: number) => {
    if (mobileActiveDropdown === index) {
      setMobileActiveDropdown(null);
    } else {
      setMobileActiveDropdown(index);
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex flex-col w-full shadow-sm">
      
      {/* Red Announcement Banner */}
      <div className="w-full bg-red-600 text-white text-center py-2 px-4 text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 hover:bg-red-700 transition-colors">
        <span>SelfX Smart Self-Ordering Kiosks – In Stock & Ready to Deploy.</span>
        <a href="#contact" className="underline inline-flex items-center gap-0.5 hover:text-zinc-150">
          BOOK A DEMO NOW <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white border-b border-zinc-200 py-3.5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <img src="/logo.png" alt="SelfX Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-3 text-sm font-semibold text-zinc-600">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative py-2 px-3"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center gap-1 hover:text-zinc-950 transition-colors py-1">
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? "rotate-180 text-red-600" : ""}`} />
                  </button>
                ) : (
                  <a href={item.href} className="hover:text-zinc-950 transition-colors py-1">
                    {item.label}
                  </a>
                )}

                {/* Dropdown Content */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-zinc-200/80 rounded-2xl shadow-xl p-4 z-50 ${
                        item.label === "Products" 
                          ? "w-[540px]" 
                          : item.label === "Company" 
                            ? "w-[400px]" 
                            : "w-[300px]"
                      }`}
                    >
                      <div className={`grid gap-1.5 ${item.label === "Products" ? "grid-cols-2" : "grid-cols-1"}`}>
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className={`group/item flex items-start gap-3 p-2 rounded-xl hover:bg-zinc-50 transition-colors ${
                              subItem.description ? "col-span-full" : "col-span-1"
                            }`}
                          >
                            {/* Logo Icon with Coloured BG */}
                            <div className={`w-8.5 h-8.5 rounded-lg flex items-center justify-center border shrink-0 transition-all duration-200 group-hover/item:scale-105 ${subItem.iconColor}`}>
                              <subItem.icon className="w-4 h-4" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-bold text-zinc-900 group-hover/item:text-red-600 transition-colors flex items-center gap-1">
                                {subItem.name}
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-red-600" />
                              </span>
                              {subItem.description && (
                                <p className="text-[11px] text-zinc-500 font-medium mt-0.5 leading-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Cart Button */}
            <button 
              onClick={openCart}
              className="relative p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href="/book-demo"
              className="group relative flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold bg-zinc-900 text-white transition-all overflow-hidden hover:bg-zinc-800 shadow-sm active:scale-98"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu and cart */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={openCart}
              className="relative p-2 text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 hover:text-zinc-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-200 bg-white overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-6 py-6 flex flex-col gap-4 text-base font-semibold text-zinc-800">
              {navItems.map((item, index) => (
                <div key={index} className="flex flex-col border-b border-zinc-100 pb-2.5">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(index)}
                        className="flex items-center justify-between w-full text-left font-bold text-zinc-900 py-1.5"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${mobileActiveDropdown === index ? "rotate-180 text-red-600" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileActiveDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-2 mt-1.5 flex flex-col gap-3 overflow-hidden"
                          >
                            {item.dropdownItems?.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-start gap-3 py-1 hover:text-red-600 transition-colors"
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${subItem.iconColor}`}>
                                  <subItem.icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="font-semibold text-zinc-800 text-sm">{subItem.name}</span>
                                  {subItem.description && (
                                    <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">
                                      {subItem.description}
                                    </p>
                                  )}
                                </div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-bold text-zinc-900 py-1.5 hover:text-red-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              <a
                href="/book-demo"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full mt-3 py-3 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-sm"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
