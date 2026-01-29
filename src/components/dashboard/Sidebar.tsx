'use client'

import React from 'react'
import {
  LayoutDashboard,
  Globe,
  Package,
  Lock,
  Users,
  FileText,
  HelpCircle,
} from 'lucide-react'

type NavItem = {
  label: string
  icon: React.ElementType
  href: string
  active?: boolean
  color?: string
}

type SidebarProps = {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  const navItems: NavItem[] = [
    { label: 'DASHBOARD', icon: LayoutDashboard, href: '#', active: true },
    { label: 'RESTAURANTS', icon: Globe, href: '#' },
    { label: 'GRUBPACS', icon: Package, href: '#' },
    { label: 'GRUBLOCK', icon: Lock, href: '#', color: 'text-orange-500' },
    { label: 'EMPLOYEES', icon: Users, href: '#' },
  ]

  const secondaryNavItems: NavItem[] = [
    { label: 'SYSTEM LOGS', icon: FileText, href: '#' },
    { label: 'HELP', icon: HelpCircle, href: '#' },
  ]

  return (
    <aside
      className={`
        fixed md:static inset-y-0 left-0 z-50
        w-64 bg-white border-r border-gray-200 flex flex-col
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}
    >
      {/* Logo */}
      <div className="h-20 flex items-center px-6">
        <span className="text-2xl font-bold text-[#FF5722]">GrubPac</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg mb-1
              ${item.active ? 'bg-orange-50 border border-orange-100' : 'hover:bg-gray-50'}
            `}
          >
            <item.icon
              size={20}
              className={`${item.active ? 'text-[#FF5722]' : 'text-gray-400'} ${item.color ?? ''}`}
            />
            <span className="text-sm font-medium text-gray-700">
              {item.label}
            </span>
          </a>
        ))}

        <div className="my-4 border-t border-gray-100" />

        {secondaryNavItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50"
          >
            <item.icon size={20} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-600">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-6">
        <div className="flex items-center gap-3 p-2 border rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            className="w-10 h-10 rounded-full"
            alt="User"
          />
          <p className="text-xs font-bold">AKASH SHARMA</p>
        </div>
      </div>
    </aside>
  )
}
