import React, { Component } from 'react';
import { AppContext, user as defaultUser, logOut as defaultLogOut } from './AppContext';
import Login from '../Login/Login';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: defaultUser,
    });
  }

  render() {
    const { user, logOut } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className="App">
          <Header />
          <div className="App-body">
            {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

