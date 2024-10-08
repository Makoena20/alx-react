// notifications.js

import { schema } from 'normalizr';

// Define the notification entity
const notification = new schema.Entity('notifications');

// Function to normalize notifications data
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};

