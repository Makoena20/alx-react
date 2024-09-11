import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should log the correct message when markAsRead is called', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications notifications={[]} />);

    const instance = wrapper.instance();
    instance.markAsRead(1);

    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });
});

