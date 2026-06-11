import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ArrowRight, BarChart3, Clock, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Case Studies | SelfX POS",
  description: "See how top restaurants and retail spaces scale their operations using SelfX POS.",
};

import Link from "next/link";

export default function CaseStudiesClient({ dbPosts }: { dbPosts: any[] }) {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-20">
        
        {/* Header Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-24 text-center">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest block mb-4">
            Customer Success
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6">
            Proven results for <br className="hidden sm:block" />
            modern businesses.
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Discover how leading restaurants, cafes, and retail spaces use SelfX POS to eliminate bottlenecks, increase margins, and deliver exceptional customer experiences.
          </p>
        </section>

        {/* Case Studies Grid */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {dbPosts.map((study) => (
              <div 
                key={study.id} 
                className="group flex flex-col bg-zinc-50 rounded-[2rem] border border-zinc-200/60 overflow-hidden hover:border-zinc-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-video overflow-hidden bg-zinc-200">
                  <Image
                    src={study.image || "/restuarent.png"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-900 shadow-sm">
                    Success Story
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <h3 className="text-xl text-zinc-500 font-medium mb-3">
                    SelfX Case Study
                  </h3>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-6 leading-snug">
                    {study.title}
                  </h2>
                  <p className="text-zinc-600 leading-relaxed mb-10 flex-grow">
                    {study.seoDesc}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-auto">
                    <Link 
                      href={`/blog/${study.slug}`} 
                      className="inline-flex items-center text-red-600 font-bold hover:text-red-700 transition-colors group/link"
                    >
                      Read full case study 
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {dbPosts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                 <p className="text-xl text-zinc-500 font-medium">No case studies available yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
