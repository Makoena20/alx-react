import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import './App.css';

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props; // Destructure the isLoggedIn prop from the Redux state
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dashboard</h1>
          {isLoggedIn ? (
            <p>Welcome back, user!</p>
          ) : (
            <p>Please log in.</p>
          )}
        </header>
      </div>
    );
  }
}

// mapStateToProps function to map state from uiReducer to component's props
const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'), // Assuming the state uses Immutable.js
});

// Export the connected component
export default connect(mapStateToProps)(App);

