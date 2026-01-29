'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-12">
        Dashboard
      </h1>

      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-8">
        {/* Placeholder Box */}
        <div
          className="w-64 h-64 bg-[#FFD4C4] mb-8"
          aria-hidden="true"
        />

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
  )
}
