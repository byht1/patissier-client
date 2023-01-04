// import { Text, TitleH2 } from 'components/global/text';
// import { ButtonsGhost } from 'components/global/button';
import { CourseItem } from './CourseItem/CourseItem';
import {
  FlexContainer,
  TopTitle,
  TopText,
  Button,
  CourseList,
} from './Courses.styled';

const { Box } = require('components/global/Box');
// const { Container } = require('components/global/Container');

export const Courses = () => {
  return (
    <>
      <Box pt={114} pb={100}>
        <FlexContainer display="flex">
          <TopTitle>Курси та майстер-класи</TopTitle>
          <TopText>
            Перегляньте найближчі по даті події, авторські курси та
            майстер-класи
          </TopText>
          <Button>Дивитись усі заходи</Button>
          <CourseList>
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </CourseList>
        </FlexContainer>
      </Box>
    </>
  );
};
