// Import the notifications data from the JSON file
import * as notificationsData from '../../notifications.json';

// Function to get all notifications by user ID
export function getAllNotificationsByUser(userId) {
  // Filter the notifications to return only those authored by the specified userId
  return notificationsData.default.filter(notification => notification.author.id === userId);
}

