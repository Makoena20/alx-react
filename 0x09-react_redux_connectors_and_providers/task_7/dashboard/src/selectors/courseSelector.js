import { createSelector } from 'reselect';

// Get the course entities from the state
const getCourseEntities = (state) => state.courses;

// Convert the course entities to a List using valueSeq from Immutable.js
export const getListCourses = createSelector(
  [getCourseEntities],
  (courses) => courses.valueSeq().toList()
);

