// notificationSelector.js

import { createSelector } from 'reselect';

// Selector to get the filter type from the state
export const filterTypeSelected = (state) => state.get('filter');

// Selector to get all notifications from the state
export const getNotifications = (state) => state.get('notifications');

// Selector to get only unread notifications from the state
export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => {
    return notifications.filter(notification => !notification.get('isRead'));
  }
);

