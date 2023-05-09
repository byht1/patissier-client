import React from 'react';
import PropTypes from 'prop-types';
import { CourseItem } from './CourseItem';
import { CourseListContainer } from './CourseList.styled';

export const CourseList = ({ courses }) => {
  return (
    <CourseListContainer>
      {courses.map(course => (
        <CourseItem key={course._id} course={course} />
      ))}
    </CourseListContainer>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};
