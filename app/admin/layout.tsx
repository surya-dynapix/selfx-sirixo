"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Package, LogOut, Hexagon, PenTool, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const links = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Leads & Quotes", href: "/admin/leads", icon: Users },
    { name: "Inventory CMS", href: "/admin/inventory", icon: Package },
    { name: "Marketing CMS", href: "/admin/marketing", icon: PenTool },
    { name: "Site Content CMS", href: "/admin/content", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FE] flex font-sans text-[#2B3674]">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white flex flex-col fixed h-full z-50 shadow-[0_0_20px_rgba(0,0,0,0.02)]">
        <div className="p-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-md shadow-red-600/20">
            <Hexagon className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-[#2B3674]">SelfX</span>
        </div>

        <nav className="flex-1 px-4 py-2 flex flex-col gap-2 overflow-y-auto">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all ${
                  isActive 
                    ? "bg-red-50 text-red-600" 
                    : "text-[#A3AED0] hover:bg-zinc-50 hover:text-[#2B3674]"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-red-600 rounded-r-md" />
                )}
                <link.icon className={`w-5 h-5 ${isActive ? "text-red-600" : "text-[#A3AED0]"}`} />
                <span className="text-[15px]">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mb-4">
          <Link href="/api/auth/signout" className="flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold text-[#A3AED0] hover:bg-zinc-50 hover:text-[#2B3674] transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-[15px]">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-[260px]">
        {children}
      </main>
    </div>
  );
}
