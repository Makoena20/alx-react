import { createSelector } from 'reselect';

// Selector to get all notifications from the state
const getNotifications = (state) => state.notifications;

// Selector to get only unread notifications using Immutable.js's valueSeq method
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => !notification.isRead).valueSeq().toArray()
);

