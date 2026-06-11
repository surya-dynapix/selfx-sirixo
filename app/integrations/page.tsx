import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Wallet, Truck, FileSpreadsheet, Store } from "lucide-react";

export const metadata = {
  title: "Integrations | SelfX POS",
  description: "Connect SelfX with the tools you already use: Payments, Delivery, Accounting, and more.",
};

const integrationCategories = [
  {
    title: "Payment Gateways",
    icon: Wallet,
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: [
      { name: "Stripe", desc: "Global card payments & Apple Pay", logo: "S" },
      { name: "Razorpay", desc: "UPI, Cards, and Netbanking in India", logo: "R" },
      { name: "PhonePe", desc: "Smart QR codes for tabletop payments", logo: "P" },
      { name: "Pine Labs", desc: "EDC machine direct integration", logo: "PL" }
    ]
  },
  {
    title: "Third-Party Delivery",
    icon: Truck,
    color: "text-orange-600",
    bg: "bg-orange-50",
    items: [
      { name: "Zomato", desc: "Auto-accept orders into KDS", logo: "Z" },
      { name: "Swiggy", desc: "Menu sync and inventory management", logo: "SW" },
      { name: "UberEats", desc: "Direct POS injection globally", logo: "UE" },
      { name: "DoorDash", desc: "Real-time courier tracking", logo: "DD" }
    ]
  },
  {
    title: "Accounting & ERP",
    icon: FileSpreadsheet,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    items: [
      { name: "Tally Prime", desc: "End-of-day sales sync", logo: "T" },
      { name: "QuickBooks", desc: "Automated invoice generation", logo: "QB" },
      { name: "Xero", desc: "Tax and ledger reconciliation", logo: "X" },
      { name: "Zoho Books", desc: "Real-time GST compliance", logo: "ZB" }
    ]
  }
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-20">
        
        {/* Header */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest block mb-4">
            Ecosystem
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Plays nicely with <br className="hidden sm:block" /> others.
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            SelfX acts as the central brain of your business. Seamlessly connect to your favorite payment processors, delivery aggregators, and accounting software.
          </p>
        </section>

        {/* Categories */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-20 mb-20">
          {integrationCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-zinc-100">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bg}`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-900">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group p-6 rounded-3xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-xl transition-all cursor-pointer flex flex-col items-start text-left">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-100 border border-zinc-200/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <span className="font-black text-zinc-500">{item.logo}</span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.name}</h3>
                      <p className="text-sm font-medium text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="bg-red-600 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500 rounded-full blur-[80px]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6">
                Need a custom integration?
              </h2>
              <p className="text-red-100 text-lg mb-8 font-medium">
                Our open API architecture allows enterprise clients to build custom connectors. Speak to our engineering team to learn more.
              </p>
              <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-zinc-100 transition-colors inline-flex items-center gap-2">
                Talk to Engineering <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
