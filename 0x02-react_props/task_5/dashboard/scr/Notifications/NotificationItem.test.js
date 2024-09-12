// task_5/dashboard/src/Notifications/NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
  it('renders correctly with an empty listNotifications', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').prop('value')).toEqual('No new notification for now');
  });

  it('renders correctly with a list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find('NotificationItem').length).toEqual(2);
  });

  it('displays "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').prop('value')).toEqual('No new notification for now');
  });
});

