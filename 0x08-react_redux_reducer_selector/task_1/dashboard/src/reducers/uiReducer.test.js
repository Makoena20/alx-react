import uiReducer from './uiReducer';
import { Map } from 'immutable';
import { 
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

// Define the initial state using Immutable.js
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

describe('uiReducer with Immutable.js', () => {

  // Test the initial state when no action is passed
  it('should return the initial state when no action is passed', () => {
    const result = uiReducer(undefined, {});
    expect(result.toJS()).toEqual(initialState.toJS());
  });

  // Test that the state equals the initial state when an unrelated action is passed
  it('should return the initial state when an unrelated action is passed', () => {
    const result = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(result.toJS()).toEqual(initialState.toJS());
  });

  // Test DISPLAY_NOTIFICATION_DRAWER action
  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const result = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(result.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true
    });
  });

  // Additional tests can be added for HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, etc.
});

