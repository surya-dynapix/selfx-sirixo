import { prisma } from "@/lib/prisma";
import MarketingClient from "./MarketingClient";

export const dynamic = "force-dynamic";

export default async function MarketingPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <MarketingClient initialPosts={posts} />;
}
