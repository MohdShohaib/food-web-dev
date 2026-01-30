"use client";
import React, { useState } from 'react'
import { X, Search, ChevronLeft, ChevronRight } from 'lucide-react'
type Manager = {
  id: string
  name: string
  empId: string
  joinedDate: string
  phone: string
  email: string
  addedDate: string
}
type AssignManagerModalProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm: (manager: Manager) => void
  restaurantName?: string
}
export function AssignManagerModal({
  isOpen,
  onClose,
  onConfirm,
  restaurantName,
}: AssignManagerModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isGrouped, setIsGrouped] = useState(false)
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null)
  // Dummy managers data
  const managers: Manager[] = [
    {
      id: '1',
      name: 'Ravi Kumar',
      empId: '#DP1234',
      joinedDate: "12 June '25",
      phone: '+91 98765 43210',
      email: 'ravikr@gmail.com',
      addedDate: 'Today',
    },
    {
      id: '2',
      name: 'Ravi Kumar',
      empId: '#DP1234',
      joinedDate: "12 June '25",
      phone: '+91 98765 43210',
      email: 'ravikr@gmail.com',
      addedDate: 'Today',
    },
    {
      id: '3',
      name: 'Priya Sharma',
      empId: '#DP1235',
      joinedDate: "10 May '25",
      phone: '+91 98765 43211',
      email: 'priyas@gmail.com',
      addedDate: 'Yesterday',
    },
  ]
  const filteredManagers = managers.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.empId.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const handleConfirm = () => {
    if (selectedManager) {
      onConfirm(selectedManager)
    }
  }
  if (!isOpen) return null
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4 flex-shrink-0">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Ready to assign a manager to your restaurant?
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Select a manager from the list. Managers suspended or already
                assigned to a restaurant aren't visible here.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100 -mt-1 -mr-1 flex-shrink-0"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search and Controls */}
          <div className="px-6 pb-4 flex items-center justify-between gap-4 flex-shrink-0">
            <div className="relative w-48">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search manager"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-[#FF5722] placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">
                {filteredManagers.length} entries
              </span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isGrouped}
                  onChange={(e) => setIsGrouped(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722]"
                />
                <span className="text-sm text-gray-600">Grouped</span>
              </label>
            </div>
          </div>

          {/* Table Section */}
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">
            {/* Showing count and pagination */}
            <div className="px-6 py-2 flex items-center justify-between border-t border-gray-100 bg-gray-50 flex-shrink-0">
              <span className="text-xs text-gray-500">
                Showing 1-{Math.min(50, filteredManagers.length)}
              </span>
              <div className="flex items-center gap-1">
                <button
                  className="p-1 border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-40"
                  disabled
                >
                  <ChevronLeft size={12} />
                </button>
                <button className="p-1 border border-gray-200 rounded hover:bg-gray-100">
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>

            {/* Table Header - Sticky */}
            <div className="grid grid-cols-12 gap-2 px-6 py-3 border-y border-gray-100 text-xs text-gray-400 bg-white flex-shrink-0">
              <div className="col-span-4">Name</div>
              <div className="col-span-4">Contact Info</div>
              <div className="col-span-2">Added</div>
              <div className="col-span-2"></div>
            </div>

            {/* Table Body - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {filteredManagers.map((manager) => (
                <div
                  key={manager.id}
                  className="grid grid-cols-12 gap-2 px-6 py-3 border-b border-gray-50 items-center bg-white"
                >
                  <div className="col-span-4">
                    <p className="text-sm font-medium text-slate-900">
                      {manager.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {manager.empId} · Joined {manager.joinedDate}
                    </p>
                  </div>
                  <div className="col-span-4">
                    <p className="text-sm text-gray-600">{manager.phone}</p>
                    <p className="text-xs text-gray-400">{manager.email}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm text-gray-500">
                      {manager.addedDate}
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    {selectedManager?.id === manager.id ? (
                      <button
                        onClick={() => setSelectedManager(null)}
                        className="px-3 py-1.5 border-2 border-[#FF5722] text-[#FF5722] rounded text-xs font-medium uppercase tracking-wide"
                      >
                        SELECTED
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedManager(manager)}
                        className="px-3 py-1.5 border border-gray-300 text-gray-600 rounded text-xs font-medium uppercase tracking-wide hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
                      >
                        SELECT
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {filteredManagers.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-sm text-gray-400">No managers found</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
            <div>
              {selectedManager && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-slate-900">
                    {selectedManager.name}
                  </span>{' '}
                  selected.
                </p>
              )}
            </div>
            <button
              onClick={handleConfirm}
              disabled={!selectedManager}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${selectedManager ? 'bg-[#FF5722] text-white hover:bg-[#F4511E]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              CONFIRM ASSIGNMENT
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
