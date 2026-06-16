import { prisma } from "@/lib/prisma";
import { SiteContentProvider } from "@/context/SiteContentContext";
import SolutionPageClient from "@/components/SolutionPageClient";
import { SOLUTION_DEFAULTS } from "@/lib/solutionData";

export default async function FoodCourtsPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const isPreview = searchParams.preview === "true";
  const solutionKey = "solutions-food-courts";
  const content = await prisma.siteContent.findMany({
    where: { page: solutionKey }
  });

  return (
    <SiteContentProvider initialContent={content} isPreview={isPreview}>
      <SolutionPageClient solutionKey={solutionKey} defaultData={SOLUTION_DEFAULTS[solutionKey]} />
    </SiteContentProvider>
  );
}
