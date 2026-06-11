"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

const blogPosts = [
  {
    tag: "POS GUIDES",
    title: "The Ultimate Guide to Setting Up Your Cloud POS System",
    author: "Elena Chen",
    readTime: "4 min read",
    image: "/selfpos.png",
  },
  {
    tag: "OPERATIONS",
    title: "7 Ways to Reduce Kitchen Bottlenecks During Peak Hours",
    author: "Chef David Miller",
    readTime: "6 min read",
    image: "/selfx kitchen.png",
  },
  {
    tag: "GROWTH",
    title: "How to Build a High-Converting White-Label Delivery App",
    author: "Marcus Lindqvist",
    readTime: "5 min read",
    image: "/selfx app.jpeg",
  },
  {
    tag: "HARDWARE",
    title: "Choosing the Right Digital Signage for Your QSR Setup",
    author: "Sara Varma",
    readTime: "3 min read",
    image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081403.jpeg",
  },
  {
    tag: "CASE STUDY",
    title: "How Yume Boba Tea Cut Wait Times by 40% with Self-Serve Kiosks",
    author: "Elena Chen",
    readTime: "8 min read",
    image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081358.jpeg",
  },
  {
    tag: "TRENDS",
    title: "The Rise of Contactless Tabletop Ordering in 2026",
    author: "Marcus Lindqvist",
    readTime: "5 min read",
    image: "/table qr.png",
  },
];

import Link from "next/link";

const categories = ["All Posts", "POS Guides", "Operations", "Hardware", "Growth & Marketing", "Case Studies", "Product Updates"];

export default function BlogClient({ dbPosts }: { dbPosts: any[] }) {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        
        {/* Header Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-zinc-900 leading-[1.1] mb-6">
              Restaurant management tips & trends, delivered.
            </h1>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-lg">
              Join thousands of restaurant owners and managers worldwide who receive SelfX operations updates straight to their inbox.
            </p>
            
            <div className="flex w-full max-w-md gap-3">
              <input 
                type="email" 
                placeholder="Work email address" 
                className="flex-grow px-5 py-3.5 bg-zinc-50 border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm placeholder:text-zinc-400"
              />
              <button className="shrink-0 px-8 py-3.5 bg-zinc-950 text-white rounded-full font-bold text-sm hover:bg-zinc-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-zinc-400 mt-4 font-medium px-4">
              Join 50,000+ subscribers. No spam ever.
            </p>
          </div>

          <div className="w-full md:w-1/2 relative aspect-[16/10] bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/50">
            <Image
              src="/selfpos.png"
              alt="SelfX POS Hero"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-10">
              <span className="text-red-500 font-bold text-xs uppercase tracking-widest mb-2 drop-shadow-md">Featured Video</span>
              <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-4 drop-shadow-md">
                Streamlining peak-hour kitchen orders with SelfX KDS.
              </h3>
              <div className="flex items-center gap-3 text-white">
                <PlayCircle className="w-10 h-10 hover:text-red-500 transition-colors cursor-pointer drop-shadow-md" />
                <span className="font-semibold text-sm drop-shadow-md">Watch 2 min demo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Scroller */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 hide-scrollbar border-b border-zinc-100">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                  idx === 0 
                    ? "bg-zinc-950 text-white border-zinc-950" 
                    : "bg-white text-zinc-500 border-transparent hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {dbPosts.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-zinc-100 mb-6 border border-zinc-200/60 shadow-sm">
                  <Image
                    src={post.image || "/selfpos.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow px-2">
                  <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3">
                    ARTICLE
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight leading-snug mb-4 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-zinc-500 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-600 shrink-0">
                        S
                      </div>
                      <span>SelfX Team</span>
                    </div>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
            {dbPosts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                 <p className="text-xl text-zinc-500 font-medium">No blog posts available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Banner at Bottom */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-100 rounded-full blur-[100px] opacity-50" />

            <div className="w-full md:w-1/2 relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
                Receive the latest SelfX updates.
              </h2>
              <p className="text-zinc-500 font-medium text-lg">
                Join our newsletter to get product updates, tips, and hospitality trends before anyone else.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 relative z-10 flex flex-col gap-3">
              <div className="flex w-full gap-3 shadow-sm rounded-full bg-white p-1.5 border border-zinc-200/80">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="flex-grow px-6 bg-transparent focus:outline-none text-base placeholder:text-zinc-400"
                />
                <button className="shrink-0 px-8 py-4 bg-zinc-950 text-white rounded-full font-bold text-sm hover:bg-zinc-800 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-zinc-400 px-4">
                By subscribing, you agree to our Terms & Privacy Policy.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
