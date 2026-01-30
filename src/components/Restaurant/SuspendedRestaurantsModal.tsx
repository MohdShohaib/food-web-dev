import React, { useState } from 'react'
import {
  X,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Trash2,
  ArrowLeft,
  MapPin,
  Check,
} from 'lucide-react'
type Restaurant = {
  id: string
  name: string
  address: string
  manager: string
  drivers: number
  boxes: number
  updatedAt: string
  hasBoxes: boolean
  status?: 'active' | 'suspended'
  createdAt?: string
  suspendedAt?: string
}
type SuspendedRestaurantsModalProps = {
  isOpen: boolean
  onClose: () => void
  restaurants: Restaurant[]
  onActivate: (restaurants: Restaurant[], reassign: boolean) => void
  onDelete: (restaurants: Restaurant[]) => void
}
export function SuspendedRestaurantsModal({
  isOpen,
  onClose,
  restaurants,
  onActivate,
  onDelete,
}: SuspendedRestaurantsModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null)
  const [showReactivateModal, setShowReactivateModal] = useState(false)
  const [restaurantsToReactivate, setRestaurantsToReactivate] = useState<
    Restaurant[]
  >([])
  const suspendedRestaurants = restaurants.filter(
    (r) => r.status === 'suspended',
  )
  const filteredRestaurants = suspendedRestaurants.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const toggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }
  const toggleSelectAll = (e: React.MouseEvent) => {
    e.stopPropagation()
    const allIds = filteredRestaurants.map((r) => r.id)
    const allSelected = allIds.every((id) => selectedIds.includes(id))
    if (allSelected) {
      setSelectedIds([])
    } else {
      setSelectedIds(allIds)
    }
  }
  const handleRowClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant)
    setShowDetailModal(true)
  }
  const handleActivateSingle = (
    restaurant: Restaurant,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation()
    setRestaurantsToReactivate([restaurant])
    setShowReactivateModal(true)
  }
  const handleDeleteSingle = (restaurant: Restaurant, e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete([restaurant])
  }
  const handleActivateAll = () => {
    setRestaurantsToReactivate(suspendedRestaurants)
    setShowReactivateModal(true)
  }
  const handleActivateSelected = () => {
    const selected = suspendedRestaurants.filter((r) =>
      selectedIds.includes(r.id),
    )
    setRestaurantsToReactivate(selected)
    setShowReactivateModal(true)
  }
  const handleDeleteSelected = () => {
    const selected = suspendedRestaurants.filter((r) =>
      selectedIds.includes(r.id),
    )
    onDelete(selected)
    setSelectedIds([])
  }
  const handleConfirmReactivate = (reassign: boolean) => {
    onActivate(restaurantsToReactivate, reassign)
    setShowReactivateModal(false)
    setRestaurantsToReactivate([])
    setSelectedIds([])
    setShowDetailModal(false)
  }
  const handleClearSelection = () => {
    setSelectedIds([])
  }
  const allSelected =
    filteredRestaurants.length > 0 &&
    filteredRestaurants.every((r) => selectedIds.includes(r.id))
  const someSelected = selectedIds.length > 0 && !allSelected
  if (!isOpen) return null
  // Reactivate Confirmation Modal
  const renderReactivateModal = () => {
    if (!showReactivateModal) return null
    const isMultiple = restaurantsToReactivate.length > 1
    const firstName = restaurantsToReactivate[0]?.name || 'Restaurant'
    const otherCount = restaurantsToReactivate.length - 1
    const totalBoxes = restaurantsToReactivate.reduce(
      (sum, r) => sum + r.boxes,
      0,
    )
    const totalDrivers = restaurantsToReactivate.reduce(
      (sum, r) => sum + r.drivers,
      0,
    )
    const totalManagers = restaurantsToReactivate.filter(
      (r) => r.manager && r.manager !== 'No manager',
    ).length
    return (
      <div className="fixed inset-0 bg-black/30 z-[60] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
          {/* Close Button */}
          <div className="flex justify-end p-4 pb-0">
            <button
              onClick={() => setShowReactivateModal(false)}
              className="p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 text-center">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              {isMultiple
                ? `Reactivate ${firstName} and ${otherCount} other restaurant${otherCount > 1 ? 's' : ''}?`
                : `Reactivate ${firstName}?`}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">
              {totalBoxes} boxes, {totalDrivers} drivers, and {totalManagers}{' '}
              manager{totalManagers !== 1 ? 's' : ''} previously assigned to the
              restaurant{isMultiple ? 's are' : ' is'} waiting as suspended.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Would you like to activate & reassign them to{' '}
              {isMultiple ? 'their restaurants' : 'the same restaurant'}?
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={() => handleConfirmReactivate(true)}
                className="w-full py-3 bg-[#FF5722] text-white font-medium text-sm rounded-lg hover:bg-[#F4511E] transition-colors tracking-wide"
              >
                YES, REASSIGN THEM
              </button>
              <button
                onClick={() => handleConfirmReactivate(false)}
                className="w-full py-3 border-2 border-[#FF5722] text-[#FF5722] font-medium text-sm rounded-lg hover:bg-orange-50 transition-colors tracking-wide"
              >
                NO, I'LL ACTIVATE THEM LATER
              </button>
              <button
                onClick={() => setShowReactivateModal(false)}
                className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // Detail Modal for Suspended Restaurant
  const renderDetailModal = () => {
    if (!showDetailModal || !selectedRestaurant) return null
    return (
      <div className="fixed inset-0 bg-black/30 z-[60] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <h2 className="text-xl font-bold text-slate-900">
              {selectedRestaurant.name}
            </h2>
            <button
              onClick={() => setShowDetailModal(false)}
              className="p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100 -mt-1 -mr-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pb-6 space-y-4">
            {/* Status */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Status:
              </span>
              <span className="text-sm text-orange-600 font-medium">
                Suspended
              </span>
            </div>

            {/* Created on */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Created on:
              </span>
              <span className="text-sm text-slate-900">
                {selectedRestaurant.createdAt || selectedRestaurant.updatedAt}
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Address:
              </span>
              <div className="flex items-start gap-2 flex-1">
                <span className="text-sm text-slate-900 flex-1">
                  {selectedRestaurant.address ||
                    '[Full address of the restaurant if added]'}
                </span>
                <MapPin
                  size={16}
                  className="text-[#FF5722] flex-shrink-0 mt-0.5"
                />
              </div>
            </div>

            {/* Suspended */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Suspended:
              </span>
              <span className="text-sm text-slate-900">
                {selectedRestaurant.suspendedAt || 'Today'}
              </span>
            </div>

            {/* Resources */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Resources:
              </span>
              <div className="space-y-1">
                <span className="text-sm text-slate-900">
                  {selectedRestaurant.boxes} GrubPacs
                </span>
                <span className="text-sm text-gray-400 mx-2">|</span>
                <span className="text-sm text-slate-900">
                  {selectedRestaurant.drivers} employees
                </span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 pb-6 space-y-3">
            <button
              onClick={() => {
                setRestaurantsToReactivate([selectedRestaurant])
                setShowReactivateModal(true)
              }}
              className="w-full py-3 bg-[#FF5722] text-white font-medium text-sm rounded-lg hover:bg-[#F4511E] transition-colors tracking-wide"
            >
              ACTIVATE RESTAURANT
            </button>
            <button
              onClick={() => {
                onDelete([selectedRestaurant])
                setShowDetailModal(false)
              }}
              className="w-full text-center text-sm text-gray-500 hover:text-red-600 font-medium py-2 transition-colors"
            >
              DELETE RESTAURANT
            </button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Full Screen Modal */}
      <div className="fixed inset-0 z-50 bg-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-slate-900">
              Suspended restaurants
            </h1>
          </div>
          <button
            onClick={handleActivateAll}
            className="px-4 py-2 bg-[#FF5722] text-white rounded-md font-medium text-sm tracking-wide hover:bg-[#F4511E] transition-colors"
          >
            ACTIVATE ALL
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="px-8 py-4 flex items-center justify-between border-b border-gray-100">
          <div className="relative w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search restaurant"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-[#FF5722] placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">
              {filteredRestaurants.length} entries
            </span>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <Filter size={14} />
              <span>FILTER</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Pagination */}
          <div className="px-8 py-2 flex items-center justify-between border-b border-gray-100 bg-gray-50">
            <span className="text-xs text-gray-500">
              Showing 1-{Math.min(50, filteredRestaurants.length)}
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
          <div className="grid grid-cols-12 gap-4 px-8 py-3 border-b border-gray-100 text-xs text-gray-400 bg-white">
            <div className="col-span-1 flex items-center">
              <input
                type="checkbox"
                checked={allSelected}
                ref={(el) => {
                  if (el) el.indeterminate = someSelected
                }}
                onChange={() => {}}
                onClick={toggleSelectAll}
                className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
              />
            </div>
            <div className="col-span-3">Name</div>
            <div className="col-span-3">Address</div>
            <div className="col-span-1">Added</div>
            <div className="col-span-2">Suspended</div>
            <div className="col-span-2"></div>
          </div>

          {/* Table Body */}
          <div className="flex-1 overflow-y-auto">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => handleRowClick(restaurant)}
                className={`grid grid-cols-12 gap-4 px-8 py-4 border-b border-gray-50 items-center cursor-pointer transition-colors ${selectedIds.includes(restaurant.id) ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="col-span-1">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(restaurant.id)}
                    onChange={() => {}}
                    onClick={(e) => toggleSelect(restaurant.id, e)}
                    className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
                  />
                </div>
                <div className="col-span-3">
                  <p className="text-sm font-semibold text-slate-900">
                    {restaurant.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    (and {restaurant.boxes} boxes, {restaurant.drivers} drivers,{' '}
                    {restaurant.manager && restaurant.manager !== 'No manager'
                      ? '1 manager'
                      : '0 managers'}
                    )
                  </p>
                </div>
                <div className="col-span-3">
                  <span className="text-sm text-gray-500">
                    {restaurant.address}
                  </span>
                </div>
                <div className="col-span-1">
                  <span className="text-sm text-gray-500">Yesterday</span>
                </div>
                <div className="col-span-2">
                  <span className="text-sm text-gray-500">Today</span>
                </div>
                <div className="col-span-2 flex items-center justify-end gap-2">
                  <button
                    onClick={(e) => handleActivateSingle(restaurant, e)}
                    className="px-3 py-1.5 border border-[#FF5722] text-[#FF5722] rounded text-xs font-medium uppercase tracking-wide hover:bg-orange-50 transition-colors"
                  >
                    ACTIVATE
                  </button>
                  <button
                    onClick={(e) => handleDeleteSingle(restaurant, e)}
                    className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            {filteredRestaurants.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-sm text-gray-400">
                  No suspended restaurants
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Selection Action Bar */}
        {selectedIds.length > 0 && (
          <div className="px-8 py-4 border-t border-gray-200 bg-white flex items-center gap-4">
            <button
              onClick={handleClearSelection}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-slate-900 hover:bg-gray-50 transition-colors"
            >
              <X size={16} className="text-gray-500" />
              <span>{selectedIds.length} SELECTED</span>
            </button>

            <button
              onClick={handleDeleteSelected}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Trash2 size={16} className="text-gray-500" />
              <span>DELETE SELECTION</span>
            </button>

            <button
              onClick={handleActivateSelected}
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Check size={16} className="text-gray-500" />
              <span>ACTIVATE SELECTION</span>
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {renderDetailModal()}

      {/* Reactivate Modal */}
      {renderReactivateModal()}
    </>
  )
}
