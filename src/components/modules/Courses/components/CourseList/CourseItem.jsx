import React from 'react';
import PropTypes from 'prop-types';
import {
  CourseCard,
  ImageWpar,
  CourseImage,
  InfoList,
  InfoItem,
  CardFooter,
  ToDetailsLink,
} from './CourseList.styled';

// import Image from 'img/courses/випічка.jpg';
import { Text, TitleH4, Box } from 'components/global';

export const CourseItem = ({ course }) => {
  const {
    _id: courseId,
    category,
    type,
    previewText,
    totalPlaces,
    courseDuration,
    images,
    groups,
  } = course;

  const courseType = type === 'courses' ? 'Курс' : 'Майстер-клас';
  const price = groups[0]?.price;

  return (
    <CourseCard>
      <ImageWpar>
        <CourseImage src={images[0]} alt={category} loading="lazy" />
      </ImageWpar>
      <Box padding="20px">
        <TitleH4 textAlign="center" color="wt" mb={8}>
          {category}
        </TitleH4>
        <Text mb={20} lh="body" textAlign="center" color="t">
          {courseType}
        </Text>
        <Text mb={12} lh="body" color="t">
          {previewText}
        </Text>
        <InfoList>
          <InfoItem>
            <Text weight={700} size={16} lh="heading">
              Група:
            </Text>
            <Text weight={400} size={16} lh="heading">
              {totalPlaces} осіб
            </Text>
          </InfoItem>
          <InfoItem>
            <Text weight={700} size={16} lh="heading">
              Термін:
            </Text>
            <Text weight={400} size={16} lh="heading">
              {courseDuration} днів
            </Text>
          </InfoItem>
        </InfoList>
        <CardFooter>
          <Text weight={600} size={20} lh="big">
            {price} грн
          </Text>
          <ToDetailsLink to={`/courses/${courseId}`}>Детальніше</ToDetailsLink>
        </CardFooter>
      </Box>
    </CourseCard>
  );
};

CourseItem.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    previewText: PropTypes.string.isRequired,
    totalPlaces: PropTypes.number.isRequired,
    courseDuration: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    groups: PropTypes.array.isRequired,
  }).isRequired,
};
