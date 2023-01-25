// import PropTypes from 'prop-types';
import {
  CourseInnerWrap,
  CourseItem,
  ImageList,
  ImageWpar,
  CourseImage,
  InfoList,
  InfoItem,
  CardFooter,
} from './CourseList.styled';

import Image from 'img/courses/courseImg.jpg';
import { Text, TitleH4 } from 'components/global/text';
import { ButtonsGhost } from 'components/global/button';

export const CourseList = ({ courses }) => {
  if (!courses) return;
  // console.log('courseList', courses);
  return (
    <CourseInnerWrap>
      {courses.map(course => (
        <CourseItem key={course._id}>
          <TitleH4 textAlign="center" color="at" mb={24}>
            {course.category}
          </TitleH4>
          <ImageList>
            <ImageWpar>
              <CourseImage src={Image} alt="" loading="lazy" />
            </ImageWpar>
            <ImageWpar>
              <CourseImage src={Image} alt="" loading="lazy" />
            </ImageWpar>
          </ImageList>
          <Text mb={24} lh="body">
            На курсі ви навчитеся працювати з різними видами тіста, створювати
            круасани, сінабони та запашні булочки
          </Text>
          <InfoList>
            <InfoItem>
              <Text weight={700} size={16} lh="big">
                Група:
              </Text>
              <Text weight={400} size={20} lh="big">
                15 осіб
              </Text>
            </InfoItem>
            <InfoItem>
              <Text weight={700} size={16} lh="big">
                Термін:
              </Text>
              <Text weight={400} size={20} lh="big">
                5 днів
              </Text>
            </InfoItem>
            <InfoItem>
              <Text weight={700} size={16} lh="big">
                Старт:
              </Text>
              <Text weight={400} size={20} lh="big">
                15 грудня
              </Text>
            </InfoItem>
          </InfoList>
          <CardFooter>
            <Text weight={600} size={20} lh="big">
              10 000грн.
            </Text>
            <ButtonsGhost p="16px 40px">Детальніше</ButtonsGhost>
          </CardFooter>
        </CourseItem>
      ))}
    </CourseInnerWrap>
  );
};

// CourseList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//     })
//   ),
// };
