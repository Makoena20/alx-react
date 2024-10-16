import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import Notifications from './Notifications';

const NotificationsContainer = ({ fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications />;
};

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(null, mapDispatchToProps)(NotificationsContainer);

