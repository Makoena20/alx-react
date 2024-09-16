// task_1/dashboard/src/Header/Header.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src="logo.png" className={css(styles.logo)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #E0354B',
  },
  logo: {
    width: '200px',
  },
});

export default Header;
// task_1/dashboard/src/Header/Header.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src="logo.png" className={css(styles.logo)} alt="logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #E0354B',
  },
  logo: {
    width: '200px',
  },
});

export default Header;

