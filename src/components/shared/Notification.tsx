import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import './Notification.css';
import {
  BugIcon,
  CloseIcon,
  MegaphoneIcon,
  NotificationIcon,
  ThumbsUp,
} from '@/assets/icons';

// Types
type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationInput {
  type: NotificationType;
  title: string;
  message?: string;
}

interface Notification extends NotificationInput {
  id: string;
}

interface NotificationContextValue {
  addNotification: (notification: NotificationInput) => void;
  removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextValue | null>(
  null,
);

// Provider
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  function addNotification(notification: NotificationInput): void {
    const id = crypto.randomUUID();
    setNotifications((prev) => [...prev, { ...notification, id }]);
  }

  function removeNotification(id: string): void {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  const configs = {
    success: {
      icon: <ThumbsUp />,
      color: 'var(--color-green)',
    },
    error: {
      icon: <BugIcon />,
      color: 'var(--color-red)',
    },
    warning: {
      icon: <MegaphoneIcon />,
      color: 'var(--color-orange)',
    },
    info: {
      icon: <NotificationIcon />,
      color: 'var(--color-middle-blue)',
    },
  };

  function NotificationItem({ notification }: { notification: Notification }) {
    useEffect(() => {
      const timer = setTimeout(
        () => removeNotification(notification.id),
        10000,
      );
      return () => clearTimeout(timer);
    }, [notification.id]);

    const config = configs[notification.type];

    return (
      <div className="notification" style={{ borderLeftColor: config.color }}>
        <div style={{ color: config.color }}>{config.icon}</div>
        <div className="notification-content">
          <div className="text-md-bold">{notification.title}</div>
          {notification.message && (
            <div className="notification-message text-sm">
              {notification.message}
            </div>
          )}
        </div>
        <button
          type="button"
          className="notification-close"
          onClick={() => removeNotification(notification.id)}
          aria-label="Close notification"
        >
          <CloseIcon />
        </button>
      </div>
    );
  }

  return (
    <NotificationContext.Provider
      value={{ addNotification, removeNotification }}
    >
      {children}
      <div className="notification-container">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

// Hook
export function useNotifications(): NotificationContextValue {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotifications must be used within NotificationProvider',
    );
  }
  return context;
}
