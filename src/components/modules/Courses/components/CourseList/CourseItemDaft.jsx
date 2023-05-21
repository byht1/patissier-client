import React from 'react';
import {
  CourseCard,
  ImageWpar,
  CourseImage,
  InfoList,
  InfoItem,
  CardFooter,
  ToDetailsLink,
} from './CourseList.styled';

import Image from 'img/courses/випічка.jpg';
import { Text, TitleH4 } from 'components/global/text';
import { Box } from 'components/global/Box';

export const CourseItem = () => {
  const courseId = '6457cce091759bc4f4d25866';
  return (
    <CourseCard>
      <ImageWpar>
        <CourseImage src={Image} alt="" loading="lazy" />
      </ImageWpar>
      <Box padding="20px">
        <TitleH4 textAlign="center" color="wt" mb={8}>
          Випічка
        </TitleH4>
        <Text mb={20} lh="body" textAlign="center" color="t">
          Курси
        </Text>
        <Text mb={12} lh="body" color="t">
          На курсі ви навчитеся працювати з різними видами тіста, створювати
          круасани, сінабони та запашні булочки
        </Text>
        <InfoList>
          <InfoItem>
            <Text weight={700} size={16} lh="heading">
              Група:
            </Text>
            <Text weight={400} size={16} lh="heading">
              15 осіб
            </Text>
          </InfoItem>
          <InfoItem>
            <Text weight={700} size={16} lh="heading">
              Термін:
            </Text>
            <Text weight={400} size={16} lh="heading">
              5 днів
            </Text>
          </InfoItem>
        </InfoList>
        <CardFooter>
          <Text weight={600} size={20} lh="big">
            10 000 грн
          </Text>
          <ToDetailsLink to={`/courses/${courseId}`}>Детальніше</ToDetailsLink>
        </CardFooter>
      </Box>
    </CourseCard>
  );
};
