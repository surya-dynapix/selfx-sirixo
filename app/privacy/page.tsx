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

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("data-collection");

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
    { id: "data-collection", label: "1. Data Collection" },
    { id: "data-usage", label: "2. How We Use Data" },
    { id: "data-sharing", label: "3. Data Sharing" },
    { id: "security", label: "4. Security Measures" },
    { id: "user-rights", label: "5. Your Privacy Rights" },
    { id: "contact", label: "6. Contact Information" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Legal Document</p>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">Privacy Policies</h1>
          <p className="text-zinc-500 font-medium">Last updated: November 2, 2025</p>
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
              At SelfX, we take your privacy extremely seriously. This Privacy Policy outlines the types of personal data we receive and collect when you use our POS, Kiosks, and Cloud Dashboard, as well as some of the steps we take to safeguard information.
            </p>

            <SectionHeader id="data-collection" number="1" title="Data Collection" />
            <p>
              We collect information to provide better services to all our users. We collect information in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700">
              <li><strong>Information you give us:</strong> When you sign up for a SelfX account, we ask for personal information like your name, email address, telephone number, and payment information.</li>
              <li><strong>Information we get from your use of our services:</strong> We collect information about the hardware you use (device-specific information such as hardware model, operating system version).</li>
              <li><strong>Customer Data:</strong> When patrons use your Kiosks, we collect transaction data (anonymized unless explicitly linked to a loyalty account).</li>
            </ul>

            <CalloutBox type="info" title="Anonymized Analytics">
              SelfX employs AI models to analyze aggregate restaurant data (e.g., peak ordering times). All data processed by our AI is completely stripped of Personally Identifiable Information (PII) before analysis.
            </CalloutBox>

            <SectionHeader id="data-usage" number="2" title="How We Use Data" />
            <p>
              We use the information we collect from all of our services to provide, maintain, protect, and improve them, to develop new ones, and to protect SelfX and our users. For instance, we use your contact information to send you technical updates, security alerts, and administrative messages.
            </p>

            <SectionHeader id="data-sharing" number="3" title="Data Sharing" />
            <p>
              We do not share personal information with companies, organizations, and individuals outside of SelfX unless one of the following circumstances applies:
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-widest">Authorized Third Parties</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-zinc-100 rounded shadow-sm">
                  <span className="font-bold text-red-600 text-xs">PAYMENT GATEWAYS</span>
                  <p className="text-xs text-zinc-500 mt-1">Stripe, Square, and other integrated processors necessary to clear transactions.</p>
                </div>
                <div className="p-4 bg-white border border-zinc-100 rounded shadow-sm">
                  <span className="font-bold text-red-600 text-xs">DELIVERY PARTNERS</span>
                  <p className="text-xs text-zinc-500 mt-1">UberEats, DoorDash APIs for order routing and fulfillment.</p>
                </div>
              </div>
            </div>

            <SectionHeader id="security" number="4" title="Security Measures" />
            <p>
              We work hard to protect SelfX and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. In particular:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700">
              <li>We encrypt many of our services using SSL and AES-256 encryption.</li>
              <li>We review our information collection, storage, and processing practices, including physical security measures.</li>
              <li>We restrict access to personal information to SelfX employees, contractors, and agents who need to know that information in order to process it for us.</li>
            </ul>

            <CalloutBox type="warning" title="PCI Compliance">
              All payment card data processed through SelfX terminals and kiosks is tokenized immediately. We are fully PCI-DSS Level 1 compliant and never store raw credit card numbers on our servers.
            </CalloutBox>

            <SectionHeader id="user-rights" number="5" title="Your Privacy Rights" />
            <p>
              Depending on your location (such as the EU for GDPR, or California for CCPA), you may have the right to request access to, correction of, or deletion of your personal data. You can access and update your data directly from your SelfX cloud dashboard under "Account Settings."
            </p>

            <SectionHeader id="contact" number="6" title="Contact Information" />
            <p>
              If you have any questions about this Privacy Policy, please contact our Data Protection Officer at:
              <br/><br/>
              <strong>Email:</strong> privacy@selfx.com<br/>
              <strong>Address:</strong> 123 Tech Park Drive, Suite 400, San Francisco, CA 94105
            </p>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
