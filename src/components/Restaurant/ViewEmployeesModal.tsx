import React, { useState } from 'react'
import {
  X,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  UserPlus,
  Edit3,
} from 'lucide-react'
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
type ViewEmployeesModalProps = {
  isOpen: boolean
  onClose: () => void
  restaurantName: string
  onAssignEmployee: () => void
  onEditList: () => void
}
export function ViewEmployeesModal({
  isOpen,
  onClose,
  restaurantName,
  onAssignEmployee,
  onEditList,
}: ViewEmployeesModalProps) {
  const [activeTab, setActiveTab] = useState<'grubpacs' | 'employees'>(
    'employees',
  )
  const [searchQuery, setSearchQuery] = useState('')
  // Dummy employees data
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
      name: 'Amit Singh',
      empId: '#DP1235',
      joinedDate: "10 May '25",
      role: 'Driver',
      phone: '+91 98765 43211',
      email: 'amits@gmail.com',
      status: 'active',
      addedDate: 'Yesterday',
      hasWarning: true,
    },
    {
      id: '3',
      name: 'Neha Gupta',
      empId: '#DP1236',
      joinedDate: "5 April '25",
      role: 'Driver',
      phone: '+91 98765 43212',
      email: 'nehag@gmail.com',
      status: 'inactive',
      addedDate: '2 days ago',
      hasWarning: false,
    },
  ]
  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.empId.toLowerCase().includes(searchQuery.toLowerCase()),
  )
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
        <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4 flex-shrink-0">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {restaurantName}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              {/* Tabs */}
              <div className="flex bg-gray-100 rounded-lg p-1">
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
              <button
                onClick={onClose}
                className="p-1 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Search and Controls */}
          <div className="px-6 pb-4 flex items-center justify-between gap-4 flex-shrink-0">
            <div className="relative w-48">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search employee"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-[#FF5722] placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">
                {filteredEmployees.length} entries
              </span>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <Filter size={12} />
                FILTER
              </button>
            </div>
          </div>

          {/* Table Section */}
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">
            {/* Showing count and pagination */}
            <div className="px-6 py-2 flex items-center justify-between border-t border-gray-100 bg-gray-50 flex-shrink-0">
              <span className="text-xs text-gray-500">
                Showing 1-{Math.min(50, filteredEmployees.length)}
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

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 px-6 py-3 border-y border-gray-100 text-xs text-gray-400 bg-white flex-shrink-0">
              <div className="col-span-4">Name</div>
              <div className="col-span-3">Contact Info</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-3">Manager</div>
            </div>

            {/* Table Body */}
            <div className="flex-1 overflow-y-auto">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="grid grid-cols-12 gap-2 px-6 py-3 border-b border-gray-50 items-center bg-white"
                >
                  <div className="col-span-4">
                    <div className="flex items-center gap-2">
                      {employee.hasWarning && (
                        <AlertTriangle size={14} className="text-orange-500" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {employee.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {employee.empId} | {employee.role} | Joined{' '}
                          {employee.joinedDate}
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
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${employee.status === 'active' ? 'bg-green-100 text-green-700' : employee.status === 'inactive' ? 'bg-gray-100 text-gray-600' : 'bg-red-100 text-red-700'}`}
                    >
                      {employee.status.charAt(0).toUpperCase() +
                        employee.status.slice(1)}
                    </span>
                  </div>
                  <div className="col-span-3">
                    {employee.assignedManager ? (
                      <span className="text-sm text-gray-600">
                        {employee.assignedManager}
                      </span>
                    ) : (
                      <span className="text-sm text-orange-500 flex items-center gap-1">
                        <AlertTriangle size={12} />
                        Not assigned
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center gap-4 bg-white flex-shrink-0">
            <button
              onClick={onAssignEmployee}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#FF5722] text-[#FF5722] rounded-lg font-medium text-sm hover:bg-orange-50 transition-colors"
            >
              <UserPlus size={16} />
              ASSIGN EMPLOYEES
            </button>
            <button
              onClick={onEditList}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              <Edit3 size={16} />
              EDIT LIST
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
