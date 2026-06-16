import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";
import AboutClient from "./AboutClient";

export default async function AboutPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const content = await prisma.siteContent.findMany({
    where: { page: "about" }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <AboutClient />
    </SiteContentProvider>
  );
}
