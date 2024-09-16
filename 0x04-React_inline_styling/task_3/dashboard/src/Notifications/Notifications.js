// task_3/dashboard/src/Notifications/Notifications.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div className={css(styles.notificationsPanel, displayDrawer && styles.panelOpen)}>
      {displayDrawer ? (
        <ul className={css(styles.ul)}>
          {listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> :
            listNotifications.map(({ id, type, value, html }) => (
              <NotificationItem key={id} type={type} value={value} html={html} />
            ))}
        </ul>
      ) : null}
    </div>
  );
}

const styles = StyleSheet.create({
  notificationsPanel: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '300px',
    height: '100vh',
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    '@media (max-width: 900px)': {
      width: '100vw',
      height: '100vh',
    },
  },
  panelOpen: {
    display: 'block',
    '@media (max-width: 900px)': {
      width: '100vw',
      height: '100vh',
    },
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    fontSize: '20px',
    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

export default Notifications;

