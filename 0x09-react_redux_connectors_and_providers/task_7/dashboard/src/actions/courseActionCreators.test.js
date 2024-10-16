import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCourses, setCourses } from './courseActionCreators';
import { FETCH_COURSES_SUCCESS } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCourses', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches FETCH_COURSES_SUCCESS when fetching courses is done', () => {
    fetchMock.getOnce('/courses.json', {
      body: [{ id: 1, name: 'Course 1' }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: 'SET_LOADING_STATE', payload: true },
      { type: FETCH_COURSES_SUCCESS, payload: [{ id: 1, name: 'Course 1' }] },
      { type: 'SET_LOADING_STATE', payload: false },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

