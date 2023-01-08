import {
  CourseCard,
  ImageList,
  ImageWpar,
  CourseImage,
  InfoList,
  InfoItem,
  CardFooter,
  Button,
} from './CourseItem.styled';

import Image from 'img/courses/courseImg.jpg';
import { Text, TitleH4 } from 'components/global/text';

export const CourseItem = () => {
  return (
    <CourseCard>
      <TitleH4 textAlign="center" color="at" mb={24}>
        Випічка
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
        <Button>Детальніше</Button>
      </CardFooter>
    </CourseCard>
  );
};
