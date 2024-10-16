import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Redux Thunk for async actions
import { composeWithDevTools } from 'redux-devtools-extension'; // Redux DevTools Extension
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Your reducer

// Apply middleware with Redux DevTools
const store = createStore(
  uiReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Enable Redux DevTools and apply thunk middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

