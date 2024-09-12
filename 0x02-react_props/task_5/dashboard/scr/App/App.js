// task_5/dashboard/src/App/App.js
import React from 'react';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
];

function App() {
  return (
    <div className="App">
      <Notifications listNotifications={listNotifications} />
      <CourseList listCourses={listCourses} />
    </div>
  );
}

export default App;

