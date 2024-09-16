// task_2/dashboard/src/Notifications/NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem Component Tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with the correct props when value is passed', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.text()).toEqual('Test');
  });

  it('renders with the correct props when html is passed', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>Test</u>' }} />);
    expect(wrapper.html()).toContain('<u>Test</u>');
  });

  it('applies the correct style for default items', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.prop('className')).toContain('defaultItem');
  });

  it('applies the correct style for urgent items', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="Test" />);
    expect(wrapper.prop('className')).toContain('urgentItem');
  });
});

