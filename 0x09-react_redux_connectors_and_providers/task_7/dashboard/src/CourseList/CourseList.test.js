import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import { fetchCourses } from '../actions/courseActionCreators';

describe('CourseList component', () => {
  let wrapper;
  const mockFetchCourses = jest.fn();
  const mockSelectCourse = jest.fn();
  const mockUnSelectCourse = jest.fn();

  const courses = [
    { id: 1, name: 'Course 1', isSelected: false },
    { id: 2, name: 'Course 2', isSelected: true },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <CourseList
        fetchCourses={mockFetchCourses}
        selectCourse={mockSelectCourse}
        unSelectCourse={mockUnSelectCourse}
        courses={courses}
      />
    );
  });

  it('calls fetchCourses on componentDidMount', () => {
    expect(mockFetchCourses).toHaveBeenCalled();
  });

  it('dispatches selectCourse when a course is selected', () => {
    wrapper.instance().onChangeRow(1, true);
    expect(mockSelectCourse).toHaveBeenCalledWith(1);
  });

  it('dispatches unSelectCourse when a course is deselected', () => {
    wrapper.instance().onChangeRow(2, false);
    expect(mockUnSelectCourse).toHaveBeenCalledWith(2);
  });
});

