import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('calls markAsRead with the correct ID when clicked', () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsRead} />);
    
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});

