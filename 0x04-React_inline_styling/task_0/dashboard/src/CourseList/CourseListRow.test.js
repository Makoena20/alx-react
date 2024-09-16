// task_0/dashboard/src/CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component Tests', () => {
  it('renders one cell with colspan = 2 when textSecondCell is null and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    expect(wrapper.find('th').text()).toEqual('Header');
  });

  it('renders two cells when textSecondCell is provided and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Second" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('Header');
    expect(wrapper.find('th').at(1).text()).toEqual('Second');
  });

  it('renders two td elements within a tr when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('Cell 1');
    expect(wrapper.find('td').at(1).text()).toEqual('Cell 2');
  });

  it('applies correct background color style for header row', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.prop('style')).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('applies correct background color style for regular row', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" />);
    expect(wrapper.prop('style')).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});

