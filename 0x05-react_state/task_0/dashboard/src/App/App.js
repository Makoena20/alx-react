import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };

    // Bind the functions
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer } = this.state;

    return (
      <div className="App">
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <header className="App-header">
          <h1>School dashboard</h1>
        </header>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
        <footer className="App-footer">
          <p>Copyright 2021 - Holberton School</p>
        </footer>
      </div>
    );
  }
}

export default App;

