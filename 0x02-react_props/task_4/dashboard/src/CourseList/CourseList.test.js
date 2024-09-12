import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 rows', () => {
    const wrapper = shallow(<CourseList />);
    const rows = wrapper.find('CourseListRow');
    expect(rows).toHaveLength(5);
  });
});

