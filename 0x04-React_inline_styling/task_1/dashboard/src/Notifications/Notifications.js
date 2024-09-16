// task_1/dashboard/src/Notifications/Notifications.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Notifications() {
  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
    </div>
  );
}

const styles = StyleSheet.create({
  notifications: {
    border: '1px solid red',
    padding: '10px',
    width: '300px',
  },
});

export default Notifications;

