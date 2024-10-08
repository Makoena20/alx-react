// courseReducer.test.js

import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  const courses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ];

  it('should return the initial state', () => {
    const result = courseReducer(undefined, {});
    expect(result.toJS()).toEqual({
      courses: {}
    });
  });

  it('should handle FETCH_COURSE_SUCCESS and normalize the data', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    const result = courseReducer(undefined, action);
    const expected = {
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    };
    expect(result.toJS()).toEqual(expected);
  });

  it('should handle SELECT_COURSE and update the selected course', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });

    const action = { type: SELECT_COURSE, index: 2 };
    const result = courseReducer(initialState, action);
    expect(result.getIn(['courses', '2', 'isSelected'])).toBe(true);
  });

  it('should handle UNSELECT_COURSE and update the selected course', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
        3: { id: 3, name: "React", credit: 40, isSelected: false }
      }
    });

    const action = { type: UNSELECT_COURSE, index: 2 };
    const result = courseReducer(initialState, action);
    expect(result.getIn(['courses', '2', 'isSelected'])).toBe(false);
  });
});

