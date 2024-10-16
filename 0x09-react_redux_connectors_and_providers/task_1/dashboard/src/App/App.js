import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import PropTypes from 'prop-types'; // Import PropTypes
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'; // Import actions

class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dashboard</h1>
          {isLoggedIn ? (
            <p>Welcome back, user!</p>
          ) : (
            <p>Please log in.</p>
          )}
          {/* Render the drawer based on displayDrawer prop */}
          {displayDrawer && <div className="notification-drawer">Notification Drawer</div>}
          <button onClick={displayNotificationDrawer}>Show Drawer</button>
          <button onClick={hideNotificationDrawer}>Hide Drawer</button>
        </header>
      </div>
    );
  }
}

// Update mapStateToProps to pass the displayDrawer from isNotificationDrawerVisible
const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

// Connect the component with Redux store and the action creators
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// Define propTypes for the component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

// Define defaultProps in case props are not passed
App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

