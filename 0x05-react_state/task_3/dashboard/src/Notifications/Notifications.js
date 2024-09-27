import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';

class Notifications extends PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div className="Notifications">
        <button
          style={{ float: 'right' }}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}
        >
          X
        </button>
        <p>Here is the list of notifications:</p>
        <ul>
          {listNotifications.length === 0 && <p>No new notifications for now</p>}
          {listNotifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              id={notif.id}
              type={notif.type}
              value={notif.value}
              markAsRead={markNotificationAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  listNotifications: [],
  markNotificationAsRead: () => {},
};

export default Notifications;

