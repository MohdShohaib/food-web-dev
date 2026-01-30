import React, { useEffect, useState, useRef } from 'react'
import {
  MoreVertical,
  Edit3,
  RefreshCw,
  PauseCircle,
  Trash2,
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
}
type RestaurantRowMenuProps = {
  restaurant: Restaurant
  onEditDetails: (restaurant: Restaurant) => void
  onReassignResources: (restaurant: Restaurant) => void
  onSuspend: (restaurant: Restaurant) => void
  onDelete: (restaurant: Restaurant) => void
}
export function RestaurantRowMenu({
  restaurant,
  onEditDetails,
  onReassignResources,
  onSuspend,
  onDelete,
}: RestaurantRowMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  const handleAction = (action: () => void) => {
    setIsOpen(false)
    action()
  }
  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        className="p-1 text-gray-400 hover:text-gray-600 transition-colors rounded hover:bg-gray-100"
      >
        <MoreVertical size={16} />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1 overflow-hidden"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleAction(() => onEditDetails(restaurant))
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
          >
            <Edit3 size={14} className="text-gray-400" />
            Edit details
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleAction(() => onReassignResources(restaurant))
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
          >
            <RefreshCw size={14} className="text-gray-400" />
            Reassign resources
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleAction(() => onSuspend(restaurant))
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
          >
            <PauseCircle size={14} className="text-gray-400" />
            Suspend restaurant
          </button>
          <div className="border-t border-gray-100 my-1" />
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleAction(() => onDelete(restaurant))
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
          >
            <Trash2 size={14} className="text-red-400" />
            Delete restaurant
          </button>
        </div>
      )}
    </div>
  )
}
