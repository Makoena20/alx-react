import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { 
  displayNotificationDrawer, 
  hideNotificationDrawer, 
  loginRequest, 
  logout 
} from '../actions/uiActionCreators'; // Import the actions

class App extends Component {
  
  // Handle login via the loginRequest action
  handleLogin = (email, password) => {
    const { login } = this.props;
    login(email, password);
  };

  render() {
    const { 
      isLoggedIn, 
      displayDrawer, 
      displayNotificationDrawer, 
      hideNotificationDrawer, 
      logout 
    } = this.props;

    return (
      <div className="App">
        {/* Render the Header */}
        <Header />

        <hr />

        {/* Render the login/logout depending on state */}
        {!isLoggedIn ? (
          <Login onSubmit={this.handleLogin} />
        ) : (
          <div>
            <p>Welcome, you are logged in!</p>
            <button onClick={logout}>Logout</button>
          </div>
        )}

        {/* Notification Drawer */}
        <div className="Notifications">
          <button onClick={displayNotificationDrawer}>Show Notifications</button>
          {displayDrawer ? (
            <div className="notification-drawer">
              <p>Your notifications will appear here</p>
              <button onClick={hideNotificationDrawer}>Hide Notifications</button>
            </div>
          ) : null}
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

// Map Redux state to component props
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  };
};

// Map dispatch actions to component props
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout
};

// Define prop types for better type-checking
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

// Define default props in case the store is not available yet
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

