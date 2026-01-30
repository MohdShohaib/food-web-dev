import React from 'react'
import { AlertTriangle, X, ChevronRight } from 'lucide-react'
type ConflictBannerProps = {
  isVisible: boolean
  message?: string
  onViewDetails?: () => void
  onDismiss?: () => void
}
export function ConflictBanner({
  isVisible,
  message = 'Some managers could not be reassigned due to conflicts. Their accounts has been marked as unassigned.',
  onViewDetails,
  onDismiss,
}: ConflictBannerProps) {
  if (!isVisible) return null
  return (
    <div className="bg-orange-50 border-b border-orange-100 px-8 py-3 flex items-center justify-between animate-in slide-in-from-top-2 duration-300">
      <div className="flex items-center gap-3">
        <AlertTriangle size={18} className="text-orange-500" />
        <p className="text-sm text-orange-800">
          <span className="font-bold text-orange-600">Conflict</span> {message}
        </p>
      </div>
      <div className="flex items-center gap-6">
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="text-sm font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wide flex items-center gap-1 transition-colors"
          >
            VIEW DETAILS
            <ChevronRight size={14} />
          </button>
        )}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-orange-400 hover:text-orange-600 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  )
}
