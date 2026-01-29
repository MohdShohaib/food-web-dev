import React, { useState } from 'react'
import {
  AlertTriangle,
  CheckCircle,
  Search,
  Filter,
  ChevronDown,
} from 'lucide-react'
type NotificationType = 'warning' | 'success' | 'error' | 'info'
type Notification = {
  id: string
  type: NotificationType
  title: string
  description: string
  timestamp: string
  selected: boolean
}
type NotificationsPageProps = {
  onBack: () => void
}
export function NotificationsPage({ onBack }: NotificationsPageProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'warning',
      title: 'Battery below 20%',
      description:
        'The battery for [Box name] [Box ID] seems to be draining. Charge the device before you head outdoor.',
      timestamp: '12:15 PM | Today',
      selected: false,
    },
    {
      id: '2',
      type: 'warning',
      title: 'Camera not working',
      description:
        'It seems the camera for [Box name] [Box ID] is not functioning properly. Try restarting the device once.',
      timestamp: '12:15 PM | Today',
      selected: false,
    },
    {
      id: '3',
      type: 'success',
      title: 'Locked opened',
      description:
        'You successfully opened the Grublock for [Box name] [Box ID].',
      timestamp: '12:15 PM | Today',
      selected: false,
    },
    {
      id: '4',
      type: 'warning',
      title: 'Battery below 20%',
      description:
        'The battery for [Box name] [Box ID] seems to be draining. Charge the device before you head outdoor.',
      timestamp: '12:15 PM | Today',
      selected: false,
    },
  ])
  const [selectAll, setSelectAll] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [relevanceFilter, setRelevanceFilter] = useState('')
  const [boxFilter, setBoxFilter] = useState('')
  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    setNotifications(
      notifications.map((n) => ({
        ...n,
        selected: newSelectAll,
      })),
    )
  }
  const handleSelectNotification = (id: string) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id
          ? {
              ...n,
              selected: !n.selected,
            }
          : n,
      ),
    )
  }
  const handleDismiss = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }
  const handleDismissAll = () => {
    setNotifications([])
  }
  const getNotificationStyles = (type: NotificationType) => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-100',
          iconBg: 'bg-white',
          iconColor: 'text-orange-600',
          icon: AlertTriangle,
        }
      case 'success':
        return {
          bg: 'bg-green-50',
          border: 'border-green-100',
          iconBg: 'bg-white',
          iconColor: 'text-green-600',
          icon: CheckCircle,
        }
      default:
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-100',
          iconBg: 'bg-white',
          iconColor: 'text-orange-600',
          icon: AlertTriangle,
        }
    }
  }
  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
        <button
          onClick={handleDismissAll}
          className="text-sm font-medium text-gray-500 hover:text-slate-900 uppercase tracking-wide transition-colors"
        >
          DISMISS ALL
        </button>
      </div>

      {/* Filters Bar */}
      <div className="px-8 py-4 border-b border-gray-100 flex items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
        </div>

        {/* Relevance Filter */}
        <div className="relative">
          <select
            value={relevanceFilter}
            onChange={(e) => setRelevanceFilter(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white cursor-pointer"
          >
            <option value="">Select relevance</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>

        {/* Box Filter */}
        <div className="relative">
          <select
            value={boxFilter}
            onChange={(e) => setBoxFilter(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white cursor-pointer"
          >
            <option value="">Select box</option>
            <option value="box1">Box #04_03AE</option>
            <option value="box2">Box #04_03AF</option>
            <option value="box3">Box #04_03AG</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
          <Filter size={16} />
          FILTER
        </button>
      </div>

      {/* Notifications List */}
      <div className="px-8 py-6">
        {/* Select All Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer"
          />
          <span className="text-sm font-medium text-gray-600">
            Notifications
          </span>
        </div>

        {/* Notifications Items */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const styles = getNotificationStyles(notification.type)
            const Icon = styles.icon
            return (
              <div
                key={notification.id}
                className="flex items-start gap-3 group"
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={notification.selected}
                  onChange={() => handleSelectNotification(notification.id)}
                  className="w-4 h-4 rounded border-gray-300 text-[#FF5722] focus:ring-[#FF5722] cursor-pointer mt-1"
                />

                {/* Notification Card */}
                <div
                  className={`
                    flex-1 ${styles.bg} ${styles.border} border rounded-lg p-4
                    transition-all duration-200
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`${styles.iconBg} p-2 rounded-lg flex-shrink-0 shadow-sm`}
                    >
                      <Icon size={20} className={styles.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        {notification.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-2">
                        {notification.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.timestamp}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDismiss(notification.id)}
                      className="text-xs font-medium text-[#FF5722] hover:text-[#F4511E] uppercase tracking-wide transition-colors flex-shrink-0"
                    >
                      DISMISS
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={32} className="text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-600">
              No notifications
            </p>
            <p className="text-xs text-gray-400 mt-1">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  )
}
