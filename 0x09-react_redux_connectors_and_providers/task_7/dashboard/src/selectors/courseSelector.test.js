import { fromJS, Map } from 'immutable';
import { getListCourses } from './courseSelector';

describe('getListCourses', () => {
  it('should return a List of courses from the entities in the state', () => {
    const state = {
      courses: fromJS({
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2' },
      }),
    };

    const expected = fromJS([
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
    ]);

    expect(getListCourses(state)).toEqual(expected);
  });

  it('should return an empty List when there are no courses', () => {
    const state = {
      courses: Map(),
    };

    const expected = fromJS([]);
    expect(getListCourses(state)).toEqual(expected);
  });
});

