"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CalloutBox = ({ type, title, children }: { type: 'info' | 'warning' | 'success', title?: string, children: React.ReactNode }) => {
  const styles = {
    info: "bg-red-50 border-l-4 border-red-500 text-red-900",
    warning: "bg-amber-50 border-l-4 border-amber-500 text-amber-900",
    success: "bg-green-50 border-l-4 border-green-500 text-green-900",
  };
  return (
    <div className={`p-5 rounded-r-lg my-6 ${styles[type]}`}>
      {title && <h4 className="font-bold mb-2">{title}</h4>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

const SectionHeader = ({ id, number, title }: { id: string, number: string, title: string }) => (
  <div id={id} className="flex items-center gap-4 mt-16 mb-8 group scroll-mt-32">
    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm shrink-0">
      {number}
    </div>
    <h2 className="text-2xl font-bold text-zinc-900">{title}</h2>
  </div>
);

export default function CookiesPage() {
  const [activeSection, setActiveSection] = useState("what-are-cookies");

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
    { id: "what-are-cookies", label: "1. What Are Cookies" },
    { id: "how-we-use", label: "2. How We Use Cookies" },
    { id: "types", label: "3. Types of Cookies We Use" },
    { id: "third-party", label: "4. Third-Party Cookies" },
    { id: "managing", label: "5. Managing Your Preferences" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Legal Document</p>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">Cookie Policy</h1>
          <p className="text-zinc-500 font-medium">Last updated: December 10, 2025</p>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row gap-12 relative">
          
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

          <div className="w-full md:w-3/4 max-w-3xl prose prose-zinc prose-a:text-red-600">
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              This Cookie Policy explains how SelfX uses cookies and similar technologies to recognize you when you visit our website, use our cloud dashboard, or interact with our digital ordering interfaces. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <SectionHeader id="what-are-cookies" number="1" title="What Are Cookies?" />
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites faster and easier, as well as to provide reporting information.
            </p>

            <SectionHeader id="how-we-use" number="2" title="How We Use Cookies" />
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our properties.
            </p>
            
            <CalloutBox type="info" title="Cross-Device Syncing">
              If you log into your SelfX dashboard across multiple devices, we use secure session cookies to sync your preferences and security state simultaneously across those sessions.
            </CalloutBox>

            <SectionHeader id="types" number="3" title="Types of Cookies We Use" />
            <p>
              The specific types of first and third-party cookies served through our Websites and the purposes they perform are described in the table below:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-zinc-200 text-sm text-left">
                <thead className="bg-zinc-50 text-zinc-900">
                  <tr>
                    <th className="px-4 py-3 border border-zinc-200 font-bold uppercase tracking-wider text-xs">Type</th>
                    <th className="px-4 py-3 border border-zinc-200 font-bold uppercase tracking-wider text-xs">Purpose</th>
                    <th className="px-4 py-3 border border-zinc-200 font-bold uppercase tracking-wider text-xs">Lifespan</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600">
                  <tr>
                    <td className="px-4 py-3 border border-zinc-200 font-bold text-zinc-800">Essential</td>
                    <td className="px-4 py-3 border border-zinc-200">Required for the website to function (e.g., logging into the dashboard, load balancing). Cannot be disabled.</td>
                    <td className="px-4 py-3 border border-zinc-200 font-mono text-xs">Session</td>
                  </tr>
                  <tr className="bg-zinc-50/50">
                    <td className="px-4 py-3 border border-zinc-200 font-bold text-zinc-800">Performance</td>
                    <td className="px-4 py-3 border border-zinc-200">Helps us understand how visitors interact with our site by collecting and reporting information anonymously (e.g., Google Analytics).</td>
                    <td className="px-4 py-3 border border-zinc-200 font-mono text-xs">2 Years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border border-zinc-200 font-bold text-zinc-800">Functionality</td>
                    <td className="px-4 py-3 border border-zinc-200">Allows the website to remember choices you make (such as language or region) to provide enhanced features.</td>
                    <td className="px-4 py-3 border border-zinc-200 font-mono text-xs">1 Year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <SectionHeader id="third-party" number="4" title="Third-Party Cookies" />
            <p>
              In some special cases, we also use cookies provided by trusted third parties. For example, we use Stripe to securely process payment transactions, which utilizes its own fraud-prevention tracking mechanisms on checkout pages.
            </p>

            <SectionHeader id="managing" number="5" title="Managing Your Preferences" />
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager that appears upon your first visit to the site. 
            </p>
            <p>
              Additionally, you can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
            </p>
            <CalloutBox type="success" title="Clear Your Cookies">
              You can completely clear all cached cookies associated with SelfX at any time via your browser's history and security settings.
            </CalloutBox>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
