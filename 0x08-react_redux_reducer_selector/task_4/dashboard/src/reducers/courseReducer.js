// courseReducer.js

import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

// Initial state
const initialState = fromJS({
  courses: {}
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeDeep({ courses: normalizedData.entities.courses });

    case SELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;

