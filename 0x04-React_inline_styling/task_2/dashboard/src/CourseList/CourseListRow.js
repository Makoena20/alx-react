// task_2/dashboard/src/CourseList/CourseListRow.js
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell = null }) {
  const headerStyle = css(isHeader ? styles.headerRow : styles.row);
  const thStyle = css(isHeader ? styles.headerCell : styles.defaultCell);

  return (
    <tr className={headerStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={thStyle}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={thStyle}>{textFirstCell}</th>
            <th className={thStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={thStyle}>{textFirstCell}</td>
          <td className={thStyle}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  defaultCell: {
    padding: '10px',
    border: '1px solid #ddd',
  },
  headerCell: {
    fontWeight: 'bold',
    padding: '10px',
    border: '1px solid #ddd',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

