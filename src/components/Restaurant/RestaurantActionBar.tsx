import React from 'react'
import { Plus, Users, Package, ChevronRight, AlertTriangle } from 'lucide-react'
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
type RestaurantActionBarProps = {
  restaurant: Restaurant | null
  onAssignManager: () => void
  onAssignEmployees: () => void
  onAssignGrubPacs: () => void
  onViewEmployees: () => void
  onViewGrubPacs: () => void
  onViewDetails: () => void
}
export function RestaurantActionBar({
  restaurant,
  onAssignManager,
  onAssignEmployees,
  onAssignGrubPacs,
  onViewEmployees,
  onViewGrubPacs,
  onViewDetails,
}: RestaurantActionBarProps) {
  if (!restaurant) return null
  const hasManager = restaurant.manager && restaurant.manager !== 'No manager'
  const hasEmployees = restaurant.drivers > 0
  const hasGrubPacs = restaurant.boxes > 0
  return (
    <div className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="flex items-center gap-3 flex-wrap">
        {/* Add/Assign Manager Button */}
        <button
          onClick={onAssignManager}
          className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>

        {/* Assign Manager Chip */}
        <button
          onClick={onAssignManager}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${hasManager ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-orange-50 border border-orange-200 text-[#FF5722] hover:bg-orange-100'}`}
        >
          {!hasManager && <AlertTriangle size={14} />}
          <span>Assign Manager</span>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200" />

        {/* Employees Status Badge */}
        {!hasEmployees ? (
          <button
            onClick={onAssignEmployees}
            className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm hover:bg-orange-100 transition-colors"
          >
            <Users size={14} className="text-[#FF5722]" />
            <span className="text-[#FF5722] font-medium">0</span>
            <div className="text-left ml-1">
              <p className="text-xs text-gray-600">No assigned employees.</p>
              <p className="text-xs text-[#FF5722] font-medium">
                Check list to assign &gt;&gt;
              </p>
            </div>
          </button>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
            <Users size={14} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {restaurant.drivers}
            </span>
            <button
              onClick={onViewEmployees}
              className="text-xs text-gray-500 hover:text-[#FF5722] font-medium transition-colors"
            >
              View list
            </button>
          </div>
        )}

        {/* GrubPacs Status Badge */}
        {!hasGrubPacs ? (
          <button
            onClick={onAssignGrubPacs}
            className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-lg text-sm hover:bg-orange-100 transition-colors"
          >
            <Package size={14} className="text-[#FF5722]" />
            <span className="text-[#FF5722] font-medium">0</span>
            <div className="text-left ml-1">
              <p className="text-xs text-gray-600">No assigned GrubPacs.</p>
              <p className="text-xs text-[#FF5722] font-medium">
                Open GrubPacs to assign &gt;&gt;
              </p>
            </div>
          </button>
        ) : (
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
            <Package size={14} className="text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              {restaurant.boxes}
            </span>
            <button
              onClick={onViewGrubPacs}
              className="text-xs text-gray-500 hover:text-[#FF5722] font-medium transition-colors"
            >
              View list
            </button>
          </div>
        )}

        {/* Divider */}
        <div className="w-px h-8 bg-gray-200" />

        {/* Manager Profile Chip */}
        {hasManager && (
          <div className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-lg">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">
                {restaurant.manager.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">
                {restaurant.manager}
              </p>
              <button
                onClick={onViewDetails}
                className="text-xs text-gray-500 hover:text-[#FF5722] transition-colors"
              >
                View details
              </button>
            </div>
          </div>
        )}

        {/* View List Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={onViewEmployees}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#FF5722] transition-colors"
          >
            <Users size={14} />
            <span className="font-medium">{restaurant.drivers}</span>
            <span className="text-xs text-gray-400">View list</span>
          </button>
          <button
            onClick={onViewGrubPacs}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-[#FF5722] transition-colors"
          >
            <Package size={14} />
            <span className="font-medium">{restaurant.boxes}</span>
            <span className="text-xs text-gray-400">View list</span>
          </button>
        </div>
      </div>
    </div>
  )
}
