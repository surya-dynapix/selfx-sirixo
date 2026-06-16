import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";
import IntegrationsPageClient from "./IntegrationsPageClient";

export default async function IntegrationsPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const pageName = "integrations";
  const content = await prisma.siteContent.findMany({
    where: { page: pageName }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <IntegrationsPageClient />
    </SiteContentProvider>
  );
}
