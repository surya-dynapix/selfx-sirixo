import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
