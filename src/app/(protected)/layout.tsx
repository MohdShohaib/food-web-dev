"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  Package,
  Lock,
  Users,
  FileText,
  HelpCircle,
  Menu,
  Bell,
} from "lucide-react";
import { NotificationsPanel } from "@/src/components/dashboard/NotificationsPanel";

type NavItem = {
  label: string;
  icon: React.ElementType;
  href: string;
  color?: string;
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "DASHBOARD", icon: LayoutDashboard, href: "/dashboard" },
    { label: "RESTAURANTS", icon: Globe, href: "/restaurants" },
    { label: "GRUBPACS", icon: Package, href: "/grubpacs" },
    {
      label: "GRUBLOCK",
      icon: Lock,
      href: "/grublock",
      color: "text-orange-500",
    },
    { label: "EMPLOYEES", icon: Users, href: "/employees" },
  ];

  const secondaryNavItems: NavItem[] = [
    { label: "SYSTEM LOGS", icon: FileText, href: "/system-logs" },
    { label: "HELP", icon: HelpCircle, href: "/help" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="flex">
        {/* ================= Sidebar ================= */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50
            w-64 bg-white border-r border-gray-200
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Logo */}
          <div className="h-16 flex items-center px-6 text-2xl font-bold text-[#FF5722] border-b">
            GrubPac
          </div>

          {/* Navigation */}
          <nav className="px-3 py-4 space-y-1">
            {[...navItems, ...secondaryNavItems].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all
                  ${
                    isActive(item.href)
                      ? "bg-orange-50 border border-orange-100 text-[#FF5722]"
                      : "hover:bg-gray-50 text-gray-600"
                  }`}
              >
                <item.icon
                  size={20}
                  className={
                    isActive(item.href)
                      ? "text-[#FF5722]"
                      : item.color ?? "text-gray-400"
                  }
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* ================= Main Area ================= */}
        <main
          className={`
            flex-1 flex flex-col min-h-screen
            transition-all duration-300
            ${isSidebarOpen ? "ml-64" : "ml-0"}
          `}
        >
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-white sticky top-0 z-40">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center gap-2 text-gray-500 hover:text-slate-900"
            >
              <Menu size={20} />
              <span className="text-xs uppercase tracking-wide">
                {isSidebarOpen ? "Collapse" : "Expand"}
              </span>
            </button>

            <button
              onClick={() => setIsNotificationsOpen(true)}
              className="relative p-2 border border-gray-200 rounded-lg text-gray-400 hover:text-slate-900"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF5722] rounded-full" />
            </button>
          </header>

          {/* Page Content */}
          <div className="flex-1 overflow-y-auto">{children}</div>
        </main>
      </div>

      {/* ================= Notifications ================= */}
      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onViewAll={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
}
