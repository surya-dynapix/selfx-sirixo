"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ value, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(v) {
          node.textContent = v.toFixed(decimals) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix, decimals]);

  return <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">0{suffix}</span>;
}

const statsData = [
  { value: 4000, suffix: "+", label: "Active Terminals" },
  { value: 2.5, suffix: "B+", decimals: 1, label: "Orders Processed" },
  { value: 80, suffix: "M+", label: "Happy Customers" },
  { value: 4, suffix: "", label: "Continents" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-red-700 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-red-500/50">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <p className="text-red-100 font-bold uppercase tracking-widest text-sm md:text-xs lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
