// task_1/dashboard/src/BodySection/BodySectionWithMarginBottom.js
import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.marginBottom)}>
      <BodySection {...props} />
    </div>
  );
}

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px',
  },
});

export default BodySectionWithMarginBottom;

