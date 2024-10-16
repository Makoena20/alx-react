import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  courses: courseReducer,       // maps to courseReducer
  notifications: notificationReducer, // maps to notificationReducer
  ui: uiReducer,                 // maps to uiReducer
});

export default rootReducer;

