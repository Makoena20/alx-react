import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Assuming uiReducer is already created

// Apply the thunk middleware to the store
const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

