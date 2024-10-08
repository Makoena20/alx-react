// notificationReducer.test.js

import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];

  it('should return the initial state', () => {
    const result = notificationReducer(undefined, {});
    expect(result.toJS()).toEqual({
      notifications: {},
      filter: 'DEFAULT'
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and normalize the data', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
    const result = notificationReducer(undefined, action);
    const expected = {
      notifications: {
        1: { id: 1, type: "default", value: "New course available", isRead: false },
        2: { id: 2, type: "urgent", value: "New resume available", isRead: false },
        3: { id: 3, type: "urgent", value: "New data available", isRead: false }
      },
      filter: 'DEFAULT'
    };
    expect(result.toJS()).toEqual(expected);
  });

  it('should handle MARK_AS_READ and update the notification', () => {
    const initialState = fromJS({
      notifications: {
        1: { id: 1, type: "default", value: "New course available", isRead: false },
        2: { id: 2, type: "urgent", value: "New resume available", isRead: false },
        3: { id: 3, type: "urgent", value: "New data available", isRead: false }
      },
      filter: 'DEFAULT'
    });

    const action = { type: MARK_AS_READ, index: 2 };
    const result = notificationReducer(initialState, action);
    expect(result.getIn(['notifications', '2', 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER and update the filter', () => {
    const initialState = fromJS({
      notifications: {},
      filter: 'DEFAULT'
    });

    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const result = notificationReducer(initialState, action);
    expect(result.get('filter')).toBe('URGENT');
  });
});

