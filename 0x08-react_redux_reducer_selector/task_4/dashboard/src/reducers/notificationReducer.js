// notificationReducer.js

import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

// Initial state
const initialState = fromJS({
  notifications: {},
  filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeDeep({ notifications: normalizedData.entities.notifications });

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;

