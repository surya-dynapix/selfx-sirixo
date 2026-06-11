import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, Globe, Users, Zap, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | SelfX POS",
  description: "The team behind the world's most advanced self-ordering and POS hardware.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-20 overflow-hidden">
        
        {/* Hero Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="text-red-600 font-bold text-sm uppercase tracking-widest block mb-4">
              Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight text-zinc-900 leading-[1.05] mb-8">
              Redefining the <br /> hospitality experience.
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-lg">
              We started SelfX with a simple belief: technology shouldn't just run your restaurant, it should elevate it. By combining breathtaking hardware with lightning-fast cloud software, we empower businesses to serve faster, earn more, and wow every customer.
            </p>
            <div className="flex gap-4">
              <a href="#story" className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                Our Story
              </a>
              <a href="/contact" className="px-8 py-4 bg-red-50 text-red-600 rounded-full font-bold hover:bg-red-100 transition-colors">
                Join the Team
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-red-100 rounded-full blur-[100px] opacity-40 scale-110" />
            <div className="relative aspect-[4/5] md:aspect-[1/1] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-200/50">
              <Image 
                src="/Ultra-realistic_cinematic_hero-banner_photography_of_202606081403.jpeg" 
                alt="SelfX Team and Hardware" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-zinc-50 py-24 md:py-32 border-y border-zinc-200/60 mb-20">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
                Built on engineering excellence.
              </h2>
              <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                Our culture is rooted in obsession over the smallest details, ensuring that every piece of hardware we ship is flawless.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: "Speed is a Feature", desc: "We optimize every millisecond of our software. Slow POS systems cost money." },
                { icon: ShieldCheck, title: "Unbreakable Reliability", desc: "Military-grade durability. Our hardware withstands spills, heat, and drops." },
                { icon: Globe, title: "Global Scale", desc: "From local cafes to international QSR chains, our architecture scales infinitely." },
                { icon: Users, title: "User-Centric Design", desc: "If a cashier needs a manual to use it, we failed. Intuitive UI is non-negotiable." },
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] border border-zinc-200/60 shadow-sm hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h3>
                    <p className="text-zinc-500 font-medium leading-relaxed">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Global Stats */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <div className="bg-zinc-950 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px]" />
            <div className="relative z-10 md:w-1/3">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                SelfX by the numbers.
              </h2>
              <p className="text-zinc-400 font-medium">
                Powering the next generation of physical commerce.
              </p>
            </div>
            <div className="relative z-10 w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-red-500 mb-2">270+</span>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Installations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-red-500 mb-2">₹19cr</span>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">GMV Processed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-red-500 mb-2">99.9%</span>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Uptime SLA</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
