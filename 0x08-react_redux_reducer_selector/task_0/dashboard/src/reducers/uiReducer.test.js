import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

// Define the initial state
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

// Test suite for uiReducer
describe('uiReducer', () => {

  // Test the initial state when no action is passed
  it('should return the initial state when no action is passed', () => {
    const result = uiReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  // Test that the state equals the initial state when an unrelated action is passed
  it('should return the initial state when an unrelated action is passed', () => {
    const result = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(result).toEqual(initialState);
  });

  // Test DISPLAY_NOTIFICATION_DRAWER action
  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const result = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(result).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  });

  // Additional tests could be added for HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, etc.

});

