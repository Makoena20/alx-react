import { fromJS } from 'immutable';
import { LOGIN_SUCCESS, LOGOUT } from '../actions/uiActionCreators';

const initialState = fromJS({
  isUserLoggedIn: false,
  user: null,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true).set('user', action.user);
    case LOGOUT:
      return state.set('isUserLoggedIn', false).set('user', null);
    default:
      return state;
  }
};

export default uiReducer;

