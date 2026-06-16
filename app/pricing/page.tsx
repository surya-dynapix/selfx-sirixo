import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";
import PricingPageClient from "./PricingPageClient";

export default async function PricingPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const pageName = "pricing";
  const content = await prisma.siteContent.findMany({
    where: { page: pageName }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <PricingPageClient />
    </SiteContentProvider>
  );
}
