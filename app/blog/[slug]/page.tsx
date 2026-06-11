import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug }
  });
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | SelfX`,
    description: post.seoDesc,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug }
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <header className="mb-12">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">
              {post.type === 'case-study' ? 'Case Study' : 'Blog Article'}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-[1.1] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-zinc-500 text-sm font-medium">
              <span>Published on {new Date(post.createdAt).toLocaleDateString()}</span>
              <span>•</span>
              <span>SelfX Team</span>
            </div>
          </header>

          {post.image && (
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-md border border-zinc-200/50 bg-zinc-100">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
          )}

          <div 
            className="prose prose-lg prose-zinc max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-red-600 hover:prose-a:text-red-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
