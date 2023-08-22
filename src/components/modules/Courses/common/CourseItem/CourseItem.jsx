import React from 'react';

import { Box } from 'components/global/Box';
import { Text } from 'components/global/text';
import {
  DetailsLink,
  CourseInfo,
  CourseWrap,
  ImageWrap,
  CourseImg,
  CoursePrice,
} from './CourseItem.styled';

export const CourseItem = ({ course }) => {
  const {
    _id: courseID,
    category,
    type,
    previewText,
    totalPlaces,
    images,
    groups,
    courseDuration,
  } = course;

  return (
    <CourseWrap>
      <ImageWrap>
        <CourseImg src={images[0]} alt="Фото десерту" />
      </ImageWrap>
      <Box p={6}>
        <Text
          textAlign="center"
          size={20}
          mb={8}
          weight={600}
          family="montserrat"
        >
          {category}
        </Text>
        <Text textAlign="center" mb={20} color="t" lh="big">
          {type === 'courses' ? 'Курс' : 'Майстер-клас'}
        </Text>
        <Text color="t" lh="big" mb={12}>
          {previewText}
        </Text>
        <Text size={16} weight={700} mb={8} lh="body">
          Група:
          <CourseInfo> &nbsp;{totalPlaces} осіб</CourseInfo>
        </Text>
        <Text size={16} weight={700} lh="body">
          Термін: <CourseInfo>&nbsp;{courseDuration} </CourseInfo>
        </Text>
        <Box
          mt={5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text size={20}>
            <CoursePrice>
              {groups[0] ? groups[0].price : '?????'} грн
            </CoursePrice>
          </Text>
          <DetailsLink to={`/courses/${courseID}`}>Детальніше</DetailsLink>
        </Box>
      </Box>
    </CourseWrap>
  );
};
