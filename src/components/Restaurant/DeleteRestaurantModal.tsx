import React, { useState } from 'react'
import { X, ArrowLeft, AlertTriangle, MapPin } from 'lucide-react'
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
type ResourceAction = 'reassign' | 'unassign'
type DeleteRestaurantModalProps = {
  isOpen: boolean
  onClose: () => void
  restaurants: Restaurant[]
  onConfirm: (restaurants: Restaurant[], resourceAction: ResourceAction) => void
  onSuspendInstead: (restaurants: Restaurant[]) => void
}
export function DeleteRestaurantModal({
  isOpen,
  onClose,
  restaurants,
  onConfirm,
  onSuspendInstead,
}: DeleteRestaurantModalProps) {
  const [step, setStep] = useState<'warning' | 'manage'>('warning')
  const [selectedAction, setSelectedAction] =
    useState<ResourceAction>('reassign')
  if (!isOpen || restaurants.length === 0) return null
  const isMultiple = restaurants.length > 1
  const firstName = restaurants[0]?.name || 'Restaurant'
  const otherCount = restaurants.length - 1
  const hasResources = restaurants.some((r) => r.drivers > 0 || r.boxes > 0)
  const handleClose = () => {
    setStep('warning')
    setSelectedAction('reassign')
    onClose()
  }
  const handleManageResources = () => {
    setStep('manage')
  }
  const handleBack = () => {
    setStep('warning')
  }
  const handleConfirm = () => {
    onConfirm(restaurants, selectedAction)
    handleClose()
  }
  const handleSuspend = () => {
    onSuspendInstead(restaurants)
    handleClose()
  }
  // Generate title based on selection count
  const getTitle = () => {
    if (isMultiple) {
      return `Delete ${firstName} and ${otherCount} other restaurant${otherCount > 1 ? 's' : ''}?`
    }
    return `Delete ${firstName}?`
  }
  // Generate button text based on action and count
  const getButtonText = () => {
    const restaurantText = isMultiple ? 'RESTAURANTS' : 'RESTAURANT'
    switch (selectedAction) {
      case 'reassign':
        return `DELETE ${restaurantText} & REASSIGN RESOURCES`
      case 'unassign':
        return `DELETE ${restaurantText} & UNASSIGN RESOURCES`
      default:
        return `DELETE ${restaurantText}`
    }
  }
  // Warning Step
  if (step === 'warning') {
    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={handleClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            {/* Close Button */}
            <div className="flex justify-end p-4 pb-0">
              <button
                onClick={handleClose}
                className="p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Illustration */}
            <div className="flex justify-center py-4">
              <div className="relative">
                <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center relative">
                    <MapPin
                      size={32}
                      className="text-[#FF5722]"
                      fill="#FF5722"
                    />
                  </div>
                </div>
                {/* X mark overlay */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center border-2 border-white">
                  <X size={16} className="text-red-500" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 text-center">
              <h2 className="text-lg font-bold text-slate-900 mb-3">
                {getTitle()}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-2">
                This will permanently delete the restaurant
                {isMultiple ? 's' : ''}.
                {hasResources &&
                  " Since there are some assigned resources, you'll have to manage them first."}
              </p>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                <AlertTriangle size={14} className="text-amber-500" />
                This action cannot be undone. Your historical logs will remain.
              </p>
            </div>

            {/* Actions */}
            <div className="px-6 pb-6 space-y-3">
              {hasResources ? (
                <button
                  onClick={handleManageResources}
                  className="w-full py-3 border-2 border-[#FF5722] text-[#FF5722] font-medium text-sm rounded-lg hover:bg-orange-50 transition-colors tracking-wide"
                >
                  I UNDERSTAND, GO TO MANAGE RESOURCES
                </button>
              ) : (
                <button
                  onClick={() => onConfirm(restaurants, 'unassign')}
                  className="w-full py-3 bg-[#FF5722] text-white font-medium text-sm rounded-lg hover:bg-[#F4511E] transition-colors tracking-wide"
                >
                  I UNDERSTAND, DELETE{' '}
                  {isMultiple ? 'RESTAURANTS' : 'RESTAURANT'}
                </button>
              )}

              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-500">
                  Not sure? You can suspend the restaurant
                  {isMultiple ? 's' : ''} instead.
                </p>
                <button
                  onClick={handleSuspend}
                  className="px-4 py-2 border border-[#FF5722] text-[#FF5722] text-sm font-medium rounded-lg hover:bg-orange-50 transition-colors"
                >
                  SUSPEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  // Manage Resources Step
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="font-medium">BACK</span>
            </button>
            <button
              onClick={handleClose}
              className="p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <h2 className="text-lg font-bold text-slate-900 text-center mb-6">
              Manage resources before deleting the restaurant
              {isMultiple ? 's' : ''}.
            </h2>

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
                    You can assign them to a different restaurant
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
              onClick={handleClose}
              className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              CANCEL
            </button>
          </div>

          {/* Suspend Alternative */}
          <div className="px-6 pb-6 pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Not sure? You can suspend the restaurant{isMultiple ? 's' : ''}{' '}
                instead.
              </p>
              <button
                onClick={handleSuspend}
                className="px-4 py-2 border border-[#FF5722] text-[#FF5722] text-sm font-medium rounded-lg hover:bg-orange-50 transition-colors"
              >
                SUSPEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
