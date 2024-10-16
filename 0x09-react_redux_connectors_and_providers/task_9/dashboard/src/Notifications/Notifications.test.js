import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const mockSetNotificationFilter = jest.fn();
  const notifications = [
    { id: 1, message: 'Notification 1', isRead: false },
    { id: 2, message: 'Notification 2', isRead: false },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Notifications notifications={notifications} setNotificationFilter={mockSetNotificationFilter} />
    );
  });

  it('should call setNotificationFilter with URGENT when the first button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('URGENT');
  });

  it('should call setNotificationFilter with DEFAULT when the second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('DEFAULT');
  });
});

