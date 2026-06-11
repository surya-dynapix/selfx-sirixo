"use client";

import { useState } from "react";
import { Plus, Trash2, PenTool } from "lucide-react";
import { createPost, deletePost } from "@/app/actions";

export default function MarketingClient({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    setPosts(posts.filter(p => p.id !== id));
    await deletePost(id);
  };

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await createPost(formData);
    window.location.reload(); 
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#2B3674] tracking-tight">Marketing CMS</h1>
          <p className="text-[#A3AED0] font-medium mt-1">Publish SEO-optimized Blogs & Case Studies directly to the site.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="px-6 py-3 bg-[#4318FF] text-white font-bold rounded-xl shadow-lg hover:bg-[#3311DB] transition-all flex items-center gap-2"
        >
          <PenTool className="w-5 h-5" />
          {isAdding ? "Cancel Editor" : "Write New Post"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 mb-10 shadow-[0_18px_40px_rgba(112,144,176,0.12)]">
          <h3 className="text-xl font-bold text-[#2B3674] mb-6">Create New Content</h3>
          <form onSubmit={handleAdd} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2B3674]">Title</label>
                <input required name="title" className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]" placeholder="e.g. How we helped McDonald's scale" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2B3674]">Content Type</label>
                <select name="type" className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]">
                  <option value="blog">Blog Post</option>
                  <option value="case-study">Case Study</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-[#2B3674]">SEO Meta Description (150 chars)</label>
                <input required name="seoDesc" maxLength={160} className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]" placeholder="A brief summary for Google Search..." />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm font-bold text-[#2B3674]">Hero Image URL</label>
                <input name="image" className="w-full px-4 py-3 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF]" placeholder="e.g. /blog-hero-1.png" defaultValue="/Ultra-realistic_premium_product_photography_of_202606091839.jpeg" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#2B3674] flex justify-between">
                <span>Rich Text Content</span>
                <span className="text-xs text-[#A3AED0] font-normal">Supports HTML / Markdown style formatting</span>
              </label>
              <textarea 
                required 
                name="content" 
                rows={12}
                className="w-full px-4 py-4 bg-[#F4F7FE] border-none rounded-xl text-[#2B3674] focus:outline-none focus:ring-2 focus:ring-[#4318FF] font-mono text-sm leading-relaxed" 
                placeholder="Write your article here... You can use HTML like <h2>Heading</h2> or <strong>bold</strong>."
              ></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <button disabled={loading} type="submit" className="px-10 py-3.5 bg-[#4318FF] hover:bg-[#3311DB] text-white font-bold rounded-xl shadow-lg transition-all">
                {loading ? "Publishing..." : "Publish to Website"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white border border-zinc-100 rounded-3xl shadow-[0_18px_40px_rgba(112,144,176,0.12)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-100 text-xs uppercase tracking-wider text-[#A3AED0] font-bold">
              <th className="px-6 py-5">Post Title</th>
              <th className="px-6 py-5">Type</th>
              <th className="px-6 py-5">Published Date</th>
              <th className="px-6 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {posts.map((p) => (
              <tr key={p.id} className="hover:bg-zinc-50/50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-[#2B3674]">{p.title}</div>
                  <div className="text-xs text-[#A3AED0] mt-1 truncate max-w-[400px]">{p.seoDesc}</div>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${p.type === 'case-study' ? 'bg-emerald-50 text-emerald-600' : 'bg-purple-50 text-purple-600'}`}>
                    {p.type === 'case-study' ? 'Case Study' : 'Blog'}
                  </span>
                </td>
                <td className="px-6 py-5 text-[#A3AED0] font-medium text-sm">
                  {new Date(p.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-5 text-right">
                  <button 
                    onClick={() => handleDelete(p.id)}
                    className="p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-16 text-center text-[#A3AED0] font-medium">No published content yet. Write your first post!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
