import React, { Component } from 'react';
import { AppContext, user as defaultUser, logOut as defaultLogOut } from './AppContext';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, value: 'New course available', type: 'default' },
        { id: 2, value: 'New resume available', type: 'urgent' },
        { id: 3, value: 'New data available', type: 'urgent' },
      ],
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notif) => notif.id !== id),
    }));
  }

  render() {
    const { user, logOut, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <div className="App">
          <Header />
          <Notifications
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className="App-body">
            {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

