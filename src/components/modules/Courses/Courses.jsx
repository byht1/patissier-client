import { Box } from 'components/global/Box';
import { Container } from 'components/global/Container';
import { Text, TitleH2 } from 'components/global/text';
import { CourseItem } from './CourseItem';
import { CourseList } from './Courses.styled';
import { ReadMoreLink } from 'components/global/ReadMoreLink';

export const Courses = () => {
  return (
    <Container pt={100} pb={100}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TitleH2 mb={32} color="at">
          Курси та майстер-класи
        </TitleH2>
        <Text mb={24} color="t" lh="body" textAlign="center" width={272}>
          Перегляньте найближчі події, авторські курси та майстер-класи
        </Text>
        <ReadMoreLink to="/courses" ml={"auto"}>Дивитись усі заходи</ReadMoreLink>
        <CourseList>
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </CourseList>
      </Box>
    </Container>
  );
};
