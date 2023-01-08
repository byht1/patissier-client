import { Text, TitleH2 } from 'components/global/text';
import { CourseItem } from './CourseItem/CourseItem';
import { FlexContainer, Button, CourseList } from './Courses.styled';

const { Box } = require('components/global/Box');

export const Courses = () => {
  return (
    <Box pt={114} pb={100}>
      <FlexContainer>
        <TitleH2 mb={32} color="at">
          Курси та майстер-класи
        </TitleH2>
        <Text mb={30} color="t" lh="body" width={272}>
          Перегляньте найближчі по даті події, авторські курси та майстер-класи
        </Text>
        <Button>Дивитись усі заходи</Button>
        <CourseList>
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </CourseList>
      </FlexContainer>
    </Box>
  );
};