"use client";

import Image from "next/image";

const scenarios = [
  { id: "fine-dining", name: "Fine Dining", image: "/Ultra-premium_fine_dining_restaurant_interior_202606111239.jpeg" },
  { id: "quick-service", name: "Quick Service", image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081407.jpeg" },
  { id: "takeaway", name: "Takeaway", image: "/Modern_premium_takeaway_café_and_202606111244.jpeg" },
  { id: "cafe", name: "Café", image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081358.jpeg" },
  { id: "retail", name: "Retail", image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081403.jpeg" },
];

export default function BusinessTypes() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">
            Engineered for every hospitality scenario
          </h2>
          <p className="text-lg text-zinc-500 font-medium">
            Whether you run a high-volume fine dining restaurant, a bustling café, or a retail outlet, our ecosystem is built to adapt to your unique workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {scenarios.map((scenario) => (
            <div 
              key={scenario.id} 
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image 
                src={scenario.image} 
                alt={scenario.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <span className="text-white font-bold text-lg tracking-wide shadow-black drop-shadow-md">
                  {scenario.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
