// task_3/dashboard/src/App/App.js

import React from 'react';
import CourseList from './CourseList';
import Login from './Login';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const App = () => {
  return (
    <div className="App">
      <BodySectionWithMarginBottom title="Course list">
        <CourseList />
      </BodySectionWithMarginBottom>
      <BodySectionWithMarginBottom title="Log in to continue">
        <Login />
      </BodySectionWithMarginBottom>
      <BodySection title="News from the School">
        <p>Some random text</p>
      </BodySection>
    </div>
  );
};

export default App;

