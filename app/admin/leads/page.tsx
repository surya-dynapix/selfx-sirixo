import { prisma } from "@/lib/prisma";
import { LogOut, Package, User, Mail, Phone, Building } from "lucide-react";
import Link from "next/link";
import PdfButton from "@/components/PdfButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { items: true }
  });

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#2B3674] tracking-tight">Leads & Quotes</h1>
          <p className="text-[#A3AED0] mt-1 font-medium">Manage and review incoming hardware requests.</p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-[#FAFCFF] rounded-full flex items-center justify-center mb-6">
            <Package className="w-10 h-10 text-[#A3AED0]" />
          </div>
          <h3 className="text-xl font-bold text-[#2B3674] mb-2">No leads yet</h3>
          <p className="text-[#A3AED0] text-[15px] font-medium">When users request a quote, they will appear here.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order: any) => (
            <div key={order.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
              
              {/* Header of Card */}
              <div className="bg-[#FAFCFF] border-b border-zinc-50 px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider
                    ${order.status === 'PENDING' ? 'bg-amber-50 text-amber-600' : 
                      order.status === 'COMPLETED' ? 'bg-emerald-50 text-emerald-600' : 
                      'bg-red-50 text-red-600'}
                  `}>
                    {order.status || 'NEW'}
                  </span>
                  <span className="text-[#A3AED0] text-xs font-bold uppercase tracking-wider">
                    {new Date(order.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[#2B3674] font-black text-xl">₹{order.total.toLocaleString()}</span>
                </div>
              </div>

              {/* Body of Card */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* Customer Info */}
                <div>
                  <h4 className="text-[11px] font-bold text-[#A3AED0] uppercase tracking-wider mb-5 border-b border-zinc-50 pb-3">Customer Details</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[15px] text-[#2B3674] font-semibold">
                      <User className="w-4 h-4 text-[#A3AED0] shrink-0" />
                      {order.name}
                    </div>
                    <div className="flex items-center gap-3 text-[15px] text-[#2B3674] font-semibold">
                      <Mail className="w-4 h-4 text-[#A3AED0] shrink-0" />
                      <a href={`mailto:${order.email}`} className="text-red-600 hover:text-red-700 transition-colors">{order.email}</a>
                    </div>
                    <div className="flex items-center gap-3 text-[15px] text-[#2B3674] font-semibold">
                      <Phone className="w-4 h-4 text-[#A3AED0] shrink-0" />
                      <a href={`tel:${order.phone}`} className="hover:text-red-600 transition-colors">{order.phone}</a>
                    </div>
                    {order.company && (
                      <div className="flex items-center gap-3 text-[15px] text-[#2B3674] font-semibold">
                        <Building className="w-4 h-4 text-[#A3AED0] shrink-0" />
                        {order.company}
                      </div>
                    )}
                  </div>
                </div>

                {/* Requested Hardware */}
                <div>
                  <h4 className="text-[11px] font-bold text-[#A3AED0] uppercase tracking-wider mb-5 border-b border-zinc-50 pb-3">Requested Hardware</h4>
                  <ul className="space-y-3">
                    {order.items.map((item: any) => (
                      <li key={item.id} className="flex items-start justify-between text-[15px]">
                        <div className="flex gap-3">
                          <span className="font-bold text-[#2B3674] bg-[#FAFCFF] px-2 py-0.5 rounded-md">{item.quantity}x</span>
                          <span className="text-[#2B3674] font-semibold">{item.name}</span>
                        </div>
                        <span className="text-[#A3AED0] font-bold whitespace-nowrap ml-4">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Footer of Card */}
              <div className="bg-[#FAFCFF] border-t border-zinc-50 px-8 py-4 flex justify-end gap-3">
                <PdfButton order={order} />
                <a 
                  href={`mailto:${order.email}?subject=SelfX POS Request Inquiry`}
                  className="px-5 py-2.5 bg-red-600 text-white text-sm font-bold rounded-xl shadow-sm shadow-red-600/20 hover:bg-red-700 transition-colors"
                >
                  Email Customer
                </a>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
