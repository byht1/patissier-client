import React from 'react';
import PropTypes from 'prop-types';

import { CourseItem } from '../CourseItem';
import { CourseListWrap } from './CourseList.styled';

export const CourseList = ({ courses }) => {
  if (!courses) return;

  return (
    <CourseListWrap>
      {courses.map(course => (
        <CourseItem key={course._id} course={course} />
      ))}
    </CourseListWrap>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
}
