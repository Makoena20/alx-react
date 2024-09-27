import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseListRow.css';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // useState to manage whether the row is checked
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Style for checked row
  const rowChecked = {
    backgroundColor: '#e6e4e4',
  };

  if (isHeader) {
    // Render header rows
    return (
      <tr className="CourseListRow">
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  // Render simple rows
  return (
    <tr className="CourseListRow" style={isChecked ? rowChecked : {}}>
      <td>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

