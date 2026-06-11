"use client";

import { useState } from "react";
import { Plus, Trash2, Image as ImageIcon } from "lucide-react";
import { createProduct, deleteProduct, updateProduct } from "@/app/actions";
import Image from "next/image";
import { Edit2 } from "lucide-react";

export default function InventoryClient({ initialProducts }: { initialProducts: any[] }) {
  const [products, setProducts] = useState(initialProducts);
  const [isAdding, setIsAdding] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    setProducts(products.filter(p => p.id !== id));
    await deleteProduct(id);
  };

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await createProduct(formData);
    window.location.reload(); // Refresh to get updated list and IDs from server
  };

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#2B3674] tracking-tight">Inventory CMS</h1>
          <p className="text-[#A3AED0] mt-1 font-medium">Manage hardware, prices, and catalog directly.</p>
        </div>
        <button 
          onClick={() => {
            if (isAdding || editingProduct) {
              setIsAdding(false);
              setEditingProduct(null);
            } else {
              setIsAdding(true);
            }
          }}
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl shadow-sm shadow-red-600/20 hover:bg-red-700 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          {isAdding || editingProduct ? "Cancel" : "Add Hardware"}
        </button>
      </div>

      {(isAdding || editingProduct) && (
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <h3 className="text-xl font-bold text-[#2B3674] mb-6">{editingProduct ? "Edit Product" : "Add New Product"}</h3>
          <form onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const formData = new FormData(e.currentTarget);
            if (editingProduct) {
              await updateProduct(editingProduct.id, formData);
            } else {
              await createProduct(formData);
            }
            window.location.reload();
          }} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2B3674]">Product Name</label>
                <input required name="name" defaultValue={editingProduct?.name || ""} className="w-full px-4 py-3 bg-[#FAFCFF] border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 text-[#2B3674] font-medium" placeholder="e.g. 15'' POS Terminal" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2B3674]">Price (INR)</label>
                <input required type="number" step="0.01" name="price" defaultValue={editingProduct?.price || ""} className="w-full px-4 py-3 bg-[#FAFCFF] border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 text-[#2B3674] font-medium" placeholder="e.g. 799" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2B3674]">Category</label>
                <select name="category" defaultValue={editingProduct?.category || "Accessories"} className="w-full px-4 py-3 bg-[#FAFCFF] border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 text-[#2B3674] font-medium">
                  <option value="Accessories">Accessories</option>
                  <option value="Starter Bundle">Starter Bundle</option>
                  <option value="Pro Bundle">Pro Bundle</option>
                  <option value="Premium">Premium</option>
                  <option value="Top Rated">Top Rated</option>
                  <option value="Top Pick">Top Pick</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#2B3674]">Image URL</label>
                <input required name="image" defaultValue={editingProduct?.image || "/selfx-kiosk.png"} className="w-full px-4 py-3 bg-[#FAFCFF] border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 text-[#2B3674] font-medium" placeholder="/image.png" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#2B3674]">Description</label>
              <textarea required name="description" defaultValue={editingProduct?.description || ""} className="w-full px-4 py-3 bg-[#FAFCFF] border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 text-[#2B3674] font-medium min-h-[100px]" placeholder="Brief description of the product..."></textarea>
            </div>

            <div className="flex justify-end">
              <button disabled={loading} type="submit" className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-sm shadow-red-600/20 transition-all">
                {loading ? "Saving..." : "Save Product"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FAFCFF] border-b border-zinc-50 text-[11px] uppercase tracking-wider text-[#A3AED0] font-bold">
              <th className="px-8 py-5">Product</th>
              <th className="px-8 py-5">Category</th>
              <th className="px-8 py-5">Price</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-[#FAFCFF] transition-colors duration-300">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white border border-zinc-100 rounded-xl overflow-hidden relative flex-shrink-0 shadow-sm">
                      <Image src={p.image} fill alt={p.name} className="object-contain p-2" />
                    </div>
                    <div>
                      <div className="font-bold text-[15px] text-[#2B3674]">{p.name}</div>
                      <div className="text-xs font-medium text-[#A3AED0] truncate max-w-[300px] mt-0.5">{p.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-[11px] font-bold px-3 py-1.5 bg-red-50 text-red-600 rounded-full uppercase tracking-wider">{p.category}</span>
                </td>
                <td className="px-8 py-5 font-black text-lg text-[#2B3674]">
                  ₹{p.price.toLocaleString()}
                </td>
                <td className="px-8 py-5 text-right flex items-center justify-end gap-2">
                  <button 
                    onClick={() => {
                      setIsAdding(false);
                      setEditingProduct(p);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-2.5 text-[#A3AED0] hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDelete(p.id)}
                    className="p-2.5 text-[#A3AED0] hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="px-8 py-16 text-center text-[#A3AED0] font-medium text-[15px]">No products in inventory.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
