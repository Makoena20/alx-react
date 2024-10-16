import { createSelector } from 'reselect';

// Select notifications and filter state from the Redux store
const getNotifications = (state) => state.notifications;
const getNotificationFilter = (state) => state.notificationFilter;

// Memoized selector to get unread notifications based on the filter
export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getNotificationFilter],
  (notifications, filter) => {
    const unreadNotifications = notifications.filter(notification => !notification.isRead);

    if (filter === 'URGENT') {
      return unreadNotifications.filter(notification => notification.type === 'urgent');
    }

    return unreadNotifications; // Default case
  }
);

// Delete the old selector if it exists
// export const getUnreadNotifications = ... (delete this if it exists)

