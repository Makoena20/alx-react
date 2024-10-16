import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginRequest, logout } from '../actions/uiActionCreators';

class App extends React.Component {
  render() {
    const { isLoggedIn, login, logout } = this.props;
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dashboard</h1>
          {!isLoggedIn ? (
            <div>
              <button onClick={() => login('email@example.com', 'password')}>Log In</button>
            </div>
          ) : (
            <div>
              <p>Welcome back, user!</p>
              <button onClick={logout}>Log Out</button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

// Update mapStateToProps to map user login state
const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
});

// Map loginRequest and logout action creators to props
const mapDispatchToProps = {
  login: loginRequest,
  logout,
};

// Define propTypes for the component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  login: PropTypes.func,
  logout: PropTypes.func,
};

// Define defaultProps
App.defaultProps = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

