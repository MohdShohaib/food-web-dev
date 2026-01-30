"use client";
import React, { useEffect, useState, useRef } from 'react'
import {
  Plus,
  Search,
  Filter,
  X,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Users,
  Package,
  Check,
} from 'lucide-react'
import { AddRestaurantModal } from '@/components/Restaurant/AddRestaurantModal'
import { SelectionActionBar } from '@/components/Restaurant/SelectionActionBar'
import { EditRestaurantModal } from '@/components/Restaurant/EditRestaurantModal'
import { RestaurantDetailModal } from '@/components/Restaurant/RestaurantDetailModal'
import { AssignManagerModal } from '@/components/Restaurant/AssignManagerModal'
import { ReassignResourcesModal } from '@/components/Restaurant/ReassignResourcesModal'
import { ViewGrubPacsModal } from '@/components/Restaurant/ViewGrubPacsModal'
import { ViewEmployeesModal } from '@/components/Restaurant/ViewEmployeesModal'
import { AssignEmployeesModal } from '@/components/Restaurant/AssignEmployeesModal'
import { SuspendRestaurantModal } from '@/components/Restaurant/SuspendRestaurantModal'
import { DeleteRestaurantModal } from '@/components/Restaurant/DeleteRestaurantModal'
import { ConflictBanner } from '@/components/Restaurant/ConflictBanner'
import { RestaurantRowMenu } from '@/components/Restaurant/RestaurantRowMenu'
import { SuspendedRestaurantsModal } from '@/components/Restaurant/SuspendedRestaurantsModal';
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
  suspendedAt?: string
}
type ExpandedSection = 'withBoxes' | 'withoutBoxes' | null
type FilterOptions = {
  manager: boolean
  driver: boolean
  box: boolean
}
export default function RestaurantsPage() {
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [restaurantToEdit, setRestaurantToEdit] = useState<Restaurant | null>(
    null,
  )
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [newRestaurantName, setNewRestaurantName] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [expandedSection, setExpandedSection] =
    useState<ExpandedSection>('withBoxes')
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showManagerModal, setShowManagerModal] = useState(false)
  const [restaurantForManager, setRestaurantForManager] =
    useState<Restaurant | null>(null)
  const [showGrubPacsModal, setShowGrubPacsModal] = useState(false)
  const [showEmployeesModal, setShowEmployeesModal] = useState(false)
  const [showAssignEmployeesModal, setShowAssignEmployeesModal] =
    useState(false)
  const [showAssignGrubPacsModal, setShowAssignGrubPacsModal] = useState(false)
  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant | null>(
    null,
  )
  const [showSuspendModal, setShowSuspendModal] = useState(false)
  const [restaurantsToSuspend, setRestaurantsToSuspend] = useState<
    Restaurant[]
  >([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [restaurantsToDelete, setRestaurantsToDelete] = useState<Restaurant[]>(
    [],
  )
  const [showReassignModal, setShowReassignModal] = useState(false)
  const [restaurantToReassignFrom, setRestaurantToReassignFrom] =
    useState<Restaurant | null>(null)
  const [showConflictBanner, setShowConflictBanner] = useState(false)
  const [showSuspendedModal, setShowSuspendedModal] = useState(false)
  // Filter state
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    manager: true,
    driver: true,
    box: true,
  })
  const [tempFilterOptions, setTempFilterOptions] = useState<FilterOptions>({
    manager: true,
    driver: true,
    box: true,
  })
  const filterButtonRef = useRef<HTMLButtonElement>(null)
  const filterDropdownRef = useRef<HTMLDivElement>(null)
  // Close filter dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target as Node) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(event.target as Node)
      ) {
        setShowFilterDropdown(false)
        setTempFilterOptions(filterOptions)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [filterOptions])
  // Dummy Data
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    {
      id: '1',
      name: 'Da Pizza Corner',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'No manager',
      drivers: 0,
      boxes: 12,
      updatedAt: "12 Jan'24",
      createdAt: "12 Jan'24",
      hasBoxes: true,
      status: 'active',
    },
    {
      id: '2',
      name: 'Da Pizza Corner',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'Ravi Kumar',
      drivers: 5,
      boxes: 12,
      updatedAt: "12 Jan'24",
      createdAt: "12 Jan'24",
      hasBoxes: true,
      status: 'active',
    },
    {
      id: '3',
      name: 'Da Pizza Corner',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'No manager',
      drivers: 5,
      boxes: 12,
      updatedAt: "12 Jan'24",
      createdAt: "12 Jan'24",
      hasBoxes: true,
      status: 'active',
    },
    {
      id: '4',
      name: 'Pizza Joint',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'Ravi Kumar',
      drivers: 2,
      boxes: 5,
      updatedAt: "12 Jan'24",
      createdAt: "12 Jan'24",
      hasBoxes: false,
      status: 'suspended',
      suspendedAt: 'Today',
    },
    {
      id: '5',
      name: 'Pizza Joint',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'Ravi Kumar',
      drivers: 2,
      boxes: 5,
      updatedAt: "12 Jan'24",
      createdAt: "12 Jan'24",
      hasBoxes: false,
      status: 'suspended',
      suspendedAt: 'Today',
    },
    {
      id: '6',
      name: 'Pizza Joint',
      address: 'D12, Rohini West, Delhi, India, 110012',
      manager: 'Ravi Kumar',
      drivers: 2,
      boxes: 5,
      updatedAt: "12 Jan'24",
      createdAt: "12 Jan'24",
      hasBoxes: false,
      status: 'suspended',
      suspendedAt: 'Today',
    },
  ])
  const handleFilterToggle = () => {
    if (!showFilterDropdown) {
      setTempFilterOptions(filterOptions)
    }
    setShowFilterDropdown(!showFilterDropdown)
  }
  const handleApplyFilter = () => {
    setFilterOptions(tempFilterOptions)
    setShowFilterDropdown(false)
  }
  const handleCancelFilter = () => {
    setTempFilterOptions(filterOptions)
    setShowFilterDropdown(false)
  }
  const handleRowClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant)
    setActiveRestaurant(restaurant)
    setShowDetailModal(true)
  }
  const handleDriversClick = (restaurant: Restaurant, e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveRestaurant(restaurant)
    if (restaurant.drivers > 0) {
      setShowEmployeesModal(true)
    } else {
      setShowAssignEmployeesModal(true)
    }
  }
  const handleBoxesClick = (restaurant: Restaurant, e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveRestaurant(restaurant)
    if (restaurant.boxes > 0) {
      setShowGrubPacsModal(true)
    } else {
      setShowAssignGrubPacsModal(true)
    }
  }
  const handleEditRestaurant = (restaurant: Restaurant) => {
    setRestaurantToEdit(restaurant)
    setShowDetailModal(false)
    setShowEditModal(true)
  }
  const handleSaveEditedRestaurant = (data: any) => {
    setRestaurants(
      restaurants.map((r) =>
        r.id === data.id
          ? {
              ...r,
              name: data.name,
              status: data.status,
            }
          : r,
      ),
    )
    setShowEditModal(false)
    setRestaurantToEdit(null)
  }
  const handleDeleteRestaurant = (restaurant: Restaurant) => {
    setRestaurantsToDelete([restaurant])
    setShowDeleteModal(true)
    setShowDetailModal(false)
  }
  const handleAddManager = (restaurant: Restaurant) => {
    setRestaurantForManager(restaurant)
    setShowDetailModal(false)
    setShowManagerModal(true)
  }
  const handleConfirmManager = (manager: any) => {
    if (restaurantForManager) {
      setRestaurants(
        restaurants.map((r) =>
          r.id === restaurantForManager.id
            ? {
                ...r,
                manager: manager.name,
              }
            : r,
        ),
      )
      if (activeRestaurant?.id === restaurantForManager.id) {
        setActiveRestaurant({
          ...activeRestaurant,
          manager: manager.name,
        })
      }
    }
    setShowManagerModal(false)
    setRestaurantForManager(null)
  }
  const handleConfirmEmployees = (employees: any[]) => {
    if (activeRestaurant) {
      setRestaurants(
        restaurants.map((r) =>
          r.id === activeRestaurant.id
            ? {
                ...r,
                drivers: r.drivers + employees.length,
              }
            : r,
        ),
      )
      setActiveRestaurant({
        ...activeRestaurant,
        drivers: activeRestaurant.drivers + employees.length,
      })
    }
    setShowAssignEmployeesModal(false)
  }
  const handleSaveRestaurant = (data: any) => {
    const newRestaurant: Restaurant = {
      id: Date.now().toString(),
      name: data.name,
      address:
        `${data.line1 || ''}, ${data.city || ''}, ${data.state || ''}, ${data.pincode || ''}`.replace(
          /^, |, $/g,
          '',
        ),
      manager: 'No manager',
      drivers: 0,
      boxes: 0,
      updatedAt: new Date()
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: '2-digit',
        })
        .replace(/ /g, " '"),
      createdAt: new Date()
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: '2-digit',
        })
        .replace(/ /g, " '"),
      hasBoxes: false,
      status: data.status || 'active',
    }
    setRestaurants([newRestaurant, ...restaurants])
    setNewRestaurantName(data.name)
    setShowAddModal(false)
    setShowSuccessToast(true)
    setTimeout(() => setShowSuccessToast(false), 5000)
  }
  const toggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }
  const toggleSection = (section: ExpandedSection) => {
    setExpandedSection(expandedSection === section ? null : section)
  }
  const handleSuspendRestaurant = (restaurant: Restaurant) => {
    setRestaurantsToSuspend([restaurant])
    setShowSuspendModal(true)
  }
  const handleSuspendSelected = () => {
    const selected = restaurants.filter((r) => selectedIds.includes(r.id))
    if (selected.length > 0) {
      setRestaurantsToSuspend(selected)
      setShowSuspendModal(true)
    }
  }
  const handleDeleteSelected = () => {
    const selected = restaurants.filter((r) => selectedIds.includes(r.id))
    if (selected.length > 0) {
      setRestaurantsToDelete(selected)
      setShowDeleteModal(true)
    }
  }
  const handleConfirmSuspend = (
    restaurantsToUpdate: Restaurant[],
    resourceAction: string,
  ) => {
    const idsToSuspend = restaurantsToUpdate.map((r) => r.id)
    setRestaurants(
      restaurants.map((r) =>
        idsToSuspend.includes(r.id)
          ? {
              ...r,
              status: 'suspended' as const,
              suspendedAt: 'Today',
            }
          : r,
      ),
    )
    setShowSuspendModal(false)
    setRestaurantsToSuspend([])
    setSelectedIds(selectedIds.filter((id) => !idsToSuspend.includes(id)))
  }
  const handleConfirmDelete = (
    restaurantsToRemove: Restaurant[],
    resourceAction: string,
  ) => {
    const idsToDelete = restaurantsToRemove.map((r) => r.id)
    setRestaurants(restaurants.filter((r) => !idsToDelete.includes(r.id)))
    setShowDeleteModal(false)
    setRestaurantsToDelete([])
    setSelectedIds(selectedIds.filter((id) => !idsToDelete.includes(id)))
    setActiveRestaurant(null)
  }
  const handleSuspendInsteadOfDelete = (
    restaurantsToSuspendInstead: Restaurant[],
  ) => {
    setShowDeleteModal(false)
    setRestaurantsToDelete([])
    setRestaurantsToSuspend(restaurantsToSuspendInstead)
    setShowSuspendModal(true)
  }
  const handleReassignResources = (restaurant: Restaurant) => {
    setRestaurantToReassignFrom(restaurant)
    setShowReassignModal(true)
  }
  const handleReassignSelectedResources = () => {
    setRestaurantToReassignFrom(null)
    setShowReassignModal(true)
  }
  const handleConfirmReassign = (targetRestaurant: Restaurant) => {
    setShowReassignModal(false)
    setRestaurantToReassignFrom(null)
    setShowConflictBanner(true)
  }
  const handleClearSelection = () => {
    setSelectedIds([])
  }
  const handleSelectAll = (
    e: React.MouseEvent,
    restaurantList: Restaurant[],
  ) => {
    e.stopPropagation()
    const allIds = restaurantList.map((r) => r.id)
    const allSelected = allIds.every((id) => selectedIds.includes(id))
    if (allSelected) {
      setSelectedIds(selectedIds.filter((id) => !allIds.includes(id)))
    } else {
      setSelectedIds([...new Set([...selectedIds, ...allIds])])
    }
  }
  const handleActivateSuspended = (
    restaurantsToActivate: Restaurant[],
    reassign: boolean,
  ) => {
    const idsToActivate = restaurantsToActivate.map((r) => r.id)
    setRestaurants(
      restaurants.map((r) =>
        idsToActivate.includes(r.id)
          ? {
              ...r,
              status: 'active' as const,
            }
          : r,
      ),
    )
  }
  const handleDeleteSuspended = (restaurantsToRemove: Restaurant[]) => {
    const idsToDelete = restaurantsToRemove.map((r) => r.id)
    setRestaurants(restaurants.filter((r) => !idsToDelete.includes(r.id)))
  }
  const restaurantsWithBoxes = restaurants.filter(
    (r) => r.hasBoxes && r.status !== 'suspended',
  )
  const restaurantsWithoutBoxes = restaurants.filter(
    (r) => !r.hasBoxes && r.status !== 'suspended',
  )
  const filteredWithBoxes = restaurantsWithBoxes.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const filteredWithoutBoxes = restaurantsWithoutBoxes.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const renderTableHeader = (restaurantList: Restaurant[]) => {
    const allIds = restaurantList.map((r) => r.id)
    const allSelected =
      allIds.length > 0 && allIds.every((id) => selectedIds.includes(id))
    const someSelected =
      allIds.some((id) => selectedIds.includes(id)) && !allSelected
    return (
      <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-100 text-xs text-gray-400 bg-white sticky top-0 z-10">
        <div className="col-span-1 flex items-center">
          <input
            type="checkbox"
            checked={allSelected}
            ref={(el) => {
              if (el) el.indeterminate = someSelected
            }}
            onChange={() => {}}
            onClick={(e) => handleSelectAll(e, restaurantList)}
            className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
          />
        </div>
        <div className="col-span-2">Name</div>
        <div className="col-span-2">Address</div>
        <div className="col-span-2">Manager</div>
        <div className="col-span-1">Drivers</div>
        <div className="col-span-1">Boxes</div>
        <div className="col-span-2">Updated</div>
        <div className="col-span-1"></div>
      </div>
    )
  }
  const renderTableRow = (restaurant: Restaurant) => {
    const hasManager = restaurant.manager && restaurant.manager !== 'No manager'
    const hasDrivers = restaurant.drivers > 0
    const hasBoxes = restaurant.boxes > 0
    return (
      <div
        key={restaurant.id}
        onClick={() => handleRowClick(restaurant)}
        className={`grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-50 items-center cursor-pointer transition-colors ${selectedIds.includes(restaurant.id) ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
      >
        <div className="col-span-1">
          <input
            type="checkbox"
            checked={selectedIds.includes(restaurant.id)}
            onChange={() => {}}
            onClick={(e) => toggleSelect(restaurant.id, e)}
            className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
          />
        </div>
        <div className="col-span-2">
          <span className="text-sm font-semibold text-slate-900">
            {restaurant.name}
          </span>
        </div>
        <div className="col-span-2">
          <span className="text-sm text-gray-500 line-clamp-2">
            {restaurant.address}
          </span>
        </div>
        <div className="col-span-2">
          {hasManager ? (
            <span className="inline-flex items-center px-2.5 py-1 bg-gray-100 rounded text-sm text-gray-700">
              {restaurant.manager}
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-1 bg-orange-50 border border-orange-200 rounded text-sm text-orange-600">
              No manager
            </span>
          )}
        </div>
        <div className="col-span-1">
          <button
            onClick={(e) => handleDriversClick(restaurant, e)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors ${hasDrivers ? 'hover:bg-gray-100' : 'hover:bg-orange-100'}`}
          >
            <Users
              size={14}
              className={hasDrivers ? 'text-gray-400' : 'text-orange-500'}
            />
            <span
              className={`text-sm ${hasDrivers ? 'text-gray-600' : 'text-orange-500 font-medium'}`}
            >
              {restaurant.drivers}
            </span>
          </button>
        </div>
        <div className="col-span-1">
          <button
            onClick={(e) => handleBoxesClick(restaurant, e)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors ${hasBoxes ? 'hover:bg-gray-100' : 'hover:bg-orange-100'}`}
          >
            <Package
              size={14}
              className={hasBoxes ? 'text-gray-400' : 'text-orange-500'}
            />
            <span
              className={`text-sm ${hasBoxes ? 'text-gray-600' : 'text-orange-500 font-medium'}`}
            >
              {restaurant.boxes}
            </span>
          </button>
        </div>
        <div className="col-span-2">
          <span className="text-sm text-gray-400">{restaurant.updatedAt}</span>
        </div>
        <div className="col-span-1 flex justify-end">
          <RestaurantRowMenu
            restaurant={restaurant}
            onEditDetails={handleEditRestaurant}
            onReassignResources={handleReassignResources}
            onSuspend={handleSuspendRestaurant}
            onDelete={handleDeleteRestaurant}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="flex-1 bg-[#FAFAFA] flex flex-col h-full relative">
      {/* Success Toast */}
      {showSuccessToast && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3 flex items-center justify-between animate-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-green-600" />
            <p className="text-sm text-green-800">
              <span className="font-bold">
                {newRestaurantName || 'Pizza Joint'}
              </span>{' '}
              created successfully!{' '}
              <span className="text-green-700">
                You can now assign GrubPacs to this restaurant to get started.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-1.5 border border-green-600 text-green-700 text-xs font-bold uppercase tracking-wide rounded hover:bg-green-100 transition-colors">
              VIEW GRUBPACS
            </button>
            <button
              onClick={() => setShowSuccessToast(false)}
              className="text-green-600 hover:text-green-800"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Conflict Banner */}
      <ConflictBanner
        isVisible={showConflictBanner}
        onDismiss={() => setShowConflictBanner(false)}
        onViewDetails={() => console.log('View conflict details')}
      />

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 sticky top-0 z-20">
        <h1 className="text-xl font-bold text-slate-900">Restaurants</h1>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setShowSuspendedModal(true)}
            className="text-sm font-medium text-[#FF5722] hover:text-[#F4511E] uppercase tracking-wide transition-colors"
          >
            VIEW SUSPENDED
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-[#FF5722] text-white px-4 py-2 rounded-md font-medium text-sm tracking-wide hover:bg-[#F4511E] transition-colors shadow-sm"
          >
            <Plus size={16} strokeWidth={2.5} />
            <span>ADD NEW</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="px-8 py-4 flex items-center justify-between bg-white border-b border-gray-100 sticky top-[73px] z-20">
        <div className="relative w-64">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search restaurant"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5722] focus:border-[#FF5722] placeholder:text-gray-400 bg-white"
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            {restaurants.filter((r) => r.status !== 'suspended').length} entries
          </span>

          {/* Filter Button with Dropdown */}
          <div className="relative">
            <button
              ref={filterButtonRef}
              onClick={handleFilterToggle}
              className={`flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium transition-colors ${showFilterDropdown ? 'border-[#FF5722] text-[#FF5722] bg-orange-50' : 'border-gray-200 text-gray-500 hover:bg-gray-50 bg-white'}`}
            >
              <Filter size={14} />
              <span>FILTER</span>
            </button>

            {showFilterDropdown && (
              <div
                ref={filterDropdownRef}
                className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
              >
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Resources assigned
                  </p>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() =>
                          setTempFilterOptions((prev) => ({
                            ...prev,
                            manager: !prev.manager,
                          }))
                        }
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${tempFilterOptions.manager ? 'bg-[#FF5722] border-[#FF5722]' : 'border-gray-300 bg-white'}`}
                      >
                        {tempFilterOptions.manager && (
                          <Check
                            size={14}
                            className="text-white"
                            strokeWidth={3}
                          />
                        )}
                      </div>
                      <span className="text-sm text-gray-700">Manager</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() =>
                          setTempFilterOptions((prev) => ({
                            ...prev,
                            driver: !prev.driver,
                          }))
                        }
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${tempFilterOptions.driver ? 'bg-[#FF5722] border-[#FF5722]' : 'border-gray-300 bg-white'}`}
                      >
                        {tempFilterOptions.driver && (
                          <Check
                            size={14}
                            className="text-white"
                            strokeWidth={3}
                          />
                        )}
                      </div>
                      <span className="text-sm text-gray-700">Driver</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() =>
                          setTempFilterOptions((prev) => ({
                            ...prev,
                            box: !prev.box,
                          }))
                        }
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${tempFilterOptions.box ? 'bg-[#FF5722] border-[#FF5722]' : 'border-gray-300 bg-white'}`}
                      >
                        {tempFilterOptions.box && (
                          <Check
                            size={14}
                            className="text-white"
                            strokeWidth={3}
                          />
                        )}
                      </div>
                      <span className="text-sm text-gray-700">Box</span>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                  <button
                    onClick={handleCancelFilter}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700 uppercase tracking-wide transition-colors"
                  >
                    CANCEL
                  </button>
                  <button
                    onClick={handleApplyFilter}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-[#FF5722] text-[#FF5722] rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors"
                  >
                    <Check size={16} />
                    FILTER RESTAURANTS
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div
        className={`flex-1 overflow-y-auto p-6 ${selectedIds.length > 0 ? 'pb-24' : ''}`}
      >
        {/* Restaurants with boxes */}
        <div className="bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('withBoxes')}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-100"
          >
            <span className="text-sm font-medium text-slate-700">
              Restaurants with boxes
            </span>
            <div className="flex items-center gap-3">
              {filteredWithBoxes.length > 0 && (
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>1-{Math.min(50, filteredWithBoxes.length)}</span>
                  <div className="flex items-center gap-1">
                    <button
                      className="p-1 border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-40"
                      disabled
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ChevronLeft size={12} />
                    </button>
                    <button
                      className="p-1 border border-gray-200 rounded hover:bg-gray-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              )}
              {expandedSection === 'withBoxes' ? (
                <ChevronUp size={16} className="text-gray-400" />
              ) : (
                <ChevronDown size={16} className="text-gray-400" />
              )}
            </div>
          </button>
          {expandedSection === 'withBoxes' && filteredWithBoxes.length > 0 && (
            <div>
              {renderTableHeader(filteredWithBoxes)}
              {filteredWithBoxes.map(renderTableRow)}
            </div>
          )}
          {expandedSection === 'withBoxes' &&
            filteredWithBoxes.length === 0 && (
              <div className="p-6 bg-white">
                <p className="text-sm text-gray-400">
                  Assign boxes to your restaurants to see the list here.
                </p>
              </div>
            )}
        </div>

        {/* Restaurants without boxes */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('withoutBoxes')}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-100"
          >
            <span className="text-sm font-medium text-slate-700">
              Restaurants without boxes
            </span>
            <div className="flex items-center gap-3">
              {filteredWithoutBoxes.length > 0 && (
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>1-{Math.min(50, filteredWithoutBoxes.length)}</span>
                  <div className="flex items-center gap-1">
                    <button
                      className="p-1 border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-40"
                      disabled
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ChevronLeft size={12} />
                    </button>
                    <button
                      className="p-1 border border-gray-200 rounded hover:bg-gray-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              )}
              {expandedSection === 'withoutBoxes' ? (
                <ChevronUp size={16} className="text-gray-400" />
              ) : (
                <ChevronDown size={16} className="text-gray-400" />
              )}
            </div>
          </button>
          {expandedSection === 'withoutBoxes' &&
            filteredWithoutBoxes.length > 0 && (
              <div>
                {renderTableHeader(filteredWithoutBoxes)}
                {filteredWithoutBoxes.map(renderTableRow)}
              </div>
            )}
          {expandedSection === 'withoutBoxes' &&
            filteredWithoutBoxes.length === 0 && (
              <div className="p-6 bg-white">
                <p className="text-sm text-gray-400">
                  No restaurants without boxes.
                </p>
              </div>
            )}
        </div>
      </div>

      {/* Selection Action Bar */}
      <SelectionActionBar
        selectedCount={selectedIds.length}
        onClearSelection={handleClearSelection}
        onReassignResources={handleReassignSelectedResources}
        onDeleteSelection={handleDeleteSelected}
        onSuspendSelection={handleSuspendSelected}
      />

      {/* Modals */}
      <AddRestaurantModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveRestaurant}
      />
      <EditRestaurantModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false)
          setRestaurantToEdit(null)
        }}
        onSave={handleSaveEditedRestaurant}
        restaurant={restaurantToEdit}
      />
      <RestaurantDetailModal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        restaurant={selectedRestaurant}
        onEdit={handleEditRestaurant}
        onDelete={handleDeleteRestaurant}
        onAddManager={handleAddManager}
      />
      <AssignManagerModal
        isOpen={showManagerModal}
        onClose={() => {
          setShowManagerModal(false)
          setRestaurantForManager(null)
        }}
        onConfirm={handleConfirmManager}
        restaurantName={restaurantForManager?.name}
      />
      <ReassignResourcesModal
        isOpen={showReassignModal}
        onClose={() => {
          setShowReassignModal(false)
          setRestaurantToReassignFrom(null)
        }}
        onConfirm={handleConfirmReassign}
        sourceRestaurantName={restaurantToReassignFrom?.name}
      />
      <ViewGrubPacsModal
        isOpen={showGrubPacsModal}
        onClose={() => setShowGrubPacsModal(false)}
        restaurantName={activeRestaurant?.name || 'Restaurant'}
        onReassignAll={() => console.log('Reassign all boxes')}
        onEditList={() => console.log('Edit list')}
      />
      <ViewEmployeesModal
        isOpen={showEmployeesModal}
        onClose={() => setShowEmployeesModal(false)}
        restaurantName={activeRestaurant?.name || 'Restaurant'}
        onAssignEmployee={() => {
          setShowEmployeesModal(false)
          setShowAssignEmployeesModal(true)
        }}
        onEditList={() => console.log('Edit list')}
      />
      <AssignEmployeesModal
        isOpen={showAssignEmployeesModal}
        onClose={() => setShowAssignEmployeesModal(false)}
        onConfirm={handleConfirmEmployees}
        restaurantName={activeRestaurant?.name}
      />
      <SuspendRestaurantModal
        isOpen={showSuspendModal}
        onClose={() => {
          setShowSuspendModal(false)
          setRestaurantsToSuspend([])
        }}
        restaurants={restaurantsToSuspend}
        onConfirm={handleConfirmSuspend}
      />
      <DeleteRestaurantModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
          setRestaurantsToDelete([])
        }}
        restaurants={restaurantsToDelete}
        onConfirm={handleConfirmDelete}
        onSuspendInstead={handleSuspendInsteadOfDelete}
      />
      <SuspendedRestaurantsModal
        isOpen={showSuspendedModal}
        onClose={() => setShowSuspendedModal(false)}
        restaurants={restaurants}
        onActivate={handleActivateSuspended}
        onDelete={handleDeleteSuspended}
      />
    </div>
  )
}
