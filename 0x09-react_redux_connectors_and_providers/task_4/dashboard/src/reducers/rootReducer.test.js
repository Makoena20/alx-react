import rootReducer from './rootReducer';
import { fromJS } from 'immutable';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      courses: fromJS({}),        // Map for courses
      notifications: fromJS({}),  // Map for notifications
      ui: fromJS({})              // Map for UI state
    };

    const state = rootReducer(undefined, {}); // Initial state
    expect(state.courses).toEqual(initialState.courses);
    expect(state.notifications).toEqual(initialState.notifications);
    expect(state.ui).toEqual(initialState.ui);
  });
});

