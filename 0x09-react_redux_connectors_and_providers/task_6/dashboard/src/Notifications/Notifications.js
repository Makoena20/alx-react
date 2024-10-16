import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

class Notifications extends Component {
  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications(); // Fetch notifications when component mounts
  }

  render() {
    const { listNotifications, markAsRead } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications:</p>
        <ul>
          {listNotifications.length === 0 ? (
            <li>No new notifications for now</li>
          ) : (
            listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={() => markAsRead(notification.id)} // Mark notification as read
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}

// Map state to props using the selector to filter unread notifications
const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotifications(state),
  };
};

// Map the necessary action creators to props
const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

// Define prop types for validation
Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

// Set default props in case no notifications are present
Notifications.defaultProps = {
  listNotifications: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

