import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";
import SupportPageClient from "./SupportPageClient";

export default async function SupportPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const pageName = "support";
  const content = await prisma.siteContent.findMany({
    where: { page: pageName }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <SupportPageClient />
    </SiteContentProvider>
  );
}
