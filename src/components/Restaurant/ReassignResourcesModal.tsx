import React, { useState } from 'react'
import { X, Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
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
}
type ReassignResourcesModalProps = {
  isOpen: boolean
  onClose: () => void
  onConfirm: (targetRestaurant: Restaurant) => void
  sourceRestaurantName?: string
}
export function ReassignResourcesModal({
  isOpen,
  onClose,
  onConfirm,
  sourceRestaurantName,
}: ReassignResourcesModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null)
  // Dummy data for restaurants list
  const restaurants: Restaurant[] = [
    {
      id: '1',
      name: 'Pizza Place',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'Ravi Kumar',
      drivers: 2,
      boxes: 5,
      updatedAt: 'Today',
      createdAt: "12 Jan'24",
      hasBoxes: true,
      status: 'active',
    },
    {
      id: '2',
      name: 'Pizza Place',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'Ravi Kumar',
      drivers: 2,
      boxes: 5,
      updatedAt: 'Today',
      createdAt: "12 Jan'24",
      hasBoxes: true,
      status: 'active',
    },
    {
      id: '3',
      name: 'Burger King',
      address: 'Sector 18, Noida, UP, 201301',
      manager: 'Amit Singh',
      drivers: 8,
      boxes: 15,
      updatedAt: 'Yesterday',
      createdAt: "10 Dec'23",
      hasBoxes: true,
      status: 'active',
    },
    {
      id: '4',
      name: 'Taco Bell',
      address: 'Connaught Place, Delhi, 110001',
      manager: 'No manager',
      drivers: 0,
      boxes: 0,
      updatedAt: '2 days ago',
      createdAt: "05 Jan'24",
      hasBoxes: false,
      status: 'active',
    },
  ]
  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const handleConfirm = () => {
    if (selectedRestaurant) {
      onConfirm(selectedRestaurant)
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
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4 flex-shrink-0">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Want to reassign your resources to a new restaurant?
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Select a restaurant from the list. Check the suspended list in
                case any restaurant isn't visible.
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
            <div className="relative w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search restaurant"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-[#FF5722] placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">
                {filteredRestaurants.length} entries
              </span>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <Filter size={12} />
                <span>FILTER</span>
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">
            {/* Showing count and pagination */}
            <div className="px-6 py-2 flex items-center justify-between border-t border-gray-100 bg-gray-50 flex-shrink-0">
              <span className="text-xs text-gray-500">
                Showing 1-{Math.min(50, filteredRestaurants.length)}
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
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-y border-gray-100 text-xs text-gray-400 bg-white flex-shrink-0">
              <div className="col-span-4">Name</div>
              <div className="col-span-4">Address</div>
              <div className="col-span-1">Updated</div>
              <div className="col-span-1">Added</div>
              <div className="col-span-2"></div>
            </div>

            {/* Table Body - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-50 items-center transition-colors ${selectedRestaurant?.id === restaurant.id ? 'bg-orange-50/50' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className="col-span-4">
                    <p className="text-sm font-bold text-slate-900">
                      {restaurant.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      (and {restaurant.boxes} boxes, {restaurant.drivers}{' '}
                      drivers,{' '}
                      {restaurant.manager !== 'No manager'
                        ? '1 manager'
                        : '0 managers'}
                      )
                    </p>
                  </div>
                  <div className="col-span-4">
                    <p className="text-sm text-slate-700 leading-snug">
                      {restaurant.address}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm text-gray-500">
                      {restaurant.updatedAt}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm text-gray-500">
                      {restaurant.createdAt}
                    </span>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    {selectedRestaurant?.id === restaurant.id ? (
                      <button
                        onClick={() => setSelectedRestaurant(null)}
                        className="px-4 py-1.5 border-2 border-[#FF5722] text-[#FF5722] rounded text-xs font-bold uppercase tracking-wide transition-all"
                      >
                        SELECTED
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedRestaurant(restaurant)}
                        className="px-4 py-1.5 border border-gray-300 text-[#FF5722] rounded text-xs font-bold uppercase tracking-wide hover:border-[#FF5722] hover:bg-orange-50 transition-all"
                      >
                        SELECT
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {filteredRestaurants.length === 0 && (
                <div className="p-12 text-center">
                  <p className="text-sm text-gray-400">No restaurants found</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
            <div>
              {selectedRestaurant ? (
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-slate-900">
                    {selectedRestaurant.name}
                  </span>{' '}
                  selected.
                </p>
              ) : (
                <p className="text-sm text-gray-400">
                  No restaurant selected yet!
                </p>
              )}
            </div>
            <button
              onClick={handleConfirm}
              disabled={!selectedRestaurant}
              className={`px-8 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-sm ${selectedRestaurant ? 'bg-[#FF5722] text-white hover:bg-[#F4511E] hover:shadow-md' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              CONFIRM ASSIGNMENT
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
