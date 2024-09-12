// task_5/dashboard/src/CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component tests', () => {
  it('renders correctly with an empty listCourses', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell')).toEqual('No course available yet');
  });

  it('renders correctly with a list of courses', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('CourseListRow').length).toEqual(3); // Header + 2 courses
  });
});

