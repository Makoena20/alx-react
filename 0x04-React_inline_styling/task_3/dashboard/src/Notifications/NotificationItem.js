// task_3/dashboard/src/Notifications/NotificationItem.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, value, html }) {
  return (
    <li
      className={css(styles.notificationItem, type === 'urgent' ? styles.urgentItem : styles.defaultItem)}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
    >
      {html ? null : value}
    </li>
  );
}

const styles = StyleSheet.create({
  notificationItem: {
    padding: '10px 8px',
    borderBottom: '1px solid black',
    fontSize: '20px',
    width: '100%',
    '@media (max-width: 900px)': {
      width: '100vw',
    },
  },
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

export default NotificationItem;

