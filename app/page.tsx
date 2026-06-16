import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessTypes from "@/components/BusinessTypes";
import FeatureHighlight from "@/components/FeatureHighlight";
import HardwareShowcase from "@/components/HardwareShowcase";
import Pricing from "@/components/Pricing";
import PartnersLogos from "@/components/PartnersLogos";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import HomeFaq from "@/components/HomeFaq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";
import Solutions from "@/components/Solutions";
import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";

export default async function Home(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const content = await prisma.siteContent.findMany({
    where: { page: "home" }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <ClientLogos />
          <Solutions />
          <BusinessTypes />
          <FeatureHighlight />
          <HardwareShowcase />
          <Pricing />
          <PartnersLogos />
          <Gallery />
          <Stats />
          <HomeFaq />
          <CtaBanner />
        </main>

        <Footer />
      </div>
    </SiteContentProvider>
  );
}
