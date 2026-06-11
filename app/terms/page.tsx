"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Custom colored box component
const CalloutBox = ({ type, title, children }: { type: 'info' | 'warning' | 'success', title?: string, children: React.ReactNode }) => {
  const styles = {
    info: "bg-red-50 border-l-4 border-red-500 text-red-900",
    warning: "bg-red-50 border-l-4 border-red-500 text-red-900",
    success: "bg-green-50 border-l-4 border-green-500 text-green-900",
  };
  return (
    <div className={`p-5 rounded-r-lg my-6 ${styles[type]}`}>
      {title && <h4 className="font-bold mb-2">{title}</h4>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

// Section Header with Badge
const SectionHeader = ({ id, number, title }: { id: string, number: string, title: string }) => (
  <div id={id} className="flex items-center gap-4 mt-16 mb-8 group scroll-mt-32">
    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm shrink-0">
      {number}
    </div>
    <h2 className="text-2xl font-bold text-zinc-900">{title}</h2>
  </div>
);

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  // Basic scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          current = section.getAttribute("id") || "";
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "definitions", label: "2. Definitions" },
    { id: "usage", label: "3. Usage Rules" },
    { id: "subscriptions", label: "4. Subscriptions & Billing" },
    { id: "liability", label: "5. Limitation of Liability" },
    { id: "termination", label: "6. Termination" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Legal Document</p>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">Terms and Conditions</h1>
          <p className="text-zinc-500 font-medium">Last updated: October 15, 2025</p>
        </div>

        {/* Content Layout */}
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row gap-12 relative">
          
          {/* Left Sidebar (Sticky TOC) */}
          <div className="w-full md:w-1/4 shrink-0 hidden md:block">
            <div className="sticky top-32 flex flex-col gap-2 border-l border-zinc-200 py-2">
              {toc.map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className={`pl-4 py-2 border-l-2 -ml-[1px] text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? "border-red-600 text-red-600" 
                      : "border-transparent text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Main Content */}
          <div className="w-full md:w-3/4 max-w-3xl prose prose-zinc prose-a:text-red-600">
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Welcome to SelfX. These terms and conditions outline the rules and regulations for the use of SelfX's software, hardware, and associated services. By accessing this platform, we assume you accept these terms and conditions.
            </p>

            <SectionHeader id="acceptance" number="1" title="Acceptance of Terms" />
            <p>
              By accessing and using the SelfX Point of Sale (POS) software, Self-Ordering Kiosks, Kitchen Display Systems (KDS), or any related services provided by SelfX, you agree to be legally bound by these terms. If you do not agree to all of the terms and conditions stated on this page, do not continue to use SelfX.
            </p>
            <CalloutBox type="info" title="Note to International Users">
              If you are accessing SelfX from outside the United States or the European Union, local laws may apply. It is your responsibility to ensure compliance with local trade and business regulations.
            </CalloutBox>

            <SectionHeader id="definitions" number="2" title="Definitions" />
            <p>The following terminology applies to these Terms and Conditions:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700">
              <li><strong>"Client", "You" and "Your"</strong> refers to you, the person or entity registering to use SelfX software.</li>
              <li><strong>"The Company", "Ourselves", "We", "Our" and "Us"</strong>, refers to SelfX.</li>
              <li><strong>"Hardware"</strong> refers to physical Kiosks, POS Terminals, and Printers sold by us.</li>
              <li><strong>"SaaS"</strong> refers to the Software as a Service provided via the cloud.</li>
            </ul>

            <SectionHeader id="usage" number="3" title="Usage Rules" />
            <p>
              You must use our systems in accordance with all applicable local, state, national, and international laws, rules, and regulations. 
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-widest">Prohibited Activities</h4>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>Reverse engineering the POS software.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>Installing third-party firmware on rented Kiosk hardware without written permission.</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></div>Processing illegal or high-risk transactions through our payment gateway API.</li>
              </ul>
            </div>

            <SectionHeader id="subscriptions" number="4" title="Subscriptions & Billing" />
            <p>
              SelfX software operates on a subscription model. Billing occurs automatically at the beginning of each billing cycle. Failure to process payment may result in an automated suspension of cloud syncing capabilities, although local POS operations will remain functional in "Offline Mode" for 72 hours.
            </p>
            <CalloutBox type="warning" title="Important Billing Notice">
              Hardware purchases are non-refundable after 30 days. Software subscription cancellations must be submitted at least 14 days prior to the next billing cycle to prevent being charged for the following month.
            </CalloutBox>

            <SectionHeader id="liability" number="5" title="Limitation of Liability" />
            <p>
              In no event shall SelfX, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <SectionHeader id="termination" number="6" title="Termination" />
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
            <CalloutBox type="success" title="Data Export">
              Upon termination, you will have a 30-day grace period to export your menu data, customer lists, and transaction history before permanent deletion.
            </CalloutBox>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
