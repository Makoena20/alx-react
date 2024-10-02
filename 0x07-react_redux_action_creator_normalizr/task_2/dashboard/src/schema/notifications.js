import { normalize, schema } from 'normalizr';
import notificationsData from '../../notifications.json';

// Define your user and notification schema
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData, [notification]);

export const getAllNotificationsByUser = (userId) => {
  const notificationsByUser = [];
  
  // Retrieve notifications based on normalized data
  const { notifications, users } = normalizedData.entities;

  // Loop through the notifications and filter by userId
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      notificationsByUser.push(notifications[id]);
    }
  }

  return notificationsByUser;
};

export { normalizedData };

