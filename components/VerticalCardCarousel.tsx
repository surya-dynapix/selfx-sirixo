"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Card {
  title: string;
  imageSrc: string;
}

interface VerticalCardCarouselProps {
  title?: string;
  subtitle?: string;
  cards: Card[];
}

export default function VerticalCardCarousel({ title, subtitle, cards }: VerticalCardCarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {(title || subtitle) && (
          <div className="text-center mb-20">
            {subtitle && <p className="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">{subtitle}</p>}
            {title && <h2 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-4xl mx-auto">{title}</h2>}
          </div>
        )}

        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-4 w-full">
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const flexBasis = isHovered ? '3' : '1';
            
            return (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-[2rem] cursor-pointer border border-neutral-800"
                style={{ flex: flexBasis }}
                layout
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Image src={card.imageSrc} alt={card.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-300" />
                
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 text-white flex items-end"
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className={`font-black tracking-wide transition-all duration-300 ${isHovered ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl origin-bottom-left md:rotate-0'}`}>
                    {card.title}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
