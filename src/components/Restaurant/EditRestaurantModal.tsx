import React, { useEffect, useState } from 'react'
import { X, MapPin } from 'lucide-react'
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
type EditRestaurantModalProps = {
  isOpen: boolean
  onClose: () => void
  onSave: (data: any) => void
  restaurant: Restaurant | null
}
export function EditRestaurantModal({
  isOpen,
  onClose,
  onSave,
  restaurant,
}: EditRestaurantModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    pincode: '',
    state: '',
    city: '',
    line1: '',
    line2: '',
    status: 'active' as 'active' | 'suspended',
  })
  // Pre-fill form when restaurant changes
  useEffect(() => {
    if (restaurant) {
      // Parse address string back to fields if possible, or just fill what we can
      // For this demo, we'll just fill name and status and put the address in line1
      // In a real app, address would likely be structured
      setFormData({
        name: restaurant.name,
        pincode: '110012',
        state: 'Delhi',
        city: 'Delhi',
        line1: restaurant.address.split(',')[0] || '',
        line2: '',
        status: restaurant.status || 'active',
      })
    }
  }, [restaurant])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      id: restaurant?.id,
    })
  }
  if (!isOpen || !restaurant) return null
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-5xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col animate-in slide-in-from-right">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <div>
            <button
              onClick={onClose}
              className="text-xs font-bold text-gray-400 hover:text-gray-600 mb-2 uppercase tracking-wide flex items-center gap-1 transition-colors"
            >
              ← GO BACK
            </button>
            <h2 className="text-2xl font-bold text-slate-900">
              Where's Your Business Operating?
            </h2>
            <p className="text-gray-500 mt-1">
              Add your restaurant to start managing your Grubpacs efficiently.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-slate-900 transition-colors rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <form
            id="edit-restaurant-form"
            onSubmit={handleSubmit}
            className="h-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
              {/* Left Column - Form Fields */}
              <div className="space-y-6">
                {/* Restaurant Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name your property"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722] transition-colors"
                    required
                  />
                </div>

                {/* Address Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add the address (optional)
                  </label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722] transition-colors"
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722] transition-colors"
                    />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722] transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    name="line1"
                    value={formData.line1}
                    onChange={handleChange}
                    placeholder="Line 1"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722] transition-colors mb-4"
                  />
                  <input
                    type="text"
                    name="line2"
                    value={formData.line2}
                    onChange={handleChange}
                    placeholder="Line 2"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5722]/20 focus:border-[#FF5722] transition-colors"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Status
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5">
                        <input
                          type="radio"
                          name="status"
                          value="active"
                          checked={formData.status === 'active'}
                          onChange={handleChange}
                          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#FF5722] transition-colors"
                        />
                        <div className="absolute w-2.5 h-2.5 bg-[#FF5722] rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-slate-900 transition-colors">
                        Active
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5">
                        <input
                          type="radio"
                          name="status"
                          value="suspended"
                          checked={formData.status === 'suspended'}
                          onChange={handleChange}
                          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#FF5722] transition-colors"
                        />
                        <div className="absolute w-2.5 h-2.5 bg-[#FF5722] rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-slate-900 transition-colors">
                        Suspended
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column - Map Placeholder */}
              <div className="relative h-full min-h-[400px] bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-50 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/77.2090,28.6139,13,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2xpY2F4YjAwMnFpMnBwZ2x5b3J6Y3J4In0.zF9_z_j_k_l_m_n_o_p')] bg-cover bg-center" />

                {/* Fallback pattern */}
                <div
                  className="absolute inset-0 bg-gray-100 opacity-50"
                  style={{
                    backgroundImage:
                      'radial-gradient(#cbd5e1 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100 text-center mb-4">
                    <p className="text-sm font-medium text-slate-900">
                      {formData.name || 'Restaurant Name'},{' '}
                      {formData.city || 'City'}
                    </p>
                  </div>
                  <MapPin
                    size={48}
                    className="text-[#FF5722] drop-shadow-lg animate-bounce"
                    fill="#FF5722"
                  />
                </div>

                {/* Search overlay on map */}
                <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-sm border border-gray-200 p-2 flex items-center gap-2">
                  <MapPin size={16} className="text-gray-400 ml-2" />
                  <input
                    type="text"
                    placeholder="Search location..."
                    className="flex-1 text-sm outline-none text-gray-700 placeholder:text-gray-400"
                    disabled
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            form="edit-restaurant-form"
            className="bg-[#FF5722] text-white px-8 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-[#F4511E] transition-colors shadow-sm"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </>
  )
}
