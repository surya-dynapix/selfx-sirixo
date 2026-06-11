import { prisma } from "@/lib/prisma";
import { TrendingUp, Users, DollarSign, Package, ArrowRight, MoreHorizontal, Calendar, Download } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminAnalyticsDashboard() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { items: true }
  });

  const totalLeads = orders.length;
  const pipelineValue = orders.reduce((sum, order) => sum + order.total, 0);
  const productsCount = await prisma.product.count();

  const recentLeads = orders.slice(0, 5);

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto">
      {/* Top Header matching image */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-[#2B3674] tracking-tight">Dashboard</h1>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-zinc-100 text-sm font-semibold text-[#A3AED0]">
            <Calendar className="w-4 h-4" />
            <span>Jan 1, 2026 - Feb 1, 2026</span>
          </div>
          <button className="hidden md:flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-zinc-100 text-sm font-semibold text-[#A3AED0]">
             Last 30 days
          </button>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl shadow-sm shadow-red-600/20 text-sm font-semibold transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[15px] font-bold text-[#2B3674]">Pipeline Value</h3>
            <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-3">
            <div className="text-3xl font-bold text-[#2B3674]">₹{pipelineValue.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md mb-1">
              <TrendingUp className="w-3 h-3" />
              12.5%
            </div>
          </div>
          <div className="text-xs font-medium text-[#A3AED0] mt-2">vs. last period</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[15px] font-bold text-[#2B3674]">Total Leads</h3>
            <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-3">
            <div className="text-3xl font-bold text-[#2B3674]">{totalLeads.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md mb-1">
              <TrendingUp className="w-3 h-3" />
              8.4%
            </div>
          </div>
          <div className="text-xs font-medium text-[#A3AED0] mt-2">vs. last period</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[15px] font-bold text-[#2B3674]">Hardware Items</h3>
            <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-end gap-3">
            <div className="text-3xl font-bold text-[#2B3674]">{productsCount}</div>
            <div className="flex items-center gap-1 text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md mb-1">
              <TrendingUp className="w-3 h-3 rotate-180" />
              2.1%
            </div>
          </div>
          <div className="text-xs font-medium text-[#A3AED0] mt-2">vs. last period</div>
        </div>
      </div>

      {/* Recent Activity Table matching image */}
      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="px-6 py-6 border-b border-zinc-50 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#2B3674]">Recent Pipeline Activity</h3>
          <button className="text-[#A3AED0] hover:text-[#2B3674] transition-colors">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        
        <div className="w-full">
          <div className="grid grid-cols-12 px-6 py-3 border-b border-zinc-50 bg-[#FAFCFF] text-xs font-bold text-[#A3AED0] uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-5">Client</div>
            <div className="col-span-4 sm:col-span-3 text-right sm:text-left">Value</div>
            <div className="col-span-4 sm:col-span-4 text-right">Status</div>
          </div>
          
          <div className="divide-y divide-zinc-50">
            {recentLeads.length === 0 ? (
              <div className="px-6 py-8 text-center text-[#A3AED0] text-sm font-medium">No activity yet.</div>
            ) : (
              recentLeads.map((lead) => (
                <div key={lead.id} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-[#FAFCFF] transition-colors">
                  <div className="col-span-4 sm:col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">
                      {lead.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[15px] text-[#2B3674] truncate">{lead.name}</span>
                      <span className="text-xs font-medium text-[#A3AED0] truncate">{lead.email}</span>
                    </div>
                  </div>
                  
                  <div className="col-span-4 sm:col-span-3 text-right sm:text-left font-bold text-[15px] text-[#2B3674]">
                    ₹{lead.total.toLocaleString()}
                  </div>
                  
                  <div className="col-span-4 sm:col-span-4 flex justify-end">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full
                      ${lead.status === 'PENDING' ? 'bg-amber-50 text-amber-600' : 
                        lead.status === 'COMPLETED' ? 'bg-emerald-50 text-emerald-600' : 
                        'bg-zinc-100 text-zinc-500'}
                    `}>
                      {lead.status || 'NEW'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
