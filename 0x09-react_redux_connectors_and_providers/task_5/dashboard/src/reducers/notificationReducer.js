import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  notifications: [],
  loading: false
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);
    
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: action.data
      });

    default:
      return state;
  }
};

export default notificationReducer;

