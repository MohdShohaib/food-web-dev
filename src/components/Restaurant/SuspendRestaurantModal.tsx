import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
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
type ResourceAction = 'reassign' | 'suspend' | 'unassign'
type SuspendRestaurantModalProps = {
  isOpen: boolean
  onClose: () => void
  restaurants: Restaurant[]
  onConfirm: (restaurants: Restaurant[], resourceAction: ResourceAction) => void
}
export function SuspendRestaurantModal({
  isOpen,
  onClose,
  restaurants,
  onConfirm,
}: SuspendRestaurantModalProps) {
  const [selectedAction, setSelectedAction] =
    useState<ResourceAction>('reassign')
  // Reset selection when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedAction('reassign')
    }
  }, [isOpen])
  if (!isOpen || restaurants.length === 0) return null
  const handleConfirm = () => {
    onConfirm(restaurants, selectedAction)
  }
  const isMultiple = restaurants.length > 1
  const firstName = restaurants[0]?.name || 'Restaurant'
  const otherCount = restaurants.length - 1
  // Generate title based on selection count
  const getTitle = () => {
    if (isMultiple) {
      return `Suspend ${firstName} and ${otherCount} other restaurant${otherCount > 1 ? 's' : ''}?`
    }
    return `Suspend ${firstName}?`
  }
  // Generate description based on selection count
  const getDescription = () => {
    if (isMultiple) {
      return 'This will temporarily disable the restaurants. None of the data or history will be lost. You can reactivate them anytime.'
    }
    return 'This will temporarily disable the restaurant. None of the data or history will be lost. You can reactivate it anytime.'
  }
  // Generate button text based on action and count
  const getButtonText = () => {
    const restaurantText = isMultiple ? 'RESTAURANTS' : 'RESTAURANT'
    switch (selectedAction) {
      case 'reassign':
        return `SUSPEND ${restaurantText} & REASSIGN RESOURCES`
      case 'suspend':
        return `SUSPEND ${restaurantText} & SUSPEND RESOURCES`
      case 'unassign':
        return `SUSPEND ${restaurantText} & UNASSIGN RESOURCES`
      default:
        return `SUSPEND ${restaurantText} & RESOURCES`
    }
  }
  // Get description text for suspend option based on count
  const getSuspendOptionDescription = () => {
    if (isMultiple) {
      return 'You can activate them later with their restaurants'
    }
    return 'You can activate them later with this restaurant'
  }
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
            <div className="flex-1 pr-4">
              <h2 className="text-lg font-bold text-slate-900 text-center">
                {getTitle()}
              </h2>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed text-center">
                {getDescription()}
              </p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pb-6">
            <p className="text-sm font-medium text-slate-900 mb-4">
              What do you want to do with the assigned resources?
            </p>

            <div className="space-y-1">
              {/* Reassign option */}
              <label className="flex items-start gap-3 cursor-pointer group py-2">
                <div className="mt-0.5">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAction === 'reassign' ? 'border-[#FF5722]' : 'border-gray-300'}`}
                    onClick={() => setSelectedAction('reassign')}
                  >
                    {selectedAction === 'reassign' && (
                      <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="resourceAction"
                    value="reassign"
                    checked={selectedAction === 'reassign'}
                    onChange={() => setSelectedAction('reassign')}
                    className="sr-only"
                  />
                </div>
                <div onClick={() => setSelectedAction('reassign')}>
                  <p className="text-sm font-medium text-slate-900">
                    Reassign them
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    You can assign them to a different group
                  </p>
                </div>
              </label>

              {/* Suspend option */}
              <label className="flex items-start gap-3 cursor-pointer group py-2">
                <div className="mt-0.5">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAction === 'suspend' ? 'border-[#FF5722]' : 'border-gray-300'}`}
                    onClick={() => setSelectedAction('suspend')}
                  >
                    {selectedAction === 'suspend' && (
                      <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="resourceAction"
                    value="suspend"
                    checked={selectedAction === 'suspend'}
                    onChange={() => setSelectedAction('suspend')}
                    className="sr-only"
                  />
                </div>
                <div onClick={() => setSelectedAction('suspend')}>
                  <p className="text-sm font-medium text-slate-900">
                    Suspend them
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {getSuspendOptionDescription()}
                  </p>
                </div>
              </label>

              {/* Unassign option */}
              <label className="flex items-start gap-3 cursor-pointer group py-2">
                <div className="mt-0.5">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedAction === 'unassign' ? 'border-[#FF5722]' : 'border-gray-300'}`}
                    onClick={() => setSelectedAction('unassign')}
                  >
                    {selectedAction === 'unassign' && (
                      <div className="w-2 h-2 rounded-full bg-[#FF5722]" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="resourceAction"
                    value="unassign"
                    checked={selectedAction === 'unassign'}
                    onChange={() => setSelectedAction('unassign')}
                    className="sr-only"
                  />
                </div>
                <div onClick={() => setSelectedAction('unassign')}>
                  <p className="text-sm font-medium text-slate-900">
                    Unassign them
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    You can mark them as unassigned
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6 space-y-3">
            <button
              onClick={handleConfirm}
              className="w-full py-3 bg-[#FF5722] text-white font-medium text-sm rounded-lg hover:bg-[#F4511E] transition-colors tracking-wide"
            >
              {getButtonText()}
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
