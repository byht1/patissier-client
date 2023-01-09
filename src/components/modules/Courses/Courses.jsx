import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { Text, TitleH2 } from 'components/global/text';
import { CourseItem } from './CourseItem';
import { Button, CourseList } from './Courses.styled';

export const Courses = () => {
  return (
    <Container pt={114} pb={100}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleH2 mb={32} color="at">
          Курси та майстер-класи
        </TitleH2>
        <Text mb={30} color="t" lh="body" textAlign="center" width={272}>
          Перегляньте найближчі по даті події, авторські курси та майстер-класи
        </Text>
        <Button>Дивитись усі заходи</Button>
        <CourseList>
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </CourseList>
      </Box>
    </Container>
  );
};
