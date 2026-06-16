import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";

export default async function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = await prisma.siteContent.findMany({
    where: { page: "solutions" }
  });

  return (
    <SiteContentProvider initialContent={content}>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </SiteContentProvider>
  );
}
