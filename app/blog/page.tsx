import { prisma } from "@/lib/prisma";
import BlogClient from "./BlogClient";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { type: 'blog', published: true },
    orderBy: { createdAt: "desc" }
  });

  return <BlogClient dbPosts={posts} />;
}
