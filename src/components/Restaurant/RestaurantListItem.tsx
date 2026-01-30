import React, { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  MoreVertical,
  MapPin,
  User,
  Truck,
  Package,
} from 'lucide-react'
export type Restaurant = {
  id: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  manager: string
  drivers: number
  boxes: number
  updatedAt: string
  status: 'active' | 'suspended'
}
type RestaurantListItemProps = {
  restaurant: Restaurant
  isSelected: boolean
  onToggleSelect: () => void
}
export function RestaurantListItem({
  restaurant,
  isSelected,
  onToggleSelect,
}: RestaurantListItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      {/* Main Row */}
      <div
        className={`
          flex items-center py-4 px-4 hover:bg-gray-50 transition-colors
          ${isExpanded ? 'bg-gray-50' : 'bg-white'}
        `}
      >
        {/* Checkbox */}
        <div className="pr-4">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={onToggleSelect}
            className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
          />
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 text-gray-400 hover:text-slate-900 transition-colors mr-2"
        >
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* Name & Basic Info */}
        <div className="flex-1 min-w-0 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-4">
            <h3 className="text-sm font-bold text-slate-900">
              {restaurant.name}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5 truncate">
              {restaurant.address}
            </p>
          </div>

          <div className="col-span-3 flex items-center gap-2 text-gray-500">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
              <User size={12} />
            </div>
            <span className="text-xs">
              {restaurant.manager || 'No manager'}
            </span>
          </div>

          <div className="col-span-1 flex items-center gap-1 text-gray-500">
            <Truck size={14} />
            <span className="text-xs">{restaurant.drivers}</span>
          </div>

          <div className="col-span-1 flex items-center gap-1 text-gray-500">
            <Package size={14} />
            <span className="text-xs">{restaurant.boxes}</span>
          </div>

          <div className="col-span-2 text-right">
            <span className="text-xs text-gray-400">
              {restaurant.updatedAt}
            </span>
          </div>

          <div className="col-span-1 text-right">
            <button className="text-gray-400 hover:text-slate-900">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="bg-gray-50 px-12 py-4 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Address Details
              </h4>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin
                  size={16}
                  className="text-gray-400 mt-0.5 flex-shrink-0"
                />
                <div>
                  <p>{restaurant.address}</p>
                  <p>
                    {restaurant.city}, {restaurant.state} {restaurant.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <button className="text-xs font-medium text-[#FF5722] hover:text-[#F4511E] border border-[#FF5722] rounded px-3 py-1.5 hover:bg-orange-50 transition-colors">
                VIEW GRUBPACS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
