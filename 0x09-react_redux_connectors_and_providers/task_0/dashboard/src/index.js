// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer'; // Assuming you already created this reducer

// Create a Redux store containing the uiReducer
const store = createStore(uiReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

