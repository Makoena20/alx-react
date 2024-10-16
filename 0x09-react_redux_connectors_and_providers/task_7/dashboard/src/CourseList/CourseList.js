import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { courses } = this.props;

    return (
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {courses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" isHeader={false} />
          ) : (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                id={course.id}
                textFirstCell={course.name}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))
          )}
        </tbody>
      </table>
    );
  }
}

CourseList.propTypes = {
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  courses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

