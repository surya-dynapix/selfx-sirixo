import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";
import BookDemoPageClient from "./BookDemoPageClient";

export default async function BookDemoPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const pageName = "book-demo";
  const content = await prisma.siteContent.findMany({
    where: { page: pageName }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <BookDemoPageClient />
    </SiteContentProvider>
  );
}
