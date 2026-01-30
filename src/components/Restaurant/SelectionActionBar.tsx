import React from 'react'
import { X, RefreshCw, Trash2, PauseCircle } from 'lucide-react'
type SelectionActionBarProps = {
  selectedCount: number
  onClearSelection: () => void
  onReassignResources: () => void
  onDeleteSelection: () => void
  onSuspendSelection: () => void
}
export function SelectionActionBar({
  selectedCount,
  onClearSelection,
  onReassignResources,
  onDeleteSelection,
  onSuspendSelection,
}: SelectionActionBarProps) {
  if (selectedCount === 0) return null
  return (
    <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 px-8 py-4 z-30 shadow-lg">
      <div className="flex items-center gap-4">
        {/* Selected Count */}
        <button
          onClick={onClearSelection}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-slate-900 hover:bg-gray-50 transition-colors"
        >
          <X size={16} className="text-gray-500" />
          <span>{selectedCount} SELECTED</span>
        </button>

        {/* Reassign Resources */}
        <button
          onClick={onReassignResources}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <RefreshCw size={16} className="text-gray-500" />
          <span>REASSIGN RESOURCES</span>
        </button>

        {/* Delete Selection */}
        <button
          onClick={onDeleteSelection}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Trash2 size={16} className="text-gray-500" />
          <span>DELETE SELECTION</span>
        </button>

        {/* Suspend Selection */}
        <button
          onClick={onSuspendSelection}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <PauseCircle size={16} className="text-gray-500" />
          <span>SUSPEND SELECTION</span>
        </button>
      </div>
    </div>
  )
}
