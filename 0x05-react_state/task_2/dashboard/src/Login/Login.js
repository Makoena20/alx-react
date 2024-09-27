import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  render() {
    return (
      <div className="Login">
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className="input-container">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;

