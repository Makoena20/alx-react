import { FETCH_COURSES_SUCCESS } from './actionTypes';

// Action creator for setting courses
export const setCourses = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

// Async action to fetch courses from the API
export const fetchCourses = () => {
  return (dispatch) => {
    dispatch({ type: 'SET_LOADING_STATE', payload: true });

    return fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
        dispatch({ type: 'SET_LOADING_STATE', payload: false });
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
        dispatch({ type: 'SET_LOADING_STATE', payload: false });
      });
  };
};

