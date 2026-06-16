"use client";

import Image from "next/image";
import { useSiteContent } from "@/context/SiteContentContext";

export default function BusinessTypes() {
  const content = useSiteContent("businesstypes", {
    title: "Engineered for every hospitality scenario",
    subtitle: "Whether you run a high-volume fine dining restaurant, a bustling café, or a retail outlet, our ecosystem is built to adapt to your unique workflows.",
    type1Name: "Fine Dining",
    type1Image: "/Ultra-premium_fine_dining_restaurant_interior_202606111239.jpeg",
    type2Name: "Quick Service",
    type2Image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081407.jpeg",
    type3Name: "Takeaway",
    type3Image: "/Modern_premium_takeaway_café_and_202606111244.jpeg",
    type4Name: "Café",
    type4Image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081358.jpeg",
    type5Name: "Retail",
    type5Image: "/Ultra-realistic_cinematic_hero-banner_photography_of_202606081403.jpeg"
  });

  const scenarios = [
    { id: "fine-dining", name: content.type1Name, image: content.type1Image },
    { id: "quick-service", name: content.type2Name, image: content.type2Image },
    { id: "takeaway", name: content.type3Name, image: content.type3Image },
    { id: "cafe", name: content.type4Name, image: content.type4Image },
    { id: "retail", name: content.type5Name, image: content.type5Image },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">
            {content.title}
          </h2>
          <p className="text-lg text-zinc-500 font-medium">
            {content.subtitle}
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
