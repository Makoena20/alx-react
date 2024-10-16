import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

describe('NotificationsContainer Component', () => {
  const mockFetchNotifications = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotificationsContainer fetchNotifications={mockFetchNotifications} />);
  });

  it('should call fetchNotifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled();
  });
});

