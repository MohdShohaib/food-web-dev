import React, { useState } from 'react'
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  RefreshCw,
  Edit3,
  Check,
  User,
  Briefcase,
  MoreVertical,
  Plus,
} from 'lucide-react'
type GrubPac = {
  id: string
  name: string
  boxId: string
  serialNumber: string
  restaurant: string
  power: 'ON' | 'OFF'
  hasDriver: boolean
  driverName?: string
  addedDate: string
  hasWarning: boolean
}
type Employee = {
  id: string
  name: string
  empId: string
  joinedDate: string
  role: string
  phone: string
  email: string
  status: 'active' | 'inactive' | 'suspended'
  assignedManager?: string
  addedDate: string
  hasWarning: boolean
}
type GroupListPageProps = {
  restaurantName?: string
  onBack?: () => void
}
export function GroupListPage({
  restaurantName = 'Pizza Joint',
  onBack,
}: GroupListPageProps) {
  const [activeTab, setActiveTab] = useState<'grubpacs' | 'employees'>(
    'grubpacs',
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [showOffline, setShowOffline] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  // Dummy GrubPacs data
  const grubPacs: GrubPac[] = [
    {
      id: '1',
      name: 'BOX-2456',
      boxId: '#DL12345',
      serialNumber: 'DL28D1234',
      restaurant: 'da Pizza Place',
      power: 'ON',
      hasDriver: false,
      addedDate: 'Today',
      hasWarning: true,
    },
    {
      id: '2',
      name: 'BOX-2456',
      boxId: '#DL12345',
      serialNumber: 'DL28D1234',
      restaurant: 'da Pizza Place',
      power: 'ON',
      hasDriver: false,
      addedDate: 'Today',
      hasWarning: true,
    },
    {
      id: '3',
      name: 'BOX-2456',
      boxId: '#DL12345',
      serialNumber: 'DL28D1234',
      restaurant: 'da Pizza Place',
      power: 'ON',
      hasDriver: true,
      driverName: 'Ravi Kumar',
      addedDate: 'Today',
      hasWarning: false,
    },
    {
      id: '4',
      name: 'BOX-3458',
      boxId: '#DL12346',
      serialNumber: 'DL28D1235',
      restaurant: 'da Pizza Place',
      power: 'OFF',
      hasDriver: true,
      driverName: 'Amit Singh',
      addedDate: 'Yesterday',
      hasWarning: false,
    },
  ]
  // Dummy Employees data
  const employees: Employee[] = [
    {
      id: '1',
      name: 'Ravi Kumar',
      empId: '#DP1234',
      joinedDate: "12 June '25",
      role: 'Driver',
      phone: '+91 98765 43210',
      email: 'ravikr@gmail.com',
      status: 'active',
      assignedManager: 'Priya Sharma',
      addedDate: 'Today',
      hasWarning: false,
    },
    {
      id: '2',
      name: 'Ravi Kumar',
      empId: '#DP1234',
      joinedDate: "12 June '25",
      role: 'Manager',
      phone: '+91 98765 43210',
      email: 'ravikr@gmail.com',
      status: 'active',
      addedDate: 'Today',
      hasWarning: false,
    },
    {
      id: '3',
      name: 'Ravi Kumar',
      empId: '#DP1234',
      joinedDate: "12 June '25",
      role: 'Driver',
      phone: '+91 98765 43210',
      email: 'ravikr@gmail.com',
      status: 'active',
      addedDate: 'Today',
      hasWarning: true,
    },
  ]
  const filteredGrubPacs = grubPacs.filter(
    (g) =>
      g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.boxId.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.empId.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }
  const handleConfirmRemoval = () => {
    console.log('Removing items:', selectedIds)
    setSelectedIds([])
    setIsEditMode(false)
  }
  const handleBack = () => {
    if (isEditMode) {
      setIsEditMode(false)
      setSelectedIds([])
    } else {
      onBack?.()
    }
  }
  return (
    <div className="flex-1 bg-[#FAFAFA] flex flex-col h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="flex items-center justify-between px-8 py-5">
          {isEditMode ? (
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700 uppercase tracking-wide transition-colors"
              >
                <ChevronLeft size={14} />
                BACK
              </button>
              <h1 className="text-xl font-bold text-slate-900">
                Select {activeTab === 'grubpacs' ? 'boxes' : 'employees'} to
                remove
              </h1>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {onBack && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700 uppercase tracking-wide transition-colors"
                >
                  <ChevronLeft size={14} />
                  BACK
                </button>
              )}
              <h1 className="text-xl font-bold text-slate-900">
                Group/{activeTab === 'grubpacs' ? 'GrubPacs' : 'Employee'} list
              </h1>
            </div>
          )}

          <div className="flex items-center gap-4">
            {!isEditMode && (
              <button
                onClick={() => setIsEditMode(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Edit3 size={14} />
                EDIT LIST
              </button>
            )}
          </div>
        </div>

        {/* Restaurant Info Bar */}
        <div className="px-8 py-4 border-t border-gray-100 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-[#FF5722] font-bold text-sm">PJ</span>
                </div>
                <span className="text-lg font-bold text-slate-900">
                  {restaurantName}
                </span>
              </div>

              {/* Tabs */}
              <div className="flex bg-gray-100 rounded-lg p-1 ml-6">
                <button
                  onClick={() => setActiveTab('grubpacs')}
                  className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${activeTab === 'grubpacs' ? 'bg-[#FF5722] text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  GRUBPACS
                </button>
                <button
                  onClick={() => setActiveTab('employees')}
                  className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${activeTab === 'employees' ? 'bg-[#FF5722] text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  EMPLOYEES
                </button>
              </div>
            </div>

            {/* Status badges */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-md border border-gray-200">
                <Briefcase size={12} className="text-gray-500" />
                <span className="text-xs text-gray-600">
                  Manager and Driver
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
                <Check size={12} className="text-green-600" />
                <span className="text-xs text-green-700">
                  Available @ any info
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="px-8 py-4 flex items-center justify-between gap-4 bg-white border-b border-gray-100">
        <div className="relative w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder={`Search ${activeTab === 'grubpacs' ? 'box' : 'employee'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-[#FF5722] placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            {activeTab === 'grubpacs'
              ? filteredGrubPacs.length
              : filteredEmployees.length}{' '}
            entries
          </span>
          {activeTab === 'grubpacs' && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOffline}
                onChange={(e) => setShowOffline(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722]"
              />
              <span className="text-sm text-gray-600">Show offline boxes</span>
            </label>
          )}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
            <Filter size={14} />
            FILTER
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden flex flex-col p-6">
        <div className="bg-white border border-gray-200 rounded-lg flex-1 flex flex-col overflow-hidden">
          {/* Pagination bar */}
          <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100 bg-gray-50 flex-shrink-0">
            <span className="text-xs text-gray-500">
              Showing 1-
              {Math.min(
                50,
                activeTab === 'grubpacs'
                  ? filteredGrubPacs.length
                  : filteredEmployees.length,
              )}
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
          {activeTab === 'grubpacs' ? (
            <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-100 text-xs text-gray-400 bg-white flex-shrink-0">
              {isEditMode && <div className="col-span-1"></div>}
              <div className={isEditMode ? 'col-span-4' : 'col-span-5'}>
                Name
              </div>
              <div className="col-span-2">Power</div>
              <div className="col-span-3">Driver</div>
              <div className="col-span-2">Added</div>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-100 text-xs text-gray-400 bg-white flex-shrink-0">
              {isEditMode && <div className="col-span-1"></div>}
              <div className={isEditMode ? 'col-span-3' : 'col-span-4'}>
                Name
              </div>
              <div className="col-span-3">Contact Info</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Added</div>
            </div>
          )}

          {/* Table Body */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'grubpacs'
              ? filteredGrubPacs.map((grubPac) => (
                  <div
                    key={grubPac.id}
                    className={`grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-50 items-center transition-colors ${isEditMode && selectedIds.includes(grubPac.id) ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
                  >
                    {isEditMode && (
                      <div className="col-span-1">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(grubPac.id)}
                          onChange={() => toggleSelect(grubPac.id)}
                          className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
                        />
                      </div>
                    )}
                    <div className={isEditMode ? 'col-span-4' : 'col-span-5'}>
                      <div className="flex items-center gap-2">
                        {grubPac.hasWarning && (
                          <AlertTriangle
                            size={14}
                            className="text-red-500 flex-shrink-0"
                          />
                        )}
                        <div>
                          <p
                            className={`text-sm font-medium ${grubPac.hasWarning ? 'text-red-600' : 'text-slate-900'}`}
                          >
                            {grubPac.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {grubPac.boxId} | {grubPac.serialNumber} |{' '}
                            {grubPac.restaurant}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${grubPac.power === 'ON' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {grubPac.power}
                      </span>
                    </div>
                    <div className="col-span-3">
                      {grubPac.hasDriver ? (
                        <span className="text-sm text-gray-600">
                          {grubPac.driverName}
                        </span>
                      ) : (
                        <AlertTriangle size={14} className="text-orange-500" />
                      )}
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm text-gray-500">
                        {grubPac.addedDate}
                      </span>
                    </div>
                  </div>
                ))
              : filteredEmployees.map((employee) => (
                  <div
                    key={employee.id}
                    className={`grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-50 items-center transition-colors ${isEditMode && selectedIds.includes(employee.id) ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
                  >
                    {isEditMode && (
                      <div className="col-span-1">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(employee.id)}
                          onChange={() => toggleSelect(employee.id)}
                          className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
                        />
                      </div>
                    )}
                    <div className={isEditMode ? 'col-span-3' : 'col-span-4'}>
                      <div className="flex items-center gap-2">
                        {employee.hasWarning && (
                          <AlertTriangle
                            size={14}
                            className="text-orange-500 flex-shrink-0"
                          />
                        )}
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {employee.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {employee.empId} | Joined {employee.joinedDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <p className="text-sm text-gray-600">{employee.phone}</p>
                      <p className="text-xs text-gray-400">{employee.email}</p>
                    </div>
                    <div className="col-span-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${employee.role === 'Manager' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}
                      >
                        {employee.role === 'Manager' ? (
                          <Briefcase size={10} />
                        ) : (
                          <User size={10} />
                        )}
                        {employee.role}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-sm text-gray-500">
                        {employee.addedDate}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      {/* Footer Action Bar */}
      <div className="px-6 py-4 border-t border-gray-200 bg-white flex items-center justify-between sticky bottom-0">
        {isEditMode ? (
          <>
            <div>
              {selectedIds.length > 0 ? (
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-slate-900">
                    {selectedIds.length}{' '}
                    {activeTab === 'grubpacs' ? 'box' : 'employee'}
                    {selectedIds.length > 1 ? 'es' : ''} selected
                  </span>
                </p>
              ) : (
                <p className="text-sm text-gray-400">No selection yet</p>
              )}
            </div>
            <button
              onClick={handleConfirmRemoval}
              disabled={selectedIds.length === 0}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${selectedIds.length > 0 ? 'bg-[#FF5722] text-white hover:bg-[#F4511E]' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              CONFIRM REMOVAL
            </button>
          </>
        ) : (
          <div className="flex items-center gap-4 w-full">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#FF5722] text-[#FF5722] rounded-lg font-medium text-sm hover:bg-orange-50 transition-colors">
              <RefreshCw size={16} />
              REASSIGN ALL {activeTab === 'grubpacs' ? 'BOXES' : 'EMPLOYEES'}
            </button>
            <button
              onClick={() => setIsEditMode(true)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              <Edit3 size={16} />
              EDIT LIST
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
