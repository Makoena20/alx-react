// task_5/dashboard/src/Notifications/Notifications.js
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

const Notifications = ({ listNotifications }) => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.length === 0 ? (
          <NotificationItem value="No new notification for now" />
        ) : (
          listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))
        )}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;

