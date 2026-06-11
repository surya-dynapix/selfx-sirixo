import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HardwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
