'use client'

import React, { useState } from 'react'
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
  ArrowUpRight,
} from 'lucide-react'
import { NotificationsPanel } from './NotificationsPanel'
import { NotificationsPage } from './NotificationsPage'
// Types for navigation items
type NavItem = {
  label: string
  icon: React.ElementType
  href: string
  active?: boolean
  color?: string // For specific icon colors like the lock
}
export function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [showNotificationsPage, setShowNotificationsPage] = useState(false)
  const navItems: NavItem[] = [
    {
      label: 'DASHBOARD',
      icon: LayoutDashboard,
      href: '#',
      active: true,
    },
    {
      label: 'RESTAURANTS',
      icon: Globe,
      href: '#',
    },
    {
      label: 'GRUBPACS',
      icon: Package,
      href: '#',
    },
    {
      label: 'GRUBLOCK',
      icon: Lock,
      href: '#',
      color: 'text-orange-500',
    },
    {
      label: 'EMPLOYEES',
      icon: Users,
      href: '#',
    },
  ]
  const secondaryNavItems: NavItem[] = [
    {
      label: 'SYSTEM LOGS',
      icon: FileText,
      href: '#',
    },
    {
      label: 'HELP',
      icon: HelpCircle,
      href: '#',
    },
  ]
  // If showing notifications page, render that instead
  if (showNotificationsPage) {
    return (
      <div className="min-h-screen bg-white flex font-sans text-slate-900">
        {/* Sidebar Navigation - same as before */}
        <aside
          className={`
            fixed md:static inset-y-0 left-0 z-50
            w-64 bg-white border-r border-gray-200 flex flex-col
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            ${!isSidebarOpen && 'md:hidden'} 
          `}
        >
          {/* Logo Section */}
          <div className="h-20 flex items-center px-6">
            <span className="text-2xl font-bold tracking-tight text-[#FF5722]">
              GrubPac
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group mb-1
                  ${item.active ? 'bg-orange-50 border border-orange-100' : 'hover:bg-gray-50'}
                `}
              >
                <item.icon
                  size={20}
                  className={`
                    ${item.active ? 'text-[#FF5722]' : 'text-gray-400'}
                    ${item.color && !item.active ? item.color : ''}
                  `}
                />
                <span
                  className={`text-sm font-medium ${item.active ? 'text-[#FF5722]' : 'text-gray-600'}`}
                >
                  {item.label}
                </span>
              </a>
            ))}

            <div className="my-4 border-t border-gray-100 mx-3"></div>

            {secondaryNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group mb-1"
              >
                <item.icon size={20} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-600">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 mt-auto">
            <div className="space-y-2 mb-6">
              <a
                href="#"
                className="block text-xs font-medium text-gray-400 hover:text-gray-600"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#"
                className="block text-xs font-medium text-gray-400 hover:text-gray-600"
              >
                TERMS OF SERVICE
              </a>
            </div>

            <div className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Akash Sharma"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">
                  AKASH SHARMA
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content - Notifications Page */}
        <main className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
          {/* Top Header */}
          <header className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
            <button
              className="flex items-center gap-2 text-gray-500 hover:text-slate-900 transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={20} />
              <span className="text-xs font-medium uppercase tracking-wide">
                {isSidebarOpen ? 'Collapse' : 'Expand'}
              </span>
            </button>

            <button
              className="p-2 text-gray-400 hover:text-slate-900 border border-gray-200 rounded-lg transition-colors relative"
              onClick={() => setShowNotificationsPage(false)}
            >
              <Bell size={20} />
            </button>
          </header>

          <NotificationsPage onBack={() => setShowNotificationsPage(false)} />
        </main>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-white flex font-sans text-slate-900">
      {/* Sidebar Navigation */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          ${!isSidebarOpen && 'md:hidden'} 
        `}
      >
        {/* Logo Section */}
        <div className="h-20 flex items-center px-6">
          <span className="text-2xl font-bold tracking-tight text-[#FF5722]">
            GrubPac
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group mb-1
                ${item.active ? 'bg-orange-50 border border-orange-100' : 'hover:bg-gray-50'}
              `}
            >
              <item.icon
                size={20}
                className={`
                  ${item.active ? 'text-[#FF5722]' : 'text-gray-400'}
                  ${item.color && !item.active ? item.color : ''}
                `}
              />
              <span
                className={`text-sm font-medium ${item.active ? 'text-[#FF5722]' : 'text-gray-600'}`}
              >
                {item.label}
              </span>
            </a>
          ))}

          <div className="my-4 border-t border-gray-100 mx-3"></div>

          {secondaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group mb-1"
            >
              <item.icon size={20} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-600">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 mt-auto">
          <div className="space-y-2 mb-6">
            <a
              href="#"
              className="block text-xs font-medium text-gray-400 hover:text-gray-600"
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="block text-xs font-medium text-gray-400 hover:text-gray-600"
            >
              TERMS OF SERVICE
            </a>
          </div>

          <div className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Akash Sharma"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">
                AKASH SHARMA
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <button
            className="flex items-center gap-2 text-gray-500 hover:text-slate-900 transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={20} />
            <span className="text-xs font-medium uppercase tracking-wide">
              {isSidebarOpen ? 'Collapse' : 'Expand'}
            </span>
          </button>

          <button
            className="p-2 text-gray-400 hover:text-slate-900 border border-gray-200 rounded-lg transition-colors relative"
            onClick={() => setIsNotificationsOpen(true)}
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF5722] rounded-full"></span>
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold text-slate-900 mb-12">Dashboard</h1>

          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-8">
            {/* Placeholder Box */}
            <div
              className="w-64 h-64 bg-[#FFD4C4] mb-8"
              aria-hidden="true"
            ></div>

            {/* Greeting */}
            <h2 className="text-xl font-bold text-slate-900 mb-3 text-center">
              Good morning Akash!
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-center mb-8 max-w-md">
              Ready to start your day? Head over to boxes section to check your
              GrubPacs.
            </p>

            {/* CTA Button */}
            <button
              className="
                flex items-center gap-2 
                bg-[#FF5722] text-white 
                px-6 py-3 rounded-md font-medium text-sm tracking-wide
                hover:bg-[#F4511E] transition-colors shadow-sm
              "
            >
              <span>CHECK BOXES</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </main>

      {/* Notifications Panel */}
      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onViewAll={() => {
          setIsNotificationsOpen(false)
          setShowNotificationsPage(true)
        }}
      />
    </div>
  )
}
