import React from 'react'
import { X, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
type NotificationType = 'warning' | 'success' | 'error' | 'info'
type Notification = {
  id: string
  type: NotificationType
  title: string
  description: string
  metadata: {
    boxId: string
    date: string
    location: string
  }
}
type NotificationsPanelProps = {
  isOpen: boolean
  onClose: () => void
  onViewAll: () => void
}
export function NotificationsPanel({
  isOpen,
  onClose,
  onViewAll,
}: NotificationsPanelProps) {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'warning',
      title: 'Battery below 20%',
      description:
        'The battery for [Box name] [Box ID] seems to be draining. Charge the device before you head outdoor.',
      metadata: {
        boxId: '#04_03AE',
        date: 'DL-01/2023... 12:15 PM',
        location: 'Today/DEMRES',
      },
    },
    {
      id: '2',
      type: 'warning',
      title: 'Camera not working',
      description:
        'It seems the camera for [Box name] [Box ID] is not functioning properly. Try restarting the device once.',
      metadata: {
        boxId: '#04_03AE',
        date: 'DL-01/2023... 12:15 PM',
        location: 'Today/DEMRES',
      },
    },
    {
      id: '3',
      type: 'success',
      title: 'Locked opened',
      description:
        'You successfully opened the Grublock for [Box name] [Box ID].',
      metadata: {
        boxId: '#04_03AE',
        date: 'DL-01/2023... 12:15 PM',
        location: 'Today/DEMRES',
      },
    },
  ]
  const getNotificationStyles = (type: NotificationType) => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-100',
          iconBg: 'bg-orange-100',
          iconColor: 'text-orange-600',
          icon: AlertTriangle,
        }
      case 'success':
        return {
          bg: 'bg-green-50',
          border: 'border-green-100',
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600',
          icon: CheckCircle,
        }
      case 'error':
        return {
          bg: 'bg-red-50',
          border: 'border-red-100',
          iconBg: 'bg-red-100',
          iconColor: 'text-red-600',
          icon: AlertTriangle,
        }
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-100',
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
          icon: AlertTriangle,
        }
    }
  }
  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Notifications Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-slate-900">Notifications</h2>
          <div className="flex items-center gap-4">
            <button
              className="text-sm font-medium text-[#FF5722] hover:text-[#F4511E] flex items-center gap-1 transition-colors"
              onClick={onViewAll}
            >
              VIEW ALL
              <ArrowRight size={14} />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-slate-900 transition-colors"
              aria-label="Close notifications"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto h-[calc(100%-80px)] p-6 space-y-4">
          {notifications.map((notification) => {
            const styles = getNotificationStyles(notification.type)
            const Icon = styles.icon
            return (
              <div
                key={notification.id}
                className={`
                  ${styles.bg} ${styles.border} border rounded-lg p-4
                  transition-all duration-200 hover:shadow-md
                `}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`${styles.iconBg} p-2 rounded-lg flex-shrink-0`}
                  >
                    <Icon size={20} className={styles.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {notification.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      {notification.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-medium">
                        {notification.metadata.boxId}
                      </span>
                      <span>|</span>
                      <span>{notification.metadata.date}</span>
                      <span>|</span>
                      <span className="text-[#FF5722] font-medium">
                        {notification.metadata.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Empty State (if no notifications) */}
          {notifications.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-600">
                No new notifications
              </p>
              <p className="text-xs text-gray-400 mt-1">
                You're all caught up!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
