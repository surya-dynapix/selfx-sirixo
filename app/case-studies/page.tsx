import { prisma } from "@/lib/prisma";
import CaseStudiesClient from "./CaseStudiesClient";

export const dynamic = "force-dynamic";

export default async function CaseStudiesPage() {
  const posts = await prisma.post.findMany({
    where: { type: 'case-study', published: true },
    orderBy: { createdAt: "desc" }
  });

  return <CaseStudiesClient dbPosts={posts} />;
}
