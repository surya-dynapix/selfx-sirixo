"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { useSiteContent } from "@/context/SiteContentContext";

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

export default function Stats() {
  const content = useSiteContent("stats", {
    stat1Value: "4000",
    stat1Suffix: "+",
    stat1Label: "Active Terminals",
    stat2Value: "2.5",
    stat2Suffix: "B+",
    stat2Label: "Orders Processed",
    stat3Value: "80",
    stat3Suffix: "M+",
    stat3Label: "Happy Customers",
    stat4Value: "4",
    stat4Suffix: "",
    stat4Label: "Continents"
  });

  const statsData = [
    { value: parseFloat(content.stat1Value), suffix: content.stat1Suffix, label: content.stat1Label, decimals: content.stat1Value.includes('.') ? content.stat1Value.split('.')[1].length : 0 },
    { value: parseFloat(content.stat2Value), suffix: content.stat2Suffix, label: content.stat2Label, decimals: content.stat2Value.includes('.') ? content.stat2Value.split('.')[1].length : 0 },
    { value: parseFloat(content.stat3Value), suffix: content.stat3Suffix, label: content.stat3Label, decimals: content.stat3Value.includes('.') ? content.stat3Value.split('.')[1].length : 0 },
    { value: parseFloat(content.stat4Value), suffix: content.stat4Suffix, label: content.stat4Label, decimals: content.stat4Value.includes('.') ? content.stat4Value.split('.')[1].length : 0 },
  ];

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
