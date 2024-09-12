import React from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

const App = ({ isLoggedIn }) => {
  return (
    <div className="App">
      {isLoggedIn ? <CourseList /> : <Login />}
    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

