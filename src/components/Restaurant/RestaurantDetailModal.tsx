import React from 'react'
import { X, MapPin, ChevronRight, UserPlus } from 'lucide-react'
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
type RestaurantDetailModalProps = {
  isOpen: boolean
  onClose: () => void
  restaurant: Restaurant | null
  onEdit: (restaurant: Restaurant) => void
  onDelete: (restaurant: Restaurant) => void
  onAddManager?: (restaurant: Restaurant) => void
}
export function RestaurantDetailModal({
  isOpen,
  onClose,
  restaurant,
  onEdit,
  onDelete,
  onAddManager,
}: RestaurantDetailModalProps) {
  if (!isOpen || !restaurant) return null
  const hasManager = restaurant.manager && restaurant.manager !== 'No manager'
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
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <h2 className="text-xl font-bold text-slate-900">
              {restaurant.name}
            </h2>
            <button
              onClick={onClose}
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
              <span className="text-sm text-slate-900 font-medium">
                {restaurant.status === 'suspended' ? 'Suspended' : 'Active'}
              </span>
            </div>

            {/* Created on */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Created on:
              </span>
              <span className="text-sm text-slate-900">
                {restaurant.createdAt || restaurant.updatedAt}
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Address:
              </span>
              <div className="flex items-start gap-2 flex-1">
                <span className="text-sm text-slate-900 flex-1">
                  {restaurant.address ||
                    '[Full address of the restaurant if added]'}
                </span>
                <MapPin
                  size={16}
                  className="text-[#FF5722] flex-shrink-0 mt-0.5"
                />
              </div>
            </div>

            {/* Manager */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Manager:
              </span>
              <div className="flex items-center gap-2 flex-1">
                {hasManager ? (
                  <span className="text-sm text-slate-900">
                    {restaurant.manager}
                  </span>
                ) : (
                  <button
                    onClick={() => onAddManager?.(restaurant)}
                    className="text-sm text-[#FF5722] hover:text-[#F4511E] font-medium flex items-center gap-1 transition-colors"
                  >
                    <UserPlus size={14} />
                    Add manager
                  </button>
                )}
              </div>
            </div>

            {/* Resources */}
            <div className="flex items-start">
              <span className="text-sm text-gray-500 w-24 flex-shrink-0">
                Resources:
              </span>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-8">
                  <span className="text-sm text-slate-900">
                    {restaurant.boxes} GrubPacs
                  </span>
                  <button className="text-xs font-medium text-gray-500 hover:text-[#FF5722] uppercase tracking-wide flex items-center gap-0.5 transition-colors">
                    VIEW LIST
                    <ChevronRight size={14} />
                  </button>
                </div>
                <div className="flex items-center justify-between gap-8">
                  <span className="text-sm text-slate-900">
                    {restaurant.drivers} employees
                  </span>
                  <button className="text-xs font-medium text-gray-500 hover:text-[#FF5722] uppercase tracking-wide flex items-center gap-0.5 transition-colors">
                    VIEW LIST
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 pb-6 space-y-3">
            <button
              onClick={() => onEdit(restaurant)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#FF5722] text-[#FF5722] rounded-lg font-medium text-sm tracking-wide hover:bg-orange-50 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              EDIT DETAILS
            </button>

            <button
              onClick={() => onDelete(restaurant)}
              className="w-full text-center text-sm text-gray-500 hover:text-red-600 font-medium py-2 transition-colors"
            >
              DELETE RESTAURANT
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
