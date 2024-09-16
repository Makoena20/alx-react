// task_1/dashboard/src/App/App.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App() {
  return (
    <>
      <Notifications />
      <div className={css(styles.body)}>
        <Header />
        <Login />
        <CourseList />
        <Footer />
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: '20px',
  },
  footer: {
    textAlign: 'center',
    borderTop: '2px solid #E0354B',
    paddingTop: '1rem',
  },
});

export default App;

