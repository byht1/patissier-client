import React from 'react';
// import PropTypes from 'prop-types';
// import { CourseItem } from './CourseItem';
import { CourseItem } from './CourseItemDaft';
import { CourseListContainer } from './CourseList.styled';

// export const CourseList = ({ courses }) => {
export const CourseList = () => {
  return (
    <CourseListContainer>
      {/* {courses.map(course => (
        <CourseItem key={course._id} course={course} />
      ))} */}
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </CourseListContainer>
  );
};

// CourseList.propTypes = {
//   courses: PropTypes.array.isRequired,
// };
