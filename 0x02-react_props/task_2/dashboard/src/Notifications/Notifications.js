import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
  return (
    <div className="Notifications">
      <button
        style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none' }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" style={{ width: '20px', height: '20px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
};

export default Notifications;

