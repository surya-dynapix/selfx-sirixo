"use client";

export default function PartnersLogos() {
  return (
    <section className="py-16 bg-white flex flex-col items-center">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
          Our Hardware <span className="text-red-600">Partners</span>
        </h3>
      </div>
      
      <div className="w-full flex justify-center items-center gap-6 md:gap-12 flex-wrap px-6 max-w-5xl mx-auto opacity-80">
        <div className="text-xl font-black text-red-600 tracking-tighter">stripe</div>
        <div className="text-xl font-black text-zinc-900 flex items-center gap-1">
          <span className="w-4 h-4 bg-zinc-900 rounded-sm"></span> SQUARE
        </div>
        <div className="text-xl font-bold text-green-500 italic tracking-tight">gojek</div>
        <div className="text-2xl font-bold text-red-600 italic tracking-tighter">Zomato</div>
        <div className="text-2xl font-black text-orange-500 tracking-tighter">Swiggy</div>
        <div className="text-xl font-bold text-green-600 tracking-widest uppercase">Uber<span className="text-black">Eats</span></div>
      </div>
    </section>
  );
}
