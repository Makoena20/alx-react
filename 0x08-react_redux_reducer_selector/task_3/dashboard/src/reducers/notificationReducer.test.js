// notificationReducer.test.js

import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {

  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];

  // Test that the default state returns correctly
  it('should return the default state with an empty notifications array and DEFAULT filter', () => {
    const result = notificationReducer(undefined, {});
    expect(result).toEqual({
      notifications: [],
      filter: 'DEFAULT'
    });
  });

  // Test FETCH_NOTIFICATIONS_SUCCESS action
  it('should handle FETCH_NOTIFICATIONS_SUCCESS and set isRead to false for all notifications', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };
    const result = notificationReducer(undefined, action);
    expect(result).toEqual(expectedState);
  });

  // Test MARK_AS_READ action
  it('should handle MARK_AS_READ and update the isRead property of the right notification', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };
    const result = notificationReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

  // Test SET_TYPE_FILTER action
  it('should handle SET_TYPE_FILTER and update the filter state', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      filter: 'URGENT',
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };
    const result = notificationReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });

});

