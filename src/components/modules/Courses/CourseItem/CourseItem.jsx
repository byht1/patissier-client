// import { ButtonsGhost } from 'components/global/button';
import {
  CourseCard,
  CardTitle,
  ImageList,
  ImageWpar,
  CourseImage,
  DetailsText,
  InfoList,
  InfoItem,
  InfoTitle,
  InfoText,
  CardFooter,
  Price,
  Button,
} from './CourseItem.styled';

import Image from 'img/courses/courseImg.jpg';

export const CourseItem = () => {
  return (
    <CourseCard>
      <CardTitle>Випічка</CardTitle>
      <ImageList>
        <ImageWpar>
          <CourseImage src={Image} alt="" loading="lazy" />
        </ImageWpar>
        <ImageWpar>
          <CourseImage src={Image} alt="" loading="lazy" />
        </ImageWpar>
      </ImageList>
      <DetailsText>
        На курсі ви навчитеся працювати з різними видами тіста, створювати
        круасани, сінабони та запашні булочки
      </DetailsText>
      <InfoList>
        <InfoItem>
          <InfoTitle>Група:</InfoTitle>
          <InfoText>15 осіб</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Термін:</InfoTitle>
          <InfoText>5 днів</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Старт:</InfoTitle>
          <InfoText>15 грудня</InfoText>
        </InfoItem>
      </InfoList>
      <CardFooter>
        <Price>10 000грн.</Price>
        <Button>Детальніше</Button>
      </CardFooter>
    </CourseCard>
  );
};
