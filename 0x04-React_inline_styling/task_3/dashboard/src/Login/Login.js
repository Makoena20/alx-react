// task_3/dashboard/src/Login/Login.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <h2>Login</h2>
      <form className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email" className={css(styles.label)}>Email</label>
          <input type="email" id="email" className={css(styles.input)} />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password" className={css(styles.label)}>Password</label>
          <input type="password" id="password" className={css(styles.input)} />
        </div>
        <div className={css(styles.buttonContainer)}>
          <button type="submit" className={css(styles.button)}>OK</button>
        </div>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: '20px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      padding: '10px',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    width: '100%',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    width: '300px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  buttonContainer: {
    marginTop: '20px',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    width: '100%',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
});

export default Login;

