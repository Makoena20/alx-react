import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

describe('NotificationsContainer Component', () => {
  const mockFetchNotifications = jest.fn();
  const mockNotifications = [
    { id: 1, message: 'Notification 1', isRead: false, type: 'urgent' },
    { id: 2, message: 'Notification 2', isRead: false, type: 'default' },
  ];
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationsContainer fetchNotifications={mockFetchNotifications} notifications={mockNotifications} />);
  });

  it('should call fetchNotifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled();
  });
});

