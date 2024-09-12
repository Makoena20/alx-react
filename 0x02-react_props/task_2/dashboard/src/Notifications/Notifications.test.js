import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import '@testing-library/jest-dom/extend-expect';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders NotificationItem components', () => {
    const { container } = render(<Notifications />);
    const notificationItems = container.querySelectorAll('li');
    expect(notificationItems.length).toBe(3);
  });

  it('renders the first NotificationItem with the correct html', () => {
    const { container } = render(<Notifications />);
    const firstNotification = container.querySelectorAll('li')[0];
    expect(firstNotification).toHaveAttribute('data-notification-type', 'default');
    expect(firstNotification.textContent).toBe('New course available');
  });
});

