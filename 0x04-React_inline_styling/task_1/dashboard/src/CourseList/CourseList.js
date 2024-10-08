// task_1/dashboard/src/CourseList/CourseList.js
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

function CourseList() {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
        <CourseListRow textFirstCell="React" textSecondCell="40" />
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    width: '100%',
    border: '1px solid #ddd',
  },
});

export default CourseList;

