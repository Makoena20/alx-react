// courseReducer.test.js

import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {

  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ];

  // Test that the default state returns an empty array
  it('should return the default state of an empty array', () => {
    const result = courseReducer(undefined, {});
    expect(result).toEqual([]);
  });

  // Test FETCH_COURSE_SUCCESS action returns the correct data
  it('should handle FETCH_COURSE_SUCCESS and return the data with isSelected set to false', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses
    };
    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const result = courseReducer(undefined, action);
    expect(result).toEqual(expectedState);
  });

  // Test SELECT_COURSE action
  it('should handle SELECT_COURSE and update the correct course isSelected to true', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const result = courseReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  // Test UNSELECT_COURSE action
  it('should handle UNSELECT_COURSE and update the correct course isSelected to false', () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 }
    ];
    const result = courseReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

});

