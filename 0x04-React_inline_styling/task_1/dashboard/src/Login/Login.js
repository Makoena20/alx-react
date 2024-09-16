// task_1/dashboard/src/Login/Login.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
      <h2>Login to access the full dashboard</h2>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: '30px',
  },
});

export default Login;

