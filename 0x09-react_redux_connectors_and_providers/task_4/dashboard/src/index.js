import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App/App';
import rootReducer from './reducers/rootReducer';  // Import the rootReducer

// Create store using the rootReducer
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Support for Redux DevTools and middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

