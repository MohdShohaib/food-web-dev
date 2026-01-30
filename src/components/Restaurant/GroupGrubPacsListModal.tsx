import React, { useState } from 'react'
import {
  X,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  User,
  ArrowLeft,
} from 'lucide-react'
type GrubPac = {
  id: string
  name: string
  boxId: string
  serialNumber: string
  restaurant: string
  power: 'ON' | 'OFF'
  hasDriver: boolean
  driverName?: string
  addedDate: string
  hasWarning: boolean
}
type GroupGrubPacsListModalProps = {
  isOpen: boolean
  onClose: () => void
  restaurantName: string
  onConfirmRemoval: (selectedIds: string[]) => void
  initialEditMode?: boolean
}
export function GroupGrubPacsListModal({
  isOpen,
  onClose,
  restaurantName,
  onConfirmRemoval,
  initialEditMode = true,
}: GroupGrubPacsListModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [showOffline, setShowOffline] = useState(true)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  // Dummy GrubPacs data
  const grubPacs: GrubPac[] = [
    {
      id: '1',
      name: 'BOX-2456',
      boxId: '#DL12345',
      serialNumber: 'DL28D1234',
      restaurant: 'da Pizza Place',
      power: 'ON',
      hasDriver: false,
      addedDate: 'Today',
      hasWarning: true,
    },
    {
      id: '2',
      name: 'BOX-2456',
      boxId: '#DL12345',
      serialNumber: 'DL28D1234',
      restaurant: 'da Pizza Place',
      power: 'ON',
      hasDriver: false,
      addedDate: 'Today',
      hasWarning: true,
    },
    {
      id: '3',
      name: 'BOX-2456',
      boxId: '#DL12345',
      serialNumber: 'DL28D1234',
      restaurant: 'da Pizza Place',
      power: 'ON',
      hasDriver: false,
      addedDate: 'Today',
      hasWarning: false,
    },
  ]
  const filteredGrubPacs = grubPacs.filter(
    (g) =>
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.boxId.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }
  const toggleSelectAll = () => {
    if (selectedIds.length === filteredGrubPacs.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(filteredGrubPacs.map((g) => g.id))
    }
  }
  const handleConfirmRemoval = () => {
    onConfirmRemoval(selectedIds)
    setSelectedIds([])
  }
  const handleBack = () => {
    setSelectedIds([])
    onClose()
  }
  if (!isOpen) return null
  const allSelected =
    selectedIds.length === filteredGrubPacs.length &&
    filteredGrubPacs.length > 0
  const someSelected =
    selectedIds.length > 0 && selectedIds.length < filteredGrubPacs.length
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
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[85vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="font-medium">BACK</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Title */}
          <div className="px-6 pt-4 pb-2">
            <h2 className="text-xl font-bold text-slate-900">
              Select boxes to remove
            </h2>
          </div>

          {/* Search and Controls */}
          <div className="px-6 py-4 flex items-center justify-between gap-4">
            <div className="relative w-32">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search box"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-[#FF5722] placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">
                {filteredGrubPacs.length} entries
              </span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOffline}
                  onChange={(e) => setShowOffline(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722]"
                />
                <span className="text-sm text-gray-600">
                  Show offline boxes
                </span>
              </label>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <Filter size={12} />
                FILTER
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="flex-1 overflow-hidden flex flex-col min-h-0 mx-6 mb-4 border border-gray-200 rounded-lg">
            {/* Showing count and pagination */}
            <div className="px-4 py-2 flex items-center justify-between bg-gray-50 border-b border-gray-100">
              <span className="text-xs text-gray-500">
                Showing 1-{Math.min(50, filteredGrubPacs.length)}
              </span>
              <div className="flex items-center gap-1">
                <button
                  className="p-1 border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-40 bg-white"
                  disabled
                >
                  <ChevronLeft size={12} />
                </button>
                <button className="p-1 border border-gray-200 rounded hover:bg-gray-100 bg-white">
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-100 text-xs text-gray-400 bg-white">
              <div className="col-span-1 flex items-center">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = someSelected
                  }}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
                />
              </div>
              <div className="col-span-5">Name</div>
              <div className="col-span-2 text-center">Power</div>
              <div className="col-span-2 text-center">Driver</div>
              <div className="col-span-2">Added</div>
            </div>

            {/* Table Body */}
            <div className="flex-1 overflow-y-auto bg-white">
              {filteredGrubPacs.map((grubPac) => (
                <div
                  key={grubPac.id}
                  className={`grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-50 items-center transition-colors ${selectedIds.includes(grubPac.id) ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="col-span-1">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(grubPac.id)}
                      onChange={() => toggleSelect(grubPac.id)}
                      className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
                    />
                  </div>
                  <div className="col-span-5">
                    <div className="flex items-center gap-2">
                      {grubPac.hasWarning && (
                        <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center flex-shrink-0">
                          <AlertTriangle
                            size={12}
                            className="text-orange-500"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {grubPac.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {grubPac.boxId} | {grubPac.serialNumber} |{' '}
                          {grubPac.restaurant}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${grubPac.power === 'ON' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
                    >
                      {grubPac.power}
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    {grubPac.hasDriver ? (
                      <span className="text-sm text-gray-600">
                        {grubPac.driverName}
                      </span>
                    ) : (
                      <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                        <User size={12} className="text-orange-500" />
                      </div>
                    )}
                  </div>
                  <div className="col-span-2">
                    <span className="text-sm text-gray-500">
                      {grubPac.addedDate}
                    </span>
                  </div>
                </div>
              ))}

              {filteredGrubPacs.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-sm text-gray-400">No boxes found</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white">
            <div>
              {selectedIds.length > 0 ? (
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-slate-900">
                    {selectedIds.length} box
                    {selectedIds.length > 1 ? 'es' : ''} selected.
                  </span>
                </p>
              ) : (
                <p className="text-sm text-gray-400">No box selected yet!</p>
              )}
            </div>
            <button
              onClick={handleConfirmRemoval}
              disabled={selectedIds.length === 0}
              className={`px-8 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${selectedIds.length > 0 ? 'bg-[#FF5722] text-white hover:bg-[#F4511E]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              CONFIRM REMOVAL
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
