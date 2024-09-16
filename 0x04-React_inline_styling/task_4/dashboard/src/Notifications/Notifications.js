// task_4/dashboard/src/Notifications/Notifications.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <div className={css(styles.notificationsContainer)}>
      <div className={css(displayDrawer ? styles.hiddenMenu : styles.menuItem)}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className={css(styles.notificationsPanel)}>
          <ul className={css(styles.ul)}>
            {listNotifications.length === 0 ? (
              <NotificationItem type="default" value="No new notification for now" />
            ) : (
              listNotifications.map(({ id, type, value, html }) => (
                <NotificationItem key={id} type={type} value={value} html={html} />
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const fadeOpacity = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  notificationsContainer: {
    position: 'relative',
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    padding: '10px',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeOpacity, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
    '@media (max-width: 900px)': {
      float: 'none',
    },
  },
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
  ul: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    fontSize: '20px',
  },
  hiddenMenu: {
    display: 'none',
  },
});

export default Notifications;

