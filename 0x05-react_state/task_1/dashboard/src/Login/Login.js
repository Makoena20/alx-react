import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    // Bind functions
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.updateSubmitButton);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.updateSubmitButton);
  }

  updateSubmitButton() {
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="Login">
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className="input-container">
            <input
              type="submit"
              value="Submit"
              disabled={!enableSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

