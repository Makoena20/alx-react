import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders notification items correctly', () => {
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('NotificationItem').length).toBe(2);
  });

  it('calls markNotificationAsRead when a notification is clicked', () => {
    const markNotificationAsReadMock = jest.fn();
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
    ];
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsReadMock}
      />
    );
    wrapper.find('NotificationItem').prop('markAsRead')(1);
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });
});

