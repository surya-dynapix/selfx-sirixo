const fs = require('fs');

const handheld = fs.readFileSync('/Users/surya/Desktop/selfx-website/web/app/hardware/handheld-mobile-pos/page.tsx', 'utf8');
const kitchen = fs.readFileSync('/Users/surya/Desktop/selfx-website/web/app/hardware/kitchen-signage-displays/page.tsx', 'utf8');
const peripherals = fs.readFileSync('/Users/surya/Desktop/selfx-website/web/app/hardware/peripherals-accessories/page.tsx', 'utf8');
const kiosks = fs.readFileSync('/Users/surya/Desktop/selfx-website/web/app/hardware/self-service-kiosks/page.tsx', 'utf8');
const smart = fs.readFileSync('/Users/surya/Desktop/selfx-website/web/app/hardware/smart-pos-terminals/page.tsx', 'utf8');

// Helper to extract JSX inside return(...)
function extractJSX(content, functionName) {
  const match = content.match(/return\s*\(\s*<div[^>]*>([\s\S]*?)<\/div>\s*\);\s*}\s*(?:\/\/|$)/);
  if (match) return match[1];
  console.log('Failed to extract JSX from', functionName);
  return '';
}

// Extract specific contents
const handheldJSX = extractJSX(handheld, 'HandheldMobilePOSPage');

const kitchenJSX = extractJSX(kitchen, 'KitchenSignageDisplaysPage')
  .replace(/<CheckCircle2/g, '<LocalCheckCircle2');

const peripheralsAccessories = peripherals.match(/const accessories = \[\s*\{[\s\S]*?\}\s*\];/)[0];
const peripheralsJSX = extractJSX(peripherals, 'PeripheralsAccessoriesPage');

const kiosksJSX = extractJSX(kiosks, 'SelfServiceKiosksPage')
  .replace(/<CheckCircle \/>/g, '<LocalCheckCircle />');

const smartJSX = extractJSX(smart, 'SmartPOSTerminalsPage');

const combined = `"use client";

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

export default function HardwarePage() {
  ${peripheralsAccessories}

  return (
    <div className="flex flex-col w-full">
      {/* 1. Self-Service Kiosks */}
      <div className="bg-[#F8F9FA] text-zinc-950 font-sans w-full overflow-hidden">
        ${kiosksJSX}
      </div>

      {/* 2. Smart POS Terminals */}
      <div className="bg-white text-zinc-950 font-sans w-full overflow-hidden">
        ${smartJSX}
      </div>

      {/* 3. Handheld Mobile POS */}
      <div className="bg-zinc-950 text-zinc-100 font-sans w-full overflow-hidden">
        ${handheldJSX}
      </div>

      {/* 4. Kitchen Signage Displays */}
      <div className="bg-zinc-50 text-zinc-950 font-sans w-full overflow-hidden">
        ${kitchenJSX}
      </div>

      {/* 5. Peripherals Accessories */}
      <div className="bg-white text-zinc-950 font-sans w-full">
        ${peripheralsJSX}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('/Users/surya/Desktop/selfx-website/web/app/hardware/page.tsx', combined);
console.log('Successfully wrote combined page.tsx');
