// task_7/dashboard/src/actions/uiActionCreators.js

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

// Action creators
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

// Async action creator
export const loginRequest = (email, password) => {
  return (dispatch) => {
    // Dispatch the login action
    dispatch(login(email, password));

    // Simulate API request
    return fetch('/dist/login-success.json')
      .then((response) => response.json())
      .then((data) => {
        // If API request succeeds
        if (data.success) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(() => {
        // If API request fails
        dispatch(loginFailure());
      });
  };
};

