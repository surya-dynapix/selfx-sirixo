import { prisma } from "@/lib/prisma";
import HardwareClient from "./HardwareClient";
import { SiteContentProvider } from "@/context/SiteContentContext";

export const dynamic = "force-dynamic";

export default async function HardwarePage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const products = await prisma.product.findMany();
  const content = await prisma.siteContent.findMany({
    where: { page: "hardware" }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <HardwareClient products={products} />
    </SiteContentProvider>
  );
}
